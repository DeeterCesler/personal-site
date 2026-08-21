import Page from '@/views/Blog'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog')

export default function Route() {
  return <Page />
}
