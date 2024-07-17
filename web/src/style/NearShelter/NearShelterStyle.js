import styled, { createGlobalStyle } from "styled-components";
import TableSrc from "../../assets/img/table.svg";

export const TitleTxt = styled.div`
  font-size: 30px;
  color: #464646;
  padding: 90px;
  margin-top: 10px;
`;

export const GlobalStyle = createGlobalStyle`
  table {
    width: 90%;
    border-collapse: collapse;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 100px;
    table-layout: fixed;
  }

  table th:nth-child(1){
    width: 20%;
  }

  table th:nth-child(2){
    width: 50%;
  }

  table th:nth-child(3){
    width: 10%;
  }

  table th:nth-child(4){
    width: 10%;
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
