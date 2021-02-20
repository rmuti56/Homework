import { useState } from "react";
import { StyledAuthorAvatar } from "./styled-post";

const AuthorAvatar = ({ src, alt }) => {
  const [imageUrl,setImageUrl] = useState(src)
  const handleError = ()=>{
    setImageUrl('https://source.unsplash.com/random')
  }
  return <StyledAuthorAvatar src={imageUrl} alt={alt} onError={handleError} />;
};

export default AuthorAvatar;
