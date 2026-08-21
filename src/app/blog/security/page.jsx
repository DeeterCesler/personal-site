import Page from '@/views/Blogs/SecurityPrinciples'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/security')

export default function Route() {
  return <Page />
}
