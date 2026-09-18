import Page from '@/views/Blogs/tensure-articles/looping'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/looping', { type: 'article' })

export default function Route() {
  return <Page />
}
