'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-6 py-2 overflow-x-auto whitespace-nowrap">
      <Link href="/" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-700" />
            {isLast || !item.href ? (
              <span className="text-slate-300 font-semibold truncate max-w-[200px]">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-indigo-400 transition-colors truncate max-w-[150px]"
              >
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
