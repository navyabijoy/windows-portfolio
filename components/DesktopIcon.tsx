'use client';

import { useState, useEffect } from 'react';

interface DesktopIconProps {
  label: string;
  icon: string | React.ReactNode;
  onDoubleClick: () => void;
}

export default function DesktopIcon({ 
  label, 
  icon, 
  onDoubleClick,
  position,
  onPositionChange 
}: DesktopIconProps & { 
  position: { x: number; y: number };
  onPositionChange: (pos: { x: number; y: number }) => void;
}) {
  const [selected, setSelected] = useState(false);
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(true);
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;
        
        // Constrain to container (desktop)
        // Assume desktop is full screen minus taskbar (handled visually)
        // We allow some flexibility
        const safeX = Math.max(0, newX);
        const safeY = Math.max(0, newY);

        onPositionChange({ x: safeX, y: safeY });
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
  }, [isDragging, dragOffset, onPositionChange]);

  const handleClick = (e: React.MouseEvent) => {
    // If we just finished dragging, don't process click as a selection toggle or double click trigger
    // But basic selection is handled on mousedown.
    // Logic for double click:
    
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      onDoubleClick();
    } else {
      const timeout = setTimeout(() => {
        setClickTimeout(null);
      }, 300);
      setClickTimeout(timeout);
    }
  };

  const handleBlur = () => {
    // Only blur if not dragging?
    // Mousedown sets focus.
    setSelected(false);
  };

  return (
    <div
      className={`desktop-icon ${selected ? 'selected' : ''}`}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      // Remove onBlur causing issues with drag focus? 
      // Actually standard focus behavior handles blur when clicking elsewhere.
      // We'll keep onBlur but ensure mousedown focuses.
      tabIndex={0}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        // Override grid default behavior locally
      }}
    >
      <div style={{ fontSize: '48px', lineHeight: 1, pointerEvents: 'none' }}>{icon}</div>
      <span style={{ pointerEvents: 'none' }}>{label}</span>
    </div>
  );
}
