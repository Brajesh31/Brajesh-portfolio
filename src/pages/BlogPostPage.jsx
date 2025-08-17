// src/pages/BlogPostPage.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TextReveal from '../components/TextReveal';

const BLOG_CONTENT = {
  'techfront-2025': {
    title: "🚀 From the Audience to the Organizer's Stage: TechFront 2025 Was Built to Inspire!",
    date: '2025-07-12',
    category: 'Event',
    readTime: '4 min read',
    content: `
# 🚀 From the Audience to the Organizer's Stage: TechFront 2025 Was Built to Inspire!

Just a year ago, I was attending events, taking notes, and wondering what it takes to run something impactful. On July 12th, 2025, that question turned into action.

📍 TechFront: AI x Blockchain Summit 2025, hosted at Thoughtworks, Gurugram, wasn’t just another tech meetup; it was a living, breathing showcase of what happens when passion meets purpose.

Organized by Tech Dev Club in collaboration with HackwithIndia, and powered by Devnovate, we brought together 130+ attendees — students, professionals, developers, educators, startup founders — all eager to build, learn, and shape the future of emerging technologies.

🔥 What Made TechFront 2025 Different?  
This wasn’t your average “keynote + photo-op” tech event. Instead, we curated:  
- 🎤 Panel discussions on safer AI, scalable blockchain, and realistic career paths  
- 🤝 Community-first spaces for deep conversations and real-world collaborations  
- 🧠 Mentorship, swag, certificates, and plenty of unforgettable moments

🎙 Speaker Highlights  
We welcomed thought leaders from across the tech space:  
- 🔹 Mukul Goyal – Breaking blockchain beyond crypto for real-world use  
- 🔹 ARGHYA K. GUHA – AI-driven ERP & MarComm workflows  
- 🔹 Aashi Gupta – Guardrails for safe and ethical LLM deployment  
- 🔹 Arun Kumar Yadav – Blockchain’s potential for the next billion users  
- 🔹 Kuldeep Singh Rathore & Adfar Rasheed (PW) – GATE prep, upskilling, and building tech-ready India

Their talks weren’t just informative — they were actionable blueprints for innovation.

💼 Meet the Brains Behind the Show  
Proud to co-organize this summit with:  
- Organizers: Kumar Gaurav Tiwari, Brajesh Kumar, Vani Sen, Bhavya Shukla  
- Volunteers: Ishika Patel, ARYAN RAJ, Aditya Dhanraj, Udit Singh, Adarsh Kumar, Nikhil Sagar, Priyam Kumar, Aman Jyoti Jha

You made the experience seamless, empowering, and unforgettable. 🙌

🤝 And the Energy? Next Level.  
We had attendees like Shruti Gautam, Sakshi Chaturvedi, Damanveer Singh, Shivang Yadav, Akshat Agarwal, and so many more — each bringing curiosity, questions, and collaboration to the table.

✨ It’s one thing to attend an event. It’s another to feel like you’re part of a movement.

🔗 Explore more:  
📲 [Tech Dev Club](https://techdevclub.com) — Stay tuned for what’s next!  
    `
  },

  'aws-ug-ncr-meetup': {
    title: 'Reimagining CLI Productivity with Amazon Q Developer – AWS UG NCR Event Recap',
    date: '2025-06-27',
    category: 'Event',
    readTime: '4 min read',
    content: `
# Reimagining CLI Productivity with Amazon Q Developer – AWS UG NCR Event Recap

Explored AI-powered CLI workflows with Amazon Q Developer at AWS Office, Gurugram. A hands-on event that showcased the future of cloud productivity.

We explored:  
- ✅ Seamless integration of Q Developer with IDEs and the CLI  
- ✅ Natural language to CLI command generation — yes, you can literally "talk" your way into deploying and managing!  
- ✅ Live comparison: traditional CLI vs Q-enhanced CLI workflows  
- ✅ Real-time troubleshooting, doc fetching, and log exploration — all without switching tools  

The practical demos and real-world scenarios made it even more valuable, transforming complex command-line workflows into intuitive, AI-augmented processes.

🎤 Shoutout to speakers:  
Anutosh ☁️, Iqbaal Singh

🎯 Thanks to organizers:  
Rajat Arora, Dipali Kulshrestha

The event was a real reflection of how AI is reshaping the developer experience. Grateful to have been part of it!

Let’s keep building, exploring, and sharing — together! 🚀
    `
  },

  'business4-meetup': {
    title: 'Business4.0 Meetup – AI for Business Augmentation',
    date: '2025-04-28',
    category: 'Event',
    readTime: '6 min read',
    content: `
# Business4.0 Meetup – AI for Business Augmentation

How LLMs and Generative AI are transforming business – highlights from an insightful meetup.

From smarter customer service and unlocking creativity to boosting operational efficiency, the Meetup showcased how AI is reshaping business strategies.

Special thanks to industry leaders Ajay Kumar, Amit Malik, Satish Vedulla, and Asad Tayyab.

Loved connecting with peers and fellow innovators for an inspiring experience.

Here’s to more collaboration for a smarter tomorrow! ✨🌍
    `
  },
  'ssoc4-open-source': {
    title: "Social Summer Of Code 4.0: Open Source, Real Conversations & Future-Proof Tech",
    date: '2025-08-03',
    category: 'Community',
    readTime: '6 min read',
    content: `
# Social Summer Of Code 4.0: Open Source, Real Conversations & Future-Proof Tech

Recently had the privilege to attend Social Summer Of Code (SSOC 4.0), an event that not only celebrated open-source culture but truly embodied the spirit of collaborative development, learning, and innovation. For anyone serious about community-building, dev culture, and next-gen careers in tech, this was the place to be.

## What made this open-source meetup so powerful?
- 🌱 Insight-rich speaker lineup:  
  - Arpan Mondal — Authentic DevRel engagement  
  - Uday Sharma — From content chaos to community creativity  
  - Raajeev Anand — #Web3 and crypto case studies  
  - Jay Saadana — Rethinking branding and digital identity  
  - Shivam Arora — Engagement strategies for growth  
  - Sudhansu Kumar — Grassroots communities for long-term impact

- 💬 One of the most rewarding moments was turning GitHub usernames into real conversations! New friends: Aryan Chauhan, Kanik Gupta, Raman Mahadevan, Arni Johry, Vanshika Chauhan, Rashmeet Kaur, Himanshu Kabra, Rishita Chaudhary, Riya Chhabra, Gunjan Pasricha, AKANKSHA YADAV, Khushi Gupta, Yuvraj Sharma, Yakshit Ranga, Abhienaya Sri, Neetu Naikyaz, Bhavya Mishra, Yuvika ., Vansh Chauhan, Chhavi Bhalla, Anshul Gupta, Pooja Jain, Aditya Singh, Shubrali Jain, and Shonal Dhauni.

- 🌐 Grateful to Reskilll, Microsoft, Social Summer Of Code, Microsoft Azure, and the Azure Developer Community for enabling such high-quality learning.

This event wasn’t about hype. It was about impact — and I left feeling more equipped, connected, and inspired than ever.

## Want to dive deeper?
- Open Source career growth?  
- Real DevRel case studies?  
- AI & Blockchain project building?  
- Community-led product journeys?

Let’s connect. I’m always up to share, collaborate, and contribute to meaningful tech conversations.
  `
  },
  'ai-nxt-summit-gurugram': {
    title: 'AI.NXT AI Summit – Gurugram',
    date: '2025-05-18',
    category: 'Event',
    readTime: '6 min read',
    content: `
# AI.NXT AI Summit – Gurugram

AI is no longer the future — it's the now. From code to consciousness, intelligence is being redefined.

Welcome to AI.NXT — where innovation meets imagination. 🚀🤖

I recently had the incredible opportunity to attend the AI.NXT AI Summit — a powerful gathering that brought together some of the brightest minds, boldest ideas, and real-world breakthroughs in Artificial Intelligence.

The summit served as a melting pot of Generative AI, Machine Learning, and Responsible AI, diving deep into how these technologies are reshaping industries like healthcare, finance, education, and cybersecurity. 🌐

Highlights included:
- Visionary keynotes and technical deep-dive panels
- Hands-on workshops and rich networking
- Connections with peers and industry leaders
  - Yashansh Srivastava, Argha Banerjee, Dhruv Gupta, Khushi Dewangan, Krishna Manore, Anand Kumar Mahto, and more

Special thanks to speakers:
- Mayank Jolly – Senior Consultant, Microsoft
- Vishwameet Chawla – Director, Consulting Services (Infrastructure & Cybersecurity), Microsoft

👏 Organized by: Reskilll  
🤝 Supported by: Microsoft Azure, Azure Developer Community

Grateful to be part of a community that's pushing the boundaries of what's possible with AI. Here's to building smarter, faster, and more responsibly!
  `
  },
  'api-kafka-cloud-meetup-wework': {
    title: 'APIs. Kafka. Cloud. Connections – Meetup & Workshop at WeWork, Gurugram',
    date: '2025-05-10',
    category: 'Event',
    readTime: '6 min read',
    content: `
# APIs. Kafka. Cloud. Connections – Meetup & Workshop at WeWork, Gurugram

What happens when APIs, Kafka, and Cloud come together under one roof? A power-packed learning experience! 💡🚀

On May 10, 2025, I had the opportunity to attend a truly insightful Meetup & Workshop hosted at WeWork, DLF Forum Cybercity, Gurugram — where ideas met execution, and tech professionals came together to learn, collaborate, and grow.

## Highlights:
- Akshay Pandey (Cognizant): API Management and Kong Konnect Gateway
  - Understanding API management fundamentals
  - Simplifying microservices with Kong Gateway
  - Leveraging Kong plugins for extensibility
- CHIRAG WADHWA (Confluent): Kafka Queued Up (KIP-932)
  - Queue-style semantics for concurrent consumption
  - Deep dive into partition coordination and state management

The sessions were followed by an engaging networking lunch and collaborative discussions with professionals from innovative organizations like Confluent, Kong Inc., Mudralaya FinTech, EnternPryz, and HCDS Technologies. 🌐

These events remind me how important it is to stay connected, stay curious, and always be learning. Looking forward to more such enriching sessions!
`
  },

  'business4-llm-meetup': {
    title: 'Business4.0 Meetup – AI for Business Augmentation',
    date: '2025-04-28',
    category: 'Event',
    readTime: '6 min read',
    content: `
# Business4.0 Meetup – AI for Business Augmentation

What happens when AI meets Business Strategy? The result: a fusion of innovation, disruption, and opportunity.

At the Business4.0 Meetup – AI for Business Augmentation (Coffee Home, Connaught Place, Delhi), the focus was on the business impact of LLMs and Generative AI.

## Highlights:
- Dr. R.C. Sharma shared how Large Language Models and AI tools are enabling smarter customer service, creativity, and operational efficiency.
- Industry leaders Ajay Kumar, Amit Malik, Satish Vedulla, and Asad Tayyab delivered valuable insights.
- The Q&A and networking brought founders, professionals, and students together to collaborate and explore.

This was a front-row seat to the future of AI-powered work.
`
  },

  'artist-ai-collab-msft': {
    title: 'How Artists Are Using AI as a Creative Collaborator (Microsoft Office, Gurugram)',
    date: '2025-04-26',
    category: 'Event',
    readTime: '6 min read',
    content: `
# How Artists Are Using AI as a Creative Collaborator

Stepping into the future of music and creativity!

On April 26, 2025, at Microsoft Office, Gurugram, I attended an amazing event demonstrating how AI is revolutionizing the arts:

- AI-generated vocals and melodies bring new creative possibilities
- AI-powered mixing and mastering pushes music quality boundaries
- Dynamic, real-time DJ sets driven by machine learning

Special thanks to Bhrigu Parashar (Music Composer) and Barkha Kaul (DJ & Producer), as well as the Reskilll team and Microsoft Azure Developer Community!

Today, I witnessed the rise of a new era where human emotion meets artificial intelligence, creating something extraordinary.
`
  },

  'artists-ai-alt-recap': {
    title: 'How Artists Are Using AI as a Creative Collaborator (Alt. Recap, Microsoft Office, Gurugram)',
    date: '2025-04-26',
    category: 'Event',
    readTime: '6 min read',
    content: `
# How Artists Are Using AI as a Creative Collaborator (Alt. Recap)

WOW! What an incredible experience!
This visionary Microsoft Office event in Gurugram showcased:

- AI-generated vocals
- AI composing original melodies
- AI mixing, mastering, and refining beats
- DJ sets powered by AI-driven rhythms

It was inspiring to see how AI empowers, not replaces, human creativity. Huge thanks to Reskilll, the Azure Developer Community, and to all the creative, passionate people I met that day!
`
  },

  'starting-mahakumbh-2025': {
    title: 'StartingMahakumbh2025 – A Confluence of Ideas, Technology & Entrepreneurship',
    date: '2025-04-04',
    category: 'Event',
    readTime: '6 min read',
    content: `
# StartingMahakumbh2025 – A Confluence of Ideas, Technology & Entrepreneurship

On April 4, 2025, I attended #StartingMahakumbh — one of India's biggest gatherings for innovation, entrepreneurship, and transformative technology.

## Highlights:
- AI & Tech-enabled Startups: MachineLearning, Blockchain, Cloud Computing for real-world problems
- Impact-driven ventures: sustainability, mental wellness, and inclusive growth
- Live pitch sessions and valuable networking

The event was a powerful blend of inspiration and execution, reinforcing the spirit of building with intention and impact. Looking forward to contributing to future waves of innovation!
`
  },

  'inclusive-design-ux-2025': {
    title: 'Inclusive Design Research: Advancing UX in the Social Impact Sector',
    date: '2025-04-05',
    category: 'Research',
    readTime: '7 min read',
    content: `
# Inclusive Design Research: Advancing UX in the Social Impact Sector

Design isn't just about looks — it's about impact for everyone.

At the Inclusive Design Research event (Microsoft Office, Gurugram, April 5, 2025), Jayesha M. Koushik shared how empathy, inclusivity, and storytelling are essential for human-centered design.

## Key Takeaways:
- Innovation thrives with limitations (time, team, funds)
- Design with people, not just for them – connect with real stories
- Ethnographic research changes everything – stepping into users' lives
- Even the best research must be told as a compelling story to drive change

Special thanks to Microsoft Azure, Reskilll, Merocloud, and all the volunteers for making this initiative happen.

Let's keep making design that speaks to everyone — with empathy, clarity, and purpose.
`
  },

// You can continue to add in this format for any other blogs you'd like to showcase!


};


