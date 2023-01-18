import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #222222;
  padding: 2.5rem;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;
  background

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  
  .product {
    position: relative;
    background: #181818;
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
      color: #f5f5f5
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0.875rem;
    }

    div {
      margin-top: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 2rem;
        font-weight: 500;
        color: #f5f5f5;
      }

      button {
        background: darkred;
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          stroke: white;
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
        background: red;
        }
      }
    }
  }
`;
