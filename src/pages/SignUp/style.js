import styled from "styled-components";
export const InputComponent = styled.input`
    width: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.2);
  filter: blur(0.1px);
  margin-top: 25px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
`

export const LineComponent = styled.div`
    width: 260px;
    border-bottom: 1px solid gray;
`

