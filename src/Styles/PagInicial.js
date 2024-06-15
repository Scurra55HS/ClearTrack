import styled from 'styled-components';

export const TextH1I = styled.h1`
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  color: #01223E;

  @media (max-width: 768px) {
    margin-top: 200px;
    margin-bottom: 20px;
  }
`;

export const Div1I = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Div2I = styled.div`
  display: flex;
  justify-content: center;
`;

export const Div3I = styled.div`
  margin: 0 auto;
  align-items: center;
  margin-right: 135px;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Div4I = styled.div`
  display: flex;
  margin-right: 520px;
  
  @media (max-width: 768px) {
    align-items: center;
  }

`

export const Bloco3TextI = styled.h2`
  color: #01223E;
  margin-bottom: 5px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const TextPI = styled.h1`
  color: #0D63AC;
  font-weight: bold;
  font-size: x-large;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: x-large;
  }
`;

export const SelecionarI = styled.select`
  color: gray;
  border: 1px solid gray;
  padding: 8px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const OptionsI = styled.option`
`;

export const ContainerTableI = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const TabelaI = styled.table`
  border-collapse: collapse;
  border: 2px solid #003C70;
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  min-width: 760px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 40px;

  @media (max-width: 768px) {
    min-width: 100%;
    margin-left: 0;
  }
`;

export const TheadI = styled.thead`
`;

export const TbodyI = styled.tbody`
`;

export const TrI = styled.tr`
  border: 2px;
`;

export const ThI = styled.th`
  background-color: #01223E;
  color: white;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const TdI = styled.td`
  border: 1px solid rgb(160, 160, 160);
  padding: 8px 10px;
  resize: vertical;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const Td1I = styled.td`
  border: 1px solid rgb(160, 160, 160);
  padding: 8px 10px;
  text-align: center;
  background-color: green;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const Td2I = styled.td`
  border: 1px solid rgb(160, 160, 160);
  padding: 8px 10px;
  text-align: center;
  background-color: red;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const ImgI = styled.img`
  width: 340px;
  height: 340px;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-top: 20px;
    margin-left: 500px;
  }
`;

export const ButtonI = styled.button`

background-color: #003C70;
  color: #ffffff;
  border-radius: 45px;
  border: none;
  width: 120px;
  height: 50px;
  padding: 10px;
  margin-bottom: 5em;
  font-weight: bolder;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90px;
    padding: 8px;
    margin-bottom: 50px;
  }
`;
