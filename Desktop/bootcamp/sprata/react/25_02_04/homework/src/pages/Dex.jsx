import { useEffect, useState } from "react";
import MOCK_DATA from "../components/MOCK_DATA";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PockemonList from "../components/PockemonList";

const Dex = () => {
  const [myList, setMyList] = useState([]);
  const [allList, setAllList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    setAllList([...MOCK_DATA]);
  }, []);

  const addBtnHandler = (selectedItem) => {
    const goToMyList = allList.filter((e) => {
      return selectedItem.id === e.id;
    });
    const isExist = myList.some((e) => {
      return selectedItem.id === e.id;
    });

    if (isExist) {
      alert("해당 포켓몬은 이미 추가되어있습니다");
      return;
    }

    if (myList.length >= 6) {
      alert("나만의 포켓몬 목록에는 6마리 이상의 포켓몬이 들어갈 수 없습니다");
      return;
    }

    setMyList([...myList, goToMyList[0]]);
  };

  const deleteBtnHandler = (selectedItem) => {
    const filteredList = myList.filter((e) => {
      return e.id !== selectedItem.id;
    });
    setMyList(filteredList);
  };

  const showDetails = (e) => {
    navigate(`/dex/${e.id}`);
  };

  return (
    <>
      <Dashboard
        myList={myList}
        showDetails={showDetails}
        deleteBtnHandler={deleteBtnHandler}
      />
      <PockemonList
        allList={allList}
        showDetails={showDetails}
        addBtnHandler={addBtnHandler}
      />
    </>
  );
};

export default Dex;
