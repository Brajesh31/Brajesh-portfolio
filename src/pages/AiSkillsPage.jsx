// src/pages/AiSkillsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';

export default function AiSkillsPage() {
  return (
    <div className="min-h-screen pt-20 pb-12" style={{ background: 'linear-gradient(to bottom, #000011, #000033)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors duration-300 mb-8">
          ← Back to Home
        </Link>

        <TextReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">
              AI Skills
            </h1>
            <p className="text-xl text-gray-300">Advanced knowledge in artificial intelligence and machine learning frameworks</p>
          </div>
        </TextReveal>

        <div className="space-y-8">
          <TextReveal delay={200}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Machine Learning & GenAI Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-amber-300 mb-3">PyTorch & TensorFlow</h3>
                  <p className="text-gray-300 text-sm mb-3">Deep learning (CNNs, RNNs, Transformers), Generative AI, experiment tracking, deployment pipelines.</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-300 mb-3">HuggingFace & LLMs</h3>
                  <p className="text-gray-300 text-sm mb-3">Language models (BERT, GPT, custom fine-tuning), prompt engineering, API/GenAI integration.</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={400}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Applications & Ecosystem</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-xl">📝</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Natural Language Processing (NLP)</h3>
                    <p className="text-gray-300 text-sm">LLMs, sentiment & topic analysis, summarization, chatbot, NER, text generation & QA systems.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-xl">🖼️</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Computer Vision & Generative AI</h3>
                    <p className="text-gray-300 text-sm">Image classification, object detection, GANs/diffusion models, facial recognition, segmentation, style transfer.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-xl">🔗</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">MLOps & Deployment</h3>
                    <p className="text-gray-300 text-sm">Model monitoring, CI/CD for ML, cloud scaling (AWS/GCP), APIs, Streamlit/Gradio apps, experiment tracking (MLflow, Weights & Biases).</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </TextReveal>

        </div>
      </div>
    </div>
  );
}