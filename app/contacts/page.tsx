"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Linkedin, Twitter, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ContactsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLAnchorElement[]>([]);
  const officeCardsRef = useRef<HTMLDivElement[]>([]);
  const socialRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate header
    tl.from(headerRef.current, {
      y: -20,
      duration: 0.6,
    });

    // Animate columns
    tl.from(
      leftColRef.current,
      { x: -20, duration: 0.5 },
      "-=0.4"
    );

    tl.from(
      rightColRef.current,
      { x: 20, duration: 0.5 },
      "-=0.5"
    );

    // Animate contact cards with stagger
    gsap.from(contactCardsRef.current, {
      y: 15,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.2,
    });

    // Animate office cards
    gsap.from(officeCardsRef.current, {
      y: 15,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.3,
    });

    // Animate social links
    gsap.from(socialRef.current, {
      y: 10,
      duration: 0.4,
      ease: "power3.out",
      delay: 0.4,
    });

    // Animate form elements
    if (formRef.current) {
      gsap.from(formRef.current.querySelectorAll('input, textarea, button'), {
        y: 10,
        duration: 0.4,
        stagger: 0.03,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "info@muiaa.com",
      href: "mailto:info@muiaa.com",
    },
    {
      icon: Phone,
      label: "Kenya Office",
      value: "+254 718 540 760",
      href: "tel:+254718540760",
    },
    {
      icon: Phone,
      label: "USA Office",
      value: "+1 (602) 705-2058",
      href: "tel:+16027052058",
    },
  ];

  const offices = [
    {
      icon: MapPin,
      city: "Nairobi",
      country: "Kenya",
    },
    {
      icon: Globe,
      city: "Phoenix",
      country: "Arizona, USA",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "#",
    },
    {
      icon: Twitter,
      name: "Twitter",
      link: "#",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
      {/* Hero Section */}
      <section className="w-full pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Let&apos;s Connect
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                We&apos;d Love to
                <br />
                <span className="text-secondary">Hear from You</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                Whether you have questions about HEP or want to explore how we can help unlock your home&apos;s potential, our team is ready to assist.
              </p>
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
              <Image
                src="/images/6437.jpg"
                alt="Contact Us"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div ref={leftColRef} className="lg:col-span-2 space-y-8">
              {/* Direct Contact */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      ref={(el) => {
                        if (el) contactCardsRef.current[index] = el;
                      }}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:border-secondary hover:bg-secondary/5 transition-all duration-300 group"
                    >
                        <div className="mt-1 p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {item.label}
                          </div>
                          <div className="font-medium">{item.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-4">
                  {offices.map((office, index) => {
                    const Icon = office.icon;
                    return (
                      <div
                        key={office.city}
                        ref={(el) => {
                          if (el) officeCardsRef.current[index] = el;
                        }}
                        className="flex items-start gap-4 p-4 rounded-lg border bg-card"
                      >
                        <div className="mt-1 p-2 rounded-lg bg-secondary/10">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <div className="font-semibold text-lg">
                            {office.city}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {office.country}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div ref={socialRef}>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg border bg-card hover:border-secondary hover:bg-secondary/5 transition-all duration-300"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div ref={rightColRef} className="lg:col-span-3">
              <div className="sticky top-24">
                <div className="p-8 md:p-10 rounded-2xl border bg-card shadow-lg">
                  <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-6 text-lg font-medium"
                      size="lg"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>

                {/* Quick CTA */}
                <div className="mt-6 p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                  <p className="text-sm text-center">
                    <span className="font-semibold">Ready to get started?</span>{" "}
                    <a href="/get-started" className="text-secondary underline hover:no-underline">
                      Apply now
                    </a>{" "}
                    and unlock your home&apos;s potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
