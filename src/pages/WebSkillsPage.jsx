// src/pages/WebSkillsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';

export default function WebSkillsPage() {
  return (
    <div className="min-h-screen pt-20 pb-12" style={{ background: 'linear-gradient(to bottom, #000011, #000033)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors duration-300 mb-8">
          ← Back to Home
        </Link>

        <TextReveal>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">
              Web Development
            </h1>
            <p className="text-xl text-gray-300">Full-stack development with modern frameworks and best practices</p>
          </div>
        </TextReveal>

        <div className="space-y-8">
          <TextReveal delay={200}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">AI / ML / Data Science Stack</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-300 font-medium">Python (AI/ML)</span>
                      <span className="text-gray-400">98%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-300 font-medium">TensorFlow / PyTorch</span>
                      <span className="text-gray-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-300 font-medium">scikit-learn</span>
                      <span className="text-gray-400">92%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-300 font-medium">NLP/HuggingFace/LLM</span>
                      <span className="text-gray-400">90%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-300 font-medium">Jupyter/Colab/Streamlit</span>
                      <span className="text-gray-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </TextReveal>

          <TextReveal delay={400}>
            <TiltCard className="bg-white/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">AI/ML Infrastructure & Data Engineering</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-2xl mx-auto mb-3">☁️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud & MLOps</h3>
                  <p className="text-gray-300 text-sm">AWS, GCP, Azure, Docker, CI/CD for ML, Sagemaker, VertexAI</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-2xl mx-auto mb-3">🗄️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data & Pipeline</h3>
                  <p className="text-gray-300 text-sm">SQL, NoSQL, MongoDB, PostgreSQL, Airflow, Pandas, Dataiku</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-2xl mx-auto mb-3">🤖</div>
                  <h3 className="text-lg font-semibold text-white mb-2">GenAI & Deployment</h3>
                  <p className="text-gray-300 text-sm">HuggingFace Transformers, Gradio, FastAPI, REST APIs, Prompt Engineering</p>
                </div>
              </div>
            </TiltCard>
          </TextReveal>

        </div>
      </div>
    </div>
  );
}