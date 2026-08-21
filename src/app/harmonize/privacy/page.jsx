import Page from '@/views/HarmonizePrivacy'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/harmonize/privacy')

export default function Route() {
  return <Page />
}
