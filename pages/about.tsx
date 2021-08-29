import Figure from 'components/figure';
import Page from 'components/page';

import AcknowledgingApplause from 'assets/acknowledging-applause.jpg';
import Informance from 'assets/informance.png';
import GalaPointingUp from 'assets/gala-10-pointing-up.jpg';

export default function About(): JSX.Element {
  return (
    <Page name='About'>
      <main className='wrapper'>
        <article>
          <h2>About Saint Mike</h2>
          <p>The Saint Michael Trio (Robin Sharp, violin; Russell Hancock, piano; Michel Flexer, cello) is hailed as Silicon Valley’s update to the classical music scene. Established in 2007, they are considered California’s premiere piano trio, and their recordings inspire ongoing accolades in the national press. They receive special praise for making their concerts interesting, accessible, and often funny.</p>
          <p>In 2008, the Trio were named artists-in-residence at Menlo College, where they quickly outgrew the auditorium and established a rabid fan base. In 2010 they became affiliated artists at Notre Dame de Namur University. In 2012 they were named the first resident chamber artists at Montalvo Arts Center, where they present numerous concerts and educational programs. In 2013 they entered a partnership with Stanford University where they appear before sold-out crowds at Dinkelspiel Auditorium.</p>
          <p>One of the Trio’s most distinguishing features is the popularity of their “informances”—presentations which explore a single composer in depth, incorporating extensive commentary, slides, and demonstrations of the composer’s compositional devices. These are credited with building a new audience for the classical masterworks, particularly among the rising generation.</p>
          <Figure
            src={Informance}
            height={476}
            width={960}
          >
            An “informance” exploring Mendelssohn at Stanford University
          </Figure>
          <p>In addition to promoting the classical literature, Saint Mike is recognized for commissioning new composers and bringing the contemporary idiom to the classical stage. They have given world premieres to works by New York-based composers Kenji Bunch and Glen Roven, and Vancouver-based Cameron Wilson; in the San Francisco Bay Area they work in creative partnership with Mary Finlayson.</p>
          <p>The Saint Michaels are also recognized for championing the cross-over jazz of Claude Bolling. Their 2012 album French Fusion elaborated and expanded Bolling’s solo suites and won praise from the composer, and in 2013 the Trio premiered their treatment of Bolling’s Suite for Orchestra & Jazz Piano Trio with the Bismarck Symphony.</p>
          <p>Based in Palo Alto, California, the group appears throughout the United States and is heard on Pandora, Spotify, and FM radio stations through the US and Canada.</p>
          <Figure
            src={AcknowledgingApplause}
            height={3735}
            width={5602}
          >
            The Saint Michael Trio at Mantalvo Arts Center  
          </Figure>
        </article>
        <article>
          <p><b>Russell Hancock</b> (piano) made his concert debut with Seattle’s Northwest Symphony at the age of eleven, and has since appeared as concerto soloist with orchestras throughout the United States. A graduate of Harvard, he holds a Ph.D. from Stanford where he teaches in the Public Policy Program. He also serves as president and CEO of Joint Venture Silicon Valley, an influential group of business and government leaders tackling regional problems.</p>
          <p><b>Michel Flexer</b> (cello) performed throughout his youth with the Palo Alto Chamber Orchestra; while a student at Harvard he studied at the New England Conservatory under the tutelage of Bernard Greenhouse (Beaux Arts Trio). A software architect and a serial entrepreneur, he is most recently the co-founder of Duck Duck Moose which provides award-winning children’s applications.</p>
          <p><b>Robin Sharp</b> (violin) joined the Saint Michael Trio in 2017, succeeding Daniel Cher. A graduate of Juilliard, she is a member of the music faculty at Stanford University and concert master of the San Francisco Chamber Orchestra. Her worldwide appearances include Carnegie Hall (New York), the Musikverein (Vienna), the Concertgebouw (Amsterdam) and the National Music Hall (Taipei).</p>
        </article>
      </main>
      <style jsx>{`
        article:first-child > h2:first-child {
          margin: 0 0 -0.5rem;
        }
      `}</style>
    </Page>
  );
}
