import Link from 'next/link'

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <img
      src={coverImage?.sourceUrl}
      className={'shadow-small'}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
