import Page from 'components/page';

interface ArticleProps {
  url: string;
  title: string;
  paper: string;
}

function Article({ url, title, paper }: ArticleProps): JSX.Element {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <dt>{title}</dt>
      <dd>{paper}</dd>
      <style jsx>{`
        dd {
          margin: 0 0 24px;
          break-before: avoid;
        }

        dt {
          color: var(--on-background);
        }
      `}</style>
    </a>
  );
}

export default function Press(): JSX.Element {
  return (
    <Page name='Press'>
      <main className='wrapper'>
        <h2>In the press</h2>
        <dl>
          <Article
            url='/press/2017-03-01-palo-alto-weekly.pdf'
            title='Playing For Passion'
            paper='Palo Alto Weekly, March 1, 2017'
          />
          <Article
            url='/press/Splash.pdf'
            title='The Peninsula Symphony and Saint Michael Trio Plays the Blues Review - An Evening of Delight'
            paper='Splash Magazines, January 25, 2017'
          />
          <Article
            url='http://www.kdfc.com/The-State-of-the-Arts/15774823'
            title='State of the Arts'
            paper='KDFC, January 17, 2017'
          />
          <Article
            url='/press/Pizarro_20160114.pdf'
            title='Pizarro: music to swing by'
            paper='Mercury News, January 14, 2016'
          />
          <Article
            url='/press/DailyJournalFeb15.pdf'
            title='Sue Lempert on Saint Mike'
            paper='Daily Journal, February 9, 2015'
          />
          <Article
            url='/press/gateline.pdf'
            title='Trio Wows Audience'
            paper='The Peninsula Gateway, December 4, 2014'
          />
          <Article
            url='/press/JeffersonEveningKUOW.pdf'
            title='An Evening With Thomas Jefferson, In The Flesh'
            paper='KUOW.org, November 26, 2014'
          />
          <Article
            url='/press/SFExaminer.pdf'
            title='Humanities West kicks off season with info-concert'
            paper='San Francisco Examiner, September 16, 2014'
          />
          <Article
            url='/press/San Francisco Classical Voice.pdf'
            title="Saint Michael Trio 'Informance' at Humanities West"
            paper='San Francisco Classical Voice, August 12, 2014'
          />
          <Article
            url='/press/Leading a double life.pdf'
            title='Leading a Double Life'
            paper='San Mateo Daily Journal, May 2014'
          />
          <Article
            url='/press/SiliconValleyTalk.pdf'
            title='A Talk with Russell Hancock'
            paper='Silicon Valley Talk, January 2014'
          />
          <Article
            url='/press/NightWithStMike.pdf'
            title='A Night with Saint Mike'
            paper='San Jose Mercury News, January 21, 2014'
          />
          <Article
            url='/press/Audiophile Audition 10 March 2013.pdf'
            title='Review: French Fusion'
            paper='Audiophile Audition, March 10, 2013'
          />
          <Article
            url='/press/Mercury News 9 January 2013.pdf'
            title='The Music Men'
            paper='San Jose Mercury News, January 9, 2013'
          />
          <Article
            url='/press/Fanfare Magazine Jan_Feb 2013.pdf'
            title='Review: French Fusion'
            paper='Fanfare Magazine, January-February 2013, January 9, 2013'
          />
          <Article
            url='/press/FANFARE_review_2012.pdf'
            title='Review: May Cause Mood Swings'
            paper='Fanfare Magazine, July 1, 2012'
          />
          <Article
            url='/press/Audiophile_SMT_Review.pdf'
            title='Not Your Expected Classical Trio By Any Means'
            paper='Audiophile (CD review), March 23, 2012'
          />
          <Article
            url='/press/SJMercuryNews_20120111.pdf'
            title='Saint Mike Turns Five'
            paper='San Jose Mercury News, January 11, 2012'
          />
          <Article
            url='/press/vivelafrance.pdf'
            title='Vive La France'
            paper='Belmont Patch, February 2, 2011'
          />
          <Article
            url='/press/fanfareinterview.pdf'
            title='The Saints March In: A Conversation With the Saint Michael Trio'
            paper='Fanfare Magazine, July 10, 2010'
          />
          <Article
            url='/press/sjmercury20100624.pdf'
            title="Eye Openers: What's Hot Around the Bay This Week"
            paper='San Jose Mercury News, June 24, 2010'
          />
          <Article
            url='/press/FanfareReview.pdf'
            title='Saint Michael Trio: Debut on Presentation Partners'
            paper='Fanfare Magazine, May 7, 2010'
          />
          <Article
            url='/press/mpalmanac20100120.pdf'
            title='The Music Imperative'
            paper='Menlo Park Almanac, January 21, 2010'
          />
          <Article
            url='/press/paweekly20081226.jpg'
            title="Saint Michael Trio Featured on 'Best of 2008' Cover of Palo Alto Weekly"
            paper='Palo Alto Weekly, December 26, 2008'
          />
          <Article
            url='/press/paweekly_pix_20081128.pdf'
            title='Trio on the Go: Saint Michael Trio Makes Music in the Midst of Fast-Paced Silicon Valley Careers'
            paper='Palo Alto Weekly, November 28, 2008'
          />
          <Article
            url='/press/pizarrosjmerc20081119.pdf'
            title='Silicon Valley Music Trio Gets Classical in Their Off-Hours'
            paper='San Jose Mercury News, November 19, 2008'
          />
          <Article
            url='/press/mpalmanac20081114.pdf'
            title='Menlo College Honors High Achievers'
            paper='Menlo Park Almanac, November 14, 2008'
          />
          <Article
            url='/press/the-mercurys-sal-pizarro-on-the-saint-michael-trio.pdf'
            title="The Mercury' Sal Pizarro on the Saint Michael Trio"
            paper='The Mercury, October 15, 2008'
          />
          <Article
            url='/press/mcollegenews20080827.pdf'
            title='St. Michael Trio: Musicians in Residence'
            paper='Menlo College News, August 28, 2008'
          />
        </dl>
      </main>
      <style jsx>{`
        dl {
          columns: 2;
          column-gap: 48px;
        }
      `}</style>
    </Page>
  );
}
