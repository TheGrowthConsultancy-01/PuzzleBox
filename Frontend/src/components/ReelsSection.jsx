import { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import '../styles/reels.css';

const REELS_DATA = [
  {
    id: 'choclet',
    title: 'Artisan Chocolate Packaging',
    tag: '🍫 Confectionery',
    src: '/choclet.mp4',
    fallbackSrc: '/choclet%20(1).mp4',
    type: 'video/mp4',
  },
  {
    id: 'bh-ch',
    title: 'Bespoke Confectionery Wrap',
    tag: '✨ Flow-Wrap',
    src: '/bh-ch.mov',
    fallbackSrc: '/BH%20CH%20(1).mov',
    type: 'video/mp4',
  },
  {
    id: 'sweet-ch',
    title: 'Premium Sweet Packaging',
    tag: '🌿 Plant-Based',
    src: '/sweet-ch.mov',
    fallbackSrc: '/sweet%20ch%20(1).mov',
    type: 'video/mp4',
  },
  {
    id: 'camach',
    title: 'Eco Brand Innovation',
    tag: '📦 Custom Print',
    src: '/camach.mov',
    fallbackSrc: '/camach%20(1).mov',
    type: 'video/mp4',
  },
];

function ReelCard({ reel, isAudioActive, onToggleAudio }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-play muted when scrolled into viewport
  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  // Sync mute state with audio focus
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isAudioActive;
    }
  }, [isAudioActive]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleAudioClick = e => {
    e.stopPropagation();
    onToggleAudio(reel.id);
    // If video was paused, start playing when audio is turned on
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`reel-card ${isPlaying ? 'is-playing' : ''}`}
      onClick={togglePlay}
      role="button"
      tabIndex={0}
      aria-label={`Play or pause ${reel.title} video reel`}
      onKeyDown={e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          togglePlay();
        }
      }}
    >
      <video
        ref={videoRef}
        className="reel-video"
        playsInline
        loop
        muted={!isAudioActive}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={reel.src} type={reel.type} />
        {reel.fallbackSrc && <source src={reel.fallbackSrc} type="video/quicktime" />}
        Your browser does not support the video tag.
      </video>

      {/* Top Bar with Tag and Audio Control */}
      <div className="reel-top-bar">
        <span className="reel-tag">{reel.tag}</span>
        <button
          type="button"
          className="reel-ctrl-btn"
          onClick={handleAudioClick}
          aria-label={isAudioActive ? 'Mute audio' : 'Unmute audio'}
          title={isAudioActive ? 'Mute audio' : 'Unmute audio'}
        >
          {isAudioActive ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Center Play/Pause indicator */}
      <div className="reel-center-play" aria-hidden="true">
        {isPlaying ? '⏸' : '▶'}
      </div>

      {/* Bottom Info Overlay */}
      <div className="reel-bottom-info">
        <div className="reel-title">{reel.title}</div>
        <div className="reel-sound-hint">
          <span>{isAudioActive ? '● Sound On' : 'Tap 🔇 for audio'}</span>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="reel-progress-track">
        <div className="reel-progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default function ReelsSection({
  label = 'Sustainable Packaging in Action',
  title = 'Watch Our Switch in Motion',
  description = 'Experience our 100% home-compostable chocolate wrappers, bespoke luxury print finishes, and eco-conscious packaging engineered for premium brands.',
} = {}) {
  const [activeAudioId, setActiveAudioId] = useState(null);

  const handleToggleAudio = id => {
    setActiveAudioId(prev => (prev === id ? null : id));
  };

  return (
    <section className="reels-section">
      <div className="container">
        <ScrollReveal className="reels-header">
          <div className="section-label">{label}</div>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="reels-grid">
            {REELS_DATA.map(reel => (
              <ReelCard
                key={reel.id}
                reel={reel}
                isAudioActive={activeAudioId === reel.id}
                onToggleAudio={handleToggleAudio}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
