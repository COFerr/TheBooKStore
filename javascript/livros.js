var bookTitle = "";
function showMe(x) {
  x.style.padding = "10px";
  x.style.backgroundColor = "blue";
  const myElement = document.getElementById("info").innerText = "";
  document.getElementById("info").style.padding = "0px";
  document.getElementById("bookShow").style.backgroundColor = "lightGray";
  document.getElementById("bookShow").style.padding = "10px";
  document.getElementById("bookTitle").style.fontSize = '30px';
  document.getElementById("bookTitle").style.fontSize = '30px';
  for(var i=0; i <= library.length; i++){
    if(x.id == library[i].title){
      document.getElementById('bookTitle').innerText = library[i].title;
      bookTitle = library[i].title;
      document.getElementById('bookDescription').innerText = library[i].resume;
      var imgSet = "<img src="  + x.src + " width = '300px' height = '400px' >";
      document.getElementById('bookImg').innerHTML = imgSet;
      var btn = "<a href='#buyThisBook'><button onClick = buyMe(" + i + ")><i class='fa-solid fa-basket-shopping'></i>|Buy it!  </button></a>"      
      document.getElementById('but').innerHTML = btn;
      document.getElementById('but').style.marginTop = "50px";
    }
  }
}
function backMeToNormal(x) {
  x.style.backgroundColor = "whitesmoke";
  x.style.padding = "0px";
}
function buyMe(i){
  document.getElementById("buyThisBook").innerHTML = '<iframe src="' + library[i].linkDeCompra + '" width = "100%" height = "400px" id = "showBuyPage"></iframe>';  
  setBuyPage(i);
}
function setBuyPage(i){
  var x = document.getElementsById("showBuyPage")[0].contentWindow;
  x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
}
function writeBookTitle(){
  document.getElementById("bookTitle").innerText = bookTitle;
}
library = [];
  let livro = {
    title: '',
    resume: '',
    linkDeCompra: ''
  }

