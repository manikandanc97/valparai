import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, Clock, User, ArrowRight, Share2, Map, Compass } from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import PillBadge from "@/components/shared/pill-badge";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get 3 related posts (excluding current one, ideally from same category)
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category)
    .concat(BLOG_POSTS.filter(p => p.id !== post.id && p.category !== post.category))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full lg:h-[70vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

        {/* Back Button */}
        <div className="absolute left-4 top-24 z-20 sm:left-8 lg:left-12 lg:top-32">
          <Link href="/blogs">
            <Button variant="outline" size="sm" className="rounded-full bg-background/50 backdrop-blur-md border-border/50 hover:bg-background/80 text-foreground shadow-sm">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Blogs
            </Button>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12 lg:p-16 z-10">
          <div className="mx-auto max-w-4xl space-y-6">
            <PillBadge color="emerald" className="shadow-lg backdrop-blur-md mb-4 bg-primary/20 text-primary-foreground border-primary/30">
              {post.category}
            </PillBadge>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/80 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md text-white border border-white/10">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-base text-white">{post.author}</span>
              </div>
              <div className="hidden sm:block h-1 w-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="hidden sm:block h-1 w-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide mx-auto mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-8">
          <article className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-3xl prose-img:shadow-xl max-w-none">
            {post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="text-2xl sm:text-3xl mt-12 mb-6 text-foreground">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote key={index} className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-2xl my-8 italic text-foreground text-xl font-medium shadow-sm">
                    "{block.text}"
                  </blockquote>
                );
              }
              return null;
            })}
          </article>

          {/* Social Share */}
          <div className="mt-16 flex items-center justify-between border-y border-border/50 py-6">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <Share2 className="h-5 w-5 text-primary" />
              <span>Share this article</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-10">
            {/* Author Card */}
            <div className="rounded-3xl border border-border/50 bg-card/30 p-8 backdrop-blur-md shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-border/50 pb-4">
                <User className="h-5 w-5 text-primary" />
                About the Author
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 text-xl font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">{post.author}</h4>
                  <p className="text-sm text-muted-foreground">Travel Enthusiast & Writer</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate about exploring the unseen beauties of nature and sharing stories that inspire wanderlust. Dedicated to bringing the best travel guides for Valparai.
              </p>
            </div>

            {/* Tour Promo Block */}
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 p-8 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                  <Map className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground leading-tight">Ready for an adventure?</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Discover the untouched beauty of Valparai. We offer curated travel packages that include sightseeing, stays, and more.
              </p>
              <div className="space-y-3 relative z-10">
                <Link href="/packages" className="block">
                  <Button className="w-full h-12 rounded-xl font-semibold shadow-md group-hover:shadow-lg transition-all">
                    <Compass className="mr-2 h-4 w-4" />
                    Explore Packages
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full h-12 rounded-xl font-semibold border-primary/20 hover:bg-primary/5">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="container-wide mx-auto mt-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Related Articles</h2>
          <Link href="/blogs">
            <Button variant="ghost" className="hidden sm:flex text-primary hover:bg-primary/5 font-semibold">
              View all posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((related) => (
            <Link key={related.id} href={`/blogs/${related.slug}`} className="block group h-full">
              <Card className="group relative flex overflow-hidden rounded-3xl border-border/60 bg-background/50 shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 backdrop-blur-sm h-full flex-col py-0">
                <div className="relative overflow-hidden shrink-0 h-52 w-full">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                  <div className="absolute left-4 top-4 z-20">
                    <PillBadge color={related.featured ? "gold" : "emerald"} className="shadow-lg backdrop-blur-md">
                      {related.category}
                    </PillBadge>
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <CardHeader className="flex-1 space-y-3 px-6 pb-2 pt-6">
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{related.date}</span>
                      </div>
                    </div>
                    <CardTitle className="font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 text-xl">
                      {related.title}
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="mt-auto flex items-center justify-between border-t border-border/40 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-muted-foreground">{related.author}</span>
                    </div>
                    <span className="inline-flex h-8 items-center gap-1.5 px-3 text-xs font-semibold text-primary transition-colors group-hover:bg-primary/10 rounded-md">
                      Read
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center sm:hidden">
          <Link href="/blogs">
            <Button variant="outline" className="w-full h-12 rounded-xl text-primary border-primary/20 font-semibold hover:bg-primary/5">
              View all posts
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
