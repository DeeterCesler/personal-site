import Page from '@/views/Blogs/DeathOfTheDeveloperEgo'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/blog/death-of-the-developer-ego', { type: 'article' })

export default function Route() {
  return <Page />
}
