import PockemonCard from "./PockemonCard";
import { PokemonListWrapper } from "../styles/StyledCompnents";
const PockemonList = ({ allList, showDetails, addBtnHandler }) => {
  return (
    <>
      <h3>포켓몬 리스트</h3>
      <PokemonListWrapper>
        <PockemonCard
          listName={allList}
          showDetails={showDetails}
          btnHandler={addBtnHandler}
          btnValue="추가"
        />
      </PokemonListWrapper>
    </>
  );
};

export default PockemonList;
