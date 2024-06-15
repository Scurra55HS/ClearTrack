import NavBar from '../Nav/Nav';
import LogoImage from '../../img/ClearTrackLogo.png';
import { HeaderContainer, Logo, Title } from '../../Styles/Header';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImage} alt="Logo" />
      <Title>CLEARTRACK</Title>
      <NavBar />
    </HeaderContainer>
  );
};

export default Header;
