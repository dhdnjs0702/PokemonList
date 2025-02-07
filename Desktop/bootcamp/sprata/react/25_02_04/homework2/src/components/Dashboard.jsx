import PockemonCard from "./PockemonCard";
import { DashBoardWrapper } from "../styles/StyledCompnents";
import { PockemonContext } from "../context/PockemonContext";
import { useContext } from "react";

const Dashboard = () => {
  const dashboard = useContext(PockemonContext);
  console.log("dashBoard=>", dashboard);

  return (
    <>
      <h3>나만의 포켓몬</h3>
      <DashBoardWrapper>
        <PockemonCard
          listName={dashboard.myList}
          btnValue={dashboard.deleteBtnValue}
          btnHandler={dashboard.deleteBtnHandler}
        />
      </DashBoardWrapper>
    </>
  );
};

export default Dashboard;
