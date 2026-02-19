import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Maintenance Wash",
  "Scratch Free Hand Wash",
  "Interior Only Detail",
  "Exterior Detail Only",
  "Full Detail",
  "Paint Enhancement",
  "Pro Ceramic Coating",
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Druze Detailing logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-serif text-lg font-bold uppercase tracking-widest text-primary">
                DRUZE DETAILING
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Premium mobile auto detailing. We bring showroom-quality care
              directly to your doorstep.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-silver" />
                (123) 456-7890
              </a>
              <a
                href="mailto:info@druzedetailing.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-silver" />
                info@druzedetailing.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0 text-silver" />
                Mobile Service - We Come to You
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-silver">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-silver">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-silver">
              Hours
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex justify-between gap-4">
                <span>Mon - Fri</span>
                <span className="text-foreground">8AM - 6PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-foreground">9AM - 5PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-foreground">By Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>
            {"Copyright"} {new Date().getFullYear()} Druze Detailing. All rights reserved.
          </p>
          <a href="#" className="transition-colors hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
