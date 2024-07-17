import React from "react";
import * as M from "../../style/DmgAward/DmgAwardStyle";
import Header from "../../components/Header/Header";

const DmgPreGuide = () => {
  return (
    <React.Fragment>
      <Header />
      <M.TitleTxt>침수 피해 보상 / 보험 정보</M.TitleTxt>
      <M.CanAward>보상 받을 수 있는 조건</M.CanAward>
      <M.First>1. ‘자차 보험' 가입자는 침수 피해 보상 가능</M.First>
      <M.Second>2. 침수 경고 무시했다 피해보면 보험료 할증</M.Second>
      <M.Second>3. 파도에 밀린 차량 운전자 부상도 보상 가능</M.Second>
      <M.Second>4. ‘풍수재특약' 가입한 경우 건물•부속물 보상</M.Second>
      <M.InsuranceTxt>차량 보험사 정보</M.InsuranceTxt>
      <M.DbContainer>
        <M.DbInsurance />
        <M.TextContainer>
          <M.DbTxt>DB 손해보험 다이렉트 자동차 보험</M.DbTxt>
          <M.DbLink
            href="https://www.directdb.co.kr/mainView.do?src=naver_br&kw=0AF09D&partner_code=C464&keyword=IFC5453&utm_source=naverbs_pc&utm_medium=cpc&utm_campaign=nhnad&utm_content=pcgroup_new_brand_240417_homelink"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.directdb.co.kr
          </M.DbLink>
        </M.TextContainer>
      </M.DbContainer>
      <M.KbContainer>
        <M.KbInsurance />
        <M.TextContainer>
          <M.KbTxt>Kb 손해보험 다이렉트 자동차 보험</M.KbTxt>
          <M.KbLink
            href="https://direct.kbinsure.co.kr/home/#/?pid=1090038&code=1894&joinMall=Y&utm_source=Naver&utm_medium=Naver_BS(메인)&utm_term={query}&utm_campaign=0422_1231_naver_bs&utm_content=10900381894"
            target="_blank"
            rel="noopener noreferrer"
          >
            direct.kbinsure.co.kr
          </M.KbLink>
        </M.TextContainer>
      </M.KbContainer>
      <M.HanaContainer>
        <M.HanaInsurance />
        <M.TextContainer>
          <M.HanaTxt>Hana 손해보험 다이렉트</M.HanaTxt>
          <M.HanaLink
            href="https://www.hanainsure.co.kr/?utm_source=naver_brand_pc&utm_medium=bs&utm_term=하나손해보험&utm_content=브랜드_메인하나로고_홈링크_240426"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.hanainsure.co.kr
          </M.HanaLink>
        </M.TextContainer>
      </M.HanaContainer>
      <M.SamContainer>
        <M.SamInsurance />
        <M.TextContainer>
          <M.SamTxt>삼성화재 다이렉트 자동차보험</M.SamTxt>
          <M.SamLink
            href="https://direct.samsungfire.com/?NaPm=ct%3Dlyqbat69%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3Dnull%7Chk%3Df3f0053c1ec4703e885217f5b97ef4f2f636d8e2"
            target="_blank"
            rel="noopener noreferrer"
          >
            direct.samsungfire.com
          </M.SamLink>
        </M.TextContainer>
      </M.SamContainer>
    </React.Fragment>
  );
};

export default DmgPreGuide;
