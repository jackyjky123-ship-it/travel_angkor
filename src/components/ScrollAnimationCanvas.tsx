import React, { useEffect, useRef } from 'react';

export const ScrollAnimationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const frameCount = 210;
    const currentFrame = (index: number) => (
      `/ezgif-5629205c983d1394-jpg/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
    );

    const images: HTMLImageElement[] = [];
    let firstFrameLoaded = false;
    
    // Preload all frames
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        if (i === 0) {
          firstFrameLoaded = true;
          render(0);
        }
      };
      images.push(img);
    }

    let targetIndex = 0;
    let smoothIndex = 0;
    let isAnimating = false;
    let animationFrameId: number;

    const render = (index: number) => {
      const img = images[index];
      if (!img || !img.complete) return;
      
      // Set canvas internal resolution to window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Calculate scale to cover the screen
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      
      // Center the image
      const x = (canvas.width - drawWidth) / 2;
      const y = (canvas.height - drawHeight) / 2;
      
      // Ensure image scaling is high quality
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, drawWidth, drawHeight);
    };

    const updateAnimation = () => {
      const diff = targetIndex - smoothIndex;
      smoothIndex += diff * 0.1; // 0.1 determines smoothing speed. Lower = smoother.
      
      const frameToDraw = Math.round(smoothIndex);
      render(frameToDraw);

      // Keep animating if we haven't reached the target
      if (Math.abs(diff) > 0.01) {
        animationFrameId = requestAnimationFrame(updateAnimation);
      } else {
        smoothIndex = targetIndex;
        isAnimating = false;
      }
    };

    const handleScroll = () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      
      if (maxScrollTop <= 0) return; 

      const scrollFraction = scrollTop / maxScrollTop;
      targetIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );
      
      if (!isAnimating) {
        isAnimating = true;
        animationFrameId = requestAnimationFrame(updateAnimation);
      }
    };

    const handleResize = () => {
      if (firstFrameLoaded) {
        render(Math.round(smoothIndex));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10 block pointer-events-none object-cover"
    />
  );
};

