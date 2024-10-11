import styled from "styled-components";

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
    user-select: none;
    `;

const ButtonContainer = styled.button<{selected?:boolean;}>`
    padding: 0.4rem 0.7rem;
    border-radius: 1.5rem;
    border: none;
    color: #1C1B1F;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${props => props.selected ? "#A2FF2D" : "#fff"};
    user-select: none;
    &:hover {
        background-color: ${props => props.selected ? "#A2EF2D" : "#eeeeee"};
    }
`;

export const ImgButton = styled.img`
    cursor: pointer;
`;

export const IconButton = (props:{
    src:string;
    children?: React.ReactNode;
    selected: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
    return <ButtonContainer onClick={props.onClick} selected={props.selected}>
        <img src={props.src} alt={props.src} />
        <Button>{props.children}</Button>
    </ButtonContainer>
}