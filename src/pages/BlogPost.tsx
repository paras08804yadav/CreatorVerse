import { useParams } from 'react-router-dom';
import { blogPosts } from './Blog';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black/95 pt-20">
        <Navigation />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/95 pt-20">
      <Navigation />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative h-[400px] mb-12 rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>Key Takeaways</h2>
          <ul>
            <li>Understanding your target audience and their preferences</li>
            <li>Creating engaging and valuable content</li>
            <li>Measuring and analyzing performance metrics</li>
            <li>Adapting strategies based on data insights</li>
          </ul>

          <h2>Detailed Analysis</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <blockquote>
            "Success in creator marketing comes from authentic connections and consistent 
            value delivery to your audience."
          </blockquote>

          <h2>Implementation Strategy</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <h2>Conclusion</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm">
              #CreatorMarketing
            </span>
            <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm">
              #DigitalStrategy
            </span>
            <span className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm">
              #ContentCreation
            </span>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;