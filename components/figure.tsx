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
          text-align: center;
          margin: 36px auto 24px;
        }

        figure > :global(div) {
          border: 1px solid var(--accents-2);
        }

        figure > figcaption {
          font-style: italic;
          color: var(--accents-5);
        }
      `}</style>
    </figure>
  );
}
