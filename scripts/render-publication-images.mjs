import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const cwd = process.cwd()
const photoPath = path.join(cwd, 'src', 'assets', 'profile1.png')
const outputDir = path.join(cwd, 'publication-assets')
const photo = await fs.readFile(photoPath)

const colors = {
  bg: '#050913',
  surface: '#07131f',
  border: '#143448',
  teal: '#12d8a0',
  cyan: '#48b8ff',
  white: '#e9fff8',
  soft: '#94b4b3',
  dim: '#63868d'
}

const variants = [
  {
    name: 'portfolio-publication-landscape-1200x630',
    width: 1200,
    height: 630,
    titleSize: 66,
    subSize: 19,
    photo: { x: 872, y: 72, width: 252, height: 486 },
    content: { x: 62, y: 58, width: 760 },
    projectY: 444,
    projects: [
      'AI DOCUMENT ASSISTANT',
      'CONSTRUCTION MANAGEMENT SYSTEM',
      'ETL PIPELINE'
    ]
  },
  {
    name: 'portfolio-publication-square-1080x1080',
    width: 1080,
    height: 1080,
    titleSize: 68,
    subSize: 19,
    photo: { x: 630, y: 350, width: 342, height: 650 },
    content: { x: 60, y: 62, width: 880 },
    projectY: 690,
    projects: [
      'AI DOCUMENT ASSISTANT',
      'CONSTRUCTION MANAGEMENT',
      'QR LOGISTICS DASHBOARD'
    ]
  },
  {
    name: 'portfolio-publication-feed-1080x1350',
    width: 1080,
    height: 1350,
    titleSize: 72,
    subSize: 19,
    photo: { x: 584, y: 558, width: 386, height: 720 },
    content: { x: 62, y: 64, width: 900 },
    projectY: 792,
    projects: [
      'AI DOCUMENT ASSISTANT',
      'CONSTRUCTION MANAGEMENT',
      'QR LOGISTICS DASHBOARD'
    ]
  },
  {
    name: 'portfolio-publication-story-1080x1920',
    width: 1080,
    height: 1920,
    titleSize: 78,
    subSize: 21,
    photo: { x: 176, y: 1052, width: 728, height: 746 },
    content: { x: 66, y: 88, width: 940 },
    projectY: 676,
    projects: [
      'AI DOCUMENT ASSISTANT',
      'CONSTRUCTION MANAGEMENT SYSTEM',
      'DISTRIBUTED ETL PIPELINE'
    ]
  }
]

const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const grid = (width, height) => {
  const lines = []
  for (let x = 0; x <= width; x += 52) {
    lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${height}" />`)
  }
  for (let y = 0; y <= height; y += 52) {
    lines.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}" />`)
  }
  return lines.join('')
}

const badge = (text, x, y, width) => `
  <rect x="${x}" y="${y}" width="${width}" height="36" rx="8" class="badge" />
  <text x="${x + 14}" y="${y + 23}" class="badgeText">${escapeXml(text)}</text>
`

const productCard = (text, x, y, width, index) => `
  <rect x="${x}" y="${y}" width="${width}" height="56" rx="10" class="projectCard" />
  <text x="${x + 15}" y="${y + 21}" class="cardId">0${index + 1}</text>
  <text x="${x + 15}" y="${y + 41}" class="cardText">${escapeXml(text)}</text>
`

