import { useEffect, useRef } from 'react';

const Process = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      id: 1,
      title: 'Consultation',
      description: 'Discuss project needs, goals, and timeline.'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Create wireframes & prototypes.'
    },
    {
      id: 3,
      title: 'Development',
      description: 'Code the website or mobile app.'
    },
    {
      id: 4,
      title: 'Testing & Feedback',
      description: 'Review and make revisions.'
    },
    {
      id: 5,
      title: 'Launch',
      description: 'Deploy the final product.'
    },
    {
      id: 6,
      title: 'Maintenance',
      description: 'Ongoing updates and support (Optional).'
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Get positions of step numbers for horizontal layout
    const getStepPositions = () => {
      return stepRefs.current.map(ref => {
        if (!ref) return { x: 0, y: 0 };
        const rect = ref.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        return {
          x: rect.left - canvasRect.left + rect.width / 2,
          y: rect.top - canvasRect.top + rect.height / 2
        };
      });
    };

    let animationProgress = 0;
    const animationSpeed = 0.01;
    const trailLength = 50;
    const trail = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const positions = getStepPositions();
      if (positions.length === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Calculate current position along the path
      animationProgress += animationSpeed;
      if (animationProgress > positions.length - 1) {
        animationProgress = 0;
        trail.length = 0;
      }

      const currentSegment = Math.floor(animationProgress);
      const segmentProgress = animationProgress - currentSegment;
      
      let currentPos;
      if (currentSegment >= positions.length - 1) {
        currentPos = positions[positions.length - 1];
      } else {
        const start = positions[currentSegment];
        const end = positions[currentSegment + 1];
        currentPos = {
          x: start.x + (end.x - start.x) * segmentProgress,
          y: start.y + (end.y - start.y) * segmentProgress
        };
      }

      // Add current position to trail
      trail.push({ ...currentPos });
      if (trail.length > trailLength) {
        trail.shift();
      }

      // Draw the connecting line trail for horizontal layout
      if (trail.length > 1) {
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        for (let i = 1; i < trail.length; i++) {
          const alpha = i / trail.length;
          ctx.globalAlpha = alpha * 0.7;
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a short delay to ensure elements are positioned
    setTimeout(() => {
      animate();
    }, 500);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section id="process" className="process">
      <div className="container">
        <h2 className="text-center">Our Process</h2>
        <div className="process-steps" style={{ position: 'relative' }}>
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
          {steps.map((step, index) => (
            <div key={step.id} className="process-step" style={{ position: 'relative', zIndex: 2 }}>
              <div 
                className="step-number" 
                ref={el => stepRefs.current[index] = el}
              >
                {step.id}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;