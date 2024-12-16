"use client"

import { 
  Scissors, Package, Camera, 
  Droplet,  Package2, Star, Zap, Search,
  ShoppingBag
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Products', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'tools', name: 'Professional Tools', icon: <Scissors className="w-5 h-5" /> },
    { id: 'hair-care', name: 'Hair Care', icon: <Droplet className="w-5 h-5" /> },
    { id: 'equipment', name: 'Equipment', icon: <Camera className="w-5 h-5" /> },
    { id: 'accessories', name: 'Accessories', icon: <Package2 className="w-5 h-5" /> },
    { id: 'bestsellers', name: 'Best Sellers', icon: <Star className="w-5 h-5" /> },
  ]

  const products = [
    // Professional Tools Category
    {
      id: 1,
      category: 'tools',
      name: 'Professional Barber Scissors',
      price: 129.99,
      rating: 4.8,
      reviews: 245,
      image: "/api/placeholder/400/400",
      description: "Japanese steel precision cutting scissors for professional barbers",
      badge: "Best Seller",
      affiliate_link: "/affiliate/scissors-pro"
    },
    {
      id: 2,
      category: 'tools',
      name: 'Wireless Hair Clipper Pro',
      price: 199.99,
      rating: 4.9,
      reviews: 189,
      image: "/api/placeholder/400/400",
      description: "Professional cordless clipper with 4-hour battery life",
      badge: "New",
      affiliate_link: "/affiliate/clipper-pro"
    },
    // Hair Care Products
    {
      id: 3,
      category: 'hair-care',
      name: 'Premium Styling Pomade',
      price: 24.99,
      rating: 4.7,
      reviews: 156,
      image: "/api/placeholder/400/400",
      description: "Strong hold matte finish pomade for professional styling",
      badge: null,
      affiliate_link: "/affiliate/pomade-premium"
    },
    {
      id: 4,
      category: 'hair-care',
      name: 'Beard Growth Oil',
      price: 34.99,
      rating: 4.6,
      reviews: 123,
      image: "/api/placeholder/400/400",
      description: "Natural beard growth oil with essential nutrients",
      badge: "Popular",
      affiliate_link: "/affiliate/beard-oil"
    },
    // Equipment Category
    {
      id: 5,
      category: 'equipment',
      name: 'Professional Ring Light Kit',
      price: 199.99,
      rating: 4.8,
      reviews: 78,
      image: "/api/placeholder/400/400",
      description: "18-inch LED ring light with stand for content creation",
      badge: "Creator Choice",
      affiliate_link: "/affiliate/ring-light"
    },
    {
      id: 6,
      category: 'equipment',
      name: 'Barber Mirror Station',
      price: 299.99,
      rating: 4.9,
      reviews: 92,
      image: "/api/placeholder/400/400",
      description: "LED-illuminated mirror station with storage",
      badge: "Pro Choice",
      affiliate_link: "/affiliate/mirror-station"
    },
    // Add more products...
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/api/placeholder/1920/1080"
            alt="Products Banner"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Barber Products
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Curated selection of premium tools and products for professional barbers
          </p>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20">
  <div className="container mx-auto px-4 py-6">
    <div className="flex flex-col gap-6">
      {/* Search Input */}
      <div className="relative max-w-md mx-auto w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-background border border-gray-200/20 dark:border-gray-800/20 focus:border-primary focus:ring-1 focus:ring-primary"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Category Tabs - Redesigned */}
      <nav className="flex justify-center">
        <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-muted/30">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-200 
                ${activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                }
              `}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Active Category Info */}
      <div className="text-center text-sm text-muted-foreground">
        {products.filter(product => 
          activeCategory === 'all' || product.category === activeCategory
        ).length} products found
      </div>
    </div>
  </div>
</section>

{/* Optional: Add Quick Stats Bar */}
<section className="border-b border-gray-200/20 dark:border-gray-800/20 bg-background/60">
  <div className="container mx-auto px-4 py-3">
    <div className="flex justify-center gap-8 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4" />
        <span>Top Rated Products</span>
      </div>
      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4" />
        <span>Fast Worldwide Shipping</span>
      </div>
      <div className="flex items-center gap-2">
        <Package className="w-4 h-4" />
        <span>Secure Packaging</span>
      </div>
    </div>
  </div>
</section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products
              .filter(product => 
                (activeCategory === 'all' || product.category === activeCategory) &&
                (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 product.description.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((product) => (
                <a
                  key={product.id}
                  href={product.affiliate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-background/40 backdrop-blur-xl rounded-xl border border-gray-200/20 dark:border-gray-800/20 overflow-hidden hover:border-primary/50 transition-all hover:transform hover:scale-105"
                >
                  {product.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary z-10">
                      {product.badge}
                    </span>
                  )}
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">${product.price}</span>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm">{product.rating} ({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Kit */}
            <div className="relative h-[400px] rounded-xl overflow-hidden group">
              <Image
                src="/api/placeholder/600/800"
                alt="Starter Kit"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter Kit</h3>
                <p className="text-gray-200 mb-4">Everything you need to start your barbering journey</p>
                <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Pro Equipment */}
            <div className="relative h-[400px] rounded-xl overflow-hidden group">
              <Image
                src="/api/placeholder/600/800"
                alt="Pro Equipment"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Pro Equipment</h3>
                <p className="text-gray-200 mb-4">Professional-grade tools for the serious barber</p>
                <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Content Creator */}
            <div className="relative h-[400px] rounded-xl overflow-hidden group">
              <Image
                src="/api/placeholder/600/800"
                alt="Content Creator"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Content Creator</h3>
                <p className="text-gray-200 mb-4">Complete setup for social media content creation</p>
                <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}