b1 = {
  title: "O Cálculo Com Geometria Analítica - Vol. 1",
  resume: "Seu caráter didático e abrangente, bem como sua linguagem clara e compreensível tornaram-no um texto clássico em sua área. Conteúdo - Números Reais, Funções e Gráficos, Limites e Continuidade, A Derivada e a Derivação, Valores Extremos das Funções,Técnicas de Construção de Gráficos e a Diferencial, Integração e a Integral Definida, Aplicações da Integral Definida, Funções Inversas, Logarítmicas e Exponenciais, Funções Trigonométricas Inversas e Funções Hiperbólicas, Técnicas de Integração, Secções Cônicas e Coordenadas Polares, Formas Indeterminadas, Integrais Impróprias e a Fórmula de Taylor.",
  linkDeCompra: "https://www.estantevirtual.com.br/livros/louis-leithold/o-calculo-com-geometria-analitica-vol-1/2631110223?show_suggestion=0#"
}
library[0] = b1;
b2 = {
  title: "Matemática Aplicada à Economia e Administração",
  resume: "Este livro destina-se a estudantes de ciências administrativas, econômicas, sociais e biológicas matriculados em cursos de matemática de dois semestres de duração, com ênfase nas aplicações práticas e usos do cálculo em suas respectivas áreas. O texto introduz o cálculo através de uma abordagem intuitiva e utiliza uma variedade de aplicações reais que motivam o estudante a aprender a teoria. O objetivo do autor é dar um tratamento correto ao cálculo elementar, com demonstrações cuidadosas das definições e teoremas básicos, sem provas rigorosas. É ideal, portanto, para aqueles que precisam de um estudo com muitos exercícios e exemplos de administração, economia, ciências sociais e biológicas. Esses exercícios e exemplos são apresentados de tal forma que não é necessário nenhum conhecimento prévio de terminologia técnica nesses assuntos.",
  linkDeCompra: "https://www.estantevirtual.com.br/livros/louis-leithold/matematica-aplicada-a-economia-e-administracao/2400407392?show_suggestion=0#"
}
library[1] = b2;
b3 = {
  title: "Fundamentos de Física 1 - Mecânica",
  resume: "Sucesso há mais de três décadas e obra de referência na área, Fundamentos de Física ? Volumes 1 a 4 apresenta um estudo introdutório completo e abrangente. Com especial destaque, esta nona edição traz uma oferta maior de materiais suplementares didáticos, disponíveis online, mediante cadastro no site da LTC Editora. Essa novidade vai permitir aos docentes de cursos de graduação em engenharia e demais áreas de Ciências Exatas o uso de recursos atuais e diferenciados em suas aulas e apresentações. Os estudantes também contam com materiais específicos oferecidos mediante cadastro. Os autores buscaram aprimorar o texto e a pedagogia aplicada à obra, por meio do grande apelo visual proporcionado por ilustrações coloridas e outros recursos didáticos como boxes, tabelas e seções especiais, que facilitam e organizam os assuntos abordados.",
  linkDeCompra: "https://www.estantevirtual.com.br/livros/halliday-resnick-walker/fundamentos-de-fisica-1-mecanica/2943673616?show_suggestion=0#"
}
library[2] = b3;
b4 = {
  title: "Fundamentos de Física 2 - Gravitação Ondas e Termodinâmica",
  resume: "Sucesso há mais de três décadas e obra de referência na área, Fundamentos de Física – Volumes 1 a 4 apresenta um estudo introdutório completo e abrangente. Essa novidade vai permitir aos docentes de cursos de graduação em engenharia e demais áreas de Ciências Exatas o uso de recursos atuais e diferenciados em suas aulas e apresentações. Os estudantes também contam com materiais específicos oferecidos mediante cadastro. Os autores buscaram aprimorar o texto e a pedagogia aplicada à obra, por meio do grande apelo visual proporcionado por ilustrações coloridas e outros recursos didáticos como boxes, tabelas e seções especiais, que facilitam e organizam os assuntos abordados. Da mesma forma, os conteúdos teóricos foram mais bem vinculados ao cotidiano prático e real, com a apresentação de exemplos, problemas e ensaios ligados a diversas áreas – o que retira da disciplina o aspecto meramente científico e a eleva ao caráter essencial para a compreensão e o desenvolvimento do mundo que nos cerca.",
  linkDeCompra: "https://www.amazon.com.br/Fundamentos-F%C3%ADsica-Gravita%C3%A7%C3%A3o-Ondas-Termodin%C3%A2mica/dp/8521619049"
}
library[3] = b4;
b5 = {
  title: "Fundamentos de Física 3 - Eletromagnetismo",
  resume: "David Halliday (1916-20) professor emérito de Física na University of Pittsburgh. Recebeu o título de Ph.D. pela mesma instituição, onde também atuou como pesquisador e administrador. Entre os diversos livros publicados e traduzidos em cerca de 20línguas, destaca-se a coautoria em Fundamentos de Física, obra em quatro volumes, publicada pela LTC Editora | GEN Grupo Editorial Nacional. Em 2002, a American Physical Society (APS) premiou esse trabalho como o mais brilhante texto introdutório de física do século XX. Robert Resnick professor emérito de Física do Rensselaer Polytechnic Institute (RPI), que o incluiu no seu Hall of Fame em 2003. Concluiu o bacharelado e recebeu o título de Ph.D. em Física pela Johns Hopkins University. Recebeu a medalha Oersted o mais alto prêmio concedido pela American Association of Physics Teachers (AAPT), da qual também foi presidente. Assim como David Halliday, é coautor de Fundamentos de Física, entre outros títulos na área. Jearl Walker professor de Física da Cleveland State University. Concluiu o bacharelado em Física no Massachusetts Institute of Technology (MIT) e recebeu o título de Ph.D. pela University of Maryland.",
  linkDeCompra: "https://www.estantevirtual.com.br/livros/david-halliday-robert-resnick-jearl-walker/fundamentos-de-fisica-3-eletromagnetismo/1729395818?show_suggestion=0#"
}
library[4] = b5;
b6 = {
  title: "Álgebra Linear",
  resume: "Este livro traz uma introdução à Álgebra Linear. Segue a didática da Coleção Schaum: cada capítulo inicia com definições, princípios e teoremas, e com material descritivo e ilustrativo, avança para um conjunto de exercícios graduais resolvidos e termina com problemas complementares para uma revisão completa. Inclui Apêndices com módulos e polinômios sobre um corpo, produtos tensorial e exterior de espaços vetoriais e ainda a inversa generalizada de Moore-Penrose.",
  linkDeCompra: "https://www.estantevirtual.com.br/livros/seymour-lipschutz/algebra-linear/4171228972?show_suggestion=0#"
}
library[5] = b6;
b7 = {
  title: "Probabilidade e Estatística para Engenharia e Ciências",
  resume: "Este livro visa fornecer uma introdução abrangente dos modelos e métodos estatísticos mais passíveis de serem encontrados e usados por estudantes em cursos de Engenharia e Ciências Naturais. Apesar de os exemplos e exercícios terem sido desenvolvidos par acientistas e engenheiros, a maior parte dos métodos abrangidos é fundamental para análises estatísticas em várias outras disciplinas, de forma que os estudantes de Administração Ciências Sociais também se beneficiarão desta leitura. A obra introduz uma grande variedade de exercícios tanto após a apresentação de cada tópico quanto no final de cada capítulo, a fim de reforçar o aprendizado, e a didática do texto é enfatizada por inúmeros exemplos.",
  linkDeCompra: "https://www.estantevirtual.com.br/livros/jay-l-devore/probabilidade-e-estatistica-para-engenharia-e-ciencias/320933333?show_suggestion=0#"
}
library[6] = b7;
b8 = {
  title: "Resistencia dos Materiais",
  resume: "Abordando a teoria e os princípios fundamentais da resistência dos materiais de maneira clara, esta sétima edição - que utiliza exclusivamente o Sistema Internacional de Unidades (SI) - confirma a obra de Hibbeler como referência da área. Além de trazerem problemas na forma de exemplos ilustrativos, figuras tridimensionais e exercícios, os capítulos apresentam problemas propostos em diferentes níveis de dificuldade. Para completar, situações reais são usadas para estimular o interesse do estudante pelo assunto, bem como seções que orientam a solução de problemas diversos. Indicado para estudantes de engenharia mecânica, civil, metalúrgica, química e elétrica, este livro traz todos os recursos didáticos necessários para auxiliar o leitor a visualizar conceitos complexos.",
  linkDeCompra: "https://www.estantevirtual.com.br/livros/r-c-hibbeler/resistencia-dos-materiais/4115813733?show_suggestion=0#"
}
library[7] = b8;
b9 = {
  title: "Mecânica dos Fluidos - Noções e Aplicações",
  resume: "A abordagem adotada foi a de desenvolver um entendimento físico-intuitivo da Mecânica dos Fluidos, com um mínimo de desenvolvimento matemático das equações básicas, estando voltado principalmente aos resultados que permitam resolver escoamentos de interesse da engenharia. Num livro de noções com enfoque nas aplicações, optou-se por apresentar um bom número de tópicos com resultados de aplicação prática, no lugar da generalidade dos equacionamentos e do rigor matemático-conceitual. O tema é apresentado em oito capítulos organizados em seqüência lógica e articulados que incluem: conceito de tensão viscosa e de pressão, algumas propriedades dos fluidos, manometria, empuxos sobre superfícies submersas, movimento laminar e turbulento, fluxo de massa e de energia nas seções de escoamento de tubos de corrente, equação da continuidade, equação de Bernoulli e equação da quantidade de movimento, análise dimensional e modelos físicos, escoamento em dutos, equipamentos, máquinas e instalações fluido-mecânicas, escoamentos externos: arrasto e sustentação.",
  linkDeCompra: "https://www.estantevirtual.com.br/livros/sylvio-r-bistafa/mecanica-dos-fluidos-nocoes-e-aplicacoes/1432108464?show_suggestion=0&livro_novo=1#"
}
library[8] = b9;
b10 = {
    title: 'Fundamentos e Técnicas de Administração Financeira',
    resume: 'Organizado para transmitir conceitos e técnicas de eficácia comprovada, imprime ao tema uma visão prática, tornando-o adequado para os profissionais que necessitam dominar os fundamentos da disciplina no contexto da realidade empresarial brasileira.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/roberto-braga/fundamentos-e-tecnicas-de-administracao-financeira/2990009789?show_suggestion=0&livro_novo=1#'
  }
