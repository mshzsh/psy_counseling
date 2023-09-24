import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchInput from "../SearchInput";

const SearchModal = () => {
  return (
    <div className={`w-[538px] bg-gray-100`}>
      <SearchInput />
      <div>
        <img src="" width={522} height={187} alt="عکس تبلیغات" />
      </div>
      <SearchInput />
    </div>
  );
};

export default SearchModal;
