import React, { useEffect, useState } from "react";
import * as M from "../../style/NearShelter/NearShelterStyle";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from 'axios';

const NearShelter = () => {
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis.data.go.kr/1741000/TsunamiShelter4/getTsunamiShelter4List",
          {
            params: {
              ServiceKey: 'MLdNypvYyRkSnXR6+YQlNfn6kEXvNTIsVPfFJF0inq59YNe/9P6B+VgJgQuLUa/uZiRQjhcCfOf6OBWx3wu1nA==',
              type: 'json',
              pageNo: '1',
              numOfRows: '10'
            }
          }
        );
        
        if (response.data.response && response.data.response.body) {
          setShelters(response.data.response.body.items.item || []);
        } else {
          setShelters([]);
        }
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
          <M.Table>
            <thead>
              <tr>
                <th>이름</th>
                <th>주소</th>
                <th>전화번호</th>
                <th>시도명</th>
                <th>시군구명</th>
                <th>비고</th>
              </tr>
            </thead>
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
          </M.Table>
        </div>
      )}
    </React.Fragment>
  );
};

export default NearShelter;
