# COFFEE TIME YEREVAN

Premium cinematic coffee brand website built with:

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- GSAP + ScrollTrigger
- Framer Motion
- Armenian (default) + English + Russian UI

## Setup

1. Install dependencies:

```bash
npm install
```

2. Place the hero video at:

```text
/public/hero.mp4
```

For smoother scroll scrubbing, use an H.264 MP4 with frequent keyframes.
Example FFmpeg command:

```bash
ffmpeg -i hero-source.mp4 -c:v libx264 -preset slow -crf 20 -movflags +faststart -x264-params keyint=15:min-keyint=15:scenecut=0 -an public/hero.mp4
```

3. Start local development:

```bash
npm run dev
```

4. Open:

```text
http://localhost:3000
```

## Production Commands

```bash
npm run lint
npm run build
npm run start
```

## Deploy To Vercel

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. Import that repository in Vercel.
3. Framework preset: `Next.js`.
4. Build command: `npm run build`.
5. Output settings: default for Next.js.
6. Deploy.

No extra environment variables are required for the current static marketing site.
