import styled from "styled-components";
import DbInsuranceSrc from "../../assets/img/dbInsurance.svg";
import KbInsuranceSrc from "../../assets/img/kbInsurance.svg";
import HanaInsuranceSrc from "../../assets/img/hanaInsurance.svg";
import SamInsuranceSrc from "../../assets/img/samInsurance.svg";

export const TitleTxt = styled.div`
  font-size: 30px;
  color: #464646;
  padding: 90px;
  margin-top: 20px;
`;

export const CanAward = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4567e3;
  margin-top: 50px;
  padding-left: 90px;
`;

export const First = styled.div`
  font-size: 24px;
  margin-top: 20px;
  padding-left: 90px;
`;

export const Second = styled.div`
  font-size: 24px;
  margin-top: 8px;
  padding-left: 90px;
`;

export const InsuranceTxt = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4567e3;
  margin-top: 60px;
  padding-left: 90px;
`;

export const DbContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DbInsurance = styled.img.attrs({
  src: DbInsuranceSrc,
  alt: "innsuranceImg",
})`
  margin-top: 35px;
  padding-left: 90px;
`;


export const DbTxt = styled.div`
  font-size: 24px;
  margin-left: 10px;
`;

export const DbLink = styled.a`
  font-size: 20px;
  color: #696969;
  margin-left: 10px;
`;


export const KbContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const KbInsurance = styled.img.attrs({
  src: KbInsuranceSrc,
  alt: "innsuranceImg",
})`
  margin-top: 35px;
  padding-left: 90px;
`;

export const TextContainer = styled.div`
margin-top: 30px;
margin-left: 20px;`;

export const KbTxt = styled.div`
  font-size: 24px;
  margin-left: 10px;
`;

export const KbLink = styled.a`
  font-size: 20px;
  color: #696969;
  margin-left: 10px;
`;

export const HanaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HanaInsurance = styled.img.attrs({
  src: HanaInsuranceSrc,
  alt: "innsuranceImg",
})`
  margin-top: 35px;
  padding-left: 90px;
`;

export const HanaTxt = styled.div`
  font-size: 24px;
  margin-left: 10px;
`;

export const HanaLink = styled.a`
  font-size: 20px;
  color: #696969;
  margin-left: 10px;
`;

export const SamContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 130px;
`;

export const SamInsurance = styled.img.attrs({
  src: SamInsuranceSrc,
  alt: "innsuranceImg",
})`
  margin-top: 35px;
  padding-left: 90px;
`;

export const SamTxt = styled.div`
  font-size: 24px;
  margin-left: 10px;
`;

export const SamLink = styled.a`
  font-size: 20px;
  color: #696969;
  margin-left: 10px;
  
`;
