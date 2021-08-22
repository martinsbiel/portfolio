import './App.css';
import Container from './components/Container';
import Modal from './components/Modal';
import Badge from './components/Badge';

function App() {
  return (
    <Container>
        <div className="col-md-3 default-bg">
            <img width="250" src="../images/me.jpg" className="rounded mx-auto d-block mb-3 mt-5" alt="Gabriel Martins" />
            <h2 className="text-center header-text">Gabriel Martins</h2>
            <h5 className="text-center mb-4 header-text">Desenvolvedor de Software Jr</h5>
            <h5 className="border-bottom pb-2 header-text">Sobre mim</h5>
            <p className="text-white about">Tenho 24 anos, nasci em Joinville, mas já morei no interior de SP. A única coisa que nunca mudou é meu interesse desde sempre por tecnologia. Encontrei na tecnologia a oportunidade de estar em constante desafio.</p>
            <p className="text-white about">Gosto de estar em constante movimento, estudando sobre boas práticas de programação e desenvolvendo experimentos para descobrir e experimentar novas resoluções. Me considero um profissional motivado por resolver problemas, agilizar processos e criar soluções de qualidade, utilizando as técnicas e tecnologias adequadas.</p>
            <p className="text-white">Vamos nessa?</p>
            <a href="https://github.com/martinsbiel" target="_blank" className="link-about mb-1"><i className="fab fa-github-square"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/martinsg" target="_blank" className="link-about mb-1"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a href="https://twitter.com/martinsbieel" target="_blank" className="link-about"><i className="fab fa-twitter-square"></i> Twitter</a>
        </div>
        <div className="col-md-6 default-bg">
            <h5 className="border-bottom pb-2 header-text mt-5">Meus objetivos</h5>
            <p className="text-white">Meu objetivo é entrar para o mercado de trabalho como um desenvolvedor de software junior, atuando remotamente.</p>
            <h5 className="border-bottom pb-2 header-text mt-5">Minhas habilidades</h5>
            <p className="text-white">Possuo fortes conhecimentos em: PHP, Laravel, JavaScript ES6+, jQuery e MySQL</p>
            <p className="text-white">Estou familiarizado com: VueJS e NodeJS.</p>
            <h5 className="border-bottom pb-2 header-text mt-5">Meus projetos</h5>
            <p className="text-white">Com o passar do tempo e o avançar dos meus estudos decidi colocar tudo que aprendi em prática, abaixo estão as informações de alguns projetos que fiz:</p>

            <p className="text-white"><a target="_blank" className="link-light" href="https://github.com/martinsbiel/notes">Notes</a>: Sistema de controle de notas/lembretes. Crie, gerencie e exporte suas notas em um sistema muito completo. <a className="link-light" href="#" data-bs-toggle="modal" data-bs-target="#notesModal">&rarr; Leia mais...</a></p>
            
            <p className="text-white"><a target="_blank" className="link-light" href="https://github.com/martinsbiel/simple-file-uploader">Simple File Uploader</a>: Aplicação de código aberto feita para exemplificar um dos métodos de criar um site de upload de arquivos com barra de progresso <a className="link-light" href="#" data-bs-toggle="modal" data-bs-target="#sfuModal">&rarr; Leia mais...</a></p>

            <p className="text-white"><a target="_blank" className="link-light" href="http://blog.uploaderweb.com">UploaderBlog</a>: Blog simples criado para postar as atualizações que são feitas no UploaderWeb, <a className="link-light" href="#" data-bs-toggle="modal" data-bs-target="#upbModal">&rarr; Leia mais...</a></p>
            
            <p className="text-white"><a target="_blank" className="link-light" href="https://uploaderweb.com">UploaderWeb</a>: Meu projeto mais antigo, criando no início de 2014. O UploaderWeb é uma comunidade online criada para compartilhamento de arquivos em geral <a className="link-light" href="#" data-bs-toggle="modal" data-bs-target="#upwebModal">&rarr; Leia mais...</a></p>
        </div>
        <Modal id="notesModal" name="Notes" year="2021" link="https://github.com/martinsbiel/notes" linkText="Link para o repositório do projeto, contribua." content="Sistema de controle de notas/lembretes. Crie, gerencie e exporte suas notas em um sistema muito completo. Utilizei Laravel para a API REST com autenticação JWT e por sessão no back-end e VueJS para deixar o front-end mais dinâmico em conjunto com Bootstrap. Contém recurso de exportar notas para Excel e PDF, registro de logs em todos os endpoints da API de notas e sistema de login completo. Código fonte disponível no repositório do projeto, toda contribuição é bem-vinda.">
            <Badge type="bg-primary">Laravel</Badge>
            <Badge type="bg-success">VueJS</Badge>
            <Badge type="bg-secondary">Bootstrap</Badge>
            <Badge type="bg-warning">MySQL</Badge>
        </Modal>

        <Modal id="sfuModal" name="Simple File Uploader" year="2020" link="https://github.com/martinsbiel/simple-file-uploader" linkText="Dê uma olhada no repositório do projeto." content='Aplicação de código aberto feita para exemplificar um dos métodos de criar um site de upload de arquivos com barra de progresso e feature de "clique para copiar". Tecnologias utilizadas: PHP, JavaScript (jQuery), plugin jQuery Form, Bootstrap e clipboardJS.'>
            <Badge type="bg-primary">PHP</Badge>
            <Badge type="bg-success">jQuery</Badge>
            <Badge type="bg-secondary">Bootstrap</Badge>
        </Modal>

        <Modal id="upbModal" name="UploaderBlog" year="2019" link="http://blog.uploaderweb.com" linkText="Link para o blog." content="Blog simples criado para postar as atualizações que são feitas no UploaderWeb, além das postagens é possível ver também os posts mais visualizados e comentados. Desenvolvido em PHP utilizando WordPress.">
            <Badge type="bg-primary">WordPress</Badge>
            <Badge type="bg-warning">MySQL</Badge>
        </Modal>

        <Modal id="upwebModal" name="UploaderWeb" year="2014" link="https://uploaderweb.com" linkText="Você pode olhar o site se quiser." content="Meu projeto mais antigo, criando no início de 2014. O UploaderWeb é uma comunidade online criada para compartilhamento de arquivos em geral , depois de postar, outros usuários poderão curtir e comentar, também é possível interagir com outros usuários por mensagem privada entre muitas outras coisas. Desenvolvido em PHP puro, JavaScript utilizando a biblioteca jQuery e MySQL. Todos os dados gerados pelo site (postagens, comentários, denúncias, sugestões de categorias) são gerenciados por um programa que criei em C#.">
            <Badge type="bg-primary">PHP</Badge>
            <Badge type="bg-success">jQuery</Badge>
            <Badge type="bg-warning">MySQL</Badge>
        </Modal>
    </Container>
  );
}

export default App;
