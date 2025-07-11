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
    slug: 'metaverse-marketing-2025',
    title: 'Metaverse Marketing: Strategies for Brand Success in 2025',
    excerpt: 'How forward-thinking brands are establishing presence in the metaverse and reaching digital-native audiences.',
    content: `
      <h2>Introduction</h2>
      <p>As the metaverse evolves in 2025, brands are finding innovative ways to engage with consumers in virtual spaces.</p>
      
      <h2>1. Virtual Storefronts</h2>
      <p>Leading brands are creating immersive shopping experiences that blend entertainment with commerce.</p>
      
      <h2>2. NFT Loyalty Programs</h2>
      <p>How exclusive NFTs are being used to reward loyal customers with unique benefits and experiences.</p>
      
      <h2>3. Virtual Influencers</h2>
      <p>The rise of CGI influencers and how they're being leveraged for 24/7 brand advocacy.</p>
      
      <h2>4. Cross-Platform Experiences</h2>
      <p>Creating seamless brand experiences that connect physical products with digital twins in the metaverse.</p>
      
      <h2>5. Measuring ROI</h2>
      <p>New metrics and analytics approaches for evaluating metaverse marketing effectiveness.</p>
      
      <h2>Conclusion</h2>
      <p>Brands that establish early metaverse presence in 2025 will gain significant competitive advantage.</p>
    `,
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80',
    author: 'Alexandra Chen',
    date: 'March 15, 2025',
    category: 'Emerging Tech',
    readTime: '6 min read'
  },
  {
    slug: 'ai-content-creation-2025',
    title: 'AI-Generated Content: The 2025 Landscape for Marketers',
    excerpt: 'How artificial intelligence is transforming content creation while maintaining brand authenticity.',
    content: `
      <h2>Introduction</h2>
      <p>AI content tools have matured significantly by 2025, offering new opportunities and challenges.</p>
      
      <h2>1. Hyper-Personalization</h2>
      <p>How AI enables content that adapts in real-time to individual viewer preferences and behaviors.</p>
      
      <h2>2. Brand Voice Preservation</h2>
      <p>Techniques for training AI models to maintain consistent brand personality across all outputs.</p>
      
      <h2>3. Ethical Considerations</h2>
      <p>Navigating disclosure requirements and audience expectations for AI-assisted content.</p>
      
      <h2>4. Human-AI Collaboration</h2>
      <p>Best practices for workflows that combine human creativity with AI efficiency.</p>
      
      <h2>5. Performance Analysis</h2>
      <p>How AI-generated content compares to human-created content across key metrics in 2025.</p>
      
      <h2>Conclusion</h2>
      <p>The most successful brands are those using AI as a creative partner rather than replacement.</p>
    `,
    image: 'https://images.pexels.com/photos/16245252/pexels-photo-16245252.jpeg',
    author: 'Raj Patel',
    date: 'April 5, 2025',
    category: 'AI',
    readTime: '7 min read'
  },
  {
    slug: 'sustainable-influencer-2025',
    title: 'Sustainable Influencer Marketing: The 2025 Playbook',
    excerpt: 'How eco-conscious brands are partnering with influencers to drive meaningful change.',
    content: `
      <h2>Introduction</h2>
      <p>Consumers in 2025 demand authentic sustainability commitments from brands and influencers alike.</p>
      
      <h2>1. Green Credential Verification</h2>
      <p>New tools for vetting influencer sustainability claims and avoiding greenwashing.</p>
      
      <h2>2. Impact Measurement</h2>
      <p>Quantifying the environmental benefits of sustainable marketing campaigns.</p>
      
      <h2>3. Circular Economy Partnerships</h2>
      <p>How influencers are promoting product life extension and responsible consumption.</p>
      
      <h2>4. Carbon-Neutral Campaigns</h2>
      <p>Strategies for offsetting the environmental impact of digital marketing activities.</p>
      
      <h2>5. Gen Z Engagement</h2>
      <p>Connecting with younger audiences through values-aligned sustainability messaging.</p>
      
      <h2>Conclusion</h2>
      <p>Sustainability is no longer optional - it's a core requirement for successful influencer partnerships in 2025.</p>
    `,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    author: 'Sophie Greenfield',
    date: 'February 28, 2025',
    category: 'Sustainability',
    readTime: '5 min read'
  },
  {
    slug: 'voice-search-optimization-2025',
    title: 'Voice Search Optimization for Content Creators in 2025',
    excerpt: 'How to adapt your content strategy for the voice-first search landscape.',
    content: `
      <h2>Introduction</h2>
      <p>With over 60% of searches now voice-activated, optimizing for conversational queries is essential.</p>
      
      <h2>1. Natural Language Patterns</h2>
      <p>How to structure content to match how people actually speak their queries.</p>
      
      <h2>2. Featured Snippet Strategies</h2>
      <p>Positioning your content to be the chosen answer for voice assistant responses.</p>
      
      <h2>3. Local Voice Optimization</h2>
      <p>Techniques for appearing in "near me" voice searches with increased accuracy.</p>
      
      <h2>4. Multimodal Content</h2>
      <p>Creating assets that work across voice, visual, and traditional search interfaces.</p>
      
      <h2>5. Performance Tracking</h2>
      <p>New analytics approaches for measuring voice search visibility and engagement.</p>
      
      <h2>Conclusion</h2>
      <p>Brands that master voice search optimization in 2025 will own the conversational commerce space.</p>
    `,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    author: 'Miguel Santos',
    date: 'January 15, 2025',
    category: 'SEO',
    readTime: '6 min read'
  },
  {
    slug: 'short-form-video-2025',
    title: 'Short-Form Video Dominance: 2025 Trends and Strategies',
    excerpt: 'How to leverage the continued rise of short-form video across platforms.',
    content: `
      <h2>Introduction</h2>
      <p>Short-form video continues to dominate attention spans, with new platforms and formats emerging.</p>
      
      <h2>1. Platform-Specific Strategies</h2>
      <p>Tailoring content for TikTok, Instagram Reels, YouTube Shorts, and emerging players.</p>
      
      <h2>2. AI-Assisted Creation</h2>
      <p>How generative AI tools are speeding up high-quality short video production.</p>
      
      <h2>3. Shoppable Video</h2>
      <p>Implementing seamless purchase pathways within short video experiences.</p>
      
      <h2>4. Vertical Storytelling</h2>
      <p>Mastering the art of conveying complete brand messages in under 15 seconds.</p>
      
      <h2>5. Performance Analytics</h2>
      <p>Key metrics that matter most for short-form video ROI in 2025.</p>
      
      <h2>Conclusion</h2>
      <p>Brands that master snackable video content will win in the attention economy.</p>
    `,
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    author: 'Carlos Mendez',
    date: 'June 10, 2025',
    category: 'Video',
    readTime: '5 min read'
  },
  {
    slug: 'community-commerce-2025',
    title: 'The Rise of Community Commerce in 2025',
    excerpt: 'How brands are turning customers into communities and communities into sales.',
    content: `
      <h2>Introduction</h2>
      <p>The line between social media and ecommerce has fully blurred, creating new opportunities.</p>
      
      <h2>1. Niche Platform Growth</h2>
      <p>How specialized community platforms are outperforming generic social networks for commerce.</p>
      
      <h2>2. User-Generated Shops</h2>
      <p>Empowering superfans to create and monetize their own branded storefronts.</p>
      
      <h2>3. Live Commerce 2.0</h2>
      <p>Next-generation interactive shopping experiences that blend entertainment and instant purchasing.</p>
      
      <h2>4. Community Insights</h2>
      <p>Leveraging community data for hyper-relevant product development and messaging.</p>
      
      <h2>5. Reward Structures</h2>
      <p>Innovative systems for recognizing and incentivizing brand advocates.</p>
      
      <h2>Conclusion</h2>
      <p>The most successful 2025 brands don't just sell products - they cultivate movements.</p>
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    author: 'Elena Petrov',
    date: 'July 5, 2025',
    category: 'Ecommerce',
    readTime: '7 min read'
  },
  {
    slug: 'podcast-marketing-2025',
    title: 'Podcast Marketing Strategies for 2025',
    excerpt: 'How to leverage the continued growth of podcast audiences for brand growth.',
    content: `
      <h2>Introduction</h2>
      <p>Podcast consumption continues to rise, with new formats and monetization models emerging.</p>
      
      <h2>1. Host-Read vs. Programmatic</h2>
      <p>When to invest in host-integrated messaging versus scalable programmatic ads.</p>
      
      <h2>2. Niche Audience Targeting</h2>
      <p>Identifying and reaching hyper-specific listener demographics with relevant messaging.</p>
      
      <h2>3. Branded Content Series</h2>
      <p>Creating original podcast content that builds authority while subtly promoting offerings.</p>
      
      <h2>4. Performance Tracking</h2>
      <p>New attribution models for connecting podcast exposure to concrete actions.</p>
      
      <h2>5. Video Podcasting</h2>
      <p>Optimizing audio content for platforms prioritizing video like YouTube and TikTok.</p>
      
      <h2>Conclusion</h2>
      <p>Podcasts offer unparalleled intimacy with audiences - when approached strategically.</p>
    `,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    author: 'Priya Kapoor',
    date: 'September 8, 2025',
    category: 'Audio',
    readTime: '5 min read'
  },
  {
    slug: 'data-privacy-marketing-2025',
    title: 'Marketing in a Privacy-First World: 2025 Strategies',
    excerpt: 'How to build effective marketing strategies amidst tightening data regulations.',
    content: `
      <h2>Introduction</h2>
      <p>With cookie deprecation complete and new regulations in place, marketers must adapt.</p>
      
      <h2>1. First-Party Data Strategies</h2>
      <p>Building direct relationships that earn customer data through value exchange.</p>
      
      <h2>2. Contextual Targeting</h2>
      <p>The resurgence of content-based advertising in place of behavioral tracking.</p>
      
      <h2>3. Privacy-Compliant Personalization</h2>
      <p>Delivering relevant experiences using zero-party data and inference.</p>
      
      <h2>4. Blockchain Solutions</h2>
      <p>How decentralized identity systems are enabling permission-based data sharing.</p>
      
      <h2>5. Trust-Building</h2>
      <p>Transparent data practices as a competitive advantage and brand differentiator.</p>
      
      <h2>Conclusion</h2>
      <p>The brands thriving in 2025 are those that view privacy as an opportunity, not obstacle.</p>
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    author: 'Thomas Fischer',
    date: 'October 20, 2025',
    category: 'Data',
    readTime: '7 min read'
  },
  {
    slug: 'ugc-content-strategies',
    title: '5 Powerful UGC Content Strategies for 2024',
    excerpt: 'Discover the most effective user-generated content strategies that will dominate social media in 2024.',
    content: `
      <h2>Introduction</h2>
      <p>User-generated content (UGC) has become a cornerstone of digital marketing strategies. In 2024, brands that leverage UGC effectively will see significant engagement and conversion benefits.</p>
      
      <h2>1. Hashtag Challenges</h2>
      <p>Create branded hashtag challenges that encourage users to create content around your product or service. The most successful challenges are simple, fun, and offer clear incentives.</p>
      
      <h2>2. Customer Spotlight Series</h2>
      <p>Feature real customers using your products in creative ways. This not only provides authentic content but also makes your customers feel valued.</p>
      
      <h2>3. UGC Contests</h2>
      <p>Run regular contests where users submit content for a chance to win prizes. This generates a flood of content and increases brand awareness.</p>
      
      <h2>4. Behind-the-Scenes Content</h2>
      <p>Encourage customers to share their experiences with your brand beyond just product shots. This builds a more personal connection.</p>
      
      <h2>5. UGC in Advertising</h2>
      <p>Incorporate the best UGC into your paid advertising campaigns. This content typically has higher engagement rates than traditional ads.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these UGC strategies, brands can build authentic connections with their audience while generating valuable marketing content.</p>
    `,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    author: 'Sarah Johnson',
    date: 'May 15, 2024',
    category: 'UGC',
    readTime: '5 min read'
  },
  {
    slug: 'influencer-marketing-trends',
    title: 'Emerging Influencer Marketing Trends to Watch',
    excerpt: 'Explore the latest trends in influencer marketing that are reshaping brand collaborations.',
    content: `
      <h2>Introduction</h2>
      <p>Influencer marketing continues to evolve rapidly. Here are the key trends that will dominate in 2024.</p>
      
      <h2>1. Nano-Influencer Dominance</h2>
      <p>Brands are shifting focus to nano-influencers (1K-10K followers) who often have higher engagement rates and more niche audiences.</p>
      
      <h2>2. Long-Term Partnerships</h2>
      <p>One-off campaigns are giving way to long-term ambassador relationships that build authenticity over time.</p>
      
      <h2>3. Performance-Based Compensation</h2>
      <p>More brands are moving away from flat fees to compensation models tied to concrete results like clicks or conversions.</p>
      
      <h2>4. TikTok Continues to Rise</h2>
      <p>TikTok's influence grows stronger, with brands allocating more budget to this platform for influencer campaigns.</p>
      
      <h2>5. AI in Influencer Discovery</h2>
      <p>Artificial intelligence is transforming how brands identify the right influencers through advanced matching algorithms.</p>
      
      <h2>Conclusion</h2>
      <p>Staying ahead of these trends will help marketers create more effective influencer strategies in the coming year.</p>
    `,
    image: 'https://images.unsplash.com/photo-1525877442103-5ddb2089b2bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    author: 'Michael Chen',
    date: 'June 2, 2024',
    category: 'Influencers',
    readTime: '4 min read'
  },
  {
    slug: 'authentic-brand-storytelling',
    title: 'The Art of Authentic Brand Storytelling Through UGC',
    excerpt: 'Learn how to craft compelling brand narratives using authentic user-generated content.',
    content: `
      <h2>Introduction</h2>
      <p>Authenticity is the currency of modern marketing. Here's how to harness UGC for genuine brand storytelling.</p>
      
      <h2>1. Find Your Brand's True Voice</h2>
      <p>Analyze the language and tone your customers use when talking about your brand organically.</p>
      
      <h2>2. Highlight Real Customer Journeys</h2>
      <p>Feature stories of how real customers use your products in their daily lives, with all their imperfections.</p>
      
      <h2>3. Embrace Imperfection</h2>
      <p>Overly polished content often feels inauthentic. Some of the most effective UGC is raw and unscripted.</p>
      
      <h2>4. Create Emotional Connections</h2>
      <p>Focus on content that sparks genuine emotion rather than just showcasing product features.</p>
      
      <h2>5. Build a Community Narrative</h2>
      <p>Weave together multiple user stories to create a larger narrative about your brand community.</p>
      
      <h2>Conclusion</h2>
      <p>Authentic storytelling through UGC builds trust and creates deeper connections with your audience.</p>
    `,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    author: 'Emma Rodriguez',
    date: 'April 28, 2024',
    category: 'UGC',
    readTime: '6 min read'
  },
  {
    slug: 'measuring-ugc-roi',
    title: 'How to Measure the ROI of Your UGC Campaigns',
    excerpt: 'A comprehensive guide to tracking and quantifying the impact of your user-generated content.',
    content: `
      <h2>Introduction</h2>
      <p>While UGC is powerful, measuring its impact is crucial for justifying investment. Here's how to track ROI effectively.</p>
      
      <h2>1. Establish Clear KPIs</h2>
      <p>Before launching, define what success looks like - engagement rates, conversions, or brand sentiment.</p>
      
      <h2>2. Track Engagement Metrics</h2>
      <p>Monitor likes, shares, comments, and time spent on UGC-heavy pages compared to regular content.</p>
      
      <h2>3. Conversion Attribution</h2>
      <p>Use UTM parameters and promo codes to track sales directly generated from UGC campaigns.</p>
      
      <h2>4. Cost Savings Analysis</h2>
      <p>Calculate how much you're saving on content creation by leveraging customer content.</p>
      
      <h2>5. Brand Lift Studies</h2>
      <p>Conduct surveys to measure changes in brand awareness, perception, and purchase intent.</p>
      
      <h2>6. Customer Lifetime Value</h2>
      <p>Track whether customers acquired through UGC have higher retention rates and LTV.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these measurement strategies, you can demonstrate the true value of your UGC initiatives.</p>
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    author: 'David Kim',
    date: 'May 30, 2024',
    category: 'Analytics',
    readTime: '7 min read'
  },
  {
    slug: 'micro-influencer-guide',
    title: 'The Ultimate Guide to Working With Micro-Influencers',
    excerpt: 'Everything you need to know about identifying and collaborating with micro-influencers.',
    content: `
      <h2>Introduction</h2>
      <p>Micro-influencers offer unique advantages for brands. Here's how to build successful partnerships.</p>
      
      <h2>1. Identifying the Right Micro-Influencers</h2>
      <p>Look beyond follower count to engagement rates, audience demographics, and content quality.</p>
      
      <h2>2. Outreach Strategies</h2>
      <p>Personalized approaches work best. Show genuine appreciation for their existing content.</p>
      
      <h2>3. Compensation Models</h2>
      <p>Options include free products, affiliate commissions, or modest fees based on their reach.</p>
      
      <h2>4. Campaign Briefing</h2>
      <p>Provide clear guidelines while allowing creative freedom to maintain authenticity.</p>
      
      <h2>5. Building Long-Term Relationships</h2>
      <p>Nurture ongoing partnerships rather than one-off collaborations for better results.</p>
      
      <h2>6. Measuring Success</h2>
      <p>Track engagement rates, website traffic, and conversions specific to each micro-influencer.</p>
      
      <h2>Conclusion</h2>
      <p>With the right approach, micro-influencers can deliver exceptional ROI for your marketing efforts.</p>
    `,
    image: 'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1133&q=80',
    author: 'Lisa Wong',
    date: 'June 10, 2024',
    category: 'Influencers',
    readTime: '8 min read'
  },
  {
    slug: 'ugc-legal-considerations',
    title: 'Legal Considerations for Using User-Generated Content',
    excerpt: 'Navigate the legal landscape of UGC to protect your brand and respect creator rights.',
    content: `
      <h2>Introduction</h2>
      <p>While UGC is valuable, brands must navigate important legal considerations.</p>
      
      <h2>1. Copyright Basics</h2>
      <p>Understand that users retain copyright to their content unless explicitly transferred.</p>
      
      <h2>2. Obtaining Proper Permissions</h2>
      <p>Always get written consent before repurposing user content, especially for commercial use.</p>
      
      <h2>3. Rights Clearance Documents</h2>
      <p>Create standardized release forms that cover usage rights across all platforms.</p>
      
      <h2>4. FTC Disclosure Requirements</h2>
      <p>Ensure proper disclosure when incentivizing UGC creation to comply with advertising laws.</p>
      
      <h2>5. Handling Negative Content</h2>
      <p>Develop policies for addressing inappropriate or brand-damaging UGC.</p>
      
      <h2>6. International Considerations</h2>
      <p>Be aware that laws vary by country when collecting and using UGC globally.</p>
      
      <h2>Conclusion</h2>
      <p>By addressing these legal aspects upfront, brands can leverage UGC while minimizing risk.</p>
    `,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    author: 'Robert Johnson',
    date: 'June 5, 2024',
    category: 'Legal',
    readTime: '5 min read'
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
            Discover cutting-edge marketing strategies and digital trends for 2025 and beyond
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