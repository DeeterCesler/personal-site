import Page from '@/views/SlopBin'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/slop')

export default function Route() {
  return <Page />
}
