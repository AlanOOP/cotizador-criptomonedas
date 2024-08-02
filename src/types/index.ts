import { z } from 'zod'
import { CryptoCurrencyResponseSchema, CryptoPriceSchema, CurrencySchema, DataSchema, PairSchema } from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>;

export type CryptoCurrencyResponse = z.infer<typeof CryptoCurrencyResponseSchema>

export type CryptoCurrencies = z.infer<typeof DataSchema>

export type Pair = z.infer<typeof PairSchema>

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;