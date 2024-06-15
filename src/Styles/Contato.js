import styled from 'styled-components';

export const FriendlyTextB = styled.p`
  color: #0A8282;
  font-weight: bold;
  font-size: 16px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 30px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 700px;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
    margin-top: 180px;
    max-width: 90%;
  }
`;

export const FormB = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 90px auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin: 50px auto;
    padding: 15px;
    max-width: 90%;
  }
`;

export const FormGroupB = styled.div`
`;

export const GroupButtomB = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const MainB = styled.div`
  display: flex;
  margin-left: 110px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const EnglobB = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconsB = styled.div`
`;

export const ImgB = styled.img`
  width: 30px;

  @media (max-width: 768px) {
    width: 25px;
  }
`;

export const Img2B = styled.img`
  display: flex;
  width: 400px;
  height: 400px;
  margin-top: 70px;
  margin-right: 400px;
  margin-left: 10px;
  padding: 60px 0px;

  @media (max-width: 768px) {
    width: 70%;
    height: auto;
    margin: 10px auto;
    padding: 20px 0;
  }
`;

export const Img3B = styled.img`
  margin-left: 50px;
  width: 45px;

  @media (max-width: 768px) {
    margin-left: 35px;
    margin-bottom: 50px;
    width: 50px;
  }
`;

export const TitleFormB = styled.h1`
  margin-bottom: 50px;
  text-align: center;
  color: #01223E;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    font-size: 1.5rem;
  }
`;

export const LabelB = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color: #01223E;

  @media (max-width: 768px) {
    margin-bottom: 6px;
    font-size: 0.9rem;
  }
`;

export const InputB = styled.input`
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

export const TextAreaB = styled.textarea`
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

export const ButtonB = styled.button`
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

export const LinkB = styled.a`
`;
