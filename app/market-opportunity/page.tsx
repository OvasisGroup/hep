"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  Home,
  TrendingUp,
  Users,
  Globe,
  Target,
  DollarSign,
  Building,
  Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MarketOpportunityPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Hero animation
    tl.from(heroRef.current, {
      y: -20,
      duration: 0.6,
    });

    // Cards animation
    gsap.fromTo(
      cardsRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Stats animation
    gsap.fromTo(
      statsRef.current,
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const opportunities = [
    {
      icon: Home,
      stat: "<4%",
      title: "Mortgage Access Crisis",
      description:
        "Many Kenyans own homes but cannot access loans or mortgages to use the value in their property. Today, less than 4% of Kenyans qualify for traditional mortgages, leaving most homeowners without a way to unlock their home equity.",
      color: "bg-red-500/10 text-red-500",
    },
    {
      icon: Building,
      stat: "2M+",
      title: "Housing Shortage",
      description:
        "Kenya also has a large housing shortage, with an estimated 2 million homes needed. This shows the growing demand for better and more flexible housing finance solutions.",
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      icon: Users,
      stat: "Growing",
      title: "Ethical Finance Demand",
      description:
        "There is also increasing demand for ethical and Shariah-compliant financial options, especially among Kenya's Muslim population. At the same time, the Kenyan diaspora sends billions of dollars home each year, much of it invested in housing and property.",
      color: "bg-blue-500/10 text-blue-500",
    },
  ];

  const stats = [
    {
      icon: Home,
      value: "96%",
      label: "Underserved Homeowners",
      description: "Cannot access traditional mortgages",
    },
    {
      icon: Building,
      value: "2M",
      label: "Housing Deficit",
      description: "Homes needed across Kenya",
    },
    {
      icon: DollarSign,
      value: "$4B+",
      label: "Diaspora Remittances",
      description: "Annual investment potential",
    },
    {
      icon: TrendingUp,
      value: "High",
      label: "Market Growth",
      description: "Demand for flexible financing",
    },
  ];

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-20 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-background via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Market Analysis
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-left">
                Market <span className="text-secondary">Opportunity</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl text-left">
                A trillion-shilling gap in Kenya's housing finance ecosystem, waiting to be filled
              </p>
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
              <Image
                src="/images/2523.jpg"
                alt="Market Opportunity"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Opportunity Landscape
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three converging market forces creating unprecedented demand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div
                  key={opportunity.title}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="relative p-8 rounded-2xl border bg-card hover:border-secondary transition-all duration-300 group"
                >
                  <div
                    className={`inline-flex items-center justify-center p-4 rounded-xl ${opportunity.color} mb-4`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-secondary mb-3">
                    {opportunity.stat}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {opportunity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="w-full py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By the <span className="text-secondary">Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  ref={(el) => {
                    if (el) statsRef.current[index] = el;
                  }}
                  className="p-8 rounded-xl border border-secondary/20 bg-secondary/5 text-center hover:border-secondary transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-secondary/10 mb-4">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-secondary/10 mb-6">
              <Target className="h-10 w-10 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The HEP <span className="text-secondary">Solution</span>
            </h2>
          </div>

          <div className="bg-card border rounded-2xl p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-8">
              HEP brings these opportunities together by creating a platform that allows{" "}
              <span className="text-foreground font-semibold">
                homeowners to unlock the value of their homes
              </span>{" "}
              while giving{" "}
              <span className="text-foreground font-semibold">
                investors a new way to invest in real estate
              </span>
              .
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Home className="h-7 w-7 text-secondary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">For Homeowners</h3>
                <p className="text-sm text-muted-foreground">
                  Access capital without interest-based loans or selling your home
                </p>
              </div>

              <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Globe className="h-7 w-7 text-secondary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">For Investors</h3>
                <p className="text-sm text-muted-foreground">
                  Secure, ethical real estate investment opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-secondary/10 mb-6">
            <Sparkles className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Be Part of the Solution
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join us in transforming Kenya's housing finance landscape and unlocking opportunities for millions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors text-lg"
            >
              Get Started Today
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-secondary text-secondary font-medium hover:bg-secondary/10 transition-colors text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
