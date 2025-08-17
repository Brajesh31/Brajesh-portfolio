// src/pages/AboutPage.jsx
// Detailed About page

import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-12" style={{ background: 'linear-gradient(to bottom, #000011, #000033)' }}>
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors duration-300 mb-8"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <TextReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">
              About Me
            </h1>
            <p className="text-xl text-gray-300">
              Passionate developer with expertise in modern web technologies and AI integration
            </p>
          </div>
        </TextReveal>

        {/* Detailed Content */}
        <div className="space-y-8">
          <TextReveal delay={200}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">My Journey</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I’m a passionate AI and full-stack developer driven by curiosity and a desire to create impactful technologies.
                My journey began with a fascination for how intelligent systems can augment human capabilities and transform industries.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Over the years, I’ve combined expertise in frontend frameworks like React and Next.js with backend capabilities using Node.js and Python,
                focusing on designing scalable, data-driven solutions empowered by machine learning, deep learning, and generative AI.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I thrive on building end-to-end AI-powered applications that solve real-world problems and deliver seamless user experiences, continuously learning and evolving with the fast-changing AI landscape.
              </p>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={400}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Technical Expertise</h2>

              {/* Frontend Development */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-amber-300 mb-3 border-b border-amber-400/30 pb-1">Frontend Development & Visualization</h3>
                <ul className="text-gray-300 grid grid-cols-2 gap-y-2 gap-x-6 list-disc list-inside">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Tailwind CSS</li>
                  <li>Styled Components</li>
                  <li>Three.js</li>
                  <li>WebGL</li>
                  <li>D3.js</li>
                  <li>Chart.js</li>
                  <li>Redux / Zustand</li>
                  <li>Storybook</li>
                </ul>
              </div>

              {/* AI / Machine Learning Frameworks */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-amber-300 mb-3 border-b border-amber-400/30 pb-1">AI / Machine Learning Frameworks</h3>
                <ul className="text-gray-300 grid grid-cols-2 gap-y-2 gap-x-6 list-disc list-inside">
                  <li>Python</li>
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>Keras</li>
                  <li>scikit-learn</li>
                  <li>HuggingFace Transformers</li>
                  <li>LangChain</li>
                  <li>MLflow</li>
                  <li>Weights & Biases</li>
                  <li>OpenCV</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                </ul>
              </div>

              {/* Cloud Platforms & MLOps */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-amber-300 mb-3 border-b border-amber-400/30 pb-1">Cloud Platforms & MLOps</h3>
                <ul className="text-gray-300 grid grid-cols-2 gap-y-2 gap-x-6 list-disc list-inside">
                  <li>AWS (S3, Lambda, Sagemaker)</li>
                  <li>Google Cloud Platform (Vertex AI, BigQuery)</li>
                  <li>Microsoft Azure</li>
                  <li>Docker & Kubernetes</li>
                  <li>Apache Airflow</li>
                  <li>Streamlit & Gradio (App Deployment)</li>
                  <li>FastAPI & REST APIs</li>
                  <li>CI/CD for ML (GitHub Actions, Jenkins)</li>
                  <li>MLOps</li>
                  <li>Terraform & Infrastructure as Code</li>
                </ul>
              </div>

              {/* Databases & Data Engineering */}
              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-3 border-b border-amber-400/30 pb-1">Databases & Data Engineering</h3>
                <ul className="text-gray-300 grid grid-cols-2 gap-y-2 gap-x-6 list-disc list-inside">
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                  <li>Elasticsearch</li>
                  <li>Apache Kafka</li>
                  <li>Apache Spark (basic)</li>
                  <li>AWS Glue / Data Pipelines</li>
                  <li>ETL / Data Wrangling</li>
                </ul>
              </div>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={600}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Certifications & Hackathons</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Google Cloud Certified: ML Specialist</li>
                <li>• AWS Certified Machine Learning</li>
                <li>• IBM Introduction to AI</li>
                <li>• Coursera Deep Learning Specialization</li>
                <li>• Hackathon Finalist: Social Summer of Code, TechFront, AI.NXT</li>
              </ul>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={800}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Projects & Impact</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Built and deployed LLM-based assistants & GenAI apps for real users</li>
                <li>• Developed AI-powered medical image analysis pipelines</li>
                <li>• Created community tools for AI upskilling and open-source collaboration</li>
                <li>• Organized national summits and developer workshops for 100+ attendees</li>
                <li>• Regularly share insights through blogs, talks, and community forums</li>
              </ul>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={1000}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">What Drives Me</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Solving real-world problems with intelligent systems</li>
                <li>• Fostering collaborative learning and community growth</li>
                <li>• Blending creativity with AI to build tools for the future</li>
                <li>• Lifelong learning and giving back to the tech ecosystem</li>
              </ul>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={1200}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Community & Leadership</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• Core organizer: TechFront (AI x Blockchain Summit), SSOC 4.0, AWS UG NCR, AI.NXT Summits</li>
                <li>• Mentor for AI/ML, Open Source, Cloud, and Career Growth</li>
                <li>• Blogger & speaker at industry events and universities</li>
                <li>• Advocate for Ethics, Diversity, and OpenAI for India</li>
              </ul>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={1400}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Fun Facts</h2>
              <ul className="text-gray-300 space-y-2">
                <li>• I love hackathons: they push my creativity, teamwork, and speed</li>
                <li>• Music and art with AI is where I unwind and innovate</li>
                <li>• My network spans founders, students, and Fortune 500 engineers</li>
                <li>• Passionate about traveling & meeting minds who think differently</li>
              </ul>
            </TiltCard>
          </TextReveal>


        </div>
      </div>
    </div>
  );
}