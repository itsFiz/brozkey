"use client"

import { 
  MapPin, Calendar, Users, 
  School, Star, Clock, Award, CheckCircle, ChevronRight, 
  Heart, Scissors, Mail, Camera, 
  Droplet, SprayCan,
  Book,
  VolumeX,
  Volume2,
  Youtube,
  
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VideoPlayer from '@/components/player/video'
import { FaTiktok } from 'react-icons/fa'

// Types
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  badge?: string;
  features?: string[];
  price?: string;
  category?: string;
}


// Static data
const currentYear = new Date().getFullYear();

const services: Service[] = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Haircut & Styling",
    description: "Professional haircut with styling",
    price: "RM50",
    link: "/services/haircut",
    badge: "Popular",
    features: [
      "Precision cutting techniques",
      "Style consultation",
      "Finishing products"
    ]
  },
  {
    icon: <SprayCan className="w-6 h-6" />,
    title: "Hair Treatment",
    description: "Keratin & others",
    price: "RM80",
    link: "/services/treatment",
    features: [
      "Deep conditioning",
      "Scalp treatment",
      "Hair analysis"
    ]
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Beard Grooming",
    description: "Professional beard shaping and care",
    price: "RM40",
    link: "/services/beard",
    features: [
      "Beard trimming",
      "Shape design",
      "Maintenance tips"
    ]
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Style Transformation",
    description: "Professional video transformation of your new style",
    price: "RM50",
    link: "/services/photo",
    features: [
      "Multiple angles",
      "Digital delivery",
      "Style guide"
    ]
  }
];

const stats = [
  { number: "200K+", label: "Followers", icon: <Users className="w-6 h-6" /> },
  { number: "8M+", label: "Likes", icon: <Heart className="w-6 h-6" /> },
  { number: "50K+", label: "Students", icon: <School className="w-6 h-6" /> },
  { number: "98%", label: "Satisfied Customers", icon: <Star className="w-6 h-6" /> },
  { number: "7+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> }
];

const testimonials = [
  {
    name: "John Doe",
    role: "Master Barber",
    image: "/images/placeholder.jpg",
    content: "BarberCraft Academy transformed my approach to barbering. The techniques and business insights are invaluable.",
    rating: 5
  },
  {
    name: "Jane Smith",
    role: "Salon Owner",
    image: "/images/placeholder.jpg",
    content: "The community and support system here is incredible. It's more than just education, it's a family.",
    rating: 5
  }
];



const trendingStyles = [
  { name: "Mullet", image: "/images/mullet.jpg", likes: 1200 },
  { name: "Textured Quiff", image: "/images/texturedquiff.webp", likes: 980 },
  { name: "Buzz Cut", image: "/images/buzzcut.webp", likes: 850 }
];

const ServiceCard = ({ service }: { service: Service }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-zinc-800 p-6 hover:border-white/20 transition-all duration-300"
  >
    {service.badge && (
      <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white">
        {service.badge}
      </span>
    )}
    
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
      {service.icon}
    </div>
    
    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
    <p className="text-zinc-400 mb-4">{service.description}</p>
    
    {service.features && (
      <ul className="space-y-2 mb-4">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
            <CheckCircle className="w-4 h-4 text-white" />
            {feature}
          </li>
        ))}
      </ul>
    )}
    
    {service.price && (
      <div className="text-lg font-bold mb-4 text-white">{service.price}</div>
    )}
    
    <Link 
      href={service.link}
      className="inline-flex items-center text-white text-sm font-medium group-hover:underline"
    >
      Learn more <ChevronRight className="w-4 h-4 ml-1" />
    </Link>
  </motion.div>
);

