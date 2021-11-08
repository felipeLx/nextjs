import type { NextApiHandler } from 'next'
import type { RequestInit, Response } from '@vercel/fetch'
import type { APIEndpoint, APIHandler } from './utils/types'
import type { CartSchema } from '../types/cart'
import type { CustomerSchema } from '../types/customer'
import type { LoginSchema } from '../types/login'
import type { LogoutSchema } from '../types/logout'
import type { SignupSchema } from '../types/signup'
import type { ProductsSchema } from '../types/product'
import type { WishlistSchema } from '../types/wishlist'
import type { CheckoutSchema } from '../types/checkout'
import type { CustomerCardSchema } from '../types/customer/card'
import type { CustomerAddressSchema } from '../types/customer/address'
import {
  defaultOperations,
  OPERATIONS,
  AllOperations,
  APIOperations,
} from './operations'
export class CommerceAPICore{
  constructor(readonly provider) {}

  getConfig(userConfig = {}) {
    return Object.entries(userConfig).reduce(
      (cfg, [key, value]) => Object.assign(cfg, { [key]: value }),
      { ...this.provider.config }
    )
  }

  setConfig(newConfig) {
    Object.assign(this.provider.config, newConfig)
  }
}

export function getCommerceApi(customProvider) {
  const commerce = Object.assign(
    new CommerceAPICore(customProvider),
    defaultOperations
  )
  const ops = customProvider.operations

  OPERATIONS.forEach((k) => {
    const op = ops[k]
    if (op) {
      commerce[k] = op({ commerce }) [typeof k]
    }
  })

  return commerce
}

export function getEndpoint(commerce,
  {
  context,
  endpoint 
  }) {
  const cfg = commerce.getConfig(context.config)

  return function apiHandler(req, res) {
    return context.handler({
      req,
      res,
      commerce,
      config: cfg,
      handlers: context.handlers,
      options: context.options ?? {},
    })
  }
}

export const createEndpoint =
  (commerce,{endpoint,  context}) => {
    return getEndpoint(commerce, {...endpoint,...context })
  }

export interface CommerceAPIConfig {
  locale?: string
  locales?: string[]
  commerceUrl: string
  apiToken: string
  cartCookie: string
  cartCookieMaxAge: number
  customerCookie: string
  fetch<Data = any, Variables = any>(
    query: string,
    queryData?: CommerceAPIFetchOptions<Variables>,
    fetchOptions?: RequestInit
  ): Promise<GraphQLFetcherResult<Data>>
}

export type GraphQLFetcher<
  Data extends GraphQLFetcherResult = GraphQLFetcherResult,
  Variables = any
> = (
  query: string,
  queryData?: CommerceAPIFetchOptions<Variables>,
  fetchOptions?: RequestInit
) => Promise<Data>

export interface GraphQLFetcherResult<Data = any> {
  data: Data
  res: Response
}

export interface CommerceAPIFetchOptions<Variables> {
  variables?: Variables
  preview?: boolean
}
