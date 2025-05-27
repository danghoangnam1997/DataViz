"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Palette, BarChart3, FileText, Mail } from 'lucide-react';
import React from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/gallery', label: 'Lighting Gallery', icon: Palette },
  { href: '/data-visualizations', label: 'Data Visualizations', icon: BarChart3 },
  { href: '/blog', label: 'Blog', icon: FileText },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const NavLinks = ({isMobile}: {isMobile?: boolean}) => (
    navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={cn(
          'transition-colors hover:text-foreground/80',
          pathname === item.href ? 'text-foreground font-semibold' : 'text-foreground/60',
          isMobile ? 'flex items-center gap-2 py-2 text-lg' : 'text-sm'
        )}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        {isMobile && <item.icon className="h-5 w-5" />}
        {item.label}
      </Link>
    ))
  );

  return (
    <>
      <nav className="hidden md:flex gap-6 items-center">
        <NavLinks />
      </nav>
      <div className="md:hidden ml-auto">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs p-6">
            <Link href="/" className="mb-6 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="font-bold text-xl text-gradient">Luminescence Data</span>
            </Link>
            <nav className="flex flex-col gap-4">
              <NavLinks isMobile />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
