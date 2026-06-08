'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Heart, Home, Stethoscope, BookOpen, ArrowRight, MapPin, Mail, Phone, Star, Menu, X, ChevronRight, Quote, Globe, Users, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'

import { TargetAndTransition, Transition, Variants } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
} as any

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HopeHavenPage() {
  const [donated, setDonated] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-white/90 backdrop-blur-xl border-b border-border/50 shadow-sm' : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">
              Hope<span className="text-primary italic">Haven</span>
            </span>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-12">
            {[
              { name: 'About', id: 'about' },
              { name: 'Programs', id: 'programs' },
              { name: 'Impact', id: 'impact' },
              { name: 'Stories', id: 'stories' }
            ].map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.id}`}
                whileHover={{ y: -2 }}
                className="text-sm font-semibold tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              className="hidden md:flex rounded-full px-8 h-11 font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all duration-300 active:scale-95"
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Donate Now
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l-0">
                <div className="flex flex-col h-full bg-background p-8">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xl font-bold">HopeHaven</span>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-6">
                    {['About', 'Programs', 'Impact', 'Stories'].map((item) => (
                      <a 
                        key={item}
                        href={`#${item.toLowerCase()}`} 
                        className="text-2xl font-bold hover:text-primary transition-colors flex items-center justify-between group"
                      >
                        {item}
                        <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                      </a>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8">
                    <Button 
                      className="w-full py-6 text-lg font-bold rounded-2xl bg-primary text-white"
                      onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Donate Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white pt-20">
        {/* Floating Social Proof Bubbles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[
            { top: '15%', left: '10%', size: 'w-24 h-24', img: '/gallery-1.jpg', delay: 0 },
            { top: '60%', left: '15%', size: 'w-20 h-20', img: '/gallery-2.jpg', delay: 1.2 },
            { top: '40%', left: '5%', size: 'w-12 h-12', img: '/placeholder-user.jpg', delay: 0.5 },
            { top: '20%', right: '12%', size: 'w-22 h-22', img: '/gallery-3.jpg', delay: 0.8 },
            { top: '55%', right: '8%', size: 'w-28 h-28', img: '/hero-children.jpg', delay: 1.5 },
            { top: '75%', right: '20%', size: 'w-16 h-16', img: '/placeholder.jpg', delay: 0.3 },
          ].map((bubble, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 0.8, 
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{ 
                opacity: { duration: 1, delay: bubble.delay },
                scale: { duration: 1, delay: bubble.delay },
                y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ top: bubble.top, left: bubble.left, right: bubble.right }}
              className={`absolute ${bubble.size} rounded-full overflow-hidden border-4 border-white shadow-xl`}
            >
              <Image src={bubble.img} alt="Supporter" fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block py-2 px-6 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 uppercase tracking-widest"
            >
              Small effort, Make big change
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[1.05]">
              Empower <span className="relative inline-block">
                Change
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-4 bg-yellow-300 -z-10 rounded-full"
                />
              </span> <br />
              with Every Donation
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Join thousands of supporters in creating lasting impact. We provide the tools to build a brighter future for every child.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button
                size="lg"
                className="w-full sm:w-auto h-18 px-12 rounded-2xl bg-primary hover:bg-primary/90 text-white text-xl font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all flex items-center gap-3"
                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contribute Now
                <ArrowRight className="w-6 h-6" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto h-18 px-12 rounded-2xl text-foreground/60 hover:text-foreground text-xl font-bold hover:bg-transparent group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore mission
                <ChevronRight className="w-6 h-6 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Needs Cards */}
      <section className="relative z-20 -mt-24 px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Need for Education', val: '400+', desc: 'Children waiting for scholarships', icon: BookOpen, color: 'text-purple-500' },
              { label: 'Need for Nutrition', val: '15k', desc: 'Meals needed this month', icon: Heart, color: 'text-pink-500' },
              { label: 'Need for Healthcare', val: '120+', icon: Stethoscope, desc: 'Vaccinations required', color: 'text-indigo-500' },
              { label: 'Active Support', val: '24/7', icon: ShieldCheck, desc: 'On-ground emergency care', color: 'text-violet-500' },
            ].map((need, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-premium border border-border/50 flex flex-col items-center text-center group cursor-pointer hover:border-primary/20 transition-colors"
              >
                <div className={`w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <need.icon className={`w-7 h-7 ${need.color}`} />
                </div>
                <h4 className="text-4xl font-bold text-foreground mb-1">{need.val}</h4>
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{need.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{need.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              {...fadeInUp}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-gradient">
                Transforming despair <br /> into <span className="text-primary italic">limitless hope.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Since 2014, HopeHaven has been more than a shelter—it's a sanctuary where every child's potential is recognized and nurtured. We believe that circumstance should never define destiny.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { title: 'Global Recognition', desc: 'Awarded for excellence in child welfare and education.', icon: ShieldCheck },
                  { title: 'Community Led', desc: 'Operating with 100% local leadership and expertise.', icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button size="lg" variant="link" className="p-0 text-primary font-bold text-lg group">
                Read our full impact report
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] translate-x-6 translate-y-6" />
              <Image
                src="/gallery-1.jpg"
                alt="Children in classroom"
                fill
                className="object-cover rounded-[3rem] shadow-premium relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 px-6 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.span {...fadeInUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block underline underline-offset-8 decoration-primary/30">What We Do</motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-foreground"
            >
              Pillars of <span className="italic">Excellence</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: BookOpen,
                title: 'Quality Education',
                desc: 'Specialized curricula designed to bridge educational gaps and spark lifelong curiosity.',
                color: 'text-purple-500',
                bg: 'bg-purple-500/10'
              },
              {
                icon: Heart,
                title: 'Holistic Health',
                desc: 'Beyond clinics, we provide mental health support and nutritional programs that thrive.',
                color: 'text-primary',
                bg: 'bg-primary/10'
              },
              {
                icon: Home,
                title: 'Nurturing Home',
                desc: 'A sanctuary of belonging where every child is part of a supportive family unit.',
                color: 'text-pink-500',
                bg: 'bg-pink-500/10'
              }
            ].map((program, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group p-10 rounded-[2.5rem] bg-white shadow-lg hover:shadow-premium transition-all duration-500 border border-border/50 relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl ${program.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <program.icon className={`w-8 h-8 ${program.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{program.desc}</p>
                <div className="mt-8 pt-8 border-t border-border/50 flex items-center justify-between">
                  <span className="font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Learn More</span>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact/Stories Section */}
      <section id="impact" className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="grid grid-cols-2 gap-4"
             >
                <div className="space-y-4 pt-12">
                   <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium">
                      <Image src="/gallery-2.jpg" alt="Impact" fill className="object-cover" />
                   </div>
                   <div className="relative aspect-square rounded-3xl overflow-hidden shadow-premium">
                      <Image src="/gallery-3.jpg" alt="Impact" fill className="object-cover" />
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="relative aspect-square rounded-3xl overflow-hidden shadow-premium">
                      <Image src="/gallery-1.jpg" alt="Impact" fill className="object-cover" />
                   </div>
                   <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium">
                      <Image src="/placeholder.jpg" alt="Impact" fill className="object-cover" />
                   </div>
                </div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Impact</span>
                <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">Seeing the change <span className="text-primary italic">Firsthand.</span></h2>
                
                <div className="space-y-12">
                   <div className="bg-secondary/20 p-8 rounded-[2rem] border-l-4 border-primary">
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />
                      <p className="text-xl italic text-foreground mb-6 leading-relaxed">
                        "HopeHaven didn't just give me a place to stay; they gave me a sisterhood, an education, and the confidence to become a nurse."
                      </p>
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-primary/20" />
                         <div>
                            <p className="font-bold">Amina Yusuf</p>
                            <p className="text-sm text-muted-foreground text-primary">Class of 2022 Graduate</p>
                         </div>
                      </div>
                   </div>

                   <p className="text-lg text-muted-foreground leading-relaxed">
                     Our impact is measured in more than just numbers. It's measured in the laughter in our halls, the success of our graduates, and the strength of the communities we build together.
                   </p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="py-32 px-6 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 text-balance">
            <motion.h2 
              {...fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Voices belonging <br /> to <span className="text-primary underline decoration-primary/30">Hope.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Main Benefactor', quote: 'The transparency and heart of this organization is unlike anything I have seen.' },
              { name: 'David Okafor', role: 'Local Partner', quote: 'They are deeply rooted in our community, respect our culture, and genuinely care.' },
              { name: 'Elena Mendez', role: 'Monthly Donor', quote: 'Seeing the children thrive gives my family so much joy. Truly life-changing.' }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem]"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-accent fill-accent" />)}
                </div>
                <p className="text-xl mb-10 text-white/80 leading-relaxed font-light">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10" />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-primary font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Donation Section */}
      <section id="donate" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[80px]" />

            <div className="grid lg:grid-cols-2 gap-20 relative z-10 items-center">
              <div>
                <motion.span {...fadeInUp} className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Take Action</motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                >
                  Your legacy <br /><span className="text-primary">starts here.</span>
                </motion.h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
                  Choose a donation amount that feels right for you. Every contribution is directly funneled into our core child welfare programs.
                </p>
                
                <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-border/50 max-w-md">
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-8 h-8 text-primary" />
                   </div>
                   <div>
                      <h4 className="font-bold mb-1">100% Transparency</h4>
                      <p className="text-sm text-muted-foreground">Certified by international welfare standards 2024.</p>
                   </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-premium border border-border/50"
              >
                <div className="space-y-10">
                  <div className="grid grid-cols-3 gap-3">
                    {['₦5k', '₦10k', '₦25k'].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
                          selectedAmount === amount
                            ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                            : 'bg-secondary/40 text-foreground hover:bg-secondary/60'
                        }`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 block">Or enter custom amount</label>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">₦</span>
                      <Input
                        type="number"
                        placeholder="0.00"
                        className="h-20 pl-12 pr-6 rounded-2xl border-2 border-secondary focus:border-primary/50 text-2xl font-bold transition-all bg-secondary/10"
                      />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={donated ? 'thankyou' : 'button'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <Button
                        className={`w-full h-20 rounded-[2rem] text-xl font-bold transition-all shadow-xl hover:shadow-primary/20 ${
                          donated ? 'bg-violet-500 hover:bg-violet-600' : 'bg-primary hover:bg-primary/90'
                        } text-white`}
                        onClick={() => {
                          setDonated(true)
                          setTimeout(() => setDonated(false), 5000)
                        }}
                      >
                        {donated ? 'Payment Successful! ✓' : 'Invest in a Future'}
                      </Button>
                    </motion.div>
                  </AnimatePresence>

                  <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Secure SSL Encrypted Payment
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-24 px-6 border-t border-border/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Hope<span className="text-primary">Haven</span></span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cultivating resilient futures through compassionate care, quality education, and community-driven impact.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <button key={social} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                    <Globe className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {['About Us', 'Programs', 'Impact Report', 'Contact'].map((link) => (
                  <li key={link}><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Our Programs</h4>
              <ul className="space-y-4">
                {['Primary Education', 'Medical Care', 'Foster Families', 'Mental Health'].map((link) => (
                  <li key={link}><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8">Newsletter</h4>
              <p className="text-muted-foreground mb-6">Stay updated with our latest impact stories and programs.</p>
              <div className="flex gap-2">
                <Input placeholder="Email Address" className="rounded-xl border-secondary bg-secondary/20 h-12" />
                <Button className="h-12 w-12 rounded-xl bg-primary"><ArrowRight className="w-5 h-5 text-white" /></Button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-muted-foreground text-sm font-medium">
              © 2024 HopeHaven Foundation. Licensed NGO. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
