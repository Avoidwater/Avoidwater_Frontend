import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body {
    background-color: #F7F7F7;
}
`;

export const searchDiv = styled.div`
  width: 350px;
  height: 50px;
  position: absolute;
  margin-left: 445px;
  margin-top: 90px;
  z-index: 2;
`;

export const map = styled.img`
  position: absolute;
  width: 625px;
  height: 500px;
  margin-left: 185px;
  margin-top: 72px;
`;

export const seeAll = styled.div`
  position: absolute;
  font-family: pretendard-medium;
  margin-left: 355px;
  margin-top: 40px;
  text-decoration: underline;
  cursor: pointer;
`;

export const banner = styled.img`
  position: absolute;
  margin-left: 185px;
  margin-top: 590px;
  cursor: pointer;
  padding-bottom: 80px;
`;

export const subcarDiv = styled.div`
  position: absolute;
  width: 450px;
  height: 188px;
  border: 1px #d2d2d2 solid;
  margin-left: 835px;
  margin-top: 382px;
`;

export const guideButton = styled.div`
  position: absolute;
  width: 160px;
  height: 50px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  color: #6f6f6f;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  padding-left: 22.5px;
  padding-top: 12.5px;
  margin-left: 200px;
  margin-top: 90px;
  z-index: 2;
`;

export const nearShelter = styled.div`
  position: absolute;
  margin-left: 835px;
  margin-top: 72px;
  width: 450px;
  height: 290px;
  border: 1px #d2d2d2 solid;
`;

export const subcarCon = styled.div`
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 500;
  margin-left: 47px;
  margin-top: 28px;
  color: #464646;
`;

export const carIcon = styled.img`
  position: absolute;
  margin-top: 19px;
  margin-left: 29px;
`;

export const discarGuide = styled.div`
  position: absolute;
  width: 170px;
  margin-left: 200px;
  margin-top: 30px;
  color: #6f6f6f;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 500;
`;

export const arrow = styled.img`
  position: absolute;
  margin-left: 380px;
  margin-top: 45px;
  cursor: pointer;
`;

export const shelterGuide = styled.div`
  color: #464646;
  font-size: 24px;
  font-family: Pretendard;
  font-weight: 500;
  margin-left: 47px;
  margin-top: 28px;
`;

export const line = styled.div`
  position: absolute;
  width: 400px;
  height: 4.37px;
  background-color: black;
  margin-left: 25px;
  margin-top: 15px;
`;

export const shelterDiv = styled.div`
  position: absolute;
  background-color: #f1f1f1;
  width: 400px;
  height: 196.63px;
  margin-top: 20px;
  margin-left: 25px;
`;

export const data1 = styled.div`
  position: absolute;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 15px;
`;

export const locIcon1 = styled.img`
  position: absolute;
  margin-left: 20px;
  margin-top: 43px;
`;

export const semiData1 = styled.div`
  position: absolute;
  color: #696969;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  margin-left: 32px;
  margin-top: 38px;
`;

export const data2 = styled.div`
  position: absolute;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 70px;
`;

export const semiData2 = styled.div`
  position: absolute;
  color: #696969;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  margin-left: 32px;
  margin-top: 93px;
`;

export const locIcon2 = styled.img`
  position: absolute;
  margin-left: 20px;
  margin-top: 98px;
`;

export const semiData3 = styled.div`
  position: absolute;
  color: #696969;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  margin-left: 32px;
  margin-top: 148px;
`;

export const data3 = styled.div`
  position: absolute;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 125px;
`;

export const locIcon3 = styled.img`
  position: absolute;
  margin-left: 20px;
  margin-top: 153px;
`;
