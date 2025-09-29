'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import type { ContactFormState } from './actions';
import { handleContactForm } from './actions';

const countries = [
  'China',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Vietnam',
  'Indonesia',
  'Philippines',
  'Other',
];

const applications = [
  'Injection molding',
  'Extrusion',
  'Blow molding',
  'Recycling / pelletizing',
  'Compounding',
  'Other',
];

const initialState: ContactFormState = {
  success: null,
  message: '',
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-brand-steel transition hover:bg-orange-300 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? 'Sending…' : 'Submit enquiry (response in under 24 hours)'}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useActionState<ContactFormState, FormData>(handleContactForm, initialState);

  return (
    <div className="flex flex-1 flex-col bg-brand-surface">
      <section className="bg-brand-navy text-white">
        <div className="max-container grid gap-10 py-16 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] md:py-24">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Talk with our engineers in Southeast Asia time zones
            </h1>
            <p className="text-sm text-blue-100" data-locale-note="Mention 24 hour response promise plainly.">
              Send drawings, machine models, or wear photos for a custom quote. Our hotline, email, and chat channels respond within 24 hours across English, Mandarin, Bahasa Indonesia, Thai, and Vietnamese.
            </p>
            <div className="space-y-2 text-sm text-blue-100">
              <p>
                <strong>CN Hotline:</strong> +86 755 1234 5678
              </p>
              <p>
                <strong>SEA Hotline:</strong> +65 3129 8765
              </p>
              <p>
                <strong>Email:</strong> sales@screwbarrelpro.com
              </p>
              <p>
                <strong>WhatsApp / WeChat:</strong> +86 139 0000 0000
              </p>
              <p>
                <strong>HQ:</strong> No. 168 Precision Road, Ningbo, China
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <a
                href="tel:+8675512345678"
                className="rounded-full bg-orange-400 px-5 py-3 text-brand-steel transition hover:bg-orange-300"
              >
                Call hotline
              </a>
              <a
                href="https://wa.me/8613900000000"
                className="rounded-full border border-white/30 px-5 py-3 text-white transition hover:border-white"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
            <div className="relative h-64 overflow-hidden rounded-3xl bg-brand-surface">
              <iframe
                title="SEA logistics map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.857853783188!2d103.851959!3d1.29027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1855c038bfbf%3A0xf9e6db73b730cd64!2sSingapore!5e0!3m2!1sen!2ssg!4v00000000000"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-xs text-blue-100">
              Logistics coverage includes bonded warehouses in Shenzhen, Singapore, and Penang for faster customs clearance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 lg:py-24">
        <div className="max-container grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            {state.success === true ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
                {state.message || 'Message received. Our team will reach out shortly.'}
              </div>
            ) : null}

            {state.success === false && state.message ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                {state.message}
              </div>
            ) : null}

            {state.errors?.form?.length ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                {state.errors.form.join(' ')}
              </div>
            ) : null}

            <form
              action={formAction}
              className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-brand"
              data-locale-note="Ensure field labels stay concise for translations."
            >
              <h2 className="text-2xl font-semibold text-brand-navy">Send us your project</h2>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-brand-steel">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Full name"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand-steel focus:border-orange-400 focus:outline-none"
                  />
                  {state.errors?.name?.length ? (
                    <p className="text-xs text-red-500">{state.errors.name.join(' ')}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-semibold text-brand-steel">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Company name"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand-steel focus:border-orange-400 focus:outline-none"
                  />
                  {state.errors?.company?.length ? (
                    <p className="text-xs text-red-500">{state.errors.company.join(' ')}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="country" className="text-sm font-semibold text-brand-steel">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand-steel focus:border-orange-400 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select country
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {state.errors?.country?.length ? (
                    <p className="text-xs text-red-500">{state.errors.country.join(' ')}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-brand-steel">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand-steel focus:border-orange-400 focus:outline-none"
                  />
                  {state.errors?.email?.length ? (
                    <p className="text-xs text-red-500">{state.errors.email.join(' ')}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-brand-steel">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Include country code"
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand-steel focus:border-orange-400 focus:outline-none"
                  />
                  {state.errors?.phone?.length ? (
                    <p className="text-xs text-red-500">{state.errors.phone.join(' ')}</p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="application" className="text-sm font-semibold text-brand-steel">
                    Application type
                  </label>
                  <select
                    id="application"
                    name="application"
                    required
                    className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand-steel focus:border-orange-400 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select application
                    </option>
                    {applications.map((application) => (
                      <option key={application} value={application}>
                        {application}
                      </option>
                    ))}
                  </select>
                  {state.errors?.application?.length ? (
                    <p className="text-xs text-red-500">{state.errors.application.join(' ')}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-brand-steel">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Share machine model, screw diameter, resin mix, and output goals."
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-brand-steel focus:border-orange-400 focus:outline-none"
                />
                {state.errors?.message?.length ? (
                  <p className="text-xs text-red-500">{state.errors.message.join(' ')}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="file" className="text-sm font-semibold text-brand-steel">
                  Upload drawing (optional)
                </label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  className="rounded-2xl border border-dashed border-slate-300 px-4 py-3 text-sm text-brand-gray"
                  accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png"
                />
                <p className="text-xs text-brand-gray">
                  Accepted formats: PDF, DWG, STEP, JPG. Max 5 MB. Secure upload with NDA on request.
                </p>
                {state.errors?.file?.length ? (
                  <p className="text-xs text-red-500">{state.errors.file.join(' ')}</p>
                ) : null}
              </div>

              <SubmitButton />
            </form>
          </div>

          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-brand">
            <h2 className="text-2xl font-semibold text-brand-navy">Regional logistics and service</h2>
            <ul className="space-y-3 text-sm text-brand-gray">
              <li>
                <strong>Warehouses:</strong> Shenzhen (CN), Singapore (SG), Penang (MY) with bonded stock and urgent air freight.
              </li>
              <li>
                <strong>On-site service:</strong> Measurement, installation, and training across China, Singapore, Malaysia, Thailand, Vietnam, Indonesia.
              </li>
              <li>
                <strong>Certifications:</strong> ISO9001, SGS material testing, CE machinery compliance.
              </li>
            </ul>
            <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
              <h3 className="text-lg font-semibold text-brand-steel">Join as a distributor</h3>
              <p className="mt-2 text-sm text-brand-gray" data-locale-note="Explain partnership benefits clearly for translation.">
                Southeast Asia plastics equipment dealers and service firms can access co-branded marketing, joint training, and priority stocking terms.
              </p>
              <a
                href="mailto:partners@screwbarrelpro.com"
                className="mt-4 inline-flex rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-brand-steel transition hover:bg-orange-300"
              >
                Apply to be a distributor
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}


