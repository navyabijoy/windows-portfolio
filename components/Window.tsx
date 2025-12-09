'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
  onSizeChange: (size: { width: number; height: number }) => void;
}

export default function Window({
  id,
  title,
  children,
  position,
  size,
  zIndex,
  onClose,
  onFocus,
  onPositionChange,
  onSizeChange,
}: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Open animation
  useEffect(() => {
    if (windowRef.current) {
      gsap.from(windowRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
        onComplete: () => {
          // Clear only transform, keep opacity at 1
          if (windowRef.current) {
            windowRef.current.style.opacity = '1';
            gsap.set(windowRef.current, { clearProps: 'transform' });
          }
        },
      });
    }
  }, []);

  // Drag functionality
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        // Constrain to viewport
        const maxX = window.innerWidth - size.width;
        const maxY = window.innerHeight - size.height - 40; // Account for taskbar
        
        const constrainedX = Math.max(0, Math.min(newX, maxX));
        const constrainedY = Math.max(0, Math.min(newY, maxY));
        
        onPositionChange({ x: constrainedX, y: constrainedY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, isMaximized, size, onPositionChange]);

  const handleTitleBarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't start dragging if clicking on buttons
    if ((e.target as HTMLElement).tagName === 'BUTTON') {
      return;
    }
    
    if (!isMaximized && windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
      onFocus();
    }
  };

  const handleClose = () => {
    if (windowRef.current) {
      gsap.to(windowRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.15,
        ease: 'power2.in',
        onComplete: onClose,
      });
    }
  };

  const handleMinimize = () => {
    if (windowRef.current) {
      gsap.to(windowRef.current, {
        scale: 0,
        opacity: 0,
        transformOrigin: 'bottom left',
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          setIsMinimized(true);
        },
      });
    }
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleMouseDown = () => {
    onFocus();
  };

  return (
    <div
      ref={windowRef}
      className={`window ${zIndex > 0 ? 'focused' : ''}`}
      style={{
        position: 'absolute',
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 0 : position.y,
        zIndex,
        width: isMaximized ? '100%' : size.width,
        height: isMaximized ? '100%' : size.height,
        display: isMinimized ? 'none' : 'flex',
        cursor: isDragging ? 'grabbing' : 'default',
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Title Bar */}
      <div 
        className="title-bar"
        onMouseDown={handleTitleBarMouseDown}
        style={{ cursor: isMaximized ? 'default' : 'grab' }}
      >
        <div className="title-bar-text">
          <span style={{ fontSize: '12px' }}>
            {title.includes('Resume') ? '📄' :
             title.includes('Projects') ? '📁' :
             title.includes('Command') ? <img src="/images/Windows_Terminal_Logo.png" alt="Command" style={{ width: '12px', height: '12px', marginRight: '4px', verticalAlign: 'middle' }} /> :
             title.includes('Contact') ? '✉️' : '📋'}
          </span>
          <span>{title}</span>
        </div>
        <div className="title-bar-controls">
          <button
            onClick={handleMinimize}
            title="Minimize"
            aria-label="Minimize"
          >
            _
          </button>
          <button
            onClick={handleMaximize}
            title={isMaximized ? 'Restore' : 'Maximize'}
            aria-label={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? '❐' : '□'}
          </button>
          <button
            onClick={handleClose}
            title="Close"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="window-body">
        {children}
      </div>
    </div>
  );
}
