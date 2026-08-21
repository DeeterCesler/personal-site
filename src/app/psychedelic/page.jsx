import Page from '@/views/Psychedelic'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/psychedelic')

export default function Route() {
  return <Page />
}
