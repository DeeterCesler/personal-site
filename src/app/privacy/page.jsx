import Page from '@/views/Privacy'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/privacy')

export default function Route() {
  return <Page />
}
