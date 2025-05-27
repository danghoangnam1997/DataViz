import Link from 'next/link';
import { Navigation } from './navigation';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg text-gradient">Luminescence Data</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
