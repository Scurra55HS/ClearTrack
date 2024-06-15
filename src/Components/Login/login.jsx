// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormM, FormGroupM, TitleFormM, LabelM, InputM, ButtonM, AindaM, MainM, EnglobM, Englob2M, ImgM, ImgHomemM, DescricaoLogin } from "../../Styles/login";
import logo from '../../img/ClearTrackLogo.png';
import funcionario from '../../img/foto.png'

const LoginCadastro = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevStado => ({
      ...prevStado,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      if (!isLogin && !formData.username) {
        alert('Por favor, insira um nome de usuário válido.');
        return;
      }
      console.log(formData);
      navigate('/PaginaInicial');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <MainM>
        <FormM onSubmit={handleSubmit}>
          <TitleFormM> <ImgM src={logo}/> {isLogin ? 'Faça Login na ClearTrack' : 'Cadastre-se na ClearTrack'}</TitleFormM>
          {!isLogin && (
            <FormGroupM>
              <LabelM>Nome de usuário:</LabelM>
              <InputM
                type="text"
                id="username"
                placeholder="Digite seu nome de usuário"
                value={formData.username}
                onChange={handleInputChange}
                required={!isLogin}
              />
            </FormGroupM>
          )}
          <FormGroupM>
            <LabelM>Email:</LabelM>
            <InputM
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </FormGroupM>
          <FormGroupM>
            <LabelM>Senha:</LabelM>
            <InputM
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </FormGroupM>
        <EnglobM>
          <ButtonM type="submit">{isLogin ? 'LOGIN' : 'CADASTRAR'}</ButtonM>
          <AindaM type="button" onClick={toggleForm}>
            {isLogin ? 'Não possui conta? Clique aqui' : 'Já é cadastrado? Faça login'}
          </AindaM>
        </EnglobM>
        </FormM>
        <Englob2M>
        <ImgHomemM src={funcionario}/>
        <DescricaoLogin>Com o ClearTrack, você pode registrar e acompanhar a limpeza dos banheiros em tempo real, garantindo uma gestão eficiente e a pontualidade nas tarefas.</DescricaoLogin>
        </Englob2M>
      </MainM>
    </>
  );
};

export default LoginCadastro;
