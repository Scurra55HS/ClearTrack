import { H1r, Mainr, Span1r, Span01r, Span02r, Span2r, Span022r, Linhar, LinhaPr, Imgr, P1r, P2r, Span3r, Span03r, Span033r, H2Pr, Ptexto1r, Ptexto2r, Ph1r } from "../../Styles/Sobre"
import imagem1 from '../../img/img1.png'
import imagem2 from '../../img/img2boa.png'

const Sobre = () => {

    return(
        <Mainr>
            <Span1r>
                <Span01r>
              <Linhar></Linhar>
              <H1r>Conheça a ClearTrack!</H1r>
                </Span01r>
                <Ph1r>A web nasceu da necessidade de simplificar e otimizar o monitoramento da limpeza de banheiros. Nosso objetivo é fornecer uma solução abrangente que não apenas melhore a comunicação entre equipes de limpeza e gestores, mas também automatize o registro de atividades, elimine o uso de tabelas manuais e, por consequência, otimize significativamente os processos de limpeza.</Ph1r>
            </Span1r>


            <Span2r>
                <Span022r>
                <Span02r>
                <P1r>Para quem é Destinado</P1r>
                <LinhaPr></LinhaPr>
                </Span02r>
                <Ptexto1r>O ClearTrack é especialmente projetado para atender às necessidades de faxineiros de banheiros e salas de aula do SENAI do bloco 3 do polo multissetorial, bem como para gestores responsáveis pela supervisão e eficiência das operações de limpeza. Se você busca uma maneira eficaz e moderna de gerenciar a limpeza, o ClearTrack é a solução ideal para você.</Ptexto1r>
                </Span022r>
                    <Imgr src={imagem1}/>
            </Span2r>

            <Span3r>
                <Imgr src={imagem2}/>
                <Span03r>
                    <Span033r>
                        <LinhaPr></LinhaPr>
                        <P2r>Funcionamento da Web</P2r>
                    </Span033r>
                    <Ptexto2r>O funcionamento do site é simples e intuitivo. Os funcionários de limpeza podem facilmente registrar suas atividades através do aplicativo, incluindo detalhes como local, data, hora e responsável pela limpeza. Ao mesmo tempo, os gestores têm acesso a um painel em tempo real, onde podem monitorar o desempenho das tarefas de limpeza, receber notificações instantâneas sobre áreas que precisam de atenção imediata e analisar o histórico detalhado das atividades para otimizar continuamente os processos de limpeza.</Ptexto2r>
                </Span03r>
            </Span3r>

            <H2Pr>Junte-se a nós no ClearTrack e experimente uma nova era de monitoramento de limpeza, onde a tecnologia trabalha a seu favor!</H2Pr>
        </Mainr>
    )
}
export default Sobre;