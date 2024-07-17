import React from "react";
import * as M from "../../style/SearchBar/SearchBarStyle";

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <M.SearchBarContainer>
      <M.MagnifyImg />
      <M.SearchBar
        placeholder="지역명을 입력해주세요."
        onChange={handleChange}
      />
    </M.SearchBarContainer>
  );
};

export default SearchBar;
