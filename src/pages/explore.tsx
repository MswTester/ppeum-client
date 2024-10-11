import { useState } from "react";
import styled from "styled-components";
import { IconButton } from "../components/IconButton";
import Report from "../components/report";
import { useOnce } from "../utils/hooks";
import Article from "../components/article";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  padding: 1rem;
  margin: 0 1rem 1rem;
  flex: 1;
  box-sizing: content-box;
  position: relative;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

function Explore(props:{
    user: IUser|null;
    children?: React.ReactNode;
}) {
  const [content, setContent] = useState<string>("👋 당신을 위한 사람들의 동기부여, PPEUM 입니다");
  const [onReport, setOnReport] = useState<boolean>(false);
  const [cacheList, setCacheList] = useState<[]>([]);

  const getContent = () => {

  }

  useOnce(() => {
    getContent();
  });

  return (
    <Container>
      <Article src="image.png" content={content}></Article>
      <Menu>
        <IconButton selected={true} src="share.svg" onClick={e => {
          navigator.share({
            title: "PPEUM",
            text: content,
            url: window.location.href
          });
        }}>공유</IconButton>
        <IconButton selected={false} src="content_copy.svg" onClick={e => {
          navigator.clipboard.writeText(content);
        }}>텍스트 복사</IconButton>
        <IconButton selected={false} src="emoji_flags.svg" onClick={e => setOnReport(!onReport)}>신고</IconButton>
      </Menu>
      {onReport && <Report user={props.user} setOnReport={setOnReport}></Report>}
    </Container>
  );
}

export default Explore;