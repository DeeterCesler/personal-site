import Page from '@/views/NorsePrivacy'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/norse/privacy')

export default function Route() {
  return <Page />
}
