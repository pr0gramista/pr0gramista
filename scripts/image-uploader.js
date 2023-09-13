const fg = require('fast-glob')
const jimp = require('jimp')

// TODO: Warning! Incomplete implementation
const main = async () => {
  const files = await fg.async('src/**/*.{png,jpg,jpeg,svg}')

  for (const file of files) {
    const image = await jimp.read(file)

    const originalWidth = image.getWidth()
    const extension = file.split('.').pop()

    await image.quality(85)
    await image.writeAsync(file.replace('.' + extension, '_base.' + extension))

    if (originalWidth > 800) {
      await image.resize(800, jimp.AUTO)
      await image.writeAsync(file.replace('.' + extension, '_800.' + extension))
    }

    if (originalWidth > 400) {
      await image.resize(400, jimp.AUTO)
      await image.writeAsync(file.replace('.' + extension, '_400.' + extension))
    }

    await image.resize(200, jimp.AUTO)
    await image.writeAsync(file.replace('.' + extension, '_200.' + extension))
  }
}

main()
