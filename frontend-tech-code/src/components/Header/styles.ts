import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  width: 100vw;
  height: 6rem;
  align-items: center;
  justify-content: center;

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