export default function BlogPostPage() {
  const { id } = useParams();
  const post = BLOG_CONTENT[id];

  if (!post) {
    return (
      <div className="min-h-screen pt-20 pb-12 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #000011, #000033)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-amber-300 hover:text-amber-200">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12" style={{ background: 'linear-gradient(to bottom, #000011, #000033)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors duration-300 mb-8">
          ← Back to Blog
        </Link>

        <TextReveal>
          <article className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-sm bg-amber-500/20 text-amber-300 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-400">{post.readTime}</span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100 mb-4">
                {post.title}
              </h1>
            </header>

            <div className="prose prose-invert prose-amber max-w-none">
              <div 
                className="text-gray-200 leading-relaxed"
                style={{ whiteSpace: 'pre-line' }}
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
              />
            </div>
          </article>
        </TextReveal>

        {/* Related Posts */}
        <TextReveal delay={200}>
          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">More Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(BLOG_CONTENT)
                .filter(([key]) => key !== id)
                .slice(0, 2)
                .map(([key, relatedPost]) => (
                  <Link 
                    key={key}
                    to={`/blog/${key}`}
                    className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{relatedPost.title}</h4>
                    <p className="text-sm text-gray-400">{relatedPost.category} • {relatedPost.readTime}</p>
                  </Link>
                ))}
            </div>
          </div>
        </TextReveal>
      </div>
    </div>
  );
}