const TrendingStyles = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
        Trending Styles
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {trendingStyles.map((style, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 backdrop-blur-xl rounded-xl overflow-hidden group"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={style.image}
                alt={style.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{style.name}</h3>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Heart className="w-4 h-4" />
                    <span>{style.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


const InstagramFeed = () => {
  const posts = [
    {  videoId: "7302781115259997442" },
    {  videoId: "7372472565291322632" },
    {   videoId: "7375085750888582401" },
    {   videoId: "7101558868139969818" },
    {  videoId: "7327594586128289025" },
    {   videoId: "7435979036767079681" },
  ];

  return (
    <section className="py-24 px-4 bg-zinc-900/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Viral Tiktoks
          </h2>
          <Link 
            href="https://www.tiktok.com/@haziqhaimee" 
            className="flex items-center gap-2 mt-4 text-white hover:underline"
            target="_blank"
          >
            <FaTiktok className="w-6 h-6" />
            Follow on TikTok
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <blockquote 
                className="tiktok-embed" 
                cite={`https://www.tiktok.com/@haziqhaimee/video/${post.videoId}`} 
                data-video-id={post.videoId} 
                style={{ maxWidth: '605px', minWidth: '325px' }}
              >
                <section>
                  <a target="_blank" title="@haziqhaimee" href="https://www.tiktok.com/@haziqhaimee?refer=embed">@haziqhaimee</a> Haziq Brozkey 💇🏻‍♂️ 
                  <a title="keratintreatment" target="_blank" href="https://www.tiktok.com/tag/keratintreatment?refer=embed">#keratintreatment</a> 
                  <a title="dryhairtips" target="_blank" href="https://www.tiktok.com/tag/dryhairtips?refer=embed">#dryhairtips</a> 
                  <a title="blondesbarber" target="_blank" href="https://www.tiktok.com/tag/blondesbarber?refer=embed">#blondesbarber</a> 
                  <a target="_blank" title="♬ Yasashi - CXSPER" href="https://www.tiktok.com/music/Yasashi-7304653959367887648?refer=embed">♬ Yasashi - CXSPER</a>
                </section>
              </blockquote>
              <script async src="https://www.tiktok.com/embed.js"></script>
              
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  if (!isOpen) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-zinc-900/90 backdrop-blur-xl w-full max-w-md p-6 rounded-2xl border border-zinc-800"
      >
        <h3 className="text-2xl font-bold mb-4 text-white">Book an Appointment</h3>
        <form className="space-y-4">
          <input 
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-black/20 border border-zinc-800 text-white placeholder:text-zinc-500"
          />
          <input 
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-black/20 border border-zinc-800 text-white placeholder:text-zinc-500"
          />
          <select className="w-full p-3 rounded-lg bg-black/20 border border-zinc-800 text-white">
            <option>Select Service</option>
            <option>Haircut</option>
            <option>Beard Trim</option>
            <option>Hair Treatment</option>
          </select>
          <input 
            type="datetime-local"
            className="w-full p-3 rounded-lg bg-black/20 border border-zinc-800 text-white"
          />
          <div className="flex justify-end gap-4">
            <button 
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-zinc-800 text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              Book Now
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};



export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [year, setYear] = useState(currentYear)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    setYear(new Date().getFullYear())
  }, [])

  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = document.querySelector('video');
    console.log('Video element:', video);
    console.log('Video source:', video?.currentSrc);
    console.log('Video ready state:', video?.readyState);
    console.log('Video error:', video?.error);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 -z-10" />



{/* Hero Section */}
<section className="relative min-h-screen flex items-center pt-16 bg-black">
<div className="absolute inset-0 w-full h-full">
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black z-[1]" />
    
    {/* Video Element */}
    <video 
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoPlay
      loop 
      playsInline
      muted={isMuted}
      controls={false}
      preload="auto"
    >
      <source src="/videos/brozkeyvlog.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Mute/Unmute Button */}
    <button
      onClick={() => setIsMuted(!isMuted)}
      className="absolute bottom-8 right-8 z-[2] p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/50 transition-all group"
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
      ) : (
        <Volume2 className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
      )}
    </button>
  </div>
  {/* Hero Content */}
<div className="container mx-auto px-4 text-center relative z-[2]">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-4xl mx-auto"
  >
    <span className="text-zinc-300 text-lg mb-4 block">Premium House Call Barber Service</span>
    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
      Your Personal Barber,
      <br />
      At Your Doorstep
    </h1>
    <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-8 drop-shadow-lg">
      Experience professional grooming in the comfort of your home. Professional cuts, premium service, perfect convenience.
    </p>

    {/* Service Highlights */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <MapPin className="w-6 h-6 text-white mb-2 mx-auto" />
        <span className="text-zinc-300 text-sm">Service at Your Location</span>
      </div>
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <Scissors className="w-6 h-6 text-white mb-2 mx-auto" />
        <span className="text-zinc-300 text-sm">Professional Equipment</span>
      </div>
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <Clock className="w-6 h-6 text-white mb-2 mx-auto" />
        <span className="text-zinc-300 text-sm">Flexible Scheduling</span>
      </div>
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <Award className="w-6 h-6 text-white mb-2 mx-auto" />
        <span className="text-zinc-300 text-sm">Expert Styling</span>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <button
        onClick={() => setIsBookingOpen(true)}
        className="px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Book House Call
      </button>
      <div className="flex items-center gap-2 text-white">
        <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
          Starting from RM180
        </span>
        <span className="text-zinc-400">|</span>
        <Link
          href="/services"
          className="flex items-center gap-1 hover:text-zinc-300 transition-colors"
        >
          View Services <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="mt-12 pt-8 border-t border-white/10">
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-white fill-white" />
          <span className="text-zinc-300">4.9 Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-white" />
          <span className="text-zinc-300">2000+ Satisfied Clients</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-white" />
          <span className="text-zinc-300">Certified Professional</span>
        </div>
      </div>
    </div>
  </motion.div>
</div>
</section>
  {/* About Section - Enhanced */}
<section className="container mx-auto px-6 py-24">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
    About Brozkey
  </h2>
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4 text-white">Haziq Haimee</h3>
      <p className="text-zinc-300 text-lg leading-relaxed mb-6">
        Professional hair stylist and barber with over 7 years of experience, specializing in men`&apos;`s dry hair treatments and keratin procedures. Creator of the viral Hairducation series and passionate educator in the field of men`&apos;`s grooming.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/50 backdrop-blur-xl border border-zinc-800">
          <Award className="w-8 h-8 text-white" />
          <div>
            <h4 className="font-semibold text-white">Expert in Men`&apos;`s Hair Care</h4>
            <p className="text-sm text-zinc-400">Specialized in modern techniques</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/50 backdrop-blur-xl border border-zinc-800">
          <Users className="w-8 h-8 text-white" />
          <div>
            <h4 className="font-semibold text-white">200K+ Social Media Following</h4>
            <p className="text-sm text-zinc-400">Growing community of professionals</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/50 backdrop-blur-xl border border-zinc-800">
          <Book className="w-8 h-8 text-white" />
          <div>
            <h4 className="font-semibold text-white">Creator of Hairducation Tiktok Series</h4>
            <p className="text-sm text-zinc-400">Educational content creator</p>
          </div>
        </div>
      </div>
    </div>
    <div className="relative">
      <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-800">
        <Image
          src="/images/brozkey.png"
          alt="Haziq Haimee"
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute -bottom-6 -right-6 bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800">
        <p className="text-4xl font-bold text-white">7+</p>
        <p className="text-sm text-zinc-400">Years Experience</p>
      </div>
    </div>
  </div>
</section>
{/* The Journey Section */}
<section className="container mx-auto px-6 py-24">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
      The Journey
    </h2>
    <p className="text-zinc-400 text-center mb-12 text-lg">
      Follow BrozKey`&apos;`s path in the #barberlife, from passion to profession
    </p>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
    >
      <VideoPlayer />
    </motion.div>
    
    <div className="mt-8 flex justify-center gap-4">
      <Link
        href="https://www.tiktok.com/@brozkey"
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:bg-zinc-800/50 transition-all"
      >
        <span className="text-white">Follow on TikTok</span>
      </Link>
      <Link
        href="https://www.youtube.com/@brozkey"
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:bg-zinc-800/50 transition-all"
      >
        <Youtube className="w-5 h-5 text-white" />
        <span className="text-white">Watch More</span>
      </Link>
    </div>
  </div>
</section>
        {/* Stats Section - Enhanced */}
        <section className="py-24 px-4 bg-zinc-900/50 backdrop-blur-xl">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} 
                  className="bg-zinc-800/30 backdrop-blur-xl rounded-2xl p-6 border border-zinc-700/30 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-center mb-4 text-white">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold mb-2 text-white text-center">
                    {stat.number}
                  </p>
                  <p className="text-zinc-400 text-sm text-center">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>
  
        {/* Trending Styles Section */}
        <TrendingStyles />
  
        {/* Testimonials Section - Enhanced */}
        <section className="py-24 px-4 bg-zinc-900/30 backdrop-blur-xl">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              What Our Client Says
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-zinc-800/20 backdrop-blur-xl border border-zinc-700/30 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                      <p className="text-sm text-zinc-400">{testimonial.role}</p>
                      <div className="flex gap-1 mt-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-white fill-white" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-zinc-300 italic"> &quot;{testimonial.content}&quot;</p>

                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Instagram Feed Section */}
        <InstagramFeed />
  
        {/* Achievements Section
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <p className="text-3xl font-bold mb-2 text-white">
                    {achievement.count}
                  </p>
                  <p className="text-zinc-400">{achievement.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
  
        {/* Contact Section - Enhanced */}
        <section className="py-24 px-4 bg-gradient-to-b from-zinc-900 to-black">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Contact Us
            </h2>
            <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-lg bg-zinc-800/20 backdrop-blur-xl border border-zinc-700/30 mb-10"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.758689152256!2d101.6041826!3d3.1581964999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f064718b02d%3A0x699f8f65c73cb331!2sHair%20Library!5e0!3m2!1sen!2smy!4v1734364514760!5m2!1sen!2smy" 
                    width="1250" 
                    height="350" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
              
              <div className="space-y-8">
                {/* Embed Map */}
               
                
                {/* Contact Details */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/20 backdrop-blur-xl border border-zinc-700/30"
                >
                  <MapPin className="w-8 h-8 text-white" />
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-zinc-400">2nd Floor, 21, Jalan PJU 7/7a, Mutiara Damansara, 47800 Petaling Jaya, Selangor, Malaysia</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/20 backdrop-blur-xl border border-zinc-700/30"
                >
                  <Mail className="w-8 h-8 text-white" />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-zinc-400">contact@brozkey.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/20 backdrop-blur-xl border border-zinc-700/30"
                >
                  <Clock className="w-8 h-8 text-white" />
                  <div>
                    <h4 className="font-semibold text-white">Operating Hours</h4>
                    <p className="text-zinc-400">10AM - 9PM</p>
                  </div>
                </motion.div>
              </div>
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6" 
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
              >
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full p-4 rounded-lg bg-zinc-800/20 backdrop-blur-xl border border-zinc-700/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all outline-none text-white placeholder:text-zinc-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full p-4 rounded-lg bg-zinc-800/20 backdrop-blur-xl border border-zinc-700/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all outline-none text-white placeholder:text-zinc-500"
                  />
                  <textarea 
                    placeholder="Message" 
                    rows={4}
                    className="w-full p-4 rounded-lg bg-zinc-800/20 backdrop-blur-xl border border-zinc-700/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all outline-none resize-none text-white placeholder:text-zinc-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-black px-8 py-4 rounded-lg hover:bg-zinc-200 transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="py-16 px-4 border-t border-zinc-800 bg-black">
          <div className="container mx-auto flex items-center">
            {/* Logo Section */}
            <div className="mr-14">
              <Image 
                src="/images/brozkeylandscape.png" // Update with the correct path to your logo
                alt="BrozKey Logo"
                width={200} // Adjust width as needed
                height={120} // Adjust height as needed
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 flex-grow">
              <div>
                <h4 className="font-semibold mb-6 text-white">Academy</h4>
                <ul className="space-y-4">
                  <li><Link href="/courses" className="text-zinc-400 hover:text-white transition-colors">Courses</Link></li>
                  <li><Link href="/certification" className="text-zinc-400 hover:text-white transition-colors">Certification</Link></li>
                  <li><Link href="/mentorship" className="text-zinc-400 hover:text-white transition-colors">Mentorship</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-6 text-white">Community</h4>
                <ul className="space-y-4">
                  <li><Link href="/events" className="text-zinc-400 hover:text-white transition-colors">Events</Link></li>
                  <li><Link href="/forum" className="text-zinc-400 hover:text-white transition-colors">Forum</Link></li>
                  <li><Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-6 text-white">Company</h4>
                <ul className="space-y-4">
                  <li><Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/careers" className="text-zinc-400 hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-6 text-white">Legal</h4>
                <ul className="space-y-4">
                  <li><Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms</Link></li>
                  <li><Link href="/cookies" className="text-zinc-400 hover:text-white transition-colors">Cookies</Link></li>
                </ul>
              </div>
            </div>
           
          </div>
          <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-400">
              <p>&copy; {year} BrozKey. All rights reserved.</p>
            </div>
        </footer>
  
        {/* Booking Modal */}
        <AnimatePresence>
          {isBookingOpen && (
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
          )}
        </AnimatePresence>
      </main>
    );
  }