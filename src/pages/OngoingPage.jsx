// src/pages/OngoingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';

export default function OngoingPage() {
  return (
    <div className="min-h-screen pt-20 pb-12" style={{ background: 'linear-gradient(to bottom, #000011, #000033)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors duration-300 mb-8">
          ← Back to Home
        </Link>

        <TextReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">
              Ongoing Research
            </h1>
            <p className="text-xl text-gray-300">Currently exploring cutting-edge technologies and innovative solutions</p>
          </div>
        </TextReveal>

        <div className="space-y-8">
          <TextReveal delay={200}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">LLM-based Prompt Engineering & AI Assistants</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Designing retrieval-augmented generation pipelines, prompt engineering strategies, and scalable LLM-powered assistant systems for enterprise and developer tools. Exploring custom workflows, context handling, and robust evaluation of generative models in production.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">LLM (GPT-4)</span>
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">Pinecone</span>
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">LangChain</span>
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">Prompt Engineering</span>
              </div>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={400}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Diffusion/GAN-based Image Gen & AI Video</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Researching advanced generative models for image denoising, synthesis and video generation using diffusion models and GAN architectures. Current focus is on automated annotation, fine-tuning, and creation of domain-specific generative datasets for AI-powered media and analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">Diffusion Models</span>
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">StyleGAN</span>
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">OpenCV</span>
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">PyTorch</span>
              </div>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={600}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">AI for Dynamic Data Analytics</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Building advanced pipelines for real-time data ingestion, anomaly detection, and cloud-scale ML for analytics dashboards in operations, traffic, and finance. Leveraging cloud-native ML tools and scalable APIs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">AWS Sagemaker</span>
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">Streamlit</span>
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">Time Series ML</span>
                <span className="px-3 py-1 text-sm bg-amber-500/10 text-amber-200 rounded-full border border-amber-500/20">Anomaly Detection</span>
              </div>
            </TiltCard>
          </TextReveal>
        </div>
      </div>
    </div>
  );
}