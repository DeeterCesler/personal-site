import Page from '@/views/Blogs/StartupsVersus'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/startups-vs-big-tech', { type: 'article' })

export default function Route() {
  return <Page />
}
