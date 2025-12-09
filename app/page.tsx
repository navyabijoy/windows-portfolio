'use client';

import { useState, useEffect } from 'react';
import Taskbar from '@/components/Taskbar';
import DesktopIcon from '@/components/DesktopIcon';
import Window from '@/components/Window';
import ResumeViewer from '@/components/apps/ResumeViewer';
import ProjectsExplorer from '@/components/apps/ProjectsExplorer';
import TerminalSkills from '@/components/apps/TerminalSkills';
import ContactForm from '@/components/apps/ContactForm';

interface OpenWindow {
  id: string;
  type: string;
  title: string;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

interface DesktopIconItem {
  id: string;
  label: string;
  type: string;
  icon: string | React.ReactNode;
  position: { x: number; y: number };
}

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(1);
  const [showStartMenu, setShowStartMenu] = useState(false);

  const [icons, setIcons] = useState<DesktopIconItem[]>([
    { id: 'resume', label: 'Resume.doc', type: 'Resume', icon: <img src="/images/word-icon.png" alt="My Resume" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />, position: { x: 20, y: 20 } },
    { id: 'projects', label: 'My Projects', type: 'Projects', icon: <img src="/images/file-icon.png" alt="My Projects" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />, position: { x: 20, y: 130 } },
    { id: 'skills', label: 'Tech Stack', type: 'Skills', icon: <img src="/images/Windows_Terminal_Logo.png" alt="Tech Stack" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />, position: { x: 20, y: 240 } },
    { id: 'contact', label: 'Contact Me', type: 'Contact', icon: <img src="/images/windows-mail.ico" alt="Contact Me" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />, position: { x: 20, y: 350 } },
    { id: 'recycle', label: 'Recycle Bin', type: 'RecycleBin', icon: <img src="/images/recycle-bin.png" alt="Recycle Bin" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />, position: { x: 20, y: 460 } },
  ]);

  const updateIconPosition = (id: string, position: { x: number; y: number }) => {
    setIcons(prev => prev.map(icon => 
      icon.id === id ? { ...icon, position } : icon
    ));
  };

  const openWindow = (type: string) => {
    // Check if window is already open
    const existingWindow = openWindows.find(w => w.type === type);
    if (existingWindow) {
      focusWindow(existingWindow.id);
      return;
    }

    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);

    const titles: { [key: string]: string } = {
      Resume: 'My Resume - Microsoft Word',
      Projects: 'My Projects - Windows Explorer',
      Skills: 'Tech Stack - Command Prompt',
      Contact: 'Contact Me - Message',
    };

    const sizes: { [key: string]: { width: number; height: number } } = {
      Resume: { width: 700, height: 600 },
      Projects: { width: 800, height: 550 },
      Skills: { width: 650, height: 450 },
      Contact: { width: 500, height: 450 },
    };

    const newWindow: OpenWindow = {
      id: `${type}-${Date.now()}`,
      type,
      title: titles[type] || type,
      zIndex: newZIndex,
      position: { 
        x: 50 + (openWindows.length * 30), 
        y: 50 + (openWindows.length * 30) 
      },
      size: sizes[type] || { width: 600, height: 500 },
    };

    setOpenWindows([...openWindows, newWindow]);
    setShowStartMenu(false);
  };

  const closeWindow = (id: string) => {
    setOpenWindows(openWindows.filter(w => w.id !== id));
  };

  const focusWindow = (id: string) => {
    const newZIndex = highestZIndex + 1;
    setHighestZIndex(newZIndex);
    
    setOpenWindows(openWindows.map(w => 
      w.id === id ? { ...w, zIndex: newZIndex } : w
    ));
  };

  const updateWindowPosition = (id: string, position: { x: number; y: number }) => {
    setOpenWindows(openWindows.map(w => 
      w.id === id ? { ...w, position } : w
    ));
  };

  const updateWindowSize = (id: string, size: { width: number; height: number }) => {
    setOpenWindows(openWindows.map(w => 
      w.id === id ? { ...w, size } : w
    ));
  };

  const renderWindowContent = (type: string) => {
    switch (type) {
      case 'Resume':
        return <ResumeViewer />;
      case 'Projects':
        return <ProjectsExplorer />;
      case 'Skills':
        return <TerminalSkills />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <div>Window content not found</div>;
    }
  };

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.start-button') && !target.closest('.start-menu')) {
        setShowStartMenu(false);
      }
    };

    if (showStartMenu) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [showStartMenu]);

  return (
    <div className="desktop">
      {/* Desktop Icons */}
      <div className="desktop-icons">
        {icons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            label={icon.label}
            icon={icon.icon}
            onDoubleClick={() => icon.type !== 'RecycleBin' && openWindow(icon.type)}
            position={icon.position}
            onPositionChange={(pos) => updateIconPosition(icon.id, pos)}
          />
        ))}
      </div>

      {/* Windows Container */}
      <div className="window-container">
        {openWindows.map((window) => (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            position={window.position}
            size={window.size}
            zIndex={window.zIndex}
            onClose={() => closeWindow(window.id)}
            onFocus={() => focusWindow(window.id)}
            onPositionChange={(pos) => updateWindowPosition(window.id, pos)}
            onSizeChange={(size) => updateWindowSize(window.id, size)}
          >
            {renderWindowContent(window.type)}
          </Window>
        ))}
      </div>

      {/* Start Menu */}
      {showStartMenu && (
        <div className="start-menu">
          <div className="start-menu-banner">Windows 98</div>
          <div className="start-menu-items">
            <div className="start-menu-item" onClick={() => openWindow('Resume')}>
              <span>📄</span>
              My Resume
            </div>
            <div className="start-menu-item" onClick={() => openWindow('Projects')}>
              <span>📁</span>
              My Projects
            </div>
            <div className="start-menu-item" onClick={() => openWindow('Skills')}>
              <span>💻</span>
              Tech Stack
            </div>
            <div className="start-menu-item" onClick={() => openWindow('Contact')}>
              <span>✉️</span>
              Contact Me
            </div>
            <hr style={{ margin: '4px 0', border: '1px inset #808080' }} />
            <div className="start-menu-item">
              <span>⚙️</span>
              Settings
            </div>
            <div className="start-menu-item">
              <span>🔌</span>
              Shut Down...
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <Taskbar
        openWindows={openWindows}
        onWindowClick={focusWindow}
        onStartClick={() => setShowStartMenu(!showStartMenu)}
        showStartMenu={showStartMenu}
      />
    </div>
  );
}
