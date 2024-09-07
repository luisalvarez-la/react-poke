import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/SelectTypes.css'


const SelectType = ({setTypeSelected}) => {
    const [types, getTypes] = useFetch()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type?offset=0&limit=100'
        getTypes(url)
    }, [])
    

const handleChange = e => {
    setTypeSelected(e.target.value)


}

    return (
        <select onChange={handleChange}>
            <option value="allPokemons">All Pokemons</option>
            {
                types?.results.map(typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                ))
            }
        </select>
    )
}

export default SelectType