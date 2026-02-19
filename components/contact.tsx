"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"

const serviceOptions = [
  "Maintenance Wash",
  "Scratch Free Hand Wash",
  "Interior Only Detail",
  "Exterior Detail Only",
  "Full Detail",
  "Paint Enhancement (Gloss & Protect)",
  "Pro Ceramic 7+ Year Protection",
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would go here
    alert("Thank you! We'll be in touch shortly.")
    setFormData({ name: "", email: "", phone: "", service: "", vehicle: "", message: "" })
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-silver">
            Contact Us
          </p>
          <h2 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">Ready for a Showroom Finish?</span>
          </h2>
          <p className="text-lg leading-relaxed text-foreground/60">
            Fill out the form below and we&apos;ll get back to you promptly to schedule your appointment.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              <div className="border border-border bg-card p-8">
                <h3 className="mb-6 font-serif text-lg font-semibold text-foreground">
                  Get In Touch
                </h3>
                <div className="flex flex-col gap-5">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-4 text-foreground/70 transition-colors hover:text-primary"
                  >
                    <Phone className="h-5 w-5 text-silver" />
                    <span className="text-sm">(123) 456-7890</span>
                  </a>
                  <a
                    href="mailto:info@druzedetailing.com"
                    className="flex items-center gap-4 text-foreground/70 transition-colors hover:text-primary"
                  >
                    <Mail className="h-5 w-5 text-silver" />
                    <span className="text-sm">info@druzedetailing.com</span>
                  </a>
                  <div className="flex items-center gap-4 text-foreground/70">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-silver" />
                    <span className="text-sm">Mobile Service - We Come to You</span>
                  </div>
                </div>
              </div>

              <div className="border border-border bg-card p-8">
                <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                  Hours of Operation
                </h3>
                <div className="flex flex-col gap-3 text-sm text-foreground/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-foreground">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-border bg-card p-8 lg:col-span-3 lg:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Phone *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Select Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-border bg-secondary px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="">Choose a package</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="vehicle"
                  className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Year / Make / Model *
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  type="text"
                  required
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="2024 BMW M4"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  placeholder="Tell us about any specific concerns or requests..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 border border-primary bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
            >
              <Send className="h-4 w-4" />
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
