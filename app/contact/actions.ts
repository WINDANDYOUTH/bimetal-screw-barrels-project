"use server";

import { Resend } from "resend";
import { Buffer } from "node:buffer";
import { z } from "zod";

export type ContactFormState = {
  success: boolean | null;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    country?: string[];
    phone?: string[];
    application?: string[];
    message?: string[];
    file?: string[];
    form?: string[];
  };
};

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Company must be at least 2 characters."),
  country: z.string().min(1, "Please choose a country."),
  phone: z.string().optional(),
  application: z.string().min(1, "Please select an application type."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const emailRecipient = process.env.CONTACT_EMAIL_TO ?? "sales@screwbarrelpro.com";
const emailSender =
  process.env.CONTACT_EMAIL_FROM ?? "Screw Barrel Group <contact@screwbarrelpro.com>";

export async function handleContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawName = formData.get("name");
  const rawEmail = formData.get("email");
  const rawCompany = formData.get("company");
  const rawCountry = formData.get("country");
  const rawPhone = formData.get("phone");
  const rawApplication = formData.get("application");
  const rawMessage = formData.get("message");
  const fileEntry = formData.get("file");

  const values = {
    name: typeof rawName === "string" ? rawName.trim() : "",
    email: typeof rawEmail === "string" ? rawEmail.trim() : "",
    company: typeof rawCompany === "string" ? rawCompany.trim() : "",
    country: typeof rawCountry === "string" ? rawCountry.trim() : "",
    phone:
      typeof rawPhone === "string" && rawPhone.trim().length > 0 ? rawPhone.trim() : undefined,
    application: typeof rawApplication === "string" ? rawApplication.trim() : "",
    message: typeof rawMessage === "string" ? rawMessage.trim() : "",
  };

  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors: {
        name: errors.name,
        email: errors.email,
        company: errors.company,
        country: errors.country,
        phone: errors.phone,
        application: errors.application,
        message: errors.message,
      },
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: "Email service is not configured.",
      errors: {
        form: ["Missing RESEND_API_KEY environment variable."],
      },
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, company, country, phone, application, message } = parsed.data;

  const MAX_BYTES = 5 * 1024 * 1024;
  const attachments: {
    filename: string;
    content: string;
    contentType?: string;
  }[] = [];
  let attachmentNote = "No drawing uploaded.";

  if (fileEntry instanceof File && fileEntry.size > 0) {
    if (fileEntry.size > MAX_BYTES) {
      return {
        success: false,
        message: "Please correct the highlighted fields.",
        errors: {
          file: ["File size must be under 5 MB."],
        },
      };
    }

    const buffer = Buffer.from(await fileEntry.arrayBuffer());
    attachments.push({
      filename: fileEntry.name,
      content: buffer.toString("base64"),
      contentType: fileEntry.type || "application/octet-stream",
    });
    attachmentNote = `Drawing uploaded: ${fileEntry.name} (${Math.round(fileEntry.size / 1024)} KB)`;
  }

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Country: ${country}`,
    `Phone: ${phone ?? "N/A"}`,
    `Application: ${application}`,
    "",
    "Message:",
    message,
    "",
    attachmentNote,
  ].join("\n");

  try {
    await resend.emails.send({
      from: emailSender,
      to: [emailRecipient],
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: textBody,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return {
      success: true,
      message: "Thanks for reaching out! We will reply within 24 hours.",
    };
  } catch (error) {
    console.error("Resend email error", error);

    return {
      success: false,
      message: "We could not send your message. Please try again later.",
      errors: {
        form: [
          "Email delivery failed. If the problem persists, contact us via phone or WhatsApp.",
        ],
      },
    };
  }
}



