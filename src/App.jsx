import React, { useEffect } from "react";
import { fetchRecipes } from "./services/api";
import Navbar from "./components/Navbar";

const App = () => {
  useEffect(() => {
    fetchRecipes().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Navbar/>
    </div>
  );
};

export default App;
