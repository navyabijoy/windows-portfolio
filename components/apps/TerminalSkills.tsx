'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// UPDATED SKILLS DATA BASED ON NAVYA BIJOY'S RESUME
const skillsData = {
  command: 'C:\\Users\\Navya> show_skills.exe',
  output: [
    '',
    'Initializing skill analysis...',
    'Loading developer profile: Navya Bijoy...',
    '',
    '═══════════════════════════════════════════════════',
    '              TECHNICAL SKILLS REPORT',
    '═══════════════════════════════════════════════════',
    '',
    '┌─ LANGUAGES & FRAMEWORKS ────────────────────────┐',
    '│                                                 │',
    // Skills are aligned using a fixed-width status indicator
    '│  Python             [STATUS: READY] | ACTIVE |  │', 
    '│  Java               [STATUS: READY] | ACTIVE |  │', 
    '│  JavaScript         [STATUS: READY] | ACTIVE |  │', 
    '│  React.js           [STATUS: READY] | ACTIVE |  │', 
    '│  Next.js            [STATUS: READY] | ACTIVE |  │', 
    '│  Node.js            [STATUS: READY] | ACTIVE |  │', 
    '│  Express.js         [STATUS: READY] | ACTIVE |  │', 
    '│  Tailwind CSS       [STATUS: READY] | ACTIVE |  │', 
    '│  RESTful APIs       [STATUS: READY] | ACTIVE |  │', 
    '│                                                 │',
    '└─────────────────────────────────────────────────┘',
    '',
    '┌─ AI/ML & CLOUD INFRASTRUCTURE ──────────────────┐',
    '│                                                 │',
    '│  TensorFlow         [STATUS: READY] | ACTIVE |  │', 
    '│  Hugging Face       [STATUS: READY] | ACTIVE |  │', 
    '│  LangChain          [STATUS: READY] | ACTIVE |  │', 
    '│  Pinecone           [STATUS: READY] | ACTIVE |  │', 
    '│  AWS (S3)           [STATUS: READY] | ACTIVE |  │', 
    '│  AWS (IAM, EC2)     [STATUS: READY] | ACTIVE |  │', 
    '│  Docker             [STATUS: READY] | ACTIVE |  │', 
    '│                                                 │',
    '└─────────────────────────────────────────────────┘',
    '',
    '┌─ TOOLS & DATABASES ─────────────────────────────┐',
    '│                                                 │',
    '│  MongoDB            [STATUS: READY] | ACTIVE |  │', 
    '│  PostgreSQL         [STATUS: READY] | ACTIVE |  │', 
    '│  Supabase           [STATUS: READY] | ACTIVE |  │', 
    '│  Firebase           [STATUS: READY] | ACTIVE |  │', 
    '│  Git & GitHub       [STATUS: READY] | ACTIVE |  │', 
    '│  Postman            [STATUS: READY] | ACTIVE |  │', 
    '│  Agile/Scrum        [STATUS: READY] | ACTIVE |  │', 
    '│  Data Structures    [STATUS: READY] | ACTIVE |  │', 
    '│                                                 │',
    '└─────────────────────────────────────────────────┘',
    '',
    '═══════════════════════════════════════════════════',
    '',
    'Analysis complete! Total modules loaded: 22',
    'Status: SYSTEM OPERATIONAL',
    'Experience: 2+ Years Academic & Project/Internship',
    '',
    'C:\\Users\\Navya>',
  ],
};

export default function TerminalSkills() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';
    const allLines: string[] = [];

    // First, type the command
    const typeCommand = () => {
      if (charIndex < skillsData.command.length) {
        currentLine += skillsData.command[charIndex];
        setDisplayedLines([currentLine]);
        charIndex++;
        setTimeout(typeCommand, 50);
      } else {
        // Command typed, now show output
        allLines.push(currentLine);
        setTimeout(showOutput, 500);
      }
    };

    // Then show output lines with varying speeds
    const showOutput = () => {
      if (lineIndex < skillsData.output.length) {
        const line = skillsData.output[lineIndex];
        allLines.push(line);
        setDisplayedLines([...allLines]);

        // Scroll to bottom
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }

        lineIndex++;

        // Vary the speed based on line content
        const delay = line.includes('█') ? 100 : line.trim() === '' ? 50 : 30;
        setTimeout(showOutput, delay);
      } else {
        setIsTyping(false);
      }
    };

    typeCommand();
  }, []);

  // Cursor blink effect - remains unchanged
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div ref={terminalRef} className="terminal">
      <div style={{ marginBottom: '16px' }}>
        {/* Changed 'Developer' to 'Navya' */}
        <div style={{ fontSize: '12px', marginBottom: '8px' }}>
          Microsoft Windows 98 [Version 4.10.1998]
        </div>
        <div style={{ fontSize: '12px', marginBottom: '16px' }}>
          (C) Copyright Microsoft Corp 1981-1998.
        </div>
      </div>

      {displayedLines.map((line, index) => (
        <div key={index} className="terminal-line">
          {line}
          {index === displayedLines.length - 1 && isTyping && (
            <span
              className="terminal-cursor"
              style={{ opacity: showCursor ? 1 : 0 }} // Apply the blinking effect
            />
          )}
        </div>
      ))}

      {/* Show static cursor on the new line after typing is done */}
      {!isTyping && (
        <div className="terminal-line">
          <span
            className="terminal-cursor"
            style={{ opacity: showCursor ? 1 : 0 }}
          />
        </div>
      )}
    </div>
  );
}