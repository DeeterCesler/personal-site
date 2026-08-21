import Page from '@/views/Blogs/tensure-articles/bdd'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/bdd')

export default function Route() {
  return <Page />
}
