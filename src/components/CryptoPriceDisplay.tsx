import { useMemo } from "react"
import { useCryptoStore } from "../store/store"
import Spinner from "./Spinner"

const CryptoPriceDisplay = () => {

    const result = useCryptoStore(state => state.result)
    const loading = useCryptoStore(state => state.loading)
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])
    return (
        <div>
            {loading ? <Spinner /> : hasResult &&
                (
                    <>
                        <h2 className="title_display">Cotización</h2>
                        <div className="result">
                            <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="" />
                            <div>
                                <p>El precio es de {result.FROMSYMBOL} : <span>{result.PRICE}  </span></p>
                                <p>El precio más alto del día: <span>{result.HIGHDAY}</span></p>
                                <p>El precio más bajon del día: <span>{result.LOWDAY}</span></p>
                                <p>Vatiación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                                <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default CryptoPriceDisplay