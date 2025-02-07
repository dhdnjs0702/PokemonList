import styled from "styled-components";

export const DashBoardWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  border: 0.5px solid 63 103 206;
`;

export const PokemonListWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 15px;
`;

export const PokemonCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 250px;
  padding: 10px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  background-color: 255 255 255;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translate Y(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledButton = styled.button`
  background-color: red;
  color: white;
  width: 70px;
  margin-left: 40px;
  margin-top: 10px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 400px;
`;

export const DetailDescription = styled.span`
  margin-bottom: 15px;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-left: 80px;
`;
