// src/components/Achievements.jsx
// Achievements and Certificates section

import React from 'react';
import TextReveal from './TextReveal';
import TiltCard from './TiltCard';

const ACHIEVEMENTS = [
  {
    id: 'cert-1',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'IBM - Coursera',
    date: '2024',
    description: 'Comprehensive introduction to AI concepts, machine learning fundamentals, and practical applications.',
    skills: ['Artificial Intelligence', 'Machine Learning', 'IBM'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/RSFO9MIXS7LE',
    thumbnailImage: '/images/iAI.png',
    hasImage: true,
  },
  {
    id: 'cert-2',
    title: 'Pandas Bootcamp | Data Analysis with Pandas Python3',
    issuer: 'Udemy',
    date: 'March 2025',
    description: 'Data analysis and manipulation using Pandas in Python for real-world ML/data tasks.',
    skills: ['Python', 'Pandas', 'Data Analysis', 'ML'],
    certificateUrl: 'https://ude.my/UC-cb5cfeOc-0859-4563-b348-718e21f9',
    thumbnailImage: '/images/PandasBootcamp.png',
    hasImage: true,
  },
  {
    id: 'cert-3',
    title: 'Aerial Image Segmentation with PyTorch',
    issuer: 'Coursera',
    date: 'March 2025',
    description: 'Deep learning computer vision project in PyTorch, segmenting aerial/satellite images with CNN architectures.',
    skills: ['Deep Learning', 'PyTorch', 'Computer Vision', 'CNN', 'Image Segmentation'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/YQ5K0LIMZ46Q',
    thumbnailImage: '/images/Aerial_Image_Segmentation_PyTorch.png',
    hasImage: true,
  },
  {
    id: 'cert-4',
    title: 'Deep Learning with PyTorch: Generative Adversarial Network',
    issuer: 'United Latino Students Association',
    date: 'March 2025',
    description: 'Certificate for building and training GANs (Generative Adversarial Networks) using PyTorch.',
    skills: ['Deep Learning', 'GANs', 'PyTorch', 'Generative AI'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/records/3CWLRJ7TH5KM',
    thumbnailImage: '/images/DeepLearning_PyTorch_GAN.png',
    hasImage: true,
  },
  {
    id: 'cert-5',
    title: 'Deep Learning with PyTorch: Image Segmentation',
    issuer: 'United Latino Students Association',
    date: 'March 2025',
    description: 'Building and evaluating image segmentation models using PyTorch for vision applications.',
    skills: ['Deep Learning', 'Image Segmentation', 'PyTorch'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/records/YQ5K0LIMZ46Q',
    thumbnailImage: '/images/DeepLearning_PyTorch_ImageSeg.png',
    hasImage: true,
  },
  {
    id: 'cert-6',
    title: 'Machine Learning Specialist',
    issuer: 'Google Cloud',
    date: '2023',
    description: 'ML engineering specialist—model development, deployment, and MLOps on Google Cloud.',
    skills: ['Machine Learning', 'GCP', 'Deployment', 'AI'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/G7E0MZ71SS4E',
    thumbnailImage: '/images/ML_Specialist_GCP.png',
    hasImage: true,
  },
  {
    id: 'cert-7',
    title: 'Data Visualization using Plotly',
    issuer: 'Coursera',
    date: 'March 2025',
    description: 'Interactive and advanced analytics dashboards using Plotly in Python for ML projects.',
    skills: ['Python', 'Plotly', 'Data Visualization', 'Analytics'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/PV5TT3N8IC27',
    thumbnailImage: '/images/DataViz_Plotly.png',
    hasImage: true,
  },
  {
    id: 'cert-8',
    title: 'Azure Synapse SQL Pool - Implement Polybase',
    issuer: 'Coursera',
    date: 'March 2025',
    description: 'Big data and ML integration at scale, building advanced analytics with Azure Synapse.',
    skills: ['Azure', 'Big Data', 'Machine Learning', 'Data Engineering'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/GEPTT9LRDFZI',
    thumbnailImage: '/images/Azure_Synapse_SQL_Pool.png',
    hasImage: true,
  },
  {
    id: 'cert-9',
    title: 'AWS APAC - Solutions Architecture Job Simulation',
    issuer: 'Forage',
    date: 'March 2025',
    description: 'Architecting and deploying scalable cloud-based AI/ML solutions on AWS.',
    skills: ['AWS', 'Cloud', 'Solutions Architecture', 'ML Ops'],
    certificateUrl: 'https://www.theforage.com/virtual-internships/prototype/aws/solutions-architecture',
    thumbnailImage: '/images/AWS_Solutions_Arch.png',
    hasImage: true,
  },
  {
    id: 'cert-10',
    title: 'Hackathon: Code of the Phoenix (AI/ML Track) – Certificate of Participation',
    issuer: 'E-Summit 2025, Unstop',
    date: 'March 2025',
    description: 'Recognized for building and demonstrating AI/ML prototypes at national-level hackathon.',
    skills: ['Hackathon', 'AI', 'ML', 'Prototyping'],
    certificateUrl: 'https://unstop.com/certificate-preview/0b6e7b6c-9c34-4d45-b3ed-b5d72cd8f00e',
    thumbnailImage: '/images/CodePhoenix_AI_ML.png',
    hasImage: true,
  },{
    id: 'cert-11',
    title: 'Generative AI with Large Language Models',
    issuer: 'AWS, DeepLearning.AI',
    date: '2024',
    description: 'Training and deploying LLMs, prompt engineering, and generative AI applications.',
    skills: ['Generative AI', 'LLMs', 'AWS', 'Deep Learning'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/7J6BBTMR9ZPM',
    thumbnailImage: '/images/GenAI_LLM.png',
    hasImage: true,
  },
  {
    id: 'cert-12',
    title: 'Building Transformer Models with Attention Mechanism',
    issuer: 'Coursera Project Network',
    date: '2024',
    description: 'Hands-on project on attention-based transformer architectures for NLP.',
    skills: ['Transformers', 'NLP', 'Deep Learning', 'Attention'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/KMSZ7YMQV6W7',
    thumbnailImage: '/images/Transformer_Attention.png',
    hasImage: true,
  },
  {
    id: 'cert-13',
    title: 'Introduction to TensorFlow for AI, ML, and Deep Learning',
    issuer: 'DeepLearning.AI',
    date: '2024',
    description: 'Learning TensorFlow framework for ML, AI, and deep learning implementations.',
    skills: ['TensorFlow', 'Deep Learning', 'AI', 'ML'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/47RAG9N3LWSD',
    thumbnailImage: '/images/Intro_TensorFlow.png',
    hasImage: true,
  },
  {
    id: 'cert-14',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: '2023',
    description: 'Python foundations for AI, ML, and data analysis applications.',
    skills: ['Python', 'Data Science', 'AI'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/VQXCP3JLQ6KQ',
    thumbnailImage: '/images/Python_DS_AI.png',
    hasImage: true,
  },
  {
    id: 'cert-15',
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    date: '2023',
    description: 'Course on building and training neural networks for modern AI applications.',
    skills: ['Deep Learning', 'Neural Networks', 'AI'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/HGQRM8A5V9N7',
    thumbnailImage: '/images/NeuralNetworks.png',
    hasImage: true,
  },
  {
    id: 'cert-16',
    title: 'Machine Learning Foundations: A Case Study Approach',
    issuer: 'University of Washington',
    date: '2023',
    description: 'ML foundations explained through case studies and practical applications.',
    skills: ['Machine Learning', 'Case Study', 'AI'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/GMQPS4ZXN4WZ',
    thumbnailImage: '/images/ML_CaseStudy.png',
    hasImage: true,
  },
  {
    id: 'cert-17',
    title: 'SQL for Data Science',
    issuer: 'University of California, Davis',
    date: '2023',
    description: 'SQL queries for data wrangling, analysis, and ML pipelines.',
    skills: ['SQL', 'Data Science', 'Databases'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/6U5ZTQX2CSZ3',
    thumbnailImage: '/images/SQL_DS.png',
    hasImage: true,
  },
  {
    id: 'cert-18',
    title: 'Applied Data Science Capstone',
    issuer: 'IBM',
    date: '2023',
    description: 'Capstone project applying ML and DS skills to real-world datasets.',
    skills: ['Data Science', 'Machine Learning', 'Capstone'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/83JW8PWQ3ZRX',
    thumbnailImage: '/images/DS_Capstone.png',
    hasImage: true,
  },
  {
    id: 'cert-19',
    title: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'Stanford University',
    date: '2023',
    description: 'Andrew Ng course on ML fundamentals including supervised models.',
    skills: ['Supervised ML', 'Regression', 'Classification'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/3N57TTSXMSDP',
    thumbnailImage: '/images/ML_Supervised.png',
    hasImage: true,
  },
  {
    id: 'cert-20',
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
    issuer: 'DeepLearning.AI',
    date: '2023',
    description: 'Course covering unsupervised learning, recommender systems, and reinforcement learning.',
    skills: ['Unsupervised ML', 'Recommender Systems', 'Reinforcement Learning'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/9V5TUPSR6S9C',
    thumbnailImage: '/images/ML_Unsupervised.png',
    hasImage: true,
  },{
    id: 'cert-21',
    title: 'Data Science Methodology',
    issuer: 'IBM',
    date: '2023',
    description: 'Covers data science workflow: from problem definition to deployment.',
    skills: ['Data Science', 'Methodology', 'AI'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/5XQY7G29RSLT',
    thumbnailImage: '/images/DS_Methodology.png',
    hasImage: true,
  },
  {
    id: 'cert-22',
    title: 'Big Data Analysis with Scala and Spark',
    issuer: 'École Polytechnique Fédérale de Lausanne',
    date: '2023',
    description: 'Big data analytics and ML pipelines using Apache Spark and Scala.',
    skills: ['Big Data', 'Spark', 'Scala', 'ML'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/2P7UAKMF6EMK',
    thumbnailImage: '/images/BigData_Spark.png',
    hasImage: true,
  },
  {
    id: 'cert-23',
    title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
    issuer: 'DeepLearning.AI',
    date: '2023',
    description: 'Techniques to improve deep neural nets through optimization and regularization.',
    skills: ['Deep Learning', 'Optimization', 'Regularization', 'Hyperparameters'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/4FX53VLN7BYF',
    thumbnailImage: '/images/DNN_Optimization.png',
    hasImage: true,
  },
  {
    id: 'cert-24',
    title: 'Structuring Machine Learning Projects',
    issuer: 'DeepLearning.AI',
    date: '2023',
    description: 'Best practices for designing, structuring, and scaling ML projects.',
    skills: ['ML Projects', 'AI Deployment', 'Best Practices'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/ZX5Q4G9V8DKP',
    thumbnailImage: '/images/StructuringML.png',
    hasImage: true,
  },
  {
    id: 'cert-25',
    title: 'Convolutional Neural Networks',
    issuer: 'DeepLearning.AI',
    date: '2023',
    description: 'Deep learning course on CNNs and computer vision applications.',
    skills: ['CNN', 'Deep Learning', 'Computer Vision'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/K5V0UG3LTZFN',
    thumbnailImage: '/images/CNN.png',
    hasImage: true,
  },
  {
    id: 'cert-26',
    title: 'Sequence Models',
    issuer: 'DeepLearning.AI',
    date: '2023',
    description: 'RNNs, LSTMs, GRUs, and sequence modeling for NLP and speech.',
    skills: ['RNN', 'LSTM', 'GRU', 'Sequence Models', 'NLP'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/2R38FQZMQVUF',
    thumbnailImage: '/images/SequenceModels.png',
    hasImage: true,
  },
  {
    id: 'cert-27',
    title: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    date: '2023',
    description: 'Non-technical introduction to AI, ML, and its applications in business and society.',
    skills: ['AI', 'Business Strategy', 'Non-Technical'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/S73N9K7EV8NU',
    thumbnailImage: '/images/AI_For_Everyone.png',
    hasImage: true,
  },
  {
    id: 'cert-28',
    title: 'Mathematics for Machine Learning: Linear Algebra',
    issuer: 'Imperial College London',
    date: '2023',
    description: 'Essential math foundations for ML, focusing on linear algebra.',
    skills: ['Linear Algebra', 'Mathematics', 'ML Foundations'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/4XT9HQGPRJZR',
    thumbnailImage: '/images/MathsML_LinearAlgebra.png',
    hasImage: true,
  },
  {
    id: 'cert-29',
    title: 'Mathematics for Machine Learning: Multivariate Calculus',
    issuer: 'Imperial College London',
    date: '2023',
    description: 'Calculus foundations for ML models and optimization techniques.',
    skills: ['Multivariate Calculus', 'Mathematics', 'ML Foundations'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/Y6JHKPSRMJ3D',
    thumbnailImage: '/images/MathsML_Calculus.png',
    hasImage: true,
  },
  {
    id: 'cert-30',
    title: 'Mathematics for Machine Learning: PCA',
    issuer: 'Imperial College London',
    date: '2023',
    description: 'Dimensionality reduction and PCA for ML workflows.',
    skills: ['PCA', 'Dimensionality Reduction', 'Mathematics'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/L3NPZZYHSW0P',
    thumbnailImage: '/images/MathsML_PCA.png',
    hasImage: true,
  },{
    id: 'cert-31',
    title: 'Databases and SQL for Data Science with Python',
    issuer: 'IBM',
    date: '2023',
    description: 'SQL and database management integrated with Python for data science.',
    skills: ['SQL', 'Databases', 'Python', 'Data Science'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/MU5JYF49FRP7',
    thumbnailImage: '/images/Databases_SQL.png',
    hasImage: true,
  },
  {
    id: 'cert-32',
    title: 'Data Analysis with Python',
    issuer: 'IBM',
    date: '2023',
    description: 'Exploratory data analysis, visualization, and ML using Python libraries.',
    skills: ['Python', 'Data Analysis', 'Visualization'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/8GRD9N7Q2R66',
    thumbnailImage: '/images/DataAnalysis_Python.png',
    hasImage: true,
  },
  {
    id: 'cert-33',
    title: 'Data Visualization with Python',
    issuer: 'IBM',
    date: '2023',
    description: 'Data visualization techniques with Matplotlib, Seaborn, and Folium.',
    skills: ['Data Visualization', 'Python', 'Matplotlib', 'Seaborn'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/V9N5D7G6U7QJ',
    thumbnailImage: '/images/DataViz_Python.png',
    hasImage: true,
  },
  {
    id: 'cert-34',
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    date: '2023',
    description: 'Introduction to supervised and unsupervised ML with Python.',
    skills: ['Machine Learning', 'Python', 'Supervised Learning', 'Unsupervised Learning'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/2R4M6FGJ8U5K',
    thumbnailImage: '/images/ML_Python.png',
    hasImage: true,
  },
  {
    id: 'cert-35',
    title: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan',
    date: '2023',
    description: 'Practical ML applications in Python with scikit-learn.',
    skills: ['Machine Learning', 'Python', 'scikit-learn'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/Q9FT8X7N3P3Y',
    thumbnailImage: '/images/AppliedML_Python.png',
    hasImage: true,
  },
  {
    id: 'cert-36',
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: '2023',
    description: 'Comprehensive 5-course specialization covering neural nets, CNNs, RNNs, and more.',
    skills: ['Deep Learning', 'Neural Networks', 'CNN', 'RNN', 'AI'],
    certificateUrl: 'https://www.coursera.org/account/accomplishments/specialization/XYZ123ABC456',
    thumbnailImage: '/images/DeepLearning_Specialization.png',
    hasImage: true,
  },
];



export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <TextReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-amber-100">
              Achievements & Certificates
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my expertise
            </p>
          </div>
        </TextReveal>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((achievement, idx) => (
            <TextReveal key={achievement.id} delay={idx * 100}>
              <TiltCard className="group relative bg-white/90 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-amber-400/20 rounded-2xl p-8 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-amber-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-800/30 shadow-lg shadow-gray-600/20 dark:hover:shadow-amber-400/20 dark:shadow-amber-400/20" intensity={1.5}>
                
                {/* Certificate Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-amber-800 to-amber-900">
                  <span className="group-hover:animate-pulse">{String(idx + 1).padStart(2, '0')}</span>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
                      style={{
                        left: `${30 + i * 40}%`,
                        top: `${20 + i * 30}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  
                  {/* Certificate Image/Thumbnail - Full Width */}
                  <div className="w-full">
                    <div className="w-full h-32 rounded-lg border border-amber-400/30 bg-gradient-to-br from-amber-500/10 to-transparent overflow-hidden group-hover:border-amber-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-400/20 cursor-pointer"
                         onClick={() => achievement.certificateUrl && window.open(achievement.certificateUrl, '_blank')}>
                      {achievement.thumbnailImage ? (
                        <img 
                          src={achievement.thumbnailImage} 
                          alt={achievement.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-lg bg-gradient-to-br from-amber-500 to-amber-600 group-hover:shadow-lg group-hover:shadow-amber-400/50">
                              {achievement.hasImage ? '📜' : '🏆'}
                            </div>
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {achievement.hasImage ? 'View PDF' : 'Coming Soon'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-gray-800 dark:group-hover:text-amber-100 transition-colors duration-300">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300">
                        <span>{achievement.issuer}</span>
                        <span>•</span>
                        <span>{achievement.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {achievement.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {achievement.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-2 py-1 text-xs bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-200 rounded-full border border-amber-300 dark:border-amber-500/20 hover:bg-amber-200 dark:hover:bg-amber-500/20 hover:border-amber-400 dark:hover:border-amber-400/40 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Verify/View Button */}
                    <button 
                      onClick={() => achievement.certificateUrl && window.open(achievement.certificateUrl, '_blank')}
                      className="text-sm px-4 py-2 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-amber-400/20 rounded-lg hover:bg-gray-200 dark:hover:bg-amber-500/10 hover:border-gray-400 dark:hover:border-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 text-gray-900 dark:text-white"
                      disabled={!achievement.certificateUrl}
                    >
                      {achievement.certificateUrl ? 'View Certificate' : 'Verify Certificate'}
                    </button>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute -inset-2 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10 bg-gradient-to-br from-amber-400/30 to-amber-600/10" />
              </TiltCard>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}