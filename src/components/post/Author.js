import { StyledAuthor } from "./styled-post";
import AuthorAvatar from "./Avatar";
import { LocationIcon } from "@/assets/icons";

const Author = ({ author }) => {
  return (
    <StyledAuthor>
      <AuthorAvatar src={author.avatar_url} alt={author.name} />
      <br />
      <h4 className="name">{author.name}</h4>
      <h4>{author.role}</h4>
      <h5>

        <LocationIcon /> {author.place}
      </h5>
    </StyledAuthor>
  );
};

export default Author;
