import styled from "styled-components";

export const SearchInput = styled.input`
  border: none;
  background: rgba(245, 245, 245, 0.5);
  border-radius: 8px;
  inline-size: 30rem;
  block-size: 3rem;
  outline: none;
  font-size: 1.4rem;
  margin-bottom: 6rem;
  padding: 0.8rem 1rem;

  @media (max-width: 900px) {
    inline-size: 28rem;
    block-size: 2.6rem;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    inline-size: 14rem;
    block-size: 2rem;
    font-size: 1rem;
  }
`;
