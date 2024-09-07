import axios from "axios"
import { useState } from "react"


const useFetch = () => {
  
    const [response, setResponse] = useState()

    //impirting Api
    const getApi = (url) => {

        axios.get(url)
            .then(res => setResponse(res.data))
            .catch( e => console.log(e))

    }

    const getTypeApi = (url) => {

        axios.get(url)
            .then(res => {
                const obj = {
                    results:res.data.pokemon.map( e => e.pokemon)
                }
                setResponse(obj)
            })
            .catch( e => console.log(e))

    }

    return [response, getApi, getTypeApi]
}

export default useFetch