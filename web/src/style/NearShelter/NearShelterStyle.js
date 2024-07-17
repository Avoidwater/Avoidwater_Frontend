import styled, { createGlobalStyle } from "styled-components";
import TableSrc from "../../assets/img/table.svg";

export const TitleTxt = styled.div`
  font-size: 30px;
  color: #464646;
  padding: 80px;
  margin-top: 20px;
`;

export const Table = styled.img.attrs({
  src: TableSrc,
  alt: "Table",
})`
  display: flex;
  margin: auto;
  width: 1320px;
`;

export const GlobalStyle = createGlobalStyle`
  table {
    width: 90%;
    border-collapse: collapse;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 100px;
  }

  th, td {
    border: 1px solid #D2D2D2;
    padding: 8px;
    text-align: left;
  }

  thead {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }
`;