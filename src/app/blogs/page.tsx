"use client";

import { useState, useMemo, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, User, Search, LayoutGrid, List } from "lucide-react";
import RevealText from "@/components/shared/reveal-text";
import PillBadge from "@/components/shared/pill-badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeading from "@/components/shared/section-heading";
import { BLOG_POSTS } from "@/lib/blog-data";

const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(6);


  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(6);
  }, [searchQuery, selectedCategory]);



  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-[-10%] top-[40%] h-[40vw] w-[40vw] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="container-wide relative z-10 space-y-12">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Our Journal"
            title="Stories from the Mountains"
            description="Discover travel tips, local insights, and breathtaking experiences in and around Valparai."
            center
          />
        </div>

        {/* Toolbar: Search and Filters Centered Hero Style */}
        <div className="flex flex-col items-center justify-center gap-8 max-w-3xl mx-auto mt-4">
          {/* Search */}
          <div className="relative w-full">
            <Search className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 h-16 rounded-full border-border bg-card shadow-sm focus-visible:ring-primary/30 text-lg w-full text-center"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 border",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-muted-foreground border-border hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info & View Toggle */}
        <div className="flex items-center justify-between mt-8 border-b border-border/50 pb-4">
          <p className="text-sm font-medium text-muted-foreground">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'}
          </p>
          
          <div className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "rounded-full p-2 transition-all duration-300",
                viewMode === "grid" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              aria-label="Grid View"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "rounded-full p-2 transition-all duration-300",
                viewMode === "list" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              aria-label="List View"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Blog Posts Display */}
        <motion.div
          key={viewMode} // Re-animate on view mode change
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1, 0.1)}
          className={cn(
            "grid gap-8",
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1 w-full" 
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.length > 0 ? (
              filteredPosts.slice(0, visibleCount).map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
                  className="h-full"
                >
                  <Link href={`/blogs/${post.slug}`} className="h-full block">
                    <Card className={cn(
                      "group relative flex overflow-hidden rounded-3xl border-border/60 bg-background/50 shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 backdrop-blur-sm h-full",
                      viewMode === "grid" ? "flex-col py-0" : "flex-col sm:flex-row py-0"
                    )}>
                      <div className={cn(
                        "relative overflow-hidden shrink-0",
                        viewMode === "grid" ? "h-56 sm:h-64 w-full" : "h-56 sm:h-auto sm:w-2/5 lg:w-1/3 xl:w-[450px]"
                      )}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                        
                        <div className="absolute left-4 top-4 z-20">
                          <PillBadge color={post.featured ? "gold" : "emerald"} className="shadow-lg backdrop-blur-md">
                            {post.category}
                          </PillBadge>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col">
                        <CardHeader className={cn(
                          "flex-1 space-y-3 px-6 pb-2",
                          viewMode === "grid" ? "pt-6" : "pt-6 sm:pt-8"
                        )}>
                          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <CardTitle className={cn(
                            "font-bold leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors duration-300",
                            viewMode === "grid" ? "line-clamp-2 text-xl" : "line-clamp-2 sm:line-clamp-none text-xl sm:text-2xl"
                          )}>
                            {post.title}
                          </CardTitle>
                          <p className={cn(
                            "leading-relaxed text-muted-foreground",
                            viewMode === "grid" ? "line-clamp-3 text-sm" : "line-clamp-3 sm:line-clamp-4 text-sm sm:text-base mt-2"
                          )}>
                            {post.excerpt}
                          </p>
                        </CardHeader>

                        <CardFooter className={cn(
                          "mt-auto flex items-center justify-between border-border/40 px-6 py-4",
                          viewMode === "grid" ? "border-t" : "border-t sm:border-t-0 sm:pt-0"
                        )}>
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <User className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-semibold text-foreground">{post.author}</span>
                          </div>
                          <span className="inline-flex h-8 items-center gap-1.5 px-3 text-xs font-semibold text-primary transition-colors group-hover:bg-primary/10 rounded-md">
                            Read More
                            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </span>
                        </CardFooter>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="col-span-full flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Search className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">No articles found</h3>
                <p className="mt-3 text-muted-foreground max-w-md">
                  We couldn't find any articles matching your current search and filter criteria. Try adjusting them.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-8 rounded-xl h-12 px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all"
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                >
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button (Only show if there are more posts to load) */}
        {filteredPosts.length > visibleCount && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 flex justify-center"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-xl h-14 border-primary/20 px-10 font-semibold hover:bg-primary/5 hover:text-primary transition-all"
              onClick={() => setVisibleCount(prev => prev + 6)}
            >
              Load More Articles
            </Button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
