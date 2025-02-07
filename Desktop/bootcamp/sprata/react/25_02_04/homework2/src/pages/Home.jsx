import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F474x%2Fd0%2F0d%2F32%2Fd00d3239f11d13c0c66372ef1921b424.jpg&type=sc960_832"></img>
      <Link to="/dex">도감으로 이동</Link>
    </>
  );
};
export default Home;
