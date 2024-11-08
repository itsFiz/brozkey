'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    badge?: string;
    price?: string;
  };
  index: number;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-background/40 backdrop-blur-xl rounded-xl border border-gray-200/20 dark:border-gray-800/20 p-6 hover:border-primary/50 transition-all">
      {service.badge && (
        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
          {service.badge}
        </span>
      )}
      
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      
      {service.price && (
        <div className="text-lg font-bold mb-4">{service.price}</div>
      )}
      
      <Link href={service.link} className="inline-flex items-center text-primary text-sm font-medium group-hover:underline">
        Learn more <ChevronRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
}