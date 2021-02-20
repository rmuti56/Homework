import styled from "styled-components";

export const StyledLayout = styled.div`
  & {
    ul.horizontal {
      list-style-type: none;
      margin: 0;
      padding: 0 20px;
      overflow: hidden;
      background-color: #f1f1f1;
      position: sticky;
      top: 0;
      z-index: 2000;
    }

    ul.horizontal li {
      float: left;
    }

    ul.horizontal li a {
      display: inline-block;
      color: rgba(0, 0, 0, 0.8);
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    ul.horizontal li a.active {
      background-color: ${(props) => props.theme.color.primary};
      color: ${(props) => props.theme.color.white};
    }
  }
`;
