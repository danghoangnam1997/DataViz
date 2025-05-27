import Image from 'next/image';
import Link from 'next/link';
import { PageWrapper } from '@/components/page-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Palette, BarChart3, FileText } from 'lucide-react';

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Crafting <span className="text-gradient">Worlds</span> with Light & Data
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Welcome to my portfolio. I'm a passionate Lighting Artist specializing in creating immersive visual experiences. Explore my work in game lighting, cinematics, and insightful data visualizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-gradient-from to-gradient-to text-primary-foreground hover:opacity-90 transition-opacity">
                <Link href="/gallery">
                  View Lighting Gallery <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://placehold.co/1200x800.png"
              alt="Hero image showcasing lighting work"
              width={1200}
              height={800}
              className="rounded-lg shadow-2xl object-cover aspect-[3/2]"
              data-ai-hint="dramatic lighting"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Explore My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Palette className="h-10 w-10 text-primary" />}
            title="Lighting Gallery"
            description="Discover a collection of my lighting projects, from cinematic scenes to real-time environments."
            link="/gallery"
            linkText="View Gallery"
          />
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10 text-primary" />}
            title="Data Visualizations"
            description="Interactive charts and graphs that bring data to life and uncover meaningful insights."
            link="/data-visualizations"
            linkText="See Visualizations"
          />
          <FeatureCard
            icon={<FileText className="h-10 w-10 text-primary" />}
            title="Blog"
            description="Read my thoughts on lighting artistry, data trends, and project development insights."
            link="/blog"
            linkText="Read Blog"
          />
        </div>
      </section>
    </PageWrapper>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

function FeatureCard({ icon, title, description, link, linkText }: FeatureCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="items-center">
        {icon}
        <CardTitle className="mt-4 text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
      <CardContent className="text-center">
         <Button asChild variant="outline">
            <Link href={link}>{linkText} <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
      </CardContent>
    </Card>
  );
}
