import Page from '@/views/Blogs/tensure-articles/immutability'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/immutability')

export default function Route() {
  return <Page />
}
