import styled from "styled-components";

export const StyledButton = styled.button`
  & {
    padding: 4px 15px;
    background-color: ${(props) => props.theme.color.white};
    border: 2px solid ${(props) => props.theme.color.white};
    min-height: 30px;
    min-width: 30px;
  }

  &.shape-circle {
    border-radius: 50% !important;
    min-width: 32px;
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    border-radius: 50%;
  }

  &.shape-round {
    border-radius: 40px;
  }

  &.btn-primary {
    color: ${(props) => props.theme.color.white};
    border: 2px solid ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.primary};
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.color.primary};
  }
`;
