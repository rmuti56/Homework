import styled from "styled-components";

export const StyledPostList = styled.div`
  & .post-card:nth-child(2n + 2) {
    background-color: ${(props) => props.theme.color.fg};
  }
`;

export const StyledPostImage = styled.img`
  & {
    width: 100%;
    height: 150px;
    max-height: 150px;
    object-fit: cover;
  }
`;

export const StyledPostCard = styled.div`
  & {
    box-shadow: 0 6px 4px -2px rgba(0, 0, 0, 0.1) !important;
    margin: 20px 0;
    padding: 15px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
  & .time {
    color: gray;
    font-size: 14px;
  }
`;

export const StyledAuthorAvatar = styled.img`
  border-radius: 100%;
  width: 90px;
  height: 90px;
`;

export const StyledAuthor = styled.div`
  & {
    text-align: center;
  }
  & .name {
    color: ${(props) => props.theme.color.primary};
  }
`;
