import Image from 'next/image';
import { PageWrapper } from '@/components/page-wrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { galleryItems, type GalleryItem } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Lighting Gallery - Luminescence Data',
  description: 'Showcase of lighting projects by Luminescence Data.',
};

export default function GalleryPage() {
  return (
    <PageWrapper>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Lighting Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated collection of my lighting work, showcasing diverse styles and techniques across various projects.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <GalleryItemCard key={item.id} item={item} />
        ))}
      </div>
    </PageWrapper>
  );
}

interface GalleryItemCardProps {
  item: GalleryItem;
}

function GalleryItemCard({ item }: GalleryItemCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-primary/20">
      <div className="relative w-full aspect-video">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          data-ai-hint={item.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{item.title}</CardTitle>
        <Badge variant="secondary" className="w-fit">{item.category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{item.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
