import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import "../components/PokedexPage/styles/PokedexPage.css"


const PokedexPage = () => {

    

    const [searchedName, setSearchedName] = useState('')

    const [typeSelected, setTypeSelected] = useState('allPokemons')

    const trainer = useSelector(states => states.trainer)

    const [pokemons, getPokemons, getTypePokemon] = useFetch()

    useEffect(() => {

        if (typeSelected === 'allPokemons') {

            const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
            getPokemons(url)
        } else {

            getTypePokemon(typeSelected)
        }


    }, [typeSelected])

    const inputName = useRef()

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchedName(inputName.current.value.trim().toLowerCase())
    }


    const callbackFilter = poke => {
        const filterName = poke.name.includes(searchedName)
        return filterName

    }





    return (

        <div className="container">
            <h1>Pokédex</h1>
            <p> Welcome {trainer}, please find your favorite Pokémon!</p>

            <form onSubmit={handleSearch}>
                <input ref={inputName} type="text" />
                <button >Search</button>
            </form>

            <SelectType setTypeSelected={setTypeSelected} />

            <div>
                {
                    pokemons && pokemons.results.filter(callbackFilter).length === 0 
                    ? <h2>No pokemons found</h2> 
                    : (
                        pokemons?.results.filter(callbackFilter).map(poke => (<PokeCard key={poke.url} poke={poke}
                    />))
                    )
                
                }
            </div>


        </div>
    )
}

export default PokedexPage