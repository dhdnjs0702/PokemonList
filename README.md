Dashboard.jsx -> 나만의 포켓몬 리스트 입니다.
PockemonList.jsx -> MOCK_DATA의 정보를 카드로 보여주는 부분 입니다.
PockemonCard.jsx -> 각각의 포켓몬 정보를 담는 카드를 생성하는 부분입니다.
PockemonDetail.jsx -> 포켓몬 카드를 선택했을때 해당 포켓몬의 세부정보를 보여주는 페이지입니다.
PockemonContext.jsx -> contextapi방식으로 대상 컴포넌트에 state를 전달하기 위한 부분입니다. mylist는 대쉬보드의 리스트 allList는 전체 목록을 
의미합니다. 


처음 페이지에 접근하게 되면 Home.jsx로 이동합니다 하단의 링크를 클릭하면 Dex.jsx로 이동하게 됩니다. Dex.jsx의 경우에는 PockemonList + Dashboard
로 구성되어있습니다. 

대쉬보드에는 최대 6마리까지 추가가 가능하고 그 이상의 포켓몬을 추가하는 경우 알람이 뜨고 return됩니다. 이미 추가된 포켓몬을 또 추가하는경우에도 알람이 
발생하고 return됩니다. -> PockemonContext의 addBtnHandler

대쉬보드의 포켓몬 리스트에 존재하는 포켓몬들의 id와 선택한 포켓몬의 id를 비교해서 동일한 경우 그 포켓몬을 삭제합니다 -> PockemonContext의 deleteBtnHandler



final에는 rtk와 기타 도전 과제 부분을 첨부할려 했는데 실패했습니다.
