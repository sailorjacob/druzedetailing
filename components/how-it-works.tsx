import { CalendarCheck, ListChecks, Truck, ThumbsUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Schedule Your Appointment",
    description:
      "Pick a date and time that works for you. Book online through our form or give us a call.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Choose Your Package",
    description:
      "Select from our range of detailing packages, from a maintenance wash to full ceramic protection.",
  },
  {
    number: "03",
    icon: Truck,
    title: "We Come to You",
    description:
      "Our team arrives fully equipped at your location with professional-grade products and tools.",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Enjoy Your Pristine Vehicle",
    description:
      "Sit back and relax while we transform your vehicle. Drive away with a showroom-quality finish.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-silver">
            How It Works
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">Simple Process, Stunning Results</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our streamlined mobile detailing process is designed for your convenience.
            Four easy steps to a flawless finish.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-silver/20 lg:block" />
              )}

              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-silver/20 bg-secondary transition-all group-hover:border-silver/50">
                <step.icon className="h-8 w-8 text-silver" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>

              <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
