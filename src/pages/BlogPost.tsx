import { useParams } from 'react-router-dom';
import { blogPosts } from './Blog';
import { blogContents } from '@/data/blogContent';
import ReactMarkdown from 'react-markdown';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User, Tag as TagIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const content = blogContents[slug as keyof typeof blogContents];

  if (!post || !content) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Post not found</h1>
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button variant="outline" className="hover:bg-amber-400/10">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section with Featured Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-4xl">
            <Link to="/blog">
              <Button variant="outline" className="mb-8 hover:bg-amber-400/10">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Card className="bg-gray-900/50 border-white/10 p-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-6 text-amber-400" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-4 text-amber-400" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-3 text-amber-400" {...props} />,
                    p: ({ node, ...props }) => <p className="mb-4 text-gray-300 leading-relaxed" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                    li: ({ node, ...props }) => <li className="text-gray-300" {...props} />,
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="border-l-4 border-amber-400 pl-4 my-4 italic text-gray-300" {...props} />
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/30 rounded px-1 py-0.5 text-amber-400" {...props} />
                    ),
                    pre: ({ node, ...props }) => (
                      <pre className="bg-black/30 rounded p-4 overflow-x-auto mb-4" {...props} />
                    ),
                  }}
                >
                  {content.content}
                </ReactMarkdown>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Tags */}
            <Card className="bg-gray-900/50 border-white/10 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <TagIcon className="h-5 w-5 mr-2 text-amber-400" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-amber-400/10 text-amber-400 border border-amber-400/20 hover:bg-amber-400/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>

            {/* Related Posts */}
            <Card className="bg-gray-900/50 border-white/10 p-6">
              <h3 className="text-xl font-bold mb-4">Related Posts</h3>
              <div className="space-y-4">
                {blogPosts
                  .filter((p) => p.slug !== slug)
                  .slice(0, 3)
                  .map((relatedPost, index) => (
                    <Link key={index} to={`/blog/${relatedPost.slug}`}>
                      <div className="group hover:bg-amber-400/5 p-4 rounded-lg transition-colors duration-300">
                        <h4 className="font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">{relatedPost.date}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;