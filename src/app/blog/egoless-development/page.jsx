import Page from '@/views/Blogs/EgolessDevelopment'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/egoless-development', { type: 'article' })

export default function Route() {
  return <Page />
}
