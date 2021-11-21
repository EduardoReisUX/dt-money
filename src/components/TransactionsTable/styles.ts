import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  overflow-x: auto;

  @media (max-width: 840px) {
    margin-top: 3rem;
  }

  @media (max-width: 420px) {
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--text-title);
    }

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }
  }
`;
