import styled from "styled-components";
import logoIconSrc from "../../assets/img/waterLogo.svg";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: #4567e3;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 10px;
`;

export const Logo = styled.img.attrs({
  src: logoIconSrc,
  alt: "logoIcon",
})`
  margin-left: 95px;
`;

export const NearShelter = styled(NavLink)`
  font-size: 24px;
  color: white;
  margin-left: 160px;
  text-decoration: none;
`;

export const FloodingCar = styled(NavLink)`
  font-size: 24px;
  color: white;
  margin-left: 55px;
  text-decoration: none;
`;

export const DmgPreGuide = styled(NavLink)`
  font-size: 24px;
  color: white;
  margin-left: 55px;
  text-decoration: none;
`;

export const DmgAward = styled(NavLink)`
  font-size: 24px;
  color: white;
  margin-left: 55px;
  text-decoration: none;
`;
