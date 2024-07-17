import React, { useState } from "react";
import * as M from "../../style/SearchBar/SearchBarStyle";
import axios from "axios";
import CONFIG from "../../config/config.json";

const SearchBar = ({ setData }) => {
  const [addressText, setAddressText] = useState("");
  const header = "df6ab16c358d9b2ad054e8777badfcd6";

  const handleGetLocationAndSubmit = async () => {
    try {
      const locationData = await axios.get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${addressText}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
          },
        }
      );

      const { x, y } = locationData.data.documents[0];

      // 위도 경도 보내주는 api 로직 구성
      const weatherData = await axios.get(
        `http://101.101.209.184:33334/weather?latitude=${y}&longitude=${x}&hour=${new Date().getHours()}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      setData(weatherData.data);
    } catch (e) {}
  };

  return (
    <M.SearchBarContainer>
      <M.MagnifyImg onClick={handleGetLocationAndSubmit} />
      <M.SearchBar
        value={addressText}
        onChange={(e) => setAddressText(e.target.value)}
        placeholder="지역명을 입력해주세요."
      />
    </M.SearchBarContainer>
  );
};

export default SearchBar;
