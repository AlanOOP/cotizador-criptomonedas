import { FormEvent, useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store/store"
import { Pair } from "../types"
import ErrorMessage from "./ErrorMessage"


const CriptoSearchForm = () => {

    const cryptocurrencies = useCryptoStore(state => state.cryptocurrencies)
    const fetchData = useCryptoStore(state => state.fetchData)
    

    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptoCurrency: ''
    })

    const [error, setError] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('entro');

        if (Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setError('');
        fetchData(pair)
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            <div className="field">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                    onChange={(e) => setPair({ ...pair, [e.target.name]: e.target.value })}
                    value={pair.currency}
                >
                    <option value="">-- Seleccione una opción</option>
                    {
                        currencies.map(currency => (
                            <option key={currency.code} value={currency.code}>{currency.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="field">
                <label htmlFor="cryptoCurrency">Criptomoneda:</label>
                <select
                    name="cryptoCurrency"
                    id="cryptoCurrency"
                    onChange={(e) => setPair({ ...pair, [e.target.name]: e.target.value })}
                    value={pair.cryptoCurrency}
                >
                    <option value="">-- Seleccione una opción</option>
                    {
                        cryptocurrencies.map(cryptocurrency => (
                            <option
                                key={cryptocurrency.CoinInfo.Name}
                                value={cryptocurrency.CoinInfo.Name}
                            >
                                {cryptocurrency.CoinInfo.FullName}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input
                type="submit"
                value={'Cotizar'}
            />
        </form>
    )
}

export default CriptoSearchForm