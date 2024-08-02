import { create } from "zustand";
import { CryptoCurrencies, CryptoPrice, Pair } from "../types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCryptos } from "../services/CryptoService";

type CryptoStore = {
    cryptocurrencies: CryptoCurrencies[],
    result: CryptoPrice,
    loading: boolean,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>

}

const initialState = {
    FROMSYMBOL: '',
    IMAGEURL: '',
    PRICE: '',
    HIGHDAY: '',
    LOWDAY: '',
    CHANGEPCT24HOUR: '',
    LASTUPDATE: ''
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: initialState,
    loading: false,
    fetchCryptos: async () => {
        let cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies: cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true,
        }))
        const result = await fetchCurrentCryptoPrice(pair);
        set(() => ({
            result: result,
        }))
        set(() => ({
            loading: false,
        }))
    }
})))
