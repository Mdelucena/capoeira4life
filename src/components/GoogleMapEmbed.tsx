import './GoogleMapEmbed.css'

type GoogleMapEmbedProps = {
  src: string
  title: string
  className?: string
}

export default function GoogleMapEmbed({ src, title, className = '' }: GoogleMapEmbedProps) {
  return (
    <div className={`google-map-embed ${className}`.trim()}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