library[9] = b10;
b11 = {
    title: 'Guia Politicamente Incorreto da História do Brasil',
    resume: 'Cinto de castidade na Idade Média? Eles nunca existiram - pelo contrário, manuais de medicina da época diziam que o prazer sexual era essencial à saúde das mulheres. Milhares de crianças foram exploradas na fábricas inglesas do século 19? Está certo, mas é interessante lembrar que a Revolução Industrial, pela primeira vez, tornou o trabalho infantil desnecessário. E lembra aquela história de que as guerras e a miséria da África são consequências das fronteiras artificiais criadas pelos europeus? Há quase 30 anos historiadores e economistas africanos deixaram de acreditar nela. Abaixo da superfície, a história não é tão simples quanto aquele professor militante costumava nos ensinar. Depois do sucesso do "Guia Politicamente Incorreto da História do Brasil" e do "Guia Politicamente Incorreto da América Latina", é hora de finalizar o trabalho. É hora de jogar tomates nos equívocos sobre a história do mundo.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/leandro-narloch/guia-politicamente-incorreto-da-historia-do-brasil/3900482636?show_suggestion=0#'
  }
library[10] = b11;
b12 = {
    title: 'Uma Breve História do Mundo',
    resume: 'É como ver a paisagem pela janela de um trem em movimento", afirma o Prof. Geoffrey Blainey, um dos mais aclamados historiadores da atualidade. Em Uma Breve História do Mundo, o autor faz um balanço da fantástica saga da humanidade, magistralmente compilada desde seus primórdios até os frenéticos dias em que vivemos. Sem jamais perder o foco, Blainey vai mais além: descreve a geografia das civilizações e analisa o legado de seus povos. O leitor deve se preparar para uma viagem inesquecível: saberá como eram as noites dos primeiros nômades; testemunhará o surgimento das religiões; questionará a carnificina das guerras e acompanhará a ascensão e queda dos grandes impérios. Uma Breve História do Mundo vai entrelaçando a história de um povo a outro, de forma didática e vibrante. Distante de formalismos, o livro instiga e envolve o leitor página por página, levando-o a conhecer e interpretar melhor os fatos que nos levaram aos dias de hoje',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/geoffrey-blainey/uma-breve-historia-do-mundo/1788738659?show_suggestion=0#'
  }
