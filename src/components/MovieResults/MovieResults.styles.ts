import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 30%;
  }
`;

export const StyledRow = styled.div`
  padding: 12px 8px;
  font-size: 14px;
  font-weight: 300;

  &:hover {
    cursor: pointer;
    background-color: #f4f5f7;
  }
`;

export const NoMovies = styled.p`
  margin-top: 24px;
`;
