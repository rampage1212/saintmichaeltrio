import Image from 'next/image';
import Link from 'next/link';

export interface FigureProps {
  src: { src: string; height: number; width: number };
  width: number;
  height: number;
  children: string;
  priority?: boolean;
  alt?: string;
}

export default function Figure({ src, width, height, priority, alt, children }: FigureProps): JSX.Element {
  return (
    <figure>
      <Link href={src.src}>
        <Image 
          src={src} 
          width={width} 
          height={height} 
          alt={alt || children || ''}
          priority={priority} 
          placeholder='blur'
        /> 
      </Link>
      <figcaption>{children}</figcaption>
      <style jsx>{`
        figure {
          display: block;
          text-align: center;
          margin: 1.5rem auto 1rem;
        }

        figure > :global(div) {
          border: 1px solid var(--accents-2);
          background: var(--accents-1);
        }

        figure > figcaption {
          font-size: 0.9rem;
          font-style: italic;
          margin-top: 0.25rem;
          color: var(--accents-5);
        }
      `}</style>
    </figure>
  );
}