library[11] = b12;
b13 = {
    title: 'História da Riqueza do Homem',
    resume: 'Este livro tem um duplo objetivo. É uma tentativa de explicar a história pela teoria econômica e a teoria econômica pela história. Leo Huberman assim justificou a criação de sua História da Riqueza do Homem – explicação esta sem razão de ser. Se a simples citação da palavra “economia” provoca bocejos entre os jovens numa sala de aula, ler o livro de Huberman, porém, remete o leitor ao desenvolvimento da sociedade humana impulsionado por sangue, revoluções, traições e pactos selados, principalmente, por homens de visão. Pensado anteriormente para leitores juvenis, História da Riqueza do Homem terminou por expandir seu alcance até tornar-se um clássico obrigatório. Cobrindo da Idade Média até o nascimento do nazifascismo, a saga da economia mundial, infelizmente, encerrava-se em meados dos anos 1930. Esta 22ª edição amplia-se e renova-se ao trazer dois capítulos assinados pela historiadora Marcia Guerra, cobrindo a nova era iniciada pela Segunda Guerra Mundial – fazendo desta a única edição atualizada no mundo. Leo Huberman nasceu em Newark, Nova Jersey, em 17 de outubro de 1903, o último de onze filhos de um casal de intelectuais de classe média. Adolescente, foi operário numa fábrica de vidro, eletricista, vendedor de suco de laranja e funcionário dos correios e telégrafo. Já professor, cursou a New York University, formando-se em 1926. Fixou-se na cidade, onde começou a lecionar numa escola particular de currículo reformista e experimental.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/leo-huberman/historia-da-riqueza-do-homem/328620720?show_suggestion=0#'
  }
library[12] = b13;
b14 = {
    title: 'Rochas Magmáticas',
    resume: 'Importante obra de referência em área ainda carente de publicações especializadas, este livro enfoca a classificação das rochas magmáticas, estudando seu conteúdo mineral e sua composição química. A seguir, refere-se à atividade química de alguns elementos do magma, principalmente o silício e o sódio. Por último, vincula a ocorrência das diferentes rochas magmáticas e os diversos ambientes tectônicos definidos pela teoria das placas. Indicado a estudantes de Geologia, Geografia e Ecologia, destina-se, também, àqueles que se interessam pelas ciências naturais, com conhecimentos básicos de mineralogia, química e geologia. O autor aborda os aspectos mineralógicos, químicos, termodinâmicos e tectônicos e recupera constantemente as noções básicas, oferecendo uma visão geral e a integração dos tópicos estudados.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/eberhard-wernick/rochas-magmaticas/3927638293?show_suggestion=0#'
  }
