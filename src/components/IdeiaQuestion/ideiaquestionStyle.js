import styled from 'styled-components';

export const Alerta = styled.span`
  display: none;
  color: red;
`;

export const WrapperAlternativeAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const ContainerOptions = styled.div`
  display: flex;
  gap: 15px;
`

export const InputAnswer = styled.input`
  display: flex;
  margin-bottom: 15px;
`;

export const WrapperInputAnswer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputTextAnswer = styled.textarea`
  width: 550px;
  height: 200px;
  padding: 10px;
  resize: none;
`;

export const FormSubmit = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonSubmit = styled.button`
  width: 140px;
  height: 50px;
`;

export const ContainerContent = styled.section`
  width: 100%;
  display: flex;
  height: auto;
  transition: ease-in-out 1.5s all;
  animation: myAnim2 1.5s forwards;
  justify-content: center;
  padding-top: 20px;
`;

export const ContainerForm = styled.div`
  width: 800px;
  height: 65%;
  background-color: white;
  display: flex;
  border-radius: 20%;
  border-top-right-radius: 0px;
`;

export const InputDescribe = styled.input`
  width: 200px;
`

export const GravatarImage = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 200px;
  }
`;

export const Question = styled.div`
  background-color: white;
  padding-top: 10px;
`;

export const ContainerAnswers = styled.div`
  height: 68%;
  display: flex;
  flex-direction: column;
`;

export const UnselectedItems = styled.div`
  height: 185px;
  display: flex;
  flex-wrap: wrap;
`

export const SelectedItems = styled.div`
  height: 185px;
  background-color: #f4f4f4;
  display: flex;
  flex-wrap: wrap;
  border-radius: 30px;
`



export const WrapperAnswer = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 10px;
`;

export const Word = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: black;
  color: white;
  padding: 10px;
`;

export const Answer = styled.div`
  display: flex;
  width: 80%;
`

export const AnswerTitle = styled.div`
  width: 80%;
  padding-left: 5px;
  height: 45px;
  align-items: center;
  display: flex;
  background: white;
  margin-top: 20px;
  border: 2px solid black;

  &:hover {
    color: white;
    cursor: pointer;
    background-color: grey;
  }
`;
