import Image from "next/image"
import { Shield, Sparkles, Clock, MapPin } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Meticulous Craftsmanship",
    description:
      "Every vehicle is treated with the precision and care it deserves, using only premium-grade products and proven techniques.",
  },
  {
    icon: MapPin,
    title: "Mobile Convenience",
    description:
      "We come to you. Whether at home, the office, or anywhere in between, our fully equipped team delivers on-site excellence.",
  },
  {
    icon: Shield,
    title: "Lasting Protection",
    description:
      "From paint sealants to ceramic coatings with 7+ year durability, we shield your investment against the elements.",
  },
  {
    icon: Clock,
    title: "Reliable & Punctual",
    description:
      "We respect your time. Expect prompt arrivals, clear communication, and consistent results every single visit.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-silver">
              About Druze Detailing
            </p>
            <h2 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              <span className="text-balance">Where Passion Meets Perfection</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-foreground/60">
              Druze Detailing was founded on a simple belief: your vehicle deserves more than a routine wash. It deserves a bespoke experience crafted by passionate professionals who treat every car as their own.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-foreground/60">
              As a fully mobile operation, we eliminate the hassle of drop-offs and waiting rooms. Our expert team arrives equipped with professional-grade tools and premium products, transforming your vehicle wherever you are.
            </p>
            <a
              href="#contact"
              className="inline-block border border-silver/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-silver transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get in Touch
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/interior-detail.jpg"
              alt="Premium interior detailing in progress"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-primary/20" />
          </div>
        </div>

        <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group"
            >
              <feature.icon className="mb-4 h-7 w-7 text-silver" />
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
