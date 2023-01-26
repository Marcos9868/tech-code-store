import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 1rem 1rem;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    li {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      padding: 0 6rem;
      color: #f5f5f5;
    }
  }
`;