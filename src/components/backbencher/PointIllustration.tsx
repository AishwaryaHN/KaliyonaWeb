import { useState } from 'react'
import type { IllustrationId } from '../../lib/backbencher/assignIllustrations'
import { IllustrationSvg } from './illustrationSvgs'

type Props = {
  illustrationId: IllustrationId
  title: string
  imageUrl?: string
  className?: string
}

export function PointIllustration({ illustrationId, title, imageUrl, className = '' }: Props) {
  const [imgOk, setImgOk] = useState(Boolean(imageUrl))

  return (
    <div
      className={`relative flex h-[5.25rem] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-white/80 to-white/40 dark:from-navy/40 dark:to-navy/20 ${className}`}
      title={title}
      aria-hidden
    >
      {imageUrl && imgOk ? (
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      ) : (
        <IllustrationSvg id={illustrationId} />
      )}
    </div>
  )
}