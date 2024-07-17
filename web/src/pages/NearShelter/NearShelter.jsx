import React, { useEffect, useState } from "react";
import * as M from "../../style/NearShelter/NearShelterStyle";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

const NearShelter = () => {
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apis.data.go.kr/1741000/TsunamiShelter4/getTsunamiShelter4List"
        );
        if (!response.ok) {
          throw new Error("네트워크 응답이 좋지 않음");
        }
        const jsonData = await response.json();
        setShelters(jsonData.row ? [jsonData.row] : []);
        setLoading(false);
      } catch (error) {
        console.error("데이터 가져오는 중 오류 발생", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <M.TitleTxt>주변 대피소 위치 안내</M.TitleTxt>
      <SearchBar />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2></h2>
          <M.Table />
          <ul>
            {shelters.map((shelter) => (
              <li key={shelter.id}>
                <p>이름: {shelter.shel_nm}</p>
                <p>주소: {shelter.address}</p>
                <p>전화번호: {shelter.tel}</p>
              </li>
            ))}
          </ul>
          <table>
            {/* <thead>
              <tr>
                <th>이름</th>
                <th>주소</th>
                <th>전화번호</th>
              </tr>
            </thead> */}
            <tbody>
              {shelters.map((shelter) => (
                <tr key={shelter.id}>
                  <td>{shelter.shel_nm}</td>
                  <td>{shelter.address}</td>
                  <td>{shelter.tel}</td>
                  <td>{shelter.sido_name}</td>
                  <td>{shelter.sigungu_name}</td>
                  <td>{shelter.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </React.Fragment>
  );
};

export default NearShelter;
