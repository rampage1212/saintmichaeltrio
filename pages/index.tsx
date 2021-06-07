import Image from 'next/image';

import Page from 'components/page';

export default function Home(): JSX.Element {
  return (
    <Page name='Home'>
      <div>
        <p>The Saint Michael Trio is Silicon Valley’s update to the classical music scene.</p>
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
          flex-direction: column;
        }
        
        p {
          margin: 0 0 24px;
          text-align: center;
        }
      `}</style>
    </Page>
  );
}
