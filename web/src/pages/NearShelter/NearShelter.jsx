import React, { useEffect, useState } from "react";
import * as M from "../../style/NearShelter/NearShelterStyle";
import Header from "../../components/Header/Header";
import AreaSearchBar from "../../components/SearchBar/AreaSearchBar";
import axios from "axios";

const NearShelter = () => {
  const [shelters, setShelters] = useState([]);
  const [filteredShelters, setFilteredShelters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis.data.go.kr/1741000/TsunamiShelter4/getTsunamiShelter4List",
          {
            params: {

              ServiceKey:
                "MLdNypvYyRkSnXR6+YQlNfn6kEXvNTIsVPfFJF0inq59YNe/9P6B+VgJgQuLUa/uZiRQjhcCfOf6OBWx3wu1nA==",
              type: "json",
              pageNo: "1",
              numOfRows: "70",
            },
          }
        );

        setShelters(response.data.TsunamiShelter[1].row);
        setFilteredShelters(response.data.TsunamiShelter[1].row);
        setLoading(false);
      } catch (error) {
        console.error("데이터 가져오는 중 오류 발생", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = shelters.filter((shelter) =>
      shelter.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredShelters(filtered);
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <React.Fragment>
      <Header />
      <M.TitleTxt>주변 대피소 위치 안내</M.TitleTxt>
      <AreaSearchBar onSearch={handleSearch} />
      <M.GlobalStyle />
      <div>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>주소</th>
              <th>전화번호</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {filteredShelters.map((shelter) => (
              <tr key={shelter.id} onClick={() => console.log(shelter)}>
                <td>{shelter.shel_nm}</td>
                <td>{shelter.address ? shelter.address : "-"}</td>
                <td>{shelter.tel != "null" ? shelter.tel : "-"}</td>
                <td>{shelter.remarks ? shelter.remarks : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default NearShelter;
