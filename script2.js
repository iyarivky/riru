import fs from 'fs';
import pkg from 'brotli-unicode';
const { compress, decompress } = pkg

fs.readFile('contoh.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  let input = Buffer.from(data,"utf-8")
  let originalSize = input.length;

  compress(input).then(compressed => {
      let compressedSize = compressed.length;
      let compressionRatio = ((originalSize - compressedSize) / originalSize) * 100;
      console.log(`Compression ratio: ${compressionRatio.toFixed(2)}%`);

      decompress(compressed).then(decompressed => {
          let output = new TextDecoder("utf-8").decode(decompressed)
          console.log(output) // Ini akan mencetak isi dari 'file.txt'
      })
  })
})