library[13] = b14;
b15 = {
    title: 'A Arte da Política - a História Que Vivi',
    resume: 'Em mais de 116 anos de República, nunca um ex-Presidente mergulhou na análise de seu governo como Fernando Henrique Cardoso faz nesta obra. Mas FHC também repassa um período extraordinário da vida do país, que vai do auge do regime militar até o momento em que, encerrando seus dois mandatos, transmite o poder ao principal adversário político. Enquanto o homem público revela bastidores inéditos e preciosos de seu governo, sem deixar de lado as acusações que sofreu, e relata encontros e tratativas com os poderosos do mundo, o sociólogo analisa, do lado de dentro, o funcionamento das instituições e os limites do poder presidencial. Um livro revelador e para se compreender o Brasil de hoje (Ricardo A. Setti).',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/fernando-henrique-cardoso/a-arte-da-politica-a-historia-que-vivi/2228833005?show_suggestion=0#'
  }
library[14] = b15;
b16 = {
    title: 'O Que é Política Nuclear',
    resume: 'Há muita coisa de especial nas relações entre o Poder político e o Saber nuclear. A política nuclear contém um paradoxo que assalta a imaginação popular e sintetiza uma idéia intuitiva e sofrida do progresso: o poder que sustenta, multiplica e põe em ordem o bem-estar e a riqueza social é o mesmo que detém a faculdade de expor a população à morte geral.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/ricardo-arnt/o-que-e-politica-nuclear/1977297686?show_suggestion=0#'
  }
library[15] = b16;
b17 = {
    title: 'Política',
    resume: ' Adam Thirlwell é uma das grandes revelações da literatura inglesa contemporânea. Dono de um estilo eletrizante, o autor constrói uma narrativa sobre um ménage à trois vivido na Londres contemporânea, combinando sexo a reflexões políticas, estéticas e literárias. O romance tem início com uma prolongada cena de amor sado-masoquista entre dois namorados. Moshe é ator, e Nana, estudante de arquitetura. Ao longo do romance, vão compor um triângulo amoroso com Anjali, melhor amiga de Moshe. Os três têm mais ou menos a mesma idade (estão na faixa dos vinte anos) e moram sob o mesmo teto. O triângulo é bem-sucedido - pelo menos no início. Aos poucos, eles percebem que, numa relação assim, alguém sempre sai perdendo. Política se desenvolve a partir das inquietações, angústias e inseguranças dos protagonistas, comandadas por tiradas irônicas do narrador em relação a seus personagens e a respeito da maneira com que ele próprio conduz a história. Antes mesmo do lançamento do romance, a prestigiosa revista literária Granta já havia incluído Adam Thirlwell, então com 26 anos, entre os melhores autores britânicos com menos de quarenta anos. O autor também foi comparado a Woody Allen e Milan Kundera.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/adam-thirlwell/politica/1872988178?show_suggestion=0#'
  }
library[16] = b17;
b18 = {
    title: 'Elementos de Economia Política',
    resume: 'Poucas obras conseguem permanecer por décadas como referência na área universitária. Elementos de Economia Política, com certeza, é uma delas. E com uma qualidade inegável: a de acompanhar o desenvolvimento e as enormes mudanças ocorridas, principalmente as mais recentes, incorporando-as e analisando-as com grande clareza. Nesta 19ª edição, o prof. Gastaldi, sempre procurando contemplar temas que vêm dominando o debate no meio acadêmico, introduz a globalização como um dos aspectos fundamentais que merecem um estudo mais detalhado. Além disso, a obra como um todo foi modernizada, apresentando sumário e índice alfabético-remissivo reformulados, facilitando a pesquisa, e o projeto gráfico foi inteiramente renovado, de modo a tornar a leitura mais agradável. Em suma, o livro mantém as características que o tornaram um sucesso editorial e um modelo na didática brasileira moderna, buscando a atualização sempre que necessário e servindo especialmente aos estudantes de Ciências Econômicas, Contábeis e Atuariais, de Administração de Empresas e de Direito. Segue sendo um meio-termo entre os compêndios elementares e os altamente técnicos e especializados, com cada item contendo um conceito, facilitando a compreensão por parte do aluno.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/j-petrelli-gastaldi/elementos-de-economia-politica/288713638?show_suggestion=0#'
  }
