import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { IconButton, ImgButton } from "./IconButton";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const Menu = styled.div<{justify:string;}>`
    flex: 1;
    display: flex;
    justify-content: ${props => props.justify};
    align-items: center;
    gap: 1rem;
`;

function Navbar(props:{
    user: IUser|null;
    state: string;
    setState: Dispatch<SetStateAction<string>>;
    children?: React.ReactNode;
}) {
  return (
    <Nav>
        <Menu justify="start">
            <ImgButton src="darkmode.svg" alt="" />
        </Menu>
        <Menu justify="center">
            <IconButton onClick={e => props.setState("edit")} selected={props.state === "edit"} src="edit.svg">글쓰기</IconButton>
            <IconButton onClick={e => props.setState("explore")} selected={props.state === "explore"} src="explore.svg">Explore</IconButton>
            <IconButton onClick={e => props.setState("settings")} selected={props.state === "settings"} src="settings.svg">설정</IconButton>
        </Menu>
        <Menu justify="end">
            <IconButton selected={false} src="">로그인</IconButton>
            <IconButton selected={true} src="">회원가입</IconButton>
        </Menu>
    </Nav>
  );
}

export default Navbar;