import Page from '@/views/Work'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/work')

export default function Route() {
  return <Page />
}
