import Image from "next/image"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-car.jpg"
        alt="Luxury car with flawless detailing finish"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-20 text-center">
        <Image
          src="/images/logo.png"
          alt="Druze Detailing emblem"
          width={120}
          height={120}
          className="mx-auto mb-8 rounded-full"
        />
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-silver">
          Premium Mobile Auto Detailing
        </p>
        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">Your Car Deserves</span>
          <br />
          <span className="text-primary text-balance">The Royal Treatment</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/60 md:text-xl">
          Showroom-quality detailing, delivered to your door. From flawless hand washes to multi-year ceramic protection, we treat every vehicle like royalty.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full border border-primary bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary sm:w-auto"
          >
            Book Your Detail
          </a>
          <a
            href="#services"
            className="w-full border border-silver/30 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-silver transition-all hover:border-silver hover:text-foreground sm:w-auto"
          >
            View Services
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-primary"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
