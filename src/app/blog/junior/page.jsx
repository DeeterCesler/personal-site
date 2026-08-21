import Page from '@/views/Blogs/Junior'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/junior')

export default function Route() {
  return <Page />
}
