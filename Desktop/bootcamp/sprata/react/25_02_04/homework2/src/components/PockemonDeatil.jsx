import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "./MOCK_DATA";
import {
  DetailWrapper,
  DetailDescription,
  Img,
} from "../styles/StyledCompnents";

const PockemonDeatil = () => {
  const navigate = useNavigate();
  const params = useParams();
  const targetItem = MOCK_DATA.find(function (e) {
    return e.id === +params.id;
  });
  console.log(params);

  return (
    <DetailWrapper>
      <Img src={targetItem.img_url} />
      <DetailDescription>이름: {targetItem.korean_name}</DetailDescription>
      <DetailDescription>타입: {targetItem.types}</DetailDescription>
      <DetailDescription>{targetItem.description}</DetailDescription>
      <button onClick={() => navigate("/dex")}>뒤로 가기</button>
    </DetailWrapper>
  );
};

export default PockemonDeatil;
