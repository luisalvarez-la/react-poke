import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import "../components/PokeInfoPage/styles/PokeInfoPage.css"

const PokeInfoPage = () => {
  const { name } = useParams(); 
  const [pokemon, getPokemon] = useFetch(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      getPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
  }, [name]);

  const handleGoBack = () => {
    navigate(-1); 
  };

  if (!pokemon) return <div>Loading...</div>; 

  return (
    <div className="poke-detail">
      <button className="poke-detail__back-btn" onClick={handleGoBack}>
        Go Back
      </button>
      <div className="poke-detail__info">
        <header className={`poke-detail__header bg__${pokemon.types[0].type.name}`}>
          <h2 className="poke-detail__name">{pokemon.name}</h2>
          <img
            className="poke-detail__sprite"
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </header>
        <section className="poke-detail__body">
          {/* Basic Information */}
          <h3>Basic Information</h3>
          <p><strong>Base Experience:</strong> {pokemon.base_experience}</p>
          <p><strong>Height:</strong> {pokemon.height * 10} cm</p> {/* Converting decimeters to cm */}
          <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p> {/* Converting hectograms to kg */}

          {/* Moves */}
          <h3>Moves</h3>
          <ul className="poke-detail__moves">
            {pokemon.moves.slice(0, 10).map((moveInfo) => ( // Display first 10 moves as an example
              <li className="poke-detail__move" key={moveInfo.move.url}>
                {moveInfo.move.name}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PokeInfoPage