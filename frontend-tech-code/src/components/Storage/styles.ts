import styled from "styled-components";

export const Container = styled.div`
  background-color: #222222;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  > section {
    display: grid
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 2rem 1.875rem;
    border-radius: 12px;
    
    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;
    }
  }  
`;