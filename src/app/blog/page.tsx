import Link from 'next/link';
import Image from 'next/image';
import { PageWrapper } from '@/components/page-wrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts, type BlogPost } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog - Luminescence Data',
  description: 'Insights, project updates, and industry trends from Luminescence Data.',
};

export default function BlogPage() {
  return (
    <PageWrapper>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sharing insights on lighting artistry, data visualization, project development, and industry trends.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </PageWrapper>
  );
}

interface BlogPostCardProps {
  post: BlogPost;
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300 ease-out shadow-lg hover:shadow-primary/20">
      {post.imageUrl && (
        <Link href={`/blog/${post.slug}`} className="block relative w-full aspect-video">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={post.imageHint}
          />
        </Link>
      )}
      <CardHeader>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{post.excerpt}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
