import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Tag as TagIcon, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    "id": 1,
    "title": "Maximizing ROI with Influencer Marketing: A Comprehensive Guide",
    "excerpt": "Learn how to create successful influencer marketing campaigns that drive real business results and maximize your return on investment.",
    "category": "Marketing Strategy",
    "date": "2024-01-15",
    "readTime": "8 min read",
    "image": "https://images.unsplash.com/photo-1591608511273-3b1c0f7e75cd?auto=format&fit=crop&w=800&q=80",
    "slug": "maximizing-roi-influencer-marketing"
  },
  {
    "id": 2,
    "title": "The Rise of Micro-Influencers: Why Small Accounts Drive Big Results",
    "excerpt": "Discover why micro-influencers are becoming the go-to choice for brands looking to build authentic connections with targeted audiences.",
    "category": "Industry Trends",
    "date": "2024-01-12",
    "readTime": "6 min read",
    "image": "https://images.unsplash.com/photo-1573497019440-cf73bafee0f2?auto=format&fit=crop&w=800&q=80",
    "slug": "rise-of-micro-influencers"
  },
  {
    "id": 3,
    "title": "Content Creation Best Practices for 2024",
    "excerpt": "Stay ahead of the curve with our comprehensive guide to content creation trends and best practices for the coming year.",
    "category": "Content Strategy",
    "date": "2024-01-10",
    "readTime": "10 min read",
    "image": "https://images.unsplash.com/photo-1611928484115-fd4b3e04f037?auto=format&fit=crop&w=800&q=80",
    "slug": "content-creation-best-practices-2024"
  },
  {
    "id": 4,
    "title": "Building a Strong Personal Brand on Social Media",
    "excerpt": "Learn the essential steps to develop and maintain a powerful personal brand that resonates with your target audience.",
    "category": "Personal Branding",
    "date": "2024-01-08",
    "readTime": "7 min read",
    "image": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800&q=80",
    "slug": "building-strong-personal-brand"
  },
  {
    "id": 5,
    "title": "The Power of User-Generated Content in Digital Marketing",
    "excerpt": "Explore how UGC can transform your marketing strategy and create authentic connections with your audience.",
    "category": "Content Marketing",
    "date": "2024-01-05",
    "readTime": "9 min read",
    "image": "https://images.unsplash.com/photo-1590608897129-79da98d159d9?auto=format&fit=crop&w=800&q=80",
    "slug": "power-of-user-generated-content"
  },
  {
    "id": 6,
    "title": "Social Media Analytics: Measuring What Matters",
    "excerpt": "A deep dive into the key metrics and analytics that truly matter for your social media marketing success.",
    "category": "Analytics",
    "date": "2024-01-03",
    "readTime": "8 min read",
    "image": "https://images.unsplash.com/photo-1618005198919-d3d4b5f00f4c?auto=format&fit=crop&w=800&q=80",
    "slug": "social-media-analytics-guide"
  },
  {
    "id": 7,
    "title": "Creating Viral Content: Strategy vs Luck",
    "excerpt": "Understand the science behind viral content and learn strategies to increase your content's viral potential.",
    "category": "Content Strategy",
    "date": "2024-01-01",
    "readTime": "7 min read",
    "image": "https://images.unsplash.com/photo-1601597111158-e2cf90e0c3ff?auto=format&fit=crop&w=800&q=80",
    "slug": "creating-viral-content"
  },
  {
    "id": 8,
    "title": "The Future of Influencer Marketing: AI and Automation",
    "excerpt": "Explore how artificial intelligence and automation are reshaping the influencer marketing landscape.",
    "category": "Technology",
    "date": "2023-12-29",
    "readTime": "9 min read",
    "image": "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80",
    "slug": "future-influencer-marketing-ai"
  },
  {
    "id": 9,
    "title": "Sustainable Marketing: Building Long-term Creator Relationships",
    "excerpt": "Learn how to develop and maintain lasting partnerships with creators for sustainable marketing success.",
    "category": "Partnership Strategy",
    "date": "2023-12-27",
    "readTime": "6 min read",
    "image": "https://images.unsplash.com/photo-1596075780750-81249df16d46?auto=format&fit=crop&w=800&q=80",
    "slug": "sustainable-creator-relationships"
  },
  {
    "id": 10,
    "title": "Cross-Platform Content Strategy: Maximizing Your Reach",
    "excerpt": "Master the art of adapting and optimizing your content for different social media platforms.",
    "category": "Content Strategy",
    "date": "2023-12-25",
    "readTime": "8 min read",
    "image": "https://images.unsplash.com/photo-1580894908360-7ac8e42d3b09?auto=format&fit=crop&w=800&q=80",
    "slug": "cross-platform-content-strategy"
  }
];

const categories = Array.from(new Set(blogPosts.map(post => post.category)));

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-400/10 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
            Latest Insights & Trends
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Discover the latest trends, strategies, and insights in UGC and influencer marketing
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? 'bg-amber-400 text-black hover:bg-amber-500' : 'hover:bg-amber-400/10'}
          >
            All Posts
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-amber-400 text-black hover:bg-amber-500' : 'hover:bg-amber-400/10'}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Link key={index} to={`/blog/${post.slug}`}>
              <Card className="h-full bg-gray-900/50 border-white/10 hover:border-amber-400/30 transition-all duration-300 overflow-hidden group">
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <span className="text-amber-400 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
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