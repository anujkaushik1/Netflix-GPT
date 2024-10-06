import React from "react";
import { languagesSupport } from "../utils/languageConstants";
import { useDispatch } from "react-redux";
import { updateLangugae } from "../store/slices/config";

const LangagesOptions = () => {
  const dispatch = useDispatch();
  const handleSelectedLanguage = (e) => {
    dispatch(updateLangugae(e.target?.value || "en"));
  };

  return (
    <div className="mr-12 ">
      <select
        onClick={handleSelectedLanguage}
        name="langauges"
        className="p-3 text-base top-2 z-50 relative"
      >
        {Object.keys(languagesSupport).map((lang) => (
          <option
            key={languagesSupport[lang].key}
            value={languagesSupport[lang].key}
          >
            {languagesSupport[lang].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LangagesOptions;
