import Page from '@/views/Blogs/tensure-articles/tdd'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/tdd')

export default function Route() {
  return <Page />
}
