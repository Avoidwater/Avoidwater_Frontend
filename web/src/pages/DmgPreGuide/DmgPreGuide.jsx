import React from "react";
import * as M from "../../style/DmgPreGuide/DmgPreGuideStyle";
import Header from "../../components/Header/Header";

const DmgPreGuide = () => {
  return (
    <React.Fragment>
      <Header />
      <M.TitleTxt>침수 피해 예방 가이드</M.TitleTxt>
      <M.Pre1Container>
        <M.PreImg1 />
        <M.Pre1Txt>침수된 도로, 지하차도, 급류 하천에서는</M.Pre1Txt>
        <M.Pre1TxtBold>절대 진입하지 말고 우회하세요!</M.Pre1TxtBold>
      </M.Pre1Container>
      <M.Pre2Container>
        <M.PreImg2 />
        <M.TextContainer>
          <M.TextRow>
            <M.Pre2Txt>차량이 침수되고 있다면</M.Pre2Txt>
            <M.Pre2TxtBold>
              타이어 높이의 2/3 이상 잠기기 전 차량을 안전한 곳으로 옮기세요!
            </M.Pre2TxtBold>
          </M.TextRow>
          <M.Pre2TxtReg>
            * 불가능하면 미리 창문이나 선루프를 열어 둘 것
          </M.Pre2TxtReg>
        </M.TextContainer>
      </M.Pre2Container>
      <M.Pre3Container>
        <M.PreImg3 />
        <M.TextContainer>
          <M.TextRow>
            <M.Pre3Txt>침수되어 차량문이 안 열린다면</M.Pre3Txt>
            <M.Pre3TxtBold>
              단단한 물체로 창문 모서리를 깨고 탈출하세요!
            </M.Pre3TxtBold>
          </M.TextRow>
          <M.Pre3TxtReg>
            * 비상탈출망치, 목받침대 지지봉, 안전벨트 체결장치 등
          </M.Pre3TxtReg>
        </M.TextContainer>
      </M.Pre3Container>
      <M.Pre4Container>
        <M.PreImg4 />
        <M.TextContainer>
          <M.TextRow>
            <M.Pre4Txt>차량 창문을 깰 수 없다면</M.Pre4Txt>
            <M.Pre4TxtBold>
              당황하지 말고 차량 내부에 물이 찰 때까지 기다리세요!
            </M.Pre4TxtBold>
          </M.TextRow>
          <M.Pre4TxtReg>
            * 내•외부 수위차이가 30cm 이하가 되면 문이 쉽게 열림
          </M.Pre4TxtReg>
        </M.TextContainer>
      </M.Pre4Container>
      <M.Pre5Container>
        <M.PreImg5 />
        <M.TextContainer>
          <M.TextRow>
            <M.Pre5Txt>지하차도에서 침수 시</M.Pre5Txt>
            <M.Pre5TxtBold>
              탈출 후 물보다 높은 곳이나 몸을 지지할 곳을 찾고 119 연락 후
              구조를 기다리세요!
            </M.Pre5TxtBold>
          </M.TextRow>
          <M.Pre5TxtReg>
            * 침수되고 있는 지하주차장의 경우 급격히 물이 불어날 수 있어 절대
            접근하면 안됨
          </M.Pre5TxtReg>
        </M.TextContainer>
      </M.Pre5Container>
      <M.Pre6Container>
        <M.PreImg6 />
        <M.Pre6Txt>급류에 차량 고립 시</M.Pre6Txt>
        <M.Pre6TxtBold>
          급류가 밀려오는 반대쪽 차량문을 열고 탈출하세요!
        </M.Pre6TxtBold>
      </M.Pre6Container>
      <M.ReferTxt>출처: 행정안전부</M.ReferTxt>
    </React.Fragment>
  );
};

export default DmgPreGuide;
