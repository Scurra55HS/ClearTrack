import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #0D63AC;
  padding: 10px 20px;
  color: white;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    height: auto;
    position: fixed;
  }
`;

export const Title = styled.h1`
  margin-left: 12px;
  margin-right: 1200px;
  font-size: 1.5em;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
    margin-right: 0;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  margin-left: 23px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

