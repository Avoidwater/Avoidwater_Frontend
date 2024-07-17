import styled from "styled-components";
import MagnifyImgSrc from "../../assets/img/waterMagnify.svg";

export const SearchBarContainer = styled.div`
  position: relative;
  width: 350px;
  margin-left: auto;
  margin-right: 90px;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #4567e3;
  border-radius: 8px;
  font-size: 16px;
  padding-left: 20px;
`;

export const MagnifyImg = styled.img.attrs({
  src: MagnifyImgSrc,
  alt: "MagnifyIcon",
})`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;