import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 12px;
  padding: 0 2rem;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.5rem;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  border-radius: 15px;
  padding: 2rem 3rem;
  justify-content: center;

  .product {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    background-color: #222222;
    gap: 1.75rem;
    padding: 1.75rem 1.5rem;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    align-items: center;

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
      color: #f5f5f5
    }

    img {
      object-fit: cover;
      width: 10rem;
      height: 10rem;
      align-self: center;
      justify-content: center;
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

      p {
        color: #f5f5f5;
        padding: 0 4rem;
      }
    }
  }
`;