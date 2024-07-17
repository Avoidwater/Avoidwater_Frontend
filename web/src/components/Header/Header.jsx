import * as M from "../../style/Header/HeaderStyle";

const Header = () => {
  return (
    <M.HeaderContainer>
      <M.Logo />
      <M.NearShelter to="/nearshelter">주변 대피소</M.NearShelter>
      <M.FloodingCar to="/floodingcar">침수 차량</M.FloodingCar>
      <M.DmgPreGuide to="/dmgpreguide">피해 예방 가이드</M.DmgPreGuide>
      <M.DmgAward to="/dmgaward">침수 피해 보상</M.DmgAward>
    </M.HeaderContainer>
  );
};

export default Header;
