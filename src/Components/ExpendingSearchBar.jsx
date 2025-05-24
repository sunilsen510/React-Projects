import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const ExpandingSearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative flex items-center h-8 rounded-full px-2 transition-all duration-300 bg-white text-black ${
        isExpanded ? "w-64" : "w-10"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <input
        type="text"
        placeholder="Search Anything"
        className={`bg-transparent text-gray-600 outline-none px-2 w-full transition-all duration-300 text-base ${
          isExpanded ? "opacity-100" : "opacity-0 w-0"
        }`}
      />
      <button className="text-gray-700 hover:text-gray-500 bg-transparent w-8 h-8 rounded-full  flex items-center justify-center transition-colors duration-300">
        <FiSearch size={18} />
      </button>
    </div>
  );
};

export default ExpandingSearchBar;
