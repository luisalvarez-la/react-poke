import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";
import "../components/HomePage/styles/HomePage.css";

const HomePage = () => {
  const inputTrainer = useRef();

  //Dispatching action setTrainer()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainer(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <div className="home-page">
      <div>
        <h1>Pokedex</h1>
        <h2>Hi there trainer!</h2>
        <p>
          If you want to find your favorite pokemon, please enter your trainer
          name
        </p>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input ref={inputTrainer} type="text" />
            <button>Catch them all</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
