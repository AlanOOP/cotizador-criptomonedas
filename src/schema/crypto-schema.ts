import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

const CoinInfoSchema = z.object({
    Name: z.string(),
    FullName: z.string(),
});

// Define el esquema para cada elemento en el array de Data
export const DataSchema = z.object({
    CoinInfo: CoinInfoSchema,
});

// Define el esquema para la respuesta completa
export const CryptoCurrencyResponseSchema = z.object({
    Data: z.array(DataSchema),
});

export const PairSchema = z.object({
    currency: z.string(),
    cryptoCurrency: z.string()
})

export const CryptoPriceSchema = z.object({
    FROMSYMBOL: z.string(),
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})