import React from "react";
import * as M from "../../style/SubmergedCar/SubmergedCar";
import Header from "../../components/Header/Header";

const SubmergedCar = () => {
  return (
    <React.Fragment>
      <Header />
      <M.TitleTxt>침수 차량 확인</M.TitleTxt>
      <M.Jre1Container>
        <M.Jre1Title>내부점검</M.Jre1Title>
        <M.Jre1Text>
          침수된 차량의 경우에는 습기와 물 냄새가 강하게 날 수 있습니다. 특히
          발판(매트)이나 시트, 송풍구 내부 등에서 이상
          <br />한 냄새가 난다면 침수차량인지 의심해 보는 것이 좋습니다. 또한
          물에 젖었다가 마른 흔적이 있는지 차량 내부를 꼼꼼
          <br />
          하게 확인하는 것이 좋으며, 특히 차량 도어 안쪽과 바닥판을 주의 깊게
          살펴보는 것이 좋습니다.
        </M.Jre1Text>
      </M.Jre1Container>
      <M.Jre2Container>
        <M.Jre2Title>엔진 오일과 냉각수 확인</M.Jre2Title>
        <M.Jre2Text>
          엔진오일이 물과 섞이거나 냉각수가 물로 오염되어 흐려진 경우가
          있습니다. 엔진룸과 엔진오일 캡을 확인하여 물기
          <br />를 확인하는 것만으로도 침수차량인지 구분할 수 있는 단서를 찾을
          수 있다고 합니다.
        </M.Jre2Text>
      </M.Jre2Container>
      <M.Jre3Container>
        <M.Jre3Title>전기 시스템 점검</M.Jre3Title>
        <M.Jre3Text>
          침수된 차량은 전기 시스템에 이상이 발생할 수밖에 없습니다. 브레이크
          램프, 헤드라이트, 윈도우 스위치, 에어컨 등 <br />
          차량의 전기 기능을 모두 점검한 후 이상이 있다면 침수차량임을 의심해
          보는 것이 좋습니다.
        </M.Jre3Text>
      </M.Jre3Container>
      <M.Jre4Container>
        <M.Jre4Title>차량 히스토리 확인</M.Jre4Title>
        <M.Jre4Text>
          중고차량의 히스토리를 확인하는 것이 좋습니다. 침수차에 대한 우려가
          나오는 시점을 기준으로 차량의 히스토리를 비<br />
          교해 본다면 차량이 침수피해를 입었는지 아닌지를 구분해 볼 수 있는
          단서가 되기 때문입니다.
        </M.Jre4Text>
      </M.Jre4Container>
      <M.JreList>
        <blockquote>
            <ol>
            <li>운전석과 조수석의 안전벨트를 끝까지 당겨서 이상유무를 확인했나요?</li>
            <li>차량의 문을 열고 문에 달린 고무 패킹을 뜯어서 확인했나요?</li>
            <li>트렁크 안쪽 커버를 열어 침수 흔적을 확인했나요?</li>
            <li>에어컨 필터와 시가잭에 이상은 없는지 확인했나요?</li>
            <li>퓨즈박스 안 전선들은 이상이 없는지 확인했나요?</li>
            <li>연료주입구 안쪽에 이물질은 없는지 확인했나요?</li>
            <li>히스토리 사이트에서 차량번호와 차대번호로 침수여부를 확인했나요?</li>
            <li>차량 구매 시 침수에 대한 특약사항이 있는지 확인했나요?</li>
            </ol>
        </blockquote>
      </M.JreList>
    </React.Fragment>
  );
};

export default SubmergedCar;
