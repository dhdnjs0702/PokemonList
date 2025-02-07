import PockemonCard from "./PockemonCard";
import { PokemonListWrapper } from "../styles/StyledCompnents";
import { useContext } from "react";
import { PockemonContext } from "../context/PockemonContext";
const PockemonList = () => {
  const pockemonList = useContext(PockemonContext);

  return (
    <>
      <h3>포켓몬 리스트</h3>
      <PokemonListWrapper>
        <PockemonCard
          listName={pockemonList.allList}
          btnValue={pockemonList.addBtnValue}
          btnHandler={pockemonList.addBtnHandler}
        />
      </PokemonListWrapper>
    </>
  );
};

export default PockemonList;
