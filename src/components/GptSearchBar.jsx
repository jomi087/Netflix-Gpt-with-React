import React, { useContext } from "react";
import lang from "../utils/language";
import LanguageContext from "../context/LanguageContext";



const GptSearchBar = () => {
  const {language} = useContext(LanguageContext)


  return (
    <div className = "pt-[12%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-2xl">
        <input 
            type="text"
            className="p-3 m-4 col-span-9 bg-white rounded-lg" 
            placeholder={lang[language].searchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
            {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
