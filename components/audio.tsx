import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { secondsToTimestamp, toggleSelection } from 'components/video';
import FullScreenIcon from 'components/icons/full-screen';
import PauseIcon from 'components/icons/pause';
import PlayIcon from 'components/icons/play';

export interface AudioProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
}

export default function Audio({
  src = '/albums/america/01 - Cristal.mp3',
  autoplay,
  loop,
}: AudioProps): JSX.Element {
  const ref = useRef<HTMLAudioElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const lastScrollPosition = useRef<number>(0);

  useEffect(() => {
    function handleScroll(): void {
      const currentScrollPosition = window.pageYOffset;
      const prevScrollPosition = lastScrollPosition.current;
      lastScrollPosition.current = currentScrollPosition;
      setVisible(() => {
        const scrolledUp = currentScrollPosition < prevScrollPosition;
        const scrolledToTop = currentScrollPosition < 10;
        return scrolledUp || scrolledToTop;
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [playing, setPlaying] = useState<boolean>(autoplay || false);
  const togglePlayback = useCallback(async () => {
    if (!ref.current) return;
    if (ref.current.paused) {
      await ref.current.play();
      setPlaying(true);
    } else {
      ref.current.pause();
      setPlaying(false);
    }
  }, []);

  const [progress, setProgress] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const updateProgress = useCallback(() => {
    if (dragging || !ref.current?.currentTime || !ref.current?.duration) return;
    setProgress(ref.current.currentTime / ref.current.duration);
  }, [dragging]);

  useEffect(() => {
    if (!ref.current || !ref.current.duration) return;
    const updated = progress * ref.current.duration;
    if (progress === 1) setPlaying(false);
    if (Math.round(updated) === Math.round(ref.current.currentTime)) return;
    ref.current.currentTime = progress * ref.current.duration;
  }, [progress]);

  const updateDrag = useCallback(
    (event: MouseEvent) => {
      if (!dragging) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      const updated = (event.clientX - bounds.left) / bounds.width;
      setProgress(Math.min(1, Math.max(0, updated)));
    },
    [dragging]
  );
  const endDrag = useCallback(
    (event: MouseEvent) => {
      setDragging(false);
      toggleSelection('');
      updateDrag(event);
    },
    [updateDrag]
  );
  const startDrag = useCallback(
    (event: MouseEvent) => {
      setDragging(true);
      toggleSelection('none');
      updateDrag(event);
    },
    [updateDrag]
  );

  const audioId = `${src.split('/').pop() as string}-audio`;

  return (
    <figure className={cn({ visible })}>
      <div className='scrim' />
      <figcaption>Music of the Americas - Cristal</figcaption>
      <audio
        id={audioId}
        onTimeUpdate={updateProgress}
        onDurationChange={updateProgress}
        autoPlay={autoplay}
        preload='auto'
        playsInline
        loop={loop}
        src={src}
        ref={ref}
      >
        <track kind='captions' />
      </audio>
      <div className='controls'>
        <button className='play' type='button' onClick={togglePlayback}>
          {playing && <PauseIcon />}
          {!playing && <PlayIcon />}
        </button>
        <div className='time'>
          {secondsToTimestamp(ref.current?.currentTime || 0)}
        </div>
        <div className='progress'>
          <div
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onMouseDown={startDrag}
            onMouseMove={updateDrag}
            className='drag-handler'
            role='scrollbar'
            aria-label='Scroll audio'
            aria-controls={audioId}
            aria-valuemin={0}
            aria-valuenow={progress * 100}
            aria-valuemax={100}
            tabIndex={-1}
          />
          <progress value={progress * 100} max='100' />
          <div style={{ left: `${progress * 100}%` }} className='handle' />
        </div>
        <div className='time'>
          {secondsToTimestamp(ref.current?.duration || 0)}
        </div>
        <button className='fullscreen' type='button'>
          <FullScreenIcon />
        </button>
      </div>
      <style jsx>{`
        figure {
          display: block;
          text-align: center;
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 4;
          border-radius: 5px;
          border: 1px solid var(--accents-2);
          backdrop-filter: saturate(180%) blur(2px);
          padding: 4px;
          margin: 0;
          opacity: 0;
          overflow: hidden;
          transform: translate3d(0, 6px, 0);
          transition: all 0.2s cubic-bezier(0.25, 0.57, 0.45, 0.94);
        }

        figure.visible {
          opacity: 1;
          transform: translateZ(0);
        }

        .scrim {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          background: var(--background);
          opacity: 0.85;
          z-index: -1;
        }

        figcaption {
          font-size: 0.9rem;
          font-style: italic;
          color: var(--accents-5);
          margin-top: 8px;
        }

        div.controls div {
          position: relative;
        }

        audio {
          position: absolute;
          left: 0;
          top: 0;
          height: 0;
          width: 0;
        }

        div.controls {
          height: 40px;
          display: flex;
          align-items: center;
        }

        button.play {
          background: transparent;
          border: 0;
          height: 40px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: 0;
          cursor: pointer;
          flex: 0 0 40px;
          padding: 0;
        }

        div.controls div.progress {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1 0 auto;
          min-width: 96px;
        }

        div.controls progress {
          background-color: var(--accents-2);
          height: 2px;
          width: 100%;
          position: absolute;
          top: calc(50% - 1px);
          left: 0;
          pointer-events: none;
        }

        div.controls div.progress div.handle {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--on-background);
          transform: translateX(-4px) translateY(1px) scale(0);
          transition: width 0.1s ease, height 0.1s ease, border-radius 0.1s ease,
            transform 0.1s ease, background-color 0.1s ease;
          top: calc(50% - 6px);
          pointer-events: none;
        }

        div.controls div.progress div.thumb {
          position: absolute;
          background: var(--on-background);
          box-shadow: 0 4px 9px rgba(0, 0, 0, 0.12);
          transform: translate3d(0, 40px, 0) scale(0.8, 0);
          pointer-events: none;
          opacity: 0;
          background-size: cover;
        }

        @media (hover: hover) {
          div.controls div.progress:hover div.handle {
            transform: translateX(-4px) translateY(1px) scale(1);
          }

          div.controls div.progress div.drag-handler:hover ~ div.thumb {
            transform: translateZ(0) scaleY(0);
            opacity: 1;
          }
        }

        div.controls div.time {
          font-size: 12px;
          font-weight: 600;
          line-height: 40px;
          padding: 0 12px;
          flex: 0 0 auto;
          width: 60px;
        }

        button.play + div.time {
          padding-left: 0;
        }

        @media (max-width: 992px) {
          figure {
            opacity: 1;
            transform: translateZ(0) scaleY(0);
          }

          div.drag-handler {
            height: 18px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }

        @media (max-width: 480px) {
          .thumb {
            display: none;
          }
        }

        button.fullscreen {
          color: var(--on-background);
          background: transparent;
          border: 0;
          height: 40px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: 0;
          cursor: pointer;
          flex: 0 0 40px;
          padding: 0;
        }

        div.drag-handler {
          width: 100%;
          height: 18px;
          background: transparent;
          cursor: pointer;
        }
      `}</style>
    </figure>
  );
}
