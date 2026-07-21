import { writeFile, readdir, stat, unlink, rename } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve('src/assets/image')

async function sizeMb(filePath) {
  const { size } = await stat(filePath)
  return size / (1024 * 1024)
}

async function writeViaTemp(input, transform) {
  const tmp = `${input}.tmp-opt`
  const buffer = await transform(input)
  await writeFile(tmp, buffer)
  await unlink(input)
  await rename(tmp, input)
}

async function toJpegFile(input, output, width, quality = 78) {
  const buffer = await sharp(input)
    .rotate()
    .resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toBuffer()
  await writeFile(output, buffer)
}

async function compressJpegInPlace(input, width, quality = 78) {
  await writeViaTemp(input, async (file) =>
    sharp(file)
      .rotate()
      .resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer(),
  )
}

async function compressPngInPlace(input, width, quality = 80) {
  await writeViaTemp(input, async (file) =>
    sharp(file)
      .rotate()
      .resize({ width, height: width, fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true, quality })
      .toBuffer(),
  )
}

async function compressDir(dir, exts, width, quality) {
  const abs = path.join(root, dir)
  const files = (await readdir(abs)).filter((f) => exts.test(f))
  for (const file of files) {
    const input = path.join(abs, file)
    const before = await sizeMb(input)
    if (/\.png$/i.test(file)) {
      const output = input.replace(/\.png$/i, '.jpg')
      await toJpegFile(input, output, width, quality)
      const after = await sizeMb(output)
      await unlink(input)
      console.log(`${dir}/${file}: ${before.toFixed(2)}MB → ${path.basename(output)} ${after.toFixed(2)}MB`)
    } else {
      await compressJpegInPlace(input, width, quality)
      const after = await sizeMb(input)
      console.log(`${dir}/${file}: ${before.toFixed(2)}MB → ${after.toFixed(2)}MB`)
    }
  }
}

async function main() {
  await compressDir('aulascapoeirinha', /\.(jpe?g)$/i, 1400, 78)
  await compressDir('golpes', /\.png$/i, 1000, 80)
  await compressDir('eventos', /\.(png|jpe?g)$/i, 1400, 78)

  for (const file of ['capo.png', 'capoeira nago.png', 'mestrepique.png']) {
    const input = path.join(root, file)
    try {
      const before = await sizeMb(input)
      await compressPngInPlace(input, 800, 80)
      const after = await sizeMb(input)
      console.log(`${file}: ${before.toFixed(2)}MB → ${after.toFixed(2)}MB`)
    } catch (err) {
      console.warn(`skip ${file}:`, err.message)
    }
  }

  for (const rel of [
    'professores/professoresjuntos.jpg',
    'parceiros/lambert.png',
    'parceiros/Dbroa-logo-1.png',
  ]) {
    const input = path.join(root, rel)
    try {
      const before = await sizeMb(input)
      if (/\.png$/i.test(rel)) await compressPngInPlace(input, 900, 85)
      else await compressJpegInPlace(input, 1200, 80)
      const after = await sizeMb(input)
      console.log(`${rel}: ${before.toFixed(2)}MB → ${after.toFixed(2)}MB`)
    } catch (err) {
      console.warn(`skip ${rel}:`, err.message)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
