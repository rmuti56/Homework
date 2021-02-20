import { Divider } from "@/components/common";
import { useState } from "react";
import { Col, Row } from "react-grid";
import { useMediaQuery } from "react-responsive";
import Author from "./Author";
import { StyledPostCard, StyledPostImage } from "./styled-post";
import TimeAgo from "javascript-time-ago";
import { ClockIcon } from "@/assets/icons";

const PostCard = ({ post }) => {
  const timeAgo = new TimeAgo("en-US");

  const [imageUrl, setImageUrl] = useState(post.image_url);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const handleError = () => {
    setImageUrl("https://source.unsplash.com/random");
  };
  return (
    <StyledPostCard className="post-card">
      <Row
        style={{
          justifyContent: "space-between",
        }}
        noGutters
      >
        <Col
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={2}
          className={isMobile && "text-center"}
        >
          <StyledPostImage src={imageUrl} onError={handleError} />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={7}
          className={isMobile && "text-center"}
        >
          <h3 className="mt-0">{post.title}</h3>
          <p>{post.body}</p>
          <span className="time">
            <span style={{ verticalAlign: "middle" }}>
              <ClockIcon />
            </span>{" "}
            {timeAgo.format(new Date(post.created_at))}
          </span>
        </Col>
        {!isMobile && (
          <Col xs={0} sm={0} md={"auto"} lg="auto">
            <Divider type="vertical" />
          </Col>
        )}
        <Col
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={2}
          className={isMobile && "text-center mt-10"}
        >
          <Author author={post.author} />
        </Col>
      </Row>
    </StyledPostCard>
  );
};

export default PostCard;
