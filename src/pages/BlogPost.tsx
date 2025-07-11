// src/pages/BlogPost.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from './Blog';
import type { BlogPost } from './Blog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ChevronLeft, Clock, ArrowRight } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.slug === slug);

  // Get 3 related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // Get unique categories from all blog posts
  const categories = [...new Set(blogPosts.map(post => post.category))];

  const formatContent = (html: string) => {
    return html
      .replace(/<h2>/g, '</div><div class="my-8"><h2 class="text-2xl font-bold mb-4 text-amber-400">')
      .replace(/<\/h2>/g, '</h2>')
      .replace(/<p>/g, '<p class="mb-6 leading-relaxed text-gray-300">')
      .replace(/<\/div>/, '') + '</div>';
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navigation />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-amber-400">Post Not Found</h1>
            <button 
              onClick={() => navigate(-1)} 
              className="text-amber-400 hover:text-amber-300 flex items-center"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navigation />

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="text-amber-400 hover:text-amber-300 flex items-center group"
        >
          <ChevronLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        {/* Article Content (Left Column) */}
        <article className="lg:w-2/3 lg:pr-8">
          {/* Header Section */}
          <header className="py-12 sm:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-gray-400 text-sm sm:text-base">
                <span className="font-medium text-amber-400">{post.author}</span>
                <span className="text-gray-600">•</span>
                <span>{post.date}</span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-700/50">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-[500px] object-cover object-center"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto pb-16 sm:pb-24">
            <div 
              className="prose prose-invert max-w-none
                        prose-headings:font-bold prose-headings:tracking-tight
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-a:text-amber-400 hover:prose-a:text-amber-300
                        prose-blockquote:border-l-amber-400 prose-blockquote:text-gray-300
                        prose-strong:text-white prose-hr:border-gray-700"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </div>
        </article>

        {/* Related Posts Sidebar (Right Column) */}
        <aside className="lg:w-1/3 lg:pl-8 lg:border-l border-gray-800 mt-16 lg:mt-0">
          <div className="sticky top-24">
            <h3 className="text-xl font-bold mb-6 text-amber-400 flex items-center">
              <span>More to Explore</span>
              <span className="ml-2 text-yellow-500">→</span>
            </h3>
            
            <div className="space-y-6">
              {relatedPosts.map((relatedPost) => (
                <div 
                  key={relatedPost.slug}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-gray-700">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center mt-1 text-xs text-gray-400">
                        <span>{relatedPost.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{relatedPost.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Browse Topics Section - Now Working */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4 text-amber-400">Browse Topics</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <span 
                    key={category}
                    onClick={() => navigate(`/blog?category=${encodeURIComponent(category)}`)}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-amber-400/20 hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;