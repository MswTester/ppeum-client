import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  padding: 4rem 1rem;
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

const OptionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const OptionSelect = styled.select`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1.4rem;
  border: none;
  background-color: #eee;
  color: #1C1B1F;
  font-weight: bold;
  cursor: pointer;
  &:hover {
      background-color: #ddd;
  }
`;

const OptionCheckbox = styled.input.attrs({type: "checkbox"})`
  appearance: none;
  position: relative;
  border: max(2px, 0.1em) solid gray;
  border-radius: 1.25em;
  width: 2.25em;
  height: 1.25em;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  ::before {
    content: "";
    position: absolute;
    top: -0.03em;
    left: 0;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: gray;
    transition: background-color 0.3s ease, left 0.3s ease;
  }
  :checked{
    background-color: #A2EF2D;
    border-color: #A2EF2D;
  }
  :checked::before {
    background-color: white;
    left: 1em;
  }
  :disabled {
    border-color: lightgray;
    opacity: 0.5;
  }
  :disabled:before {background-color: lightgray;}
  :focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: max(2px, 0.1em) solid skyblue;
  }
`;

const OptionSelectComp = (props:{
    title: string;
    list: {[key:string]:string};
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  return <OptionContainer>
    <OptionTitle>{props.title}</OptionTitle>
    <OptionSelect value={props.value} onChange={props.onChange}>
      {Object.keys(props.list).map((key) => {
        return <option value={key}>{props.list[key]}</option>
      })}
    </OptionSelect>
  </OptionContainer>
}

const OptionCheckboxComp = (props:{
  title: string;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return <OptionContainer>
    <OptionTitle>{props.title}</OptionTitle>
    <OptionCheckbox type="checkbox" checked={props.checked} onChange={props.onChange} />
  </OptionContainer>
}

function Settings(props:{
  user: IUser|null;
  children?: React.ReactNode;
}) {
  const [lang, setLang] = useState("ko");
  const [filtering, setFiltering] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const [useEditor, setUseEditor] = useState(false);

  return (
    <Container>
      <OptionSelectComp title="언어설정" list={{
        "en":"영어 (English)",
        "ko":"한국어 (Korean)"
      }} value={lang} onChange={e => setLang(e.target.value)} />
      <OptionCheckboxComp title="민감한 내용 필터링" checked={filtering} onChange={e => setFiltering(e.target.checked)} />
      <OptionCheckboxComp title="다크모드" checked={darkmode} onChange={e => setDarkmode(e.target.checked)} />
      <OptionCheckboxComp title="에디터픽 사용" checked={useEditor} onChange={e => setUseEditor(e.target.checked)} />
    </Container>
  );
}

export default Settings;