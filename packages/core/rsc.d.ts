// src/next/rsc.ts
import {
  Client,
  ClientOptions,
  AnyVariables,
  GraphQLRequestParams,
} from '@urql/core'
import { ExecutionResult } from 'graphql'
import { GraphQLParams } from 'graphql-yoga'

export { registerUrql as registerClient } from '@urql/next/rsc'
export * from '@urql/core'

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
export function createClient(opts: Optional<ClientOptions, 'exchanges'>): Client

export function execute<
  Data = any,
  Variables extends AnyVariables = AnyVariables,
>(
  request: GraphQLRequestParams<Data, Variables> & {
    context?: (params: GraphQLParams) => Record<string, unknown>
  },
): Promise<ExecutionResult<Data>>
