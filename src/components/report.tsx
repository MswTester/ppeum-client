import styled from "styled-components";
import { IconButton } from "./IconButton";
import { useState } from "react";

const ReportContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
`

const ReportMain = styled.div<{$primary?:boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.4rem;
  padding: 1rem;
  border-radius: 1rem;
  color: ${props => props.$primary ? "#1C1B1F" : "#fff"};
  background-color: ${props => props.$primary ? "#fff" : "#1C1B1F"};
  width: 300px;
`;

const ReportTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  display: flex;
  justify-content: start;
  margin-bottom: 0.4rem;
`;

const Label = styled.label<{$primary?:boolean}>`
  box-sizing: content-box;
  width: calc(100% - 1rem);
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  color: ${props => props.$primary ? "#1C1B1F" : "#fff"};
  background-color: ${props => props.$primary ? "#fff" : "#1C1B1F"};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.$primary ? "#eee" : "#333"};
  }
`;

const ReportMenu = styled.div`
  margin-top: 0.4rem;
  width: calc(100%);
  display: flex;
  gap: 1rem;
  justify-content: end;
  align-items: center;
`;

const ErrorLine = styled.div`
    color: red;
    font-weight: bold;
    font-size: 0.8rem;
    width: calc(100% - 1rem);
    text-align: center;
`;

const LabelComp = (props:{
    id: string;
    content: string;
    setReason: React.Dispatch<React.SetStateAction<string>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return <Label htmlFor={props.id} $primary>
        <input type="radio" name="reason" id={props.id} value={props.id} onChange={e => {
            if(e.target.checked){
                props.setReason(e.target.value)
                props.setError("")
            } else {
                props.setReason("")
            }
        }} />
        <div>{props.content}</div>
    </Label>
}

const Report = (props:{
  user: IUser|null;
  setOnReport: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}) => {
  const [confirming, setConfirming] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  return (
    <ReportContainer>
      <ReportMain $primary>
        <ReportTitle>{confirming ? "밑 입력창에 \"신고\"를 직접 입력해주세요." : "신고 사유"}</ReportTitle>
        {
          confirming ? <>
          </>:<>
            <LabelComp id="sexual-content" content="성적인 내용" setReason={setReason} setError={setError} />
            <LabelComp id="use-hate-speech" content="혐오표현 사용" setReason={setReason} setError={setError} />
            <LabelComp id="wrong-information" content="잘못된 정보" setReason={setReason} setError={setError} />
            <LabelComp id="terrorism-promotion" content="테러 조장" setReason={setReason} setError={setError} />
            <LabelComp id="spam-content" content="스팸 콘텐츠" setReason={setReason} setError={setError} />
            <LabelComp id="other-legal-matters" content="기타 법적 문제" setReason={setReason} setError={setError} />
            <ErrorLine>{error}</ErrorLine>
            <ReportMenu>
              <IconButton src="" selected={false} onClick={e => props.setOnReport(false)}>닫기</IconButton>
              <IconButton src="" selected={true} onClick={e => {
                if(reason === ""){
                    setError("신고 사유를 선택해주세요.")
                } else {
                    setConfirming(true)
                }
              }}>신고 제출</IconButton>
            </ReportMenu>
          </>
        }
      </ReportMain>
    </ReportContainer>
  );
}

export default Report;