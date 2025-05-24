// import {useRef, useEffect} from 'react'
// import logoImg from "../assets/logo.svg";
// import { FiSearch } from "react-icons/fi";

// const SearchModal = ({ isOpen, onClose }) => {
//   const modalRef = useRef();
//   const searchItems = ["standing desk", "office chair", "gaming", "ergonomics"];

//   useEffect(() => {
//     const handler = (e) => {
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//         onClose();
//       }
//     };
//     if (isOpen) document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
//       <>
//         <div className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-transparent bg-opacity-50 backdrop-blur-sm px-4 py-8 animate-fade-in space-y-6">
//           {/* Modal Header */}
//           <div
//             ref={modalRef}
//             className="bg-white max-w-[80%] w-full rounded-2xl shadow-xl p-16 "
//           >
//             <div className='flex items-center justify-between space-x-4 mb-6'>
//               {/* Left: Logo */}
//             <div className="flex-shrink-0">
//               <img src={logoImg} alt="Logo" className="h-10 w-auto" />
//             </div>

//             {/* Center: Search Bar with Icon */}
//             <div className="flex-grow relative max-w-xl w-full">
//               {/* Search Icon */}
//               <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg" />

//               {/* Input Field */}
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full h-12 pl-10 pr-5 py-2 rounded-full border bg-gray-50 border-gray-300 focus:outline-none"
//                 autoFocus
//               />
//             </div>


//             {/* Right: Close Button */}
//             <div className="flex-shrink-0">
//               <button
//                 onClick={onClose}
//                 className="text-gray-500 hover:text-black text-2xl font-bold focus:outline-none"
//               >
//                 &times;
//               </button>
//             </div>
//             </div>
//             <div className="bg-white rounded-xl w-[400px] mx-auto p-4">
//               <span className="block font-semibold text-gray-400 text-base mb-2">Popular Searches</span>
//               {/* <ul className="flex flex-col text-black">
//                 <li className="text-[18px] mt-[10px] text-xl font-bold hover:text-gray-500 cursor-pointer relative opacity-100 transition-all duration-300 ease-in-out hover:translate-x-2">
//                   standing desk
//                 </li>
//                 <li className="text-[18px] mt-[10px] text-xl font-bold hover:text-gray-500 cursor-pointer relative opacity-100 transition-all duration-300 ease-in-out hover:translate-x-2">
//                   office chair
//                 </li>
//                 <li className="text-[18px] mt-[10px] text-xl font-bold hover:text-gray-500 cursor-pointer relative opacity-100 transition-all duration-300 ease-in-out hover:translate-x-2">
//                   gaming
//                 </li>
//                 <li className="text-[18px] mt-[10px] text-xl font-bold hover:text-gray-500 cursor-pointer relative opacity-100 transition-all duration-300 ease-in-out hover:translate-x-2">
//                   ergonomics
//                 </li>
//               </ul> */}
//               <ul className="flex flex-col text-black">
//                 {searchItems.map((item, index) => (
//                   <li
//                     key={index}
//                     className="text-[18px] mt-[10px] text-xl font-bold hover:text-gray-500 cursor-pointer relative opacity-100 transition-all duration-300 ease-in-out hover:translate-x-2"
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </>
//   );
// };

// export default SearchModal;





import { useRef, useEffect, useState } from 'react';
import logoImg from "../assets/logo.svg";
import { FiSearch } from "react-icons/fi";

const SearchModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const searchItems = [
    "standing desk", "office chair", "gaming", "ergonomics", "sale", "workstations", "monitor arms", "laptop & monitors", "accessories", "tables", 
  ];

  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim()) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [query]);

  const filteredItems = searchItems.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-transparent bg-opacity-50 backdrop-blur-sm px-4 py-8 animate-fade-in space-y-6">
      <div
        ref={modalRef}
        className="bg-white max-w-[80%] w-full rounded-2xl shadow-xl p-16"
      >
      
        <div className="flex items-center justify-between space-x-4 mb-6">
         
          <div className="flex-shrink-0">
            <img src={logoImg} alt="Logo" className="h-10 w-auto" />
          </div>

         
          <div className="flex-grow relative max-w-xl w-full">
            <FiSearch className="absolute text-black left-4 top-0 bottom-0 my-auto text-xl" />
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-12 py-2 rounded-full bg-[#F5F5F5] text-base border-0 focus:outline-none"
              autoFocus
            />
            {loading && (
              <span className="absolute right-4 top-0 bottom-0 my-auto h-5 w-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
            )}
          </div>

         
          <div className="flex-shrink-0">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black text-2xl font-bold focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>

       
        <div className="bg-white rounded-xl w-[400px] mx-auto p-4">
          <span className="block font-semibold text-gray-400 text-base mb-2">
            {query ? "Search Results" : "Popular Searches"}
          </span>
          {/* <ul className="flex flex-col items-start text-black">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => {
                const lowerItem = item.toLowerCase();
                const lowerQuery = query.toLowerCase();
                const startIndex = lowerItem.indexOf(lowerQuery);

                if (startIndex === -1) return null;

                const beforeMatch = item.slice(0, startIndex);
                const matchText = item.slice(startIndex, startIndex + query.length);
                const afterMatch = item.slice(startIndex + query.length);

                return (
                  <li
                    key={index}
                    onClick={() => setQuery(item)}
                    className="text-left text-[18px] mt-[10px] text-xl font-light hover:text-gray-500 cursor-pointer transition-all duration-300 ease-in-out hover:translate-x-2"
                  >
                    {beforeMatch}
                    <span className="font-bold text-gray-800">{matchText}</span>
                    {afterMatch}
                  </li>
                );
              })
            ) : (
              <li className="text-gray-400 mt-2">No results found</li>
            )}
          </ul> */}

          <ul className="flex flex-col items-start text-black">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => {
                const i = item.toLowerCase().indexOf(query.toLowerCase());
                if (i === -1) return null;

                return (
                  <li
                    key={index}
                    onClick={() => setQuery(item)}
                    className="text-left mt-2 text-xl font-light hover:text-gray-500 hover:font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:translate-x-2"
                  >
                    {item.slice(0, i)}
                    <span className="font-bold text-red-700">
                      {item.slice(i, i + query.length)}
                    </span>
                    {item.slice(i + query.length)}
                  </li>
                );
              })
            ) : (
              <li className="text-gray-400 mt-2">No results found</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
