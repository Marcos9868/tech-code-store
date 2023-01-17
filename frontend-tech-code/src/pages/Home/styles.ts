import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    
    img {
      align-self: center;
    }
  }
`;  