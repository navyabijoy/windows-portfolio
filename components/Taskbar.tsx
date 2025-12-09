'use client';

import { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

interface TaskbarProps {
  openWindows: Array<{
    id: string;
    title: string;
    zIndex: number;
  }>;
  onWindowClick: (id: string) => void;
  onStartClick: () => void;
  showStartMenu: boolean;
}

export default function Taskbar({ openWindows, onWindowClick, onStartClick, showStartMenu }: TaskbarProps) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const getHighestZIndex = () => {
    return openWindows.length > 0 
      ? Math.max(...openWindows.map(w => w.zIndex))
      : 0;
  };

  return (
    <div className="taskbar">
      {/* Start Button */}
      <button 
        className="start-button"
        onClick={onStartClick}
        style={{ borderStyle: showStartMenu ? 'inset' : 'outset' }}
      >
        <span style={{ fontSize: '16px' }}>🪟</span>
        <span>Start</span>
      </button>

      <div className="taskbar-divider" />

      {/* Quick Launch */}
      <div className="quick-launch">
        <button 
          title="Email" 
          onClick={() => window.open('mailto:navyabijoy14@gmail.com')}
          style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '2px 4px' }}
        >
          <FaEnvelope size={16} color="#000" />
          <span>Email</span>
        </button>
        <button 
          title="LinkedIn" 
          onClick={() => window.open('https://www.linkedin.com/in/navya-bijoy-883a35249/', '_blank')}
          style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '2px 4px' }}
        >
          <FaLinkedin size={16} color="#0077b5" />
          <span>LinkedIn</span>
        </button>
        <button 
          title="GitHub" 
          onClick={() => window.open('https://github.com/navyabijoy', '_blank')}
          style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '2px 4px' }}
        >
          <FaGithub size={16} color="#000" />
          <span>GitHub</span>
        </button>
      </div>

      <div className="taskbar-divider" />

      {/* Open Windows */}
      <div className="taskbar-windows">
        {openWindows.map((window) => (
          <button
            key={window.id}
            className={`taskbar-window-button ${window.zIndex === getHighestZIndex() ? 'active' : ''}`}
            onClick={() => onWindowClick(window.id)}
            title={window.title}
          >
            <span style={{ fontSize: '12px' }}>
              {window.title.includes('Resume') ? '📄' :
               window.title.includes('Projects') ? '📁' :
               window.title.includes('Command') ? '💻' :
               window.title.includes('Contact') ? '✉️' : '📋'}
            </span>
            <span>{window.title}</span>
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="system-tray">
        <span style={{ fontSize: '12px' }}>🔊</span>
        <span style={{ fontSize: '12px' }}>🌐</span>
        <div className="system-tray-time">{currentTime}</div>
      </div>
    </div>
  );
}
