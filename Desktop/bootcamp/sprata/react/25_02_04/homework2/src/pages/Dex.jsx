import Dashboard from "../components/Dashboard";
import PockemonList from "../components/PockemonList";
import PockemonProvider from "../context/PockemonContext";

const Dex = () => {
  return (
    <>
      <PockemonProvider>
        <Dashboard />
        <PockemonList />
      </PockemonProvider>
    </>
  );
};

export default Dex;
