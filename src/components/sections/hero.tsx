// src/components/sections/HeroSection.tsx
'use client';

import { Button } from "../ui/button";


const stats = [
  { value: "200K+", label: "Followers" },
  { value: "8M+", label: "Likes" },
  { value: "1000+", label: "Students" }
];

export function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-900 to-black text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container mx-auto px-6 py-32">
        <h1 className="text-5xl font-bold mb-6">Brozkey</h1>
        <p className="text-2xl mb-8">Transforming Men's Hair Education</p>
        <div className="flex gap-4">
          <Button>Book Consultation</Button>
          <Button variant="outline">Watch Tutorials</Button>
        </div>
        <div className="mt-8 flex gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}