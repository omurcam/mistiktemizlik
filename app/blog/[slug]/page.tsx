import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getBlogPostBySlug, getAllBlogPosts } from '../../../data/blogData';
import { notFound } from 'next/navigation';
import BlogPageClient from './BlogPageClient';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return <BlogPageClient post={post} relatedPosts={relatedPosts} />;
} 