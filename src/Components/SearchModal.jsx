import { useRef, useEffect, useState } from 'react';
import logoImg from "../assets/nlogo.svg";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

const SearchModal = ({ isOpen, onClose, isSearchbarOpen }) => {
  const modalRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';

  const searchItems = [
    "standing desk", "office chair", "gaming", "ergonomics", "sale", "workstations", "monitor arms", "laptop & monitors", "accessories", "tables",
  ];

  const highlightMatch = (text, query) => {
    if (!text || !query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="font-medium text-red-500">{part}</span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  useEffect(() => {
    if (isOpen) setIsModalOpen(true);
    else setIsModalOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isSearchbarOpen) setSearchValue('');
  }, [isSearchbarOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!searchValue.trim()) return setLoading(false);
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const handlePopularClick = (term) => setSearchValue(term);

  const filteredTerms = searchValue.trim()
    ? searchItems.filter(term =>
        term.toLowerCase().includes(searchValue.toLowerCase())
      )
    : searchItems;

  if (!isOpen) return null;

  return (
      <div className="fixed animate-slideDown inset-0 z-[56] flex items-start justify-center px-4 py-12 bg-transparent backdrop-blur-sm">
        <div
          ref={modalRef}
          className={`
            bg-white w-full max-w-[80%] rounded-2xl shadow-xl p-10
            transform transition-all duration-700 ease-out
            ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}
          `}
        >
        <div className="flex items-center justify-between space-x-4 mb-6">
          <img src={logoImg} alt="Logo" className="h-10 w-auto" />
          <div className="flex-grow relative max-w-2xl w-full">
             <FiSearch 
                className={`absolute text-black left-4 top-0 bottom-0 my-auto text-xl 
                  ${isRTL ? 'right-4' : 'left-4'}`} 
              />
            <input
              type='search'
              placeholder='Search'
              className={`w-full h-12 text-base pl-12 pr-12 py-2 rounded-full bg-[#f5f5f5] md:pr-16 outline-none
              ${isRTL ? 'pl-16 pr-12 text-right' : 'pl-12 pr-16 text-left'}`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              dir={isRTL ? 'rtl' : 'ltr'}
            />
             {loading && (
                <span
                  className={`absolute top-0 bottom-0 my-auto h-5 w-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin
                    ${isRTL ? 'left-4' : 'right-4'}`}
                ></span>
              )}
          </div>
          <button onClick={onClose} className="text-2xl text-black">
            <svg className="hover:rotate-90 transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>
          </button>
        </div>

        <div className="w-[60%] max-w-[550px] mx-auto mb-4">
          <span className='block mb-2.5 text-[#767676] text-sm font-medium'>
            {searchValue ? "Search Results" : "Popular Searches"}
          </span>
          <ul className="space-y-2">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((term, index) => (
                <li
                  key={index}
                  onClick={() => handlePopularClick(term)}
                  className="text-black font-medium hover:text-gray-500 hover:font-semibold cursor-pointer text-lg opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards',
                    animationDuration: '0.6s',
                    animationTimingFunction: 'ease-out',
                  }}
                >
                  <span className='block hover:scale-105 transition-all duration-500 ease-in-out'>
                    {highlightMatch(term, searchValue)}
                  </span>
                </li>
              ))
            ) : (
              <li className="text-gray-400 mt-2 animate-fadeInUp">No results found</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
