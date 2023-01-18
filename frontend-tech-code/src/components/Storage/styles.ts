import styled from "styled-components";

export const Container = styled.div`
  background-color: #222222;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  > section {
    flex: 1;
    width: 10%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.875rem;
    
    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;
    }
  }  
`;