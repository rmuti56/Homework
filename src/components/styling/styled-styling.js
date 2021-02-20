import styled from "styled-components";

export const StyledStyling = styled.div`
  & {
    background-color: #f7f7f7;
    padding: 10%;
  }
  & .ratio-1 {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    position: relative;
  }

  & .box-1 {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    border-radius: 5%;
    background: #67c3e9;
    padding: 15px;
    z-index: 1;
    display: flex;
    box-shadow: 40px 50px 50px -40px gray;
  }
  & .box-2 {
    width: 100%;
    border-radius: 5%;
    background: #fff;
    padding: 15px;
    z-index: 2;
    display: flex;
  }
  & .box-3 {
    width: 100%;
    border-radius: 5%;
    background: linear-gradient(to bottom, #6ac4e8, #9ad4d2);
    padding: 10px;
    z-index: 3;
    display: flex;
    padding: 10%;
    position: relative;
  }

  & .box-4 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    background-color: #9bd5e4;
    width: 40%;
    height: 40%;
  }

  & .mask {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    z-index: 6;
  }

  & .mask .text-box {
    width: 45%;
    background: #fff;
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: inset 4px 4px 10px gray;
  }
  & .mask .text-box span {
    font-size: 10vw;
    color: #67c3e9;
    text-shadow: -2px 2px 1px gray;
  }
`;
