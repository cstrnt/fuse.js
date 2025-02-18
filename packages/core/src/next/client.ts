import {
  useQuery,
  UrqlProvider,
  createClient as create,
  fetchExchange,
  cacheExchange,
  ssrExchange,
} from '@urql/next'
import type { Client, ClientOptions, SSRExchange } from '@urql/next'

export * from 'urql'
export { useQuery, UrqlProvider as Provider }

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
export const createClient = (
  opts: Optional<ClientOptions, 'exchanges'>,
): { client: Client; ssr: SSRExchange } => {
  const ssr = ssrExchange()
  const options: ClientOptions = {
    ...opts,
    suspense: opts.suspense ?? true,
    exchanges: opts.exchanges || [cacheExchange, ssr, fetchExchange],
  }
  return { client: create(options), ssr }
}
