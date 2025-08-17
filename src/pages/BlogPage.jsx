// src/pages/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';

const BLOG_POSTS = [
  {
    id: 'techfront-2025',
    title: "🚀 From the Audience to the Organizer's Stage: TechFront 2025 Was Built to Inspire!",
    excerpt: "TechFront: AI x Blockchain Summit 2025 wasn’t just another event — it was a community-powered movement.",
    date: '2025-07-12',
    category: 'Event',
    readTime: '4 min read',
    image: '/blog/19/image1.jpg', // Use a main image from your blog folder
  },
  {
    id: 'aws-ug-ncr-meetup',
    title: "Reimagining CLI Productivity with Amazon Q Developer – AWS UG NCR Event Recap",
    excerpt: "Explored AI-powered CLI workflows with Amazon Q Developer at AWS Office, Gurugram. A hands-on event showcasing the future of cloud productivity.",
    date: '2025-06-27',
    category: 'Event',
    readTime: '4 min read',
    image: '/blog/18/image1.jpg',
  },
  {
    id: 'ssoc4-open-source',
    title: "Social Summer Of Code 4.0: Open Source, Real Conversations & Future-Proof Tech",
    excerpt: "SSOC 4.0 wasn’t just an event—it was a blueprint for the future of community-driven tech. From DevRel to Web3, here's what made it unforgettable.",
    date: '2025-08-03',
    category: 'Community',
    readTime: '6 min read',
    image: '/blog/17/image1.jpg',
  },
  {
    id: 'ai-nxt-summit-gurugram',
    title: 'AI.NXT AI Summit – Gurugram',
    excerpt: "A deep dive into Generative AI, Machine Learning, and Responsible AI – insights and inspiration from industry leaders.",
    date: '2025-05-18',
    category: 'Event',
    readTime: '6 min read',
    image: '/blog/5/image1.jpg',
  },
  {
    id: 'api-kafka-cloud-meetup-wework',
    title: 'APIs. Kafka. Cloud. Connections – Meetup & Workshop at WeWork, Gurugram',
    excerpt: "Hands-on learning and technical deep dives into API management, Kong Gateway, and next-gen Kafka.",
    date: '2025-05-10',
    category: 'Event',
    readTime: '6 min read',
    image: '/blog/6/image1.jpg',
  },
  {
    id: 'business4-llm-meetup',
    title: 'Business4.0 Meetup – AI for Business Augmentation',
    excerpt: "How LLMs and Generative AI are transforming business – highlights from an insightful meetup.",
    date: '2025-04-28',
    category: 'Event',
    readTime: '6 min read',
    image: '/blog/7/image1.jpg',
  },
  {
    id: 'artist-ai-collab-msft',
    title: 'How Artists Are Using AI as a Creative Collaborator (Microsoft Office, Gurugram)',
    excerpt: "Witnessed how AI is reshaping the creative universe: music, DJing, and more.",
    date: '2025-04-26',
    category: 'Event',
    readTime: '6 min read',
    image: '/blog/8/image1.jpg',
  },
  {
    id: 'artists-ai-alt-recap',
    title: 'How Artists Are Using AI as a Creative Collaborator (Alternate Recap, Microsoft Office, Gurugram)',
    excerpt: "Exploring the fusion of AI and human creativity at a visionary event on AI-powered music and digital artistry.",
    date: '2025-04-26',
    category: 'Event',
    readTime: '6 min read',
    image: '/blog/9/image1.jpg',
  },
  {
    id: 'starting-mahakumbh-2025',
    title: 'StartingMahakumbh2025 – A Confluence of Ideas, Technology & Entrepreneurship',
    excerpt: "Highlights and key takeaways from one of India's biggest innovation and startup gatherings.",
    date: '2025-04-04',
    category: 'Event',
    readTime: '6 min read',
    image: '/blog/10/image1.jpg',
  },
  {
    id: 'inclusive-design-ux-2025',
    title: 'Inclusive Design Research: Advancing UX in the Social Impact Sector',
    excerpt: "Insights from a transformative session on empathy, inclusivity, and storytelling in UX research.",
    date: '2025-04-05',
    category: 'Research',
    readTime: '7 min read',
    image: '/blog/11/image1.jpg',
  },
];


export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 pb-12" style={{ background: 'linear-gradient(to bottom, #000011, #000033)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors duration-300 mb-8">
          ← Back to Home
        </Link>

        <TextReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-300">Sharing my learning journey in AI and Data Science</p>
          </div>
        </TextReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <TextReveal key={post.id} delay={index * 100}>
              <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl overflow-hidden hover:border-amber-400/40 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📝</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-xs bg-amber-500/20 text-amber-300 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-amber-100 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-amber-300 hover:text-amber-200 text-sm font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </TextReveal>
          ))}
        </div>

        {/* Coming Soon Section */}
        <TextReveal delay={400}>
          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">More Articles Coming Soon!</h2>
              <p className="text-gray-300 mb-6">
                I'm constantly learning and sharing new insights about AI, machine learning, and data science.
              </p>
              <div className="flex justify-center gap-4">
                <span className="px-4 py-2 bg-amber-500/10 text-amber-300 rounded-full text-sm">
                  Deep Learning Basics
                </span>
                <span className="px-4 py-2 bg-amber-500/10 text-amber-300 rounded-full text-sm">
                  Data Visualization
                </span>
                <span className="px-4 py-2 bg-amber-500/10 text-amber-300 rounded-full text-sm">
                  Career Tips
                </span>
              </div>
            </div>
          </div>
        </TextReveal>
      </div>
    </div>
  );
}