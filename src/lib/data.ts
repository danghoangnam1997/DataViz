export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  imageHint?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  imageHint?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Project Aurora',
    description: 'Cinematic lighting for a fantasy environment, focusing on ethereal glows and dramatic shadows.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'fantasy landscape',
    category: 'Cinematic',
  },
  {
    id: '2',
    title: 'Urban Nights',
    description: 'Real-time lighting setup for a neo-noir city scene, emphasizing reflections and volumetric fog.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'city night',
    category: 'Real-time',
  },
  {
    id: '3',
    title: 'Character Showcase',
    description: 'Studio lighting techniques to highlight character details and materials.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'portrait studio',
    category: 'Studio',
  },
  {
    id: '4',
    title: 'Interior Ambiance',
    description: 'Creating a cozy and realistic interior lighting setup for architectural visualization.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'modern interior',
    category: 'Architectural',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-art-of-cinematic-lighting',
    title: 'The Art of Cinematic Lighting in Games',
    date: '2024-07-15',
    excerpt: 'Exploring techniques and principles behind creating breathtaking cinematic lighting for game environments.',
    content: '<p>Cinematic lighting in games is more than just illuminating a scene; it\'s about storytelling, mood-setting, and guiding the player\'s eye. This post delves into the core principles, from understanding light behavior to advanced techniques like volumetric lighting and color grading.</p><p>We will cover topics such as:</p><ul><li>Three-point lighting setups</li><li>The role of shadows in creating depth</li><li>Using color to evoke emotion</li><li>Optimizing cinematic lighting for performance</li></ul>',
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'game art',
  },
  {
    slug: 'data-visualization-principles',
    title: 'Effective Data Visualization: Telling Stories with Data',
    date: '2024-07-22',
    excerpt: 'A guide to the fundamental principles of data visualization, ensuring clarity, accuracy, and impact.',
    content: '<p>Data visualization is a powerful tool for communication. When done effectively, it can reveal insights, tell compelling stories, and drive decision-making. This post explores key principles for creating visualizations that are not only aesthetically pleasing but also clear, accurate, and impactful.</p><p>Key areas include:</p><ul><li>Choosing the right chart type</li><li>The importance of color and contrast</li><li>Avoiding chart junk and clutter</li><li>Storytelling techniques with data</li></ul>',
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'charts graphs',
  },
  {
    slug: 'pbr-lighting-workflows',
    title: 'Mastering PBR Lighting Workflows',
    date: '2024-08-01',
    excerpt: 'An in-depth look at Physically Based Rendering (PBR) and how it revolutionizes lighting in 3D graphics.',
    content: '<p>Physically Based Rendering (PBR) has become the standard for creating realistic materials and lighting in modern 3D graphics. This post provides a comprehensive overview of PBR concepts, common workflows, and tips for achieving stunning results in your lighting setups.</p><p>We will discuss:</p><ul><li>Core concepts: Albedo, Metallic, Roughness, AO</li><li>Energy conservation and its impact on lighting</li><li>Working with HDRIs and image-based lighting</li><li>Debugging common PBR issues</li></ul>',
    imageUrl: 'https://placehold.co/800x450.png',
    imageHint: 'abstract 3d',
  },
];
