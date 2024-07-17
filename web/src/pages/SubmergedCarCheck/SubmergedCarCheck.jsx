import React from "react";
import * as M from "../../style/SubmergedCar/SubmergedCar";
import Header from "../../components/Header/Header";

const SubmergedCar = () => {
  return (
    <React.Fragment>
      <Header />
      <M.TitleTxt>침수 차량 확인</M.TitleTxt>

      <M.Jre1Title>내부점검</M.Jre1Title>
      <M.Jre1Text>
        침수된 차량의 경우에는 습기와 물 냄새가 강하게 날 수 있습니다. 특히
        발판(매트)이나 시트, 송풍구 내부 등에서 이상
        <br />한 냄새가 난다면 침수차량인지 의심해 보는 것이 좋습니다. 또한 물에
        젖었다가 마른 흔적이 있는지 차량 내부를 꼼꼼
        <br />
        하게 확인하는 것이 좋으며, 특히 차량 도어 안쪽과 바닥판을 주의 깊게
        살펴보는 것이 좋습니다.
      </M.Jre1Text>
      <M.Jre2Title>엔진 오일과 냉각수 확인</M.Jre2Title>
      <M.Jre2Text>
        엔진오일이 물과 섞이거나 냉각수가 물로 오염되어 흐려진 경우가 있습니다.
        엔진룸과 엔진오일 캡을 확인하여 물기
        <br />를 확인하는 것만으로도 침수차량인지 구분할 수 있는 단서를 찾을 수
        있다고 합니다.
      </M.Jre2Text>
    </React.Fragment>
  );
};

export default SubmergedCar;
