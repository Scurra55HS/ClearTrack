import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
display: flex;
align-items: center;
`;

export const NavButton = styled(Link)`
position: relative;
margin-left: 15px;
color: white;
text-decoration: none;

  @media (max-width: 768px) {
    margin-left: 15px;
  }
`;

export const Button = styled.button`
background-color: white;
color: #000;
border: none;
padding: 8px 16px;
font-weight: bold;
border-radius: 50px;
cursor: pointer;
transition: background-color 0.3s, color 0.3s, border-color 0.3s;

&:hover {
  background-color: #000;
  color: white;
  border-color: #000;
}
`;

export const UserImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin-left: 15px;
cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const Span = styled.span`

margin-left: 15px;
`;