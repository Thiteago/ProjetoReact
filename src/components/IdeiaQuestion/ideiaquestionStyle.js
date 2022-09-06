import styled from 'styled-components';

export const Alerta = styled.span`
  display: none;
  color: red;
`;

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
  height: 150px;
  transition: ease-in-out 1.5s all;
  animation: myAnim2 1.5s forwards;
  justify-content: center;
  padding-top: 20px;
`;

export const ContainerForm = styled.div`
  width: 800px;
  height: 400px;
  background-color: white;
  display: flex;
  border-radius: 20%;
  border-top-right-radius: 0px;
`;

export const GravatarImage = styled.div`
  display: flex;
  height: 100%;
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

export const WrapperAnswer = styled.div`
  width: 570px;
  display: flex;
  justify-content: flex-end;
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
