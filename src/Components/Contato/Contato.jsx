import { FriendlyTextB, FormB, FormGroupB, TitleFormB, LabelB, InputB, TextAreaB, ImgB, Img2B, Img3B,  ButtonB, GroupButtomB, MainB, EnglobB, IconsB, LinkB } from "../../Styles/Contato"
import logo from '../../img/ClearTrackLogo.png'
import atendente from '../../img/atendente.png'

const Contato = () => {
  return (
    <>
      <FriendlyTextB>
        Olá! Ficamos felizes em receber a sua mensagem. <br/> Preencha o formulário abaixo e entraremos em contato em breve.
      </FriendlyTextB>
    <MainB>
      <FormB>
        <FormGroupB>
          <TitleFormB> <ImgB src={logo}/> Entre em contato conosco</TitleFormB>
          <LabelB>Nome:</LabelB>
          <InputB type="text" id="name" placeholder="Digite seu nome" required/>
        </FormGroupB>
        <FormGroupB>
          <LabelB>Email:</LabelB>
          <InputB type="email" id="email" placeholder="Digite seu e-mail" required/>
        </FormGroupB>
        <FormGroupB>
          <LabelB>Mensagem:</LabelB>
          <TextAreaB id="message" placeholder="Digite sua mensagem" required></TextAreaB>
        </FormGroupB>
        <GroupButtomB>
          <ButtonB type="submit">ENVIAR</ButtonB>
        </GroupButtomB>
      </FormB>
      <EnglobB>
          <Img2B src={atendente}/>
        <IconsB>
          <LinkB href="https://www.instagram.com/ab.lins__/" target="blank"><Img3B src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-logo"/></LinkB>
          <LinkB href="https://www.google.com" target="blank"><Img3B src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/></LinkB>
          <LinkB href="https://wa.me/5582987194208" target="blank"><Img3B src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp-logo"/></LinkB>
          <LinkB href="https://github.com/Scurra55HS" target="blank"><Img3B src="https://img.icons8.com/fluency/48/github.png" alt="github-logo"/></LinkB>
        </IconsB>
      </EnglobB>
    </MainB>
    </>
  );
};

export default Contato;