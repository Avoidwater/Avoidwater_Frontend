import React from "react";
import * as M from "../../style/SearchBar/SearchBarStyle";

const SearchBar = () => {
  return (
    <M.SearchBarContainer>
      <M.MagnifyImg />
      <M.SearchBar placeholder="지역명을 입력해주세요." />
    </M.SearchBarContainer>
  );
};

export default SearchBar;
