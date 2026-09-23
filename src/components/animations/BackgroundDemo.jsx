import React from 'react';
import AnimatedBackground from './AnimatedBackground';

/**
 * Demo Component - Shows all background variants
 * Use this to preview different styles
 */

const BackgroundDemo = () => {
  const demos = [
    {
      variant: 'default',
      title: 'Default',
      description: 'Purple, Pink & Cyan gradients - Perfect for main portfolio sections',
      opacity: 0.6,
      blur: '100px'
    },
    {
      variant: 'purple',
      title: 'Purple',
      description: 'Deep purple & blue tones - Great for premium/luxury feel',
      opacity: 0.5,
      blur: '120px'
    },
    {
      variant: 'colorful',
      title: 'Colorful',
      description: 'Vibrant pink, blue & green - Energetic and playful',
      opacity: 0.6,
      blur: '100px'
    },
    {
      variant: 'minimal',
      title: 'Minimal',
      description: 'Grayscale - Subtle and professional',
      opacity: 0.4,
      blur: '150px'
    }
  ];

  return (
    <div style={{ 
      width: '100%',
      minHeight: '100vh',
      background: '#ffffff',
      padding: '50px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 900,
          marginBottom: '20px',
          color: '#0a0a0a'
        }}>
          Animated Background Variants
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Preview all available background variants and choose the best fit for your section
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {demos.map((demo, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              height: '400px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '3px solid #0a0a0a',
              background: '#ffffff'
            }}
          >
            {/* Animated Background */}
            <AnimatedBackground 
              variant={demo.variant}
              opacity={demo.opacity}
              blur={demo.blur}
            />

            {/* Content */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '30px',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 800,
                marginBottom: '15px',
                color: '#0a0a0a'
              }}>
                {demo.title}
              </h2>
              <p style={{
                fontSize: '0.95rem',
                color: '#333',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {demo.description}
              </p>

              {/* Code snippet */}
              <div style={{
                background: 'rgba(10, 10, 10, 0.9)',
                color: '#fff',
                padding: '15px',
                borderRadius: '10px',
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                textAlign: 'left',
                width: '100%',
                maxWidth: '280px'
              }}>
                <code>
                  &lt;AnimatedBackground<br/>
                  &nbsp;&nbsp;variant="{demo.variant}"<br/>
                  &nbsp;&nbsp;opacity={demo.opacity}<br/>
                  &nbsp;&nbsp;blur="{demo.blur}"<br/>
                  /&gt;
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Instructions */}
      <div style={{
        maxWidth: '800px',
        margin: '60px auto 0',
        padding: '40px',
        background: '#f5f5f5',
        borderRadius: '20px',
        border: '2px solid #e0e0e0'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '20px',
          color: '#0a0a0a'
        }}>
          📚 How to Use
        </h3>
        <ol style={{
          fontSize: '1rem',
          lineHeight: '2',
          color: '#333',
          paddingLeft: '20px'
        }}>
          <li>Import: <code style={{ background: '#fff', padding: '2px 8px', borderRadius: '4px' }}>import AnimatedBackground from './animations/AnimatedBackground'</code></li>
          <li>Add to your component with <code style={{ background: '#fff', padding: '2px 8px', borderRadius: '4px' }}>position: relative</code></li>
          <li>Choose a variant and customize opacity/blur</li>
          <li>Ensure content has <code style={{ background: '#fff', padding: '2px 8px', borderRadius: '4px' }}>z-index: 2</code></li>
        </ol>
      </div>
    </div>
  );
};

export default BackgroundDemo;
