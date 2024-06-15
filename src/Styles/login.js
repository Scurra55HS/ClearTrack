import styled from 'styled-components';

export const FormM = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 35px;

  @media (max-width: 768px) {
    margin-top: 200px;
    padding: 15px;
    max-width: 90%;
  }
`;

export const FormGroupM = styled.div`
`;

export const GroupButtomM = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const MainM = styled.div`
  display: flex;
  margin-top: 100px;
  margin-left: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const EnglobM = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const Englob2M = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-right: 150px;

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 70px;
  }
`;

export const IconsM = styled.div`
`;

export const ImgHomemM = styled.img`
  margin-top: 80px;
  margin-right: 200px;
  width: 400px;
  height: 350px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const ImgM = styled.img`
  width: 30px;

  @media (max-width: 768px) {
    width: 25px;
  }
`;

export const TitleFormM = styled.h1`
  margin-bottom: 50px;
  text-align: center;
  color: #01223E;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    font-size: 1.5rem;
  }
`;

export const DescricaoLogin = styled.h1`
  color: #01223E;
  width: 400px;
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;

  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 1.0rem;
    font-weight: 600;
  }
`;

export const LabelM = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color: #01223E;

  @media (max-width: 768px) {
    margin-bottom: 6px;
    font-size: 0.9rem;
  }
`;

export const InputM = styled.input`
  width: 100%;
  background-color: #0D63AC;
  color: aliceblue;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid var(--medium-blue);
  border-radius: 20px;
  border-top-left-radius: 0px;
  transition: border-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 12px;
  }
`;

export const TextAreaM = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid var(--medium-blue);
  border-radius: 20px;
  border-top-left-radius: 0px;
  transition: border-color 0.3s ease;
  resize: vertical;
  background-color: #0D63AC;
  color: aliceblue;

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 12px;
  }
`;

export const ButtonM = styled.button`
  background-color: #003C70;
  color: #ffffff;
  border-radius: 20px;
  width: 110px;
  padding: 10px;
  font-weight: bolder;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90px;
    padding: 8px;
  }
`;
export const AindaM = styled.button`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  color: #01223E;
  font-style: oblique;
  font-weight: bold;
  text-decoration: underline;
  width: 200px;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;