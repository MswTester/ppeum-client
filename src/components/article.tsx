import styled from "styled-components";


const Container = styled.div<{src:string;}>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
    border-radius: 1rem;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    z-index: -1;
    color: #fff;
`;

const Article = (props:{
    children?: React.ReactNode;
    content: string;
    src: string;
}) => {
    return <Container src={props.src}>
        <h1>{props.content}</h1>
    </Container>
}

export default Article;