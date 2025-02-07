import { useNavigate } from "react-router-dom";
import { PokemonCardStyle, StyledButton } from "../styles/StyledCompnents";

const PockemonCard = ({ listName, btnValue, btnHandler }) => {
  const navigate = useNavigate();

  const showDetails = (e) => {
    navigate(`/dex/${e.id}`);
  };

  return (
    <>
      {listName
        .sort((a, b) => a.id - b.id)
        .map((e) => {
          return (
            <PokemonCardStyle
              key={e.id}
              onClick={(event) => {
                event.stopPropagation();
                showDetails(e);
              }}
            >
              <img src={e.img_url}></img>
              <span>{e.korean_name}</span>
              <span>No.{e.id}</span>
              <StyledButton
                value={btnValue}
                onClick={(event) => {
                  event.stopPropagation();
                  btnHandler(e);
                }}
              >
                {btnValue}
              </StyledButton>
            </PokemonCardStyle>
          );
        })}
    </>
  );
};

export default PockemonCard;
