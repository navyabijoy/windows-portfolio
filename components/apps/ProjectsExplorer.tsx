'use client';

import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Face Beauty E-commerce Site',
    description: 'Developed a full-stack MERN marketplace for reselling makeup products, implementing secure JWT and Google OAuth authentication and enabling dynamic CRUD operations via RESTful APIs, improving product management efficiency and user trust.',
    technologies: ['React.js','Node.js', 'Express.js', 'Tailwind CSS', 'RESTful APIs', 'MongoDB'],
    link: 'https://mern-project-py0s.onrender.com/',
    github: 'https://github.com/navyabijoy/mern-project',
  },
  {
    id: '2',
    name: 'StockUp - Pantry Management System',
    description: 'Built an AI-powered pantry tracking system with real-time Supabase storage, Gemini for recipe generation, and MobileNet (fine-tuned with TensorFlow) achieving 96% image recognition accuracy; deployed the trained model to Hugging Face.',
    technologies: ['Next.js', 'React.js', 'Gemini AI', 'OAuth', 'Supabase', 'Tensorflow', 'Hugging Face', 'Tailwind CSS'],
    link: 'https://pantry-management-ql1i.vercel.app/',
    github: 'https://github.com/navyabijoy/pantry-management',
  },
  {
    id: '3',
    name: 'Memoria - AI Flashcards Generator',
    description: 'Shipped an AI-powered flashcard generator with customizable features, leveraging Qwen AI and Firebase; achieved 1,200+ views, onboarded 30 users within the first 24 hours, and facilitated 250+ edits and 20+ deletions.',
    technologies: ['Next.js', 'React.js', 'Firebase', 'Qwen AI', 'Tailwind CSS'],
    link: 'https://memoria-ai.vercel.app/',
    github: 'https://github.com/navyabijoy/Memoria-AI-Flashcards',
  },
  {
    id: '4',
    name: 'AI Rate My Professor - RAG Chatbot',
    description: 'Developed a chatbot using Retrieval Augmented Generation (RAG) to answer queries from professor reviews, storing embeddings in Pinecone vector database for fast similarity search and context-aware responses.',
    technologies: ['Next.js', 'React.js', 'Pinecone', 'Qwen AI', 'Tailwind CSS', 'LangChain', 'Python'],
    // link: 'https://taskboard.example.com',
    github: 'https://github.com/navyabijoy/Professor-Pulse-RateMyProfessor',
  },
  {
  id: '5',
  name: 'Car Price Prediction',
  description: 'Built a Streamlit app that predicts used-car prices using trained ML models, delivering quick estimates based on key vehicle features.',
  technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Joblib'],
  link: 'https://car-price-prediction-nb.streamlit.app/',
  github: 'https://github.com/navyabijoy/Car-Price-Prediction', // replace if needed
},
{
  id: '6',
  name: 'Roller Coaster EDA',
  description: 'Performed an end-to-end exploratory data analysis on a Kaggle dataset, uncovering trends through pandas, matplotlib, and seaborn visualizations.',
  technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
  // link: '',
  github: 'https://github.com/navyabijoy/EDA-Using-Pandas-Python', // replace if needed
},
{
  id: '7',
  name: 'Email Spam Classification',
  description: 'Developed a Streamlit-based classifier that flags spam emails using Naive Bayes and Random Forest models for accurate real-time detection.',
  technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Seaborn'],
  link: 'https://email-spam-classification-nb.streamlit.app/',
  github: 'https://github.com/navyabijoy/Email-Spam-Classification', // replace if needed
},

];

