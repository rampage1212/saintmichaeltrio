import Link from 'next/link';
import Image from 'next/image';

export interface FigureProps {
  src: string;
  width: number;
  height: number;
  children: string;
  priority?: boolean;
  alt?: string;
}

export default function Figure({ src, width, height, priority, alt, children }: FigureProps): JSX.Element {
  return (
    <figure>
      <Link href={src}>
        <Image src={src} width={width} height={height} alt={alt || children || ''} priority={priority} /> 
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
