import Page from '@/views/Blogs/tensure-articles/bdd'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/bdd', { type: 'article' })

export default function Route() {
  return <Page />
}