export default function ProjectsExplorer() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="explorer">
      {/* Sidebar */}
      <div className="explorer-sidebar">
        <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '8px', padding: '4px' }}>
          Folders
        </div>
        <div className="explorer-tree-item">
          <span><img src="/images/file-icon.png" alt="My Computer" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /></span>
          <span>My Computer</span>
        </div>
        <div className="explorer-tree-item" style={{ paddingLeft: '20px' }}>
          <span><img src="/images/local-icon.png" alt="Local Disk (C:)" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /></span>
          <span>Local Disk (C:)</span>
        </div>
        <div className="explorer-tree-item" style={{ paddingLeft: '32px' }}>
          <span><img src="/images/file-icon.png" alt="Documents" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /></span>
          <span>Documents</span>
        </div>
        <div className="explorer-tree-item" style={{ paddingLeft: '44px', background: '#0a246a', color: '#fff' }}>
          <span><img src="/images/file-icon.png" alt="Projects" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /></span>
          <span>Projects</span>
        </div>
        <div className="explorer-tree-item" style={{ paddingLeft: '32px' }}>
          <span><img src="/images/file-icon.png" alt="Downloads" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /></span>
          <span>Downloads</span>
        </div>
        <div className="explorer-tree-item">
          <span><img src="/images/network-icon.png" alt="Network" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /></span>
          <span>Network</span>
        </div>
        <div className="explorer-tree-item">
          <span><img src="/images/recycle-bin.png" alt="Recycle Bin" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /></span>
          <span>Recycle Bin</span>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="explorer-content"
        style={selectedProject ? {
          display: 'block',
          padding: '0',
        } : undefined}
      >
        {!selectedProject ? (
          // Project folders view
          projects.map((project) => (
            <div
              key={project.id}
              className="explorer-folder"
              onDoubleClick={() => setSelectedProject(project)}
            >
              <div style={{ fontSize: '48px' }}><img src="/images/file-icon.png" alt={project.name} style={{ width: '48px', height: '48px', objectFit: 'contain' }} /></div>
              <span>{project.name}</span>
            </div>
          ))
        ) : (
          // Project details view
          <div style={{ padding: '16px', height: '100%', overflow: 'auto' }}>
            <button
              onClick={() => setSelectedProject(null)}
              style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>←</span>
              <span>Back to Projects</span>
            </button>

            <div style={{ background: '#fff', border: '1px solid #808080', padding: '20px', borderRadius: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '64px', flexShrink: 0 }}><img src="/images/file-icon.png" alt="My Computer" style={{ width: '48px', height: '48px', objectFit: 'contain' }} /></div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '18px', marginBottom: '4px', margin: 0 }}>{selectedProject.name}</h2>
                  <p style={{ fontSize: '10px', color: '#666', margin: '4px 0 0 0' }}>
                    Type: Application Folder | Modified: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #ccc', paddingTop: '16px' }}>
                <h3 style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 'bold', marginTop: 0 }}>Description</h3>
                <p style={{ fontSize: '11px', lineHeight: '1.6', marginBottom: '16px' }}>
                  {selectedProject.description}
                </p>

                <h3 style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 'bold', marginTop: '20px' }}>Technologies Used</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        background: '#0a246a',
                        color: '#fff',
                        padding: '4px 8px',
                        fontSize: '10px',
                        borderRadius: '2px',
                        border: '1px solid #000',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: '14px', marginBottom: '8px', fontWeight: 'bold', marginTop: '20px' }}>Links</h3>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                  {selectedProject.link && (
                    <button
                      onClick={() => window.open(selectedProject.link, '_blank')}
                      style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <span><img src="/images/network-icon.png" alt="Network" style={{ width: '20px', height: '20px', objectFit: 'contain', marginTop: '2px' }} /></span>
                      <span>Live Demo</span>
                    </button>
                  )}
                  {selectedProject.github && (
                    <button
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <span><img src="/images/github-icon.png" alt="GitHub" style={{ width: '25px', height: '25px', objectFit: 'contain', marginTop: '2px' }} /></span>
                      <span>GitHub</span>
                    </button>
                  )}
                </div>

                <div style={{ marginTop: '20px', padding: '12px', background: '#ffffcc', border: '1px solid #e0e0a0' }}>
                  <p style={{ fontSize: '11px', lineHeight: '1.6', margin: 0 }}>
                    <strong>Note:</strong> This project demonstrates my ability to build full-stack applications 
                    with modern technologies. Feel free to explore the live demo or check out the source code on GitHub!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
