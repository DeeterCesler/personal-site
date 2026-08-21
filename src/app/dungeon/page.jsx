import Page from '@/FUN/dungeon'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/dungeon')

export default function Route() {
  return <Page />
}
