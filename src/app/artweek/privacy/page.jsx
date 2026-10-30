import Page from '@/views/ArtWeekPrivacy'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/artweek/privacy')

export default function Route() {
  return <Page />
}
