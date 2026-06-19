import './YouTubeEmbed.css'

type YouTubeEmbedProps = {
  videoId: string
  title?: string
  className?: string
  format?: 'video' | 'shorts'
}

export default function YouTubeEmbed({
  videoId,
  title,
  className = '',
  format = 'video',
}: YouTubeEmbedProps) {
  const formatClass = format === 'shorts' ? 'youtube-embed--shorts' : ''

  return (
    <div className={`youtube-embed ${formatClass} ${className}`.trim()}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title ?? 'YouTube video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
