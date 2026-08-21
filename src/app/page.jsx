import Page from '@/views/HomePage'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/')

export default function Route() {
  return <Page />
}
