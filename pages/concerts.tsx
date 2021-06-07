import Page from 'components/page';

interface ConcertProps {
  date: string;
  name: string;
  venue?: string;
}

function Concert({ date, name, venue }: ConcertProps): JSX.Element {
  return (
    <li>
      <p className='title'>{name}</p>
      {venue && <p className='venue'>{venue}</p>}
      <p className='date'>{date}</p>
      <style jsx>{`
        p {
          margin: 0;
        }

        .date,
        .venue {
          color: var(--accents-5);
        }

        li {
          margin-bottom: 24px;
          break-inside: avoid;
        }
      `}</style>
    </li>
  );
}

export default function Concerts(): JSX.Element {
  return (
    <Page name='Concerts'>
      <main className='wrapper'>
        <header role='banner'>
          Due to COVID-19 restrictions, we are no longer holding in-person concerts. We will resume live performances as health guidelines permit.
        </header>
        <h2>Past concerts</h2>
        <ul>
          <Concert
            date='May 3rd, 2020'
            name='SPRING FLING!'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='March 8th, 2020'
            name="DEBUSSY: FRANCE'S MASTER IMPRESSIONIST"
            venue='Montalvo Arts Center'
          />
          <Concert
            date='January 26th, 2020'
            name='300 YEARS OF MUSIC!'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='November 3rd, 2019'
            name="THE SCHERZO: THE JOKE'S ON WHO?"
            venue='Montalvo Arts Center'
          />
          <Concert
            date='May 25th, 2019'
            name="SAINT MIKE'S ANNUAL GALA!"
            venue='Computer History Museum'
          />
          <Concert
            date='May 5th, 2019'
            name="SAINT MIKE'S TRIBUTE TO WOMEN"
            venue='Montalvo Arts Center'
          />
          <Concert
            date='May 3rd, 2019'
            name='A STUDY IN GRIEF: BEDRICH SMETANA'
            venue='Stanford University'
          />
          <Concert
            date='March 31st, 2019'
            name='SMETANA UNCOVERED'
            venue='Montalvo Arts Center'
          />
          <Concert date='March 7th, 2019' name="PALO ALTO WOMAN'S CLUB" />
          <Concert
            date='February 10th, 2019'
            name='CHILD PRODIGIES!'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='November 11th, 2018'
            name='WARNING: MAY CAUSE MOOD SWINGS'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='September 22nd, 2018'
            name='CHILD PRODIGIES!'
            venue='Menlo-Atherton Center for the Performing Arts'
          />
          <Concert
            date='June 15th, 2018'
            name='SAINT MIKE JOINS THE PALO ALTO CHAMBER ORCHESTRA'
            venue='Cubberly Theater'
          />
          <Concert
            date='May 6th, 2018'
            name='THE MUSIC OF FELIX MENDELSSOHN'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='April 14th, 2018'
            name=' APPREHENDING MENDELSSOHN'
            venue='Stanford University'
          />
          <Concert
            date='March 18th, 2018'
            name='300 YEARS OF MUSIC!'
            venue='Montalvo Arts Center'
          />
          <Concert date='March 17th, 2018' name='Channing House' />
          <Concert
            date='February 11th, 2018'
            name='THE MUSIC OF LOVE'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='January 13th, 2018'
            name="SAINT MIKE'S ANNUAL GALA!"
            venue='Menlo-Atherton Center for the Performing Arts'
          />
          <Concert
            date='November 5th, 2017'
            name='ROMANTICISM IN MUSIC'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='October 6th, 2017'
            name='DELINEATING DVORAK'
            venue='Stanford University'
          />
          <Concert
            date='September 8th, 2017'
            name='HELP WANTED: VIRTUOSO VIOLINIST'
            venue='Menlo-Atherton Center for the Performing Arts'
          />
          <Concert
            date='May 21st, 2017'
            name='DELINEATING DVORAK'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='April 30th, 2017'
            name='MUSIC OF THE AMERICAS'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='March 12th, 2017'
            name='250 YEARS OF TRIO MUSIC'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='March 4th, 2017'
            name="SAINT MIKE'S 10th ANNIVERSARY GALA!"
            venue='Fox Theater'
          />
          <Concert
            date='January 21st, 2017'
            name='SAINT MIKE TEAMS UP WITH THE PENINSULA SYMPHONY!'
            venue='Heritage Theater'
          />
          <Concert
            date='January 20th, 2017'
            name='SAINT MIKE TEAMS UP WITH THE PENINSULA SYMPHONY!'
            venue='Fox Theater'
          />
          <Concert
            date='November 13th, 2016'
            name='DISSECTING BEETHOVEN'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='September 17th, 2016'
            name='DELINEATING BRAHMS'
            venue='Stanford University'
          />
          <Concert
            date='May 15th, 2016'
            name='SPRING FLING'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='April 17th, 2016'
            name='DELINEATING BRAHMS'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='March 6th, 2016'
            name='AROUND THE WORLD IN 80 MINUTES!'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='February 25th, 2016'
            name='Saratoga Foothill Club'
            venue='20399 Park Place'
          />
          <Concert
            date='January 10th, 2016'
            name='250 YEARS OF TRIO MUSIC'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='January 8th, 2016'
            name="SAINT MIKE'S ANNIVERSARY GALA"
            venue='Mountain View Center for the Performing Arts'
          />
          <Concert
            date='November 15th, 2015'
            name='PURELY CLASSICAL'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='September 10th, 2015'
            name='DIAGNOSING SCHUMANN'
            venue='Concerts at the Presidio'
          />
          <Concert
            date='September 9th, 2015'
            name='DIAGNOSING SCHUMANN'
            venue='Concerts at the Presidio'
          />
          <Concert
            date='June 18th, 2015'
            name='BING AUDITORIUM'
            venue='Stanford University'
          />
          <Concert
            date='May 31st, 2015'
            name="THEY'RE NOT DEAD YET"
            venue='Montalvo Arts Center'
          />
          <Concert
            date='May 8th, 2015'
            name='DIAGNOSING SCHUMANN'
            venue='Stanford University'
          />
          <Concert
            date='April 12th, 2015'
            name='SAINT MIKE +2'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='March 26th, 2015'
            name='Saratoga Foothill Club'
            venue='20399 Park Place'
          />
          <Concert
            date='March 1st, 2015'
            name='WARNING: MAY CAUSE MOOD SWINGS'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='January 30th, 2015'
            name="SAINT MIKE'S ANNUAL GALA!"
            venue='Fox Theater'
          />
          <Concert
            date='January 18th, 2015'
            name='A ROMP THROUGH THE CENTURIES'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='November 22nd, 2014'
            name='THOMAS JEFFERSON JOINS THE SAINT MICHAEL TRIO!'
            venue='Town Hall Seattle'
          />
          <Concert
            date='November 21st, 2014'
            name='HARBOR HISTORY MUSEUM BENEFIT'
            venue='Harbor History Museum'
          />
          <Concert
            date='November 16th, 2014'
            name='DECONSTRUCTING MOZART'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='October 3rd, 2014'
            name="WHAT'S THE BIG DEAL ABOUT MOZART?"
            venue='Menlo-Atheron Center for the Performing Arts'
          />
          <Concert
            date='September 19th, 2014'
            name='THE SONATA THEN AND NOW'
            venue='Marines Memorial Theater'
          />
          <Concert
            date='June 7th, 2014'
            name='SAINT MIKE IN CONCERT WITH THE NOVA VISTA SYMPHONY'
            venue='West Valley College Theater'
          />
          <Concert
            date='April 30th, 2014'
            name='SANTA CLARA UNIVERSITY'
            venue='Music Recital Hall'
          />
          <Concert
            date='April 11th, 2014'
            name='DELINEATING BEETHOVEN'
            venue='STANFORD UNIVERSITY'
          />
          <Concert
            date='April 6th, 2014'
            name='HAYDN ON TRIAL!'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='March 23rd, 2014'
            name='VIVE LA FRANCE!'
            venue='Montalvo Arts Center'
          />
          <Concert date='March 12th, 2014' name='Channing House' />
          <Concert
            date='February 9th, 2014'
            name='DELINEATING BEETHOVEN'
            venue='Montalvo Arts Center'
          />
          <Concert date='January 31st, 2014' name='The Sequoias' />
          <Concert
            date='January 24th, 2014'
            name="SAINT MIKE'S ANNUAL GALA!"
            venue='Fox Theater'
          />
          <Concert
            date='November 17th, 2013'
            name='THE SONATA, THEN AND NOW: HAYDN & SCHOENFIELD'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='November 13th, 2013'
            name='Saratoga Foothill Club'
            venue='20399 Park Place'
          />
          <Concert
            date='November 11th, 2013'
            name='San Francisco Symphony Silicon Valley League'
            venue='Quadrus'
          />
          <Concert
            date='October 26th, 2013'
            name='Assembly Hall'
            venue='50 East North Temple Street'
          />
          <Concert
            date='October 25th, 2013'
            name='Brigham Young University'
            venue='Harris Fine Arts Center'
          />
          <Concert
            date='October 25th, 2013'
            name='Utah Valley University'
            venue='Music Building, GT 507'
          />
          <Concert
            date='October 24th, 2013'
            name='Utah Valley University'
            venue='Science Building Auditorium'
          />
          <Concert
            date='October 4th, 2013'
            name="EUROPE'S MASTER IMPRESSIONIST: THE GENIUS OF CLAUDE DEBUSSY"
            venue='Stanford University'
          />
          <Concert
            date='October 1st, 2013'
            name='Live Radio: The Music Treasury with Dr. Gary Lemco'
            venue='KZSU FM 90.1'
          />
          <Concert
            date='September 21st, 2013'
            name='Cafe Stritch'
            venue='Cafe Stritch'
          />
          <Concert
            date='June 2nd, 2013'
            name='The Steinway Society'
            venue='Stanford University'
          />
          <Concert
            date='May 24th, 2013'
            name='HAYDN ON TRIAL!'
            venue='Stanford University'
          />
          <Concert
            date='May 5th, 2013'
            name='Notre Dame de Namur University'
            venue='Taube Center'
          />
          <Concert
            date='April 20th, 2013'
            name='Bismarck Symphony'
            venue='Belle Mehus City Auditorium'
          />
          <Concert
            date='March 24th, 2013'
            name='Master Impressionist: Claude Debussy'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='February 12th, 2013'
            name='Bing Nursery School'
            venue='Stanford University'
          />
          <Concert
            date='February 10th, 2013'
            name='The Music of Love'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='January 27th, 2013'
            name='Benefit concert'
            venue='Temple Beth Am'
          />
          <Concert
            date='January 20th, 2013'
            name='Fremont Symphony Orchestra Benefit Performance'
            venue='First United Methodist Church'
          />
          <Concert
            date='January 5th, 2013'
            name="SAINT MIKE'S ANNUAL GALA!"
            venue='Mountain View Center for the Performing Arts'
          />
          <Concert date='December 9th, 2012' name='Arden Wood Auditorium' />
          <Concert date='November 14th, 2012' name='The Hamilton' />
          <Concert
            date='November 4th, 2012'
            name='Notre Dame de Namur University'
            venue='Taube Center'
          />
          <Concert
            date='October 26th, 2012'
            name='MENDELSSOHN EXPLAINED'
            venue='Stanford University'
          />
          <Concert date='October 6th, 2012' name='Stonebrook Court' />
          <Concert
            date='September 19th, 2012'
            name='Saratoga Foothill Club'
            venue='20399 Park Place'
          />
          <Concert
            date='July 5th, 2012'
            name='Jane Lathrop Stanford Middle School'
            venue='480 East Meadow Drive'
          />
          <Concert
            date='June 1st, 2012'
            name="EUROPE'S MASTER IMPRESSIONIST: THE GENIUS OF CLAUDE DEBUSSY"
            venue='Menlo College'
          />
          <Concert date='April 27th, 2012' name='The Sequoias' />
          <Concert
            date='April 14th, 2012'
            name='World Premiere: “The Runaway Bunny” Violin Concerto'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='March 20th, 2012'
            name='Oshman Family Jewish Community Center'
          />
          <Concert
            date='March 18th, 2012'
            name='Ralston Mansion'
            venue='Notre Dame de Namur University'
          />
          <Concert date='March 7th, 2012' name='Channing House' />
          <Concert
            date='February 26th, 2012'
            name="It's Complicated: Brahms & Schumann"
            venue='Montalvo Arts Center'
          />
          <Concert
            date='January 26th, 2012'
            name='Saratoga Foothill Club'
            venue='20399 Park Place'
          />
          <Concert
            date='January 7th, 2012'
            name='FIFTH ANNIVERSARY GALA!'
            venue='Mountain View Center for the Performing Arts'
          />
          <Concert
            date='December 17th, 2011'
            name='MonolithIC 3D Corporate Party'
            venue='Fairmont Hotel'
          />
          <Concert
            date='December 11th, 2011'
            name='250 Years of Trio Music'
            venue='Montalvo Arts Center'
          />
          <Concert
            date='November 18th, 2011'
            name='“WARNING: MAY CAUSE MOOD SWINGS” -- CD Launch Celebration!'
            venue="Saint Mark's Episcopal Church"
          />
          <Concert
            date='November 6th, 2011'
            name='Kohl Mansion'
            venue='2750 Adeline Drive'
          />
          <Concert
            date='October 30th, 2011'
            name='HAYDN ON TRIAL!'
            venue='Ralston Mansion, at Notre Dame de Namur University'
          />
          <Concert
            date='September 16th, 2011'
            name='WARNING: MAY CAUSE MOOD SWINGS'
            venue='Florence Moore Auditorium at Menlo College'
          />
          <Concert
            date='July 22nd, 2011'
            name='Stanford University Medical Center'
            venue='Bing Concert Series'
          />
          <Concert
            date='July 11th, 2011'
            name='Stanford University: Triple Helix International Conference'
            venue='McCaw Hall, Arrillaga Alumni Center'
          />
          <Concert
            date='June 3rd, 2011'
            name='Haydn on Trial - Special “Informance”'
            venue='Menlo College'
          />
          <Concert date='May 27th, 2011' name='The Sequoias' />
          <Concert
            date='May 8th, 2011'
            name="Special Mother's Day Concert"
            venue='Montalvo Arts Center'
          />
          <Concert
            date='May 6th, 2011'
            name='Menlo College'
            venue='Stanford Hospital atrium'
          />
          <Concert
            date='March 2nd, 2011'
            name='Stanford University'
            venue='Bing Concert Series (Atrium, Stanford Medical Center)'
          />
          <Concert
            date='February 26th, 2011'
            name='Ornstein Series'
            venue='Ornstein Residence, Woodside'
          />
          <Concert
            date='February 18th, 2011'
            name='Thomas Jefferson Joins The Saint Michael Trio'
            venue='Ralston Mansion, Notre Dame de Namur University'
          />
          <Concert
            date='January 30th, 2011'
            name='Ralston Mansion, Notre Dame De Namur University'
            venue='1500 Ralston Avenue, Belmont, California'
          />
          <Concert
            date='January 25th, 2011'
            name='Saratoga Foothill Club (Saratoga, California)'
          />
          <Concert
            date='December 5th, 2010'
            name="President's Mansion, Menlo College"
            venue='Annual Trustees Holiday Reception'
          />
          <Concert
            date='November 24th, 2010'
            name='Stanford University'
            venue='Stanford Medical Center'
          />
          <Concert
            date='November 19th, 2010'
            name='Menlo College'
            venue='1000 El Camino Real, Atherton, California'
          />
          <Concert
            date='November 14th, 2010'
            name='Ralston Mansion, Notre Dame de Namur University'
            venue='1500 Ralson Avenue, Belmont, Caifornia'
          />
          <Concert
            date='November 10th, 2010'
            name='Los Gatos Meadows'
            venue='100 Wood Road, Los Gatos, California'
          />
          <Concert
            date='October 17th, 2010'
            name='Montalvo Arts Center'
            venue='15400 Montalvo Road, Saratoga'
          />
          <Concert
            date='October 1st, 2010'
            name='Menlo Park Presbyterian Church'
            venue='950 Santa Cruz Avenue, Menlo Park'
          />
          <Concert
            date='September 28th, 2010'
            name='San Jose State University'
          />
          <Concert
            date='September 10th, 2010'
            name='"Brahms & Schumann: It&apos;s Complicated" (Menlo College)'
            venue='1000 El Camino Real, Atherton, California'
          />
          <Concert
            date='June 25th, 2010'
            name='Bing Concert Series (violin & piano only)'
            venue='Stanford University Medical Center, Atrium'
          />
          <Concert
            date='June 11th, 2010'
            name='250 Years of Trio Music (Moore Auditorium, Menlo College)'
            venue='1000 El Camino Real, Atherton, California'
          />
          <Concert
            date='May 28th, 2010'
            name='Concerts at Saint Michael Drive'
            venue='Palo Alto, California'
          />
          <Concert
            date='March 28th, 2010'
            name='Temple Beth Am: Mendelssohn Explained'
            venue='Temple Beth Am'
          />
          <Concert
            date='March 11th, 2010'
            name='Channing House (Palo Alto, California)'
            venue='850 Webster Street, Palo Alto'
          />
          <Concert
            date='February 26th, 2010'
            name='Assembly Hall (Salt Lake City, Utah)'
            venue='Temple Square, Downtown Salt Lake City'
          />
          <Concert
            date='February 20th, 2010'
            name='Brigham Young University (Provo, Utah)'
            venue='Hinckley Alumni Center Auditorium'
          />
          <Concert
            date='January 27th, 2010'
            name='Beechwood School (Menlo Park, California)'
          />
          <Concert
            date='January 24th, 2010'
            name='Ralston Mansion, Notre Dame de Namur University (Belmont, California)'
            venue='1500 Ralston Avenue, Belmont'
          />
          <Concert
            date='January 16th, 2010'
            name='Ornstein Series'
            venue='Ornstein Residence, Woodside'
          />
          <Concert
            date='November 20th, 2009'
            name='Mendelssohn Bicentennial Lecture-Concert, Part 2 (Menlo College, Atherton, California)'
            venue='Moore Auditorium at Menlo College, 1000 El Camino Real, Atherton'
          />
          <Concert
            date='November 7th, 2009'
            name='Mendelssohn Bicentennial Lecture-Concert Part 1 (encore performance)'
            venue='LDS Church, 190 Jordan Avenue, Los Altos'
          />
          <Concert
            date='October 24th, 2009'
            name='Community School for Music & Art'
            venue='Gala Fundraiser for CSMA'
          />
          <Concert
            date='October 11th, 2009'
            name="Saint Mary's Cathedral (San Francisco, California)"
            venue='1111 Gough Street, San Francisco, California'
          />
          <Concert
            date='October 4th, 2009'
            name='Montalvo Arts Center (Saratoga, California)'
            venue='15400 Montalvo Road, Saratoga'
          />
          <Concert
            date='September 28th, 2009'
            name='Flint Center at De Anza College'
            venue='21250 Stevens Creek Blvd, Cupertino, CA 95014'
          />
          <Concert
            date='September 19th, 2009'
            name='Tateuchi Auditorium (Mountain View, California)'
            venue='Community School of Music & Art, 230 San Antonio Circle, Mountain View'
          />
          <Concert
            date='September 12th, 2009'
            name='Mendelssohn Bicentennial Concert, Part 1 (Menlo College, Atherton, California)'
            venue='Moore Auditorium at Menlo College, 1000 El Camino Real'
          />
          <Concert
            date='September 2nd, 2009'
            name='Stanford University'
            venue='Stanford Medical Center, Atrium (Bing Concert Series)'
          />
          <Concert
            date='July 1st, 2009'
            name='Jordan Middle School'
            venue='750 North California Avenue, Palo Alto, California'
          />
          <Concert
            date='June 12th, 2009'
            name='SAY HELLO TO SUMMER! Pops and Jazz Night with the Saint Michael Trio'
            venue='Moore Auditorium at Menlo College, 1000 El Camino Real, Atherton'
          />
          <Concert
            date='May 7th, 2009'
            name='The Church of Jesus Christ of Latter-day Saints'
            venue='1105 Valparaiso Avenue, Menlo Park California'
          />
          <Concert
            date='April 17th, 2009'
            name='Concerts at Saint Michael Drive'
            venue='Palo Alto, California'
          />
          <Concert
            date='April 1st, 2009'
            name='Bing Concert Series (violin & piano only)'
            venue='Stanford University Medical Center, Atrium'
          />
          <Concert
            date='March 12th, 2009'
            name='Channing House'
            venue='850 Webster Street, Palo Alto'
          />
          <Concert
            date='February 19th, 2009'
            name='Bing Nursery School, Stanford University'
            venue='850 Escondido Road, Stanford California'
          />
          <Concert
            date='February 13th, 2009'
            name='Golden Gate Auditorium, 7:30 pm'
            venue='Concerts at the Presidio, by Pacific Union Presents'
          />
          <Concert
            date='February 12th, 2009'
            name='Golden Gate Auditorium'
            venue='Concerts at the Presidio, by Pacific Union Presents'
          />
          <Concert
            date='January 18th, 2009'
            name="Saint Mary's Cathedral"
            venue="Saint Mary's Cathedral, 3:30 pm"
          />
          <Concert
            date='January 13th, 2009'
            name='Concerts at Los Gatos Meadows'
          />
          <Concert
            date='December 14th, 2008'
            name="Menlo College, President's Reception"
            venue="President's Residence"
          />
          <Concert
            date='November 21st, 2008'
            name='Moore Concert Hall, Menlo College'
            venue='1000 El Camino Real'
          />
          <Concert
            date='November 16th, 2008'
            name='The Steinway Society, Community Concert Series'
            venue='Le Petit Trianon'
          />
          <Concert
            date='October 19th, 2008'
            name='Dinner & Wine Tasting, Fundraiser for Elementary School Music Education'
            venue='Sponsored by The Steinway Society and Beshoff Motors'
          />
          <Concert
            date='October 15th, 2008'
            name='Tateuchi Concert Hall, Community School of Music and Arts'
            venue='230 San Antonio Circle'
          />
          <Concert
            date='October 4th, 2008'
            name='Peninsula Stroke Association 10th Anniversary Gala'
            venue='Tateuchi Concert Hall, Community School of Music & Art'
          />
          <Concert
            date='September 26th, 2008'
            name='Bing Concert Series '
            venue='Stanford University Medical Center, Atrium'
          />
          <Concert
            date='August 28th, 2008'
            name='Saint Michael Concerts '
            venue='Palo Alto, California'
          />
          <Concert
            date='August 12th, 2008'
            name='Avenidas Concert Afternoon Series'
            venue='450 Bryant Street'
          />
          <Concert
            date='June 11th, 2008'
            name='Concerts at Los Gatos Meadows'
            venue='Los Gatos Meadows'
          />
          <Concert
            date='May 14th, 2008'
            name='Bing Concert Series'
            venue='Stanford University Medical Center, Atrium'
          />
          <Concert
            date='March 16th, 2008'
            name="St. Mary's Cathedral"
            venue='1111 Gough Street'
          />
          <Concert
            date='February 8th, 2008'
            name='Bing Concert Series'
            venue='Stanford University Medical Center, Atrium'
          />
          <Concert
            date='January 27th, 2008'
            name='Soiree Musicale'
            venue='The Wheatley Residence'
          />
          <Concert
            date='January 26th, 2008'
            name='Carmel Presbyterian Church'
            venue='Corner of Ocean & Junipero Avenues'
          />
          <Concert
            date='January 18th, 2008'
            name='Conference: The Shape of Things to Come'
            venue='Stanford University'
          />
          <Concert
            date='December 15th, 2007'
            name='City of Palo Alto Elected Officials and Senior Staff, Holiday Party'
            venue='Kishimoto Residence'
          />
          <Concert
            date='November 9th, 2007'
            name='Bing Concert Series'
            venue='Stanford University Hospital, Hospital Atrium'
          />
          <Concert
            date='October 31st, 2007'
            name='Annual Halloween Concert'
            venue="Saint Mark's Cathedral"
          />
          <Concert
            date='October 13th, 2007'
            name='Woodlake Condominiums Concert Series'
            venue='816 North Delaware'
          />
          <Concert
            date='October 12th, 2007'
            name='SOIREE MUSICALE'
            venue='The Lane Residence, 648 Distel Drive'
          />
          <Concert
            date='September 30th, 2007'
            name='Sherman Clay Recital Hall'
            venue='2030 Duane Avenue'
          />
          <Concert
            date='August 12th, 2007'
            name='Saint Michael Concerts'
            venue='Palo Alto, California'
          />
          <Concert
            date='July 13th, 2007'
            name='Bing Series, Stanford Medical Center, Atrium'
            venue='Stanford, California'
          />
          <Concert
            date='July 11th, 2007'
            name='The Steinway Society, Board of Directors Meeting (open to the public)'
            venue='Le Petit Trianon'
          />
          <Concert
            date='April 11th, 2007'
            name='Saint Michael Concerts'
            venue='Palo Alto, California'
          />
        </ul>
      </main>
      <style jsx>{`
        ul {
          columns: 2;
          column-gap: 48px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        header {
          border: 1px solid var(--accents-2);
          background: var(--accents-1);
          color: var(--accents-5);
          margin: 0 0 1.5rem;
          padding: 1.5rem;
        }
      `}</style>
    </Page>
  );
}
