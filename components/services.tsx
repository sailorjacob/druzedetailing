import Image from "next/image"
import { Check } from "lucide-react"

const packages = [
  {
    name: "Maintenance Wash",
    price: "$75",
    timing: "1-2 hours",
    description: "Keep your vehicle looking fresh between full details.",
    includes: ["Hand Wash", "Vacuum", "Dust", "Glass Cleaning", "Wax"],
    popular: false,
  },
  {
    name: "Scratch Free Hand Wash",
    price: "$100",
    timing: "1-2 hours",
    description: "A thorough exterior wash with paint-safe methods.",
    includes: ["Scratch-Free Wash", "Wheel Cleaning", "Glass Cleaning"],
    popular: false,
  },
  {
    name: "Interior Only Detail",
    price: "$200",
    timing: "2-4 hours",
    description: "A deep interior restoration to revive your cabin.",
    includes: [
      "Leather & Plastic Cleaning",
      "Steam Extraction",
      "Glass Cleaning",
      "Odor Removal",
    ],
    popular: false,
  },
  {
    name: "Exterior Detail Only",
    price: "$200",
    timing: "2-4 hours",
    description: "Restore your exterior finish to its former glory.",
    includes: [
      "Minor Paint Correction",
      "Wheel Detailing",
      "Glass Cleaning",
      "Trim Restoration",
    ],
    popular: false,
  },
  {
    name: "Full Detail",
    price: "$375",
    timing: "2-4 hours",
    description: "The complete package for a total vehicle transformation.",
    includes: [
      "Full Interior Detail",
      "Full Exterior Detail",
      "Paint Correction",
      "Wheel & Tire Dressing",
    ],
    popular: true,
  },
  {
    name: "Paint Enhancement",
    price: "$500",
    timing: "5-6 hours",
    description: "Single-stage polish for a deep, glossy finish.",
    includes: [
      "Single Stage Polish",
      "Gloss Enhancement",
      "Window Cleaning",
      "Paint Protection",
    ],
    popular: false,
  },
  {
    name: "Pro Ceramic Coating",
    price: "$1,200",
    timing: "8+ hours",
    description: "The ultimate protection with 7+ years of durability.",
    includes: [
      "Full Paint Correction",
      "Ceramic Coating Application",
      "7+ Year Protection",
      "Hydrophobic Finish",
    ],
    popular: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-silver">
            Our Packages
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">Tailored Detailing Packages</span>
          </h2>
          <p className="text-lg leading-relaxed text-foreground/60">
            From a quick refresh to comprehensive ceramic protection, every service is executed with the same uncompromising standard of excellence.
          </p>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col border bg-card p-8 transition-all ${
                pkg.popular
                  ? "border-primary hover:border-primary"
                  : "border-silver/15 hover:border-silver/40"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-8 bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                {pkg.name}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">{pkg.description}</p>
              <div className="mb-6">
                <span className={`font-serif text-4xl font-bold ${pkg.popular ? "text-primary" : "text-silver"}`}>
                  {pkg.price}
                </span>
                <span className="ml-2 text-sm text-muted-foreground">
                  / {pkg.timing}
                </span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.popular ? "text-primary" : "text-silver"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block border py-3 text-center text-sm font-semibold uppercase tracking-widest transition-all ${
                  pkg.popular
                    ? "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary"
                    : "border-silver/30 text-foreground hover:border-silver hover:text-silver"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/images/exterior-detail.jpg"
            alt="Professional exterior detailing in progress"
            width={1400}
            height={400}
            className="h-64 w-full object-cover lg:h-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-background/70">
            <div className="text-center">
              <h3 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Not Sure Which Package?
              </h3>
              <p className="mb-6 text-foreground/60">
                Contact us for a personalized recommendation based on your vehicle&apos;s needs.
              </p>
              <a
                href="#contact"
                className="inline-block border border-primary bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