const renderSvg = (variant) => {
  const { width, height, photo: image, content, titleSize, subSize, projects, projectY } = variant
  const stackedCards = height >= width
  const chipY = stackedCards ? 477 : 356
  const projectWidth = stackedCards ? Math.min(468, content.width) : 244
  const cardGap = stackedCards ? 68 : 256
  const cardStartX = content.x
  const cards = projects.map((label, index) => {
    const x = stackedCards ? cardStartX : cardStartX + (cardGap * index)
    const y = stackedCards ? projectY + (index * 68) : projectY
    return productCard(label, x, y, projectWidth, index)
  }).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="halo" cx="74%" cy="36%" r="58%">
      <stop stop-color="${colors.teal}" stop-opacity="0.17"/>
      <stop offset="1" stop-color="${colors.bg}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="beam" x2="1" y2="0">
      <stop stop-color="${colors.teal}"/>
      <stop offset="1" stop-color="${colors.cyan}"/>
    </linearGradient>
    <clipPath id="photoClip">
      <rect x="${image.x}" y="${image.y}" width="${image.width}" height="${image.height}" rx="22" />
    </clipPath>
    <style>
      .mono { font-family: "Cascadia Code", Consolas, monospace; }
      .sans { font-family: "Segoe UI", Arial, sans-serif; }
      .grid { stroke: ${colors.cyan}; stroke-opacity: 0.065; stroke-width: 1; }
      .label { font: 700 14px "Cascadia Code", Consolas, monospace; letter-spacing: 2.2px; fill: ${colors.teal}; }
      .title { font: 700 ${titleSize}px "Segoe UI", Arial, sans-serif; letter-spacing: -2px; fill: ${colors.white}; }
      .subtitle { font: 600 ${subSize}px "Cascadia Code", Consolas, monospace; letter-spacing: 2px; fill: ${colors.cyan}; }
      .caption { font: 500 16px "Segoe UI", Arial, sans-serif; fill: ${colors.soft}; }
      .badge { fill: ${colors.surface}; stroke: ${colors.border}; stroke-width: 1; }
      .badgeText { font: 700 13px "Cascadia Code", Consolas, monospace; letter-spacing: 1px; fill: ${colors.teal}; }
      .projectCard { fill: ${colors.surface}; stroke: ${colors.border}; stroke-width: 1; }
      .cardId { font: 700 10px "Cascadia Code", Consolas, monospace; fill: ${colors.cyan}; letter-spacing: 1px; }
      .cardText { font: 600 11px "Cascadia Code", Consolas, monospace; fill: ${colors.white}; letter-spacing: .35px; }
      .photoLabel { font: 700 11px "Cascadia Code", Consolas, monospace; fill: ${colors.teal}; letter-spacing: 1.4px; }
    </style>
  </defs>
  <rect width="${width}" height="${height}" fill="${colors.bg}"/>
  <g class="grid">${grid(width, height)}</g>
  <rect width="${width}" height="${height}" fill="url(#halo)"/>
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="22" fill="none" stroke="${colors.border}"/>
  <rect x="24" y="24" width="${width - 48}" height="3" fill="url(#beam)"/>

  <text x="${content.x}" y="${content.y}" class="label">SHIVANKARPORTFOLIO.NETLIFY.APP // SYSTEMS ONLINE</text>
  <circle cx="${content.x - 18}" cy="${content.y - 5}" r="5" fill="${colors.teal}"/>
  <line x1="${content.x}" y1="${content.y + 23}" x2="${Math.min(width - 54, content.x + 325)}" y2="${content.y + 23}" stroke="${colors.border}"/>
  <text x="${content.x}" y="${content.y + 108}" class="title">SHIVANKAR</text>
  <text x="${content.x}" y="${content.y + 108 + titleSize * 1.03}" class="title">MEHTA</text>
  <text x="${content.x}" y="${content.y + 108 + titleSize * 1.03 + 54}" class="subtitle">SOFTWARE DEVELOPER &amp; SYSTEM ENGINEER</text>
  <text x="${content.x}" y="${content.y + 108 + titleSize * 1.03 + 92}" class="caption">Building production-ready enterprise systems in Japan.</text>

  ${badge('NEXT.JS', content.x, chipY, 103)}
  ${badge('NODEJS', content.x + 115, chipY, 101)}
  ${badge('MYSQL', content.x + 228, chipY, 91)}
  ${badge('RAG + OCR', content.x + 331, chipY, 120)}
  ${cards}

  <rect x="${image.x - 9}" y="${image.y - 9}" width="${image.width + 18}" height="${image.height + 18}" rx="28" fill="${colors.surface}" stroke="${colors.teal}" stroke-opacity="0.62" stroke-width="2"/>
  <rect x="${image.x - 9}" y="${image.y - 9}" width="${image.width + 18}" height="38" rx="28" fill="${colors.surface}" stroke="${colors.teal}" stroke-opacity="0.4"/>
  <circle cx="${image.x + 11}" cy="${image.y + 10}" r="4" fill="${colors.teal}"/>
  <text x="${image.x + 23}" y="${image.y + 14}" class="photoLabel">PROFILE / ORIGINAL PHOTO</text>
  <rect x="${image.x - 9}" y="${image.y + image.height + 14}" width="${image.width + 18}" height="34" rx="8" fill="${colors.surface}" stroke="${colors.border}"/>
  <text x="${image.x + 8}" y="${image.y + image.height + 36}" class="photoLabel">STATUS: READY / JAPAN</text>
</svg>`
}

await fs.mkdir(outputDir, { recursive: true })

for (const variant of variants) {
  const svg = renderSvg(variant)
  const pngPath = path.join(outputDir, `${variant.name}.png`)
  const photoAreaHeight = variant.photo.height - 29
  const originalPhotoPanel = await sharp(photo)
    .resize({
      width: variant.photo.width,
      height: photoAreaHeight,
      fit: 'contain',
      background: colors.surface
    })
    .png()
    .toBuffer()

  await sharp(Buffer.from(svg))
    .composite([
      {
        input: originalPhotoPanel,
        left: variant.photo.x,
        top: variant.photo.y + 29
      }
    ])
    .png()
    .toFile(pngPath)
  console.log(`Rendered ${path.relative(cwd, pngPath)}`)
}
