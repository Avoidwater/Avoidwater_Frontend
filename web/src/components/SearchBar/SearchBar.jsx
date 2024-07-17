import React, { useState } from "react";
import * as M from "../../style/SearchBar/SearchBarStyle";
import axios from "axios";

const SearchBar = () => {
  const [addressText, setAddressText] = useState("");
  const header = "df6ab16c358d9b2ad054e8777badfcd6";
  const handleGetLocation = async () => {
    try {
      // axios 사용해서 https://dapi.kakao.com/v2/local/search/address.json?query="${주소}"
      // + header에 Authorization: KakaoAK df6ab16c358d9b2ad054e8777badfcd6 담기

     
      const { data } = await axios.get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${addressText}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
          },
        }
      );

      const { x, y } = data.documents[0];

      console.log(x, y);
    } catch (e) {}

    console.log(addressText);
  };

  return (
    <M.SearchBarContainer>
      <M.MagnifyImg onClick={handleGetLocation} />
      <M.SearchBar
        value={addressText}
        onChange={(e) => setAddressText(e.target.value)}
        placeholder="지역명을 입력해주세요."
      />
    </M.SearchBarContainer>
  );
};

export default SearchBar;
