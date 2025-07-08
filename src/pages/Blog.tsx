import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Maximizing ROI with Influencer Marketing: A Comprehensive Guide",
    excerpt: "Learn how to create successful influencer marketing campaigns that drive real business results and maximize your return on investment.",
    category: "Marketing Strategy",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg",
    slug: "maximizing-roi-influencer-marketing"
  },
  {
    id: 2,
    title: "The Rise of Micro-Influencers: Why Small Accounts Drive Big Results",
    excerpt: "Discover why micro-influencers are becoming the go-to choice for brands looking to build authentic connections with targeted audiences.",
    category: "Industry Trends",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/placeholder.svg",
    slug: "rise-of-micro-influencers"
  },
  {
    id: 3,
    title: "Content Creation Best Practices for 2024",
    excerpt: "Stay ahead of the curve with our comprehensive guide to content creation trends and best practices for the coming year.",
    category: "Content Strategy",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "/placeholder.svg",
    slug: "content-creation-best-practices-2024"
  },
  {
    id: 4,
    title: "Building a Strong Personal Brand on Social Media",
    excerpt: "Learn the essential steps to develop and maintain a powerful personal brand that resonates with your target audience.",
    category: "Personal Branding",
    date: "2024-01-08",
    readTime: "7 min read",
    image: "/placeholder.svg",
    slug: "building-strong-personal-brand"
  },
  {
    id: 5,
    title: "The Power of User-Generated Content in Digital Marketing",
    excerpt: "Explore how UGC can transform your marketing strategy and create authentic connections with your audience.",
    category: "Content Marketing",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "/placeholder.svg",
    slug: "power-of-user-generated-content"
  },
  {
    id: 6,
    title: "Social Media Analytics: Measuring What Matters",
    excerpt: "A deep dive into the key metrics and analytics that truly matter for your social media marketing success.",
    category: "Analytics",
    date: "2024-01-03",
    readTime: "8 min read",
    image: "/placeholder.svg",
    slug: "social-media-analytics-guide"
  },
  {
    id: 7,
    title: "Creating Viral Content: Strategy vs Luck",
    excerpt: "Understand the science behind viral content and learn strategies to increase your content's viral potential.",
    category: "Content Strategy",
    date: "2024-01-01",
    readTime: "7 min read",
    image: "/placeholder.svg",
    slug: "creating-viral-content"
  },
  {
    id: 8,
    title: "The Future of Influencer Marketing: AI and Automation",
    excerpt: "Explore how artificial intelligence and automation are reshaping the influencer marketing landscape.",
    category: "Technology",
    date: "2023-12-29",
    readTime: "9 min read",
    image: "/placeholder.svg",
    slug: "future-influencer-marketing-ai"
  },
  {
    id: 9,
    title: "Sustainable Marketing: Building Long-term Creator Relationships",
    excerpt: "Learn how to develop and maintain lasting partnerships with creators for sustainable marketing success.",
    category: "Partnership Strategy",
    date: "2023-12-27",
    readTime: "6 min read",
    image: "/placeholder.svg",
    slug: "sustainable-creator-relationships"
  },
  {
    id: 10,
    title: "Cross-Platform Content Strategy: Maximizing Your Reach",
    excerpt: "Master the art of adapting and optimizing your content for different social media platforms.",
    category: "Content Strategy",
    date: "2023-12-25",
    readTime: "8 min read",
    image: "/placeholder.svg",
    slug: "cross-platform-content-strategy"
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#111111]  pt-20">
      <Navigation />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-[#0a0a0a] to-[#111111] ">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Latest Insights & Industry Updates
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay ahead of the curve with our expert analysis and actionable insights
            on creator marketing, social media trends, and digital strategy.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`capitalize ${selectedCategory === category 
                ? 'bg-amber-400 text-black hover:bg-amber-500' 
                : 'text-gray-400 hover:text-white border-white/10 hover:border-white/20'}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Card className="group h-full bg-gray-800/50 border-white/5 hover:border-amber-400/20 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-amber-900/50 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="text-amber-400">{post.category}</span>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{post.date}</span>
                    <span className="text-amber-400 group-hover:translate-x-2 transition-transform duration-300">
                      Read More →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;