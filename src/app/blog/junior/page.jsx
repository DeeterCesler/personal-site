import Page from '@/views/Blogs/Junior'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/junior', { type: 'article' })

export default function Route() {
  return <Page />
}
