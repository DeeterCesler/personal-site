import Page from '@/views/Blogs/Senior'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/senior')

export default function Route() {
  return <Page />
}
