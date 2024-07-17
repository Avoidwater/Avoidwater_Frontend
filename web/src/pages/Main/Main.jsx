import React, { useEffect, useState } from "react";
import map from "../../assets/img/map.png";
import banner from "../../assets/img/mainbanner.svg";
import car from "../../assets/img/car.png";
import arrow from "../../assets/img/arrow.png";
import locIcon from "../../assets/img/locIcon.png";
import { Map } from "react-kakao-maps-sdk";
import * as M from "../../style/Main/Main";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";


function Main() {
  const [state, setState] = useState({
    center: { lat: 35.8714354, lng: 128.601445 },
    level: 11,
  });
  const [searchAddress, setSearchAddress] = useState("");

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      SearchMap();
    }
  }, [searchAddress]);

  const SearchMap = () => {
    if (!window.kakao || !window.kakao.maps) {
      console.error("Kakao Maps API is not loaded");
      return;
    }
    const geocoder = new window.kakao.maps.services.Geocoder();
    let callback = function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setState({
          center: { lat: newSearch.y, lng: newSearch.x },
        });
      }
    };
    geocoder.addressSearch(`${searchAddress}`, callback);
  };

  const navigate = useNavigate();

  const handleBannerClick = () => {
    window.location.href = 'https://direct.samsungfire.com/claim/PP040403_001.html';
  };


  return (
    <>
      <Header />
      <M.searchDiv>
        <SearchBar />
      </M.searchDiv>
      <M.GlobalStyle />

      <Map
        center={state.center}
        level={state.level}
        style={{
          width: "625px",
          height: "500px",
          position: "absolute",
          border: "1px solid #D2D2D2",
          marginLeft: "185px",
          marginTop: "72px",
        }}>
            
        </Map>

      <M.banner
        src={banner}
        onClick={handleBannerClick}      />
      <M.guideButton>지역별 강수량</M.guideButton>
      <M.nearShelter>
        <M.shelterGuide>주변 대피소 위치 안내</M.shelterGuide>
        <M.line />
        <M.shelterDiv>
          <M.data1>울산교육연수연 지진해일 긴급대피장소</M.data1>
          <M.locIcon1 src={locIcon} />
          <M.semiData1>울산 북구 정자동</M.semiData1>
          <M.locIcon2 src={locIcon} />
          <M.data2>망양정옛터 지진해일 긴급대피장소</M.data2>
          <M.semiData2>울진 기성면</M.semiData2>
          <M.data3>화진휴게소 입구 지진해일 긴급대피장소</M.data3>
          <M.locIcon3 src={locIcon} />
          <M.semiData3>포항 북구 송라면</M.semiData3>
        </M.shelterDiv>
      </M.nearShelter>
      <M.subcarDiv>
        <M.subcarCon>침수차 확인</M.subcarCon>
        <M.carIcon src={car}></M.carIcon>
        <M.discarGuide>침수차량 구별법 확인하러 가기</M.discarGuide>
        <M.arrow src={arrow} onClick={() => navigate("/submergedcar")}></M.arrow>
      </M.subcarDiv>
    </>
  );
}

export default Main;
