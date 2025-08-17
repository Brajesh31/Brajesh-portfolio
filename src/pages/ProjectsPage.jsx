// src/pages/ProjectsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';

const PROJECTS = [
  {
    title: 'Emma – AI Personal Assistant',
    description: 'Context-aware personal assistant automating scheduling, reminders, and productivity using NLP and deep learning.',
    tech: ['Python', 'NLP', 'Deep Learning', 'AI Assistant'],
    features: ['Natural language understanding', 'Contextual reminders', 'Task automation'],
    status: 'In Development'
  },
  {
    title: 'Face Recognition Dashboard',
    description: 'Real-time face recognition and analytics platform leveraging OpenCV and deep neural networks.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
    features: ['Real-time video processing', 'Face identification', 'User analytics dashboard'],
    status: 'Production'
  },
  {
    title: 'AI-Powered Resume Evaluator',
    description: 'Automated resume screening tool using NLP and machine learning to rank and evaluate candidate profiles.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Science'],
    features: ['Resume parsing', 'Skill matching', 'Candidate scoring system'],
    status: 'Beta Testing'
  },
  {
    title: 'AgroTech – Smart Farming Platform',
    description: 'IoT and AI-powered platform for monitoring and optimizing agricultural processes in real time.',
    tech: ['React', 'Node.js', 'IoT', 'Machine Learning'],
    features: ['Real-time sensor data', 'Crop health analytics', 'Predictive farming models'],
    status: 'Production'
  },
  {
    title: 'NLP Chatbot with TensorFlow',
    description: 'Intelligent chatbot capable of natural conversations powered by TensorFlow and deep learning.',
    tech: ['Python', 'TensorFlow', 'NLP', 'Chatbot'],
    features: ['Contextual dialogue', 'Multi-turn conversation', 'Sentiment analysis'],
    status: 'In Development'
  },
  {
    title: 'StyleGAN Image Denoising',
    description: 'Research project on improving image quality using generative adversarial networks and diffusion models.',
    tech: ['Python', 'GAN', 'Deep Learning', 'Image Processing'],
    features: ['Image denoising', 'High-resolution generation', 'Advanced GAN architectures'],
    status: 'Beta Testing'
  },
  {
    title: 'SEMAC – College ML Utility Platform',
    description: 'Machine learning utility platform to assist students in semester management and academic analytics.',
    tech: ['Python', 'Machine Learning', 'Data Analytics', 'Flask'],
    features: ['Grade prediction', 'Semester planning', 'Performance visualization'],
    status: 'Production'
  }
];

export default function ProjectsPage() {
  return (
      <div className="min-h-screen pt-20 pb-12" style={{ background: 'linear-gradient(to bottom, #000011, #000033)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors duration-300 mb-8">
            ← Back to Home
          </Link>

          <TextReveal>
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">
                Featured Projects
              </h1>
              <p className="text-xl text-gray-300">Innovative AI/ML solutions combining cutting-edge technology with real-world applications</p>
            </div>
          </TextReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
                <TextReveal key={idx} delay={idx * 200}>
                  <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-6 h-full">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h2 className="text-xl font-bold text-white">{project.title}</h2>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                            project.status === 'Production' ? 'bg-green-500/20 text-green-300' :
                                project.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-300' :
                                    'bg-blue-500/20 text-blue-300'
                        }`}>
                      {project.status}
                    </span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                      <div>
                        <h3 className="text-amber-300 font-medium mb-2">Key Features</h3>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {project.features.map((feature, i) => (
                              <li key={i}>• {feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="px-2 py-1 text-xs bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">
                        {tech}
                      </span>
                        ))}
                      </div>

                      <button className="w-full px-4 py-2 bg-white/10 border border-amber-400/20 rounded-lg hover:bg-amber-500/10 hover:border-amber-400/40 transition-all duration-300 text-sm">
                        View Details
                      </button>
                    </div>
                  </TiltCard>
                </TextReveal>
            ))}
          </div>
        </div>
      </div>
  );
}