library[17] = b18;
b19 = {
    title: 'Guia Politicamente Incorreto da Filosofia',
    resume: 'O Guia Politicamente Incorreto da Filosofia não é um livro sobre a história da filosofia, mas um ensaio sobre a filosofia do cotidiano. Dividido por temas, a obra aborda assuntos como capitalismo, religião, mulheres, instintos humanos, preconceito, felicidade e covardia.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/luiz-felipe-ponde/guia-politicamente-incorreto-da-filosofia/2108924753?show_suggestion=0#'
  }
library[18] = b19;
b20 = {
    title: 'Discurso do Método',
    resume: 'Muitas vezes brandido como uma bandeira, esse texto tornou-se uma das obras emblemáticas da filosofia, e sua celebridade há muito ultrapassou as fronteiras da filosofia propriamente dita. Primeiro livro da filosofia francesa escrito em francês, essa obra inaugura a filosofia moderna e continua sendo uma referência viva para a filosofia mais erudita, mas também para um público mais amplo. ',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/rene-descartes/discurso-do-metodo/152233414?show_suggestion=0#'
  }
library[19] = b20;

b21 = {
  title: "A Metamorfose",
  resume: "A metamorfose é a mais célebre novela de Franz Kafka e uma das mais importantes de toda a história da literatura. Sem a menor cerimônia, o texto coloca o leitor diante de um caixeiro-viajante - o famoso Gregor Samsa - transformado em inseto monstruoso. A partir daí, a história é narrada com um realismo inesperado que associa o inverossímil e o senso de humor ao que é trágico, grotesco e cruel na condição humana - tudo no estilo transparente e perfeito desse mestre inconfundível da ficção universal.",
  linkDeCompra: "https://www.estantevirtual.com.br/livros/franz-kafka/a-metamorfose/1104670803?show_suggestion=0#"
}
library[20] = b21;

b22 = {
    title: 'Poemas Completos de Alberto Caeiro',
    resume: 'A Hedra publica agora textos importantes, em alguns casos em nova tradução, em edições mais baratas, e começa com os seguintes títulos: Don Juan, a hilariante sátira de Molière, em tradução inédita no Brasil, e Iracema, o clássico que imortalizou a imagem da indígena na virgem dos lábios de mel, em edição cotejada e anotada. Além desses, a coleção contará com nomes importantes como Maliévitch, Gil Vicente, Goethe, Locke, Boécio, Büchner, Maquiavel, entre outros. Desse modo a editora mostra que livro bom pode ser barato.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/fernando-pessoa/poemas-completos-de-alberto-caeiro/2771095338?show_suggestion=0#'
  }
library[21] = b22;
b23 = {
    title: 'Iracema',
    resume: 'José de Alencar criou uma explicação poética para as origens de sua terra natal, daí o subtítulo da obra: "Lenda do Ceará". Iracema, a famosa "virgem dos lábios de mel" tornou-se símbolo do estado, e seu filho, Moacir, nascido de seus amores com o colonizador português Martim, representa o primeiro cearense fruto da união das duas raças. A história é uma representação do que aconteceu com a América na época da colonização européia.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/jose-de-alencar/iracema/3190945338?show_suggestion=0#'
  }
library[22] = b23;
b24 = {
    title: 'Senhora',
    resume: 'José de Alencar, um dos maiores autores do romantismo brasileiro, retrata neste livro a burguesia e seu temas voltados para o público feminino. O dinheiro é sempre um fator que aproxima ou afasta temporariamente os casais. Orgulho, ciúme e paixões bruscas movem os corações de seus personagens. A mulher, sempre bela e frágeil, sabe lutar pelo amor que escolhem até o final. Romance de paixão, amor, ódio, vingança e perdão.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/jose-de-alencar/senhora/4140866561?show_suggestion=0#'
  }
