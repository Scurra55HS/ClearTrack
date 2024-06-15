import perfil from '../../img/perfil.png';
import { NavBarContainer, NavButton, UserImage, Span } from '../../Styles/Nav';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavButton  to="/"></NavButton> 
      <NavButton  to="/PaginaInicial">Inicio</NavButton>
      <Span>|</Span>
      <NavButton  to="/sobre">Sobre</NavButton>
      <Span>|</Span>
      <NavButton  to="/contato">Contato</NavButton>
      <UserImage src={perfil} alt="User" />
    </NavBarContainer>
  );
};

export default NavBar;

