"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ChevronDown, 
  School, 
  Users, 
  Calendar, 
  Menu,
  X,
  Scissors,
  Briefcase,
  Phone
} from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = {
    services: {
      label: "Services",
      icon: <Scissors className="w-4 h-4" />,
      items: [
        { label: "Haircut & Styling", href: "/services/haircut", description: "Professional haircut services" },
        { label: "Hair Treatment", href: "/services/treatment", description: "Deep conditioning treatments" },
        { label: "Beard Grooming", href: "/services/beard", description: "Professional beard care" },
        { label: "Style Documentation", href: "/services/documentation", description: "Style recording service" },
      ]
    },
    academy: {
      label: "Academy",
      icon: <School className="w-4 h-4" />,
      items: [
        { label: "Keratin Ambush", href: "/academy/keratinambush", description: "Accessible and comprehensive education on keratin treatments" },
        { label: "BarberCraft Courses", href: "/academy/courses", description: "Professional barber education" },
        { label: "Certification", href: "/academy/certification", description: "Industry recognized certificates" },
        { label: "Mentorship", href: "/academy/mentorship", description: "One-on-one training" },
        { label: "Resources", href: "/academy/resources", description: "Learning materials" },
      ]
    },
    community: {
      label: "Community",
      icon: <Users className="w-4 h-4" />,
      items: [
        { label: "Live Sessions", href: "/community/sessions", description: "Weekly live demonstrations" },
        { label: "Events", href: "/community/events", description: "Workshops & meetups" },
        { label: "Forum", href: "/community/forum", description: "Connect with barbers" },
        { label: "Blog", href: "/community/blog", description: "Tips & tutorials" },
      ]
    },
    careers: {
      label: "Careers",
      icon: <Briefcase className="w-4 h-4" />,
      items: [
        { label: "Job Openings", href: "/careers/job-openings", description: "Explore current job opportunities" },
        { label: "Internships", href: "/careers/internships", description: "Learn about internship programs" },
        { label: "Life at BrozKey", href: "/careers/life-at-brozkey", description: "Discover our company culture" },
      ]
    },
    contact: {
      label: "Contact",
      icon: <Phone className="w-4 h-4" />,
      items: [
        { label: "Customer Support", href: "/contact/support", description: "Get help with your inquiries" },
        { label: "Feedback", href: "/contact/feedback", description: "Share your thoughts with us" },
        { label: "Location", href: "/contact/location", description: "Find our physical location" },
      ]
    }
  }

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300
          ${isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800/50' 
            : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/images/brozkeyb.png" alt="BrozKey Logo" className="h-10" />
              <Link 
                href="/" 
                className="text-2xl font-bold text-white ml-1"
              >
                BrozKey
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {Object.entries(menuItems).map(([key, item]) => (
                <div key={key} className="relative group">
                  <button className="flex items-center gap-1 py-2 text-zinc-400 hover:text-white transition-colors">
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  </button>
                  
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-64 bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-zinc-800 shadow-xl p-2">
                      {item.items.map((subItem, index) => (
                        <Link
                          key={index}
                          href={subItem.href}
                          className="flex flex-col gap-1 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                        >
                          <span className="font-medium text-white">{subItem.label}</span>
                          <span className="text-xs text-zinc-400">{subItem.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link 
                href="/booking" 
                className="px-4 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors flex items-center gap-1"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </Link>
            </div>

            <button 
              className="md:hidden p-2 hover:bg-zinc-800/50 rounded-lg text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black md:hidden">
          <div className="p-4">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="text-2xl font-bold text-white">
                BrozKey
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-zinc-800/50 rounded-lg text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {Object.entries(menuItems).map(([key, item]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center gap-2 text-lg font-medium text-white">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <div className="pl-6 space-y-2">
                    {item.items.map((subItem, index) => (
                      <Link
                        key={index}
                        href={subItem.href}
                        className="block py-2 text-zinc-400 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-zinc-800">
                <Link 
                  href="/booking"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}