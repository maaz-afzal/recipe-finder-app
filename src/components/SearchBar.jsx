import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    onSearch(input);

    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form
      className="flex items-center gap-2 w-full max-w-2xl mx-auto"
      onSubmit={handleForm}
    >
      {/* Input Field */}
      <div className="relative flex-1">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />

        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Search recipes..."
          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        <Search size={18} />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
