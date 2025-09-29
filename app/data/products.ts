export type Product = {
  slug: string;
  name: string;
  category: string;
  heroImage: string;
  overview: string;
  summary: string;
  specs: { label: string; value: string }[];
  parameters: { label: string; value: string }[];
  compatibleMachines: string[];
  compatibleResins: string[];
  materialComposition: string[];
  heatTreatment: string[];
  customization: string[];
  leadTime: string;
  afterSales: string[];
  downloads: { label: string; href: string }[];
  benefits: string[];
  localization: string;
};

export const products: Product[] = [
  {
    slug: "bimetallic-screw-barrel",
    name: "Bimetallic Screw Barrel",
    category: "Bimetallic Screw Barrel",
    heroImage: "/images/product-placeholder.svg",
    overview:
      "Ni-based alloy liner with tungsten carbide reinforcement for extreme abrasion and corrosion resistance in filled and recycled polymers.",
    summary:
      "Ideal for PVC, glass fiber reinforced PP, and engineering resin compounding lines requiring long service life in harsh chemistries.",
    specs: [
      { label: "Hardness", value: "Liner 62 to 68 HRC" },
      { label: "Diameter", value: "14 mm to 220 mm" },
      { label: "Max Length", value: "8000 mm" },
    ],
    parameters: [
      { label: "Liner Alloy", value: "Ni60, Ni50CrMo with WC reinforcement" },
      { label: "Base Material", value: "38CrMoAlA or 42CrMo" },
      { label: "Wear Layer Thickness", value: "1.5 to 2.5 mm" },
      { label: "Straightness", value: "0.02 mm per 1000 mm" },
    ],
    compatibleMachines: [
      "Haitian MA, SA, Jupiter",
      "Chen Hsong SM",
      "JSW J series",
      "Battenfeld extrusion lines",
    ],
    compatibleResins: [
      "PVC with CaCO3 and stabilisers",
      "Glass filled PP and PA",
      "Recycled HDPE and PP",
      "Flame retardant PC and ABS",
    ],
    materialComposition: [
      "Ni-based liner (Ni > 60 percent, WC 30 percent)",
      "Base: nitrided alloy steel",
    ],
    heatTreatment: [
      "Vacuum hardening and tempering",
      "HVOF spray welding for liner bonding",
      "Stress relief and straightening",
    ],
    customization: [
      "Single, parallel twin, or conical twin",
      "Barrier, mixing, and Maddock sections",
      "Customised feed and compression ratios",
      "Nitrided or chrome-plated exterior",
    ],
    leadTime: "Standard 25 to 30 days; expedited 15 days for existing drawings.",
    afterSales: [
      "Metallurgical failure analysis",
      "On-site measurement and installation guidance",
      "Regional stocking plan reviews",
    ],
    downloads: [
      { label: "Bimetallic screw barrel data sheet", href: "/downloads/bimetallic-datasheet.pdf" },
    ],
    benefits: [
      "35 to 50 percent longer wear life versus standard nitrided barrels",
      "Improved melt homogeneity at high filler loadings",
      "Lower maintenance downtime with refurbishment options",
    ],
    localization:
      "Keep alloy codes (Ni60, WC) in English; translate technical verbs plainly for SEA languages.",
  },
  {
    slug: "haitian-injection-machine-screw-barrel",
    name: "Haitian Injection Machine Screw Barrel",
    category: "Haitian Injection Machine Screw Barrel",
    heroImage: "/images/product-placeholder.svg",
    overview:
      "OEM compatible replacement screws and barrels tuned for Haitian MA, SA, and Jupiter injection platforms.",
    summary:
      "Configured for fast color change, stable plastication, and reduced screw head wear on high-output Haitian machines.",
    specs: [
      { label: "Machine Coverage", value: "MA, SA, Jupiter 160 to 3000 tonnage" },
      { label: "Hardness", value: "Screw 58 to 60 HRC" },
      { label: "Lead Time", value: "15 to 25 days" },
    ],
    parameters: [
      { label: "Material Options", value: "38CrMoAlA nitrided, SKD61, or bimetal liner" },
      { label: "Compression Ratios", value: "1.8:1 to 2.6:1" },
      { label: "Surface Finish", value: "Ra 0.4 to 0.6" },
      { label: "Tolerances", value: "OD +/-0.02 mm, ID +/-0.01 mm" },
    ],
    compatibleMachines: [
      "Haitian MA/SA",
      "Haitian Jupiter",
      "Zhafir electric series",
    ],
    compatibleResins: [
      "PP and PE packaging grades",
      "ABS and PC/ABS",
      "Nylon with 15 to 30 percent glass",
    ],
    materialComposition: [
      "Option A: nitrided 38CrMoAlA",
      "Option B: SKD61 through hardened",
      "Option C: Ni60 liner with 45# barrel base",
    ],
    heatTreatment: [
      "Gas nitriding",
      "Vacuum hardening",
      "Induction hardening for screw tips",
    ],
    customization: [
      "Mixing head geometries (double barrier, pineapple)",
      "Screw tip and ring kits",
      "Color change polishing",
    ],
    leadTime: "15 to 25 days depending on machine model.",
    afterSales: [
      "Screw pull-out service in China and SEA",
      "On-site wear measurement reports",
      "Installation torque guidance",
    ],
    downloads: [
      { label: "Haitian compatibility matrix", href: "/downloads/haitian-compatibility.pdf" },
    ],
    benefits: [
      "Improved plastication stability across recycled content blends",
      "Reduced screw head erosion with upgraded alloys",
      "Plug-and-play assembly with OEM interfaces",
    ],
    localization:
      "Machine series names stay in English; translate benefits with action verbs.",
  },
  {
    slug: "fully-hardened-screws",
    name: "Fully Hardened Screws",
    category: "Fully Hardened Screws",
    heroImage: "/images/product-placeholder.svg",
    overview:
      "Through hardened SKD61, D2, and CPM tool steel screws built for high shear compounding and color masterbatch lines.",
    summary:
      "For processors requiring consistent torque transmission, scratch-resistant flanks, and extended mixing section life.",
    specs: [
      { label: "Hardness", value: "58 to 60 HRC core" },
      { label: "Diameter", value: "18 mm to 180 mm" },
      { label: "Material", value: "SKD61, D2, CPM9V" },
    ],
    parameters: [
      { label: "Straightness", value: "0.015 mm per 1000 mm" },
      { label: "Surface Treatment", value: "TiN or CrN optional" },
      { label: "Mixing Sections", value: "Double barrier, Maddock, pineapple" },
    ],
    compatibleMachines: [
      "Two-component injection machines",
      "Color masterbatch extruders",
      "Engineering polymer extrusion",
    ],
    compatibleResins: [
      "High viscosity PA and PEEK",
      "PC/ABS with flame retardants",
      "LCP and PPS blends",
    ],
    materialComposition: [
      "SKD61 or D2 tool steel",
      "Optional CPM series powder steel",
    ],
    heatTreatment: [
      "Vacuum hardening",
      "Sub-zero treatment",
      "Nitrided flight edges",
    ],
    customization: [
      "Segmented screws",
      "Replaceable mixing sections",
      "Internal cooling channels",
    ],
    leadTime: "30 to 35 days including heat treatment cycles.",
    afterSales: [
      "Torque and wear audits",
      "Refurbishment programs",
    ],
    downloads: [
      { label: "Fully hardened screw brochure", href: "/downloads/fully-hardened.pdf" },
    ],
    benefits: [
      "Maintains geometry under high torque loads",
      "Improved color dispersion for masterbatch",
      "Longer lifespan before regrinding is required",
    ],
    localization:
      "Clarify tool steel grades with descriptors if terms lack direct translation.",
  },
  {
    slug: "nitride-screw-barrel",
    name: "Nitride Screw Barrel",
    category: "Nitride Screw Barrel",
    heroImage: "/images/product-placeholder.svg",
    overview:
      "Gas nitrided screws and barrels offering balanced wear, corrosion resistance, and cost for commodity polymers.",
    summary:
      "Reliable upgrade from standard carburized units for PP, PE, PS, and PVC applications requiring moderate protection.",
    specs: [
      { label: "Nitriding Layer", value: "0.6 to 0.8 mm" },
      { label: "Surface Hardness", value: "HV 900 to 1100" },
      { label: "Diameter", value: "16 mm to 200 mm" },
    ],
    parameters: [
      { label: "Core Hardness", value: "32 to 38 HRC" },
      { label: "Roughness", value: "Ra 0.4" },
      { label: "Straightness", value: "0.02 mm per 1000 mm" },
    ],
    compatibleMachines: [
      "Injection molding machines up to 800 ton",
      "PVC pipe extruders",
      "Blow molding platforms",
    ],
    compatibleResins: [
      "PP, PE, PS",
      "Rigid and flexible PVC",
      "Bio-based starch blends",
    ],
    materialComposition: [
      "38CrMoAlA or 40Cr",
    ],
    heatTreatment: [
      "Gas nitriding",
      "Polishing",
    ],
    customization: [
      "Chrome plating",
      "Bimetal lined feed sections",
      "Fast-change screw tips",
    ],
    leadTime: "18 to 22 days.",
    afterSales: [
      "Routine inspection checklist",
      "Wear depth measurement reports",
    ],
    downloads: [
      { label: "Nitride screw barrel quick guide", href: "/downloads/nitride-guide.pdf" },
    ],
    benefits: [
      "Cost effective upgrade over standard nitriding",
      "Consistent surface hardness for improved stability",
      "Suitable for SEA climate with corrosion inhibitors",
    ],
    localization:
      "Explain nitriding benefits in plain language; keep HV scale as numeric.",
  },
  {
    slug: "extruder-screw-barrel",
    name: "Extruder Screw Barrel",
    category: "Extruder Screw Barrel",
    heroImage: "/images/product-placeholder.svg",
    overview:
      "Single and twin extruder screw barrels for pipe, profile, film, and sheet production lines.",
    summary:
      "Balanced output, melt stability, and energy efficiency across PVC, PE, and engineering polymer extruders.",
    specs: [
      { label: "Configuration", value: "Single, parallel twin, conical twin" },
      { label: "Output Range", value: "100 to 1200 kg per hour" },
      { label: "L/D", value: "16:1 to 38:1" },
    ],
    parameters: [
      { label: "Flight Hardness", value: "60 HRC with overlay" },
      { label: "Cooling", value: "Internal oil or water" },
    ],
    compatibleMachines: [
      "Battenfeld-Cincinnati",
      "KraussMaffei",
      "Liansu",
    ],
    compatibleResins: [
      "PVC, CPVC",
      "HDPE, LDPE",
      "PETG",
    ],
    materialComposition: [
      "Bimetal liner + 38CrMoAlA base",
      "Special alloy segments",
    ],
    heatTreatment: [
      "Vacuum hardening",
      "HVOF overlay",
    ],
    customization: [
      "Closed-loop temperature control channels",
      "Vacuum venting design",
      "Wear sleeves",
    ],
    leadTime: "35 to 45 days depending on complexity.",
    afterSales: [
      "Output optimisation studies",
      "Line commissioning support",
    ],
    downloads: [
      { label: "Extruder screw barrel configuration guide", href: "/downloads/extruder-guide.pdf" },
    ],
    benefits: [
      "Stable output across wide melt viscosities",
      "Custom vent and mixing sections for recycled feedstock",
      "Energy efficient heating and cooling design",
    ],
    localization:
      "Clarify L/D ratio notation and ensure numeric spacing matches local preference.",
  },
  {
    slug: "conical-twin-screw-barrel",
    name: "Conical Twin Screw Barrel",
    category: "Conical Twin Screw Barrel",
    heroImage: "/images/product-placeholder.svg",
    overview:
      "Conical twin screws and barrels for PVC profile, pipe, and sheet extrusion with high torque transmission.",
    summary:
      "Designed for PVC compounds with CaCO3, TiO2, and stabiliser packages needing consistent plastication.",
    specs: [
      { label: "Torque", value: "Up to 120 kN" },
      { label: "Output", value: "150 to 800 kg per hour" },
      { label: "Hardness", value: "58 to 60 HRC" },
    ],
    parameters: [
      { label: "Screw Diameter", value: "65/132 to 92/188" },
      { label: "Barrel Cooling", value: "Forced air or water" },
    ],
    compatibleMachines: [
      "Zimmer Austria",
      "Jwell",
      "Batte",
    ],
    compatibleResins: [
      "Rigid PVC",
      "WPC (wood plastic composite)",
      "Foamed PVC",
    ],
    materialComposition: [
      "Bimetal liner with Ni-based alloy",
      "Base: 38CrMoAlA",
    ],
    heatTreatment: [
      "Vacuum hardening",
      "Aging treatment",
    ],
    customization: [
      "Feed groove design",
      "Central oil cooling",
      "Screw core quench",
    ],
    leadTime: "40 days standard.",
    afterSales: [
      "Startup tuning",
      "On-site training",
    ],
    downloads: [
      { label: "Conical twin extrusion guide", href: "/downloads/conical-twin-guide.pdf" },
    ],
    benefits: [
      "High torque for rigid PVC",
      "Optimised mixing for TiO2 loaded compounds",
      "Reduced plate-out with polished flanks",
    ],
    localization:
      "Retain CaCO3 and TiO2 chemical symbols.",
  },
  {
    slug: "parallel-twin-screw-barrel",
    name: "Parallel Twin Screw Barrel",
    category: "Parallel Twin Screw Barrel",
    heroImage: "/images/product-placeholder.svg",
    overview:
      "Co-rotating and counter-rotating parallel twin screws for high output extrusion, compounding, and recycling.",
    summary:
      "Modular elements and high torque shafts deliver throughput for masterbatch, WPC, and engineering polymer applications.",
    specs: [
      { label: "Diameter", value: "20 mm to 120 mm" },
      { label: "Torque", value: "Up to 14 Nm per cm3" },
      { label: "Speed", value: "Up to 600 rpm" },
    ],
    parameters: [
      { label: "Element Styles", value: "Forward, reverse, kneading, toothed" },
      { label: "Barrel Cooling", value: "Oil or water multi-zone" },
    ],
    compatibleMachines: [
      "Leistritz",
      "Coperion",
      "JSW TEX",
    ],
    compatibleResins: [
      "Masterbatch",
      "Engineering polymers",
      "Recycled PET",
    ],
    materialComposition: [
      "HIP alloy segments",
      "Tool steel shafts",
    ],
    heatTreatment: [
      "Vacuum hardening",
      "Nitriding",
    ],
    customization: [
      "Segment combinations",
      "Quick release couplings",
      "Wear sleeves",
    ],
    leadTime: "45 to 60 days for full twin lines.",
    afterSales: [
      "Element refurbishment",
      "Process optimisation workshops",
    ],
    downloads: [
      { label: "Parallel twin element matrix", href: "/downloads/parallel-twin-matrix.pdf" },
    ],
    benefits: [
      "Flexible layout for compounding recipes",
      "High torque shafts for demanding fillers",
      "Rapid element replacement design",
    ],
    localization:
      "Explain torque units (Nm per cm3) with clarifying text in translations.",
  },
  {
    slug: "single-screw-barrel-injection",
    name: "Single Screw Barrel of Injection Moulding Machine",
    category: "Single Screw Barrel Of Injection Moulding Machine",
    heroImage: "/images/product-placeholder.svg",
    overview:
      "Replacement and custom injection screws for general purpose, high clarity, and engineering resin molding.",
    summary:
      "Covers automotive, appliance, and packaging processors needing precise shot control and rapid changeover.",
    specs: [
      { label: "Diameter", value: "14 mm to 180 mm" },
      { label: "Compression Ratios", value: "1.6:1 to 2.4:1" },
      { label: "Material", value: "38CrMoAlA, SKD61, bimetal" },
    ],
    parameters: [
      { label: "Screw Tip", value: "Universal, sliding ring, locking" },
      { label: "Surface Finish", value: "Ra 0.4" },
    ],
    compatibleMachines: [
      "Toshiba",
      "Sumitomo",
      "Engel",
      "Arburg",
    ],
    compatibleResins: [
      "Transparent PC and PMMA",
      "Glass reinforced PA",
      "TPE and TPU",
    ],
    materialComposition: [
      "Nitrided alloy steel",
      "Optional bimetal liner",
    ],
    heatTreatment: [
      "Gas nitriding",
      "Vacuum hardening",
    ],
    customization: [
      "Nozzle and tip sets",
      "Grooved feed bush",
      "Wear resistant coatings",
    ],
    leadTime: "20 to 28 days.",
    afterSales: [
      "Shot weight calibration assistance",
      "Resin changeover best practices",
    ],
    downloads: [
      { label: "Injection screw selection chart", href: "/downloads/injection-selection.pdf" },
    ],
    benefits: [
      "Stable shot repeatability",
      "Improved mixing for color change",
      "Option for corrosion resistant overlay",
    ],
    localization:
      "Clarify nozzle types with equivalent local terminology.",
  },
];
