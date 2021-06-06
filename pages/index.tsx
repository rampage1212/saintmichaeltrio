import Image from 'next/image';

import Page from 'components/page';

export default function Home(): JSX.Element {
  return (
    <Page name='Home'>
      <div>
        <Image 
          src='/imgs/home.jpg'
          height={563}
          width={870}
          priority
        />
      </div>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </Page>
  );
}
