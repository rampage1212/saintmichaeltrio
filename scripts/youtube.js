// Script that downloads all of the Saint Michael Trio YouTube videos. To run,
// simply change the URLs in the `videos` array and then:
//
// ```commandline
// $ yarn node youtube.js
// ```

const videos = [
  'https://youtu.be/Bkz1iF-Jhy4',
  'https://youtu.be/BzIsP5w5Kho',
  'https://youtu.be/tb0yrF-JxQE',
];
const fs = require('fs');
const ytdl = require('ytdl-core');

if (require.main === module)
  videos.forEach((video) => {
    const filename = `${video.split('/').pop()}.mp4`;
    ytdl(video).pipe(fs.createWriteStream(filename));
  });
