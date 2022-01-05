import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
from {
  transform: translateY(-4px);
  opacity: 0;
} 
to {
transform: translateX(0);
  opacity: 1;
}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -6rem;

  @media (min-width: 421px) and (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.5rem;

    .highlight-background {
      grid-column: span 2;
    }
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 0.5rem;
  }

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    animation: ${FadeIn} 0.4s ease-in-out backwards calc(var(--order) * 0.2s);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;

      @media (max-width: 840px) {
        font-size: 1.5rem;
        line-height: 2.25rem;
      }

      @media (max-width: 420px) {
        font-size: 1.25rem;
        line-height: 1.875rem;
      }
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;

      @media (max-width: 420px) {
        //order: -1;

        strong {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
      }
    }
  }
`;
