import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const cwd = process.cwd()
const outDir = path.join(cwd, 'src', 'assets')

const assets = [
  {
    file: 'job-standard.webp',
    kicker: 'EXPERIENCE / STANDARD FORCE',
    title: 'Enterprise Systems',
    subtitle: ['AI documents, ETL warehouse,', 'construction management'],
    modules: ['AI Document Assistant', '4x MySQL ETL', 'QR Logistics', 'Budget Alerts'],
    accent: '#12d8a0'
  },
  {
    file: 'job-ltu.webp',
    kicker: 'EXPERIENCE / LTU',
    title: ['Supply Chain', 'Dashboard'],
    subtitle: ['ReactJS, NodeJS, MySQL,', 'Laravel reporting'],
    modules: ['Internal Teams', 'Nivo Charts', 'Wijmo Reports', 'SSH Tunnel'],
    accent: '#48b8ff'
  },
  {
    file: 'job-urban.webp',
    kicker: 'EXPERIENCE / URBAN + FYNII',
    title: 'Sales + Tutor Matching',
    subtitle: ['ReactJS workflows for 200+ users', 'and 500+ pairings'],
    modules: ['Sales UI', 'EduTech Matching', 'Responsive React', 'User Workflows'],
    accent: '#ffc766'
  },
  {
    file: 'project-data.webp',
    kicker: 'PROJECT / AI + DASHBOARD',
    title: 'Document Intelligence',
    subtitle: 'Gemini Vision, Tesseract OCR, pgvector, LangChain',
    modules: ['PDF / Office', 'Vector Search', 'SSE Stream', 'Redis Cache'],
    accent: '#29d4ec'
  },
  {
    file: 'project-ai-document.webp',
    kicker: 'PROJECT / AI DOCUMENT ASSISTANT',
    title: ['AI Document', 'Assistant'],
    subtitle: ['PDF, Office, image, Excel', 'and audio knowledge search'],
    modules: ['Gemini Vision', 'Tesseract OCR', 'pgvector', 'SSE Output'],
    accent: '#29d4ec'
  },
  {
    file: 'project-etl-pipeline.webp',
    kicker: 'PROJECT / DISTRIBUTED ETL',
    title: 'ETL Pipeline',
    subtitle: ['4 remote MySQL databases', 'synchronized into a warehouse'],
    modules: ['SSH2 Tunnel', 'Cron Sync', 'Central MySQL', 'Docker'],
    accent: '#5fe1a8'
  },
  {
    file: 'project-construction-management.webp',
    kicker: 'PROJECT / CONSTRUCTION SYSTEM',
    title: ['Construction', 'Management'],
    subtitle: ['Budget alerts, financial tracking,', 'compliance monitoring'],
    modules: ['5 Clients', 'Budget Alerts', 'Compliance', 'AlmaLinux'],
    accent: '#ffc766'
  },
  {
    file: 'project-qr-logistics.webp',
    kicker: 'PROJECT / DASHBOARD + QR',
    title: ['QR Logistics', 'Dashboard'],
    subtitle: ['Next.js, Redis cache, Excel export', 'and tracking logs'],
    modules: ['Next.js', 'Redis', 'QR Tracking', 'Excel Export'],
    accent: '#48b8ff'
  },
  {
    file: 'project-supply-chain.webp',
    kicker: 'PROJECT / SUPPLY CHAIN',
    title: ['Supply Chain', 'Dashboard'],
    subtitle: ['ReactJS, NodeJS, MySQL,', 'Nivo and Wijmo reporting'],
    modules: ['3 Teams', 'ReactJS', 'MySQL', 'Laravel'],
    accent: '#12d8a0'
  },
  {
    file: 'project-sales-matching.webp',
    kicker: 'PROJECT / SALES + EDUTECH',
    title: ['Sales + Tutor', 'Matching'],
    subtitle: ['Responsive workflows for users', 'and student pairings'],
    modules: ['200+ Users', '500+ Pairings', 'ReactJS', 'EduTech'],
    accent: '#ff9e64'
  },
  {
    file: 'project-urban.webp',
    kicker: 'PROJECT / DATA + OPERATIONS',
    title: 'Distributed ETL Platform',
    subtitle: 'SSH2 tunnel, cron sync, Docker, AlmaLinux',
    modules: ['Remote MySQL', 'Warehouse', 'Compliance', 'QR Tracking'],
    accent: '#5fe1a8'
  },
  {
    file: 'project-classroom.webp',
    kicker: 'PROJECT / HACKFEST TOP 5',
    title: ['Online', 'Classroom'],
    subtitle: ['React, Node.js, WebRTC,', 'Socket.io, Python ML'],
    modules: ['Video Class', 'Attendance', 'Transcription', 'Attention ML'],
    accent: '#a283ff'
  },
  {
    file: 'project-classroom-platform.webp',
    kicker: 'PROJECT / HACKFEST TOP 5',
    title: ['Online', 'Classroom'],
    subtitle: 'React, Node.js, WebRTC, Socket.io, Python ML',
    modules: ['Video Class', 'Attendance', 'Transcription', 'Attention ML'],
    accent: '#a283ff'
  }
]

