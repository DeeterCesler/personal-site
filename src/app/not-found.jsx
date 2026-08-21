import NotFound from '@/views/NotFound'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata('/notfound')

export default function NotFoundRoute() {
  return <NotFound />
}
