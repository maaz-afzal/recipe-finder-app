import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import RecipeDetail from "./pages/RecipeDetail";

const App = () => {

  return (
    <div>
      <Navbar />

      <Routes>
        {/* Route - Home, Favorites & RecipeDetail */}
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />


        {/* 404 Route*/}
        <Route
          path="*"
          element={
            <div className="text-center py-32">
              <p className="text-6xl mb-4">🍳</p>
              <h2 className="font-display text-2xl text-gray-600 dark:text-gray-300 mb-2">
                Page not found
              </h2>
              <a href="/" className="text-brand-500 hover:underline text-sm">
                Go back home
              </a>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
