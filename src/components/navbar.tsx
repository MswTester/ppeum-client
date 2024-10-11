import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Button = styled.button`
    cursor: pointer;
    &:hover, &:active, &:focus {
        border: 0;
        outline: 0;
    }
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

const ButtonContainer = styled.button<{selected?:boolean;}>`
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    border: none;
    color: #1C1B1F;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${props => props.selected ? "#A2FF2D" : "#fff"};
    &:hover {
        background-color: #eee;
    }
`;

const IconButton = (props:{
    src:string;
    children?: React.ReactNode;
    bgColor?: string;
}) => {
    return <ButtonContainer selected={props.selected}>
        <img src={props.src} alt={props.src} />
        <Button>{props.children}</Button>
    </ButtonContainer>
}

function Navbar(props:{
    user: IUser|null;
    state: string;
    children?: React.ReactNode;
}) {
  return (
    <Nav>
        <img src="" alt="" />
        <Menu>
            <IconButton src="edit.svg">글쓰기</IconButton>
            <IconButton src="explore.svg">Explore</IconButton>
            <IconButton src="settings.svg">설정</IconButton>
        </Menu>
        <Menu></Menu>
    </Nav>
  );
}

export default Navbar;