const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const grid = (width, height) => {
  const lines = []
  for (let x = 0; x <= width; x += 42) lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${height}" />`)
  for (let y = 0; y <= height; y += 42) lines.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}" />`)
  return lines.join('')
}

const chip = (text, x, y, accent) => `
  <rect x="${x}" y="${y}" width="${Math.max(104, text.length * 8 + 26)}" height="28" rx="7" fill="rgba(3,12,23,.72)" stroke="${accent}" stroke-opacity=".28"/>
  <text x="${x + 13}" y="${y + 18}" class="chip">${escapeXml(text)}</text>
`

const render = ({ kicker, title, subtitle, modules, accent }) => {
  const width = 960
  const height = 560
  const titleLines = Array.isArray(title) ? title : [title]
  const subtitleLines = Array.isArray(subtitle) ? subtitle : [subtitle]
  const subtitleY = titleLines.length > 1 ? 292 : 234
  const chipY = titleLines.length > 1 ? 368 : 318 + Math.max(0, subtitleLines.length - 1) * 18
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="80%" cy="16%" r="72%">
      <stop stop-color="${accent}" stop-opacity=".23"/>
      <stop offset="1" stop-color="#050913" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="line" x2="1">
      <stop stop-color="${accent}"/>
      <stop offset="1" stop-color="#48b8ff"/>
    </linearGradient>
    <style>
      .grid { stroke: #48b8ff; stroke-opacity: .07; stroke-width: 1; }
      .kicker { font: 700 18px "Cascadia Code", Consolas, monospace; letter-spacing: 3px; fill: ${accent}; }
      .title { font: 800 58px "Segoe UI", Arial, sans-serif; letter-spacing: -2px; fill: #e9fff8; }
      .subtitle { font: 500 22px "Segoe UI", Arial, sans-serif; fill: rgba(218,239,237,.76); }
      .label { font: 700 15px "Cascadia Code", Consolas, monospace; letter-spacing: 1px; fill: #e9fff8; }
      .chip { font: 700 13px "Cascadia Code", Consolas, monospace; letter-spacing: .8px; fill: ${accent}; }
      .tiny { font: 700 12px "Cascadia Code", Consolas, monospace; fill: #48b8ff; }
    </style>
  </defs>
  <rect width="${width}" height="${height}" fill="#050913"/>
  <g class="grid">${grid(width, height)}</g>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  <rect x="28" y="28" width="904" height="504" rx="24" fill="rgba(4,12,23,.66)" stroke="#16394b"/>
  <rect x="28" y="28" width="904" height="4" fill="url(#line)"/>
  <circle cx="58" cy="72" r="6" fill="${accent}"/>
  <text x="76" y="78" class="kicker">${escapeXml(kicker)}</text>
  <line x1="76" y1="104" x2="430" y2="104" stroke="#16394b"/>
  ${titleLines.map((line, index) => `<text x="76" y="${178 + index * 62}" class="title">${escapeXml(line)}</text>`).join('')}
  ${subtitleLines.map((line, index) => `<text x="78" y="${subtitleY + index * 30}" class="subtitle">${escapeXml(line)}</text>`).join('')}

  <g transform="translate(612 122)">
    <rect x="0" y="0" width="246" height="268" rx="20" fill="rgba(3,12,23,.72)" stroke="${accent}" stroke-opacity=".45"/>
    <circle cx="123" cy="134" r="78" fill="none" stroke="${accent}" stroke-opacity=".18" stroke-width="2"/>
    <circle cx="123" cy="134" r="116" fill="none" stroke="#48b8ff" stroke-opacity=".14" stroke-width="2"/>
    <path d="M123 26 V92 M123 176 V242 M15 134 H81 M165 134 H231" stroke="${accent}" stroke-opacity=".5" stroke-width="2"/>
    <rect x="76" y="88" width="94" height="92" rx="16" fill="rgba(18,216,160,.11)" stroke="${accent}" stroke-opacity=".5"/>
    <text x="92" y="122" class="tiny">CORE</text>
    <text x="92" y="148" class="label">SYS</text>
  </g>

  ${chip(modules[0], 76, chipY, accent)}
  ${chip(modules[1], 76, chipY + 39, accent)}
  ${chip(modules[2], 76, chipY + 78, accent)}
  ${chip(modules[3], 76, chipY + 117, accent)}
  <text x="614" y="444" class="tiny">PORTFOLIO.SHIVANKAR / CONTEXT VISUAL</text>
</svg>`
}

await fs.mkdir(outDir, { recursive: true })

for (const asset of assets) {
  const svg = render(asset)
  const target = path.join(outDir, asset.file)
  await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile(target)
  console.log(`Rendered ${path.relative(cwd, target)}`)
}
