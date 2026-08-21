import Page from '@/views/Now'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/now')

export default function Route() {
  return <Page />
}
