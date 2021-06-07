import Page from 'components/page';
import Video from 'components/video';

export default function Videos(): JSX.Element {
  return (
    <Page name='Videos'>
      <main className='wrapper'>
        <Video src='/vids/jive.mp4'>
          Jive in Blue Major by Cameron Wilson in January of 2013
        </Video>
        <Video src='/vids/scherzo.mp4'>
          Scherzo by Cecille Chaminade in October of 2008
        </Video>
        <Video src='/vids/theme-from-sabrina.mp4'>
          John Williams' Theme from Sabrina in January of 2014
        </Video>
      </main>
      <style jsx>{`
        main > :global(figure:first-child) {
          margin-top: 0;
        }

        main > :global(figure) {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </Page>
  );
}
