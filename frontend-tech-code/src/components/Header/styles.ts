import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  width: 100vw;
  height: 6rem;
  align-items: center;
  justify-content: space-around;

  button {
    background-color: #181818;
    color: #f5f5f5;
    border: none;
    outline: none;
    border-radius: 5px;
    width: 5rem;
    height: 3rem;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;

    img {
      align-self: center;
      width: 80%;
      height: 50px;
    }
  }
`;