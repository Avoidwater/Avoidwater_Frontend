import * as M from '../../style/Header/HeaderStyle';
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/main");
  };

  return (
    <M.HeaderContainer>
      <M.Logo onClick={gotoMain}/>
      <M.NearShelter to="/nearshelter">주변 대피소</M.NearShelter>
      <M.FloodingCar to="/submergedcar">침수 차량</M.FloodingCar>
      <M.DmgPreGuide to="/dmgpreguide">피해 예방 가이드</M.DmgPreGuide>
      <M.DmgAward to="/dmgaward">침수 피해 보상</M.DmgAward>
    </M.HeaderContainer>
  );
};

export default Header;
