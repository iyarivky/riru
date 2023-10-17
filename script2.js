import fs from 'fs';
import pkg from 'brotli-unicode';
const { compress, decompress } = pkg

fs.readFile('contoh.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  let input = Buffer.from(data,"utf-8")

  compress(input).then(compressed => {
      console.log(compressed)

      decompress(compressed).then(decompressed => {
          let output = new TextDecoder("utf-8").decode(decompressed)
          console.log(output) // Ini akan mencetak isi dari 'file.txt'
      })
  })
})