library[23] = b24;
b25 = {
    title: 'Como Dizer Tudo Em Inglês',
    resume: 'Este livro é uma ferramenta que auxilia o leitor a se expressar oralmente ou por escrito, usando as palavras certas no momento certo. A obra é projetada para ser usada durante anos, sempre que o usuário quiser achar uma expressão em inglês. Levando-se em conta que um idioma é mais que palavras, é cultura, costume e atitude, o livro oferece um conselho cultural-lingüístico onde for relevante. O leitor achará centenas de expressões de uso cotidiano nas seis seções em que se divide o livro - Inglês Geral; Inglês Comercial; Inglês para Palestras e reuniões; Inglês para Turismo e Hotelaria; Morando no Exterior; Expressões Comuns em Português.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/ron-martinez/como-dizer-tudo-em-ingles/1839805253?show_suggestion=0#'
  }
library[24] = b25;
b26 = {
    title: 'Como Dizer Tudo Em Francês',
    resume: 'Como dizer tudo em francês é uma obra de referência para aqueles que estudam e falam francês. O livro apresenta exemplos de comunicações naturais e possui um CD de áudio que pretende ajudar o leitor com a pronúncia do francês.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/ron-martinez-janice-sfreddo/como-dizer-tudo-em-frances/2019400320?show_suggestion=0#'
  }
library[25] = b26;
b27 = {
    title: 'Alemão Passo a Passo',
    resume: 'Explicações fáceis de compreender sobre expressões idiomáticas e formas verbais são oferecidas no meio do texto e as palavras e frases ensinadas podem ser usadas imediatamente na conversação. Você aprende não só o que dizer, mas também quando e como dizê-lo.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/charles-berlitz/alemao-passo-a-passo/910533906?show_suggestion=0#'
  }
library[26] = b27;
b28 = {
    title: 'Fundamentos da Linguística Contemporânea',
    resume: 'Nesta obra, Edward Lopes oferece um texto introdutório acerca da ciência do signo verbal. Dividido em seis partes, o livro começa com a definição do campo disciplinar e com o exame da contribuição capital de Ferdinand de Saussure, para em seguida, aprofundar-se no estudo da Fonética e da Fonologia, da Morfologia, das modalidades de Gramática e da Semântica. ',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/edward-lopes/fundamentos-da-linguistica-contemporanea/2433980?show_suggestion=0#'
  }
library[27] = b28;
b29 = {
    title: 'Dicionário de Linguística e Gramática',
    resume: 'Nesse dicionário, o autor oferece noções gramaticais como base para a compreensão estrutural, funcional e histórica da língua portuguesa, além de informar sobre fatos da língua, verbetes gramaticais, termos técnicos, entre outros temas.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/j-mattoso-camara-jr-/dicionario-de-linguistica-e-gramatica/2760248296?show_suggestion=0#'
  }
library[28] = b29;
b30 = {
    title: 'O Quinze',
    resume: 'Rachel de Queiroz está de volta à sua velha casa. A José Olympio comprou os direitos de publicação de suas obras, que serão relançadas com novo projeto gráfico. O Quinze foi o primeiro e mais popular romance da escritora. A história se dá em dois planos: um enfocando o vaqueiro Chico Bento e sua família; o outro, a relação afetiva entre Vicente, rude proprietário e criador de gado, e Conceição, sua prima culta e professora. Conceição é apresentada como uma moça amante dos livros e com tendências feministas e socialistas. O período de férias, ela passava na fazenda da família com a avó Mãe Nácia, no Logradouro, perto do Quixadá, onde morava seu primo Vicente. Com o advento da seca, a família de Mãe Nácia decide ir para cidade e deixar Vicente cuidando de tudo, resistindo. No segundo plano, Rachel apresenta a marcha trágica do vaqueiro Chico Bento com sua mulher e seus cinco filhos, representando os retirantes. Ele é forçado a abandonar a fazenda onde trabalhava. Com algum dinheiro, mantimentos e um animal, ruma para o Norte, onde há a extração da borracha. No percurso, o filho mais novo morre envenenado e o mais velho desaparece. Ao chegarem no campo de concentração, são reconhecidos por Conceição, sua comadre, que vai lhes prestar ajuda. Rachel conseguiu exprimir os anseios e angústias da sua região brasileira, integrada numa dimensão ficcional que se inaugurara com A Bagaceira, de José Américo de Almeida, em 1928.',
    linkDeCompra: 'https://www.estantevirtual.com.br/livros/rachel-de-queiroz/o-quinze/1842450730?show_suggestion=0#'
  }
library[29] = b30;

