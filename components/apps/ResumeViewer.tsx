'use client';

export default function ResumeViewer() {
  // Google Drive File ID - Replace with your actual file ID
  const GOOGLE_DRIVE_FILE_ID = '1He4w2Z33fXtW9O4kOeNVfWx1ItUTQVWx';
  
  const handleDownload = () => {
    // Open Google Drive download link in new tab
    // This is more reliable than fetch/download for cross-origin files
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="word-viewer">
      {/* Menu Bar */}
      <div className="word-menubar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Insert</span>
        <span>Format</span>
        <span>Tools</span>
        <span>Table</span>
        <span>Window</span>
        <span>Help</span>
      </div>

      {/* Toolbar */}
      <div className="word-toolbar">
        <button title="New">📄</button>
        <button title="Open">📁</button>
        <button title="Save">💾</button>
        <button title="Print">🖨️</button>
        <div style={{ width: '2px', height: '20px', background: '#808080', margin: '0 4px' }} />
        <button 
          title="Download Resume (PDF)" 
          onClick={handleDownload}
          style={{ 
            background: '#0a246a', 
            color: '#fff',
            fontWeight: 'bold',
            padding: '0 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            width: 'auto',
            height: '24px',
            border: '1px outset #fff',
            cursor: 'pointer'
          }}
        >
          <span>⬇️</span>
          <span style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>Download PDF</span>
        </button>
        <div style={{ width: '2px', height: '20px', background: '#808080', margin: '0 4px' }} />
        <button title="Bold"><strong>B</strong></button>
        <button title="Italic"><em>I</em></button>
        <button title="Underline"><u>U</u></button>
        <div style={{ width: '2px', height: '20px', background: '#808080', margin: '0 4px' }} />
        <button title="Align Left">≡</button>
        <button title="Center">≣</button>
        <button title="Align Right">≡</button>
      </div>

      {/* Document Content */}
      <div className="word-content">
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '8px', borderBottom: '2px solid #000', paddingBottom: '8px' }}>
            Navya Bijoy
          </h1>
          <p style={{ fontSize: '11px', marginBottom: '16px', color: '#666' }}>
            Bangalore, Karnataka
          </p>
          <p style={{ fontSize: '11px', marginBottom: '16px' }}>
           navyabijoy14@gmail.com | +91 8792655990 | linkedin.com/in/navyabijoy | github.com/navyabijoy
          </p>

          <h2 style={{ fontSize: '16px', marginTop: '24px', marginBottom: '12px', borderBottom: '1px solid #000' }}>
            Professional Summary
          </h2>
          <p style={{ fontSize: '11px', lineHeight: '1.6', marginBottom: '16px' }}>
            Passionate about creating impactful solutions and optimizing processes, with a focus on innovation, efficiency, and continuous
learning.
          </p>

          <h2 style={{ fontSize: '16px', marginTop: '24px', marginBottom: '12px', borderBottom: '1px solid #000' }}>
            Work Experience
          </h2>
          
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
              Consultant Developer Intern - Guidewire Software
            </p>
            <p style={{ fontSize: '10px', fontStyle: 'italic', marginBottom: '8px', color: '#666' }}>
              June 2025 - Sept 2025 | Bangalore, Karnataka
            </p>
            <ul style={{ fontSize: '11px', lineHeight: '1.6', marginLeft: '20px' }}>
              <li>Optimized claim workflows, cutting manual intervention by 5% via rule configuration and process automation.</li>
              <li>Designed and implemented a POC solution, showcasing system scalability and strengthening product roadmap decisions.</li>
              <li>Conducted team reviews to drive alignment, gather feedback, and enhance collaboration in an Agile environment.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
              Full Stack Developer - Freelance
            </p>
            <p style={{ fontSize: '10px', fontStyle: 'italic', marginBottom: '8px', color: '#666' }}>
              March 2025 - May 2025 | Remote
            </p>
            <ul style={{ fontSize: '11px', lineHeight: '1.6', marginLeft: '20px' }}>
              <li>Engineered a microservices-based task management system assisting 50+ daily users, improving task assignment efficiency by
25% through role-based authentication and real-time tracking.</li>
              <li>Integrated Amazon Web Services(AWS) S3 for secure file storage and retrieval, enhancing system scalability and reliability.</li>
              <li>Incorporated client feedback into implementation, ensuring successful and timely project completion.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
              Software Engineering Fellow - Headstarter AI
            </p>
            <p style={{ fontSize: '10px', fontStyle: 'italic', marginBottom: '8px', color: '#666' }}>
              July 2024 - Sept 2024 | Remote
            </p>
            <ul style={{ fontSize: '11px', lineHeight: '1.6', marginLeft: '20px' }}>
              <li>Deployed production-ready AI projects using Retrieval-Augmented Generation with LangChain, Pinecone, and Hugging Face.</li>
              <li>Launched startup generating 1000+ views and 300+ waitlist entries, validating market potential.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
              Open Source Contributor - GirlScript Summer of Code
            </p>
            <p style={{ fontSize: '10px', fontStyle: 'italic', marginBottom: '8px', color: '#666' }}>
              May 2024 - August 2024 | Remote
            </p>
            <ul style={{ fontSize: '11px', lineHeight: '1.6', marginLeft: '20px' }}>
              <li>Ranked in the top 0.7% contributor, showcasing strong technical proficiency and problem-solving skills.</li>
              <li>Actively contributed by generating 15+ GitHub issues and merging 9 pull requests in web development & machine learning.</li>
            </ul>
          </div>

          <h2 style={{ fontSize: '16px', marginTop: '24px', marginBottom: '12px', borderBottom: '1px solid #000' }}>
            Education
          </h2>
          <p style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
            Bachelor of Technology - Computer Science
          </p>
          <p style={{ fontSize: '10px', fontStyle: 'italic', marginBottom: '16px', color: '#666' }}>
            SRM Institute of Science and Technology | Graduating : June 2026 | GPA: 9.83 /10.0
          </p>

          <h2 style={{ fontSize: '16px', marginTop: '24px', marginBottom: '12px', borderBottom: '1px solid #000' }}>
            Key Skills
          </h2>
          <div style={{ fontSize: '11px', lineHeight: '1.8' }}>
            <p><strong>Languages & Frameworks:</strong> Python, Java, JavaScript, React.js, Next.js, Node.js, Express.js, Tailwind CSS</p>
            <p><strong>AI/ML & Cloud:</strong> TensorFlow, LangChain, Pinecone, Hugging Face, AWS (S3, IAM, EC2), Docker</p>
            <p><strong>Tools & Databases:</strong> MongoDB, PostgreSQL, Supabase, Firebase, Git, GitHub, Postman</p>
            <p><strong>Industry Knowledge:</strong>Data Structures, Algorithms, Agile methodologies</p>
            <p><strong>Soft Skills:</strong> Team Leadership, Agile/Scrum, Problem Solving, Communication</p>
          </div>

          <h2 style={{ fontSize: '16px', marginTop: '24px', marginBottom: '12px', borderBottom: '1px solid #000' }}>
            Certifications
          </h2>
          <ul style={{ fontSize: '11px', lineHeight: '1.6', marginLeft: '20px' }}>
            <li>Oracle Cloud Infrastructure Foundations - Associate</li>
            <li>AWS Academy Machine Learning Foundations</li>
            <li>Machine Learning Specialisation - DeepLearning.ai</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
