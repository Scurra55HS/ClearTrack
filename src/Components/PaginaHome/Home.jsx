import { TextH1I, Bloco3TextI, TextPI, Div1I, Div2I, Div3I, SelecionarI, OptionsI, ImgI, ContainerTableI, TabelaI, TheadI, TbodyI, TrI, ThI, TdI, Td1I, Td2I, Div4I, ButtonI} from "../../Styles/PagInicial"
import trabaiador from '../../img/trabaiador.png'
const PaginaHome = () =>{
    return(
        <>
        <TextH1I>POLO MULTISSETORIAL <br/> BENEDITO BENTES</TextH1I>
        <Div1I>
        <Div3I>
        <Bloco3TextI>BLOCO 3</Bloco3TextI>
        <TextPI>Selecione o setor:</TextPI>
        <SelecionarI>
            <OptionsI value ='terreo'>Térreo</OptionsI>
            <OptionsI value ='1pavimento'>Primeiro Pavimento</OptionsI>
        </SelecionarI>
        <TextPI>Selecione as salas/banheiros:</TextPI>
        <SelecionarI>
            <OptionsI value ='Oficina1'>Oficina de instalações E. e Construção Civil</OptionsI>
            <OptionsI value ='Oficina2'>Oficina de instalações E. Industriais</OptionsI>
            <OptionsI value ='Oficina3'>Oficina Mecânica de motocicletas</OptionsI>
            <OptionsI value ='Oficina4'>Oficina de Moda</OptionsI>
        </SelecionarI>
        <TextPI>Selecione o mês:</TextPI>
        <SelecionarI>
            <OptionsI value ='Janeiro'>Janeiro</OptionsI>
            <OptionsI value ='Fevereiro'>Fevereiro</OptionsI>
            <OptionsI value ='Março'>Março</OptionsI>
            <OptionsI value ='Abril'>Abril</OptionsI>
            <OptionsI value ='Maio'>Maio</OptionsI>
            <OptionsI value ='Junho'>Junho</OptionsI>
            <OptionsI value ='Julho'>Julho</OptionsI>
            <OptionsI value ='Agosto'>Agosto</OptionsI>
            <OptionsI value ='Setembro'>Setembro</OptionsI>
            <OptionsI value ='Outubro'>Outubro</OptionsI>
            <OptionsI value ='Novembro'>Novembro</OptionsI>
            <OptionsI value ='Dezembro'>Dezembro</OptionsI>
        </SelecionarI>
        <SelecionarI>
            <OptionsI value = '01'>01</OptionsI>
            <OptionsI value = '02'>02</OptionsI>
            <OptionsI value = '03'>03</OptionsI>
            <OptionsI value = '04'>04</OptionsI>
            <OptionsI value = '05'>05</OptionsI>
            <OptionsI value = '06'>06</OptionsI>
            <OptionsI value = '07'>07</OptionsI>
            <OptionsI value = '08'>08</OptionsI>
            <OptionsI value = '09'>09</OptionsI>
            <OptionsI value = '10'>10</OptionsI>
            <OptionsI value = '11'>11</OptionsI>
            <OptionsI value = '12'>12</OptionsI>
            <OptionsI value = '13'>13</OptionsI>
            <OptionsI value = '14'>14</OptionsI>
            <OptionsI value = '15'>15</OptionsI>
        </SelecionarI>
        </Div3I>
        <Div4I>
            <ImgI src={trabaiador}/>
        </Div4I>
        </Div1I>
        <Div2I>
            <ContainerTableI>
                <TabelaI>
                    <TheadI>
                        <TrI>
                        <ThI scope="col">Horário</ThI>
                        <ThI scope="col">Turno</ThI>
                        <ThI scope="col">Funcionário</ThI>
                        <ThI scope="col">Verificação</ThI>
                        </TrI>
                    </TheadI>
                    <TbodyI>
                    <TrI>
                        <TdI>09:45</TdI>
                        <TdI>Matutino</TdI>
                        <TdI>Maria José</TdI>
                        <Td1I>Verificado</Td1I>
                    </TrI>
                    <TrI>
                        <TdI>12:45</TdI>
                        <TdI>Vespertino</TdI>
                        <TdI>José Maria</TdI>
                        <Td1I>Verificado</Td1I>
                    </TrI>
                    <TrI>
                        <TdI>15:00</TdI>
                        <TdI>Vespertino</TdI>
                        <TdI>Maria José</TdI>
                        <Td2I>Não verificado</Td2I>
                    </TrI>
                    <TrI>
                        <TdI></TdI>
                        <TdI></TdI>
                        <TdI></TdI>
                        <TdI></TdI>
                    </TrI>
                    <TrI>
                        <TdI></TdI>
                        <TdI></TdI>
                        <TdI></TdI>
                        <TdI></TdI>
                    </TrI>
                    <TrI>
                        <TdI></TdI>
                        <TdI></TdI>
                        <TdI></TdI>
                        <TdI></TdI>
                    </TrI>
                    </TbodyI>
                </TabelaI>
                <ButtonI>REGISTRAR</ButtonI>
            </ContainerTableI>
            </Div2I>
        </>
    )
}

export default PaginaHome;