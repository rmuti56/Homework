import styled from "styled-components";

export const StyledDivider = styled.div`
  & {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
  &.vertical {
    position: relative;
    top: -0.06em;
    display: inline-block;
    height: 0.9em;
    margin: 0 8px;
    height: 100%;
    vertical-align: middle;
    border-top: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.06);
  }
  &.horizontal {
    display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
    margin: 24px 0;
  }
`;
