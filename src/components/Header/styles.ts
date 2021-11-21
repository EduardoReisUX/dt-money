import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.header`
  max-width: 1120px;
  margin: auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 840px) {
    padding: 2rem 1rem 8rem;
  }

  @media (max-width: 420px) {
    flex-direction: column;

    button {
      margin-top: 3rem;
      margin-bottom: -3rem;
      width: 100%;
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
