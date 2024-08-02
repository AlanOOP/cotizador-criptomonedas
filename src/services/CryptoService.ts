import axios from "axios";
import { CryptoCurrencyResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema";
import { CryptoCurrencyResponse, Pair } from "../types";

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
    const { data } = await axios.get<CryptoCurrencyResponse>(url)

    const result = CryptoCurrencyResponseSchema.safeParse(data);

    if (result.success) {
        return result.data.Data
    }

}

export async function fetchCurrentCryptoPrice(pair: Pair) {
    const url: string = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`;

    try {
        const { data: { DISPLAY } } = await axios.get(url);

        const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptoCurrency][pair.currency])

        if (result.success) {
            return result.data;
        }

    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}