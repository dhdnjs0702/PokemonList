import PockemonCard from "./PockemonCard";
import { DashBoardWrapper } from "../styles/StyledCompnents";

const Dashboard = ({ myList, showDetails, deleteBtnHandler }) => {
  return (
    <>
      <h3>나만의 포켓몬</h3>
      <DashBoardWrapper>
        <PockemonCard
          listName={myList}
          showDetails={showDetails}
          btnHandler={deleteBtnHandler}
          btnValue="삭제"
        />
      </DashBoardWrapper>
    </>
  );
};

export default Dashboard;
