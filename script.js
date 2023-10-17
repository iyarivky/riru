const zlib = require('zlib');
const text = 'Lorem ipsum dolor sit amet';
const buffer = Buffer.from(text, 'utf-8');

// Kompres teks
zlib.gzip(buffer, (err, buffer) => {
  if (!err) {
    let output_kompres = buffer.toString('base64');
    console.log(output_kompres);

    // Dekompres teks
    let buffer2 = Buffer.from(output_kompres, 'base64');
    zlib.gunzip(buffer2, (err, buffer) => {
      if (!err) {
        let output_dekompres = buffer.toString('utf-8');
        console.log(output_dekompres);
      } else {
        console.error('Dekompresi gagal:', err);
      }
    });
  } else {
    console.error('Kompresi gagal:', err);
  }
});
