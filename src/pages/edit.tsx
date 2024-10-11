import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.4rem 1rem 1rem;
  flex: 1;
  box-sizing: content-box;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
  `;

const Frame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: calc(100% - 2rem);
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Area = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Edit(props:{
    user: IUser|null;
    children?: React.ReactNode;
}) {
  return (
    <Container>
      <Area></Area>
      <Frame></Frame>
    </Container>
  );
}

export default Edit;