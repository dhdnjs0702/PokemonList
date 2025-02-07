import { createContext, useEffect, useState } from "react";
import MOCK_DATA from "../components/MOCK_DATA";
export const PockemonContext = createContext(null);

export const PockemonProvider = ({ children }) => {
  const [myList, setMyList] = useState(
    JSON.parse(localStorage.getItem("myList")) || []
  );

  useEffect(() => {
    // if (myList.length > 0) {
    localStorage.setItem("myList", JSON.stringify(myList));
    // }
  }, [myList]);

  const addBtnHandler = (selectedItem) => {
    const goToMyList = MOCK_DATA.filter((e) => {
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

  return (
    <PockemonContext.Provider
      value={{
        myList,
        deleteBtnHandler,
        deleteBtnValue: "삭제",
        addBtnHandler,
        addBtnValue: "추가",
      }}
    >
      {children}
    </PockemonContext.Provider>
  );
};

export default PockemonProvider;
