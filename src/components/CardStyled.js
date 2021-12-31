import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    90deg,
    hsla(211, 66%, 87%, 1) 0%,
    hsla(348, 67%, 88%, 1) 50%,
    hsla(272, 26%, 72%, 1) 100%
  );
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  width: 300px;
  padding: 1rem;
  margin: 2rem 0;
  background: linear-gradient(
    90deg,
    hsla(211, 96%, 62%, 1) 0%,
    hsla(295, 94%, 76%, 1) 100%
  );
`;
export const Header = styled.div`
  margin: 0.5rem 0;
  color: purple;
  button {
    width: 150px;
    padding: 4px;
    border: none;
    background: purple;
    color: white;
  }
`;
export const TaskBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  button {
    background: purple;
    color: white;
    border-radius: 0.3rem;
    border: none;
    padding: 4px;
  }
`;
export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  input {
    margin: 0.5rem 0;
  }
`;
export const TasksDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TaskDiv = styled.div`
  background: white;
  width: 280px;
  padding: 0.5rem 0.5rem 0 0.5rem;
  margin: 1rem;
  h4 {
    height: 0.1px;
    margin-top: 0;
  }
  p {
    margin-botton: 0px;
  }
`;
export const ButtonDel = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 0.3rem;
  border-radius: 0.3rem;
`;
