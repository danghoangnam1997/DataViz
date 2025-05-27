import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageWrapper } from '@/components/page-wrapper';
import { blogPosts, type BlogPost } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: `${post.title} - Luminescence Data`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageWrapper className="max-w-3xl mx-auto">
      <article className="prose prose-invert dark:prose-invert prose-lg lg:prose-xl max-w-none prose-headings:text-gradient prose-a:text-primary hover:prose-a:text-accent prose-strong:text-foreground">
        {post.imageUrl && (
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
              priority
            />
          </div>
        )}
        <h1 className="mb-4">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

      </article>
      <Separator className="my-12" />
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    </PageWrapper>
  );
}
