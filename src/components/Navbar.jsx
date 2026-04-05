import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full shadow-sm bg-white/50 backdrop-blur-md sticky z-50 top-0 border-b border-b-black/15">
      <div className="flex justify-between items-center mx-auto max-w-6xl h-20">
        <a href="/" className="text-2xl font-extrabold text-red-600 font-serif">
          RecipeFinder
        </a>
        <div className="flex gap-2 items-center">
          <a
            href="/"
            className="font-medium rounded-xl px-4 py-2 text-neutral-500 cursor-pointer text-sm transition-colors hover:text-red-500 bg-amber-100"
          >
            Home
          </a>
          <a
            href="/favorites"
            className="font-medium rounded-xl px-4 py-2 text-neutral-500 cursor-pointer text-sm transition-colors hover:text-red-500"
          >
            Favorites
          </a>
          <button className="text-gray-500 cursor-pointer rounded-xl hover:bg-gray-100 p-2 transition-colors">
            <Moon size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
