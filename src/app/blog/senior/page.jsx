import Page from '@/views/Blogs/Senior'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/senior', { type: 'article' })

export default function Route() {
  return <Page />
}
