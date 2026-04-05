import React, { useEffect } from "react";
import { fetchRecipes } from "./services/api";
import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";

const App = () => {
  useEffect(() => {
    fetchRecipes().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Navbar/>
      <HeroContent/>
    </div>
  );
};

export default App;
