import './style.scss'

export default function LandingPage() {
    return (
        <div className='landing-page'>
            <section className='topo'>
                <div>
                    <div>
                        <h1>Referência em ortodontia na cidade de São Paulo</h1>
                        <p>Transforme seu sorriso com a tecnologia premium da Adapta Odonto</p>
                        <button className='btn-agendamento'><img src="/assets/images/zap.png" /><a href=''>Agendamento</a></button>
                    </div>
                    <img alt="logo de login" src="/assets/images/logo_fundo_cinza.png" />
                </div>
            </section>


            <section className='servicos'>
                <div className='textos-servicos'>
                    <h1>Nossos Serviços</h1>
                    <p>
                        Descubra como nossa clínica odontológica oferece um cuidado abrangente e especializado<br />
                        para a saúde e estética do seu sorriso. Conheça nossos serviços que vão além do<br />
                        convencional, proporcionando o melhor atendimento em:
                    </p>
                </div>

                <div className='pai-servico'>
                    <div className='servico'>
                        <img alt="Ícone de aparelhos transparentes" src="/assets/images/aparelho_transparente.png" />
                        <h4>Aparelhos Transparentes</h4>
                    </div>
                    <div className='servico'>
                        <img alt="ícone de ferramentas de dentista" src="/assets/images/tratamento.png" />
                        <h4>Tratamentos preventivos</h4>
                    </div>
                    <div className='servico'>
                        <img alt="Ícone de cadeira de dentista" src="/assets/images/cadeira_dentista.png" />
                        <h4>Experience Dayclinic</h4>
                    </div>
                </div>
                <img className="image-dente" alt="" src="/assets/images/logo_round.png" />
            </section>


            <section className='clinica'>
                <div>
                    <h1>Conheça nossa clínica</h1>
                    <p>Uma estrutura diferenciada, com 650m² dedicados à Odontologia Prime em todas as especialidades da odontologia</p>
                    <p>Com 8 consultórios, 4 salas de esperas, espaço Kids, elevador com acesso em toda clínica, plataforma para acessibilidade e estacionamento no subsolo.</p>
                    <div>Localizado na Faria Lima</div>
                </div>
                <div className='fundo-predio'>
                    <div>4 Doutores especializados</div>
                </div>
            </section>
            <section className='agendamento'>
                <h1>Agilidade em sua Consulta</h1>
                <p>Atendimento Prime com alta tecnologia para cuidar da saúde dos seus dentes com qualidade</p>
                <p>Nossos especialistas em odontologia estão comprometidos em proporcionar a você a melhor experiência de cuidado bucal, com serviços personalizados e avançada tecnologia.</p>
            </section>
            <section className='tratamentos'>
                <div>
                    <img src='/assets/images/raiox.png' />
                    <p>Raio X panorâmico</p>
                </div>
                <div>
                    <img src='/assets/images/tratamento_tech1.png' />
                    <p>Tratamentos Tecnologicos</p>
                </div>
                <div>
                    <img src='/assets/images/tratamento_tech2.png' />
                    <p>Tratamentos personalizados</p>
                </div>
            </section>
            <section className='checkup'>
                <div className='textocheckup'>
                    <h1>Check-up Digital</h1>
                    <p>Você sabia que problemas bucais podem estar se desenvolvendo, sem que você perceba?</p>
                    <p>Confie em uma equipe com vasta experiência, nossos proficionais tem mais de 15 anos de experiência.</p>
                    <p>Com o nosso check-up digital, identificamos problemas bucais em estágio inicial, prevenindo problemas futuros.</p>
                    <button className='btn-agendamento'><img src="/assets/images/zap.png" />Agendamento</button>
                </div>
                <img className='fundocheckup' src="/assets/images/fundo_checkup.png" />
            </section>
            <section className='rodape'>
                <div className='Tratamentos'>
                    <h1>Tratamentos</h1>
                    <br />
                    <br />
                    <h2>Tratamentos preventivos</h2>
                    <br />
                    <br />
                    <h2>Aparelhos Transparentes</h2>
                    <br />
                    <br />
                    <h2>Tratamentos Odontopediatricos</h2>
                </div>
                <div className='Contato'>
                    <h1>Contato</h1>
                    <br />
                    <br />
                    <h2>(11) 4004-1535</h2>
                    <br />
                    <br />
                    <h2>contato@adaptaodonto.com.br</h2>
                    <br />
                    <br />
                    <h2>(11) 97114-3318</h2>
                </div>
                <div className='rede'>
                    <h1>Rede Social</h1>

                    <img src="/assets/images/instagram.png" />
                </div>
            </section>
        </div>
    )
}