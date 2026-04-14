'use client'

import { useState } from 'react'
import { Heart, Home, Stethoscope, BookOpen, ArrowRight, MapPin, Mail, Phone, Star, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import Image from 'next/image'

export default function HopeHavenPage() {
  const [donated, setDonated] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState('')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">HopeHaven</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-12">
            <a href="#about" className="text-sm text-foreground/70 hover:text-primary transition-colors">About</a>
            <a href="#programs" className="text-sm text-foreground/70 hover:text-primary transition-colors">Programs</a>
            <a href="#impact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Impact</a>
            <a href="#stories" className="text-sm text-foreground/70 hover:text-primary transition-colors">Stories</a>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-white to-secondary/10">
              <div className="flex flex-col h-full">
                

                {/* Navigation */}
                <nav className="flex flex-col gap-2 py-8">
                  <a href="#about" className="flex items-center gap-3 px-4 py-3 text-lg text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 group">
                    <Home className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                    About
                  </a>
                  <a href="#programs" className="flex items-center gap-3 px-4 py-3 text-lg text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 group">
                    <BookOpen className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                    Programs
                  </a>
                  <a href="#impact" className="flex items-center gap-3 px-4 py-3 text-lg text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 group">
                    <Stethoscope className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                    Impact
                  </a>
                  <a href="#stories" className="flex items-center gap-3 px-4 py-3 text-lg text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 group">
                    <Star className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                    Stories
                  </a>
                </nav>

                {/* Call to Action */}
                <div className="mt-auto pt-8 border-t border-border/50">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Donate Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/hero-children.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
        
        <div className="text-center text-white px-6 max-w-4xl mx-auto z-10">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              Every Child Deserves Hope
            </h2>
            <p className="text-xl md:text-2xl text-white/90 text-balance font-light">
              Transforming lives through care, education, and opportunity
            </p>
          </div>
          <div className="flex justify-center pt-8 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-semibold"
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Donate Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="mb-8">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">About Us</span>
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 mb-6 leading-tight">
                  Giving Children a Future
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  Founded in 2014, HopeHaven has been dedicated to providing a safe, nurturing environment for orphaned and vulnerable children. We believe every child deserves care, education, and the chance to dream.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Through comprehensive support—from housing and nutrition to education and mental health care—we transform futures one child at a time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-secondary/30 rounded-lg p-6 border border-secondary">
                  <p className="text-4xl font-bold text-primary mb-2">120+</p>
                  <p className="text-sm text-foreground/70 font-medium">Children Supported</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-6 border border-secondary">
                  <p className="text-4xl font-bold text-primary mb-2">10+</p>
                  <p className="text-sm text-foreground/70 font-medium">Years of Impact</p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <Image
                src="/gallery-1.jpg"
                alt="Children learning"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl relative z-10 object-cover w-full h-96 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 px-6 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Work</span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 mb-6">
              Comprehensive Care Programs
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              We provide holistic support across every dimension of childhood development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Education',
                description: 'Quality education from primary through secondary school with scholarships and personalized tutoring to unlock potential.'
              },
              {
                icon: Heart,
                title: 'Healthcare',
                description: 'Comprehensive medical care, vaccinations, mental health support, and wellness programs for healthy development.'
              },
              {
                icon: Home,
                title: 'Safe Home',
                description: 'A secure, nurturing environment with caring staff, nutritious meals, and the warmth of belonging.'
              }
            ].map((program, idx) => {
              const Icon = program.icon
              return (
                <Card
                  key={idx}
                  className="p-8 rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group cursor-pointer hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{program.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{program.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-32 px-6 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Impact</span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3">
              Making Real Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '120+', label: 'Children Supported', desc: 'Currently receiving comprehensive care' },
              { stat: '95%', label: 'School Completion', desc: 'Of children graduate secondary school' },
              { stat: '50+', label: 'Active Partners', desc: 'Community and organizational support' }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
                <p className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-3">
                  {item.stat}
                </p>
                <p className="text-xl font-semibold text-foreground mb-2">{item.label}</p>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Gallery</span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3">
              Stories of Hope
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg'].map((src, idx) => (
              <div
                key={idx}
                className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Image
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="py-32 px-6 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3">
              Voices of Hope
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: 'Supporting HopeHaven has been one of the most meaningful experiences of my life. Seeing these children thrive is truly transformative.',
                author: 'Sarah Johnson',
                role: 'Donor & Supporter'
              },
              {
                quote: 'The joy and resilience of these children inspires me every single day. This work changes everything.',
                author: 'Michael Chen',
                role: 'Community Partner'
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-8 rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-foreground/80 mb-8 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-32 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Support Us</span>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mt-3 mb-6">
              Make a Difference
            </h2>
            <p className="text-xl text-foreground/70">
              Your generosity directly transforms a child's life
            </p>
          </div>

          <Card className="p-12 rounded-2xl border-0 shadow-xl bg-gradient-to-br from-white to-secondary/10">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-6">Select Amount</label>
                <div className="grid grid-cols-3 gap-4">
                  {['₦5,000', '₦10,000', '₦20,000'].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-primary text-white shadow-lg scale-105'
                          : 'bg-secondary/40 text-foreground hover:bg-secondary/60 border-2 border-secondary'
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Custom Amount</label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  className="rounded-xl border-2 border-secondary focus:border-primary focus:ring-primary/20 py-4 px-4 text-base"
                />
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  setDonated(true)
                  setTimeout(() => setDonated(false), 3000)
                }}
              >
                {donated ? '✓ Thank You!' : 'Donate Now'}
              </Button>

              <p className="text-sm text-foreground/70 text-center">
                Secure payment • Tax-deductible • 100% goes to programs
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-lg font-semibold">HopeHaven</span>
              </div>
              <p className="text-white/70 text-sm">Transforming lives through care, education, and opportunity.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">About</a></li>
                <li><a href="#programs" className="text-white/70 hover:text-white transition-colors text-sm">Programs</a></li>
                <li><a href="#impact" className="text-white/70 hover:text-white transition-colors text-sm">Impact</a></li>
                <li><a href="#donate" className="text-white/70 hover:text-white transition-colors text-sm">Donate</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  Lagos, Nigeria
                </li>
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Phone className="w-4 h-4" />
                  +234 (0) 123 456 7890
                </li>
                <li className="flex items-center gap-2 text-white/70 text-sm">
                  <Mail className="w-4 h-4" />
                  info@hopehaven.org
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {['f', 't', 'ig', 'in'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                  >
                    <span className="text-sm font-bold">{social}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-white/70 text-sm">
              © 2024 HopeHaven. All rights reserved. Registered NGO in Nigeria.
            </p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
