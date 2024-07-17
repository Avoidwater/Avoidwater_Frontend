import styled from "styled-components";
import TableSrc from "../../assets/img/table.svg";

export const TitleTxt = styled.div`
  font-size: 30px;
  color: #464646;
  padding: 90px;
  margin-top: 10px;
`;

export const Table = styled.img.attrs({
  src: TableSrc,
  alt: "Table",
})`
display: flex;
margin: auto;
width: 1320px;
`;
