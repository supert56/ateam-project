import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 18px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-right: 0;
  border-radius: 4px 0px 0px 4px;
  width: 70%;
  max-width: 300px;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  padding: 18px 20px;
  font-size: 16px;
  background-color: #1b1b1b;
  color: #fff;
  border: 1px solid #1b1b1b;
  letter-spacing: 0.05em;
  font-weight: 400;
  border-radius: 0 4px 4px 0;

  &:hover {
    cursor: pointer;
  }
`;

export const Tip = styled.p`
  font-size: 13px;
  color: #bbb;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid #eee;
  margin-bottom: 40px;
`;

export const StyledForm = styled.form`
  margin-bottom: 8px;
`;
