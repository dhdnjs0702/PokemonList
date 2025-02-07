import PockemonCard from "./PockemonCard";
import { PokemonListWrapper } from "../styles/StyledCompnents";
import { useContext } from "react";
import { PockemonContext } from "../context/PockemonContext";
import MOCK_DATA from "./MOCK_DATA";
const PockemonList = () => {
  const pockemonList = useContext(PockemonContext);

  return (
    <>
      <h3>포켓몬 리스트</h3>
      <PokemonListWrapper>
        <PockemonCard
          listName={MOCK_DATA}
          btnValue={pockemonList.addBtnValue}
          btnHandler={pockemonList.addBtnHandler}
        />
      </PokemonListWrapper>
    </>
  );
};

export default PockemonList;
