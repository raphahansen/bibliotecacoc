// Gerado a partir da planilha oficial do acervo (Biblioteca - Planilha.pdf).
export type Level =
  | "LIVRE"
  | "EF01 - ENSINO FUNDAMENTAL I"
  | "EF02 - 6º-7º - ENSINO FUNDAMENTAL II"
  | "EF02 - 8º-9º - ENSINO FUNDAMENTAL II"
  | "EM - Ensino Médio";

export type LibraryBook = {
  id: string;
  title: string;
  author: string;
  category: string;
  collection: boolean;
  publisher: string;
  level: Level;
  synopsis: string;
};

export type Category = { name: string; slug: string; icon: string; count: number };

export const levels: { value: Level; label: string }[] = [
  {
    "value": "LIVRE",
    "label": "Livre"
  },
  {
    "value": "EF01 - ENSINO FUNDAMENTAL I",
    "label": "Fundamental I"
  },
  {
    "value": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "label": "Fundamental II · 6º-7º"
  },
  {
    "value": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "label": "Fundamental II · 8º-9º"
  },
  {
    "value": "EM - Ensino Médio",
    "label": "Ensino Médio"
  }
];

export const levelLabel = (l: Level) =>
  levels.find((x) => x.value === l)?.label ?? l;

export const bookCategories: Category[] = [
  {
    "name": "Quadrinhos",
    "slug": "quadrinhos",
    "icon": "Zap",
    "count": 130
  },
  {
    "name": "Estudos",
    "slug": "estudos",
    "icon": "GraduationCap",
    "count": 114
  },
  {
    "name": "Infantil",
    "slug": "infantil",
    "icon": "Baby",
    "count": 113
  },
  {
    "name": "Política",
    "slug": "politica",
    "icon": "Landmark",
    "count": 97
  },
  {
    "name": "Biografias",
    "slug": "biografias",
    "icon": "UserRound",
    "count": 82
  },
  {
    "name": "Poesia",
    "slug": "poesia",
    "icon": "PenLine",
    "count": 72
  },
  {
    "name": "Juvenil",
    "slug": "juvenil",
    "icon": "Backpack",
    "count": 67
  },
  {
    "name": "Terror e Suspense",
    "slug": "terror-e-suspense",
    "icon": "Ghost",
    "count": 67
  },
  {
    "name": "Autoajuda",
    "slug": "autoajuda",
    "icon": "Sparkles",
    "count": 63
  },
  {
    "name": "Africanidades",
    "slug": "africanidades",
    "icon": "Globe2",
    "count": 60
  },
  {
    "name": "Povos Originários",
    "slug": "povos-originarios",
    "icon": "Feather",
    "count": 50
  },
  {
    "name": "Contos",
    "slug": "contos",
    "icon": "BookOpen",
    "count": 47
  },
  {
    "name": "Diários",
    "slug": "diarios",
    "icon": "NotebookPen",
    "count": 40
  },
  {
    "name": "Cordéis e Fábulas",
    "slug": "cordeis-e-fabulas",
    "icon": "Scroll",
    "count": 31
  },
  {
    "name": "Fantasia para crianças",
    "slug": "fantasia-para-criancas",
    "icon": "Wand2",
    "count": 29
  },
  {
    "name": "Teatro",
    "slug": "teatro",
    "icon": "Drama",
    "count": 23
  },
  {
    "name": "Cartas",
    "slug": "cartas",
    "icon": "Mail",
    "count": 8
  },
  {
    "name": "Literatura Brasileira",
    "slug": "literatura-brasileira",
    "icon": "BookMarked",
    "count": 1
  },
  {
    "name": "Turismo",
    "slug": "turismo",
    "icon": "Plane",
    "count": 1
  }
];

export const catalog: LibraryBook[] = [
  {
    "id": "afirika-tecendo-poemas-alunos-do-2o-em-diversidade-2021",
    "title": "Afirika Tecendo Poemas",
    "author": "Alunos do 2º em Diversidade (2021)",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "akissi-ataque-dos-gatos-marguerite-abouet",
    "title": "Akissi Ataque dos Gatos",
    "author": "Marguerite Abouet",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Os gatos querem roubar seu peixe. O irmão mais velho só a deixa de lado. Os vizinhos não entendem a sua generosidade... Mas nada nem ninguém pode deter akissi no cumprimento de sua missão hiperultraproibida: explorar ao máximo o universo da bagunça na costa marfim."
  },
  {
    "id": "negrutude-socialista-iii-educacao-e-mercado-de-trabalho-curso-de-formacao-politi",
    "title": "Negrutude Socialista: Iii Educação e Mercado de Trabalho.",
    "author": "Curso de Formação Política",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Protagonismos negro; educação profissional, inovação e empreendedorismo; planejar para conquistar; desafios da negritude."
  },
  {
    "id": "12-anos-de-escravidao-solomon-northup",
    "title": "12 Anos de Escravidão",
    "author": "Solomon Northup",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Talvez a melhor obra dentre todas as narrativas sobre a vida de um escravo, 12 anos de escravidão é um livro de memórias angustiante sobre um dos períodos mais sombrios da história norte- americana. Ele relata como solomon northup, nascido um homem livre em nova york, foi atraído para washington, d.c., em 1841, com a promessa de um emprego, e então drogado, espancado e vendido como escravo. Ele passou os doze anos seguintes de sua vida em cativeiro, trabalhando, na maior parte do tempo, em uma plantação de algodão na louisiana."
  },
  {
    "id": "a-amizade-eterna-ilan-brenman",
    "title": "A Amizade Eterna",
    "author": "Ilan Brenman",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Cada conto deste livro tem no seu dna a sabedoria, o humor, a perspicácia e a celebração da vida, deixando um legado de inestimável valor para os homens do futuro."
  },
  {
    "id": "a-criacao-do-mundo-reginaldo-prandi",
    "title": "A Criação do Mundo",
    "author": "Reginaldo Prandi",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Adetutu, uma jovem africana, é aprisionada por caçadores de escravos e transportada ao brasil em um navio negreiro. Durante a terrível viagem, ela sonha com a criação do mundo pelos orixás, deuses e seu povo. Ela torce para oxalá realizar sua missão com sucesso, ganha a cumplicidade de exu, vibra com a atuação de xangô, emociona-se com iemanjá. Trazidos pelos escravos, os orixás se ambientam no brasil."
  },
  {
    "id": "a-nova-segregacao-racismo-e-encarceramento-em-massa-michelle-alexander",
    "title": "A Nova Segregação Racismo e Encarceramento em Massa",
    "author": "Michelle Alexander",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Vencedor de diversos prêmios e inspirador de uma nova geração de movimentos sociais antirracistas, este livro escancara o modo como o racismo estrutural opera hoje nas soiedades ocidentais. Ao analisar um contexto que guarda incômodas semelhanças com a realidade brasileira, a autora evidencia como o sistema de casatas raciais nos estados unidos não foi superado nas últimas décadas, mas apenas redesenhado: a escravidão e a segragação racial jurídica foram substituídas pelo encarceramento em massa como sistema de controle social racializado."
  },
  {
    "id": "aida-leontyne-prince",
    "title": "Aída",
    "author": "Leontyne Prince",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Há muito tempo, no distante reino da etiópia, vivia uma princesa delicada como o luar e bela como a estrela da manhã. Seu nome era aída, e ela amava seu pai e sua terra mais que tudo neste mundo. Numa das maiores histórias de amor de todos os tempos, aída a altiva princesa, é capturada por soldados egípcios e escravizada pelo inimigo de seu país. Quando ela se apaixona pelo líder do exército egípcio, inicia-se uma terrível luta em seu coração. Devia ainda renunciar à lealdade para com seu pai e sua terra por causa de seu grande amor - um guerreiro destinado a destruí-los?"
  },
  {
    "id": "almanaque-afro-indigena-cristina-astolfi",
    "title": "Almanaque Afro-indígena",
    "author": "Cristina Astolfi",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "No brasil, encontramos diferentes culturas, todas especiais e únicas. Com tanta diversidade, as tradições dos povos indígenas e africanos se misturaram, dando origem a muitas palavras, danças e práticas que permanecem até os dias de hoje."
  },
  {
    "id": "atlas-geocultural-da-africa-odair-marques-da-silva",
    "title": "Atlas Geocultural da África",
    "author": "Odair Marques da Silva",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "caderno-de-rimas-do-joao-lazaro-ramos",
    "title": "Caderno de Rimas do João",
    "author": "Lázaro Ramos",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "João escolheu fazer um caderno à sua maneira. Quem leu primeiro perguntou: isso aí não é besteira? E joão já respondeu: criei um jeito de fazer isso aqui mais divertido. Entender algumas coisas de um modo mais colorido."
  },
  {
    "id": "carolina-maria-de-jesus-adriana-de-almeida-navaro",
    "title": "Carolina Maria de Jesus",
    "author": "Adriana de Almeida Navaro",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Carolina maria de jesus deixou alguns legados que sempre serão lembrados: o talento para a escrita e a força para sobreviver a cada dia da forma que podia. Neste belíssimo livro ilustrado, conhecemos um pouco sobre essa grande mulher."
  },
  {
    "id": "como-o-rio-da-liberdade-vanessa-alexandre",
    "title": "Como o Rio da Liberdade",
    "author": "Vanessa Alexandre",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Sadiki e ayana são bons amigos, que vivem ás margens do rio omo, na nigéria. Vivem uma vida livre, não onhecem as dores sa escravidão. O que os liberta é a natureza. O que os liberta é a criatividae. O que os liberta, é a arte."
  },
  {
    "id": "contos-africanos-coautoria",
    "title": "Contos Africanos",
    "author": "Coautoria",
    "category": "Africanidades",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EM - Ensino Médio",
    "synopsis": "A áfrica e o brasil são separados por um oceano. O mar, porém, não é suficiente para afogar o que os une. Há semelhanças nos gestos, no paladar, no canto, na miséria, na violência, em certa alegria melancólica e no colorido que invadem o variado cotidiano de lá e cá."
  },
  {
    "id": "contos-africanos-ernesto-rodriguez-abad",
    "title": "Contos Africanos",
    "author": "Ernesto Rodríguez Abad",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Os medos dormem quando narramos uma história. O medo dos monstros, das feras, do desconhecido, da selva inexplorada, da dúvida interior, do mar de incertezas encontra sossego quando as palavras acariciam os ouvidos."
  },
  {
    "id": "danite-e-o-leao-rogerio-a-barbosa",
    "title": "Danite e o Leão",
    "author": "Rogério A. Barbosa",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "No coração da etiópia, uma história de respeito, fé, coragem e superação. Danite é mais que uma mulher forte e dedicada, determinada a superar um obstáculo: ela também é feita de puro afeto e ternura."
  },
  {
    "id": "debret-cenas-de-uma-sociedade-escravista-raymundo-campos",
    "title": "Debret Cenas de uma Sociedade Escravista",
    "author": "Raymundo Campos",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Diários de viagens, memórias e relatos de estrangeiros que deixaram registradas suas impressões sobre o brasil. Até agora esses documentos eram acessíveis apenas a historiadores e pesquisadores, que os utilizam como preciosas fontes de estudo de nossa história."
  },
  {
    "id": "diacui-flor-dos-campos-duclerc-silva",
    "title": "Diacuí Flor dos Campos",
    "author": "Duclerc Silva",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "ei-voce-dapo-adeola",
    "title": "Ei, Você!",
    "author": "Dapo Adeola",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "felicidade-nao-tem-cor-julio-emilio-braz",
    "title": "Felicidade Não Tem Cor",
    "author": "Júlio Emílio Braz",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Você é negro, branco, amarelo, marrom ou cor-de-rosa? Você gostaria de trocar de cor? Ficar, quem sabe, vermelho, laranja, verdinho? Foi isso que fael resolveu fazer: mudar de cor para acabar com as gozações de romãozinho. Maria mariô não gostou nem um pouco da idéia. Mas quem dava ouvidos a elas?"
  },
  {
    "id": "feminismos-plurais-cotas-raciais-livia-sant-anna-vaz",
    "title": "Feminismos Plurais: Cotas Raciais",
    "author": "Livia Sant´anna Vaz",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Entender a radicalidade das ações afirmativas e a modalidade de cotas destinadas às pessoas negras, no brasil, é tarefa de todas as pessoas que prezam e cuidam da democracia."
  },
  {
    "id": "feminismos-plurais-racismo-estrutural-silvio-almeida",
    "title": "Feminismos Plurais: Racismo Estrutural",
    "author": "Silvio Almeida",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Racismo estrutural traz reflexões inovadoras acerca da construção das noções de raça e racismo."
  },
  {
    "id": "feminismos-plurais-trabalho-domestico-juliana-teixeira",
    "title": "Feminismos Plurais: Trabalho Doméstico",
    "author": "Juliana Teixeira",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Se fomos violentamente afastadas de possibilidades de escrita de nossas histórias, trazemos esses registros em nossos corpos marcados pelo/no trabalho doméstico.é desse lugar que evidenciamos a construção de uma sociedade na qual ele não seja base de explorações."
  },
  {
    "id": "feminismos-plurais-transfeminismo-leticia-nascimento",
    "title": "Feminismos Plurais: Transfeminismo",
    "author": "Letícia Nascimento",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O transfeminismo é importante para a construção da cidadania de travestis e transexuais, já que é fundamental que valorizemos nossos saberes.infelizmente, a falta de conhecimento também contribui para a transfobia, mas o mais valioso é que este livro impactará muito nas vidas trans."
  },
  {
    "id": "formas-e-cores-da-africa-mercia-maria-leitao-e-neide-duarte",
    "title": "Formas e Cores da África",
    "author": "Mércia Maria Leitão e Neide Duarte",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Nesta fantástica narrativa, um avô apresenta a seu neto elementos culturais da áfrica falando sobre arte e mostrando ele belas máscaras, esculturas e instrumentos musicais. E você? Topa viajar por estas histórias e conhecer a diversidade e riqueza do continente africano?"
  },
  {
    "id": "ganga-zumba-rogerio-borges",
    "title": "Ganga Zumba",
    "author": "Rogério Borges",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Numa terra cheia de opressão e injustiça, um dia, o menino escravizado e humilhado finalmente se liberta e vai criar o maior símbolo da resistência e da liberdade do brasil. Ganga zumba já foi rei nesta terra. Por meio de um texto sensível e de belíssimas imagens, este livro traz um pouco da história do personagem que virou lenda e fundou o quilombo dos palmares."
  },
  {
    "id": "historias-africanas-para-contar-e-recontar-rogerio-a-barbosa",
    "title": "Histórias Africanas para Contar e Recontar",
    "author": "Rogério A. Barbosa",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A áfrica com sua \"vastidão e diversidade, é o palco onde as histórias fantásticas reunidas neste livro acontecem. Essas narrativas, ilustradas com muita cor, são um convite ao maravilhoso mudo das histórias ancestrais transmitidas de pais para filhos, de avós para netos."
  },
  {
    "id": "historias-da-preta-heloisa-pires-lima",
    "title": "Histórias da Preta",
    "author": "Heloisa Pires Lima",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "De que cor é a preta? Ela é marrom. É da cor dos olhos dos pais dela. De onde ela é? Ela é aqui mesmo, do brasil. Mas de certo modo, veio do outro lao do oceano - da áfrica, a primeira casa das pessoas negras. As histórias da preta falam de um povo que veio para o brasil a força. Homens, mulheres e crianças foram arrancados de suas terras e tiveram que trabalhar como escravos. Perderam toda a liberdade. No entanto, sobeviveram á escravidão e souberam fazer uma segunda casa: hoje, quase metade da população do brasil tem origens africanas. Como é ser negro aqui nesse país? Faz diferença ou tanto faz? Uma recordação da infância, um conto sobre o deus que dormiu debaixo da árvore, uma experiência de racismo:de história em história a preta vai contando com quantas cores se faz uma pessoa negra."
  },
  {
    "id": "irmaos-pretos-hannes-binder-lisa-tetzner",
    "title": "Irmãos Pretos",
    "author": "Hannes Binder/lisa Tetzner",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Giorgio mora em sonogno, no cantão de ticino,. Região italiana da suiça, ele tem 13 anos e sua história se passa em 1838. Afetada pela miséria em decorrência da seca. A família do garoto o vende para trabalhar em milão como lipador de chaminés. Lá em regime de escravidão. Giorgio é forçado a viver situações de extremo perigo."
  },
  {
    "id": "juruna-mario-juruna",
    "title": "Juruna",
    "author": "Mário Juruna",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "A COLEÇÃO KARIRI APRESENTA BIOGRAFIAS DE PERSONALIDADES INDÍGENAS QUE FIZERAM DE SUA TRAJETÓRIA UM EXEMPLO DE RESISTêNCIA. ESTE LIVRO CONTA A HISTÓRIA DE MÁRIO JURUNA, LÍDER INDÍGENA E POLÍTICO BRASILEIRO. ELE LUTOU CONTRA O ESTATUTO DO ÍNDIO, QUE PERMITIA QUE OS INDÍGENAS FOSSEM REMOVIDOS DE SUAS TERRAS PELO GOVERNO."
  },
  {
    "id": "malaika-cassiana-pizaia",
    "title": "Malaika",
    "author": "Cassiana Pizaia",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ficamos caladas por muito tempo. Minha mãe só me largou quando nos trouxeram uma vela, um jarro d'água e um prato de cozido. Ela comeu um pouquinho e me deu todo o resto. Eu tinha ficado o dia todo sem almoço, mas só lembrei disso na primeira garfada. Raspei o prato. Aquela foi minha primeira noite fora de casa. A primeira em que deixei de acreditar que paredes e tetos podiam me proteger. Em que só confiei nos braços de mamãe para cuidar de mim quando o som das metralhadoras parecia próximo."
  },
  {
    "id": "mandela-vidas-que-inspiram",
    "title": "Mandela",
    "author": "Vidas que Inspiram",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Nelson mandela foi sinônimo de luta, de força e de coragem. Neste belíssimo livro ilustrado, conhecemos um pouco sobre esse homem, que inspira a todos com uma história marcante."
  },
  {
    "id": "meninos-em-guerra-jerry-piasecki",
    "title": "Meninos em Guerra",
    "author": "Jerry Piasecki",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "A rotina de thomas era ir á escola, todas as manhãs, se arrastando de sono. Já deng caçula de três irmãos, ajudava os pais na pequena roça da família. Eles moram relativamente perto, mas nem podiam imaginar que um triste acontecimento os colocaria lado a lado. Sequestrados por milicianos de uma república africana em conflito, thomas e deng são forçados a guerrilhar."
  },
  {
    "id": "mitos-africanos-gary-jeffrey",
    "title": "Mitos Africanos",
    "author": "Gary Jeffrey",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Os antigos africanos adoravam contar histórias e entoar canções. Essa tradição oral atravessou gerações e chegou aos dias de hoje. Originada em diversos lugares e tribos, a mitologia africana é um rico tesouro, com personagens fascinantes e histórias incríveis."
  },
  {
    "id": "mulheres-quilombolas-selma-dos-santos-dealdina",
    "title": "Mulheres Quilombolas",
    "author": "Selma dos Santos Dealdina",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro traz as vozes de dezoito mulheres de diferentes comunidades quilombolas, de todas as regiões do país, para tratar de temas fundamentais para a nossa sociedade a partir de suas cosmovisões e elaborações de mundo."
  },
  {
    "id": "mzungu-meja-mwangi",
    "title": "Mzungu",
    "author": "Meja Mwangi",
    "category": "Africanidades",
    "collection": false,
    "publisher": "Edições Sm\"",
    "level": "EM - Ensino Médio",
    "synopsis": "Mzungu é \" menino branco\" em swahili, mas isso não importa muito para kariuki e neigel. Também parece não importar o fato de nigel ser inglês e neto do dono das tarras onde a família de kariuki mora. Naqueles meses de 1950, quando o quênia começava a lutar pela independência, kariuki nigel - negro e branco, queniano e inglês - só querem caçar o velho moisés, um porco-selvagem que vive na floresta. Entre rebeliões e mortes os dois descobrem que a verdadeira amizade independe da cor da pele, da riqueza e do poder: precisa apenas de respeito e confiança."
  },
  {
    "id": "nao-gostamos-de-dar-tchau-anna-claudia-ramos",
    "title": "Não Gostamos de Dar Tchau",
    "author": "Anna Claudia Ramos",
    "category": "Africanidades",
    "collection": false,
    "publisher": "Fundação Editora da Unesp",
    "level": "LIVRE",
    "synopsis": "Duas crianças inseparáveis. Às vezes, elas são diferentes,às vezes, são iguais. Juntas, elas brincam, se divertem e aproveitam cada instante. Mas há um momento em que não gostam nem de pensar: a hora de dar tchau!"
  },
  {
    "id": "negritude-socialista-ii-espacos-de-poder-e-enfrentamento-ao-racismo-curso-de-for",
    "title": "Negritude Socialista: Ii Espaços de Poder e Enfrentamento ao Racismo.",
    "author": "Curso de Formação Política",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Superação da guetização; engajamento nos movimentos sociais e políticos; religião e espiritualidade; organização da negritude; enfrentamento permanente ao racismo."
  },
  {
    "id": "negrutude-socialista-i-analise-historica-filosofica-politica-e-economica-o-povo-",
    "title": "Negrutude Socialista: I Análise Histórica, Filosófica, Política e Econômica o Povo Negro.",
    "author": "Curso de Formação Política",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Análise histórica e política do povo negro; povo negro na brasil; aspectos filosóficos e políticos da nrgritude; políticas públicas de igualdade racial; normativas fundamentais."
  },
  {
    "id": "no-seu-pescoco-chimamanda-ngozi-adichie",
    "title": "No Seu Pescoço",
    "author": "Chimamanda Ngozi Adichie",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Nas narrativas que compõe no seu pescoço, encontramos a sensibilidade de chimamanda ngozi adichie voltada para a temática da imigração, do preconceito racial, dos conflitos religiosos e das relações familiares."
  },
  {
    "id": "o-enegrecer-psicopedagogico-clarissa-brito",
    "title": "O Enegrecer Psicopedagógico",
    "author": "Clarissa Brito",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Clarissa brito vivenciou a reprodução da desigualdade racial na educação e percebeu que a exclusão de pessoas pretas era um projeto. Consciente de seu papel enquanto agente de transformação social, sabia também dos desafios para implementar de fato ações que possibilitassem a superação de um quadro desfavorável e complexo."
  },
  {
    "id": "o-haiti-de-jean-cassiana-pizaia",
    "title": "O Haiti de Jean",
    "author": "Cassiana Pizaia",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Todo mundo lembra onde estava e o que fazia nas últimas horas do tempo de \"antes\". Foi o assunto mais comum em porto príncipe por muitos meses. Acho que é porque aquele dia nunca acabou de verdade."
  },
  {
    "id": "o-pequeno-principe-preto-rodrigo-franca",
    "title": "O Pequeno Príncipe Preto",
    "author": "Rodrigo França",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "o-sol-da-liberdade-giselda-laporta-nicolelis",
    "title": "O Sol da Liberdade",
    "author": "Giselda Laporta Nicolelis",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "\"um iorubá não se rende no campo de batalha... Um iorubá nunca ser'esctravo de ninguém... Livre nasceu... Livre morrerá...\" ajahi, um princípe da etnia ioruba, recorda as palavras de seu pai, o rei namonim, no portão de um navio negreiro, que parte da áfrica a caminho das terras brasileiras."
  },
  {
    "id": "para-educar-criancas-feministas-um-manifesto-chimamanda-ngozi-adichie",
    "title": "Para Educar Crianças Feministas um Manifesto",
    "author": "Chimamanda Ngozi Adichie",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "\"ensine a ela que 'papéis de gênero' são totalmente absurdos. Nunca lhe diga para fazer ou deixar de fazer alguma coisa 'porque você é menina'. ' porque você é menina' nunca é razão para nada. Jamais."
  },
  {
    "id": "pequeno-manual-antirracista-djamila-ribeiro",
    "title": "Pequeno Manual Antirracista",
    "author": "Djamila Ribeiro",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "A noção de que o racismo é um sistema de opressão que nega direitos e não um simples ato voluntário individual vem se solidificando nos últimos anos. Reconhecer que o racismo estrutura a nossa sociedade, criando desigualdade e fraturas, pode ser paralisnte. Afinal, como enfrentá-lo? Djamila ribeiro argumenta que a ação antirracista é urgente e se dá nas atitudes cotidianas. E mais : é uma luta de todas e todos."
  },
  {
    "id": "preta-black-e-la-negra-monika-papescu",
    "title": "Preta, Black e La Negra",
    "author": "Monika Papescu",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Três vacas fogem das condenações anunciadas pelos reis de suas terras de origem por cometerem faltas imperdoáveis: preta come todas as flores que encontra; black não deixa escapar nem um pé de alface e la negra adora deixar \"presentes\" na frente das portas. Para escapar da perseguição dos reis, as vacas embarcam numa nau de corsário, desejando encontrar a terra onde todas elas são consideradas sagradas. A partir daí, uma grande aventura se inicia."
  },
  {
    "id": "pretinho-meu-boneco-querido-maria-cristina-furtado",
    "title": "Pretinho Meu Boneco Querido",
    "author": "Maria Cristina Furtado",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O quarto de nininha guarda um segredo. Quem vê os seus lindos bonecos nem imagina que eles podem falar com a menina! O sorriso e orgulho que cada um carrega também chamam a atenção. Mas as coisas nem sempre foram assim...ao ganhar pretinho, um boneco negro como ela, nininha passa a tratá-lo com imenso carinho, o que desperta o ciúme e alimenta o preconceito dos bonecos mais antigos. Entretanto, o que parecia uma tragédia tem um final feliz. Vamos conhecer a história de nininha e seus bonecos."
  },
  {
    "id": "princesas-negras-ariane-celestino-meireles",
    "title": "Princesas Negras",
    "author": "Ariane Celestino Meireles",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Existem muitas delas, estão espalhadas por toda parte do brasil e do mundo. Mas só as veem as pessoas diferentes. Porque as princesas negras para serem vistas têm de ser, antes sentidas. Assim como sentimos você!"
  },
  {
    "id": "privilegios-brancos-no-mercado-de-trabalho-matheus-carvalho",
    "title": "Privilégios Brancos no Mercado de Trabalho",
    "author": "Matheus Carvalho",
    "category": "Africanidades",
    "collection": false,
    "publisher": "Matrioska Editora",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Neste livro, temos uma construção de crítica ao modelo que privilegia os brancos, apontando os elementos históricos genéticos e sociais que consolidam esse edifício chamado racismo."
  },
  {
    "id": "quem-tem-medo-do-feminismo-negro-djamila-ribeiro",
    "title": "Quem Tem Medo do Feminismo Negro?",
    "author": "Djamila Ribeiro",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "\"ao perder o medo do feminismo negro, as pessoas privilegiadas perceberão que nossa luta é urgente, pois enquanto nós, mulheres negras, seguirmos sendo alvo de constantes ataques a humanidade toda corre perigo\"."
  },
  {
    "id": "quinzinho-luciano-ramos",
    "title": "Quinzinho",
    "author": "Luciano Ramos",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "A história de quinzinho e sua família coloca na páginas afetuosas de um livro infantil alguns dos principais desafios das famílias negras no brasil: educar uma criança não só para ser feliz mas também para lidar com os efeitos psicossociais do racismo, tirar do apagamento boas histórias dos nossos ancestrais e, ainda, estabelecer uma referência positiva de pai preto presente."
  },
  {
    "id": "racismo-preconceito-e-intolerancia-edson-borges",
    "title": "Racismo, Preconceito e Intolerância",
    "author": "Edson Borges",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Poucas sociedades passaram, nas últimas década, por tão profundas e rápidas transformações como a sociedade brasileira. Seu tradicional perfil agrário deu lugar a uma nova realidade industrial e urbana, marcada, contudo, por graves problemas decorrentes dessas mudanças, cujas soluções constituem um grande desafio."
  },
  {
    "id": "saba-e-a-planta-magica-yann-degruel",
    "title": "Sabá e a Planta Mágica",
    "author": "Yann Dégruel",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Há muito tempo, na abissínia, atual etiópia, uma menina chamada sabá, curiosa e inteligente, decidiu seguir uma cabra selvagem. Muito esperta. Na verdade, o animalzinho gostava de brincar e de ir todos os dias ao topo da montanha para desfrutar de uma planta misteriosa, um tesouro cpm aroma intenso logo descoberto, saboreado e apreciado pelos humanos: o café!"
  },
  {
    "id": "som-contos-africanos-rogerio-a-barbosa",
    "title": "Som Contos Africanos",
    "author": "Rogério A. Barbosa",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "torrente-ancestral-vidas-negras-importam-juliana-souza",
    "title": "Torrente Ancestral, Vidas Negras Importam?",
    "author": "Juliana Souza",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro de juliana é um convite a uma longa reflexão, diante da secular violêolencia racial impetrada á população negra e indígena neste país. Já nas primeiras linhas, somos impactados com sua narrativa, a morte de george floyd e a articulação mundial de jovens negros em busca de justiça, e a crítica ao processo racista ue perpassa gerações."
  },
  {
    "id": "um-colo-para-iaiazinha-salizete-soares",
    "title": "Um Colo para Iaiazinha",
    "author": "Salizete Soares",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Este livro narra uma história que nos ensina lições de amor, justiça e solidariedade. Texto que nos transporta no tempo, lá nos longes da senzala, despertando emoções que fazem nosso coração dar-se conta de como o afeto é maior que as incompreensões, as intolerâncias e os preconceitos."
  },
  {
    "id": "um-encontro-com-a-liberdade-julio-emilio-braz",
    "title": "Um Encontro com a Liberdade",
    "author": "Júlio Emílio Braz",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Filho de valentim, comerciante português, e henriqueta, sua companheira e escrava, gabriel nasce no rio de janeiro. Ainda criança perdeu a mãe e desde sempre serve ao pai nos estabelecimentos comerciais da capital. Lá, adolescente, identifica-se com as conversas abolicionistas e fica indignado com sua situação: escravo do próprio pai."
  },
  {
    "id": "um-fotografo-diferente-chamado-debret-mercia-maria-leitao-e-neide-duarte",
    "title": "Um Fotógrafo Diferente Chamado Debret",
    "author": "Mércia Maria Leitão e Neide Duarte",
    "category": "Africanidades",
    "collection": true,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Que tal relembrar um pouco do passado pelo olhar de um artista sensacional que viveu há muito tempo? Jean-baptiste debret chegou ao brasil no século xix, e registrou o cotidiano e as incríveis peculiaridades do nosso país."
  },
  {
    "id": "zekeye-vai-a-escola-nathalie-dieterle",
    "title": "Zekeyê Vai Á Escola",
    "author": "Nathalie Dieterle",
    "category": "Africanidades",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Ir à escola sozinho, que aventura para o pequeno zekeyê! Principalmente quando a escola é longe, muito longe. \"não saia do caminho, não fale com ninguém nem pare em lugar algum\", recomenda a vovó bambu. Mas, na savana, zekeyê tem uns encontros estranhos e esquece os bons conselhos que recebeu. É aí que os problemas começam..."
  },
  {
    "id": "e-tempo-de-viver-mais-e-melhor-dr-lair-ribeiro",
    "title": "É Tempo de Viver Mais e Melhor",
    "author": "Dr. Lair Ribeiro",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Este é um livro simples, leve e descontraído, sim, mas para ser levado muito a sério! Ele foi escrito exatamente porque estamos vivos hoje e para que possamos viver mais e melhor"
  },
  {
    "id": "20-regras-de-ouro-para-educar-filhos-e-alunos-augusto-cury",
    "title": "20 Regras de Ouro para Educar Filhos e Alunos",
    "author": "Augusto Cury",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Academia",
    "level": "EM - Ensino Médio",
    "synopsis": "Apresenta orientações para pais e professores desenvolverem uma educação baseada em afeto, respeito e limites"
  },
  {
    "id": "a-face-oculta-maria-tereza-maldonado",
    "title": "A Face Oculta",
    "author": "Maria Tereza Maldonado",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Saraiva",
    "level": "EM - Ensino Médio",
    "synopsis": "Luciana fica até altas horas em seu computador,trocando mensagens com muitos amigos em sua rede de relacionamentos.ela acha a realidade virtual muito mais interesse.mas quando marcelo escolhe ela como alvo e começa a bombardeá-lacom mensagens ofensivas pelo computador.quem vai tomar uma atitude para coibir essa guerra ?"
  },
  {
    "id": "a-virtude-da-raiva-arun-gandhi",
    "title": "A Virtude da Raiva",
    "author": "Arun Gandhi",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Sextante",
    "level": "EM - Ensino Médio",
    "synopsis": "Tratados com a leveza do olhar de um jovem,temas universais como formação da identidade, gerenciamneto da raiva,depressão,solidão ,amizade e família ganham a luz dos ensinamentos do maior líder pacifista de nosso tempo."
  },
  {
    "id": "a-virtude-da-raiva-arun-ghandi",
    "title": "A Virtude da Raiva",
    "author": "Arun Ghandi",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Sextante",
    "level": "EM - Ensino Médio",
    "synopsis": "Nessa história mostra o caminho da raiva para não violência, você vai conhecer dez lições essenciais ensinadas por mahatma ghandi a seu neto arun"
  },
  {
    "id": "admirando-o-tempo-e-brincando-com-o-vento-guilherme-davoli",
    "title": "Admirando o Tempo e Brincando com o Vento",
    "author": "Guilherme Davoli",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Se falar do humano é necessário,então por que não se buscar lentes mais leves e coloridas para essa interpretação? Muito mais do que seres passíveis de erro,os humanos se diferenciam a partir de suas capacidades de gerar e gerir o próprio mundo."
  },
  {
    "id": "aprenda-a-falar-bem-e-impulsione-sua-carreira-john-w-osborne",
    "title": "Aprenda a Falar Bem e Impulsione Sua Carreira",
    "author": "John W. Osborne",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "É impossível crescer profissionalmente e atingir cargos de direção em uma empresa sem saber se comunicar bem oralmente. Nas mais diversas situações, o executivo de hoje é chamado a falar em público: seja dirigindo reuniões, mesas-redondas e seminários ou disctindo projetos futuros. O crescimento pessoal na empresa está ligado a saber se expressar bem."
  },
  {
    "id": "as-chaves-da-felicidade-coautoria",
    "title": "As Chaves da Felicidade",
    "author": "Coautoria",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "50 hábitos comprovados pela ciência para tornar a vida mais saudável, leve e feliz (mesmo em tempos difíceis)"
  },
  {
    "id": "bullying-dejane-mascarenhas",
    "title": "Bullying",
    "author": "Dejane Mascarenhas",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Dma",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro conta a história de lucélia jupira, uma menina que se muda do rio de janeiro para o litoral paulista e passa a ser alvo de bullying e xenofobia na nova escola por causa de seu sotaque. Os colegas de classe zombam dela, e lu se sente insegura e cheia de medos, deixando de demonstrar toda a sua inteligência. Porém, quando a escola realiza um projeto complexo para a feira multidisciplinar, lucélia lidera a equipe e brilha na apresentação, mostrando sua verdadeira capacidade. Ao ser alvo de críticas novamente, ela se posiciona contra o bullying e conscientiza todos sobre seus efeitos prejudiciais."
  },
  {
    "id": "bullying-estraegias-de-sobrevivencia-para-criancas-e-adultos-coautoria",
    "title": "Bullying Estraégias de Sobrevivência para Crianças e Adultos",
    "author": "Coautoria",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Artmed",
    "level": "EM - Ensino Médio",
    "synopsis": "Abordam casos de bullying para chegar na raíz do problema e estratégias de combate ao bullying. Fazendo com que os bullies possam encontrar uma forma de viver e romper esse ciclo destrutivo na sociedade."
  },
  {
    "id": "bullying-mentes-perigosas-nas-escolas-ana-beatriz-barbosa-silva",
    "title": "Bullying: Mentes Perigosas nas Escolas",
    "author": "Ana Beatriz Barbosa Silva",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Como identificar e combater o preconceito, a violência e a covardia entre alunos"
  },
  {
    "id": "caminhos-de-solidariedade-coautoria",
    "title": "Caminhos de Solidariedade",
    "author": "Coautoria",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Gente",
    "level": "EM - Ensino Médio",
    "synopsis": "Situações como meninos morando na rua, mendigos, velhinhos jogados em asilos, pessoas pedindo dinheiro em todos os lugares - em ônibus e semáforos, por exemplo - têm sido encaradas como um problema dos outros: das várias instâncias governamentais, das instituições de caridade etc. Tornaram-se tão corriqueiras que despertam, em grande parte das pessoas, apenas um sentimento: a indiferença. Afinal, cada um já tem muito problema com que se preocupar - pois são os próprios e os da família. E já está de bom tamanho, não é mesmo? Não, não é mesmo, este livro prova justamente o contrário: que é necessário fazer alguma coisa, mesmo que para isso tenhamos de recorrer ao velho clichê \" a união faz a força\". Que não dá mais para esperar apenas pelos outros."
  },
  {
    "id": "como-educar-familia-para-futuros-desafiadores-coautoria",
    "title": "Como Educar Família para Futuros Desafiadores",
    "author": "Coautoria",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O livro aborda a importância da participação da família na formação das crianças e dos adolescentes"
  },
  {
    "id": "como-se-livrar-da-timidez-raymond-de-saint-laurent",
    "title": "Como se Livrar da Timidez",
    "author": "Raymond de Saint-laurent",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Nesta obra, é abordada maneiras de superar a timidez, o medo do julgamento e desenvolva a autoconfiança"
  },
  {
    "id": "como-sobreviver-em-familia-catherine-mathelin-e-bernadette-costa-prades",
    "title": "Como Sobreviver em Família",
    "author": "Catherine Mathelin e Bernadette Costa-prades",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ao ler este livro você pode aprender e compreender melhor o universo que o cerca, e principalmente, a fortalecer o elo de comunicação com seus familiares"
  },
  {
    "id": "compaixao-como-conceito-de-totalidade-fernando-moraes",
    "title": "Compaixão Como Conceito de Totalidade",
    "author": "Fernando Moraes",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Novo Conceito",
    "level": "EM - Ensino Médio",
    "synopsis": "Apresenta a compaixão como um valor essencial da vida humana. O autor incentiva a prática da empatia, do respeito e da solidariedade, destacando que pequenas atitudes podem transformar pessoas e comunidades."
  },
  {
    "id": "convivendo-com-as-diferencas-coautoria",
    "title": "Convivendo com as Diferenças",
    "author": "Coautoria",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "LIVRE",
    "synopsis": "Nestes livros, hstórias ligadas ao dia-a-dia, jogos-testes e informações criteriosas ajudam a criança a perceber que ela também faz parte da sociedade e tem um importante papel a cumprir"
  },
  {
    "id": "educacao-familiar-presente-e-futuro-icami-tiba",
    "title": "Educação Familiar Presente e Futuro",
    "author": "Içami Tiba",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Integrare Editora",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "emocoes-ainda-existem-cesar-romao",
    "title": "Emoções Ainda Existem",
    "author": "Cesar Romão",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Muito mais que um livro, um presente para a esperança de todos aqueles que vivem em busca de novas emoções, sentimento e razões de existência. Muitas das perguntas que nos fazemos todos os dias, estão nesse livro, ocultas em meáforas que lhe farão repensar seus valores, objetivos, seu amor e destino"
  },
  {
    "id": "eu-nao-sou-assim-veronique-le-jeune-e-philippe-eliakim",
    "title": "Eu Não Sou Assim!",
    "author": "Véronique Le Jeune e Philippe Eliakim",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A obra explica as principais transformações biológicas e hormonais do corpo, enquanto aborda os impactos emocionais dessa fase, como as crises de autoestima e a relação com o espelho. Servindo como suporte acolhedor para desmistificar tabus"
  },
  {
    "id": "eu-no-espelho-coautoria",
    "title": "Eu no Espelho",
    "author": "Coautoria",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Esses livros tratam de questões muito presentes no cotidiano dos adolescentes, como a autoestima, além de falar do bollying e violência, práticas que precisam ser urgentementebanidas da escola"
  },
  {
    "id": "execucao-a-disciplina-para-atingir-resultados-larry-bossidy-e-ram-charan",
    "title": "Execução: a Disciplina para Atingir Resultados",
    "author": "Larry Bossidy e Ram Charan",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Este é um livro sobre como fechar a lacuna entre os resultados prometidos e os alcançados. Realizações bem-sucedidas resultaram da prática voltada para a execução: unir pessoas, estratégia e operações."
  },
  {
    "id": "familia-de-alta-performance-conceitos-contemporaneos-na-esucacao-icami-tiba",
    "title": "Família de Alta Performance Conceitos Contemporâneos na Esucação",
    "author": "Içami Tiba",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Integrare Editora",
    "level": "EM - Ensino Médio",
    "synopsis": "Num mundo de tantas modificações e crises não é mais possível funcionar como sempre o fizemos. Precisamos renovar, reiventar, procurar saídas globais para atingirmos essa nova fase de evolução da humanidade. Este livro se propõe a mostrar alguns caminhos para a família e para nós todos sermos pessoas melhores através da alta performance."
  },
  {
    "id": "fazer-o-bem-pra-quem-marcos-ribeiro",
    "title": "Fazer o Bem, Pra Quem?",
    "author": "Marcos Ribeiro",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Nesta obra você vai aprender como fazer o bem e ajudar outras pessoas. E também ver histórias de pessoais reais que ajudam quem precisa"
  },
  {
    "id": "felicidade-construida-paul-dolan-e-ph-d",
    "title": "Felicidade Construída",
    "author": "Paul Dolan e Ph. D.",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EM - Ensino Médio",
    "synopsis": "Em vez de focar apenas em mudar a mentalidade, dolan ensina o leitor a reorganizar seu ambiente e direcionar sua atenção para construir hábitos que tragam mais satisfação diária"
  },
  {
    "id": "fenomenologia-david-r-cerbone",
    "title": "Fenomenologia",
    "author": "David R. Cerbone",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Editora Vozes",
    "level": "EM - Ensino Médio",
    "synopsis": "Que haja descrições que se apliquem à experiência visual sem necessariamente se aplicarem aos objetos dessa experiência ajuda a tornar vívida a distinção entre o que vemos e nosso ver das coisas. Concentramos nossa atenção não tanto no que experienciamos lá fora no mundo, mas em nossa experiência do mundo, é dar o primeiro passo na prática da fenomenologia."
  },
  {
    "id": "fiesta-para-dizer-eu-te-amo-david-baird",
    "title": "Fiesta para Dizer \"eu Te Amo\"",
    "author": "David Baird",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro trás diferentes maneiras de dizer que ama alguém de formas bem humoradas"
  },
  {
    "id": "filhos-adultos-mimados-pais-negligenciados-tania-zagury",
    "title": "Filhos Adultos Mimados, Pais Negligenciados",
    "author": "Tania Zagury",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Record",
    "level": "EM - Ensino Médio",
    "synopsis": "Esse livro foi escrito para você que está criando seus filhos com muito carinho, orgulho e amor - mas também com bastante insegurança e cansaço. Irá ajuda-o muito a admnistrar o seu dia a dia e, mais importante, mostrará de que forma o que você fizer hoje influenciará a relação com seus filhos no futuro"
  },
  {
    "id": "help-me-eduque-rossandro-klinjey",
    "title": "Help! Me Eduque",
    "author": "Rossandro Klinjey",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Com esse livro, queremos gerar impacto positivo na aprendizagem e facilitar a aquisiçãode habilidades essencais para a vida pessoal, acadêmica, social e profissional"
  },
  {
    "id": "inteligencia-socioemocional-augusto-cury",
    "title": "Inteligência Socioemocional",
    "author": "Augusto Cury",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Sextante",
    "level": "EM - Ensino Médio",
    "synopsis": "Ensina como estimular nos jovens a consciência crítica, a inteligência emocional, a saúde psicossocial e o cultivo das relações interpessoais."
  },
  {
    "id": "lidando-com-pessoas-dificeis-mike-annesley",
    "title": "Lidando com Pessoas Difíceis",
    "author": "Mike Annesley",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Pé da Letra",
    "level": "EM - Ensino Médio",
    "synopsis": "Todos se deparam, de vez em quando, com uma pessoa difícil - talvez, alguém que esteja com raiva, obstrutivo ou indisciplinado. Não podemos esperar passar a vida encontrando apenas cópias de nós mesmos. O que torna a vida interessante são nossas diferenças, mas às vezes, essas diferenças se manifestam em tensão ou confronto."
  },
  {
    "id": "mudar-e-possivel-lidia-maria-riba",
    "title": "Mudar É Possível",
    "author": "Lidia Maria Riba",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Guia de acolhimento e encorajamento para quem está passando por grandes mudanças na vida. Ajudando então a superar os medos do \"novo\""
  },
  {
    "id": "nao-leve-a-vida-tao-a-serio-hugh-prather",
    "title": "Não Leve a Vida Tão a Sério",
    "author": "Hugh Prather",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Sextante",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ensina que pequenas mudanças de pensamento e comportamento podem reduzir o estresse e melhorar a qualidade de vida. O autor incentiva o autoconhecimento, a aceitação e uma visão mais positiva dos desafios cotidiano"
  },
  {
    "id": "nunca-desista-de-seus-sonhos-augusto-cury",
    "title": "Nunca Desista de Seus Sonhos",
    "author": "Augusto Cury",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Sextante",
    "level": "EM - Ensino Médio",
    "synopsis": "Com mais de um milhão de livros vendidos sobre temas como crescimento pessoal, inteligência e qualidade de vida, o psiquiatra augusto cury debruça-se aqui sobre nossa capacidade de sonhar e o quanto ela é fundamental na realização de nossos projetos de vida."
  },
  {
    "id": "o-efeito-do-riso-ros-ben-moshe",
    "title": "O Efeito do Riso",
    "author": "Ros Ben-moshe",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Latitude",
    "level": "EM - Ensino Médio",
    "synopsis": "Se o riso é um atalho para a felicidade, por que não rimos mais? Seja uma risada espontânea, seja um riso provocado, fato é que a alegria tem o poder de nos causar doses de bem-estar que incluem: dopamina, recompensa imediata ao nosso cérebro; oxitocina, a molécula do amor; serotonina, um poderoso antidepressivo; e endorfinas, os hormônios da felicidade. Não perca tempo e faça uso desse medicamento natural, sem contraindicação e altamente eficaz no combate ao estresse!"
  },
  {
    "id": "o-errante-kahlil-gibran",
    "title": "O Errante",
    "author": "Kahlil Gibran",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Claridade",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Com humor e delicada melancolia,típicos do estilo do grande autor árabe,apresenta parábolas,que, seguindo á tradicão das narrativas bíblicas e das fábulas exemplares,revelam sutilmente lições sobre os enigmas da vida e da morte."
  },
  {
    "id": "o-monge-e-o-executivo-james-c-hunter",
    "title": "O Monge e o Executivo",
    "author": "James C. Hunter",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Sextante",
    "level": "EM - Ensino Médio",
    "synopsis": "Se você tem dificuldade em fazer com que sua equipe dê o melhor de si no trabalho e gostaria de relacionar melhor com a sua familia e seus amigos,vai encontrar neste livro personagens,idéias e discussõesque vão abrir um novo horizonte em sua forma de lidar com os outros."
  },
  {
    "id": "o-que-te-move-fernando-moraes",
    "title": "O que Te Move?",
    "author": "Fernando Moraes",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro convida o leitor a refletir sobre seu propósito de vida e o impacto que pode gerar na sociedade"
  },
  {
    "id": "o-que-voce-quando-crescer-dinah-sales-de-oliveira",
    "title": "O que Você Quando Crescer?",
    "author": "Dinah Sales de Oliveira",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro aborda de maneira leve, interativa e reflexiva a famosa pergunta o que toda criança costuma ouvir: \"o que você vai ser quando crescer?\""
  },
  {
    "id": "o-sucesso-e-ser-feliz-roberto-shinyashiki",
    "title": "O Sucesso É Ser Feliz",
    "author": "Roberto Shinyashiki",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Gente",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Mais uma vez, roberto shinyashiki adianta-se no tempo e traz um tema fundamental que tem sido deixado de lado pelo ser humano em busca do sucesso: a felicidade. Se você questiona se a sua vida tem sido do jeito que merece...se gostaria de opções com maior realização pessoal, este livro é fundamental. Aqui, encontrará temas como: o que é a felicidade? Por que as pessoas desperdiçam as suas vidas? Quais os caminhos para uma vida mais plena? Estes assuntos são abordados de uma maneira serena e profunda, como se você estivesse tendo uma conversa real com o dr. Shinyashiki."
  },
  {
    "id": "os-quatro-compromissos-o-livro-da-filosofia-tolteca-don-miguel-ruiz",
    "title": "Os Quatro Compromissos: o Livro da Filosofia Tolteca",
    "author": "Don Miguel Ruiz",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Bestseller",
    "level": "EM - Ensino Médio",
    "synopsis": "A obra promete guiar o leitor em direção à liberdade pessoal, paz de espírito e relacionamentos mais saudáveis"
  },
  {
    "id": "pais-competentes-filhos-brilhantes-caio-feijo",
    "title": "Pais Competentes Filhos Brilhantes",
    "author": "Caio Feijó",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Navegar",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Caio feijó,aponta com muita clareza e ilustrações,esses equívocos,revela as maiores inseguranças dos pais e fornece ao leitor,propostas modernas da psicologia do comportamento humano para previnir ou rapará-los."
  },
  {
    "id": "pandemia-e-distanciamento-social-co-autoria",
    "title": "Pandemia e Distanciamento Social",
    "author": "Co-autoria",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Educação,cidadania e direitos sociais são tratados neste livro de forma para entender o momento adverso de uma pandemia da covid,que alterou a rotina de uma infinidade de pessoas ao redor do mundo."
  },
  {
    "id": "para-que-a-minha-vida-se-transforme-maria-salette-e-wilma-ruggeri",
    "title": "Para que a Minha Vida se Transforme",
    "author": "Maria Salette e Wilma Ruggeri",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Gente",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ampliar nossa visão de mundo que se inicia a partir do olhar que estendemos á nossa vida.histórias que enaltecem e enriquecem o ser humano e que vem rompendo nosso inconsciente há séculos."
  },
  {
    "id": "para-um-homem-de-exito-lidia-maria-riba",
    "title": "Para um Homem de Êxito",
    "author": "Lidia María Riba",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Todos os homens buscam êxito: em sua profissão, nos estudos, no plano espiritual, no trabalho ou na expressão da sua arte. Esse livro é para esse homem de êxito que queremos e admiramos"
  },
  {
    "id": "pensamento-estrategico-para-lideres-de-hoje-e-amanha-dulce-magalhaes",
    "title": "Pensamento Estratégico para Líderes de Hoje e Amanhã",
    "author": "Dulce Magalhães",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Integrare Editora",
    "level": "EM - Ensino Médio",
    "synopsis": "Apresenta reflexões especialistas sobre liderança, gestão e estratégia. A obra enfatiza a importancia da comunicação, da ética, da inovação e do desenvolvimento de pessoas para formar líderes preparados para o futuro"
  },
  {
    "id": "por-que-tanta-pressa-de-crescer-brian-keaney",
    "title": "Por que Tanta Pressa de Crescer?",
    "author": "Brian Keaney",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Ftd",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro narra a trajetória de matthew, um garoto que enfrenta os desafios da passagem da infância para a adolescência. A obra aborda temas como amizade, familia, autoestima e amadurecimento."
  },
  {
    "id": "quais-de-mim-voce-procura-embaixadoras-do-clube-mulheres-de-negocios-de-portugal",
    "title": "Quais de Mim Você Procura? Embaixadoras do Clube Mulheres de Negócios de Portugal",
    "author": "Katia Teixeira",
    "category": "Autoajuda",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Neste volume da coletânea \"quais de mim voce procura\" celebra ter atravessado os mares e internacionaliza-se, despertando além-mar a sua causa: demonstrar o potencal feminino e emancipar mulheres"
  },
  {
    "id": "quais-de-mim-voce-procura-mulheres-no-direito-katia-teixeira",
    "title": "Quais de Mim Você Procura? Mulheres no Direito",
    "author": "Katia Teixeira",
    "category": "Autoajuda",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Nesta obra, o leitor terá a oportunidade de se inspirar e contagiar-se com relatos de muheres que compartilham com milhares de outras mulheres suas histórias empreendedoras no direito"
  },
  {
    "id": "quais-de-mim-voce-procura-mulheres-palestrantes-katia-teixeira",
    "title": "Quais de Mim Você Procura? Mulheres Palestrantes",
    "author": "Katia Teixeira",
    "category": "Autoajuda",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Através dessa obra oferecemos um palco para diversas mulheres se apresentarem e brilharem com as próprias histórias. Líderes que podem abrir as portas para papéis de liderança inspirando outras mulheres"
  },
  {
    "id": "quais-de-mim-voce-procura-mulheres-que-lutam-pela-construcao-do-conhecimento-kat",
    "title": "Quais de Mim Você Procura? Mulheres que Lutam Pela Construção do Conhecimento",
    "author": "Katia Teixeira",
    "category": "Autoajuda",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Nesta obra, o leitor terá a oportunidade de se inspirar e contagiar-se com relatos de mulheres que cmpartilham com milhares de outras mulheres suas histórias"
  },
  {
    "id": "quem-mexeu-no-meu-queijo-spencer-johnson-m-d",
    "title": "Quem Mexeu no Meu Queijo?",
    "author": "Spencer Johnson, M.d",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Record",
    "level": "EM - Ensino Médio",
    "synopsis": "Quem mexeu no meu queijo? É uma parábola que revela verdades profundas sobre mudanças. Dois ratinhos e dois homenzinhos vivem em um labirinto em busca de queijo - metáfora para o que se deseja ter na vida, de um bom emprego à paz espiritual. Um deles é bem-sucedido e escreve o que aprendeu com sua experiência nos muros do labirinto. As palavras rabiscadas nas paredes ensinam a lidar com as mudanças para viver com menos estresse e alcançar mais sucesso no trabalho e na vida pessoal. Quem mexeu no meu queijo? É uma leitura rápida, mas suas idéias permanecerão por toda a vida."
  },
  {
    "id": "rumo-a-uma-vida-significativa-menachem-mendel-schneerson",
    "title": "Rumo a uma Vida Significativa",
    "author": "Menachem Mendel Schneerson",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Maaynot",
    "level": "LIVRE",
    "synopsis": "O livro da as opiniões do rebe no âmbito dos ciclos da vida, do nascimento a juventude, e em todos os ciclos da vida"
  },
  {
    "id": "sincronicidade-deike-begg",
    "title": "Sincronicidade",
    "author": "Deike Begg",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Cultrix",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro explica de que modo as sincronicidades atuam como sinalizações através do deserto que parece constituir grande parte do nosso cotidiano."
  },
  {
    "id": "sobreviver-vale-a-pena-tercio-garcia",
    "title": "Sobreviver Vale a Pena",
    "author": "Tércio Garcia",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Estamos vivendo um momento em que tudo precisa ser concreto, caso contário o ser humano não acredita. Tenho comigo que um dos melhores meios para \"amaciar\" os sentidos de uma pessoa é envolvê-la com a leitura. Esta história já estava escrita há algum tempo e eu tive o privilégio de lê- la quando ainda era um grande rascunho. Algo me dizia que ela estava guardada esperando que a vida providenciasse um bom motivo para transformá-la em livro. Com certeza, todo leitor irá se emocionar durante a leitura e irá se perguntar o porquê do livro não ter sido editado antes. E eu já vou explicar. É que incomodava demais o autor, ter suas dores, afetos, fraquezas e vitórias tão expostas pelo simples fato de contar sua histórias. Ele se negava a editá-la com o propósito de promoção pessoal. Quem conhece a discrição e sensibilidade dele, sabe do que estou falando. Este livro é o testemunho forte e vibrante de uma pessoa que me ensinou, entre outras coisas, que os bons amigos são a família que podemos escolher."
  },
  {
    "id": "superando-o-carcere-da-emocao-augusto-cury",
    "title": "Superando o Cárcere da Emoção",
    "author": "Augusto Cury",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Academia",
    "level": "EM - Ensino Médio",
    "synopsis": "O objetivo deste livro é contribuir para que o leitor expanda sua inteligência,aprenda a navegar nas águas da emoção por compreender alguns pilares da própria inteligência.podemos ser autores ou vítimas de nossas histórias...qual é a sua escolha ?"
  },
  {
    "id": "transforme-o-problema-em-desafio-sergio-hinds",
    "title": "Transforme o Problema em Desafio",
    "author": "Sérgio Hinds",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Ibrasa",
    "level": "EM - Ensino Médio",
    "synopsis": "Se tivermos projetos e trabalharmos naquilo que gostamos; se tivermos sonhos e acreditarmos neles; se nos relacionarmos bem com as pessoas que amamos,de coração aberto,sem querer nada em troca,certamente encontraremos a felicidade."
  },
  {
    "id": "um-ano-junto-ao-mar-joan-anderson",
    "title": "Um Ano Junto ao Mar",
    "author": "Joan Anderson",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "A envolvente jornada de uma mulher rumo ao autodescobrimento, criando coragem para recriar a vida"
  },
  {
    "id": "um-pequeno-passo-para-a-liberdade-coautoria",
    "title": "Um Pequeno Passo para a Liberdade",
    "author": "Coautoria",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Mostra como é possível criar negócios que geram lucro e, ao mesmo tempo, contribuem para resolver problemas sociai e ambientai"
  },
  {
    "id": "vamos-pensar-um-pouco-mauricio-de-sousa-e-mario-sergio-cortella",
    "title": "Vamos Pensar um Pouco",
    "author": "Maurício de Sousa e Mario Sergio Cortella",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Cortez Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Na vida,cada um faz toda a diferença,mas não basta ser apenas um,pensamentos melhor quando pensamos em turma e melhor ainda,acompanhados da turma da monica que nos anima a pensarmos mais, com persistẽnciaa e alegria."
  },
  {
    "id": "vencendo-desafios-de-salto-alto-lynette-lewis",
    "title": "Vencendo Desafios de Salto Alto",
    "author": "Lynette Lewis",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "Gente",
    "level": "EM - Ensino Médio",
    "synopsis": "As mulheres modernas são, cada vez mais, polivalentes. Elas são mães, esposas, donas de cada, ótimas profissionais, executivas e empreendedoras. E para tantos papéis que exercem, sabem que é imprescindível manter a alegria de viver a elegância."
  },
  {
    "id": "vitaminas-para-alma-weder-de-assis",
    "title": "Vitaminas para Alma",
    "author": "Weder de Assis",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Vitaminas para alma são como uma injeção para as nossas decisões, para a nossa personalidade. De alguma forma, esse livro fortalece convicções, renova propósitos e desperta vontades e talentos"
  },
  {
    "id": "vitimas-e-aprendizes-da-propria-historia-guilherme-davoli",
    "title": "Vítimas e Aprendizes da Própria História",
    "author": "Guilherme Davoli",
    "category": "Autoajuda",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A essência do livro gira em torno de uma escolha existencial e diária que todos nós enfrentamos: assumir o papel de vítima ou papel de aprendiz perante a nossa própria trajetória."
  },
  {
    "id": "10-decadas-a-historia-do-santos-futebol-clube-celso-jatene",
    "title": "10 Décadas a História do Santos Futebol Clube",
    "author": "Celso Jatene",
    "category": "Biografias",
    "collection": false,
    "publisher": "Companhia Editora Nacional",
    "level": "LIVRE",
    "synopsis": "Este livro traz uma série de histórias deliciosas,com riqueza de detalhes e precisão nas informações,fruto de uma aprofundada pesquisa,que resultou também em uma enorme quantidade de imagens,fotos de época e belíssimas ilustrações."
  },
  {
    "id": "101-mulheres-incriveis-que-mudaram-o-mundo-julia-adams",
    "title": "101 Mulheres Incríveis que Mudaram o Mundo",
    "author": "Julia Adams",
    "category": "Biografias",
    "collection": false,
    "publisher": "Pé da Letra",
    "level": "LIVRE",
    "synopsis": "Descubra a vida de 101 mulheres pioneiras e as voisas notáveis que elas conquistaram."
  },
  {
    "id": "4-vidas-entre-linhas-e-tracos-coautoria",
    "title": "4 Vidas Entre Linhas e Traços",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Neste livro,contadores de histórias por linhas e traços,nos contam um pouco de sua própria história."
  },
  {
    "id": "a-historia-de-malala-yousafzat-joan-marie-galat",
    "title": "A História de Malala Yousafzat",
    "author": "Joan Marie Galat",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Reconta de forma acessível e ricamente ilustrada a trajetória da jovem paquistanesa que desafiou barreiras para defender o direito das meninas à educação"
  },
  {
    "id": "a-historia-do-sistema-cndl-vi-forum-nacional-do-comercio",
    "title": "A História do Sistema Cndl",
    "author": "Vi Fórum Nacional do Comércio",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "a-mala-de-hana-karen-levine",
    "title": "A Mala de Hana",
    "author": "Karen Levine",
    "category": "Biografias",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EM - Ensino Médio",
    "synopsis": "A mala de hana é um retrato singelo, mas mostra a crue a vida das crianças submetidas ao holocausto"
  },
  {
    "id": "a-menina-da-montanha-tara-westover",
    "title": "A Menina da Montanha",
    "author": "Tara Westover",
    "category": "Biografias",
    "collection": false,
    "publisher": "Rocco",
    "level": "EM - Ensino Médio",
    "synopsis": "A obra acompanha sua jornada de emancipação pelo conhecimento, que levou até o doutorado na universidade de cambridge, refletindo sobre os dolorosos laços familiares e o poder libertador da educação"
  },
  {
    "id": "a-ultima-grande-licao-o-sentido-da-vida-mitch-albom",
    "title": "A Última Grande Lição o Sentido da Vida",
    "author": "Mitch Albom",
    "category": "Biografias",
    "collection": false,
    "publisher": "Sextante",
    "level": "EM - Ensino Médio",
    "synopsis": "Nas terças-feiras que passam juntos, o mestre compartilha suas últimas e mais profundas reflexões sobre o amor, o envelhecimento, o luto e o verdadeiro significado da existência, transformando seus dias finais em um última e inesquecível aula sobre como viver"
  },
  {
    "id": "adelphi-voando-por-justica-e-liberdade-coautoria",
    "title": "Adelphi! Voando por Justiça e Liberdade",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "A história de rui moreira lima, piloto de aviação d caça da ii guerra mundial, militar legalista e defensor da democracia, da justiça e da liberdade"
  },
  {
    "id": "almanaque-da-jovem-guarda-ricardo-pugliasi",
    "title": "Almanaque da Jovem Guarda",
    "author": "Ricardo Pugliasi",
    "category": "Biografias",
    "collection": false,
    "publisher": "Ediouro",
    "level": "EM - Ensino Médio",
    "synopsis": "Trada e documental que resgata detalhadamente a história do primeiro grande movimento pop rock n"
  },
  {
    "id": "amor-em-terra-de-chamas-jean-sasson",
    "title": "Amor em Terra de Chamas",
    "author": "Jean Sasson",
    "category": "Biografias",
    "collection": false,
    "publisher": "Bestseller",
    "level": "EM - Ensino Médio",
    "synopsis": "Nesta incrível narrativa,jean sasson revela para o leitor uma personagem real e forte,que enfrenta as rígidas regras sociais de seu povo para viver intensamente uma história de amor pelo curdistão e pelo guerreiro com quem se casa."
  },
  {
    "id": "ana-paula-padrao-ana-paula-padrao",
    "title": "Ana Paula Padrão",
    "author": "Ana Paula Padrão",
    "category": "Biografias",
    "collection": false,
    "publisher": "Paralela",
    "level": "EM - Ensino Médio",
    "synopsis": "Em \"o amor chegou tarde em minha vida\", ana paula, uma das jornalistas mais respeitadas do país, faz uma reflexão sincera sobre sua trajetória, abordand questões essenciais para mulher de hoje"
  },
  {
    "id": "anita-malfati-angela-braga-torres",
    "title": "Anita Malfati",
    "author": "Angela Braga-torres",
    "category": "Biografias",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Apesar de seus vinte e poucos anos, anita ja chocava seus familiares e a sociedade com pinceladas bruscas e muita cor"
  },
  {
    "id": "antonio-carlos-lafayette-de-andrada",
    "title": "Antônio Carlos",
    "author": "Lafayette de Andrada",
    "category": "Biografias",
    "collection": false,
    "publisher": "Gov",
    "level": "EM - Ensino Médio",
    "synopsis": "Constitui breve biografia, sistematizada na ordem cronológica da vida do nosso personagem principal. Abordamos o seu envolvimento com a maçonaria, da qual foi grão-mestre do \"grande orinte do brasil\", sendo ainda, posteriormente, um dos fundadores do \"supremo conselho do grau 33 para brasil\", do qual veio a ser também seu \"sobrerano\". Fixamos principalmente três momentos da vida do andrada."
  },
  {
    "id": "as-sete-vidas-de-nelson-motta-nelson-motta",
    "title": "As Sete Vidas de Nelson Motta",
    "author": "Nelson Motta",
    "category": "Biografias",
    "collection": false,
    "publisher": "Editora Foz",
    "level": "EM - Ensino Médio",
    "synopsis": "É a autobiografia do jornalista, produtor musical, compositor e escritor nelson motta."
  },
  {
    "id": "associacao-do-sanatorio-sirio-coautoria",
    "title": "Associação do Sanatório Sírio",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Associação do sanatórip sírio 100 anos de dedicação à saúde"
  },
  {
    "id": "ayrton-senna-uma-lenda-a-toda-velocidade-christopher-hilton",
    "title": "Ayrton Senna uma Lenda a Toda Velocidade",
    "author": "Christopher Hilton",
    "category": "Biografias",
    "collection": false,
    "publisher": "Global",
    "level": "LIVRE",
    "synopsis": "As incríveis imagens do livro são o ponto principal,acompanhadas por um projeto arrojado e uma narrativa fluente.em entrevistas exclusivas, a família e os colegas de equipe revelam fatos e curiosidades sobre a vida de senna."
  },
  {
    "id": "brasil-o-time-que-perdeu-a-copa-e-conquistou-o-brasil-paulo-roberto-falcao",
    "title": "Brasil o Time que Perdeu a Copa e Conquistou o Brasil",
    "author": "Paulo Roberto Falcão",
    "category": "Biografias",
    "collection": false,
    "publisher": "Editora Age",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro reconta a história daquele time.pela óticados seus principais protagonistas."
  },
  {
    "id": "brasileiros-voadores-300-anos-pelos-ceus-do-mundo-coautoria",
    "title": "Brasileiros Voadores: 300 Anos Pelos Céus do Mundo",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro destaca a ousadia, a criatividade e a contribuição fundamental de inventores e aviadores brasileiros para o desenvolvimento da aeronáutica mundial"
  },
  {
    "id": "braspress-35-anos-coautoria",
    "title": "Braspress 35 Anos",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Este livro é um resgate da memória não só da empresa,mas também,do cenário da vida brasileira nesse período."
  },
  {
    "id": "cacadores-de-bons-exemplos-em-busca-de-brasileiros-que-fazem-a-diferenca-iara-e-",
    "title": "Caçadores de Bons Exemplos em Busca de Brasileiros que Fazem a Diferença",
    "author": "Iara e Eduardo Xavier",
    "category": "Biografias",
    "collection": false,
    "publisher": "O Lutador",
    "level": "LIVRE",
    "synopsis": "O objetivo da viagem é documentar, mapear e dar e dar visibilidade a pessoas comuns que criam projetos sociais e promovem transformações positivas reais em suas respectivas comunidades. Servindo como um registro inspirador de empatia e impacto social"
  },
  {
    "id": "centenario-da-orquestra-sinfonica-de-ribeirao-preto-gisele-laura-haddad",
    "title": "Centenário da Orquestra Sinfônica de Ribeirão Preto",
    "author": "Gisele Laura Haddad",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Fruto de uma profunda pesquisa documental e em jornais da época, o livro corrige marcos históricos da instituição"
  },
  {
    "id": "clarice-uma-vida-que-se-conta-nadia-battella-gotlib",
    "title": "Clarice uma Vida que se Conta",
    "author": "Nádia Battella Gotlib",
    "category": "Biografias",
    "collection": false,
    "publisher": "Edusp",
    "level": "EM - Ensino Médio",
    "synopsis": "Não se pode contar uma vida senão em múltiplas linhas que se cruzam, isto é, em muitas maneiras de narrar, em diferentes estilos - o da crônica, o das memórias, o dos fragmentos de experiência romanesca, o da ação dramática, seja simplesmente cômico, trágico ou tragicômico - que se entrançam, como nesta biografia de clarice lispector, de autoria de nádia battella gotlib, graças a seus conflitantes traçados, semelhantes aos enigmáticos sulcos de nossas mãos, numa só corrente vital de sentido."
  },
  {
    "id": "com-o-suor-do-teu-rosto-antonio-pereira-da-silva",
    "title": "Com o Suor do Teu Rosto",
    "author": "Antônio Pereira da Silva",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro narra desde suas origens humildes e o trabalho árduo no comércio e na agricultura até a fundação da companhia de telefones do brasil central em uberlândia, servindo como registro histórico do desenvolvimento econômico regional"
  },
  {
    "id": "construindo-uma-vida-roberto-justus",
    "title": "Construindo uma Vida",
    "author": "Roberto Justus",
    "category": "Biografias",
    "collection": false,
    "publisher": "Larousse",
    "level": "EM - Ensino Médio",
    "synopsis": "De seu início profissional estagiando na construtora de seu pai a presidência de um grupo de comunicação."
  },
  {
    "id": "darwin-e-a-verdadeira-historia-dos-dinossauros-luca-novelli",
    "title": "Darwin e a Verdadeira História dos Dinossauros",
    "author": "Luca Novelli",
    "category": "Biografias",
    "collection": false,
    "publisher": "Ciranda Cultural",
    "level": "LIVRE",
    "synopsis": "Com uma linguagem leve e ilustrações bem-humoradas, a obra aproxima os jovens do pensamento científico e do método de investigação de um dos maiores nomes da ciência mundial"
  },
  {
    "id": "dona-rochinha-confesso-que-vivi-e-sobrevivi-dona-rochinha",
    "title": "Dona Rochinha Confesso que Vivi e Sobrevivi",
    "author": "Dona Rochinha",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Conheça sua historia sua história de amor ao próxima e o quanto cada realização a deixou mais motivada e feliz."
  },
  {
    "id": "donos-da-terra-odir-cunha",
    "title": "Donos da Terra",
    "author": "Odir Cunha",
    "category": "Biografias",
    "collection": false,
    "publisher": "Realejo",
    "level": "LIVRE",
    "synopsis": "Neste livro você terá todas as informações sobre o jogo que marcou o auge da era do beautiful game e consagrou o primeiro time brasileiro campeã do mundo, o insuperável santos de pelé."
  },
  {
    "id": "edgar-allan-poe-o-mago-do-terror-jeanette-rozsas",
    "title": "Edgar Allan Poe o Mago do Terror",
    "author": "Jeanette Rozsas",
    "category": "Biografias",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EM - Ensino Médio",
    "synopsis": "Uma vida marcada por perdas, por decepções, desde a infância. Uma pessoa dotada de genialidade e de sensibilidade peculiar, como nos revela jeanette rozsas, com sua extensa pesquisa, ricamente ilustrada. Em seus contos, poe iria explorar um mundo estranho e trazer seus leitores para um domínio no qual a realidade escapava, tornava-se um vulto perturbador. Edgar allan poe, o mago do terror é a biografia romanceada de um dos autores mais inovadores e, até hoje, mais intrigantes da literatura mundial. Os leitores vão conhecê-lo mais a fundo e se emocionar com o misto de tragédia e glória desse homem condenado a ser escritor."
  },
  {
    "id": "em-busca-de-mim-viola-davis",
    "title": "Em Busca de Mim",
    "author": "Viola Davis",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Em busca de mim é uma reflexão profunda,uma promessa e uma declaração de amor a mim mesma. Espero que minha história o inspire a revolucionar sua vida de forma criativa e a redescobrir quem você era antes que o mundo tentasse defini-lo."
  },
  {
    "id": "encantadores-de-vidas-eduardo-moreira",
    "title": "Encantadores de Vidas",
    "author": "Eduardo Moreira",
    "category": "Biografias",
    "collection": false,
    "publisher": "Record",
    "level": "EM - Ensino Médio",
    "synopsis": "Como o maior domador de cavalos do mundo e o preparador dos maiores atletas da nossa era transformaram um brasileiro para (muito) melhor."
  },
  {
    "id": "eu-sou-malala-malala-yousafzai-com-christina-lamb",
    "title": "Eu Sou Malala",
    "author": "Malala Yousafzai com Christina Lamb",
    "category": "Biografias",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "LIVRE",
    "synopsis": "Malala yousafzai recusou-se a permanecer em silêncio e lutou por seu direito à educação. Mas em 9 de outubro de 2012 ela quase pagou por isso com a vida. Malala foi atingida na cabeça por um tiro à queima-roupa dentro do ônibus enquanto voltava da escola. Poucos acreditaram que ela sobreviveria. Quando o talibã tomou controle do vale do swat, uma menina levantou a voz."
  },
  {
    "id": "extraordinarias-mulheres-que-revolucionaram-o-brasil-duda-porto-de-souza",
    "title": "Extraordinárias Mulheres que Revolucionaram o Brasil",
    "author": "Duda Porto de Souza",
    "category": "Biografias",
    "collection": false,
    "publisher": "Seguinte",
    "level": "LIVRE",
    "synopsis": "Elas mudaram (e estão mudando) nossa história. Mas você conhece a história delas?"
  },
  {
    "id": "fala-galvao-galvao-bueno-e-ingo-ostrovsky",
    "title": "Fala,galvão",
    "author": "Galvão Bueno e Ingo Ostrovsky",
    "category": "Biografias",
    "collection": false,
    "publisher": "Globo",
    "level": "EM - Ensino Médio",
    "synopsis": "Memória viva do esporte nos últimos quarenta anos e ainda em plena atividade,galvão bueno foi protagonista e testemunha de histórias incríveis,vitórias memoráveis e derrotas inesquecíveis."
  },
  {
    "id": "fernando-henrique-cardoso-diarios-da-1995-1996-presedencia-fernando-henrique-car",
    "title": "Fernando Henrique Cardoso Diários da 1995-1996 Presedência",
    "author": "Fernando Henrique Cardoso",
    "category": "Biografias",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "\"vê-se que o aparelho do estado está minados por todos os lados. É uma espécie de quinta-coluna permanebte. Não há mais reserva de nada. Isso não é o governo, não. O estado é que está assim. Como é que a gente reconstrói esse estado tão apodrecido? Esta é a grande questão. Estou tentando mudar o tema, mostrar onde estão os grandes problemas do brasil, mas esses pequenos problemas acabam fazendo a política pegar fogo: um incêndio hoje, outro amanhã minando nossas posssibilidades de uma maneira realmente desesperadora. Não são os grandes problemas, não é na condução geral das coisas, são essas pequenas coisas que estão torturando todo mundo. É algo desagradável, um país que olha o tempo todo para o chão quando deve olhar paraos horizontes.\""
  },
  {
    "id": "giane-guilherme-fiuza",
    "title": "Giane",
    "author": "Guilherme Fiuza",
    "category": "Biografias",
    "collection": false,
    "publisher": "Sextante",
    "level": "EM - Ensino Médio",
    "synopsis": "Estreou na tv tendo que segurar a audiência da principal atração da emissora e encarou com muita obstinção."
  },
  {
    "id": "gloria-eduardo-nassife-e-fabio-fabricio-fabretti",
    "title": "Gloria",
    "author": "Eduardo Nassife e Fábio Fabrício Fabretti",
    "category": "Biografias",
    "collection": false,
    "publisher": "Geração Editorial",
    "level": "EM - Ensino Médio",
    "synopsis": "Além de revelar a pessoa inigualável que ela é,este livro se torna uma leitura imprescindível a quem se interessa pela história da arte dramática brasileira."
  },
  {
    "id": "hebe-a-biografia-artur-xexeo",
    "title": "Hebe a Biografia",
    "author": "Artur Xexéo",
    "category": "Biografias",
    "collection": false,
    "publisher": "Bestseller",
    "level": "EM - Ensino Médio",
    "synopsis": "Nestas páginas você terá um novo encontro com hebe - uma mulher a frente de seu tepo, a própria força da natureza, que por tantos anos frequentou a sala de nossas famílias"
  },
  {
    "id": "historia-concisa-do-brasil-boris-fausto",
    "title": "História Concisa do Brasil",
    "author": "Boris Fausto",
    "category": "Biografias",
    "collection": false,
    "publisher": "Editora Usp",
    "level": "LIVRE",
    "synopsis": "A obra não é um simples resumo da história do brasil, mantém a estrtura básica anterior , cujo objetivo é tornar compreensíveis as linhas da história brasileira."
  },
  {
    "id": "historia-da-faculdade-de-direito-da-unisantos-coautoria",
    "title": "História da Faculdade de Direito da Unisantos",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Vladimir e gilberto passos de freitas descrevem neste livro 68 anos da existência da faculdade católica de direito de santos, depis denominada faculdade de direito da universidade católica de antos, conhecida como a \"casa amarela\""
  },
  {
    "id": "historias-da-jovem-guarda-coautoria",
    "title": "Histórias da Jovem Guarda",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "Globo",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A obra é uma verdadeira viagem no tempo pelos programas de tv, camarins e turnês que definiram toda uma trajetória"
  },
  {
    "id": "ikesaki-jhony-arai",
    "title": "Ikesaki",
    "author": "Jhony Arai",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Uma história impressionante,verdadeiro presente para todos nós,que será apresentada nas próximas páginas.preparem-se para conhecer a vida de um guerreiro samurai dos nossos tempos."
  },
  {
    "id": "images-of-the-beatles-tim-hill",
    "title": "Images Of The Beatles",
    "author": "Tim Hill",
    "category": "Biografias",
    "collection": false,
    "publisher": "Parragon",
    "level": "LIVRE",
    "synopsis": "A vida dos beatles ( livro está na lingua inglesa)."
  },
  {
    "id": "infiel-a-historia-de-uma-mulher-que-de-uma-mulher-que-desafiou-o-isla-ayaan-hirs",
    "title": "Infiel a História de uma Mulher que de uma Mulher que Desafiou o Islã",
    "author": "Ayaan Hirsi Ali",
    "category": "Biografias",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "Biografia de uma mulher extraordinária, que foi criada nos costumes tribais da somália, sofreu mutilação sexual e espancamentos brutais na infância, foi muçulmana devota, fugiu de um casamento forçado, tornou-se deputada na holanda, clamou pelos direitos das muçumanas, criticou maomé e está condenada à morte pelo fundamentalismo islâmico."
  },
  {
    "id": "ivani-ribeiro-a-dama-das-emocoes-carolline-rodrigues",
    "title": "Ivani Ribeiro a Dama das Emoções",
    "author": "Carolline Rodrigues",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Apresenta um retrato de quem foi e como trabalhava a autora de clássicos como \"a viagem\" e \"muheres de areia\"."
  },
  {
    "id": "jovem-guarda-e-tropicalia-coautoria",
    "title": "Jovem Guarda e Tropicália",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "De um lado, o rock descontraído e o romantismo ingênuo que embalavam a juventude; de outro; a fusão cultural e a postura contestadora que desafiavam o cenário político e artístico da época"
  },
  {
    "id": "lagarta-vira-pupa-andrea-werner",
    "title": "Lagarta Vira Pupa",
    "author": "Andréa Werner",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "A autora relata a sua própria vivência, a descoberta d diagnóstico de seu filho theo e a rotina da maternidade atípica"
  },
  {
    "id": "lencois-paulistas-forte-produtor-de-cachaca-florindo-paccola",
    "title": "Lençóis Paulistas Forte Produtor de Cachaça",
    "author": "Florindo Paccola",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "É um resumo desta obra que conta a tradição da bebida símbolo nacional, a cachaça"
  },
  {
    "id": "libaneses-e-sirios-que-fazem-o-brasil-carlos-abumrad",
    "title": "Libaneses e Sírios que Fazem o Brasil",
    "author": "Carlos Abumrad",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro destaca a trajetória de superação, empreendedorismo e integração cultural desses imigrantes que deixaram sua terra natal em busca de novas oportunidades e ajudaram a construir o tecido social e econômico do país"
  },
  {
    "id": "lucelia-santos-coragem-para-lutar-eduardo-meirelles",
    "title": "Lucélia Santos Coragem para Lutar",
    "author": "Eduardo Meirelles",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Resume a trajetória de uma das atrizes mais famosas do brasil sob a ótica de seu intenso ativismo político e socioambiental"
  },
  {
    "id": "meus-primeiros-anos-sultan-bin-muhammad-al-qasimi",
    "title": "Meus Primeiros Anos",
    "author": "Sultan Bin Muhammad Al-qasimi",
    "category": "Biografias",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Através de suas memórias, o autor reconstrói o cotidiano, os desafios geopolítico sob a influêncian britânica, os conflitos regionais e as profundas mudanças sociais culturais que moldaram não apenas a sua própria trajetória como líder e acadêmico, mas também a identidade de sua nação"
  },
  {
    "id": "minha-vida-de-menina-helena-dayrell",
    "title": "Minha Vida de Menina",
    "author": "Helena Dayrell",
    "category": "Biografias",
    "collection": false,
    "publisher": "Companhia de Bolso",
    "level": "LIVRE",
    "synopsis": "A obra oferece um retrato autêntico, afetuoso e atemporal sobre as descobertas da juventude e a vida no interior do brasil"
  },
  {
    "id": "nao-existe-vitoria-sem-sacrificio-fernanda-thedim",
    "title": "Não Existe Vitória Sem Sacrifício",
    "author": "Fernanda Thedim",
    "category": "Biografias",
    "collection": false,
    "publisher": "Benvirá",
    "level": "EM - Ensino Médio",
    "synopsis": "Neste ivro,você o conhecerá mais de perto e ouvirá em primeira mão um relato emocionante e muito sincero sobre uma vida cheia de altos e baixos."
  },
  {
    "id": "nossa-luta-jornada-de-um-paciente-com-cancer-giancarllo-demartis",
    "title": "Nossa Luta Jornada de um Paciente com Câncer",
    "author": "Giancarllo Demartis",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro é um relato autobiografico e emocionante sobre a experiência de giancarllo ao ser diagnosticado com câncer"
  },
  {
    "id": "nosso-pecente-a-vida-de-um-grande-campeao-juarez-b-de-paula-filho",
    "title": "Nosso Pecente a Vida de um Grande Campeão",
    "author": "Juarez B. de Paula Filho",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Mais do que a biografia de um atleta talentoso e disciplinado, o livro funciona como um registro afetivo e histórico sobre a era de ouro do basquetebol no interior de minas gerais"
  },
  {
    "id": "o-amigo-do-rei-geordie-greig",
    "title": "O Amigo do Rei",
    "author": "Geordie Greig",
    "category": "Biografias",
    "collection": false,
    "publisher": "Globo",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A história da inglaterra se pode acompanhar pela biografia de seus soberanos. Ainda que não governem, tem o direito de ser informados, de encorajar e de advertir, e influem no rumo do país"
  },
  {
    "id": "o-codigo-da-vida-saulo-ramos",
    "title": "O Código da Vida",
    "author": "Saulo Ramos",
    "category": "Biografias",
    "collection": false,
    "publisher": "Editora Planeta",
    "level": "EM - Ensino Médio",
    "synopsis": "É um livro para ser degustado demoradamente.,saulo ramos entremia essa história de suspense absolutamente verídica com sua história de vida."
  },
  {
    "id": "o-improvavel-presidente-do-brasil-fernando-henrique-cardoso",
    "title": "O Improvável Presidente do Brasil",
    "author": "Fernando Henrique Cardoso",
    "category": "Biografias",
    "collection": false,
    "publisher": "Civilização Brasileira",
    "level": "EM - Ensino Médio",
    "synopsis": "É uma obra autobiográfica que mistura memórias pessoais, sociologia e história política do brasil comtemporâneo"
  },
  {
    "id": "o-incansavel-paulo-de-tarso-um-lider-vitorioso-betho-ieesus",
    "title": "O Incansável Paulo de Tarso um Líder Vitorioso",
    "author": "Betho Ieesus",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O incansável paulo de tarso é a biografia de um homem comum quese tornou santo ao se vestir de cristo"
  },
  {
    "id": "o-mestre-das-estrelas-geraldo-alves",
    "title": "O Mestre das Estrelas",
    "author": "Geraldo Alves",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro revela os desafios, os bastidores de grandes turnês e festivais, além da paixão e dedicação necessárias para construir e gerenciar carreiras brilhantes na era de ouro da música brasileira"
  },
  {
    "id": "o-outro-lado-de-mim-sidney-sheldon",
    "title": "O Outro Lado de Mim",
    "author": "Sidney Sheldon",
    "category": "Biografias",
    "collection": false,
    "publisher": "Record",
    "level": "EM - Ensino Médio",
    "synopsis": "As memórias de um dos maiores escritores de todos os tempos"
  },
  {
    "id": "onze-mil-horas-flaney-gonzallez",
    "title": "Onze Mil Horas",
    "author": "Flaney Gonzallez",
    "category": "Biografias",
    "collection": false,
    "publisher": "Kelps",
    "level": "EM - Ensino Médio",
    "synopsis": "Um convite para ocupar a cadeira ao lado e viajar por mais de 250 cidades em turnê com cristiano araújo."
  },
  {
    "id": "pixinguinha-andre-diniz-e-juliana-lins",
    "title": "Pixinguinha",
    "author": "André Diniz e Juliana Lins",
    "category": "Biografias",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Em todas as áreas em que atuou, seja como compositor, regente e orquestrador, ou simplesmente como instrumentista, pixinguinha conseguiu expressar e aicerçar toda uma cultura musical"
  },
  {
    "id": "quatro-decadas-com-lula-clara-ant",
    "title": "Quatro Décadas com Lula",
    "author": "Clara Ant",
    "category": "Biografias",
    "collection": false,
    "publisher": "Autentica",
    "level": "EM - Ensino Médio",
    "synopsis": "É o olhar sensível e o testemunho precioso de quem viveu os bastidores de cada um desses episódios como protagonistas e aliada permanente do líder político que, ao lado de getúlio vargas,é sem dúvida o personagem mais fascinante da história replublicana brasileira."
  },
  {
    "id": "roberto-civita-carlos-maranhao",
    "title": "Roberto Civita",
    "author": "Carlos Maranhão",
    "category": "Biografias",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "O dono da banca. A vida e as ideias do editor veja e da abril"
  },
  {
    "id": "rondon-conta-sua-vida-esther-de-viveiros",
    "title": "Rondon Conta Sua Vida",
    "author": "Esther de Viveiros",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "A autora reuniu e organizou depoimentos, relato e memórias contados pelo próprio rondon já no final de sua vida, oferecendo um retrato humanizado e em primeira pessoa da sua trajetória"
  },
  {
    "id": "ronnie-von-o-principe-que-podia-ser-rei-antonio-guerreiro-e-luiz-cesar-pimentel",
    "title": "Ronnie Von o Príncipe que Podia Ser Rei",
    "author": "Antonio Guerreiro e Luiz Cesar Pimentel",
    "category": "Biografias",
    "collection": false,
    "publisher": "Editora Planeta",
    "level": "EM - Ensino Médio",
    "synopsis": "Ele conta tudo neste livro surpreendente,para quem passou os últimos cinquenta anos sobre os olhares do público,ele era um enigma,ate agora."
  },
  {
    "id": "rosa-luxemburgo-paul-frolich",
    "title": "Rosa Luxemburgo",
    "author": "Paul Frolich",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Essa biografia foi publicada em paris as vésperas da segunda guerra mundial, quando a esquerda tentava sobrevier ao nazifascismo"
  },
  {
    "id": "rosinhas-mastrangelo-karime-moussalli-antigo",
    "title": "Rosinhas Mastrângelo",
    "author": "Karime Moussalli Antigo",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro é um resultado de uma pesquisa histórica documental complexa que utilizou variados tipos de fontes para analisar os aspects da vida e obra de rosinhas mastrângelo"
  },
  {
    "id": "sao-paulo-futebol-clube-ignacio-de-loyola-brandao",
    "title": "São Paulo Futebol Clube",
    "author": "Ignácio de Loyola Brandão",
    "category": "Biografias",
    "collection": false,
    "publisher": "Dba",
    "level": "LIVRE",
    "synopsis": "Uma história feita de garra, escrita por torcedores apaixonados,grandes ídolos e suas jogadas inesquecíveis."
  },
  {
    "id": "se-esp-coautoria",
    "title": "Se Esp",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "Bb",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "simplesmente-nelson-nelson-pereira-dos-santos",
    "title": "Simplesmente Nelson",
    "author": "Nelson Pereira dos Santos",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro oferece um olhar profundo sobre a genialidade com que o nelson retratou a realidade, o povo e as transformações sociais e culturais do brasil através das telas"
  },
  {
    "id": "tantas-palavras-humberto-werneck",
    "title": "Tantas Palavras",
    "author": "Humberto Werneck",
    "category": "Biografias",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "Mais do que o cncioneiro de um gênio da mpb, a obra funciona como um espelho sensível da história, da política e do comportamento da sociedade brasileira ao longo das últimas décadas"
  },
  {
    "id": "te-dou-a-lua-amanha-jorge-miguel-marinho",
    "title": "Te Dou a Lua Amanhã..",
    "author": "Jorge Miguel Marinho",
    "category": "Biografias",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EM - Ensino Médio",
    "synopsis": "Fantasia biográfica sobre mário de andrade"
  },
  {
    "id": "time-dos-sonhos-historia-completa-do-santos-f-c-odir-cunha",
    "title": "Time dos Sonhos: História Completa do Santos F.c",
    "author": "Odir Cunha",
    "category": "Biografias",
    "collection": false,
    "publisher": "Códex",
    "level": "LIVRE",
    "synopsis": "Dos infindáveis da história, nenhum outro foi tão harmonioso, irresistível e vencedor como este"
  },
  {
    "id": "tomando-as-redeas-os-anos-criticos-de-1971-1977-sultan-bin-muhammad-al-qasimi",
    "title": "Tomando as Rédeas: os Anos Críticos de 1971 - 1977",
    "author": "Sultan Bin Muhammad Al-qasimi",
    "category": "Biografias",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "A obra detalhada os bastidores políticos, as tensões diplomáticas e os desafios adinistrativos enfrentados por ele ao assumir o poder em sharjah em um momento de extrema fragilidade regional, lidando com a consolidação da nova federação."
  },
  {
    "id": "um-autorretrato-cubano-jose-a-figueroa",
    "title": "Um Autorretrato Cubano",
    "author": "José A. Figueroa",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Um autorretrato cubano de um fotografo"
  },
  {
    "id": "uma-licao-de-vida-milton-teixeira",
    "title": "Uma Lição de Vida",
    "author": "Milton Teixeira",
    "category": "Biografias",
    "collection": false,
    "publisher": "Unisanta",
    "level": "EM - Ensino Médio",
    "synopsis": "A obra funciona como um registro histórico do desenvolvimento educacional da baixada santista e uma homenagem à dedicação e ao legado ocial de seus fundadores"
  },
  {
    "id": "uma-trufa-e-1000-lojas-depois-alexandre-tadeu-da-costa",
    "title": "Uma Trufa e ...1000 Lojas Depois",
    "author": "Alexandre Tadeu da Costa",
    "category": "Biografias",
    "collection": false,
    "publisher": "Editora Alaúde",
    "level": "LIVRE",
    "synopsis": "O livro conta a impressionante história de transformação e expansão d hospital de câncer de barretos"
  },
  {
    "id": "vida-animada-ron-suskind",
    "title": "Vida Animada",
    "author": "Ron Suskind",
    "category": "Biografias",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EM - Ensino Médio",
    "synopsis": "Narrado com uma honestidade admirável, o relato da experiência dessa família ao longo de vinte anos é capaz de transformar radicalmente a nossa maneira de enxergar o autismo."
  },
  {
    "id": "vinicius-de-moraes-coautoria",
    "title": "Vinicius de Moraes",
    "author": "Coautoria",
    "category": "Biografias",
    "collection": false,
    "publisher": "Leya",
    "level": "EM - Ensino Médio",
    "synopsis": "O rótulo de \"poetinha\" só cabe a vinicius de moraes de forma carinhosa. O talento do artista para compor poesias era tamanho que extrapolou o campo literário e alcançou a música, resultando em obras até hoje reconhecidas e consagradas"
  },
  {
    "id": "viva-pagu-lucia-maria-teixeira-furlani-e-geraldo-galvao-ferraz",
    "title": "Viva Pagu",
    "author": "Lúcia Maria Teixeira Furlani e Geraldo Galvão Ferraz",
    "category": "Biografias",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "As fotos são fortes e belas como a vida de patrícia galvão e daqueles anos que mudaram a história dda cultura a partir de são paulo."
  },
  {
    "id": "ainda-assim-te-quero-bem-caio-riter-penelope-martins",
    "title": "Ainda Assim Te Quero Bem",
    "author": "Caio Riter, Penélope Martins",
    "category": "Cartas",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Marina viveu sem sua mãe biológica a vida toda, na véspera de seus 15 anos, inesperadamente, ela surge de maneira virtual em sua vida, por meio de mensagens em um aplicativo. Neste livro cio riter e penélope martins trazem para a contemporaneidade, com direito a emojis, questões humanas ancesstrais ao narrar encontros e desencontros a que todos nós estamos sujeitos, conduzindo- nos por uma trilha de afetos que, além de compor uma linda história, muitas vezes nos guia para algun lugar iluminado dentro de nós mesmos."
  },
  {
    "id": "camara-cascudo-e-mario-de-andrade-cartas-1924-1944-marcos-antonio-de-moraes",
    "title": "Câmara Cascudo e Mário de Andrade Cartas, 1924-1944",
    "author": "Marcos Antonio de Moraes",
    "category": "Cartas",
    "collection": false,
    "publisher": "Global",
    "level": "EM - Ensino Médio",
    "synopsis": "Sob a regência da sensibilidade observadora de marcos antonio de moraes, temos reunida, a correspondência de mário de andrade com luís da câmara cascudo. Por um designativo natural da vocação dos interlocutores, fora da rebarba dos problemas domésticos, em face das ebulições cotidianas da época, o que se apresenta, na verdade, é um amplo debate sobre a formação da cultura brasileira."
  },
  {
    "id": "cantare-estorias-jose-alaercio-zamuner",
    "title": "Cantare Estórias",
    "author": "José Alaercío Zamuner",
    "category": "Cartas",
    "collection": false,
    "publisher": "Ep Editora Plêiade",
    "level": "EM - Ensino Médio",
    "synopsis": "No espaço cósmico das páginas de cantare, as estórias percorrem os mesmo caminhos dos mítos, lendas da tradição oral existente em todos os cantos e tempos deste nosso mundo. Por isso, cantare estórias quer dizer contos, causos... De risos e choros: a mínima fantasia que sempre buscamos sem perceber, numa força universal e, graças a deus, incontida, para completude de nossa existência em devaneios."
  },
  {
    "id": "cartas-ao-professor-silvione-chares",
    "title": "Cartas ao Professor",
    "author": "Silvionê Chares",
    "category": "Cartas",
    "collection": false,
    "publisher": "Belaletra Editora",
    "level": "LIVRE",
    "synopsis": "Em 2009, estreei a peça teatral cartas ao prfessor, no congresso saber, em são paulo. Sua dramaturgia foi elaborada a partir de entrevistas que realizei com diversos professores. Nessas, solicitei que me mostrassem cartas recebidas de um aluno ou ex-aluno. No final de 2008, tinha sobre minha mesa em torno de 50 cartas, das quais escolhi oito que nortearam a linha mestra do espetáculo. A única carta não recolhida dessas estrevistas foi escrita por albert camus, quando esse recebera o premio nobel de literatura no ano de 1957, cujo destinarário foi seu professor germain. Ela está transcrita no capítulo reconheciimento de professor. Esse espetáculo nasceu de uma necessidade que tive de mostrar, primeiro para mim mesmo, depois para todos os professores, a nossa relevância na vida de pelo menos algumas pessoas."
  },
  {
    "id": "cartas-do-coracao-elizabeth-orsini",
    "title": "Cartas do Coração",
    "author": "Elizabeth Orsini",
    "category": "Cartas",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Este livro nasceu de um projeto ambicioso. Fazer uma compilação de cartas que juntasse as manifestações consideradas clássicas a declarações modernas, sem esquecer as brasileiras. Montar algo como um novo cânone em matéria de cartas amorosas. Do momento que elisabeth orsini foi escolhida para levar adiante essa tarefa, o projeto se tornou mais do que ambicioso, desafiador. Com sua mente alerta, generosidade transbordante e humor certeiro, elisabeth orsini vem marcando sua presença no jornalismo carioca."
  },
  {
    "id": "cartas-do-front-andrew-carrol",
    "title": "Cartas do Front",
    "author": "Andrew Carrol",
    "category": "Cartas",
    "collection": false,
    "publisher": "Zahar",
    "level": "EM - Ensino Médio",
    "synopsis": "Cartas do front é uma envolvente coleção de correspondências trocadas por soldados e civis na linha de frente dos grandes conflitos da história. Inclui, com exclusividade nesta edição brasileira, cartas de pracinhs que lutaram na itália, durante a segunda guerra mundial. Trata-se de um compêndio da mais pura emoção em meio à tragédia."
  },
  {
    "id": "correspondencia-de-abelardo-e-heloisa-martins-fontes",
    "title": "Correspondência de Abelardo e Heloísa",
    "author": "Martins Fontes",
    "category": "Cartas",
    "collection": false,
    "publisher": "Cromosete",
    "level": "EM - Ensino Médio",
    "synopsis": "Em linhasgerais, a história é conhecida de todos. O que nos é contado nos textos que aqui apresento ultrapassa, por sua ambiguidade, qualquer classificação: tragédia (no sentido medieval do termo: ação com final infeliz), mas também comédia, com conclusão regeneradora, divina comédia... Essa própria ambiguidade dá conta das contradições da crítica: poucos textos são menos neutros do que a coletânea comumente denominada correspondência de abelardo e heloísa, e, quase inevitavelmente, o leitor nela investe sua própria ideologia."
  },
  {
    "id": "isto-e-gestalt-coletanea",
    "title": "Isto É Gestalt",
    "author": "Coletânea",
    "category": "Cartas",
    "collection": false,
    "publisher": "Summus Editorial",
    "level": "EM - Ensino Médio",
    "synopsis": "\"tal como um mapa rodoviário, estes artigos podem servir como guia de uma região desconhecida, descrevendo algumas de suas características. Mas o mapa não é o país que se está atravessasndo. A realidade é: a descrição é apenas tão boa quanto nossa observação. A vida é: e o melhor que estes artigos podem fazer é servir como guias a espectos despercebidos da vida\". Gestalt é antes uma prática pessoal, uma forma de vida, do que uma \"terapia\" profissional ou uma \"cura\". É algo que se faz com outros e não para outros\"."
  },
  {
    "id": "a-princesa-e-o-jardineiro-diana-gerbelli",
    "title": "A Princesa e o Jardineiro",
    "author": "Diana Gerbelli",
    "category": "Contos",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O livro narra o encontro de uma princesa - acostumada ao luxo, as regras e as pressões do castelo - e o jardineiro do reino, um homem simples que vivia para seus afazeres ao castelo"
  },
  {
    "id": "a-princesa-que-escolhia-ana-maria-machado",
    "title": "A Princesa que Escolhia",
    "author": "Ana Maria Machado",
    "category": "Contos",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Era uma vez uma princesa muito boazinha que vivia muito bem num castelo lindo... Um dia ela disse não. E é ai que começa a história"
  },
  {
    "id": "as-melhores-historias-de-todos-os-tempos-coautoria",
    "title": "As Melhores Histórias de Todos os Tempos",
    "author": "Coautoria",
    "category": "Contos",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Este livro apresenta as mais fantástcas histórias infants"
  },
  {
    "id": "classicos-de-todos-os-tempos-charles-perrault",
    "title": "Clássicos de Todos os Tempos",
    "author": "Charles Perrault",
    "category": "Contos",
    "collection": false,
    "publisher": "Ciranda Cultural",
    "level": "LIVRE",
    "synopsis": "Nesse livro contém histórias clássicas infantis"
  },
  {
    "id": "classicos-de-todos-os-tempos-disney",
    "title": "Clássicos de Todos os Tempos",
    "author": "Disney",
    "category": "Contos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Esse livro conta histórias clássicas da disney"
  },
  {
    "id": "contos-de-fadas-almanaque-cesar-obeid",
    "title": "Contos de Fadas Almanaque",
    "author": "César Obeid",
    "category": "Contos",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Para um futuro mais sustentável e com consciência ambiental, este livro traz contos de fadas clássicos com os mesmos personagens de sempre, mas com nova roupagem, problemas modernos e soluções reias. Só assim poderemos garantir um belo final feliz para as futuras gerações!"
  },
  {
    "id": "contos-de-grimm-jacob-e-wilhelm-grimm",
    "title": "Contos de Grimm",
    "author": "Jacob e Wilhelm Grimm",
    "category": "Contos",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Contos recolhidos pelos irmãos grimm"
  },
  {
    "id": "moana-disney",
    "title": "Moana",
    "author": "Disney",
    "category": "Contos",
    "collection": false,
    "publisher": "Pé da Letra",
    "level": "LIVRE",
    "synopsis": "Moana é uma jovem da ilha motonui, no pacífico, que tem uma grande paixão pelo mar. Um dia, ela recebe uma ousada missão, será que ela consegue resolver?"
  },
  {
    "id": "o-gato-de-botas-coautoria",
    "title": "O Gato de Botas",
    "author": "Coautoria",
    "category": "Contos",
    "collection": false,
    "publisher": "Loyola",
    "level": "LIVRE",
    "synopsis": "Um filho de moleiro herda apenas apenas um gato falante, que pede um par de botas e traça um plano de esperteza."
  },
  {
    "id": "a-sombra-do-cipreste-menalton-braff",
    "title": "Á Sombra do Cipreste",
    "author": "Menalton Braff",
    "category": "Contos",
    "collection": false,
    "publisher": "Global",
    "level": "EM - Ensino Médio",
    "synopsis": "\"não tenham dúvida os leitores: estamos diante de um notável constista. Provam-no as histórias deste á sombra do cipreste. O que temos aqui é o conto em sua melhor expressão\""
  },
  {
    "id": "a-mulher-do-vizinho-fernando-sabino",
    "title": "A Mulher do Vizinho",
    "author": "Fernando Sabino",
    "category": "Contos",
    "collection": false,
    "publisher": "Record",
    "level": "EM - Ensino Médio",
    "synopsis": "Crônicas, contos e relatos elaborados dentro da mais apurada técnica de ficção: episódios, incidentes, reminidcências, reflexões, encontros e desencontros apresentados com rica inventiva, como se o próprio leitor participasse - nisto residindo o seu maior fascínio. Um gênero literário exclusivo de fernando sabino: sob a aparente singeleza, transp"
  },
  {
    "id": "antologia-ruth-rocha",
    "title": "Antologia",
    "author": "Ruth Rocha",
    "category": "Contos",
    "collection": false,
    "publisher": "Salamandra",
    "level": "LIVRE",
    "synopsis": "Trata-se de uma coletânea de histórias selecionadas da renomada autora infantil ruth rocha"
  },
  {
    "id": "as-melhores-historias-dos-projetos-de-leitura-lae-de-souza",
    "title": "As Melhores Histórias dos Projetos de Leitura",
    "author": "Laé de Souza",
    "category": "Contos",
    "collection": false,
    "publisher": "Ecoarte",
    "level": "EM - Ensino Médio",
    "synopsis": "Nesta obra,o leitor encontrará os melhores textos produzidos por alunos que participaram do projeto \" ler é bom \" em 2017."
  },
  {
    "id": "as-mil-e-uma-noites-contos-selecionados-paulo-sergio-de-vasconcellos",
    "title": "As Mil e uma Noites Contos Selecionados",
    "author": "Paulo Sérgio de Vasconcellos",
    "category": "Contos",
    "collection": false,
    "publisher": "Objetivo",
    "level": "EM - Ensino Médio",
    "synopsis": "As mil e uma noites constituem um antigo tesouro de histórias narrativas da literatura árabe que há três séculos são conhecidas e exercem grande influência no ocidente. Xerazad, a narradora, é uma contadora de histórias única: ela não as conta para distrair a atenção da passagem do tempo e da vida (como aconselha machado de assis, repetindo diderot); ela conta histórias para não morrer, pois é o interesse despertado por suas narrativas que a mantém viva - tanto no livro, porque o sultão não a mata, como na realidade, porque os leitores não a abandonam."
  },
  {
    "id": "causos-da-televisao-ao-vivo-e-outras-historias-rolando-boldrin",
    "title": "Causos da Televisão \"ao Vivo\" e ... Outras Histórias",
    "author": "Rolando Boldrin",
    "category": "Contos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Nos anos 60, meu saudoso amigo lau \"barbeiro\", (wenceslau armando mariani) figura humana muito querida dos artistas e funcionários da tv tupi de são paulo, desde os áureos tempos do início de tudo, talvez motivado por nosso gostoso convívio diário, na sua pequena barbearia no prédio velho das associadas, quando trocávamos \"causos\" e histórias das nossas vidas, presenteou-me com uma preciosidade de três livros. Ali, o grande escritor nordestino nos brindava com um colhido de 100 histórias, \"garimpadas\" através de sua minuciosa pesquisa, onde todos os estados do brasil, estão representados, por escritores famosos e não famosos."
  },
  {
    "id": "comedias-para-se-ler-na-escola-luis-fernando-verissimo",
    "title": "Comédias para se Ler na Escola",
    "author": "Luis Fernando Verissimo",
    "category": "Contos",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EM - Ensino Médio",
    "synopsis": "\"depois de ler esse livro, duvido que algum jovem ainda seja capaz de dizer, sinceramente, que não curte ler. Aposto que, em sua maioria, os novos leitores vão se viciar em livros e sair procurando outros textos, de outros autores. Com vontade de, um dia, chegar a escrever assim. Quem sabe? O verissimo nunca pensou que ia ser escritor quando crescesse. Seu negócio era mesmo um bom solo de saxofone. Mas com essa história de ser músico, desenvolveu tanto o ouvido que acabou assim: hoje ele ouve (e conta pra nós) até o que pensamos, sentimos e sonhamos em silêncio. Em qualquer idade.\""
  },
  {
    "id": "contos-e-e-cummings",
    "title": "Contos",
    "author": "E.e. Cummings",
    "category": "Contos",
    "collection": false,
    "publisher": "Cosacnaify",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "contos-de-hans-christian-andersen-reginadrummond",
    "title": "Contos de Hans Christian Andersen",
    "author": "Reginadrummond",
    "category": "Contos",
    "collection": false,
    "publisher": "Elo",
    "level": "LIVRE",
    "synopsis": "As histórias que o dinamarquês hans christian andersen escreveu romperam a barreira do tempo e ainda encantam crianças de tosas as idades. Quem nunca se comoveu com o patinho deio ou se emocionou com o amor do soldadinho de chumbo pela bailarina de papel? Algumas dessas histórias inesquecíveis foram adaptadas por regina drummond, que mantece intactas a leveza e a poesia que as caracterizam. André neves islustrou-as com toda sua arte e um toque brasileiro, de modo a aproximá-las do coração das crianças e de pessoas de todas as idades."
  },
  {
    "id": "contos-do-rio-tiete-e-arredores-luiz-pizzo",
    "title": "Contos do Rio Tietê e Arredores",
    "author": "Luiz Pizzo",
    "category": "Contos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "É uma série de casos e causos, ora tristes, ora alegres, ocorridos no rio tierê, em suas margens e nos arredores de barra bonita, os quis fazem parte do folclore local."
  },
  {
    "id": "contos-e-recontos-machado-de-assis",
    "title": "Contos e Recontos",
    "author": "Machado de Assis",
    "category": "Contos",
    "collection": false,
    "publisher": "Salesiana",
    "level": "EM - Ensino Médio",
    "synopsis": "Existe uma distância a separar o jovem leitor, não de machado de assis, mas do brasil em ele viveu e da linguagem utilizada na época. Este livro procura vencer tal barreira. São sete contos, do repertório machadiano recontados por diferentes autores. E depois de receber machado no século xxi, o leitor vai se sentir estimulado a fazer o percurso inverso: visitá-lo no século xix."
  },
  {
    "id": "contos-fatais-as-forcas-estranhas-leopoldo-lugones",
    "title": "Contos Fatais - as Forças Estranhas",
    "author": "Leopoldo Lugones",
    "category": "Contos",
    "collection": false,
    "publisher": "Globo",
    "level": "EM - Ensino Médio",
    "synopsis": "\"comprei o macaco no leilão de um circo que havia falido. A primeira vez que me ocorreu tentar a experiência a cujo relato são dedicadas estas kinhas foi numa tarde, lendo nem sei onde que os naturais de java atribuíam a falta de linguagem articulada nos macacos à abstenção, não à incapacidade. 'não falam' diziam, ' para que não os façam trabalhar'. Semelhante ideia, nada profunda ao princípio, acabou por me preocupar até se converter neste postulado antropológico: os macacos foram homens que, por uma ou outra razão, deixaram de falar. O fato produziu a atrofia dos seus órgãos de fonação e dos centros cerebrais da linguagem; debilitou, quase até suprimi-la, a relação entre uns e outros, fixando o idioma sa espécie em um grito inarticulado, e o humano primitivo desceu a ser animal.\""
  },
  {
    "id": "contos-tradicionais-do-brasil-para-criancas-luis-da-camara-cascudo",
    "title": "Contos Tradicionais do Brasil para Crianças",
    "author": "Luís da Camara Cascudo",
    "category": "Contos",
    "collection": false,
    "publisher": "Global",
    "level": "LIVRE",
    "synopsis": "Contos para crianças"
  },
  {
    "id": "eca-de-queiros-douglas-tufano",
    "title": "Eça de Queirós",
    "author": "Douglas Tufano",
    "category": "Contos",
    "collection": false,
    "publisher": "Moderna",
    "level": "EM - Ensino Médio",
    "synopsis": "Com este livro, os jovens leitores são apresentados à obra de um dos nomes mais importantes da literatura portuguesa: eça de queirós. Por meio de uma seleção de contos e trechos de seus romaces realistas."
  },
  {
    "id": "estas-livre-no-sabado-antonio-ladeira",
    "title": "Estás Livre no Sábado?",
    "author": "António Ladeira",
    "category": "Contos",
    "collection": false,
    "publisher": "Realejo",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "\"sábado, todo o mundo sabe, é já amanhã. Fica já ao virar da esquina, e ora é promessa de coisa boa (digamos, terra prometida, maná, salvação, alegria), ora nos faz desconfiar que estão vendendo monociclo por suite nupcia. O que ladeira faz, nestes contins, é aquilo de que todos estamos precisados: questionar o futuro para escrutinar o presente.\""
  },
  {
    "id": "estorias-abensonhadas-mia-couto",
    "title": "Estórias Abensonhadas",
    "author": "Mia Couto",
    "category": "Contos",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "Depois de quase trinta anos de guerras, moçambique por fim entrou em um longo período de paz. Nestas estórias abensonhadas, o premiado escritor mia couto capta um país em transição. Numa prosa poética e carregada das tradições orais africanas, o autor tece pequenas fábulas e registros que, sem irromper em grandes acontecimentos, capturam os movimentos íntimos dessa passagem. São histórias que formam um retrato afetivo e mágico da moçambique de mia couto, em que o fantástico faz parte do cotidiano, e a música reside na própria fala das ruas. A partir de vidas enganosamente pequenas, revela-se um prodigioso iniverso literário, inovador na linguagem, mas sempre atento à força das grandes narrativas."
  },
  {
    "id": "fabulas-monteiro-lobato",
    "title": "Fábulas",
    "author": "Monteiro Lobato",
    "category": "Contos",
    "collection": false,
    "publisher": "Ciranda Cultural",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Se tem algo que a turma do sítio do pica pau amarelo adora, são histórias. Histórias de princesas, príncipes, reis e rainhas; histórias do folclore; lendas e mitos; ou ainda fábulas que ensinam grandes lições de vida. Dona benta lê para a turma os maiores clássicos."
  },
  {
    "id": "fabulas-paulo-coelho",
    "title": "Fábulas",
    "author": "Paulo Coelho",
    "category": "Contos",
    "collection": false,
    "publisher": "Benvirá",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Histórias de esopo e la fontaine para o nosso tempo"
  },
  {
    "id": "historias-para-ler-sem-pressa-mamede-mustafa-jarouche",
    "title": "Histórias para Ler Sem Pressa",
    "author": "Mamede Mustafa Jarouche",
    "category": "Contos",
    "collection": false,
    "publisher": "Globo",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Histórias escolhidas e traduzidas do árabe"
  },
  {
    "id": "ilhados-tratado-sobre-guris-lourenco-cazarre",
    "title": "Ilhados Tratado Sobre Guris",
    "author": "Lourenço Cazarré",
    "category": "Contos",
    "collection": false,
    "publisher": "Saraiva",
    "level": "EM - Ensino Médio",
    "synopsis": "Um tratado sobre guris, sobre como a infância marca a vida de todas as pessoas, sobre como as lembranças pungem o presente, sobre como é ser humano."
  },
  {
    "id": "lacos-de-familia-clarice-lispector",
    "title": "Laços de Família",
    "author": "Clarice Lispector",
    "category": "Contos",
    "collection": false,
    "publisher": "Rocco",
    "level": "EM - Ensino Médio",
    "synopsis": "A escrita de clarice lispector situa-se numa confluêcia de paradigmas, que a narradora entretece destece e põe em tensão: a cena do realismo-naturalismo e a do romantismo-simbolismo. Isto significa que em seus textos encontra-se veios recessivos que, transformados por sua perspectiva estilística pessoal, criam um entrelaçamento significativo entre a realidade e a \"realidade adivinhada\". Neste sentido, ela produz uma poética que lhe é própria, e nela como que desenha uma arquitetura textual sui generis, na qual três obras se destacam e se enlaçam (reclamando-se e afastando-se) com rara sabedoria, por permitirem perceber a tenção no traçado do conjunto: laços de família, que contracena com a via crucis do corpo, mais próximo de uma lição realista- naturalista; água viva, denso poema em prosa, na qual tempo, enredo, personagens se desagregam e a hora da estrela, espécie de ponto ótimo de articulação, mas não de síntese, das tendências referidas."
  },
  {
    "id": "miopia-e-outros-contos-insolitos-tadeu-pereira",
    "title": "Miopia e Outros Contos Insólitos",
    "author": "Tadeu Pereira",
    "category": "Contos",
    "collection": false,
    "publisher": "Saraiva",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "De perto ninguém é normal, será? As histórias deste livro fazem pensar. Realçam a poesia e a loucura que se escondem nas tramas do cotidiano, trazem movos óculos, novas lentes que ajudam a enxergar insólitas questões do mundo. Os contos são curtos, mas não se engane: os questionamentos são muitos."
  },
  {
    "id": "no-caminho-do-nada-leandro-marcal",
    "title": "No Caminho do Nada",
    "author": "Leandro Marçal",
    "category": "Contos",
    "collection": false,
    "publisher": "Kazuá",
    "level": "EM - Ensino Médio",
    "synopsis": "Um homem do nosso tempo. Um sujeito aparentemente normal. Em no caminho do nada, marcelo parece ser mais um na multidão, alguém que talvez não prestássemos atenção no cotidiano. Aí reside o primeiro e decisivo engano. Marcelo somos nós, mesmo que o façamos somente um pedaço do espelho que nos reflete. Marcelo é o homem contemporâneo, em crise com sua própria identidade, escravo dos pequenos prazeres, insatisfeito com suas conquistas, em sofrimento com suas derrotas, um personagem diante de um muro chamado aceitação, numa trajetória que envolve família e trabalho. Neste romance de estreia, leandro marçal trabalha os personagens com delicadeza dolorosa, sem perdoá-los por seus erros, sem mantê-los protegidos de suas angústias, ansiedades e desejos. Um belo primeiro \"filho\" de um escritor que poderia permanecer na não-ficção, porém seguiu pelos caminhos nem sempre seremos da literatura."
  },
  {
    "id": "no-meio-da-noite-escura-tem-um-pe-de-maravilha-ricardo-azevedo",
    "title": "No Meio da Noite Escura Tem um Pé de Maravilha",
    "author": "Ricardo Azevedo",
    "category": "Contos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Ricardo azevedo como estudioso do nosso folclore e bom contador de histórias, escolheu algumas das mais belas e escreveu do jeito que todo mundo gosta, como um pai que conta para o filho"
  },
  {
    "id": "novas-historias-antigas-rosane-pamplona",
    "title": "Novas Histórias Antigas",
    "author": "Rosane Pamplona",
    "category": "Contos",
    "collection": false,
    "publisher": "Escarlate",
    "level": "LIVRE",
    "synopsis": "A tradição oral de diversas regiões e culturas veio parar neste parar neste livro! São contos de um mundo maravilhoso, povoado por seres encantados e também por gente comum. Personagens sonhadores, sagazes, ambiciosos, apaixonados, que retratam com perfeição as muitas peculiariedades humanas."
  },
  {
    "id": "o-alienista-e-outros-contos-machado-de-assis",
    "title": "O Alienista e Outros Contos",
    "author": "Machado de Assis",
    "category": "Contos",
    "collection": false,
    "publisher": "Moderna",
    "level": "EM - Ensino Médio",
    "synopsis": "Ficção e realidade em narrativas desafiadoras e envolventes,plenas ironias,jogos de linguagem e profunda análise da alma humana."
  },
  {
    "id": "o-homem-do-furo-na-mao-e-outras-historias-ignacio-de-loyola-brandao",
    "title": "O Homem do Furo na Mão e Outras Histórias",
    "author": "Ignácio de Loyola Brandão",
    "category": "Contos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EM - Ensino Médio",
    "synopsis": "Nos 11 contos desta coletânia, ignácio de loyola brandão nos propõe o desafio de pensarmos a realidade que nos cerca como uma tensão permanente entre a rotina comdicionadora e o anseio de viver do ser humano. São histórias surpreendentes, em que o maior protagonista é o inusitado. Construindo narrativas que questionam a normalidade do dia a dia e em que a ordem aparente das coisas é rompida pelo sobressalto do imprevisto, o autor vai lançando o leitor para dentro do mundo do inesperado. Dessa maneira, nos vemos frente a uma possibilidade de enxergar os fatos da vida cotidiana, por meio destas histórias extremamente imaginativas, ágeis e cortantes."
  },
  {
    "id": "o-melhor-das-comedias-da-vida-privada-luis-fernando-verissimo",
    "title": "O Melhor das Comédias da Vida Privada",
    "author": "Luis Fernando Verissimo",
    "category": "Contos",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma obra indispensável que transforma os pequenos dramas da vida ordinária em grandes e inesquecíveis comédias"
  },
  {
    "id": "o-papagaio-real-luis-da-camara-cascudo",
    "title": "O Papagaio Real",
    "author": "Luís da Câmara Cascudo",
    "category": "Contos",
    "collection": false,
    "publisher": "Global",
    "level": "LIVRE",
    "synopsis": "Câmara cascudo buscou estas histórias nas fontes da memória e da imaginação popular. Histórias contadas e recontadas, nos mais diferentes pontos do mundo, para delícia das crianças de qualquer idade."
  },
  {
    "id": "o-primeiro-e-outros-contos-mario-ferreira",
    "title": "O Primeiro e Outros Contos",
    "author": "Mário Ferreira",
    "category": "Contos",
    "collection": false,
    "publisher": "Publisher Editora",
    "level": "EM - Ensino Médio",
    "synopsis": "\"a segunda possibilidade era mais simples: deus era uma criação da imaginação humana, uma abstração; portanto, no plano concreto deus não existia. Essa era uma ideia cômoda, porém incompleta, uma vez que não explicava a beleza e o sentido da vida, tampouco revelava os mistérios dos milagres diários da natureza, dos rumos e da origem de tudo e do nada, da escuridão, dos espaços, do sol, da terra e das estrelas."
  },
  {
    "id": "o-sol-na-cabeca-geovani-martins",
    "title": "O Sol na Cabeça",
    "author": "Geovani Martins",
    "category": "Contos",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "As histórias abordam desde momentos simples e de descontação - como o trajeto para até a praia, as amizades e as primeiras paixões - até as tensões constantes provocadas pela discriminação social, pela violência urbana e pela presença intimidadora da polícia"
  },
  {
    "id": "os-cem-melhores-contos-brasileiros-do-seculo-coautoria",
    "title": "Os Cem Melhores Contos Brasileiros do Século",
    "author": "Coautoria",
    "category": "Contos",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EM - Ensino Médio",
    "synopsis": "Uma antologia livre de academicismos. Uma pesquisa orientada pela qualidade. Uma seleção de pequenas obras-primas. Os cem melhores contos brasileiros do século reúnem narrativas extraordinárias de alguns dos principais nomes de nossa literatura."
  },
  {
    "id": "os-contos-de-beedle-o-bardo-j-k-rowling",
    "title": "Os Contos de Beedle, o Bardo",
    "author": "J.k. Rowling",
    "category": "Contos",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Os contos de beadle, o bardo são cinco hitórias de fadas diferentes entre si. Cada uma delas é dotada de um caráter mágico próprio e proporcionarão, a seu turno, prazer, riso e a emoção do perigo mortal. Trouxas e bruxos vão apreciar os comentários de autoria do professor alvo dumbledore, nos quais ele reflete sobre a moral ilustrada pelos contos e dá breves notícias sobre a vida em hogwarts."
  },
  {
    "id": "para-ler-na-escola-coautoria",
    "title": "Para Ler na Escola",
    "author": "Coautoria",
    "category": "Contos",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro traz textos que observam as contradições do cotidiano, a vida em família, os afetos e a política com o olhar único de um dos maiores jornalistas e cronistas da literatura brasileira contemporânea"
  },
  {
    "id": "paulo-coelho-historias-para-pais-filhos-e-netos-paulo-coelho",
    "title": "Paulo Coelho Histórias para Pais, Filhos e Netos",
    "author": "Paulo Coelho",
    "category": "Contos",
    "collection": false,
    "publisher": "Globo",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "por-tras-das-cortinas-mohsen-sulaiman",
    "title": "Por Trás das Cortinas",
    "author": "Mohsen Sulaiman",
    "category": "Contos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": ""
  },
  {
    "id": "revelar-se-autor-coautoria",
    "title": "Revelar-se Autor",
    "author": "Coautoria",
    "category": "Contos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Trata-se de uma coletânea de crônicas produzida no âmbito da secretaria municipal de educação de são paulo"
  },
  {
    "id": "venha-ver-o-por-do-sol-lygia-fagundes-telles",
    "title": "Venha Ver o Por-do-sol",
    "author": "Lygia Fagundes Telles",
    "category": "Contos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EM - Ensino Médio",
    "synopsis": "Fatos fantásticos ou dramáticos sacodem repentinamente o cotidiano de pessoas comuns, revelando facetas de um mundo ilógico e desumano. É essa vida que se lê nas páginas envolventes e profundamente inquietantes de lygia fagundes telles."
  },
  {
    "id": "10-cordeis-nota-10-antonio-francisco",
    "title": "10 Cordeis Nota 10",
    "author": "António Francisco",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Imeph",
    "level": "EM - Ensino Médio",
    "synopsis": ""
  },
  {
    "id": "a-peleja-do-violeiro-chico-bento-com-o-rabequeiro-ze-lele-fabio-sombra-e-maurici",
    "title": "A Peleja do Violeiro Chico Bento com o Rabequeiro Zé Lelé",
    "author": "Fábio Sombra e Mauricio de Sousa",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "LIVRE",
    "synopsis": "Chico bento é um violeiro respeitado no sertão. Zé lelé toca rabeca com talento e inspiração neste livro eles se encontram e eu proponho uma questão: num torneio de poesia, qual dos dois sairá campeão?"
  },
  {
    "id": "a-raposa-e-o-corvo-mauricio-de-sousa",
    "title": "A Raposa e o Corvo",
    "author": "Mauricio de Sousa",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Mauricio de Souza",
    "level": "LIVRE",
    "synopsis": "Diversas fábulas com a turma da mônica"
  },
  {
    "id": "as-fantasticas-fabulas-do-magnafico-terry-jones",
    "title": "As Fantásticas Fábulas do Magnáfico",
    "author": "Terry Jones",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Formato",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um jovem tigre convencido que acaba aprendendo uma boa lição. Um crocodilo ambicioso que não consegue encontrar emprego. Em elefante que só se preocupa em arranjar um par de calças. Esses e outros animais ganham não apenas vida, mas também voz, personalidade e sentimentos neste fantástico livro do magnífico terry jones, integrante do famoso grupo britânico de comédia monty python. Essas fábulas contemporâneas, divertidas e inteligentes, vão encatar leitores de todas a idades ao mostrar que por trás de algumas carinhas peludas ou escamosas se escondem complexos personagens, capazes de vivenciar as mais curiosas experiências."
  },
  {
    "id": "as-sete-viagens-fabulosas-do-marinheiro-simbad-sergio-severo",
    "title": "As Sete Viagens Fabulosas do Marinheiro Simbad",
    "author": "Sérgio Severo",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Novalexandria",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Simbad, o famoso marujo das histórias das mil e uma noites, tem suas aventuras recontadas pelo cordelista sérgio severo"
  },
  {
    "id": "como-atirar-vacas-no-precipicio-coautoria",
    "title": "Como Atirar Vacas no Precipício",
    "author": "Coautoria",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Panda Books",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "As parábolas selecionadas neste livro provêm de uma série de países e culturas. Pertencem ao mistério da sabedoria, os grandes mestres espirituais da humanidade criaram essas histórias para vencer a oposição dos ouvintes. É uma linguagem que vai direto ao coração. Ler, contar e ouvir histórias uns dos outros pode levar a muitas mudanças. Além disso, as parábolas são veículos poderosos para nos comunicarmos com o nosso inconsciente. Como atirar vacas no precipício é um conviete à descoberta de você mesmo!"
  },
  {
    "id": "cordel-e-repente-mil-e-uma-noites-no-sertao-coautoria",
    "title": "Cordel e Repente Mil e uma Noites no Sertão",
    "author": "Coautoria",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Imeph",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O cordel é o canto nordestino que se fez citadino, universal, nos seus versos ecoa portugal e a jornada do povo beduíno, suas rimas têm brilho adamantino, em livretos de temas genias, teodora, joão grilo e ferrabrás fazem parte das leituras do povo, de um poema que sempre será novo e o que é que nos falta fazer mais?"
  },
  {
    "id": "da-vinci-rejane-bernal-ventura",
    "title": "Da Vinci",
    "author": "Rejane Bernal Ventura",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Hedra",
    "level": "EM - Ensino Médio",
    "synopsis": "Sátiras, fábulas, aforismos e profecias"
  },
  {
    "id": "do-conto-a-cronica-coautoria",
    "title": "Do Conto à Crônica",
    "author": "Coautoria",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Salamandra",
    "level": "LIVRE",
    "synopsis": "Neste volume da coleção você vai conhecer um pouco da história da crônica e do conto como gêneros literários. Vai ter a oportunidade de comparar autores do presente e do passado e descobrir como a boa literatura sempre teve como obletivo pensar a vida além das aparências."
  },
  {
    "id": "esopo-antonio-carlos-vianna",
    "title": "Esopo",
    "author": "António Carlos Vianna",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "L&pm",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O LEGENDÁRIO ESOPO FOI UM PERSONAGEM QUASE MÍTICO DO SÉCULO VI a.C. (FOI CITADO POR HERÓDOTO, EM SUA HISTÓRIA, POR ARISTÓFANES, PLATÃO, ALÉM DE DIVERSOS FILÓSOFOS E AUTORES GREGOS. EXISTE O TEXTO BIOGRÁFICO DE LA FONTAINE, VIE DE ESOPE LE PHYGIEN, E UMA BIOGRAFIA ROMANESCA, A VIDA DE ESOPO PRODUZIDA EM 1490 PELO MONGE BIZANTINO PLANUDE). SABE-SE QUE ELE FOI UM ESCRAVO LIBERTADO POR SEU ÚLTIMO SENHOR, XANTO. EMBORA TIVESSE UMA APARÊNCIA ESTRANHA - CONSTA QUE ERA CORCUNDA - POSSUÍA O DOM DA PALAVRA E A HABILIDADE DE CONTAR HISTÓRIAS ONDE OS PERSONAGENS ERAM ANIMAIS, E QUE INVARIAVELMENTE TERMINAVAM COM TIRADAS MORAIS."
  },
  {
    "id": "esopo-fabulas-completas-neide-smolka",
    "title": "Esopo Fábulas Completas",
    "author": "Neide Smolka",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Singelas e moralistas, as fábulas mostram como base da cultura grega.no ínicio da civlização grega."
  },
  {
    "id": "eu-voce-e-tudo-que-existe-liliana-iacocca-e-siron-franco",
    "title": "Eu , Vocẽ e Tudo que Existe",
    "author": "Liliana Iacocca e Siron Franco",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Fábula ecolôgica"
  },
  {
    "id": "fabulas-la-fontaine",
    "title": "Fábulas",
    "author": "La Fontaine",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Editora Revan",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": ""
  },
  {
    "id": "fabulas-de-leonardo-da-vinci-alfredo-serta",
    "title": "Fábulas de Leonardo da Vinci",
    "author": "Alfredo Sertã",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Leornado da vinci, autor da famosa pintura mona lisa, grande gênio das ciências e das artes, tinha os mais variados talentos. Entre seus muitos e diversificados interesses estava a escrita de fábulas. Este livro, idealizado pelo músico alfredo sertã, reconta qutro fábulas de leonardo da vinci, no cd elas surgem narradas por atores renomados e acompanhadas de composições musicais que dão ritmo ao texto e interagem com os personagens. Nas gravações foram utilizados instrumentos de orquestra, que podem ser vistos nas páginas do livro. As poéticas ilustrações de thais beltrame completam o conjunto com delicadeza. A obra desperta em crianças e adultos a imaginação e o interesse por todas essas expressões artísticas, além de prestar homenagem a um dos maiores artistas da humanidade."
  },
  {
    "id": "fabulas-palpitadas-pedro-bandeira",
    "title": "Fábulas Palpitadas",
    "author": "Pedro Bandeira",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Divirta-se e aprenda a viver, rindo e racionando com essas histórias. Cantdas (e palpitadas!) em versos, com o humor e a leveza de pedro bandeira, aqui estão as mais famosas fábulas do velho grego chamado esopo (essas são aquelas histórias que usam bichos para dar exemplo de bem viver às pessoas). E hoje, repensando essas moralidades, descobre-se que tudo continua muito atual, como se tivessem sido escritas ainda agorinha. Isso porque o mundo progride, mas as emoções humanas continuam as mesmas!"
  },
  {
    "id": "ferreira-gullar-augusto-sergio-bastos",
    "title": "Ferreira Gullar",
    "author": "Augusto Sérgio Bastos",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Global",
    "level": "EM - Ensino Médio",
    "synopsis": "\"se os versos de gullar sempre foram sensíveis à problemática social, aproximando-se do dia-a-dia, das alegrias e tritezas, reflexões e ousadias do homem comum, as crônicas seguem a mesma linha: muitas são engraçadas ou absurdas, outras poéticas, algumas abordam temas políticos e polêmicos, mas sempre atentas às transformações do ser humano.\""
  },
  {
    "id": "lamarca-herzog-e-outros-herois-jose-pessoa-de-araujo",
    "title": "Lamarca, Herzog e Outros Heróis",
    "author": "José Pessoa de Araújo",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Filoczar",
    "level": "EM - Ensino Médio",
    "synopsis": "Lamarca, herzog e outras heróis foi lançado, em sua primeira edição, em 1998. Ele conta, em forma de cordel, a história de alguns presos políticos mortos no período da ditadura brasileira. O livro tornou-se referência para quem pesquisa sobre desaparecidos políticos. O autor foi movido pela experiêcia de ter sido preso pelo regime militar e escreveu este livro para mostrar como age uma ditadura."
  },
  {
    "id": "lampiao-rei-do-cangaco-geraldo-amancio",
    "title": "Lampião Rei do Cangaço",
    "author": "Geraldo Amancio",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Imeph",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Livro do renomado repentista geraldo amancio, traz, em versos de cordel, a biografia detalhada de virgulino ferreira da silva - o famoso lampião. Pesquisa cuidadosa, versos bem elaborados, enredo que emociona... Vale a pena conferir!"
  },
  {
    "id": "memorias-postumas-de-bras-cubas-em-cordel-machado-de-assis",
    "title": "Memórias Póstumas de Brás Cubas em Cordel",
    "author": "Machado de Assis",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Novalexandria",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O romance \"memórias póstumas de brás cubas\" em um formato diferente: cordel"
  },
  {
    "id": "minhas-rimas-de-cordel-cesar-obed",
    "title": "Minhas Rimas de Cordel",
    "author": "César Obed",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Moderna",
    "level": "EM - Ensino Médio",
    "synopsis": "Quem nunca brincou de \"o que é o que é?\" e ficou estalamdo os dedos para encontrar a resposta? Quem nunca ouviu de alguém uma crendice ou superstição: se fizer isso acontece aquilo? Quem nunca falou um ditado popular para explicar melhor o que quer dizer? Quem não gosta de ouvir contos populares engraçados e envolventes? Tudo isso está aqui, contado de uma maneira muito rica: a literatura de cordel brasileira."
  },
  {
    "id": "moby-dick-em-cordel-stelio-torquato-lima",
    "title": "Moby-dick em Cordel",
    "author": "Stélio Torquato Lima",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Novalexandria",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Publicado originalmente em três fascículos em lonfres, em 1851, o romance moby-dick - a baleia branca, inspirado em fatos verídicos e escrito por hermann malville, conta a história do capitão ahab e seu navio pequod, que naufragou após ser atingido por uma enorme baleia branca."
  },
  {
    "id": "no-meio-da-escura-tem-um-pe-maravilha-ricardo-azevedo",
    "title": "No Meio da Escura Tem um Pé Maravilha!",
    "author": "Ricardo Azevedo",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Erauma vez uma porção de histórias que o tataravô contava para o bisavô, que contava para o avô, que contava para o pai... Que começou a parar de contar. São histórias que falam da existência, espalham brilho e magia em qualquer lugar ou época, e ainda assim estão ameaçadas de se perderem. Mas antes que desapareçam no meio da noite escura ricardo azevedo, como estudioso do nosso folclote e bom contador de histórias, escolheu algumas das mais belas e escreveu do jeito que todo mundo gosta, como um pai que conta para o filho..."
  },
  {
    "id": "o-conto-da-ilha-desconhecida-jose-saramago",
    "title": "O Conto da Ilha Desconhecida",
    "author": "José Saramago",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "\"e a ilha desconhecida, perguntou o homem do leme, a ilha desconhecida não passa duma ideia da tua cabeça, os geógrafos do rei foram ver nos mapas e declararam, que ilhas por conhecer é coisa que se acabou desde há muito tempo...\""
  },
  {
    "id": "o-raiozinho-e-a-furiosa-mauricio-de-souza-e-mario-mattoso",
    "title": "O Raiozinho e a Furiosa",
    "author": "Mauricio de Souza e Mário Mattoso",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "LIVRE",
    "synopsis": "Em o raiozinho e a furiosa, mauricio de souza mescla histórias em quadrinhos com literatura de cordel, numa deliciosa aventura escrita de forma rimada, com a presença da turminha do bairro limoeiro"
  },
  {
    "id": "o-sabio-ao-contrario-ricardo-azevedo",
    "title": "O Sábio ao Contrário",
    "author": "Ricardo Azevedo",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Era uma vez... Como toda história de reinos distantes, reis e princesas, esta começa assim, mas é diferente de qualquer outra que você conheça. Afinal de contas, nesta tem um sábio ao contrário que com seus estudos e suas pesquisas aparentemente sem propósitos vai transformar a vida de todos."
  },
  {
    "id": "os-melhores-do-1o-concurso-de-cordel-2002-assis-angelo",
    "title": "Os Melhores do 1º Concurso de Cordel -2002-",
    "author": "Assis Ângelo",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Gov",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Profissionais e amadores de todo o país disputam os primeiros lugares do 1º concurso paulista de literatura de cordel, promovido pela cptm e metrô de são paulo, empresas vinculadas à secretaria de estado dos transportes metropolitenos. Os trabalhos foram considerados de \"alríssimo nível\" por uma comissão julgadora formada por especialistas e presidida por sebastião marinho, da união dos contadores repentistas e apologistas do nordeste - ucran."
  },
  {
    "id": "patativa-do-assare-evaristo-geraldo",
    "title": "Patativa do Assaré",
    "author": "Evaristo Geraldo",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Imeph",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Este livro , escrito na linguagem do cordel, mostra a trajetória de patativa do assaré e como seus versos fizeram eco do nordeste para o mundo !"
  },
  {
    "id": "sao-paulo-em-cordel-obra-coletiva",
    "title": "São Paulo em Cordel",
    "author": "Obra Coletiva",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Imeph",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "todos-os-fogos-o-fogo-julio-cortazar",
    "title": "Todos os Fogos o Fogo",
    "author": "Julio Cortázar",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Bestbolso",
    "level": "EM - Ensino Médio",
    "synopsis": "Esta coletânea reúne oito contos que representam a plenitudde do autor. No engenhoso texto \"a autoestrada do sul\" há a criação de microssociedades; no belo \"todos os fogos o fogo\" duas histórias de paixão aparentemente desconexas são narradas paralelamente; em \"senhorita cora\" temos a história de um jovem doente e sua enfermeira. Os apreciadores do conto em geral e os admiradores da iventividade de julio cortázar podem saborear também os seguintes textos: \"a saúde dos doentes\", \"reunião\", \"a ilha ao meio-dia\", \"instruçõesa john howel\" e \"o outro céu\"."
  },
  {
    "id": "tres-fabulas-budistas-para-criancas-bruno-pacheco",
    "title": "Três Fábulas Budistas para Crianças",
    "author": "Bruno Pacheco",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Record",
    "level": "LIVRE",
    "synopsis": "Uma obra que adapta ensinamentos e filosofias orientais para introduzir às crianças aos fundamentos de uma vida digna, amorosa e equilibrada"
  },
  {
    "id": "diario-de-aventuras-da-ellie-a-verdadeira-jogadora-ruth-mcnally-barshaw",
    "title": "Diário de Aventuras da Ellie -a Verdadeira Jogadora",
    "author": "Ruth Mcnally Barshaw",
    "category": "Diários",
    "collection": true,
    "publisher": "Ciranda Cultural",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ellie não é uma atleta ruim. Mas isso não quer dizer que ela seja uma boa atleta"
  },
  {
    "id": "diario-de-aventuras-da-ellie-um-novo-presidente-ruth-mcnally-barshaw",
    "title": "Diário de Aventuras da Ellie- um Novo Presidente",
    "author": "Ruth Mcnally Barshaw",
    "category": "Diários",
    "collection": true,
    "publisher": "Ciranda Cultural",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Fazer o jornal da escola ? Claro ! Concorrer a presidente de classe? Ops!"
  },
  {
    "id": "diario-de-aventuras-da-ellie-a-aluna-nova-ruth-mcnally-barshaw",
    "title": "Diário de Aventuras da Ellie- a Aluna Nova",
    "author": "Ruth Mcnally Barshaw",
    "category": "Diários",
    "collection": true,
    "publisher": "Ciranda Cultural",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Mudar para uma casa nova ? Ruim. Ser aluna nova? Péssimo !"
  },
  {
    "id": "diario-de-um-adolescente-hipocondriaco-coautoria",
    "title": "Diário de um Adolescente Hipocondríaco",
    "author": "Coautoria",
    "category": "Diários",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Convencido de que tem ou pode ter quaquer tipo de doença bizarra, ele registra em seu diário com muito humor e ironia suas angústias e descobertas"
  },
  {
    "id": "diario-de-um-banana-a-gota-d-agua-jeff-kinney",
    "title": "Diário de um Banana a Gota D´ Água",
    "author": "Jeff Kinney",
    "category": "Diários",
    "collection": true,
    "publisher": "Vr Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Qual será a gota d´ água que vai fazer a paciência de frank transbordar de vez ?"
  },
  {
    "id": "diario-de-um-banana-a-verdade-nua-e-crua-jeff-kinney",
    "title": "Diário de um Banana a Verdade Nua e Crua",
    "author": "Jeff Kinney",
    "category": "Diários",
    "collection": true,
    "publisher": "Vr Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "De repente, greg começa a lidar com as pressões das festas de meninos e meninas , com o aumento de responsabilidades e também com as mudanças embaraçosas que acompanham o crescimento"
  },
  {
    "id": "diario-de-um-banana-bons-tempos-jeff-kinney",
    "title": "Diário de um Banana Bons Tempos",
    "author": "Jeff Kinney",
    "category": "Diários",
    "collection": true,
    "publisher": "Vr Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Dentro e fora de casa , greg terá que enfrentar o dia a dia á moda antiga. Será que ele vai conseguir sobreviver do mesmo jeitinho que se fazia nos '' bons e velhos tempos '' ?"
  },
  {
    "id": "diario-de-um-banana-caindo-na-estrada-jeff-kinney",
    "title": "Diário de um Banana Caindo na Estrada",
    "author": "Jeff Kinney",
    "category": "Diários",
    "collection": true,
    "publisher": "Vr Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma viajem de carro em família tem tudo para ser algo divertidíssimo... Ou não , ainda mais se for a família do greg heffley"
  },
  {
    "id": "diario-de-um-banana-casa-dos-horrores-jeff-kinney",
    "title": "Diário de um Banana Casa dos Horrores",
    "author": "Jeff Kinney",
    "category": "Diários",
    "collection": true,
    "publisher": "Vr Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O muro da escola foi pichado e ele é o principal suspeito.mas greg é inocente... Ou quase isso."
  },
  {
    "id": "diario-de-um-banana-dias-de-cao-jeff-kinney",
    "title": "Diário de um Banana Dias de Cão",
    "author": "Jeff Kinney",
    "category": "Diários",
    "collection": true,
    "publisher": "Vr Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Greg , '' um caseiro '' assumido ,está vivendo sua última fantasia de verão: nada de responsabilidade e regras"
  },
  {
    "id": "diario-de-um-banana-mare-de-azar-jeff-kinney",
    "title": "Diário de um Banana Maré de Azar",
    "author": "Jeff Kinney",
    "category": "Diários",
    "collection": true,
    "publisher": "Vr Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Seu companheiro de todas as horas, rowley , o abandonou, e encontrar novos amigos na escola acabou se revelando uma tarefa difícil."
  },
  {
    "id": "diario-de-um-banana-o-livro-do-filme-jeff-kinney",
    "title": "Diário de um Banana o Livro do Filme",
    "author": "Jeff Kinney",
    "category": "Diários",
    "collection": true,
    "publisher": "Vr Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Como greg chegou em hollywood"
  },
  {
    "id": "diario-de-um-banana-segurando-vela-jeff-kinney",
    "title": "Diário de um Banana Segurando Vela",
    "author": "Jeff Kinney",
    "category": "Diários",
    "collection": true,
    "publisher": "Vr Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A idéia de greg é usar rowley como isca para atrair as meninas, uma espécie de coadjuvante de luxo que auxilia o ator principal a brilhar."
  },
  {
    "id": "diario-de-um-barbaro-covarde-two-little-cowboys",
    "title": "Diário de um Bárbaro Covarde",
    "author": "Two Little Cowboys",
    "category": "Diários",
    "collection": false,
    "publisher": "Sextante",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma arqueira mercenária , um mago advogado , um esqueleto cegueta , um gigante dono de loja e muitos , mas muitos goblins"
  },
  {
    "id": "diario-de-um-vampiro-banana-2-tim-collins",
    "title": "Diário de um Vampiro Banana 2",
    "author": "Tim Collins",
    "category": "Diários",
    "collection": false,
    "publisher": "Novo Século",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma história do conde crápula."
  },
  {
    "id": "diario-de-um-zumbi-do-minecraft-1-um-desafio-assustador-herobrine-books",
    "title": "Diário de um Zumbi do Minecraft 1 - um Desafio Assustador",
    "author": "Herobrine Books",
    "category": "Diários",
    "collection": true,
    "publisher": "Sextante",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Você acha que os zumbis são diferentes da gente? Então ficará surpreso com o que vai descobrir. Você tem nas mãos o diário de um zumbi de 12 anos. Nessas páginas você terá a oportunidade de conhecer a escola monstro e vai saber o que realmente se passa na cabeça de slimes, esqueletos, creepers, enderman e outros personages do universo do minecraft"
  },
  {
    "id": "diario-de-um-zumbi-do-minecraft-3-ferias-do-terror-herobrine-books",
    "title": "Diário de um Zumbi do Minecraft 3 - Férias do Terror",
    "author": "Herobrine Books",
    "category": "Diários",
    "collection": true,
    "publisher": "Sextante",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Sim, zumbis também tiram férias! Ele sobreviveu ao ano letivo e desafio um golem de ferro, escapou de um fofo coelho assassino e encarou mutante, o aluno novo de 2 metros!! Ufa, acho que o zumbi merece um descanso"
  },
  {
    "id": "diario-de-um-zumbi-do-minecraft-4-trocando-de-corpo-herobrine-books",
    "title": "Diário de um Zumbi do Minecraft 4 - Trocando de Corpo",
    "author": "Herobrine Books",
    "category": "Diários",
    "collection": true,
    "publisher": "Sextante",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A vida de um humano no ensino fundamental não é nada fácil. Humano?? Não, você não leu errado. O zumbi de minecraft está de volta... Só não é mais um zumbi. Depois de uma confusão, steve e zumbi trocaram de corpos!"
  },
  {
    "id": "diario-de-um-zumbi-do-minecraft-6-acampamento-dos-horrores-herobrine-books",
    "title": "Diário de um Zumbi do Minecraft 6 - Acampamento dos Horrores",
    "author": "Herobrine Books",
    "category": "Diários",
    "collection": true,
    "publisher": "Sextante",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Conheça o pior pesadelo para um jovem zumbi: o acampamento dos horrores"
  },
  {
    "id": "diario-de-um-zumbi-do-minecraft-7-uma-familia-horripilante-herobrine-books",
    "title": "Diário de um Zumbi do Minecraft 7 - uma Família Horripilante",
    "author": "Herobrine Books",
    "category": "Diários",
    "collection": true,
    "publisher": "Sextante",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A cada cem anos, uma horda de zumbis se reúne para provocar o caos. Um ataque surpresa? Não! É a reunião da família zumbi!"
  },
  {
    "id": "diario-de-um-zumbi-do-minecraft-9-infeliz-aniversario-herobrine-books",
    "title": "Diário de um Zumbi do Minecraft 9 - Infeliz Aniversário",
    "author": "Herobrine Books",
    "category": "Diários",
    "collection": true,
    "publisher": "Sextante",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Faltam apenas algumas semanas para o dia das bruxas. Além de ser o evento preferido do zumbi, ele ainda vai completar 13 anos! Só que um \"pequeno\" problema pode interferir nos planos da festa de aniversário perfeita: o apocalipse zumbi está prestes a acontecer"
  },
  {
    "id": "judy-moody-no1-megan-mcdonald",
    "title": "Judy Moody Nº1",
    "author": "Megan Mcdonald",
    "category": "Diários",
    "collection": true,
    "publisher": "Salamandra",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O mau humor característico do final das férias tomou conta de judy. Mas a colagem \"quem sou eu\", que o professor nelson pediu, parecia uma atividade sem graça, vai agitar o pedaço, do jeito que judy gosta"
  },
  {
    "id": "judy-moody-no13-megan-mcdonald",
    "title": "Judy Moody Nº13",
    "author": "Megan Mcdonald",
    "category": "Diários",
    "collection": true,
    "publisher": "Salamandra",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Judy é a rainha das listas! Ela tem até uma lista de todas as listas que já fez..."
  },
  {
    "id": "judy-moody-no2-megan-mcdonald",
    "title": "Judy Moody Nº2",
    "author": "Megan Mcdonald",
    "category": "Diários",
    "collection": true,
    "publisher": "Salamandra",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Não há bom humor que resista ao bom-mocismo de jéssica, a rainha da ortografia. E o retrato da sabe-tudo estampado no jornal desencadeia em judy o desejo da fama, que ela vai perseguir a qualquer custo!"
  },
  {
    "id": "judy-moody-no3-megan-mcdonald",
    "title": "Judy Moody Nº3",
    "author": "Megan Mcdonald",
    "category": "Diários",
    "collection": true,
    "publisher": "Salamandra",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Judy está aprendendo muito sobre o meio ambiente, a destruição das florestas e os animais ameaçados de extinção. E também descobriu que sua família precisa aprender a reciclar"
  },
  {
    "id": "judy-moody-no7-megan-mcdonald",
    "title": "Judy Moody Nº7",
    "author": "Megan Mcdonald",
    "category": "Diários",
    "collection": true,
    "publisher": "Salamandra",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Ao embarcar com a classe numa rápida \"volta ao mundo\", judy encontra desvios inesperados no caminho da amizade"
  },
  {
    "id": "o-diario-de-dan-2-ivan-ledesma",
    "title": "O Diário de Dan 2",
    "author": "Iván Ledesma",
    "category": "Diários",
    "collection": false,
    "publisher": "Planeta Jovem",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Se você acha que sua vida é difícil , complicada e nada dá certo , então ainda não conhece o dan."
  },
  {
    "id": "o-diario-de-dorkius-maximus-tim-collins",
    "title": "O Diário de Dorkius Maximus",
    "author": "Tim Collins",
    "category": "Diários",
    "collection": false,
    "publisher": "Planeta Jovem",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Sou dorkius maximus , e um dia serei o herói de roma. Estou escrevendo este diário para ser publicado quando eu for rico e famoso"
  },
  {
    "id": "querido-diario-otario-ano-2-aproveite-cada-dia-como-se-fosse-o-mais-otario-jim-b",
    "title": "Querido Diário Otário, Ano 2: Aproveite Cada Dia Como se Fosse o Mais Otário",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A escola não é fácil e ninguém sabe disso melhor do que a jamie kelly. Tem surpresa em todo lugar: algumas boas, outras más, todas otárias. Mas a maior de todas ainda está por vir! E não é na escola"
  },
  {
    "id": "querido-diario-otario-ano-2-escola-sera-que-ja-nao-chega-jim-benton",
    "title": "Querido Diário Otário, Ano 2: Escola. Será que Já Não Chega?",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Jamie kelly terá muito trabalho pela frente. Além de dois beagles fedidos, uma mãe que é a pior cozinheira do mundo e um cabelo que não ajuda muito, ela ainda tem que ir para a escola e aprender matemática! Será que não é muito para uma adolescente suportar?"
  },
  {
    "id": "querido-diario-otario-ano-2-ninguem-e-perfeito-mas-eu-estou-quase-la-jim-benton",
    "title": "Querido Diário Otário, Ano 2: Ninguém É Perfeito. Mas Eu Estou Quase Lá",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A vida é muito complicada e cheia de afazeres e responsabilidades para qualquer adolescente. Menos para jamie kelly - que nunca participou de nenhuma atividade extracurricular. O problema é que para o futuro perfeito que deseja, ela precisa mudar e começar a se mexer"
  },
  {
    "id": "querido-diario-otario-ano-2-os-superlegais-sao-superchatos-jim-benton",
    "title": "Querido Diário Otário, Ano 2: os Superlegais São Superchatos",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Neste novo diário, a menina mais linda do colégio mackerel vai ficar ainda mais elegante, gentil e poética e vai aprender a importância de ser bem-educada e de saber as normas de etiqueta"
  },
  {
    "id": "querido-diario-otario-e-para-isso-que-servem-os-amigos-jim-benton",
    "title": "Querido Diário Otário, É para Isso que Servem os Amigos",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Melhores amigas? Nunca! Então, agora sou amiga da angelina. Essa é uma amizade automática, que eu tenho que aceitar e fazer dela a melhor possível"
  },
  {
    "id": "querido-diario-otario-eu-igualzinha-a-voce-so-que-melhor-jim-benton",
    "title": "Querido Diário Otário, Eu! (igualzinha a Você, Só que Melhor)",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "É isso, eu faço qualquer coisa, elas copiam. Precisa de mais alguma prova? Eu não tenho certeza se quero ser a pesso mais copiada do mundo"
  },
  {
    "id": "querido-diario-otario-nao-e-minha-culpa-se-eu-sei-de-tudo-jim-benton",
    "title": "Querido Diário Otário, Não É Minha Culpa se Eu Sei de Tudo",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ser ignorante é brilhante. Hoje eu decidi ler alguns dos meus diários mais antigos..."
  },
  {
    "id": "querido-diario-otario-nunca-substime-a-sua-idiotice-jim-benton",
    "title": "Querido Diário Otário, Nunca Substime a Sua Idiotice",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Que a idiotice esteja com você. De todas as coisas que isabela ja fez, essa deve ser a mais estúpida"
  },
  {
    "id": "querido-diario-otario-o-problema-desse-lugar-e-que-e-daqui-que-eu-vim-jim-benton",
    "title": "Querido Diário Otário, o Problema Desse Lugar É que É Daqui que Eu Vim",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Não há lugar como longe daqui! Estou empolgada com a visita dos estrangeiros. Adoro pessoas que não são daqui! Eu aposto que eles estão muito empolgados por não serem daqui..."
  },
  {
    "id": "querido-diario-otario-os-adultos-podem-virar-gente-jim-benton",
    "title": "Querido Diário Otário, os Adultos Podem Virar Gente?",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O mundo lá fora é uma selva. O cheiro aqui dentro também não está muito bom"
  },
  {
    "id": "querido-diario-otario-pois-e-acho-que-tenho-superpoderes-jim-benton",
    "title": "Querido Diário Otário, Pois É! Acho que Tenho Superpoderes",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Será que é possível que os meninos, assim como as formigas, também tenham sentimentos?"
  },
  {
    "id": "querido-diario-otario-tem-um-fantasma-na-minha-calca-jim-benton",
    "title": "Querido Diário Otário, Tem um Fantasma na Minha Calça!",
    "author": "Jim Benton",
    "category": "Diários",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Cabelos. Cachorros. Calças. Caramba!"
  },
  {
    "id": "73-truques-legais-de-ciencias-anna-claybourne",
    "title": "73 Truques Legais de Ciências",
    "author": "Anna Claybourne",
    "category": "Estudos",
    "collection": false,
    "publisher": "Pé da Letra",
    "level": "LIVRE",
    "synopsis": "Este livro está repleto de ilusões de óticas incríveis , experimentos bacanas , brincadeiras hilariantes e truques de '' magia '' que vão explodir os olhos dos seus amigos ."
  },
  {
    "id": "a-crianca-e-o-seu-mundo-d-w-winnicott",
    "title": "A Criança e o Seu Mundo",
    "author": "D.w. Winnicott",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Uma longa experiencia como médico pediatra e psicanalista proporcionou ao autor uma vontade de dividir conhecimento"
  },
  {
    "id": "a-formacao-dos-estados-unidos-nancy-priscilla-s-naro",
    "title": "A Formação dos Estados Unidos",
    "author": "Nancy Priscilla S. Naro",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "A obra examina temas fundamentais como o expansionismo em direção ao oeste, as disputas sobre quem tinha direito à cidadania, as contradições da escravidão e as profundas fraturas sociais e econômicas que culminaram na guerra de secessão"
  },
  {
    "id": "a-sala-de-aula-inovadora-coautoria",
    "title": "A Sala de Aula Inovadora",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Estratégias pedagógicas para fomentar o aprendizado ativo"
  },
  {
    "id": "a-tranformacao-da-vida-rocicler-martins-rodrigues",
    "title": "A Tranformação da Vida",
    "author": "Rocicler Martins Rodrigues",
    "category": "Estudos",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Esta vida maravilhosa,que durante séculos foi explicada como criação de deus,ganhou da ciência uma explicação que coloca o divino na sabedoria da natureza"
  },
  {
    "id": "a-universidade-inovadora-mudando-o-dna-do-ensino-superior-de-fora-para-dentro-cl",
    "title": "A Universidade Inovadora Mudando o Dna do Ensino Superior de Fora para Dentro",
    "author": "Clayton M. Christensen, Henry J. Eyreing",
    "category": "Estudos",
    "collection": false,
    "publisher": "Bookman",
    "level": "LIVRE",
    "synopsis": "Crise não é uma palavra nova quando se trata de ensino superior. Há muitos anos os críticos falam de preços de matrículas e mensalidades, problemas de acesso, custos fora de controle e uma série de outras questões. Ainda que esses temas façam parte da crise atual, o cenário hoje é outro. Concorrentes diruptivos estão oferecendo ensino a distância. Muitos deles são escolas privadas que garantem a colocação posterior do aluno no mercadi de trabalho. As instituições tradicionais têm qualidade e capacidade para batê-los - mas não em todos os casos e não sem uma verdadeira inovação. Como podem as instituições de ensino superior responder de forma criativa a essa iminente dirupção?"
  },
  {
    "id": "abc-da-saude-infantojuvenil-magda-carneiro-sampaio",
    "title": "Abc da Saúde Infantojuvenil",
    "author": "Magda Carneiro-sampaio",
    "category": "Estudos",
    "collection": false,
    "publisher": "Manole",
    "level": "LIVRE",
    "synopsis": "Neste livro são abordados mais de 50 tópicos sobre a saúde da criança e do adolescente por especialistas do instituto da criança do hospital das clínicas da faculdade de medicina da usp - o mais conceituado hospital pediátrico universitário do país - e por alguns convidados de outras instituições."
  },
  {
    "id": "acima-de-tudo-o-amor-henrique-prata",
    "title": "Acima de Tudo o Amor",
    "author": "Henrique Prata",
    "category": "Estudos",
    "collection": false,
    "publisher": "Gente",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro conta a impressionante história de transformação e expansão d hospital de câncer de barretos"
  },
  {
    "id": "alice-no-pais-das-ciencias-carlo-frabetti",
    "title": "Alice no País das Ciências",
    "author": "Carlo Frabetti",
    "category": "Estudos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Numa viajem pela vida e obra de pensadores como galileu, newton e einstein,alice entende como funciona o pensamento científico e passa a ver o mundo pelas lentes da física."
  },
  {
    "id": "almanaquedo-jovem-empreendedor-samir-thomaz",
    "title": "Almanaquedo Jovem Empreendedor",
    "author": "Samir Thomaz",
    "category": "Estudos",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um estudo recente da universidade de newcastle, na austrália, demonstrou que os jovens começam a pensar na profissão que querem seguir muito antes de entrar no ensino médio. Não é por acaso. Os jovens hiperconectados da geração atual têm muito mais acesso á informação do que as gerações anteriores. Portanto, a hora de entrar em contato com esse universo é esta."
  },
  {
    "id": "america-do-sul-coautoria",
    "title": "América do Sul",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O livro retrata o segundo semestre de 2006 na américa do sul, em estatísticas"
  },
  {
    "id": "as-mil-e-uma-equacoes-ernesto-rosa-neto",
    "title": "As Mil e uma Equações",
    "author": "Ernesto Rosa Neto",
    "category": "Estudos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Assim atráves de histórias leves e interessantes,os conteúdos matemáticos são abordados de maneira lógica e clara."
  },
  {
    "id": "as-pesquisas-sobre-o-padrao-de-vida-dos-trabalhadores-da-cidade-de-sao-paulo-hor",
    "title": "As Pesquisas Sobre o Padrão de Vida dos Trabalhadores da Cidade de São Paulo",
    "author": "Horace Davis e Samuel Lowerie",
    "category": "Estudos",
    "collection": false,
    "publisher": "Sociologia e Política",
    "level": "LIVRE",
    "synopsis": "Ao completar 75 anos de sua instituição, a fundação escola de sociologia e política de são paulo traz a público dois trabalhos pioneiros da pesquisa científica em sociologia no brasil. Fruto dos professores, horace davis e samuel lowrie, essas pesquisas são marco histórico do surgimento da sociologia aplicada no país. Trabalhadores paulistanos, como também de oferecer subsídios ao estabelecimento do salário mínimo nacional."
  },
  {
    "id": "aventura-decimal-luzia-faraco-ramos",
    "title": "Aventura Decimal",
    "author": "Luzia Faraco Ramos",
    "category": "Estudos",
    "collection": true,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Números decimais"
  },
  {
    "id": "caminhos-para-a-inclusao-um-guia-para-o-aprimoramento-da-equipe-escolar-jose-pac",
    "title": "Caminhos para a Inclusão um Guia para o Aprimoramento da Equipe Escolar",
    "author": "José Pacheco",
    "category": "Estudos",
    "collection": false,
    "publisher": "Artmed",
    "level": "LIVRE",
    "synopsis": "Organizado por josé pacheco, ex-diretor da célebre escola da ponte, de portugal, este livro reúne experiências bem-sucedidas, realizadas na áustria, islândia, espanha e em portugal, direcionadas à educação inclusiva em esolas obrigatórias desses países e tem como objetivo oferecer aos professores, pais e serviços de apoio, informações sobre práticas de educação escolar inclusiva. Além de descrever o trabalho realizado, inclui sugestões úteis para o aprimoramento da equipe escolar. Dessa forma, trata-se de recurso único para um programa de formação docente continuada com vistas a habilitar as equipes que trabalham efetivamente em uma escola inclusiva."
  },
  {
    "id": "catalogo-do-acervo-de-ilustradores-cientificos-do-museu-do-instituto-biologico-i",
    "title": "Catálogo do Acervo de Ilustradores Científicos do Museu do Instituto Biológico",
    "author": "Instituto Biológico",
    "category": "Estudos",
    "collection": false,
    "publisher": "Proacsp",
    "level": "LIVRE",
    "synopsis": "Este catálogo exibe uma amostra do trabalho da seção de desenho do instituto biológico, desde os pioneiros que trabalham na comissão para o estudo e debelação da praga cafeeira, criada em 1924 e embrião do instituto fundado em 1927. Como se pode ver ao longo destas páginas, cientistas de várias áreas e ilustradores trabalharam conjuntamente e assentaram as bases da pesquisa nas mais diversasa áreas."
  },
  {
    "id": "cidades-brasileiras-do-passado-ao-presente-rosicler-martins-rodrigues",
    "title": "Cidades Brasileiras do Passado ao Presente",
    "author": "Rosicler Martins Rodrigues",
    "category": "Estudos",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "As cidades brasileiras são fruto do povoamento que teve início qaundo os portugueses aqui chegaram com suas caravelas."
  },
  {
    "id": "cidades-inteligentes-em-persperctiva-luiz-alberto-rodrigues",
    "title": "Cidades Inteligentes em Persperctiva",
    "author": "Luiz Alberto Rodrigues",
    "category": "Estudos",
    "collection": false,
    "publisher": "Coopacesso",
    "level": "LIVRE",
    "synopsis": "\"cada uma das questões apresentadas são reveladoras do jeito que tenho pensado as novas possibilidades das cidades, sob a luz de uma tecnologia que é facilitadora de processos, e que é, antes de mais nada, inclusiva, afinal de contas, somos parte de um país que precisa definitivamente se reconhecer enquanto nação\""
  },
  {
    "id": "ciencia-hoje-na-escola-fundacao-bradesco",
    "title": "Ciência Hoje na Escola",
    "author": "Fundação Bradesco",
    "category": "Estudos",
    "collection": true,
    "publisher": "Sb Pc",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Devemos incentivar nas crianças a vontade natural de perguntar. Pergunta é curiosidade, e a curiosidade está na base de qualquer investigação, dentre elas a científica. Para cada pergunta pode haver várias respostas, nenhuma delas definitiva, porque a busca do conhecimento é um processo permanente e sempre renovado e não um espaço de grandes descobertas, feitas por gênios isolados, ou de pequenas certezas irretoocáveis. Pensando nisso, a sociedade brasileira para o progresso da ciência - sbpc-, com o patrocínio da fundação bradesco, está lançando a série ciência hoje na escola."
  },
  {
    "id": "ciencia-hoje-na-escola-volume-2-fundacao-bradesco",
    "title": "Ciência Hoje na Escola Volume 2",
    "author": "Fundação Bradesco",
    "category": "Estudos",
    "collection": true,
    "publisher": "Sb Pc",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Aqui vocês irão encontrar artigos sobre bichos elaborados por pesquisadores brasileiros e reunidos pela ciênci hoje/sbpc."
  },
  {
    "id": "ciencia-para-criancas-jesus-araujo",
    "title": "Ciência para Crianças",
    "author": "Jesús Araújo",
    "category": "Estudos",
    "collection": false,
    "publisher": "Ciranda Cultural",
    "level": "LIVRE",
    "synopsis": "Com este livro, as crianças conhecerão muitas descobertas científicas e inovações tecnológicas que mudaram o rumo da história e também o contrário, os acontecimentos históricos que favoreceram descobrimentos e invenções."
  },
  {
    "id": "cinegrid-futuros-cinematicos-coautoria",
    "title": "Cinegrid: Futuros Cinemáticos",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Cinusp",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro investiga as transformações e as novas fronteiras da produção, transmissão e exibição de imagens em altíssima resolução por meio de redes de computadores de altíssima velocidade"
  },
  {
    "id": "civilizacao-ocidente-x-oriente-niall-ferguson",
    "title": "Civilização: Ocidente X Oriente",
    "author": "Niall Ferguson",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora Planeta",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma análise instigante sobre o auge, os pilares do poder ocidental e desafios contemporâneos frente à nova ascensão do oriente"
  },
  {
    "id": "compendio-de-doencas-raras-instituto-vidas-raras",
    "title": "Compêndio de Doenças Raras",
    "author": "Instituto Vidas Raras",
    "category": "Estudos",
    "collection": false,
    "publisher": "Gov",
    "level": "LIVRE",
    "synopsis": "Temos uma necessidade muito grande de difundir conhecimentosobre as doenças raras, não só para os profissionais de saúde. Esse saber precisa alcançar toda a sociedade, para que haja uma mudança do senso comum, sobre essas doenças."
  },
  {
    "id": "conecte-se-ao-que-importa-um-manual-para-a-vida-digital-saudavel-pedro-burgos",
    "title": "Conecte-se ao que Importa um Manual para a Vida Digital Saudável",
    "author": "Pedro Burgos",
    "category": "Estudos",
    "collection": false,
    "publisher": "Leya",
    "level": "LIVRE",
    "synopsis": "É incrível pensar que o youtube foi criado há menos de uma década, que steve jobs lançou o primeiro iphone apenas em 2007 eque o facebook só virou a rede social favorita dos brasileiros há três anos. Essas e outras tecnologias recentes estão mudando profundamente a meneira como nos relacionamos com outras pessoas e com o resto do mundo. E como essa revolução está acontecendo rápido demais, é bom pisar no freio e avaliar com calma os efeitos das tecnologias conectadas e o que podemos fazer para ter uma relação mais saudável com elas. Por um lado, elas abrem portas que nos permitem ter uma vida melhor, mais divertida e cheia de novas opções. Por outro, muitas vezes nos comportamos como viviados, sem tempo para curtir, em carne e osso , as coisas e as pessoas que realmente importam. Como então podemos passar menos tempo com as telas e fazer nossa vida melhorar fora delas? Para descobrir isso , minimize algumas janelas, desligue as notificações do seu celular e leia este livro."
  },
  {
    "id": "conversando-com-os-pais-d-w-winnicott",
    "title": "Conversando com os Pais",
    "author": "D. W. Winnicott",
    "category": "Estudos",
    "collection": false,
    "publisher": "Martins Fontes",
    "level": "EM - Ensino Médio",
    "synopsis": "A obra desconstrói a ideia de \"perfeição\" na parentalidade, valorizando a intuição e o cuidado genuíno na construção da segurança afetiva da criança"
  },
  {
    "id": "criar-filhos-no-seculo-xxi-vera-iaconelli",
    "title": "Criar Filhos no Século Xxi",
    "author": "Vera Iaconelli",
    "category": "Estudos",
    "collection": false,
    "publisher": "Contexto",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro disserta sobre criação de seus filhos"
  },
  {
    "id": "critica-marxista-coautoria",
    "title": "Crítica Marxista",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Fundação Editora da Unesp",
    "level": "LIVRE",
    "synopsis": "Revista semestral de difusão e discussão da produção intelectual marxista em sua diversidade, bem como de intervenção no debate e na luta teórica."
  },
  {
    "id": "das-antinomias-antecedentes-significados-e-consequencias-alfredo-portinari-maran",
    "title": "Das Antinomias Antecedentes, Significados e Consequências.",
    "author": "Alfredo Portinari Maranca",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro foi o resultado de uma transição profissional do autor, dos teóricos grupos de pesquisa de fundamentos da ciência do instituto de estudos avançados da universidades de são paulo, das lógicas não clássicas e ciência cognitiva, para a mais pragmática contenda política de elaboração de legislação."
  },
  {
    "id": "dinamicas-de-leitura-para-sala-de-aula-mary-rangel",
    "title": "Dinâmicas de Leitura para Sala de Aula",
    "author": "Mary Rangel",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora Vozes",
    "level": "LIVRE",
    "synopsis": "O livro pretende estimula a prática da leitura em sala de aula"
  },
  {
    "id": "e-o-que-eu-faco-com-essa-tal-de-boas-maneiras-ana-maria-santana-martins",
    "title": "E o que Eu Faço com Essa Tal de \"boas Maneiras\"?",
    "author": "Ana Maria Santana Martins",
    "category": "Estudos",
    "collection": false,
    "publisher": "Jcr Editora",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "\"é na infância que aprendemos algumas das lições mais importantes da vida, inclusive como usar o conhecimento e nos relacionar com o mundo que nos cerca. E o que eu faço com essa tal de \"boas maneiras\"? Mostra ás crianças a importância da educção e de manter bons relacionamentos. Através de uma linguagem fácil e divertida, a autora reúne as principais necessidades das crianças, em deliciosos e instrutivos capítulos.\""
  },
  {
    "id": "economia-circular-coautoria",
    "title": "Economia Circular",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Aborda a urgente transição linear tradicional - baseado no extrair , produzir, usar e descartar - para uma lógica circular focada no reaproveitamento contínuo de recursos, eliminação de resíduos e regeneração dos ecossistemas"
  },
  {
    "id": "economia-para-nao-economistas-u-w-rasmussem",
    "title": "Economia para Não-economistas",
    "author": "U.w.rasmussem",
    "category": "Estudos",
    "collection": false,
    "publisher": "Saraiva",
    "level": "LIVRE",
    "synopsis": "Como professor da área econômica em curso de pós-graduação (mba) em administração de empresas, educado nos estados unidos nas teorias keynesianas e que se converteu, na prátic da profissão, em um legítimo schumpeteriano, foi possível identificar as dificuldades e as facilidades que os alunos de formação acadêmica diferencial têm na compreensão dos temas econômicos. O presente trabalho tem por objetivo desmistificar as teorias econômicas e mostrar que a maioria dos aparentemente complexos componentes das ciências econômicas pode ser expressa de forma simples, podendo ser compreendida por grande número de pessoas sem necessariamente ser cientista econômico. Além disso, o conhecimento dessas teorias pode aumentar imensamente a bagagem cultural de um profissional."
  },
  {
    "id": "educacao-financeira-para-criancas-luiz-roberto-dante-e-iraci-muller",
    "title": "Educação Financeira para Crianças",
    "author": "Luiz Roberto Dante e Iraci Muller",
    "category": "Estudos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "LIVRE",
    "synopsis": "Educar financeiramente as crianças desde a alfabetização é muito importante para desenvolver sua capacidade de agir na ética e criativa. É preciso criar uma atitude positiva. É preciso criar uma atitude positiva em relação à educação financeira desde a infância, para que, na fase adulta, os indivíduos ajam com mais consciência e autonomia em relação ao uso do dinheiro, valendo-se dele como um instrumento benéfico para o desenvolvimento econômico pessoal e do país, e com o objetivo de conquistar uma boa qualidade de vida."
  },
  {
    "id": "educacao-financeira-um-guia-de-valor-flavia-aidar",
    "title": "Educação Financeira um Guia de Valor",
    "author": "Flávia Aidar",
    "category": "Estudos",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Este livro quer ajudar os leitores a se tornarem pessoas cada vez \"mais críticas, capazes de promover a riqueza pessoal e coletiva para o bem de cada um e da nossa sociedade\". Se dinheiro não traz felicidade, como diz o velho ditado, pode pode incentivar a reflexão sobre nós mesmos e como nos relacionamos com o mundo em que vivemos."
  },
  {
    "id": "educacao-convivencia-e-etica-mario-sergio-cortella",
    "title": "Educação, Convivência e Ética",
    "author": "Mario Sergio Cortella",
    "category": "Estudos",
    "collection": false,
    "publisher": "Cortez Editora",
    "level": "LIVRE",
    "synopsis": "Educar é tarefa permanente. E, evidentemente, não se dá apenas em sala de aula. Escolarização é uma parte da educação. Formar pessoas é uma atividade que demanda fazer bem aquilo que se faz e fazer o bem com aquilo que se faz. Não se trata de jogo de palavras, mas de firmeza de propósito. Fazer bem é questão de competência. Fazer o bem é empreender esforço e energia para tornar a vida boa para todos e todas. Tem a ver com a construção do futuro que queremos, para não apequenarmos nossa vida!"
  },
  {
    "id": "em-defesa-do-faz-de-conta-preserve-a-brincadeira-em-um-mundo-dominado-pela-tecno",
    "title": "Em Defesa do Faz de Conta: Preserve a Brincadeira em um Mundo Dominado Pela Tecnologia",
    "author": "Susan Linn",
    "category": "Estudos",
    "collection": false,
    "publisher": "Summus Editorial",
    "level": "EM - Ensino Médio",
    "synopsis": "Essencial para a formação de crianças saudáveis, autônomas e criativas em um mundo cada vez mais digital"
  },
  {
    "id": "empreender-samir-thomaz",
    "title": "Empreender",
    "author": "Samir Thomaz",
    "category": "Estudos",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Este almanaque é um pequeno passeio pelo mundo do trabalho e do empreendedorismo, sem a pretensão de apresentar fórmulas prontas e receitas mágicas. Mas depois é com você! Se há um recado que estelivri quer passar é este: faça você mesmo seu camimho, crie a sua história, seja protagonista da sua vida."
  },
  {
    "id": "enciclopedia-do-estudante-patricia-cardoso-dos-santos",
    "title": "Enciclopédia do Estudante",
    "author": "Patrícia Cardoso dos Santos",
    "category": "Estudos",
    "collection": false,
    "publisher": "Estadão",
    "level": "LIVRE",
    "synopsis": "Conhecer bem o país onde se vive é fundamental para qualquer cidadão. O volume geografia do brasil ajuda nessa tarefa, oferecendo uma descrição da geografia física, social e econômica do brasil e de suas diferentes regiões e unidades federativas."
  },
  {
    "id": "engenharia-economica-pierre-jacques-ehrlich-edmilson-alves-de-moraes",
    "title": "Engenharia Econômica",
    "author": "Pierre Jacques Ehrlich, Edmilson Alves de Moraes",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora Atlas",
    "level": "LIVRE",
    "synopsis": "Livro-texto para a disciplina engenharia econômica dos cursos de graduação e de pós-graduação em administração, economia e engenharia."
  },
  {
    "id": "entenda-o-tenis-jose-nilton-dalcim",
    "title": "Entenda o Tênis",
    "author": "José Nilton Dalcim",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "A palavra \"tênis\" teria surgido devido a uma cidade egípcia da época das cruzadas? A contagem dividida em frações de 15 eram valores pagos em moeda nas apostas? A história do tênis está repleta de mistérios e curiosidades. Aqui você vai conhecer todos eles, além de saber como e por que começou a era profissional, o ranking, os prêmios milionários. A completa explicação das regras do esporte se juntam a quadros ilustrativos que mostram como é feita sua majestade, a bola. Enfim, aqui tem tudo para que você realmente entenda o tênis."
  },
  {
    "id": "espaco-de-leitura-1001-historias-a-ceu-aberto-carla-caruso-valeria-ignacio",
    "title": "Espaço de Leitura 1001 Histórias a Céu Aberto",
    "author": "Carla Caruso Valéria Ignácio",
    "category": "Estudos",
    "collection": false,
    "publisher": "Gov",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "estatistica-elio-medeiros-da-silva",
    "title": "Estatística",
    "author": "Elio Medeiros da Silva",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora Atlas",
    "level": "LIVRE",
    "synopsis": "Estatística para os cursos de: economia, administração e ciências contábeis."
  },
  {
    "id": "estatistica-murray-r-spiegel",
    "title": "Estatística",
    "author": "Murray R. Spiegel",
    "category": "Estudos",
    "collection": true,
    "publisher": "Bookman",
    "level": "LIVRE",
    "synopsis": "Os livros da coleção schaum são estruturados de maneira que o aluno possa aprender a matéria e estudá-la de acordo com seu ritmo. Além de apresentar o conteúdo essencial, atendo-se a tópicos fundamentais, os textos reúnem uma grande quantidade de exercícios, o que permite testar as habilidades adquiridas. Para o professor é um materila didático completo, com teoria, problemas resolvidos e complementares."
  },
  {
    "id": "estudo-gostoso-de-matematica-o-segredo-do-metodo-kumon-toru-kumon",
    "title": "Estudo Gostoso de Matemática: o Segredo do Método Kumon",
    "author": "Toru Kumon",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "A obra traz orientações valiosas para pais e professores sobre como incentivar a autoconfiança, a disciplina e o hábito do estudo independente em crianças e jovens"
  },
  {
    "id": "eu-advogado-coautoria",
    "title": "Eu Advogado?",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O futuro do direito e o direito do futuro"
  },
  {
    "id": "evolucao-e-sexualidade-o-nos-fez-humanos-clarinda-mercadante",
    "title": "Evolução e Sexualidade o nos Fez Humanos",
    "author": "Clarinda Mercadante",
    "category": "Estudos",
    "collection": false,
    "publisher": "Moderna",
    "level": "EM - Ensino Médio",
    "synopsis": "Lendo este livro, você verá que a nossa vida é uma grande aventura."
  },
  {
    "id": "existencionalismo-jack-reynolds",
    "title": "Existencionalismo",
    "author": "Jack Reynolds",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora Vozes",
    "level": "EM - Ensino Médio",
    "synopsis": "Esse livro oferece uma introdução acessível ao existencionalismo"
  },
  {
    "id": "explorie-uma-enciclopedia-um-mundo-de-conhecimento-sean-callery",
    "title": "Explorie uma Enciclopédia, um Mundo de Conhecimento!",
    "author": "Sean Callery",
    "category": "Estudos",
    "collection": false,
    "publisher": "Alto Astral",
    "level": "LIVRE",
    "synopsis": "Uma incrível enciclopédia em um só volume que traz um mundo de conhecimento para suas mãos."
  },
  {
    "id": "feminismo-em-comum-marcia-tiburi",
    "title": "Feminismo em Comum",
    "author": "Marcia Tiburi",
    "category": "Estudos",
    "collection": false,
    "publisher": "Rosa dos Tempos",
    "level": "EM - Ensino Médio",
    "synopsis": "A obra funciona como um convite didático e democrático para se pensar o feminismo não como um movimento de oposição, mas como uma ferramenta de emancipação ética e política indispensável para toda a sociedade"
  },
  {
    "id": "filhos-manual-de-instrucoes-tania-zagury",
    "title": "Filhos: Manual de Instruções",
    "author": "Tania Zagury",
    "category": "Estudos",
    "collection": false,
    "publisher": "Record",
    "level": "EM - Ensino Médio",
    "synopsis": "Um livro para pais das gerações x e y"
  },
  {
    "id": "fora-de-serie-outliers-malcolm-gladwell",
    "title": "Fora de Série Outliers",
    "author": "Malcolm Gladwell",
    "category": "Estudos",
    "collection": false,
    "publisher": "Sextante",
    "level": "EM - Ensino Médio",
    "synopsis": "A obra demonstra que o talento e a genialidade não são suficientes por si sós; as trajetórias de alta performance são moldadas por uma combinação crucial de oportunidades históricas, herança cultural, o momento do nascimento e uma intensa carga de prática prática"
  },
  {
    "id": "fracoes-sem-misterios-luzia-faraco-ramos",
    "title": "Frações Sem Mistérios",
    "author": "Luzia Faraco Ramos",
    "category": "Estudos",
    "collection": true,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Conceitos fundamentais e operaçṍes"
  },
  {
    "id": "geometria-dos-mosaicos-luiz-marcio-imenes",
    "title": "Geometria dos Mosaicos",
    "author": "Luiz Márcio Imenes",
    "category": "Estudos",
    "collection": false,
    "publisher": "Scipione",
    "level": "LIVRE",
    "synopsis": "Mostrando que a geometria pode ser muito mais dinâmica e visual do que aparenta nas salas de aula tradicionais"
  },
  {
    "id": "geracoes-em-ebulicao-coautoria",
    "title": "Gerações em Ebulição",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Papirus",
    "level": "EM - Ensino Médio",
    "synopsis": "Um bate papo entre o filosofo mario sergio cortella e pedro bial"
  },
  {
    "id": "gestao-de-qualidade-edson-pacheco-paladini",
    "title": "Gestão de Qualidade",
    "author": "Edson Pacheco Paladini",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora Atlas",
    "level": "LIVRE",
    "synopsis": "Este livro objetiva fornecer contribuições para superar os desafios que a gestão da qualidade enfrenta,apresenta ou viabiliza."
  },
  {
    "id": "grecia-em-roma-pedro-paulo-funari",
    "title": "Gŕecia em Roma",
    "author": "Pedro Paulo Funari",
    "category": "Estudos",
    "collection": false,
    "publisher": "Contexto",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "A obra analisa como essas duas grandes civilizações moldaram valores ocidentais e convida o leitor a compreender de forma viva e humana as estruturas sociais da antiguidade clássica"
  },
  {
    "id": "historia-da-cidade-de-sao-paulo-affonso-de-e-taunay",
    "title": "História da Cidade de São Paulo",
    "author": "Affonso de E. Taunay",
    "category": "Estudos",
    "collection": false,
    "publisher": "Gov",
    "level": "LIVRE",
    "synopsis": "A história da cidade de são paulo é um formidável compêndio e registro de como a vila fundada pelo padre jesuita josé de anchieta, por ocasião da missa celebrada no pátiodo colégio em 25 de janeiro de 1554, transformou-se na mais dinâmica cidade do brasil nas primeiras décadas do século xx, e naquele que hoje é a maior metrópole brasileira."
  },
  {
    "id": "historia-historias-o-jogo-dos-jogos-paulo-miceli",
    "title": "História, Histórias: o Jogo dos Jogos",
    "author": "Paulo Miceli",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora da Unicamp",
    "level": "EM - Ensino Médio",
    "synopsis": "A obra estimula leitores e educadores a questionar os dogmas tradicionais e a compreender a complexidade do ofício do historiador frente às múltiplas versões da memória humana"
  },
  {
    "id": "ingleses-no-brasil-gilberto-freyre",
    "title": "Ingleses no Brasil",
    "author": "Gilberto Freyre",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro analisa o impacto cultural, econômico e comportamental da forte presença britânica no brasil do século xix, período iniciado com a chegada da família real e a abertura dos portos às nações amigas"
  },
  {
    "id": "inovalacao-na-sala-de-aula-coautoria",
    "title": "Inovalação na Sala de Aula",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Bookman",
    "level": "EM - Ensino Médio",
    "synopsis": "Abordam aqui uma das mais importantes questão da nossa era: a educação e as possibilidades de avanço e melhoria nesse campo por meio de soluções disruptivas."
  },
  {
    "id": "instituto-biologico-90-anos-marcia-m-reboucas",
    "title": "Instituto Biológico 90 Anos",
    "author": "Márcia M. Rebouças",
    "category": "Estudos",
    "collection": false,
    "publisher": "Gov",
    "level": "LIVRE",
    "synopsis": "90 anos de histórias do instituto biológico"
  },
  {
    "id": "interfaces-digitais-na-educacao-lucin-acoes-consentidas-brasilina-passarelli",
    "title": "Interfaces Digitais na Educação: @lucin[ações] Consentidas",
    "author": "Brasilina Passarelli",
    "category": "Estudos",
    "collection": false,
    "publisher": "Escola do Futuro",
    "level": "LIVRE",
    "synopsis": "Leitores familiarizados com o assunto encontrarão oportunidade para concordar ou discordar quanto ás afirmações a autora, como sempre se faz no mundo das idéias; e novos leitores encontrarão ,uitos momentos para observar como atividades didáticas bem planejadas."
  },
  {
    "id": "introducao-ao-controle-estatstico-da-qualidade-douglas-c-montgomery",
    "title": "Introdução ao Controle Estatśtico da Qualidade",
    "author": "Douglas C. Montgomery",
    "category": "Estudos",
    "collection": false,
    "publisher": "Ltc",
    "level": "LIVRE",
    "synopsis": "Este livro trata do uso de métodos estatísticos modernos para o controle e melhpria da qualidade, cobrindo o assunto de maneira abrangente, desde os princípios e básicos até os conceitos mais recentes do estado da arte, e aplicações. O objetivo é dar ao leitor uma compreensão sólida dos princípios e a base para aplicálos, tanto a situações industriais quanto não-industriais."
  },
  {
    "id": "logica-para-principiantes-pedro-abelardo",
    "title": "Lógica para Principiantes",
    "author": "Pedro Abelardo",
    "category": "Estudos",
    "collection": false,
    "publisher": "Fundação Editora da Unesp",
    "level": "LIVRE",
    "synopsis": "A lógica para principiantes de pedro abelardo não é uma simples \" introdução à lógica\". É o primeiro grande tratado madieval de lógica que chegou até os nossos tempos. O início do texto, aqui traduzido, trata da \"questão dos universais\". Os \"universais\", como o gênero e a espécie, são algo real ou são conceitos com os quais pensamos a realidade? Os universais são palavras ou são coisas? Após fazer a crítica das posições que admitem que existem \"coisas universais\" e mostrar que desse modo somos levados a absurdos e contradições, abelardo responde que os universais são \"palavras\"."
  },
  {
    "id": "macroecononomia-olivier-blanchard",
    "title": "Macroecononomia",
    "author": "Olivier Blanchard",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O que é macroeconomia? Uma difinição formal não é a melhor resposta para essa pergunta, mas sim levá-lo a um giro pelo mundo de economia e descrever sua evolução e as questões que causam insônia aos macroeconomistas e aos formuladores de política econômica."
  },
  {
    "id": "manual-de-sobrevivencia-do-enem-explicae",
    "title": "Manual de Sobrevivência do Enem",
    "author": "Explicaê",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Material de estudos para o enem, redação linguagens e humanas"
  },
  {
    "id": "mapas-a-realidade-no-papel-rosaly-m-braga-chianca",
    "title": "Mapas a Realidade no Papel",
    "author": "Rosaly M. Braga Chianca",
    "category": "Estudos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "LIVRE",
    "synopsis": "Satisfazer a curiosidade natural das crianças é o principal objetivo desta obra. Ao enriquecer o conteúdo programático de estudos sociais, a coleção estimula o aluno, levando-o a procurar saber sempre mais, a dar um passo á frente em busca de novos conhecimentos."
  },
  {
    "id": "matematica-coautoria",
    "title": "Matemática",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Icone Editora",
    "level": "LIVRE",
    "synopsis": "Complementos e aplicações nas áreas de ciências contábeis, administração e economia"
  },
  {
    "id": "meditacoes-marco-aurelio",
    "title": "Meditações",
    "author": "Marco Aurélio",
    "category": "Estudos",
    "collection": false,
    "publisher": "Pé da Letra",
    "level": "EM - Ensino Médio",
    "synopsis": "Apresenta pensamentos de um grande líder e apreciador dos conceitos da filosofia estoica"
  },
  {
    "id": "metodologia-da-pesquisa-elisabete-matallo-marchesini-de-padua",
    "title": "Metodologia da Pesquisa",
    "author": "Elisabete Matallo Marchesini de Pádua",
    "category": "Estudos",
    "collection": false,
    "publisher": "Papirus",
    "level": "LIVRE",
    "synopsis": "O livro oferece diretrizes básicas para o desenvolvimento de trabalho acadêmicos de pesquisa na graduação e na especialização, considerando a vasta prática pedagógica da autora."
  },
  {
    "id": "meu-1-larousse-da-historia-coautoria",
    "title": "Meu 1° Larousse da História",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Larousse",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O livro mostra de forma divertida e ilustrada os principais acontecimentos da humanidade"
  },
  {
    "id": "meu-1o-larousse-enciclopedia-coautoria",
    "title": "Meu 1º Larousse Enciclopédia",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Larousse",
    "level": "LIVRE",
    "synopsis": "É um livro que ajuda os leitores a descobrir e explorar o mundo."
  },
  {
    "id": "montanhas-philip-sauvain",
    "title": "Montanhas",
    "author": "Philip Sauvain",
    "category": "Estudos",
    "collection": true,
    "publisher": "Scipione",
    "level": "LIVRE",
    "synopsis": "Ao ler os livros desta série, você verá como e por que certas partes do relevo terrestre tomaram a forma que têm hoje, como se desenvolveram ou se modificaram ao longo do tempo e de que modo as pessoas aproveitaram-nas de acordo com as diferentes culturas e possibilidades econômicas."
  },
  {
    "id": "nacao-empreendedora-o-milagre-economico-de-israel-e-o-que-ele-nos-ensina-dan-sen",
    "title": "Nação Empreendedora o Milagre Econômico de Israel e o que Ele nos Ensina",
    "author": "Dan Senor e Saul Singer",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora Évora",
    "level": "LIVRE",
    "synopsis": "Israel é um dos países mais inovadores e empreendedores do mundo. Está na vanguarda em vários segmentos de alta tecnologia: biotcnologia, segurança, tecnologia da informação (ti), equipamentos médicos, tecnologia limpas e sustentáveis (cleantech) etc. Como é possível - um país de pouco mais de 7,6 milhões de habitantes (dados de 2010), com apenas seis décadas de existência, situado em um território sem recursos naturais e enfrentando constantes conflitos militares desde a sua fundação - gerar mais empresas iniciantes (star-ups) do que nações maiores, pacíficas e estáveis como o japão, índia, china, corréia do sul e cingapura somados? Como pode israel atrair, por habitante, duas e treŝ vezes mais investidores de capital de risco (venture capital) do que os eua e a europa, respectivamente? Baseando-se nas histórias de pessoas que têm um papel central no desenvolvimento de israel, a exemplo de seus inventores e investidores, dan senor e saul singer nos mostram como a cultura do país é movida pela adversidade. Eles nos apresentam o jeito de pensar dos iraelenses, assim como sua atitude perante a vida. Eles nos revelam o modo como empresas e universidades são administradas e a forma como as políticas públicas são implementadas pelo governo, forjando uma sociedade extremamente inovadora e empreendedora."
  },
  {
    "id": "nhac-novos-habitos-de-alimentacao-para-criancas-connie-evers",
    "title": "Nhac! Novos Hábitos de Alimentação para Crianças",
    "author": "Connie Evers",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Aprender sobre nutrição vai ser muito mais legal com este livro! Desenvolvido especialmente para crianças, para ajuda-las a a fazer as escolhas certas na alimentação"
  },
  {
    "id": "o-avanco-tecnologico-na-medicina-da-auscultacao-a-ressonancia-magnetica-prof-ari",
    "title": "O Avanço Tecnológico na Medicina da Auscultação à Ressonância Magnética",
    "author": "Prof. Ariosto Holanda",
    "category": "Estudos",
    "collection": false,
    "publisher": "Armazém da Cultura",
    "level": "LIVRE",
    "synopsis": "(...) com as transformações cada vez mais rápidas, de maior complexidade e desafios, como o envelhecimento da população e uma maior incidência de doenças crônicas, é evidente (e necessário!) que a área da saúde e seu mercado continuem sendo estimulados pelas novas tecnologias, como: a telemedicina, a virtualização do cuidado, a inteligênca artificial, a impressão 3d, a cirurgia computadorizada, dentre outras. Willian osler, médico canadense, professoar na facudade de medicina do hospital johns hopkins, considerado por muitos um ícone da medicina moderna, disse: \"o bom médico trata as doenças, mas o grande médico trata o paciente\". Médico oswaldo gutierrez"
  },
  {
    "id": "o-codigo-polinonio-luzia-faraco-ramos",
    "title": "O Código Polinônio",
    "author": "Luzia Faraco Ramos",
    "category": "Estudos",
    "collection": true,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Polinômios"
  },
  {
    "id": "o-efeito-covid-19-e-a-transformacao-da-comunidade-escolar-coautoria",
    "title": "O Efeito Covid-19 e a Transformação da Comunidade Escolar",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Ftd",
    "level": "LIVRE",
    "synopsis": "Este é um livro para todos. Acreditamos na transformação da sociedade por meio da educação. Desta forma, tudo o que impacta a comunidade escolar, ecoa na sociedade. Afetados pelo novo coronavírus e diante de uma avalanche de informações ( e desinformações), opiniões e previsões, apresentamos aqui textos que se propõem a organizar nossas ações para este novo cenário. So a lente de especialistas em tecnologia, finanças, saúde, habilidades socioemocionais e visão estratégica, cada capítulo traz dicas práticas que nos ajudam a olhar para o futuro com mais segurança."
  },
  {
    "id": "o-hospital-pelo-olhar-da-crianca-aide-mitie-kudo-e-priscila-bagio-maria",
    "title": "O Hospital Pelo Olhar da Criança",
    "author": "Aide Mitie Kudo e Priscila Bagio Maria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Yendis",
    "level": "LIVRE",
    "synopsis": "Uma obra singular,que oferece ao profissional da saúde subsídios importantes para que ele compreenda melhor o universo dessas crianças e adolescente."
  },
  {
    "id": "o-mundo-contemporaneo-roberto-catelli",
    "title": "O Mundo Contemporâneo",
    "author": "Roberto Catelli",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro foi produzido com o objetivo de levar a cada um de seus leitores, um pouco da história contemporânea, mais precisamente, os fatos mais marcantes ocorridos nas últimas sete décadas."
  },
  {
    "id": "o-oraculo-o-segredo-da-antiga-delfos-willian-j-broad",
    "title": "O Oráculo o Segredo da Antiga Delfos",
    "author": "Willian J. Broad",
    "category": "Estudos",
    "collection": false,
    "publisher": "Nova Fronteira",
    "level": "LIVRE",
    "synopsis": "\"este livro diz respeito a uma voz do passado remoto que voltou para questionar as certezas metafísicas da nossa era, para nos incitar a investigar o que existe por trás daquilo que a ciência defende e reexaminar a nossa postura quando á espiritualidade, ao misticismo e aos poderes ocultos da mente. O oráculo de delfos já levou a esse tipo de reavaliação antes, três milênios antrás e, por mais improvável que pareça, está fazendo o mesmo agora.\""
  },
  {
    "id": "o-pasquim-abtologia-1969-1971-antologia",
    "title": "O Pasquim Abtologia 1969-1971",
    "author": "Antologia",
    "category": "Estudos",
    "collection": true,
    "publisher": "Editora Desiderata",
    "level": "LIVRE",
    "synopsis": "O pasquim juntamente com a manha do aporelly, é a bíblia do humor escrito, falado, televisado e desenhado brasileiro. E não só do humor. O pasquim era uma mistura de village voice com rolling stones (me refiro ao tablóide e não á banda do ex-namorado da luciana gimenez), mas com a forma e o conteúdo absolutamente carioca e tropical."
  },
  {
    "id": "o-pasquim-antologia-1972-1973-antologia",
    "title": "O Pasquim Antologia 1972-1973",
    "author": "Antologia",
    "category": "Estudos",
    "collection": true,
    "publisher": "Editora Desiderata",
    "level": "LIVRE",
    "synopsis": "O volume ii desta saga jornalística vai de 1972 a 1973, em pleno governo do general emílio garrastazu médici, quando a economia crescia em ritmo chinês de hoje, e a liberdade era abafada à bala, tortura e censura. Foi num país sufocado pela repressão sem limites do ai-5 que surgiu o pasquim, em junho de 1969. O hebdomadário, para usar uma palavra tão ao gosto da patota de coleguinhas, foi como a mosca da canção de raul seixas e paulo coelho, que pousou na sopa da ditadura, pertubou seu sono e ficou a zumbizar."
  },
  {
    "id": "o-pasquim-antologia-1973-1974-antologia",
    "title": "O Pasquim Antologia 1973-1974",
    "author": "Antologia",
    "category": "Estudos",
    "collection": true,
    "publisher": "Editora Desiderata",
    "level": "LIVRE",
    "synopsis": "O que mudou nesta antologia em relação ás duas primeiras não foi o conteúdo do pasquim, mas as circunstâncias do país: a dita continuava dura mas caminhava, lenta e gradualmente, para \"abertura\" que viria em 1974. Não que isso fosse significar um pasquim mais solto e irreverente. Irreverente ele foi de nascença e por toda a vida, e solto só não foi quando a dita prendeu a turma - e mesmo assim houve um mutirão de solidariedade e ele não deixou de sair. Mas entrem, entrem, matem a saudade, descubram como a turma era boa mesmo, e divirtam-se."
  },
  {
    "id": "o-que-e-a-inteligencia-alem-do-efeito-flynnn-james-r-flynn",
    "title": "O que É a Inteligência ? Além do Efeito Flynnn",
    "author": "James R. Flynn",
    "category": "Estudos",
    "collection": false,
    "publisher": "Artmed",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro sepulta as dúvidas sobrea inteligência que separavam nossas mentes das de nossos ancestrais. É uma obra fascinante, cuja, duradoura importância implica um maior compreensão da evolução da inteligência humana."
  },
  {
    "id": "o-tato-o-olfato-e-o-paladar-amabis-e-martho",
    "title": "O Tato o Olfato e o Paladar",
    "author": "Amabis e Martho",
    "category": "Estudos",
    "collection": false,
    "publisher": "Scipione",
    "level": "LIVRE",
    "synopsis": "O nosso corpo e à importância de se cuidar dele de maneira adequada. Excelentes desenhos e fotografias muito bem escolhidas complementam admiravelmente o texto."
  },
  {
    "id": "o-trabalho-e-o-dinheiro-coautoria",
    "title": "O Trabalho e o Dinheiro",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Scipione",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O livro tem por objetivo levar o leitor mais jovem a rfletir sobre questões importantes que, muitas vezes, afloram sua mente"
  },
  {
    "id": "os-deuses-gregos-karl-kerenyi",
    "title": "Os Deuses Gregos",
    "author": "Karl Kerényi",
    "category": "Estudos",
    "collection": false,
    "publisher": "Cultrix",
    "level": "LIVRE",
    "synopsis": "Imagine o leitor que está fazendo uma visita a uma ilha e que encontre um grego culto que lhe revele, de viva voz, a mitologia de seus antepassados. Pois é assim que o professor k. Kerényi, com desenvoltura, espontaneidade e sólida erudição, nos leva a conhecer a genealogia dos deuses, os titãs, afrodite, zeus, apolo, hermes, pã, os mistérios de dioniso etc., num trabalho gigantesco de interpretação e reconstrução de toda a mitologia grega."
  },
  {
    "id": "os-olimpicos-deuses-e-jogos-gregos-lauret-godoy",
    "title": "Os Olímpicos Deuses e Jogos Gregos",
    "author": "Lauret Godoy",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora Meca",
    "level": "LIVRE",
    "synopsis": "Os olímpicos - deuses e jogos gregos é um texto ímpar, para colocar no pódio de nossa literatura esportiva, trazendo aos leitores não apenas uma visão privilegiada dos jogos olímpicos da antiguidade, mas de toda a civilização helênica, dissecada pela lente de uma alma legitimamente olímpica."
  },
  {
    "id": "pedagogia-da-circularidade-ensinagens-de-terreiro-tassio-ferreira",
    "title": "Pedagogia da Circularidade Ensinagens de Terreiro",
    "author": "Tássio Ferreira",
    "category": "Estudos",
    "collection": false,
    "publisher": "Telha",
    "level": "LIVRE",
    "synopsis": "Distanciando-se dos moldes tradicionais e eurocêntricos de ensino, o livro investiga como os conceitos de circularidade, corporeidade, oralidade e a coletividade dessas comunidades"
  },
  {
    "id": "pedagogia-psicodramatica-coautoria",
    "title": "Pedagogia Psicodramática",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora Agora",
    "level": "LIVRE",
    "synopsis": "Uma proposta de metodologia ativa de maria alicia romaña, que desenvolveu a pedagogia psicodrámatica."
  },
  {
    "id": "pesquisa-em-educacao-menga-ludke-marli-e-d-a-andre",
    "title": "Pesquisa em Educação",
    "author": "Menga Ludke Marli E.d.a. André",
    "category": "Estudos",
    "collection": false,
    "publisher": "E.p.u",
    "level": "LIVRE",
    "synopsis": "Buscando oferecer subsídios e sugestões para o trabalho de pesquisa de futuros e atuais professores, bem como para outros profissionais da educação básica, o livro pesquisa em educação: abordagem qualitativas se destina a incentivar e orientar esse trabalho, ao apresentar modalidades de pesquisa de abordagens qualitativas frequentemente empregadas na área, suas etapas de desenvolvimento e recursos metodológicos."
  },
  {
    "id": "planejando-o-trabalho-em-grupo-coautoria",
    "title": "Planejando o Trabalho em Grupo",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Estratégias para sala de aula heterogêneas"
  },
  {
    "id": "prevencao-de-acidentes-do-lar-gerson-jose-alves",
    "title": "Prevenção de Acidentes do Lar",
    "author": "Gerson José Alves",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Quando se trata de prevenção de acidentes do lar, temos muitas razões muito fortes para nos proteger"
  },
  {
    "id": "recreio-curiosidades-fernanda-santos",
    "title": "Recreio Curiosidades",
    "author": "Fernanda Santos",
    "category": "Estudos",
    "collection": false,
    "publisher": "Abril S.a",
    "level": "LIVRE",
    "synopsis": "As perguntas mais malucas recebidas dos nossos leitores estão reunidas neste livro espcial curiosidades. São 208 respostas para aquelas questões que já passaram pela sua cabeça, mas nem sempre foram respondidas. Você vai se divertir e ficar bem informado ao mesmo tempo!"
  },
  {
    "id": "redacoes-artisticas-a-arte-de-escrever-heribaldo-de-assis",
    "title": "Redações Artísticas (a Arte de Escrever)",
    "author": "Heribaldo de Assis",
    "category": "Estudos",
    "collection": false,
    "publisher": "Via Litterarum",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": ""
  },
  {
    "id": "refugio-migracoes-e-cidadania-coautoria",
    "title": "Refúgio, Migrações e Cidadania",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Caderno de debates do ano 2022 sobre refugiados"
  },
  {
    "id": "retratos-de-oportunidades-o-terceiro-de-setor-e-o-desenvolvimento-social-coautor",
    "title": "Retratos de Oportunidades - o Terceiro de Setor e o Desenvolvimento Social",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O livro comemora a trajetória do instituto da oportunidade social destacando a relevância e o impacto no brasil"
  },
  {
    "id": "shell-script-profissional-aurelio-marinho-jargas",
    "title": "Shell Script Profissional",
    "author": "Aurélio Marinho Jargas",
    "category": "Estudos",
    "collection": false,
    "publisher": "Novatec",
    "level": "LIVRE",
    "synopsis": "O livro shell script profissional ensina a fazer programas de qualidade em shell, com ênfase em código legível, portabiliade e manutenção futura. Melhore seus scripts, adicionando opções de linha de comando, arquivo de configuração, banco de dados e interface amigável ao usuário. Use a internet para rodar seu cgi. Domine as ferramentas do sistema, as expressões regulares e os caracteres de controle."
  },
  {
    "id": "sociologia-aplicada-estudos-sobre-cidade-desigualdade-e-pobreza-angela-del-vecch",
    "title": "Sociologia Aplicada Estudos Sobre Cidade Desigualdade e Pobreza",
    "author": "Angela Del Vecchio e Isabela Oliveira Kalil (orgs.)",
    "category": "Estudos",
    "collection": false,
    "publisher": "Sociologia e Política",
    "level": "LIVRE",
    "synopsis": "O presente volume tem como objetivo fornecer subsídios teóricos para a análise do lugar da sociologia aplicada nas cinências sociais atualmente. A principal razão desta retomada de textos históricos se deve ao fato de que a reflexão sobre a aplicação em ciências sociais se apresenta como uma necesidade da própria sociedade. Em termos práticos: trata-se da necessidade de ajustar as matrizes curricuçares, os planos de ensino e todo aparato acadêmico e padagógico dos cursos de ciências sociais ao compasso com as reais ocupações dos cientista social hoje, bemm como a outras que ele eventualmente possa vir a exercer no futuro."
  },
  {
    "id": "sol-e-energia-no-terceiro-milenio-ronaldo-rogerio-de-freitas-mourao",
    "title": "Sol e Energia no Terceiro Milênio",
    "author": "Ronaldo Rogério de Freitas Mourão",
    "category": "Estudos",
    "collection": false,
    "publisher": "Scipione",
    "level": "LIVRE",
    "synopsis": "Em 1973, a crise do petróleo levou os povos a repensarem seus planos energéticos. O mundo conscientizou-se de que os combustíveis fósseis não são renováveis; que seus preços vão aumentar em proporções imcompatíveis com a economia nacional - isso é muito importante - compreendeu que existem outras fontes naturais, não poluentes baratas e quase eternas. Entre tais fontes de energia, a radiação solar é a mais importante. O objetivo principal deste pequeno livro é explicar em palavras simples as propriesdades da energia solar e como podemos aproveitá-la, em benefício da humanidade, no limiar do terceiro milênio."
  },
  {
    "id": "ted-talks-chris-anderson",
    "title": "Ted Talks",
    "author": "Chris Anderson",
    "category": "Estudos",
    "collection": false,
    "publisher": "Intrínseca",
    "level": "LIVRE",
    "synopsis": "O guia oficial do ted para falar em público"
  },
  {
    "id": "telejornalismo-educativo-e-producao-em-rede-nucleo-de-jornalismo-canal-futura-20",
    "title": "Telejornalismo Educativo e Produção em Rede",
    "author": "Núcleo de Jornalismo. Canal Futura, 2014",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Introdução ás práticas de produção do núcleo de jornalismo do canal futura"
  },
  {
    "id": "ter-dinheiro-nao-tem-segredo-reinaldo-domingos",
    "title": "Ter Dinheiro Não Tem Segredo",
    "author": "Reinaldo Domingos",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Voltado ao público jovem, este livro traz informações preciosas aqueles que estão dando os primeiro passos no âmbito da educação financeira"
  },
  {
    "id": "tubaroes-beverly-mcmillan-john-a-musick",
    "title": "Tubarões",
    "author": "Beverly Mcmillan, John A. Musick",
    "category": "Estudos",
    "collection": false,
    "publisher": "Ciranda Cultural",
    "level": "LIVRE",
    "synopsis": "Mergulhe com os tubarões, nade com os predadores mais incríveis dos oceanos recriados com detalhes tridimensionais. Os belos tubarões-carpete, os terríveis tubarões-brancos, os pacíficos tubarões-baleia; esses extraordinários caçadores dominaram os mares por milhares de anos."
  },
  {
    "id": "uma-proporcao-ecologica-luzia-faraco-ramos",
    "title": "Uma Proporção Ecológica",
    "author": "Luzia Faraco Ramos",
    "category": "Estudos",
    "collection": true,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Razão , proporção , regra de três e porcentagem"
  },
  {
    "id": "uma-questao-de-carater-paul-tough",
    "title": "Uma Questão de Caráter",
    "author": "Paul Tough",
    "category": "Estudos",
    "collection": false,
    "publisher": "Intrínseca",
    "level": "LIVRE",
    "synopsis": "Por que a curiosidade e a determinação podem ser mais importantes que a inteligência para uma educação? Esse livro nos responde esse questionamento"
  },
  {
    "id": "visoes-geopoliticas-do-mundo-atual-nelson-bacic-olic",
    "title": "Visões Geopolíticas do Mundo Atual",
    "author": "Nelson Bacic Olic",
    "category": "Estudos",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Visões geopolíticas do mundo atual foi idealizado para substituir o livro retrados do mundo contemporâneo, do mesmo autor. Como o mundo e o brasil passam por importantes transformações ano após ano, houve a necessidade de se produzir uma nova obra."
  },
  {
    "id": "xii-congresso-brasileiro-de-zoologia-coautoria",
    "title": "Xii Congresso Brasileiro de Zoologia",
    "author": "Coautoria",
    "category": "Estudos",
    "collection": false,
    "publisher": "Editora da Unicamp",
    "level": "LIVRE",
    "synopsis": "Resumo do congresso de zoologia"
  },
  {
    "id": "a-invencao-de-hugo-cabret-brian-selznick",
    "title": "A Invenção de Hugo Cabret",
    "author": "Brian Selznick",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Edições Sm\"",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um desenho enigmático, um caderno valioso, uma chave roubada e um homem mecãnico estão no centro desta intrincada e imprevisivel história."
  },
  {
    "id": "a-menina-que-navegou-ao-reino-encantado-catherynne-m-valente",
    "title": "A Menina que Navegou ao Reino Encantado",
    "author": "Catherynne M. Valente",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Leya",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O reino encantado está em tumulto , e vai levar uma menina de doze anos , um dragão que adora livros e um menino estranho quase humano chamado sábado a derrotar uma marquesa malvada e restaurar a ordem."
  },
  {
    "id": "a-queda-dos-reinos-morgan-rhodes",
    "title": "A Queda dos Reinos",
    "author": "Morgan Rhodes",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Seguinte",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Cleo , jonas , lucia e magnus vão ter de lutar , cada um a sua maneira , em um mundo revirado pela guerra , onde imperam traiçṍes inesperadas, assassinatos brutais , alianças secretas e paixṍes arrebatadoras."
  },
  {
    "id": "alice-no-pais-das-maravilhas-lewis-carrol",
    "title": "Alice no País das Maravilhas",
    "author": "Lewis Carrol",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "L&pm",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ao cair em um buraco que dá acesso ao país das maravilhas , alice viverá uma realidade complexa e enigmática . Mas que isso , alice vai trilhar um caminho fantátisco , num mundo que mais parece um sonho de fábula."
  },
  {
    "id": "animais-fantasticos-e-onde-habitam-newt-scamander",
    "title": "Animais Fantásticos e Onde Habitam",
    "author": "Newt Scamander",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Existe um exemplar em cada casa de trouxa , mas por um tempo limitado , o que será que os trouxas irão fazer ?"
  },
  {
    "id": "as-cronicas-de-narnia-c-s-lewis",
    "title": "As Crônicas de Nárnia",
    "author": "C. .s. Lewis",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Umfmartins Fontes",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Como tolkien, c. S. Lewis redefiniu a natureza da fantasia , acrescentando riqueza , beleza e dimensão ... Nos nossos tempos , todo reino da fantasia deve ser avaliado em comparação com nárnia."
  },
  {
    "id": "como-falar-dragones-cressilda-cowell",
    "title": "Como Falar Dragonês",
    "author": "Cressilda Cowell",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Banguela foi capturado , um nanodragão logo , logo vai virar refeição e dragões-tubarṍes estão á solta."
  },
  {
    "id": "como-partir-um-coracao-de-um-dragao-cressilda-cowell",
    "title": "Como Partir um Coração de um Dragão",
    "author": "Cressilda Cowell",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Será que soluço vai conseguir completar a tarefa impossível, derrotar os berserks, salvar perna- de - peixe de virar comida de monstro ?"
  },
  {
    "id": "como-pegar-a-joia-do-dragao-cressilda-cowell",
    "title": "Como Pegar a Joia do Dragão",
    "author": "Cressilda Cowell",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Soluço esta sozinho , exilado, sendo caçado tanto por humanos quanto pelos dragṍes, sua única esperança é encontrar a joia do dragão , a última relíquia do rei e única esperança dos vikings."
  },
  {
    "id": "como-roubar-a-espada-de-um-dragao-cressilda-cowell",
    "title": "Como Roubar a Espada de um Dragão",
    "author": "Cressilda Cowell",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Tempos difícies se aproximam do arquipélago, quase como se de hora para a outra o mundo tivesse sido almodiçoado!"
  },
  {
    "id": "como-ser-um-pirata-cressilda-cowell",
    "title": "Como Ser um Pirata",
    "author": "Cressilda Cowell",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Nesta aventura arrepiante , soluço cobta detalhes do início de sua história - quando ele ainda tinha muito oque aprender sobre como usar uma espada , sobreviver a naufrágios , escapar de dragṍes homicidas e desvendar os mistérios de um tesouro pirata muito bem escondido."
  },
  {
    "id": "como-trair-o-heroi-de-um-dragao-cressilda-cowell",
    "title": "Como Trair o Herói de um Dragão",
    "author": "Cressilda Cowell",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Soluço precisa ser coroado rei do oeste mais selvagem. Será que ele vai se livrar dos dragṍes- espiṍes vampiros de bruxa e conseguir as coisas perdidas antes do juízo final de yule?"
  },
  {
    "id": "em-chamas-jogos-vorazes-suzanne-collins",
    "title": "Em Chamas - Jogos Vorazes",
    "author": "Suzanne Collins",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Está é uma história que irá absorver completamente os leitores que nela se aventurarem. Atrama de suspense deixará os leitores ávidos pelo terceiro volume."
  },
  {
    "id": "guia-o-heroi-para-vencer-dragoes-mortais-cressilda-cowell",
    "title": "Guia o Herói para Vencer Dragṍes Mortais",
    "author": "Cressilda Cowell",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Soluço está perdido no labririnto do bibliotecário cabelo assustado e, á espreita , estão os perigosos dragṍes-brocas, além de insensato , o assasino. Pelo visto , nosso herói não vai ter um aniversário tão tranquilo assim.."
  },
  {
    "id": "harry-potter-e-a-camara-secreta-j-k-rowling",
    "title": "Harry Potter e a Câmara Secreta",
    "author": "J. K. Rowling",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Rocco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Está repleto de aventuras fantasticas e recheados de surpresas, que irão proporcionar ao leitor o mágico prazer da leitura."
  },
  {
    "id": "harry-potter-e-a-ordem-da-fenix-j-k-rowling",
    "title": "Harry Potter e a Ordem da Fênix",
    "author": "J. K. Rowling",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Rocco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O jovem bruxo está preste a descobrir nesse novo ano em hogwarts vai provocar uma grande reviravolta em seu mundo."
  },
  {
    "id": "harry-potter-e-as-reliquias-da-morte-j-k-rowling",
    "title": "Harry Potter e as Reliquias da Morte",
    "author": "J. K. Rowling",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Rocco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Harry está aguardando na rua dos alfeneiros. A odem da fênix chegará em breve para transferi-lo em segurança. Do endereço de sua familía trrouxa , sem que voldemort e seus seguidores saibam."
  },
  {
    "id": "harry-potter-e-o-calice-de-fogo-j-k-rowling",
    "title": "Harry Potter e o Cálice de Fogo",
    "author": "J. K. Rowling",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Rocco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "É seu quarto ano na escola de magia e bruxaria e há muita coisa para aprender. Mais muitos outros acontecimentos surpreendentes já estão e marcha...."
  },
  {
    "id": "harry-potter-e-o-enigma-do-principe-j-k-rowling",
    "title": "Harry Potter e o Enigma do Príncipe",
    "author": "J. K. Rowling",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Rocco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O sexto ano de harry em hogwarts começa de maneira peculiar , e os mundos dos trouxas e dos bruxos , não há dúvida , parecem se entrelaçar..."
  },
  {
    "id": "kelly-martoer-e-o-misterio-do-rei-natalia-azevedo-de-carvalho",
    "title": "Kelly Martoer e o Mistério do Rei",
    "author": "Natália Azevedo de Carvalho",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Scortecci Editora",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma narrativa envolvente que celebra a amizade, a determinação e a imaginação"
  },
  {
    "id": "o-guia-do-mochileiro-das-galaxias-douglas-adams",
    "title": "O Guia do Mochileiro das Galáxias",
    "author": "Douglas Adams",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Arqueiro",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "A dupla escapa da destruição da terra pegando carona numa nave alienígena , graças aos conhecimentos de prefect , um e.t. Que vivia disfarçado de ator desempregado enquanto fazia pesquisa de campo para a nova ediçao do seu livro."
  },
  {
    "id": "o-jardim-secreto-frances-hodgson-burnett",
    "title": "O Jardim Secreto",
    "author": "Frances Hodgson Burnett",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Pé da Letra",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A descoberta de um jardim além de trazer muita alegria e um novo propósito para a menina, faz com que ela faça novas amizades. Este livro nos traz diversas lições e reforça a importancia de acreditar na magia e no poder da simplicidade."
  },
  {
    "id": "o-labirinto-jim-henson",
    "title": "O Labirinto",
    "author": "Jim Henson",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Darkside",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Frustada por ter de cuidar do irmão caçula enquanto seus pais estão fora, a adolescente sarah sonha sonha em se livrar da criança, que não para de chorar. Atendendo seu pedido, o rei dos duendes, personagem de um dos livros de sarah, ganha vida e sequestra o bebê. Arrependida, a menina terá de enfrentar um labirinto e resgatar o irmão antes da meia-noite para evitar que ele seja transformado em duende."
  },
  {
    "id": "o-labirinto-dos-ossos-rick-riordan",
    "title": "O Labirinto dos Ossos",
    "author": "Rick Riordan",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Imagine se você descobrisse que faz parte de uma família de personalidades que mudaram a histporia. E imagine se , no minuto seguinte , vocẽ tivesse que escolher entr herdar 1 milhão de dólares ou a primeira de 39 pistas para encontrar um tesouro muito maior."
  },
  {
    "id": "o-magico-de-oz-l-frank-baum",
    "title": "O Mágico de Oz",
    "author": "L. Frank Baum",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "L&pm",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Quando um terrível ciclone levou dorothy , ela temeu não ver nunca mais sua tia emily e o tio henry. Mas ela encontrou os munchinks e eles lhe disseram para seguir a estrada de tijolos amarelos até a cidade das esmeraldas. No caminho ela encontrou o espantalho , lenhador e o leão covarde."
  },
  {
    "id": "o-orfanto-da-srta-peregrine-para-criancas-peculiares-ransom-riggs",
    "title": "O Orfanto da Srta. Peregrine para Crianças Peculiares",
    "author": "Ransom Riggs",
    "category": "Fantasia para crianças",
    "collection": false,
    "publisher": "Leya",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma fantasia arrepiante , ilustrada com assombrosas fotografias de épocan, o orfanato da srta. Peregrine para crinças peculiares vai deliciar jovens , adultos e qualquer um que goste de uma aventura sombria."
  },
  {
    "id": "percy-jackson-e-o-ladrao-de-raios-rick-riordan",
    "title": "Percy Jackson e o Ladrão de Raios",
    "author": "Rick Riordan",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Você irá para o oeste, e irá enfrentar o deus que se tornou desleal. Irá encontrar o que foi roubado , e o verá devolvido em segurança. Será traído por aquele que o drama de amigo. E . No fim , irá fracassar em salvar aquilo que mais importa."
  },
  {
    "id": "percy-jackson-e-o-ultimo-olimpiano-rick-riordan",
    "title": "Percy Jackson e o Último Olimpiano",
    "author": "Rick Riordan",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Revelada a sinistra profecia acerca do décimo sexto aniversário do herói , ele enfim encontra seu verdadeiro caminho."
  },
  {
    "id": "percy-jackson-e-os-olimpianos-o-mar-de-monstros-rick-riordan",
    "title": "Percy Jackson e os Olimpianos - o Mar de Monstros",
    "author": "Rick Riordan",
    "category": "Fantasia para crianças",
    "collection": true,
    "publisher": "Intrínseca",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Mistura inteligente de mitologia grega com personagens adolescentes contemporânios , em uma aventura repleta de ação."
  },
  {
    "id": "13-lendas-brasileiras-coautoria",
    "title": "13 Lendas Brasileiras",
    "author": "Coautoria",
    "category": "Cordéis e Fábulas",
    "collection": false,
    "publisher": "Paulinas",
    "level": "LIVRE",
    "synopsis": "Histórias do folclore brasileiro"
  },
  {
    "id": "a-interessante-ilha-dukontra-marcelo-cipis",
    "title": "A Interessante Ilha Dukontra",
    "author": "Marcelo Cipis",
    "category": "Infantil",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "LIVRE",
    "synopsis": "O pensamento crítico e a capacidade de enxergar as coisas por diferentes perspectivas"
  },
  {
    "id": "a-abobrinha-quando-cresce-carlos-queiroz-telles",
    "title": "A Abobrinha Quando Cresce...",
    "author": "Carlos Queiroz Telles",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma coleção de pequenos poemas que retratam com alegria e delicadeza todas as situações do cotidiano infantil."
  },
  {
    "id": "a-chave-da-biblioteca-severino-rodrigues",
    "title": "A Chave da Biblioteca",
    "author": "Severino Rodrigues",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Um menino apaixonado por livros , que ronda a porta sempre fechada da biblioteca da escola. Será que ele vai conseguir realizar seu sonho ?"
  },
  {
    "id": "a-cidade-que-mudou-de-nome-conceil-correa-da-silva-ney-ribeiro",
    "title": "A Cidade que Mudou de Nome",
    "author": "Conceil Corrêa da Silva, Ney Ribeiro",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Trovoada era uma cidade cheia de problemas. Por isso, ninguém sorria, conversava ou brincava... Alguns de seus moradores eram tão mal-humorados que chrgavam a causar tempestades no lugar. Mas, um dia, o sol voltou a brilhar por causa de uma grande amizade que floresceu. Essa era a hora de a cidade mudar de nome!"
  },
  {
    "id": "a-escada-transparente-coautoria",
    "title": "A Escada Transparente",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "As irmãs filó e sofia estão muito tristes, pois a avô delas, tão amada, partiu para sempre. E agora? Enquanto pensam em como lidar com uma saudade tão grande, as duas irmãs procuram consolar o avô, que sente uma tristeza sem tamanho. De maneira especial, elas falarão para ele de uma escada nem sempre vista por todos, mas que ajuda a superar a dor da perda e da saudade"
  },
  {
    "id": "a-familia-mais-rica-do-mundo-jonas-ribeiro",
    "title": "A Família Mais Rica do Mundo",
    "author": "Jonas Ribeiro",
    "category": "Infantil",
    "collection": false,
    "publisher": "Mais Ativo$",
    "level": "LIVRE",
    "synopsis": "Os albuquerque querque são bilionários. Moram numa mansão deslumbrante, um belo dia surge um questionamento, sera que precisamos de tudo isso? Será que somos felizes? Será que saberíamos ser felizes com pouco dinheiro?"
  },
  {
    "id": "a-grande-ideia-telma-guimaraes",
    "title": "A Grande Ideia",
    "author": "Telma Guimarães",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "De maneira graciosa, este livro questiona o tal do \"porque sim\", que frequetemente não responde à pergunta nem justifica nada"
  },
  {
    "id": "a-horta-do-ze-lele-maybe-cristina-milan-lemos",
    "title": "A Horta do Zé Lelé",
    "author": "Maybe Cristina Milan Lemos",
    "category": "Infantil",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O livro conta a história de um senhor que ama plantar e cuidar da horta e assim se alimentar com produtos frescos e saudáveis, mas que de repente percebe que tem algo de errado acontecendo"
  },
  {
    "id": "a-invencao-de-celeste-telma-guimaraes-castro-andrade",
    "title": "A Invenção de Celeste",
    "author": "Telma Guimarães Castro Andrade",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "O que era uma pequena mentira va crescendo e, no final, a menina percebe que é importante assumir os erros e que mentir nunca é a melhor saída"
  },
  {
    "id": "a-mina-dos-sete-anoes-disney",
    "title": "A Mina dos Sete Anões",
    "author": "Disney",
    "category": "Infantil",
    "collection": false,
    "publisher": "Nova Cultural",
    "level": "LIVRE",
    "synopsis": "Os sete anões continuam morando em sua casinha na floresta e trabalhando na mina de diamantes. Até que, um dia, recebem bilhetes misteriosos. Seguindo as instruções dos bilhetes chegam a um palácio e têm uma grande surpresa."
  },
  {
    "id": "a-mochila-que-pesava-demais-regina-vieira",
    "title": "A Mochila que Pesava Demais",
    "author": "Regina Vieira",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Será que é possível encontrar um equilíbrio e tornar a mochila ( e a vida) mais leve?"
  },
  {
    "id": "a-pipa-e-a-flor-rubem-alves",
    "title": "A Pipa e a Flor",
    "author": "Rubem Alves",
    "category": "Infantil",
    "collection": false,
    "publisher": "Loyola",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "a-sementinha-bailarina-iza-ramos-de-azevedo-souza",
    "title": "A Sementinha Bailarina",
    "author": "Iza Ramos de Azevedo Souza",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Uma sementinha precisa ser carregada pelo vento para fazer a sua grande viagem , bailando pelos ares .... O que terá acontecido ? Agora é ler e descobrir a aventura dessa sementinha."
  },
  {
    "id": "a-terra-dos-meninos-pelados-graciliano-ramos",
    "title": "A Terra dos Meninos Pelados",
    "author": "Graciliano Ramos",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Havia um menino diferente dos outros meninos : tinha o olho direito preto , o esquerdo azul e a cabeça pelada."
  },
  {
    "id": "abracadabra-de-onde-vem-as-palavras-ilan-brenman",
    "title": "Abracadabra de Onde Vêm as Palavras ?",
    "author": "Ilan Brenman",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Cada palavra tem sua origem e sua história , mas aqui a brincadeira é outra , vão descobrir o surgimento de algumas palavras com histórias que eu inventei."
  },
  {
    "id": "adelina-gelatina-audrey-calleja",
    "title": "Adelina Gelatina",
    "author": "Audrey Calleja",
    "category": "Infantil",
    "collection": false,
    "publisher": "Edições Sm\"",
    "level": "LIVRE",
    "synopsis": "As palvras não dão conta de dizer tudo o que se passa no coração de adelina. Caçula da família, ela perde o chão quando o pai sai de casa e leva as filhas mais velhas, fruto do casamento anterior. Por mais sinceras que sejam as explicações da mãe, adelina caminha com dificuldade: os adultos parecem surdos, as meias-irmãs fazem falta por inteiro, em sua boca as palavras se atropelam. Com a ajuda da imaginção e de seu gato de botas, adelina saltará léguas de angústia e desorientação. Um olhar sensível sobre a possibilidade de superação em momentosde crise."
  },
  {
    "id": "alguem-muito-especial-miriam-portela",
    "title": "Alguém Muito Especial",
    "author": "Miriam Portela",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "alguem-viu-o-meu-chapeu-marcelo-juca-e-bruno-nunes",
    "title": "Alguém Viu o Meu Chapéu?",
    "author": "Marcelo Jucá e Bruno Nunes",
    "category": "Infantil",
    "collection": false,
    "publisher": "Leiturinha",
    "level": "LIVRE",
    "synopsis": "Uma história não só de chapéus, mas também é sobre cooperação, fantasia, cultura e sobre como aprender a lidar com a frustração"
  },
  {
    "id": "araminta-fantasmim-minha-casa-mal-assombrada-angie-sage",
    "title": "Araminta Fantasmim: Minha Casa Mal-assombrada",
    "author": "Angie Sage",
    "category": "Infantil",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Inconformada com a ideia de perder seu lar mal-assombrado, araminta bola um plano mirabolante para assustar qualquer comprador em potencial"
  },
  {
    "id": "as-cantigas-de-lia-rosinha",
    "title": "As Cantigas de Lia",
    "author": "Rosinha",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Todo mundo já brincou de roda e se lembra do anel que se quebrou, do cravo e da rosa, da rua com pedrinhas de brilhantes... Mas será que alguém já imaginou essas singelas canções modificando a vida de uma pessoa? É o que acontece com lia, que vê seu mundo se transformar por meio das cantigas de roda depois de encontrar uma concha diferente e miteriosa. Descubra como isso acontece enquanto se diverte e se emociona com as cantigas que encantam tantas gerações."
  },
  {
    "id": "as-coisas-que-a-gente-fala-ruth-rocha",
    "title": "As Coisas que a Gente Fala",
    "author": "Ruth Rocha",
    "category": "Infantil",
    "collection": false,
    "publisher": "Salamandra",
    "level": "LIVRE",
    "synopsis": "Tudo o que a gente vê ou sente é expresso através das palavras. As palavras podem nos parecer duras, suaves, feias, bonitas. Podem servir para dizer verdades ou menitras. Portanto, muito cuidado ao usar as palavras!"
  },
  {
    "id": "as-trancas-de-bintou-sylviane-a-diouf",
    "title": "As Tranças de Bintou",
    "author": "Sylviane A. Diouf",
    "category": "Infantil",
    "collection": false,
    "publisher": "Cosacnaify",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "\"grande parte da minha pesquisa é dedicada à história e à cultura do povo africano. Quando me dei conta de quão pouco conhecemos esses assuntos, senti que deveria partilhar o que aprendi, não somente com adultos, mas também com leitores mais jovens que, espera-se, cresçam mais bem informados que as gerações anteriores.\""
  },
  {
    "id": "barulhinhos-da-tarde-pollyana-gama",
    "title": "Barulhinhos da Tarde",
    "author": "Pollyana Gama",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora Cachecol",
    "level": "LIVRE",
    "synopsis": "Barulhinhos da tarde é um livro divertido sobre o dia a dia e seus sons. De uma maneira poética, apresenta para os pequeninos a rotina familiar."
  },
  {
    "id": "cachinhos-dourados-coautoria",
    "title": "Cachinhos Dourados",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Folha de S. Paulo",
    "level": "LIVRE",
    "synopsis": "Cachinhos dourados é uma garotinha loira e cheia de cachinhos, um dia passeando pela floresta encontra uma casa... E resolve testa-lá"
  },
  {
    "id": "cada-um-com-seu-jeito-cada-jeito-e-um-lucimar-rosa-dias",
    "title": "Cada um com Seu Jeito, Cada Jeito É Um!",
    "author": "Lucimar Rosa Dias",
    "category": "Infantil",
    "collection": false,
    "publisher": "Galeria das Letras",
    "level": "LIVRE",
    "synopsis": "É uma história bem-humorada sobre autoestima e valorização das diferenças. Apresenta uma família cujas características físicas e modos de ser fazem-nos especiais e únicos, cada um com seu jeito, quebrando estereótipos de raça, cor e idade."
  },
  {
    "id": "cade-o-super-heroi-walcyr-carrasco",
    "title": "Cadê o Super-herói ?",
    "author": "Walcyr Carrasco",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Tomé adora os super-heróis . Tanto que se transforma em super-tomé, mas a turma não acredita que ele possa voar."
  },
  {
    "id": "caleidoscopio-do-contador-de-historia-coautoria",
    "title": "Caleidoscópio do Contador de História",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Imeph",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Dentro dele , um desenho nunca é igual ao outro. Você gira , mistura , torce , e teu olho sempre verá mosaicos diferentes , numa explosão multicolorida.feito o contador de histórias , que vive de misturar coisas e brincar de fazer de conta."
  },
  {
    "id": "carta-errante-avo-atrapalhada-menina-aniversariante-mirna-pinsky",
    "title": "Carta Errante Avó Atrapalhada Menina Aniversariante",
    "author": "Mirna Pinsky",
    "category": "Infantil",
    "collection": false,
    "publisher": "Formato",
    "level": "LIVRE",
    "synopsis": "De forma poética e cheia de humor, a narrativa celebra o afeto entre gerações, o encanto das cartas escritas à mão e a ansiedade gostosa de esperar por uma surpresa no dia do aniversário"
  },
  {
    "id": "carteiro-tem-nome-anna-claudia-ramos",
    "title": "Carteiro Tem Nome?",
    "author": "Anna Claudia Ramos",
    "category": "Infantil",
    "collection": false,
    "publisher": "Globinho",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Carteiro tem nome? E será que você sabe o nome do carteiro que entrega correspondências na sua casa? Ou você nunca pensou nisso? Descubra nesta história o que acontece quando caio e bia se deparam com carteiros, despedidas, cartas, bilhetes e telegramas. Você vai se surpreender!"
  },
  {
    "id": "como-me-sinto-quando-estou-zangado-a-cornelia-maude-spelman",
    "title": "Como Me Sinto... Quando Estou Zangado(a)",
    "author": "Cornelia Maude Spelman",
    "category": "Infantil",
    "collection": false,
    "publisher": "Todolivro",
    "level": "LIVRE",
    "synopsis": "A educação sobre como identificar e lidar com nossas emoções (especialmente as desagradáveis e assustadoras) é tão importante como outros aprendizados. A terapeuta cornelia maude spelman usa uma linguagem simples e tranquila para ajudar crianças a compreender e lidar com seus sentimentos e a relacionar-se bem com os outros."
  },
  {
    "id": "contando-o-hino-nacional-marcos-vinicius-lucio",
    "title": "Contando o Hino Nacional",
    "author": "Marcos Vinícius Lúcio",
    "category": "Infantil",
    "collection": false,
    "publisher": "Cortez Editora",
    "level": "LIVRE",
    "synopsis": "Ajudando as crianças a não apenas cantar o hino nacional, mas verdadeiramente compreender e valorizar a mensagem e a história por trás da sua letra"
  },
  {
    "id": "coracao-que-bate-sente-regina-renno-e-regina-otero",
    "title": "Coração que Bate Sente",
    "author": "Regina Rennó e Regina Otero",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Sensibilidade e empatia são algumas das qualidades mais bonitas do ser humano, pois temos um coração que bate no ritmo do afeto. Além de uma história de solidariedade, este livro traz várias atividades que ajudam a refletir sobre o respeito ao próximo."
  },
  {
    "id": "dinossauros-sean-callery",
    "title": "Dinossauros",
    "author": "Sean Callery",
    "category": "Infantil",
    "collection": false,
    "publisher": "Publifolha",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Este livro explica 30 fatos e características fundamentais sobre os animais pré-históricos, como diferenças entre espécies, sua estinção ao final do período cratáceo e como os pesquisadores insvestigam os vestígios encontrados pelo mundo."
  },
  {
    "id": "dom-quixote-miguel-de-cervantes",
    "title": "Dom Quixote",
    "author": "Miguel de Cervantes",
    "category": "Infantil",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "LIVRE",
    "synopsis": "Acreditando que pode reviver as grandes grandes aventuras dos heróis do passado, ele se intitula dom quixote e sai de casa para \"fazer justiça e proteger todas as donzelas\", sempre acompanhado de seu fiel escudeiro, sancho pança"
  },
  {
    "id": "dorme-menino-dorme-laura-herrera",
    "title": "Dorme Menino , Dorme",
    "author": "Laura Herrera",
    "category": "Infantil",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Um menino está acordado na noite escura. Não consegue dormir. Para ele , trazem música e canções , cobertores quentinhos e leite morno."
  },
  {
    "id": "e-algo-aconteceu-naquele-dia-jonas-ribeiro",
    "title": "E Algo Aconteceu Naquele Dia ...",
    "author": "Jonas Ribeiro",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Um pequeno gesto faz com que uma corrente do bem se crie , comprovando que honestidade e solidariedade tem de acontecer toda hora , todo dia...."
  },
  {
    "id": "elefantinhos-divertidos-coautoria",
    "title": "Elefantinhos Divertidos",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Escala",
    "level": "LIVRE",
    "synopsis": "Histórinhas para dormir de elefantinhos"
  },
  {
    "id": "enrosca-ou-desenrosca-coautoria",
    "title": "Enrosca Ou Desenrosca?",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "O livro desafia a garotada com trava-línguas de dar nó na língua, adivinhas intrigantes, quadras, parendas e outros jogos verbais repletos de ritmo e sonoridade"
  },
  {
    "id": "era-uma-vez-uma-bota-coautoria",
    "title": "Era uma Vez uma Bota",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Biruta",
    "level": "LIVRE",
    "synopsis": "Por que essa história começa com uma bota? Se começasse com o gato de botas, todo mundo entenderia né? Mas não pode aparecer nenhum gato nessa história! Por que será?"
  },
  {
    "id": "era-urso-frank-tashlin",
    "title": "Era Urso?",
    "author": "Frank Tashlin",
    "category": "Infantil",
    "collection": false,
    "publisher": "Ediouro",
    "level": "LIVRE",
    "synopsis": "Se um vigia, seu chefe, um gerente, seu diretor, o vice-presidente ou presidente cismam que um urso só precisa fazer a barba, tomar banho e trocar de roupa para ser um prefeito operário, a solução é trabalhar. Mas como volta a ser um urso?"
  },
  {
    "id": "familia-online-isabel-vieira",
    "title": "Família Online",
    "author": "Isabel Vieira",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "As primas olívia e sofia parecem o sol e a lua : enquanto uma brinca e estuda, a outra dorme."
  },
  {
    "id": "familias-ilan-brenman",
    "title": "Famílias",
    "author": "Ilan Brenman",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Um livro divertido que mostra que no mundo existem muitos tipos de famílias. Qual será a sua?"
  },
  {
    "id": "faro-o-defensor-dos-animais-tereza-blum-matucheski",
    "title": "Faro , o Defensor dos Animais",
    "author": "Tereza Blum Matucheski",
    "category": "Infantil",
    "collection": false,
    "publisher": "Fama Educativa",
    "level": "LIVRE",
    "synopsis": "É um livro que conta a história de uma das personagens que trabalha para um mundo melhor."
  },
  {
    "id": "frida-e-a-joaninha-flora-coautoria",
    "title": "Frida e a Joaninha Flora",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Esse livro conta uma história para aquelas crianças que já se interessam por arte, de uma forma divertida"
  },
  {
    "id": "gabi-e-o-tesouro-do-oriente-tiago-de-melo-andrade",
    "title": "Gabi e o Tesouro do Oriente",
    "author": "Tiago de Melo Andrade",
    "category": "Infantil",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "LIVRE",
    "synopsis": "Acompanhe gabi em sua incrível aventura e descubra o que está por trás do precioso tesouro do oriente, um tesouro que não se pode contar."
  },
  {
    "id": "grande-ou-pequena-beatriz-meirelles",
    "title": "Grande Ou Pequena?",
    "author": "Beatriz Meirelles",
    "category": "Infantil",
    "collection": false,
    "publisher": "Scipione",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Para brincar narua, mariana ainda era pequena. Para chupar chupeta, já era grande. Afinal, ela era grande ou pequena? Seus pais precisavam esclarecer essa confusão!"
  },
  {
    "id": "historias-de-valor-katia-canton",
    "title": "Histórias de Valor",
    "author": "Katia Canton",
    "category": "Infantil",
    "collection": false,
    "publisher": "Martins Fontes",
    "level": "LIVRE",
    "synopsis": "Este livro trata do poder das pequenas histórias. São oito histórias baseadas em contos retirados da tradição de vários lugares do mundo - brasil, índia, frança, itália, áfrica, camboja -, cada qual indicando um importante valor: sinceridade, dignidade, capacidade de perdoar, generosidade, justiça, solidariedade, felicidade e , antes de tudo, amor."
  },
  {
    "id": "historinhas-de-contar-natha-caputo-e-sara-cone-bryant",
    "title": "Historinhas de Contar",
    "author": "Natha Caputo e Sara Cone Bryant",
    "category": "Infantil",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Dezesseis histórias engraçadas, ternas e poéticas num estilo gostoso e ritmado para contar ás crianças."
  },
  {
    "id": "lais-a-fofinha-walcir-carrasco",
    "title": "Laís a Fofinha",
    "author": "Walcir Carrasco",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Lás mudou de cidade e, na nova escola , seus colegas não param de lhe dar apelidos desagradáveis. Com vergonha , laís tenta resolver o problema sozinha."
  },
  {
    "id": "licao-de-voo-sandra-aymone",
    "title": "Lição de Voo",
    "author": "Sandra Aymone",
    "category": "Infantil",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Uma menina que aprende a assumir seus próprios atos e descobre, ao observar uma borboleta, que o esforço para superar os obstáculos da vida é fundamental para o crescimento"
  },
  {
    "id": "lino-andre-neves",
    "title": "Lino",
    "author": "André Neves",
    "category": "Infantil",
    "collection": false,
    "publisher": "Callis",
    "level": "LIVRE",
    "synopsis": "Descubra por que lua tem uma luz que acende na barriga! E por que será que lino gosta tanto dela?"
  },
  {
    "id": "luz-de-dentro-ou-de-fora-nye-ribeiro",
    "title": "Luz de Dentro Ou de Fora?",
    "author": "Nye Ribeiro",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "O que um menino e um vaga-lume podem ter em comum? No caso de vítor e lume, o medo de escuro. Porém, eles têm mais uma coisa em comum: uma luz interna e especial que os ajuda em momentos difíceis. Eles só precisam encontrar uma forma de usá-la. Você vai descobrir como nas duas histórias deste livro, que se misturam e se completam."
  },
  {
    "id": "malala-e-seu-lapis-magico-malala-yousafzai",
    "title": "Malala e Seu Lápis Mágico",
    "author": "Malala Yousafzai",
    "category": "Infantil",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "LIVRE",
    "synopsis": "Quando era apenas uma criança vevendo no paquistão, o maior desejo de malala yousafzai era ter um lápis mágico. Assim, ela poderia dar vida a tudo que desenhasse e traria felicidade às pessoas que amava, ajudaria os mais pobres e até dormiria um pouquinho mais de manhã. Mas quando seu direto à educação foi colocado em perigo por homens que acreditavam que meninas não deveriam ir à escola, malala percebeu que a sociedade em que vivia precisava de mudanças imediatas. E mesmo sem o desejado lápis mágico, ela foi capaz de enfrentar grandes obstáculos até encontrar dentro de si força e as ferramentas necessárias para mudar o mundo."
  },
  {
    "id": "mamae-e-tao-infantil-coautoria",
    "title": "Mamãe É Tao Infantil",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "LIVRE",
    "synopsis": "Com muito humor, essa série retrata o cotidiano de uma família brasil. Os adultos preocupados em educar, transmitir valores, se surpreendem com as atitudes seguras de seus filhos"
  },
  {
    "id": "mergulho-volnei-canonica-e-mariana-massarani",
    "title": "Mergulho",
    "author": "Volnei Canônica e Mariana Massarani",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Dizem que os sentimentos dos seres humanos podem ser tão profundos quanto o oceano.será verdade ? Respire fundo e prepare-se para esse mergulho intenso , divertido e repleto de surpresas no universo de uma criança."
  },
  {
    "id": "meu-amigo-dinossauro-ruth-rocha-e-elisabeth-teixeira",
    "title": "Meu Amigo Dinossauro",
    "author": "Ruth Rocha e Elisabeth Teixeira",
    "category": "Infantil",
    "collection": false,
    "publisher": "Leiturinha",
    "level": "LIVRE",
    "synopsis": "A importância da preservação ambiental e a consientização sobre o uso de recursos naturais não renováveis"
  },
  {
    "id": "mig-o-sentimental-ana-miranda",
    "title": "Mig, o Sentimental",
    "author": "Ana Miranda",
    "category": "Infantil",
    "collection": false,
    "publisher": "Verus",
    "level": "LIVRE",
    "synopsis": "Mostra que expressar suas emoções - como o choro, o afeto e a sensibilidade - não é um sinal de fraqueza, mas sim uma forma bonita e genuína de se conectar com a vida e com as pessoas ao redor"
  },
  {
    "id": "mimosa-nao-consegue-dormir-alexander-steffensmeier",
    "title": "Mimosa Não Consegue Dormir",
    "author": "Alexander Steffensmeier",
    "category": "Infantil",
    "collection": false,
    "publisher": "Telos",
    "level": "LIVRE",
    "synopsis": "A dona da fazenda leu uma história para os bichos, como fazia todas as noites, mas mimosa não conseguia dormir. Será que ela vai procurar a fazendeira ou se acomodar no galinheiro?"
  },
  {
    "id": "moby-dick-herman-melville",
    "title": "Moby Dick",
    "author": "Herman Melville",
    "category": "Infantil",
    "collection": true,
    "publisher": "Scipione",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Ismael sempre teve atração por baleias, seres impressionantes e misteriosos que povoavam sua cabeça desde criança. Certa vez, o rapaz resolveu embarcar num baleeiro, rumo ao oceano pacífico, e lançou-se numa aventura surpreendente e inesuecível, em que conheceu de perto a fúria e a grandiosidade de moby dick, a beleia branca."
  },
  {
    "id": "moiara-filha-da-terra-camila-tardelli-e-thiery-maciel",
    "title": "Moiara , Filha da Terra",
    "author": "Camila Tardelli e Thiery Maciel",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Uma menina alegre , inteligente , linda. Moiara é assim , tem amigos , gosta de estudar, ama a mãe e a família."
  },
  {
    "id": "no-caminho-de-alvinho-tinha-uma-pedra-ruth-rocha",
    "title": "No Caminho de Alvinho Tinha uma Pedra",
    "author": "Ruth Rocha",
    "category": "Infantil",
    "collection": false,
    "publisher": "Salamandra",
    "level": "LIVRE",
    "synopsis": "O curioso menino alvinho encontra uma pedra diferente no meio do caminho"
  },
  {
    "id": "no-tempo-de-meus-bisavos-nye-ribeiro",
    "title": "No Tempo de Meus Bisavós",
    "author": "Nye Ribeiro",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Qual o melhor tempo para se viver: o passado, o presente ou o futuro? A história \"no tempo de meus bisavós\" faz uma comparação entre o ontem e o hoje. Observando características próprias de uma época, descobrimos o valor histórico do passado, desenvolvendo a consciência do futuro."
  },
  {
    "id": "o-alvo-ilan-brenman",
    "title": "O Alvo",
    "author": "Ilan Brenman",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Algumas têm o dom de contar histórias. Parece até que leem nosso pensamento ou nossos sentimentos"
  },
  {
    "id": "o-anel-da-tartaruga-cesar-obeid",
    "title": "O Anel da Tartaruga",
    "author": "César Obeid",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Alerta a importância da preservação do meio ambiente, do descarte correto dos resíduos e do respeito à fauna marinha e à vida no planeta"
  },
  {
    "id": "o-balao-daniel-cabral",
    "title": "O Balão",
    "author": "Daniel Cabral",
    "category": "Infantil",
    "collection": false,
    "publisher": "Positivo",
    "level": "LIVRE",
    "synopsis": "Esta narrativa sensível e poética de daniel cabral nos convida a viajar pelo mundo da imaginação e a viver aventuras na companhia de um menino e do balão vermelho que ganhou de presente da mãe."
  },
  {
    "id": "o-bosque-encantado-ignacio-sanz",
    "title": "O Bosque Encantado",
    "author": "Ignacio Sanz",
    "category": "Infantil",
    "collection": false,
    "publisher": "Macmilan",
    "level": "LIVRE",
    "synopsis": "Quem quiser conhecer os dedos da mão, há de encontrá-los fielmente desenhados neste livro. Todos juntos parecem um bosque encantado."
  },
  {
    "id": "o-dedao-do-pe-do-gigante-claudia-souza",
    "title": "O Dedão do Pé do Gigante",
    "author": "Claudia Souza",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "O gigante é tão alto, mas tão alto, que sua cabeça passeia pelas nuvens. Suas pernas são tão compridas, mas tão compridas, que ele nem consegue tocar os pés. Um dia, o dedão do pé desse gigante começou a doer, doer muito, mas muito mesmo...será que alguém vai ajuda-ló a resolver esse problema? Ou será que toda essa história incrível vai dar muita confusão? Este é um livro surpreendente sobre fantasia, empatia, solidariedade e amizade. Porque bondade e respeito não têm tamanho!"
  },
  {
    "id": "o-gol-da-vitoria-coautoria",
    "title": "O Gol da Vitória",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Saraiva",
    "level": "LIVRE",
    "synopsis": "Tuca não entendeu quando gentileza se propôs a ajudá-lo. O que teria para lhe dar em troca?"
  },
  {
    "id": "o-grande-rabanete-tatiana-belinky",
    "title": "O Grande Rabanete",
    "author": "Tatiana Belinky",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Este clássico da literatura infantil mostra a força do trabalho em equipe e como até a menor das ajudas pode fazer toda a diferença no final"
  },
  {
    "id": "o-guardador-de-ideias-ney-ribeiro",
    "title": "O Guardador de Ideias",
    "author": "Ney Ribeiro",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Esconder um tesouro pode trazer segurança, mas e se, de uma hora para a outra, tudo se perder? Venceslau guarda minuciosamente suas ideias, porém, quando um forte vendaval as leva para longe, ele precisa partir em busca de novos planos. Certamente ele fará uma importante descoberta nessa deliciosa aventura poética."
  },
  {
    "id": "o-homem-sem-alma-nireuda-longobardi",
    "title": "O Homem Sem Alma",
    "author": "Nireuda Longobardi",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Era uma vez... Um conto muito, muito antigo, que viajou por vários continentes e chegou à américa do sul e ao brasil. No nordeste de nosso país, tomou novas formas. São muitas as histórias antigas sobre gigantes e feras que não guardavam a vida dentro do corpo: o coração, a vida ou a alma do personagem poderia estar oculta em cavernas, no fundo dos mares ou dentro do tronco das árvores. Neste conto, o homem que tem a alma escondida fora de si mesmo não é vilão, mas um encantado, alguém cujo aspecto foi modificado por um feitiço. E esta história é mais parecida com outras em que alguém, homem ou mulher, foi transformado por magia e precisa de ajuda para recuperar sua humanidade."
  },
  {
    "id": "o-incrivel-bicho-homem-elias-jose",
    "title": "O Incrível Bicho-homem",
    "author": "Elias José",
    "category": "Infantil",
    "collection": false,
    "publisher": "Ftd",
    "level": "LIVRE",
    "synopsis": "É uma criatura cheia de contradições, inventividade e sentimentos, tudo isso envelopado em rimas brincalhonas e ilustrações expressivas"
  },
  {
    "id": "o-menino-que-gostava-de-passaros-coautoria",
    "title": "O Menino que Gostava de Pássaros",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "LIVRE",
    "synopsis": "A obra convida as crianças a desenvolverem a atenção ao detalhes, o amor pelo meio ambiente e o prazer de explorar o mundo simples e cheio de maravilhas da infância"
  },
  {
    "id": "o-pequeno-bicho-papao-coautoria",
    "title": "O Pequeno Bicho-papão",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Venha conhecer o papinho, o mais fofo dos bicho-papões!"
  },
  {
    "id": "o-pequeno-grande-doador-fabricio-correia-e-mauricio-de-sousa",
    "title": "O Pequeno Grande Doador",
    "author": "Fabrício Correia e Mauricio de Sousa",
    "category": "Infantil",
    "collection": false,
    "publisher": "Inspire",
    "level": "LIVRE",
    "synopsis": "Vamos conhecer sua história e saber como ele ajudou sua irmãzinha a superar um grave problema de saúde."
  },
  {
    "id": "o-que-sera-que-tem-de-tudo-um-pouco-anna-claudia-ramos",
    "title": "O que Será que Tem de Tudo um Pouco?",
    "author": "Anna Claudia Ramos",
    "category": "Infantil",
    "collection": false,
    "publisher": "Ftd",
    "level": "LIVRE",
    "synopsis": "No livro de anna claudia, tem de tudo um pouco, tem brinquedo, tem brincadeira, tem professora, tem escola, tem colega, tem amigo... Neste livro só está faltando uma coisa importane: você!"
  },
  {
    "id": "o-ratinho-o-morango-vermelho-maduro-e-o-grande-urso-esfomeado-don-e-audrey-wood",
    "title": "O Ratinho, o Morango Vermelho Maduro e o Grande Urso Esfomeado",
    "author": "Don e Audrey Wood",
    "category": "Infantil",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O ratinho fará tudo para salvar o morango vermelho maduro do grande urso esfomeado. O urso está com as cartas na mão, mas quem será o mais esperto ?"
  },
  {
    "id": "o-rei-artur-leny-werneck",
    "title": "O Rei Artur",
    "author": "Leny Werneck",
    "category": "Infantil",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Ao superar uma prova do mago merlin , o jovem artur se torna rei da inglaterra."
  },
  {
    "id": "o-reizinho-mandao-ruth-rocha",
    "title": "O Reizinho Mandão",
    "author": "Ruth Rocha",
    "category": "Infantil",
    "collection": false,
    "publisher": "Salamandra",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Democracia e liberdade são bens difíceis de consquistar. Mas talvez sejam ainda mais difíceis de manter, pois sempre haverá sapos querendo fingir-se de reis, ou governantes autoritários, que ignoram as verdadeiras necessidades de seu povo. E isso é assunto para crianças? A meneira como as histórias desta série tem série tem sido recebida por mais de uma geração é prova que sim."
  },
  {
    "id": "o-sumico-da-lua-manuel-filho",
    "title": "O Sumiço da Lua",
    "author": "Manuel Filho",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma das mais belas lendas indigenas é recontada neste livro. A aventura dos irmãos éder e elias e da prima tri não poderia ser mais emocionante."
  },
  {
    "id": "o-talento-do-guara-lais-graf-e-deise-lino",
    "title": "O Talento do Guará",
    "author": "Laís Graf e Deise Lino",
    "category": "Infantil",
    "collection": false,
    "publisher": "Leiturinha",
    "level": "LIVRE",
    "synopsis": "A floresta está em festa com o maior dos eventos. Venham logo , pequeninos , conhecer novos talentos !"
  },
  {
    "id": "o-urso-coautoria",
    "title": "O Urso",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Ftd",
    "level": "LIVRE",
    "synopsis": "Conta histórias de ursos, de várias espécies, o que gostam, o que comem..."
  },
  {
    "id": "o-veado-e-a-onca-ana-maria-machado",
    "title": "O Veado e a Onça",
    "author": "Ana Maria Machado",
    "category": "Infantil",
    "collection": false,
    "publisher": "Ftd",
    "level": "LIVRE",
    "synopsis": "O veado e a onça, sem saberem da ideia um do outro, resolvem construir uma casa no mesmo lugar"
  },
  {
    "id": "os-corvos-de-pearblossom-coautoria",
    "title": "Os Corvos de Pearblossom",
    "author": "Coautoria",
    "category": "Infantil",
    "collection": false,
    "publisher": "Record",
    "level": "LIVRE",
    "synopsis": "Juntos, eles elaboram um plano astuto e cheio de humor para pregar uma peça na serpente e ensinar a ela uma lição inesquecível"
  },
  {
    "id": "os-gatos-de-cora-fabricio-correia",
    "title": "Os Gatos de Cora",
    "author": "Fabrício Correia",
    "category": "Infantil",
    "collection": false,
    "publisher": "Mirian Editora",
    "level": "LIVRE",
    "synopsis": "Os gatos de cora foi inspirado no amor pelos felinos radiado por cora rónai, pioneira no jornalismo de tecnologia e primeira jornalista brasileira a criar um blog. No livro, conhecemos a pequena cor, uma menina antenada em tecnologia que ama seus gatinhos, mas os deixa muito tempo sozinhos, porque não consegue ficar longe da internet, seja no celular, computador ou qualquer outra forma de conexão. Percebendo esse distanciamento, os gatos se rebelam e mostram a sua companheira humana o verdadeiro valor da amizade entre os seres. Ubuntu. Amar traz vida em abundância."
  },
  {
    "id": "outras-duzias-de-cosinhas-a-toa-que-deixam-a-gente-feliz-otavio-roth",
    "title": "Outras Dúzias de Cosinhas à Toa que Deixam a Gente Feliz",
    "author": "Otavio Roth",
    "category": "Infantil",
    "collection": false,
    "publisher": "Salamandra",
    "level": "LIVRE",
    "synopsis": "O que há em comum entre começar um caderno novo, fazer guerra de almofada, deitar num travesseiro macio, estourar plástico bolha e comer espaguete al dente? Isso mesmo: são coisinhas à toa que deixam a gente feliz."
  },
  {
    "id": "pandofo-bereba-eva-furnari",
    "title": "Pandofo Bereba",
    "author": "Eva Furnari",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Convidando os pequenos leitores a refletirem com leveza sobre convivência, mau humor, empatia e a importância de encarar a vida de forma mais positiva"
  },
  {
    "id": "para-vencer-o-medo-e-derrotar-o-dragao-marcio-mendes",
    "title": "Para Vencer o Medo e Derrotar o Dragão",
    "author": "Maŕcio Mendes",
    "category": "Infantil",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Uma história inspirada, divertida , saborosa e bem- humorada."
  },
  {
    "id": "pe-de-ka-dabliu-ipsilon-ana-lasevicius",
    "title": "Pé de Ká - Dábliu - Ípsilon",
    "author": "Ana Lasevicius",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Neste livro os autores brincam com sua imaginação, antes de descobrir o real significado de uma palavra,tentam advinhar sua história , e sai a cada resultado."
  },
  {
    "id": "problemas-com-o-cachorro-elvira-vigna",
    "title": "Problemas com o Cachorro",
    "author": "Elvira Vigna",
    "category": "Infantil",
    "collection": false,
    "publisher": "Positivo",
    "level": "LIVRE",
    "synopsis": "O menino dessa história tinha um cachorro que sabia falar e inventava um monte de mentiras."
  },
  {
    "id": "quando-eu-crescer-stella-leonardos",
    "title": "Quando Eu Crescer",
    "author": "Stella Leonardos",
    "category": "Infantil",
    "collection": false,
    "publisher": "Ediouro",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Ela navega com a inocência e curiosidade pelas infinitas possibilidades do mundo dos adultos, celebrando a descoberta de si mesma e a liberdade de sonhar"
  },
  {
    "id": "quando-voce-sai-gaston-hauviller",
    "title": "Quando Você Sai",
    "author": "Gastón Hauviller",
    "category": "Infantil",
    "collection": false,
    "publisher": "Zahar",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "quatro-galinhas-em-alto-mar-caio-riter",
    "title": "Quatro Galinhas em Alto-mar",
    "author": "Caio Riter",
    "category": "Infantil",
    "collection": false,
    "publisher": "Biruta",
    "level": "LIVRE",
    "synopsis": "Uma, duas, três, quatro galinhas irmãs receberam convite para uma festa. O aniversário, porém, era em alto-mar, e galinha é bicho que não sabe nadar. Assim, querido leitor, se você se fantasia, se gosta de história contada em forma de poesia, se gosta de bichos e de confusão, ora essa!, leia este livro e saiba como as galinhas foram à festa."
  },
  {
    "id": "quem-ganhou-o-jogo-ricardo-dreguer",
    "title": "Quem Ganhou o Jogo?",
    "author": "Ricardo Dreguer",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Acompanhe história desse menino e de seus colegas de classe. Eles tiveram de usar a adição e a subtração para tentar ganhar um jogo de basquete"
  },
  {
    "id": "quem-mora-neste-livro-ana-matsusaki",
    "title": "Quem Mora Neste Livro?",
    "author": "Ana Matsusaki",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Ei, você que está ai fora, também quer saber quem mora dentro deste livro? Só tem um jeito de descobrir: pode começar pela capa, é bem fácil chegar lá. Assim que este texto terminar, vire o livro, encontre a porta vermelha e entre sem bater."
  },
  {
    "id": "quem-tem-medo-do-vento-carolina-pavanelli",
    "title": "Quem Tem Medo do Vento?",
    "author": "Carolina Pavanelli",
    "category": "Infantil",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uuuuuuuh! Que barulho foi esse lá fora? Naquele dia, chovia e ventava tanto que o victor hugo se tremia todo de pavor! Não tinha nada que o fizesse sair de casa e ir para a escola. Só que ele não estava esperando receber uma visita... Era o vento! E agora? O que fazer quando o medo bate á porta?"
  },
  {
    "id": "quer-ler-um-livro-comigo-lawrence-schimel",
    "title": "Quer Ler um Livro Comigo ?",
    "author": "Lawrence Schimel",
    "category": "Infantil",
    "collection": false,
    "publisher": "Callis",
    "level": "LIVRE",
    "synopsis": "Ele sabia ler sozinho. Mesmo assim , pegou seu livro favorito e foi procurar alguém para ler com ele - é táo gostoso compartilhar leituras."
  },
  {
    "id": "rick-o-nerd-detetive-walcir-carrasco",
    "title": "Rick, o Nerd Detetive",
    "author": "Walcir Carrasco",
    "category": "Infantil",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O coelhinho tambor é muito conhecido pela disney, e neste livro vemos uma aventura dele"
  },
  {
    "id": "rumo-a-galapagos-laurie-krebs",
    "title": "Rumo a Galápagos",
    "author": "Laurie Krebs",
    "category": "Infantil",
    "collection": false,
    "publisher": "Edições Sm\"",
    "level": "LIVRE",
    "synopsis": "Embarque neste veleiro para as ilhas galápagos, na américa do sul, viajando uma semana pelo oceano pacífico com dois simpáticos guias. Lá você conhecerá criaturas incríveis - muitas de aparência pré-histórica - que vivem no arquipélago há centenas e centenas de anos. Além de tartarugas-gigantes e iguanas-marinhas, as ilhas são povoadas de ruidosos albatrozes, atobás-de- pés-azuis, caranguejos-vermelhos e outros animais extrairdinários."
  },
  {
    "id": "sai-da-frente-sr-montanha-francesca-sanna",
    "title": "Sai da Frente , Sr. Montanha",
    "author": "Francesca Sanna",
    "category": "Infantil",
    "collection": false,
    "publisher": "Mil Caramiolas",
    "level": "LIVRE",
    "synopsis": "Como uma criança pode pedir a uma montanha que se mova ? Claro que o senhor montanha não pode dar um passinho para o lado , mas , do seu jeito , ele ajuda lili a descobrir o mundo."
  },
  {
    "id": "salada-saladinha-maria-jose-nobrega-e-rosane-pamplona",
    "title": "Salada, Saladinha",
    "author": "Maria José Nóbrega e Rosane Pamplona",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Advinhas , trava-línguas , parlendas e outros ingredientes saborosos estão aqui '' na panela do mingau '' ."
  },
  {
    "id": "se-eu-fosse-luisa-massarani",
    "title": "Se Eu Fosse...",
    "author": "Luisa Massarani",
    "category": "Infantil",
    "collection": false,
    "publisher": "Publifolinha",
    "level": "LIVRE",
    "synopsis": "Mosrando de forma leve e divertida como vivem, se alimentam, e percebem o ambiente os diferentes seres e elementos da natureza"
  },
  {
    "id": "sem-acucar-com-afeto-telma-guimaraes-castro-andrade",
    "title": "Sem Açúcar, com Afeto",
    "author": "Telma Guimarães Castro Andrade",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Conta a história de paula e clara, duas vizinhas que descobrem que a amizade e o respeito são os melhores remédios contra prejulgamentos e diferenças"
  },
  {
    "id": "ser-humano-e-fabio-sgroi",
    "title": "Ser Humano É...",
    "author": "Fábio Sgroi",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Este é um livro sobre direitos, deveres e , acima de tudo , sobre respeito."
  },
  {
    "id": "simbora-ta-na-hora-instituto-simbora-gente",
    "title": "Simbora, Tá na Hora!",
    "author": "Instituto Simbora Gente",
    "category": "Infantil",
    "collection": false,
    "publisher": "Leiturinha",
    "level": "LIVRE",
    "synopsis": "Imprevistos acpntecem! O problema é que eles também podem gerar muita confusão. O mais legal de tudo isso é que uma turminha pra lá de divertida poderá ajudar a resolver essa trapalhada toda. Uma a um... Somando esforços... Será que vai dar certo?"
  },
  {
    "id": "sua-majestade-o-cafe-vera-vilhena-de-toledo-e-candida-gancho",
    "title": "Sua Majestade o Café",
    "author": "Vera Vilhena de Toledo e Cândida Gancho",
    "category": "Infantil",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um dos símbolos da identidade e da hospitalidade brasileira é,sem dúvida , o café."
  },
  {
    "id": "toma-la-da-ca-flavia-muniz",
    "title": "Toma Lá, Dá Cá",
    "author": "Flávia Muniz",
    "category": "Infantil",
    "collection": false,
    "publisher": "Positivo",
    "level": "LIVRE",
    "synopsis": "A narrativa retrata de forma ágil, leve e humorada como diálogo, a cooperação e a generosidade entram em jogo nas relações interpessoais"
  },
  {
    "id": "um-novo-acorde-marcos-arthur",
    "title": "Um Novo Acorde",
    "author": "Marcos Arthur",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Nessa jornada da vida, ás vezes a gente tropeça, se perde...mas o caminho ainda está lá, esperando por nós. Inspirado pelo sonho de um garoto de aprender a tocar violão, um homem bom vai encontrar forças para retornar seu caminho. Uma amizade inesperada que trará mais música á vida de ambos!"
  },
  {
    "id": "valter-valente-e-pedro-preguica-tania-alexandre-martinelli",
    "title": "Valter Valente e Pedro Preguiça",
    "author": "Tânia Alexandre Martinelli",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Esses dois garotos, aparentemente tão diferentes , vão se esbarrar por aí . Oque será que vai acontecer depois desse encontro ?"
  },
  {
    "id": "ver-com-os-ouvidos-e-escutar-com-o-coracao-alexandre-camilo",
    "title": "Ver com os Ouvidos e Escutar com o Coração",
    "author": "Alexandre Camilo",
    "category": "Infantil",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A história emociona os leitores com a jornada de dalman: um menino alegre e inteligente, que apesar das dificuldades para ver o mundo, não desiste dos seus sonhos e mostra ás crianças de todas as idades que o reconhecimento do outro e a fraternidade são caminhos para um viver e conviver melhor. E a opcão por buscarmos esses caminhos não será o que traz felicidade á caminhada?"
  },
  {
    "id": "viagem-ao-centro-da-terra-julio-verne",
    "title": "Viagem ao Centro da Terra",
    "author": "Júlio Verne",
    "category": "Infantil",
    "collection": true,
    "publisher": "Scipione",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O professor lidenbrock, respeitado cientista alemão, encontrou um misterioso pergaminho em um livro antigo. Depois de decifrar a mensagem contida nesse importante documento, convocou seu sobrinho axel para realizar uma fantástica viagem ao centro da terra."
  },
  {
    "id": "voce-pode-escolher-regina-renno",
    "title": "Você Pode Escolher",
    "author": "Regina Rennó",
    "category": "Infantil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Fazer escolhas corretas, sem prejudicar o direito das outras pessoas, deve ser um exercício diário para vivermos bem em sociedade. Respeito ao próximo e autoconhecimento são as palavras-chave deste livro, que nos ajuda a pensar sobre a importância de entender a nossa vontade e equilibrá-la com a vontade dos outros."
  },
  {
    "id": "volta-ao-mundo-em-52-historias-neil-philip",
    "title": "Volta ao Mundo em 52 Histórias",
    "author": "Neil Philip",
    "category": "Infantil",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "LIVRE",
    "synopsis": "Há muitos anos e muitos séculos crianças do mundo inteiro ouvem histórias de príncipes encantados, obejetos mágicos, animais falantes, bruxas perversas e fada maravilhosas... Esse livro apresenta 52 dessas histórias"
  },
  {
    "id": "a-cor-da-fome-jonas-ribeiro",
    "title": "A Cor da Fome",
    "author": "Jonas Ribeiro",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O livro retrata algumas dificuldades ao longo da vida de algumas pessoas"
  },
  {
    "id": "101-mulheres-incriveis-que-transformaram-a-ciencia-claire-philip",
    "title": "101 Mulheres Incríveis que Transformaram a Ciência",
    "author": "Claire Philip",
    "category": "Juvenil",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Das mais célebres até as menos conhecidas, nos campos da química, medicina, engenharia, biologia, astrofísica e matemática"
  },
  {
    "id": "a-descoberta-jonas-ribeiro",
    "title": "A Descoberta",
    "author": "Jonas Ribeiro",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Cortez Editora",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Descubra !"
  },
  {
    "id": "a-floresta-misteriosa-coautoria",
    "title": "A Floresta Misteriosa",
    "author": "Coautoria",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O tema deste livro alerta para algo muito recorrente nos dias de hoje : as relações estabelecidas , na rede , com desconhecidos."
  },
  {
    "id": "a-formiga-aurelia-regina-machado",
    "title": "A Formiga Aurélia",
    "author": "Regina Machado",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma história de uma formiga que descobre o mundo"
  },
  {
    "id": "a-guerra-do-lanche-lourenco-cazarre",
    "title": "A Guerra do Lanche",
    "author": "Lourenço Cazarré",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "\"- sei quem roubou seu lanche. Depois conto quem foi. Em seguida essa voz se calou, pois o olhar do inspetor generoso, que percorria rápida e atentamente todas as filas, já se voltava para o nosso lado. Apesar das passadas dos que avançavam em direção às salas de aula, o ouvido afiadíssimo do bedel detectava qualquer conversa. Pernas bambas, subi pensando no malvado que me havia roubado o lanche. Quem seria? Meu estômago roncava.[...] \""
  },
  {
    "id": "a-historia-de-cada-um-juciara-rodrigues",
    "title": "A História de Cada um",
    "author": "Juciara Rodrigues",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Scipione",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Zé , pedro , guto , mariana e júlia estudavam numa escola bem legal. Um dia a professora pediu uma lição de casa diferente : os alunos deveriam levar uma foto da familía . No começo , as crianças ficaram um pouco confusas , mas logo descobriram coisas muito interessantes sobre a história de cada um ."
  },
  {
    "id": "a-jabota-poliglota-denilson-baniwa",
    "title": "A Jabota Poliglota",
    "author": "Denilson Baniwa",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Boitatá",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A floresta é grande. Nela vivem seres que falam diversas línguas. Para se habitar com todos os habitantes da mata e escapar das emboscadas da vida, nessa história uma jabota aventureira e matreira faz uso de certa esperteza línguistica"
  },
  {
    "id": "a-moedinha-que-queria-comprar-a-felicidade-nani",
    "title": "A Moedinha que Queria Comprar a Felicidade",
    "author": "Nani",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A moedinha sabia que as moedas são redondas e, por serem redondas, elas têm que circular. Só que a moedinha não sabia que ia circular tanto, por tantas mãos, tantos lugares, passando por tantas aventuras"
  },
  {
    "id": "a-pequena-sereia-telma-guimaraes",
    "title": "A Pequena Sereia",
    "author": "Telma Guimarães",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um clássico sobre a pequena sereia"
  },
  {
    "id": "a-professora-cuca-e-maluca-dan-gutman",
    "title": "A Professora Cuca É Maluca",
    "author": "Dan Gutman",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Alex detesta a escola , a professora não gosta de dar aula e o diretor josé teve a idéia mais maluca de todas , se todas as crianças lerem mais de 1 milhão de páginas de livros , ele vai tranformar a quadra em arena de video games! Venha se divertir também."
  },
  {
    "id": "atlas-infantil-da-cultura-do-brasil-coautoria",
    "title": "Atlas Infantil da Cultura do Brasil",
    "author": "Coautoria",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Pé da Letra",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Embarque em uma viagem de pratos típicos, festas, capitais e dados geográficos do brasil"
  },
  {
    "id": "avos-coautoria",
    "title": "Avós",
    "author": "Coautoria",
    "category": "Juvenil",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "A história começa em um dia de festa na praça, o avô muito empolgado, mas já a avó era muito tímida. Será que ela vai participar da festa?"
  },
  {
    "id": "barbie-um-natal-perfeito-fabiane-ariello",
    "title": "Barbie - um Natal Perfeito",
    "author": "Fabiane Ariello",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um natal simplesmente perfeito na casa da barbie!"
  },
  {
    "id": "cogumelos-do-entardecer-jonatas-tobias",
    "title": "Cogumelos do Entardecer",
    "author": "Jonatas Tobias",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Devir Livraria",
    "level": "LIVRE",
    "synopsis": "Knox e arroba são dois garotos normais (bem... Quase). Moradores da vila de aipo, e pequenos para a sua idade, ambos são constantemente perseguidos pelos rapazes mais velhos de sua vila. Cansados, eles descobrem uma maneira de crescer e ganhar poder rapidamente: comendo um dos lendários cogumelos mágicos. Diz a lenda que esses raríssimos cogumelos têm o poder de conceder um desejo para quem os comer. Então, knox e arroba decidem sair da sua pequena aldeia em busca deles."
  },
  {
    "id": "comecar-tudo-de-novo-fanny-abramovich",
    "title": "Começar Tudo de Novo ?!",
    "author": "Fanny Abramovich",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Atual Editora",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Este livro , conta a história de bruna , uma garota de 9 anos que muda de escola , de amigos , de paquera, muda quase tudo ...."
  },
  {
    "id": "conquista-esporte-clube-telma-guimaraes-castro-andrade",
    "title": "Conquista Esporte Clube",
    "author": "Telma Guimarães Castro Andrade",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Este livro apresenta um time de futebol bem diferente dos outros , formado por aqueles meninos que normalmente não são os escolhidos pelas equipes , mas que se dedicam tanto para superar ."
  },
  {
    "id": "de-cara-com-o-espelho-leonor-correa",
    "title": "De Cara com o Espelho",
    "author": "Leonor Corrêa",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "De cara com o espelho reflete a cobrança atual que existe sobre a própria imagem"
  },
  {
    "id": "de-onde-voce-veio-coautoria",
    "title": "De Onde Você Veio?",
    "author": "Coautoria",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Vivemos num país construído por gente de todo tipo. São pessoas de origens diferentes que moldaram a cara do brasil. Descubra nesse livro que as suas raízes são mais profundas que você imagina"
  },
  {
    "id": "estudio-de-danca-uma-nova-estrela-aurora-marsotto",
    "title": "Estúdio de Dança: uma Nova Estrela",
    "author": "Aurora Marsotto",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Viviane foi aprovada nos primeiros testes de admissão do estúdio de dança. Com isso, ela garantiu o direito de... Passar um mês inteiro de provas no internato da escola de teatro!"
  },
  {
    "id": "eu-os-outros-coautoria",
    "title": "Eu & os Outros",
    "author": "Coautoria",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um livro para melhorar as relações"
  },
  {
    "id": "eu-nao-sou-como-os-outros-janik-coat",
    "title": "Eu Não Sou Como os Outros",
    "author": "Janik Coat",
    "category": "Juvenil",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Gatos bebem leite. Aranhas são assustadoras. Morcegos dormem de ponta-cabeça. Certo? Nem sempre. A letícia, a antonieta, a dafne e os outros bichos desse livro mostram que cada um pode ser do jeito que quiser"
  },
  {
    "id": "fadas-pizzas-e-saladas-regina-carvalho",
    "title": "Fadas, Pizzas e Saladas",
    "author": "Regina Carvalho",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Atual Editora",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Alice é uma princesa diferente qu troca o sonho tradicional de conto de fadas pelo empreendedorismo ao se mudar para um castelo"
  },
  {
    "id": "fevereiro-coautoria",
    "title": "Fevereiro",
    "author": "Coautoria",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Globo",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma história para cada dia!"
  },
  {
    "id": "flicts-ziraldo",
    "title": "Flicts",
    "author": "Ziraldo",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Flicts é um livro sobre cores, visual e o estado de ser"
  },
  {
    "id": "flor-de-maio-maria-cristina-furtado",
    "title": "Flor de Maio",
    "author": "Maria Cristina Furtado",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma pequena borboleta está muito tempo infeliz , pois nasceu com um pedaço a menos em uma de suas e por isso não consegue voar."
  },
  {
    "id": "gandhi-a-arte-da-luta-jang-hyeon",
    "title": "Gandhi a Arte da Luta",
    "author": "Jang Hyeon",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Pallas",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Nascido na índia em 1869, mahatma gandhi é uma das figuras mais emblemáticas do século xx . Conhecido como '' pai da independência'' na índia , criou um método inédito de luta : contra a vilolência , utilizava a paz."
  },
  {
    "id": "historias-de-bichos-liev-tolstoi",
    "title": "Histórias de Bichos",
    "author": "Liev Tolstói",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "As belas ilustrações em aquarela enriquecem ainda mais a delicadeza e a força dessas reflexões sobre a vida animal e nossa conexão com ela"
  },
  {
    "id": "humano-de-estimacao-nani-garrido",
    "title": "Humano de Estimação",
    "author": "Nani Garrido",
    "category": "Juvenil",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Bóris e olga são um casal de cães que adotam um humano de estimação. Mas será que essa relação entre seres tão diferentes vai dar certo?"
  },
  {
    "id": "ideia-maluca-cecilia-vasconcellos",
    "title": "Idéia Maluca",
    "author": "Cecilia Vasconcellos",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Ediouro",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um livro de muita imaginção."
  },
  {
    "id": "irmas-de-pelucia-andrea-del-fuego",
    "title": "Irmãs de Pelúcia",
    "author": "Andréa Del Fuego.",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Scipione",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Sapoti e jabuti são duas cadelas de pelos tão macios que até parecem pelúcia. Elas vivem felizes e mimadas por galeno da ilha, dono do sítio santa seiva, um lugar repleto de plantas e curiosos animais. A tranquilidade das duas irmãs acaba quando um pintinho e um filhote de gato são encontrados mortos. Por terem instintos predadores, as pelúcias são consideradas culpadas pelas mortes e colocadas de castigo. Para provar sua inocência e recuperar a boa-vida, elas resolvem ivestigar e descobrir o verdadeiro responsável pelos misteriosos crimes."
  },
  {
    "id": "joao-pobre-joao-luis-diaz",
    "title": "João , Pobre João",
    "author": "Luis Díaz",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Formato",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um pastor muito pobre , bom e puro , apaixona-se por uma princesa que julga inatingível."
  },
  {
    "id": "ju-o-menino-de-jupiter-o-maior-menino-do-mundo-ziraldo",
    "title": "Ju, o Menino de Júpiter: o Maior Menino do Mundo",
    "author": "Ziraldo",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "LIVRE",
    "synopsis": "Antes de aprender a ler, ziraldo desenhava. E veio desenhando pela vida a fora; tanto que encheu gavetas com seus desenhos"
  },
  {
    "id": "luna-e-seu-jeito-estiloso-maria-fernanda-goncalves",
    "title": "Luna e Seu Jeito Estiloso",
    "author": "Maria Fernanda Gonçalves",
    "category": "Juvenil",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Esse livro aborda a representatividade e valorização das pessoas gordas e como podem ser felizes quando se aceitam"
  },
  {
    "id": "mano-descobre-a-paz-heloisa-prieto",
    "title": "Mano Descobre a Paz",
    "author": "Heloisa Prieto",
    "category": "Juvenil",
    "collection": true,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Duas novas pessoas entram na classe de mano: samir e sofia. Sofia é judia, inteligente e meiga. Samir, ousado e atraente, é filho de milionários árabes. De repente, mano descobre que oscar, seu melhor amigo, está perdidamente apaixonado por sofia. O problema é que samir também cai de amores poe ela. Será que oscar viverá um amor impossível? Mas impossível mesmo se torna o atque terrorista que derruba as torres gêmeas em nova york e a família dele decide escondê-lo num lugar secreto. O afeto ignorando as diferenças, a guerra invadindo o cotidiano dos jovens e o impacto do primeiro amor despertam em mano o desejo de descobrir o caminho da paz."
  },
  {
    "id": "mano-descobre-a-solidariedade-heloisa-prieto",
    "title": "Mano Descobre a Solidariedade",
    "author": "Heloisa Prieto",
    "category": "Juvenil",
    "collection": true,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Coisas estranhas estão acontecendo na escola onde mano estuda. A quadra é depredada, grupos se reúnem para brigar e ele sabe que precisa tomar alguma atitude de que lado ficar? É preciso ser violento? Questões fundamentais, como a solidariedade nos momentos difíceis, a aceitação de quem é diferente e a defesa da verdadeira amizade, numa história contada em ritmo vibrante."
  },
  {
    "id": "metade-e-verdade-o-resto-e-invencao-pedro-antonio-de-oliveira",
    "title": "Metade É Verdade, o Resto É Invenção",
    "author": "Pedro Antônio de Oliveira",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Formato",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um menino toma banho de chuva, voa em um balão, cria uma tartaruga, passeia na maria-fumaça, anda na bicicleta com motor que o primo inventou, brinca com a garotada da vizinhança e faz muitas outras coisas divertidas. Se você nunca fez nada disso, não tem problema: vai se deliciar enquanto lê estas crônicas do cotidiano."
  },
  {
    "id": "naruto-a-verdadeira-historia-de-itachi-uma-luz-resplandecente-takashi-yano",
    "title": "Naruto: a Verdadeira História de Itachi: uma Luz Resplandecente",
    "author": "Takashi Yano",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Panini",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O prodígio do clan uchiha desenvolve uma visão única sobre a vida, a morte e o verdadeiro significado de ser um shinobi"
  },
  {
    "id": "o-amigo-de-castro-alves-moacyr-scliar",
    "title": "O Amigo de Castro Alves",
    "author": "Moacyr Scliar",
    "category": "Juvenil",
    "collection": true,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "\"a praça é do povo, como o céu é do condor.\" o famoso verso de castro alves pode ser tomado como emblema da obra de um escritor que lutou com palvras por um mundo mais justo. Aqui você vai conhecer os principais momentos de sua curta vida: a infância e a adolescência na bahia, as aulas na faculdade de direito do recife, a adesão à causa abolicionista, o teatro, os amores, o acidente mutilante, a agonia final. Verá também como é grande a distância entre o céu da ´poesia e a realidade histórica, acompanhando o desenvolvimento da amizade entre castro alves e tião, um escravo sem \"direito à praça\", ciente de que o caminho para a liberdade não se faz apenas com versos."
  },
  {
    "id": "o-corcunda-de-notre-dame-angeala-muller-de-toledo",
    "title": "O Corcunda de Notre Dame",
    "author": "Angeala Muller de Toledo",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Folha de S. Paulo",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Estamos em paris , frança , no século 15. Do alto de uma das torres da catedral de notre dame , uma criatura assustadora olha a paisagem , é quasímodo , um homem , manco e caolho , que tem uma enorme corcunda nas costas."
  },
  {
    "id": "o-livro-dos-herois-para-criancas-fernanda-costa-e-silva",
    "title": "O Livro dos Heróis para Crianças",
    "author": "Fernanda Costa e Silva",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Nova Fronteira",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Quando eu era menino, os adultos que eu conhecia se preocuparam em me ajudar a encontrar alguns heróis. A pricípio, as pessoas que eu mais admirava não eram aquelas que eu conhecia pessoalmente, mas personalidades que, no entanto, poossuíam algumas qualidades de excelência humana pelas quais vale a pena esforçar-se: jogadores de beisebol e futebol americano que perseveraram dentro e fora do campo, famosos exploradores das páginas da história que ousaram enfrentar o desconhecido, caubóis dos filmes de hollywood que cavalgavam obstinadamente e defendiam o que merecia ser amado e protegido. À medida que fui crescendo, percebi que heóis também podiam ser encontados mais perto do que se imagina..."
  },
  {
    "id": "o-medinho-e-o-medo-lucina-maria-marinho-passos",
    "title": "O Medinho e o Medo",
    "author": "Lucina Maria Marinho Passos",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Scipione",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "João romão é um garoto que gosta de assustar as pessoas. O que ele não sabe é que tião , seu macaco , também aprendeu a fazer maldades.... Ennquanto os dois aprontam , também ensinam palavras com ão"
  },
  {
    "id": "o-menino-da-lua-ziraldo",
    "title": "O Menino da Lua",
    "author": "Ziraldo",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Nesse livro, ziraldo cria um mundo a parte, com personagens que brincam - de tudo que as crianças já brincaram - entre estrelas e planetas."
  },
  {
    "id": "o-primeiro-dia-de-inverno-marcia-kupstas",
    "title": "O Primeiro Dia de Inverno",
    "author": "Marcia Kupstas",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "À medida que tentam investigar o mistério, eles são confrontados com suas próprias inseguranças, dilemas de amizade e a necessidade de tomarem decisões importantes"
  },
  {
    "id": "o-que-fazer-liliana-iacocca-e-michele-iacocca",
    "title": "O que Fazer ?",
    "author": "Liliana Iacocca e Michele Iacocca",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "De uma forma divertida , você vai refletir sobre : a vida do homem , as ideias de pensadores , as complicaçṍes da vida moderna."
  },
  {
    "id": "o-segredo-do-violinista-eva-furnari",
    "title": "O Segredo do Violinista",
    "author": "Eva Furnari",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "É época de copa do mundo. Beto e miguel estão entusiasmados. No prédio onde moram ocorrem pequenos furtos, mas quando some a bola de futebol a coisa fica séria. Eles suspeitam do vizinho, um estranho violinista. E, juntamente se metem em grandes encrencas para desvendar esse mistério."
  },
  {
    "id": "o-sertao-vai-virar-mar-moacyr-scliar",
    "title": "O Sertão Vai Virar Mar",
    "author": "Moacyr Scliar",
    "category": "Juvenil",
    "collection": true,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Gui e seus amigos estão empolgados com a leitura de os sertões e, ao mesmo tempo, impressionados com a guerra de canudos, relatada por euclides da cunha: mais de 5 mil soldados mortos e o massacre de uma cidade inteira, cuja população foi estimada em 25 mil habitantes. O que não esperavam porém, era o que agora acontecia: cerca de um século depois, na cidade onde moram, surge um novo beato, atraindo uma multidão de fanáticos contra os poderosos da região. Estaria a história se repetindo? Poderia a tragédia de canudos acontecer também ali? É o que você irá descobrir nesta história repleta de suspense e emoção."
  },
  {
    "id": "o-trem-da-amizade-wolfgang-slawski",
    "title": "O Trem da Amizade",
    "author": "Wolfgang Slawski",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Brinque-book",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Todos os dias, durante o dia inteiro, artur aguarda na estação de trem, com a esperança de que um dia alguém venha visitá-lo, ma ninguém nunca vem. Então ele decidi pegar um trem, será que ele vai fazer amigos?"
  },
  {
    "id": "onde-andara-alegria-miriam-portela",
    "title": "Onde Andará Alegria?",
    "author": "Miriam Portela",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "É uma fábula sobre pequenas coisas que deixamos de ver, de sentir, de celebrar e que só nos dams conta, quando as perdemos"
  },
  {
    "id": "os-bolos-gigantes-jonas-ribeiro",
    "title": "Os Bolos Gigantes",
    "author": "Jonas Ribeiro",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Toda familía tem suas tradições , seus hábitos. A desta hstória gosta de praticar o bem fazendo bolos enormes que chegam a muitas pessoas , saciando toda a sua fome."
  },
  {
    "id": "os-corvos-de-pearblossom-luiz-antonio-aguiar",
    "title": "Os Corvos de Pearblossom",
    "author": "Luiz Antonio Aguiar",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Record",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Toda vez que a sra. Corvo sai para fazer compras, seus ovos são devorados por uma serpente gulosa! Conseguirão o sr. Corvo e seu amigo sr. Coruja encontrar uma maneira de salvar os preciosos ovos?"
  },
  {
    "id": "os-miseraveis-walcyr-carrasco",
    "title": "Os Miseráveis",
    "author": "Walcyr Carrasco",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Após cumprir pena de trabalhos forçados por quase vinte anos, jean valjean é posto em liberdade. Seu coração está cheio de ódio e rancor: pela injustiça que sofrera, pela família perdida após tantos anos, pelos sofrimentos passados, pela vida que teria pela frente como um ex-forçado das galés. Errante, sem se aceito em nenhum lugar, encontra abrigo na casa do bispo, que lhe oferece comida e pouso. Mas a amargura e a revolta que traz no coração fazem com que jean valjean não reconheça a generosidade recebida. Pelo contrário, rouba as pratarias pertencentes ao bispo! A partir desse acontecimento, jean valjean vai descobrir uma fé que julgava morta dentro dele, e que qualidades que também desconhecia haver em si próprio. A luta do bem contra o mal."
  },
  {
    "id": "pao-e-circo-leo-cunha-e-andre-salles-coelho",
    "title": "Pão e Circo",
    "author": "Leo Cunha e André Salles- Coelho",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Atual Editora",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Esta é a história de digo e tetê , se você não conhece , venha conhecer"
  },
  {
    "id": "papai-e-meu-ilan-brenman",
    "title": "Papai É Meu !",
    "author": "Ilan Brenman",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": ""
  },
  {
    "id": "pedro-vira-porco-espinho-janaina-tokitaka",
    "title": "Pedro Vira Porco - Espinho",
    "author": "Janaina Tokitaka",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Jujuba",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Já pensou se , de mansinho você virasse um porco - espinho ?"
  },
  {
    "id": "pense-bem-coautoria",
    "title": "Pense Bem",
    "author": "Coautoria",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Abril S.a",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Você, por acaso, já pensou o que é pensar?"
  },
  {
    "id": "piadas-para-rachar-o-bico-coautoria",
    "title": "Piadas para Rachar o Bico",
    "author": "Coautoria",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O livro traz trocadilhos engraçados com animais, situações malucas da escola, charadas inteligentes e piadas curtas perfeitas para a criançada memorizar, contar na hora do recreio e garantir boas risadas com a turma"
  },
  {
    "id": "que-historia-e-essa-flavio-de-souza",
    "title": "Que História É Essa ?",
    "author": "Flavio de Souza",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "E se você soubesse que esse dragão, além de outros personagens , faz parte de histórias muito conhecidas , só que estão contadas neste livro de uma maneira completamente diferente, de um jeito que você nunca viu ? Ficaria com muita vontade de ler este livro ?"
  },
  {
    "id": "rima-ou-combina-marta-lagarta",
    "title": "Rima Ou Combina?",
    "author": "Marta Lagarta",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Neste livro, poesia rima e combina com fantasia. A combinação explora ritmos, rimas e brincadeiras com os sons e os sentidos das palavras"
  },
  {
    "id": "romeu-e-julieta-barbara-kindermann",
    "title": "Romeu e Julieta",
    "author": "Barbara Kindermann",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Companhia Editora Nacional",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Romeu e julieta, de william shakespeare, é provavelmente a mais conhecida história de amor de todos os tempos. Ela se passa na itália e conta sobre duas familias ricas e rivais que viviam em conflito: os capuleto e os montecchio. Até que julieta, filha dos capuleto, e romeu, jovem montecchio, apaixonam-se perdidamente..."
  },
  {
    "id": "rosita-maria-antonia-martins-da-silva-ana-terra",
    "title": "Rosita Maria Antonia Martins da Silva",
    "author": "Ana Terra",
    "category": "Juvenil",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "São tantos nomes, tantas possibilidades que rosita, aquela do nome enorme deste livro, quase fica doida pra escapar dos seus próprios desejos! Só lendo para descobrir..."
  },
  {
    "id": "sem-acucar-com-afeto-telma-guimaraes-castro-andrade-2",
    "title": "Sem Açucar , com Afeto",
    "author": "Telma Guimarães Castro Andrade",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Conta a história de clara e paula , duas vizinhas que descobrem que a amizade e o respeito são os melhores remédios contra prejulgamento e diferenças."
  },
  {
    "id": "sem-magia-pura-energia-patricia-engel-secco",
    "title": "Sem Magia , Pura Energia",
    "author": "Patrícia Engel Secco",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Boa Companhia",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Em meio á agitação de nutrimetrópole , uma das cidades mais importantes do reino da boa saúde , viviam três fadas: constrança, a fada vermelha, regulamentada, a fada verde, e energilda, a fada amarela. As três fadas eram responsáveis pelo valor nutricional dos alimentos do mundo e trabalhavam duro para, por meio dos sonhos, explicar ás crianças a importância de uma alimentação sadia."
  },
  {
    "id": "turma-da-monica-jovem-mudando-o-jogo-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Mudando o Jogo",
    "author": "Mauricio de Sousa",
    "category": "Juvenil",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um incrível torneio de games, chacoalha o bairro do limoeiro, duas festas rivalizam, a atenção da turma na noite em que a superlua aparece e o misterioso rei dos trolls faz ataques virtuais a todos os amigos da turma e eles tentam descobrir quem está por trás disso!"
  },
  {
    "id": "um-garoto-chamado-rorbeto-gabriel-pensador",
    "title": "Um Garoto Chamado Rorbeto",
    "author": "Gabriel Pensador",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Cosacnaify",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A obra trata com leveza, humor e poesia temas fundamentais com autoaceitação, empatia, respeito às diferenças inividuais e o valor da amizade"
  },
  {
    "id": "um-pai-de-verdade-pedro-bloch",
    "title": "Um Pai de Verdade",
    "author": "Pedro Bloch",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Com sutileza e sensibilidade , o autor trabalha temas polêmicos - como drogas , a riqueza e a honestidade , a indiferença com a dor alheia e o drama do filho que não conhece o pai."
  },
  {
    "id": "vida-de-cachorro-flavio-de-souza",
    "title": "Vida de Cachorro",
    "author": "Flavio de Souza",
    "category": "Juvenil",
    "collection": false,
    "publisher": "Formato",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Cansado da falta de atenção da família para com seus problemas, pedro, um menino de 8 anos resolve se transformar em cachorro para ter a atenção da família"
  },
  {
    "id": "a-droga-da-obediencia-pedro-bandeira",
    "title": "A Droga da Obediência",
    "author": "Pedro Bandeira",
    "category": "Literatura Brasileira",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Num clima de muito mistério e suspense, cinco estudantes - os karas - enfrentam uma macabra trama internacional: o sinistro doutor q.i pretende sublulgar a humanidade aos seus desígnios, aplicando na juventude uma perigosa droga! E essa droga já está sendo experimentada em alunos os melhores colégios de são paulo."
  },
  {
    "id": "a-cor-do-invisivel-mario-quintana",
    "title": "A Cor do Invisível",
    "author": "Mario Quintana",
    "category": "Poesia",
    "collection": false,
    "publisher": "Alfaguara",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro convida o leitor s enxergar além do óbvio, encontrando a beleza invisivel que habita a rotina e os pequenos detalhes da vida"
  },
  {
    "id": "a-escadaria-mirian-monte",
    "title": "A Escadaria",
    "author": "Mírian Monte",
    "category": "Poesia",
    "collection": false,
    "publisher": "Gogo da Ema",
    "level": "EM - Ensino Médio",
    "synopsis": "Nas páginas deste livro, o leitor perceberá a vida que se movimenta e as suas manifestações mais belas,que não escapam aos olhos zuis da autora."
  },
  {
    "id": "a-mulher-do-frankstem-maria-amalia-camargo",
    "title": "A Mulher do Frankstem",
    "author": "Maria Amália Camargo",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "A obra brinca com trava-línguas, rimas e trocadilhos, estimulando a imaginação e acriatividade das crianças enquanto descontrói monstros com muita leveza"
  },
  {
    "id": "alagoanas-mirian-monte",
    "title": "Alagoanas",
    "author": "Mírian Monte",
    "category": "Poesia",
    "collection": false,
    "publisher": "Delicatta",
    "level": "EM - Ensino Médio",
    "synopsis": "Tratam de cultura, empoderamento feminino, regionalismo e poesia existencial"
  },
  {
    "id": "alma-de-barro-raoni-cusma-de-paula",
    "title": "Alma de Barro",
    "author": "Raoni Cusma de Paula",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro utiliza metafóra do barro para explorar a condição humana, a moldagem do ser e a fragilidade da vida"
  },
  {
    "id": "amigos-do-peito-claudio-thebas",
    "title": "Amigos do Peito",
    "author": "Cláudio Thebas",
    "category": "Poesia",
    "collection": false,
    "publisher": "Formato",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Os poemas desse livro mostram, que de um jeito divertido, o que acontece na vida de um pequeno durante o dia inteiro"
  },
  {
    "id": "anuncios-amorosos-dos-bichos-almir-correia",
    "title": "Anúncios Amorosos dos Bichos",
    "author": "Almir Correia",
    "category": "Poesia",
    "collection": false,
    "publisher": "Biruta",
    "level": "LIVRE",
    "synopsis": "Que os poemas voem além das rimas, deslizem no arco-íris dos sonhos, e mergulhem no pote de ouro das brincadeiras mais saborosas"
  },
  {
    "id": "aquecimento-global-nao-da-rima-com-legal-cesar-obeid",
    "title": "Aquecimento Global Não Dá Rima com Legal",
    "author": "César Obeid",
    "category": "Poesia",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Neste livro você vai conhecer, de uma maneira bem diferente, o tema do aquecimento global"
  },
  {
    "id": "arca-de-noe-vinicius-de-moraes",
    "title": "Arca de Noé",
    "author": "Vinicius de Moraes",
    "category": "Poesia",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Arca de noé em formato de poesia"
  },
  {
    "id": "boa-companhia-coautoria",
    "title": "Boa Companhia",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "O leitor tem nas mãos uma primorosa antologia de poetas brasileiros que desde o ínicio de século xx adotaram."
  },
  {
    "id": "caderno-de-rimas-de-joao-lazaro-ramos",
    "title": "Caderno de Rimas de João",
    "author": "Lázaro Ramos",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "João escolheu fazer um caderno a sua maneira. Quem leu primeiro perguntou: isso ai não é besteira? E joão respondeu: criei um jeito de fazer isso aqui mais divertido. Entender algumas coisas de um modo colorido"
  },
  {
    "id": "caderno-veloz-ricardo-azevedo",
    "title": "Caderno Veloz",
    "author": "Ricardo Azevedo",
    "category": "Poesia",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Anotações, perguntas, caminhos e veredas que, pelo desvio, formam quem somos"
  },
  {
    "id": "caminho-da-poesia-coautoria",
    "title": "Caminho da Poesia",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Global",
    "level": "LIVRE",
    "synopsis": "Cada texto convida o pequeno leitor a brincar com as palavras enquanto aborda temas do cotidiano, animais, natureza e afetos, servindo como uma porta de entrada leve e encantadora para os grandes mestres da poesia em língua portuguesa"
  },
  {
    "id": "canto-geral-pablo-neruda",
    "title": "Canto Geral",
    "author": "Pablo Neruda",
    "category": "Poesia",
    "collection": false,
    "publisher": "L&pm",
    "level": "EM - Ensino Médio",
    "synopsis": "É uma ode apaixonada ao povo latino-americano, à justiça social e à forç da terra"
  },
  {
    "id": "cecilia-meireles-maria-fernanda",
    "title": "Cecília Meireles",
    "author": "Maria Fernanda",
    "category": "Poesia",
    "collection": false,
    "publisher": "Global",
    "level": "EM - Ensino Médio",
    "synopsis": "Nos seus versos se verifica mais uma vez que nunca o esmero da técnica,entendida como a informadora e não simples."
  },
  {
    "id": "cem-sonetos-de-amor-pablo-neruba",
    "title": "Cem Sonetos de Amor",
    "author": "Pablo Neruba",
    "category": "Poesia",
    "collection": false,
    "publisher": "L&pm",
    "level": "EM - Ensino Médio",
    "synopsis": "Seus poemas de amor e estes cem sonetos de amor são um dos seus legados mais perfeitos e emocionaram várias gerações."
  },
  {
    "id": "choro-e-choradeira-risos-e-risadas-tatiana-belinky",
    "title": "Choro e Choradeira, Risos e Risadas",
    "author": "Tatiana Belinky",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "De forma leve e acolhedora, a autora mostra as crianças que tanto o riso e o choro têm diferentes tipos, motivações e intenções"
  },
  {
    "id": "coletania-literaria-coautoria",
    "title": "Coletânia Literária",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": ""
  },
  {
    "id": "coracao-granada-joao-doederlein",
    "title": "Coração-granada",
    "author": "João Doederlein",
    "category": "Poesia",
    "collection": false,
    "publisher": "Paralela",
    "level": "EM - Ensino Médio",
    "synopsis": "Nele,o jovem escritor fala de paixões,de crises de ansiedade e da relação entre ambas,com a mesma delicadeza que transformou a sua obra de estreia."
  },
  {
    "id": "cores-da-amazonia-coautoria",
    "title": "Cores da Amazônia",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Cores da amazônia, frutas e bichos da floresta"
  },
  {
    "id": "cronicas-escolhidas-lima-barreto",
    "title": "Crônicas Escolhidas",
    "author": "Lima Barreto",
    "category": "Poesia",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EM - Ensino Médio",
    "synopsis": "Reúne textos jornalísticos e literários publicados pelo autor no ínicio do séulo xx em jornais e revistas da época"
  },
  {
    "id": "dez-contos-a-vista-e-poemas-com-juros-de-amor-giovana-neves",
    "title": "Dez Contos Á Vista e Poemas com Juros de Amor",
    "author": "Giovana Neves",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Foi escrito com o propósito de incentivar novos talentos da escrita a produzirem textos"
  },
  {
    "id": "dona-felicidade-nestor-tangerini",
    "title": "Dona Felicidade",
    "author": "Nestor Tangerini",
    "category": "Poesia",
    "collection": false,
    "publisher": "Autografia",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro contém sonetos e letras de músicas"
  },
  {
    "id": "escrever-sonhar-interpretar-coautoria",
    "title": "Escrever, Sonhar, Interpretar.",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": ""
  },
  {
    "id": "eu-e-outras-poesias-augusto-dos-anjos",
    "title": "Eu e Outras Poesias",
    "author": "Augusto dos Anjos",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Augusto dos anjos tranformou pessimismo em poesia. Uma das manifestações poeticas mais belas e autênticas da língua portuguesa"
  },
  {
    "id": "exposicao-de-arte-efemera-salem-abu-jomhour",
    "title": "Exposição de Arte Efêmera",
    "author": "Salem Abu Jomhour",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Poesias"
  },
  {
    "id": "felicidade-brasileira-marcio-ricardo",
    "title": "Felicidade Brasileira",
    "author": "Marcio Ricardo",
    "category": "Poesia",
    "collection": false,
    "publisher": "Filoczar",
    "level": "EM - Ensino Médio",
    "synopsis": "Sua poesia surge das brincadeiras com a rima da infância,durante os vários momentos do dia, tornando belo o cotidiano."
  },
  {
    "id": "fernando-pessoa-antologia-poetica-douglas-tufano",
    "title": "Fernando Pessoa: Antologia Poética",
    "author": "Douglas Tufano",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Poesias de fernando pessoa"
  },
  {
    "id": "gregorio-de-matos-douglas-tufano",
    "title": "Gregório de Matos",
    "author": "Douglas Tufano",
    "category": "Poesia",
    "collection": false,
    "publisher": "Moderna",
    "level": "EM - Ensino Médio",
    "synopsis": "Neste livro, os jovens leitores são apresentados ao estilo barroco e á obra poética de gregório de matos."
  },
  {
    "id": "hoje-e-sempre-helena-fraga",
    "title": "Hoje e Sempre",
    "author": "Helena Fraga",
    "category": "Poesia",
    "collection": false,
    "publisher": "Delicatta",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "A poesia da helena define-se por si só.em todas elas,vejo a mesma helena vibrante,instigante, misteriosa,surpreendente"
  },
  {
    "id": "iv-feira-multidisciplinar-500-anos-de-brasil-coautoria",
    "title": "Iv Feira Multidisciplinar - \"500 Anos de Brasil\"",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Nesta ocasião homenageamos em nossa iv feira multidiscplinar os \"500 anos de brasil\" e os 18 anos de novomundo achamos oportuno expormos orgulhosamente os frutos de nossa semeadura"
  },
  {
    "id": "lima-barretodou-douglas-tufano",
    "title": "Lima Barretodou",
    "author": "Douglas Tufano",
    "category": "Poesia",
    "collection": false,
    "publisher": "Moderna",
    "level": "EM - Ensino Médio",
    "synopsis": "Neste livro os leitores são apresentados á obra de um dos nomes mais importantes da literatura brasileira, lima barreto"
  },
  {
    "id": "linhas-pares-claudia-quintana",
    "title": "Linhas Pares",
    "author": "Claudia Quintana",
    "category": "Poesia",
    "collection": false,
    "publisher": "Scortecci Editora",
    "level": "EM - Ensino Médio",
    "synopsis": "Mas existem palavras que transformam de tal forma,que a pele troca e nós nunca mais seremos s mesmos depois de sermos tocados por estas letras."
  },
  {
    "id": "literatura-comentada-luis-vaz-de-camoes",
    "title": "Literatura Comentada",
    "author": "Luís Vaz de Camões",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Com uma estrutura eminentemente didática, a obra enriquece a leitura dos textos originais com uma biografia do autor, panorama do contexto histórico-cultural do renascimento, análises estilísticas e exercícios de compreensão textual"
  },
  {
    "id": "mario-de-andrade-poesia-conto-cronica-romance-douglas-tufano",
    "title": "Mário de Andrade: Poesia - Conto - Crônica - Romance",
    "author": "Douglas Tufano",
    "category": "Poesia",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro é uma porta de entrada perfeita para compreender o espírito de inovação, a valorização cultural nacional e a pluralidade da linguagem do escritor paulistano"
  },
  {
    "id": "minha-pasargada-rosinha",
    "title": "Minha Pasárgada",
    "author": "Rosinha",
    "category": "Poesia",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EM - Ensino Médio",
    "synopsis": "A autora rosinha estabelece um dialógo afetivo com a obra imortal de manuel bandeira"
  },
  {
    "id": "na-mira-nego-panda",
    "title": "Na Mira",
    "author": "Nego Panda",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Poesias"
  },
  {
    "id": "nariz-de-vinho-mario-quintana",
    "title": "Nariz de Vinho",
    "author": "Mario Quintana",
    "category": "Poesia",
    "collection": false,
    "publisher": "Moderna",
    "level": "EM - Ensino Médio",
    "synopsis": "O mundo poético deste livro é feito de ternura,melancolia,lirismo,nostalgia da infância e um humor irônico transparente."
  },
  {
    "id": "nova-antologia-poetica-mario-quintana",
    "title": "Nova Antologia Poética",
    "author": "Mario Quintana",
    "category": "Poesia",
    "collection": false,
    "publisher": "Globo",
    "level": "EM - Ensino Médio",
    "synopsis": "A antologia cobre as variadas formas poéticas cultivadas pelo autor - desde o sonetos tradicionas e versos livres até suas prosas"
  },
  {
    "id": "o-decifrador-de-poemas-coautoria",
    "title": "O Decifrador de Poemas",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O livro desperta a curiosidade e o gosto pela poesia de maneira leve e envolvente"
  },
  {
    "id": "o-menino-azul-cecilia-meireles",
    "title": "O Menino Azul",
    "author": "Cecilia Meireles",
    "category": "Poesia",
    "collection": false,
    "publisher": "Global",
    "level": "LIVRE",
    "synopsis": "Ter um bichinho é o sonho de quase toda criança, e não é diferente com o menino desse oema de cecília meireles. Ele quer um burrinho para ser seu amigo de todas as horas e que o acompanhe na descoberta do mundo"
  },
  {
    "id": "o-menino-poeta-henrique-lisboa",
    "title": "O Menino Poeta",
    "author": "Henrique Lisboa",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O livro desperta a imaginação e a sensibilidade dos leitores mais jovens para a beleza das coisas simples"
  },
  {
    "id": "o-pinguim-e-outros-poemas-habib-al-sayegh",
    "title": "O Pinguim e Outros Poemas",
    "author": "Habib Al-sayegh",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Poesias"
  },
  {
    "id": "ode-ao-vento-oeste-e-outros-poemas-p-b-shelley",
    "title": "Ode ao Vento Oeste e Outros Poemas",
    "author": "P.b. Shelley",
    "category": "Poesia",
    "collection": false,
    "publisher": "Hedra",
    "level": "EM - Ensino Médio",
    "synopsis": "O poema é uma invocação em cinco partes ao poder indomável da natureza"
  },
  {
    "id": "ode-sobre-a-melancolia-e-outros-poemas-keats",
    "title": "Ode Sobre a Melancolia e Outros Poemas",
    "author": "Keats",
    "category": "Poesia",
    "collection": false,
    "publisher": "Hedra",
    "level": "EM - Ensino Médio",
    "synopsis": "É uma síntese da genialidade de john keats. O livro mostra que a tristeza não é o oposto da felicidade, mas o seu reflexo inevitável: quanto mais intensamente vivemos a beleza do mundo, mais profundamente sentimos a dor de sua natureza passageira"
  },
  {
    "id": "odisseias-poeticas-alberto-dos-anjos-costa",
    "title": "Odisséias Poéticas",
    "author": "Alberto dos Anjos Costa",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Através de versos livre e líricos, alberto dos anjos costa aborda temas cotidianos, amor, descobertas e a busca pelo sentido da vida, construindo pontes entre a sensibilidade artística e as reflexões sobre a nossa própria existência"
  },
  {
    "id": "palavras-de-encantamento-coautoria",
    "title": "Palavras de Encantamento",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "A poesia nasce de um olhar especial que o poeta divide com seus leitores através do poema e cada poema inventa um mundo,onde leitor entra pela mão do poeta."
  },
  {
    "id": "poema-seletos-dr-shihab-ghanem",
    "title": "Poema Seletos",
    "author": "Dr. Shihab Ghanem",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Poesias"
  },
  {
    "id": "poemas-da-meia-noite-hussein-darwish",
    "title": "Poemas da Meia-noite",
    "author": "Hussein Darwish",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Poesias"
  },
  {
    "id": "poemas-escolhidos-de-gregorio-de-matos-coautoria",
    "title": "Poemas Escolhidos de Gregório de Matos",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "Trata-se de uma obra de leitura para compreender as raízes e as cotradições do barroco no brasil"
  },
  {
    "id": "poemas-fabulosos-coautoria",
    "title": "Poemas Fabulosos",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Nelpa",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Poesias"
  },
  {
    "id": "poemas-problemas-renata-bueno",
    "title": "Poemas Problemas",
    "author": "Renata Bueno",
    "category": "Poesia",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Poemas que são problemas? Problemas em forma de poema? Neste livro, poesia e matemática se unem e transformam-se em enigmas divertidos e cheios de coloridas rimas. Ja sabe qual é a resposta?"
  },
  {
    "id": "poemas-que-escolhi-para-criancas-ruth-rocha",
    "title": "Poemas que Escolhi para Crianças",
    "author": "Ruth Rocha",
    "category": "Poesia",
    "collection": false,
    "publisher": "Salamandra",
    "level": "LIVRE",
    "synopsis": "Este livro é um verdadeiro presente para crianças: uma coletânea de obras de poetas brasileiros de várias épocas"
  },
  {
    "id": "poemas-contos-e-cronicas-coautoria",
    "title": "Poemas,contos e Crônicas",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Perse",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro e seu correspondente ebook apresentam os trabalhos selecionados do 3º concurso literário da amlac"
  },
  {
    "id": "poeminhas-da-terra-marcia-leite-e-tatiana-moes",
    "title": "Poeminhas da Terra",
    "author": "Márcia Leite e Tatiana Móes",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Os versos curtos e com palavras de origem tupi,associados ás poéticas ilustraçṍes de cenas que evocam uma profunda harmonia entre os seres e a natureza."
  },
  {
    "id": "poesia-br-sergio-cohn",
    "title": "Poesia Br",
    "author": "Sergio Cohn",
    "category": "Poesia",
    "collection": true,
    "publisher": "Azougue Editorial",
    "level": "EM - Ensino Médio",
    "synopsis": "Poesias de 1960"
  },
  {
    "id": "poesia-br-cantos-amerindios-sergio-cohn",
    "title": "Poesia Br Cantos Ameríndios",
    "author": "Sergio Cohn",
    "category": "Poesia",
    "collection": true,
    "publisher": "Azougue Editorial",
    "level": "EM - Ensino Médio",
    "synopsis": "Poesias ameríndios."
  },
  {
    "id": "poesia-completa-e-poesia-murilo-mendes",
    "title": "Poesia Completa e Poesia",
    "author": "Murilo Mendes",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Diversas poesias"
  },
  {
    "id": "poesia-fora-da-estante-coautoria",
    "title": "Poesia Fora da Estante",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Abordando temas próximos ao cotidiano juvenil, como sentimentos, descobertas, natureza e fantasia, a obra incentiva o gosto pela leitura poética e estimula a sensibilidade artística dentro e fora da sala de aula"
  },
  {
    "id": "poesia-na-varanda-sonia-junqueira",
    "title": "Poesia na Varanda",
    "author": "Sonia Junqueira",
    "category": "Poesia",
    "collection": false,
    "publisher": "Autentica",
    "level": "LIVRE",
    "synopsis": "De repente, a poesia toma conta de nós: brota, passa, entra, grita, brilha... E vai embora. Para onde? Será que ela volta? Quando? E por onde vai passar?"
  },
  {
    "id": "poesia-para-criancas-cinco-sentidos-angela-finzetto",
    "title": "Poesia para Crianças: Cinco Sentidos",
    "author": "Ângela Finzetto",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O livro retrata os sentidos de uma forma divertida para crianças"
  },
  {
    "id": "pula-boi-marilda-castanha",
    "title": "Pula, Boi!",
    "author": "Marilda Castanha",
    "category": "Poesia",
    "collection": false,
    "publisher": "Scipione",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Para conhecer os segredos da festa boi-bumbá, uma garotinha alegre e curiosa aceita acompanhar o próprio boi nos preparativos do evento"
  },
  {
    "id": "ribeirinhas-isidoro-de-jesus-leite",
    "title": "Ribeirinhas",
    "author": "Isidoro de Jesus Leite",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Poesias"
  },
  {
    "id": "sentimento-do-mundo-carlos-drummond-de-andrade",
    "title": "Sentimento do Mundo",
    "author": "Carlos Drummond de Andrade",
    "category": "Poesia",
    "collection": false,
    "publisher": "Companhia de Bolso",
    "level": "EM - Ensino Médio",
    "synopsis": "S acontecimentos políticos da época. \"tenho apenas duas mãos/o sentimento do mundo\", escreve nos v"
  },
  {
    "id": "so-para-o-meu-amor-ashley-rice",
    "title": "Só para o Meu Amor",
    "author": "Ashley Rice",
    "category": "Poesia",
    "collection": false,
    "publisher": "Vr Editora",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Concebido para ser presenteado à pessoa amada, o livro celebra as pequenas alegrias da convivência, a cumplicidade do dia a dia e a beleza de compartilhar a vida com alguém especial"
  },
  {
    "id": "sonetos-luis-de-camoes",
    "title": "Sonetos",
    "author": "Luís de Camões",
    "category": "Poesia",
    "collection": false,
    "publisher": "Martin Claret",
    "level": "EM - Ensino Médio",
    "synopsis": "O gênio camões magnetiza o leitor e o leva para outro estado de percepção"
  },
  {
    "id": "sonetos-manuel-du-bocage",
    "title": "Sonetos",
    "author": "Manuel Du Bocage",
    "category": "Poesia",
    "collection": false,
    "publisher": "Martin Claret",
    "level": "EM - Ensino Médio",
    "synopsis": "Árcade e pré-romântico, bocage foi um dos primeiros a anunciar a modernidade em portugal, pelos conflitos que dão força e contundência a seu estlo poético"
  },
  {
    "id": "tantas-tias-ziraldo",
    "title": "Tantas Tias",
    "author": "Ziraldo",
    "category": "Poesia",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "LIVRE",
    "synopsis": "Com suas ilstrações expressivas e traço inconfundível, o autor apresenta um galeria de diversos tipos de tias"
  },
  {
    "id": "tem-gato-na-tuba-e-outros-poemas-coautoria",
    "title": "Tem Gato na Tuba e Outros Poemas",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Martins Fontes",
    "level": "LIVRE",
    "synopsis": "Essa coleção contém cinco livros diferentes: poesia, conto, novela e literatura popular"
  },
  {
    "id": "tentativas-sobre-aspectos-poeticos-e-esteticos-dr-wajih-fanous",
    "title": "Tentativas Sobre Aspectos Poéticos e Estéticos",
    "author": "Dr. Wajih Fanous",
    "category": "Poesia",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Poesias"
  },
  {
    "id": "varal-de-poesia-coautoria",
    "title": "Varal de Poesia",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EM - Ensino Médio",
    "synopsis": "Um mundo cheio de seres imaginários e situações absurdas. De jogos, charadas e adivinhas. Um mundo musical, cheio de mistério e de encanto, de surpresa e emoções. É o que você encontrará nesse livro escrito por poetas brasileiros"
  },
  {
    "id": "voo-da-poesia-coautoria",
    "title": "Voo da Poesia",
    "author": "Coautoria",
    "category": "Poesia",
    "collection": false,
    "publisher": "Parle",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O voo da poesia,tem essa pretenção,fazeer você voar em cada poesia que ler,aprecie cada voo,use a sua imaginação nessa viajem."
  },
  {
    "id": "1808-laurentino-gomes",
    "title": "1808",
    "author": "Laurentino Gomes",
    "category": "Política",
    "collection": true,
    "publisher": "Globo",
    "level": "EM - Ensino Médio",
    "synopsis": "Como uma rainha louca, um príncipe medroso e uma corte corrupta enganaram napoleão e mudaram a história de portugal e do brasil"
  },
  {
    "id": "1822-laurentino-gomes",
    "title": "1822",
    "author": "Laurentino Gomes",
    "category": "Política",
    "collection": true,
    "publisher": "Globo",
    "level": "EM - Ensino Médio",
    "synopsis": "Como um homem sábio, uma princesa triste e um escocês louco por dinheiro ajudaram dom pedro a criar o brasil - um país que tinha tudo para dar errado"
  },
  {
    "id": "1889-laurentino-gomes",
    "title": "1889",
    "author": "Laurentino Gomes",
    "category": "Política",
    "collection": true,
    "publisher": "Globo",
    "level": "EM - Ensino Médio",
    "synopsis": "Como um imperador cansado, um marechal vaidoso, e um professor injustiçado contribuíram oara o fim da monarquia e a proclamação da república no brasil"
  },
  {
    "id": "100-vozes-pela-democracia-coautoria",
    "title": "100 Vozes Pela Democracia",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "Senado Federal",
    "level": "EM - Ensino Médio",
    "synopsis": "Um mosaico de reflexões da sociedade brasileira frente a ascensão da extrema direita reacionária"
  },
  {
    "id": "a-arte-da-vida-zygmunt-bauman",
    "title": "A Arte da Vida",
    "author": "Zygmunt Bauman",
    "category": "Política",
    "collection": false,
    "publisher": "Zahar",
    "level": "EM - Ensino Médio",
    "synopsis": "O autor aplica sua célebre teoria da \"modernidade líquida\" para examinar como a busca pela felicidade e pela realização pessoal se tornou um desafio na sociedade contemporânea"
  },
  {
    "id": "a-boa-politica-renato-janine-ribeiro",
    "title": "A Boa Política",
    "author": "Renato Janine Ribeiro",
    "category": "Política",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "É a partir da conjuntura atual do brasil que o filosófo renato janine debate, entre outras questões, a ideia da representação, o voto obrigatório, os escândulos de corrupção entre outros assuntos"
  },
  {
    "id": "a-cadeira-do-dragao-luiz-paulo-costa",
    "title": "A Cadeira do Dragão",
    "author": "Luiz Paulo Costa",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Memórias da ditadura militar"
  },
  {
    "id": "a-cidade-politicamente-correta-elisabete-da-cruz",
    "title": "A Cidade Politicamente Correta",
    "author": "Elisabete da Cruz",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "A cidade de fraterna sempre foi pacata e, dentro do possível, organizada. A chegada de moradores inesperados pareceu um caos em um primeiro momento, mas logo os fraterneses - em especial as crianças - usaram suas habilidades para criar um bom plano estratégico que poderia mudar a vida de todos para sempre"
  },
  {
    "id": "a-ditadura-acabada-elio-gaspari",
    "title": "A Ditadura Acabada",
    "author": "Elio Gaspari",
    "category": "Política",
    "collection": false,
    "publisher": "Intrínseca",
    "level": "EM - Ensino Médio",
    "synopsis": ""
  },
  {
    "id": "a-era-de-vargas-1-jose-augusto-ribeiro",
    "title": "A Era de Vargas 1",
    "author": "José Augusto Ribeiro",
    "category": "Política",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro contextualiza a era de vargas de 1882 a 1930"
  },
  {
    "id": "a-era-de-vargas-2-jose-augusto-ribeiro",
    "title": "A Era de Vargas 2",
    "author": "José Augusto Ribeiro",
    "category": "Política",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro contextualiza a era de vargas de 1930 a 1945 e 1951 a 1954"
  },
  {
    "id": "a-era-de-vargas-3-jose-augusto-ribeiro",
    "title": "A Era de Vargas 3",
    "author": "José Augusto Ribeiro",
    "category": "Política",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro contextualiza a era de vargas de 1954"
  },
  {
    "id": "a-freguezia-dos-batataes-j-machado-tambellini",
    "title": "A Freguezia dos Batataes",
    "author": "J.machado Tambellini",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "De quando batataes era, apenas, um arraial no caminho de igual nome (dos batataes) ou então, dos guayazes, em plena época do bandeirismo, encontra-se uma carta, escrita deste \"fim de mundo\"."
  },
  {
    "id": "a-guerra-do-paraguai-luiz-octavio-de-lima",
    "title": "A Guerra do Paraguai",
    "author": "Luiz Octavio de Lima",
    "category": "Política",
    "collection": false,
    "publisher": "Editora Planeta",
    "level": "EM - Ensino Médio",
    "synopsis": "Como \"o rei dos macacos\", o marechal que queria ser napoleão, um jornalista soldado e um presidente degolador deflagraram o maior conflito armado da américa do sul"
  },
  {
    "id": "a-historia-da-carta-30-anos-da-constituicao-coautoria",
    "title": "A História da Carta: 30 Anos da Constituição",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "Abril S.a",
    "level": "LIVRE",
    "synopsis": "Reúne análises e reportagens que resgatam as origens, os bastidores políticos e o impacto da constituição cidadã"
  },
  {
    "id": "a-historia-e-amarela-veja",
    "title": "A História É Amarela",
    "author": "Veja",
    "category": "Política",
    "collection": false,
    "publisher": "Abril S.a",
    "level": "EM - Ensino Médio",
    "synopsis": "Uma antologia de 50 entrevistas da mais prestigiosa seção da imprensa brasileira"
  },
  {
    "id": "a-mulher-na-politica-pricila-menin",
    "title": "A Mulher na Política",
    "author": "Pricila Menin",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "A mulher na política aborda diversos assuntos como o sufrágio feminino, a conquista do voto, o empoderamento feminino, a história da mulher, lei sobre cotas, a história do direito e mulheres destaques na história"
  },
  {
    "id": "a-revolucao-que-esperavamos-claudio-naranjo",
    "title": "A Revolução que Esperávamos",
    "author": "Claudio Naranjo",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Uma obra cheia de esperança para uma transformação que havíamos deixado de esperar: a próxima revolução do mundo se ocupará da consciência"
  },
  {
    "id": "a-sagrada-familia-karl-marx-e-friedrich-engels",
    "title": "A Sagrada Família",
    "author": "Karl Marx e Friedrich Engels",
    "category": "Política",
    "collection": false,
    "publisher": "Boitempo",
    "level": "EM - Ensino Médio",
    "synopsis": "Felizes os leitores brasileiros que podem agora de divertr vendo marx e engels debocharem da família dos críticose, ao mesmo tempo,podem acompanhar a gênese de concepçṍes que vieram a ter tanta importância na história das idéias"
  },
  {
    "id": "a-sociedade-contra-renato-janine-ribeiro",
    "title": "A Sociedade Contra",
    "author": "Renato Janine Ribeiro",
    "category": "Política",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "O filósofo renato janine define seu compromisso ético convidando o leitor a rever alguns dos principais bordões da nacionalidade"
  },
  {
    "id": "a-sociedade-individualizada-zygmunt",
    "title": "A Sociedade Individualizada",
    "author": "Zygmunt",
    "category": "Política",
    "collection": false,
    "publisher": "Zahar",
    "level": "EM - Ensino Médio",
    "synopsis": "Vidas contadas e histórias vividas"
  },
  {
    "id": "a-urna-eletronica-brasileira-fernanda-soares-andrade",
    "title": "A Urna Eletrônica Brasileira",
    "author": "Fernanda Soares Andrade",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro conta a história produzida por várias mãos e várias competências para que a vontade do povo nas eleições fosse respeitada"
  },
  {
    "id": "assassinato-de-reputacoes-um-crime-de-estado-roeu-tuma-junior",
    "title": "Assassinato de Reputações: um Crime de Estado",
    "author": "Roeu Tuma Junior",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Revela os bastidores do poder em brasília e traz denúncias sobre o uso do aparlho estatal para fins políticos e difamação de adversários"
  },
  {
    "id": "campanhas-politicas-nas-redes-sociais-coautoria",
    "title": "Campanhas Políticas nas Redes Sociais",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "Matrix",
    "level": "EM - Ensino Médio",
    "synopsis": "Os textos que compõe esta coletânia retratam as surpresas e aprendizados dessa transição."
  },
  {
    "id": "categorias-do-impolitico-roberto-esposito",
    "title": "Categorias do Impolítico",
    "author": "Roberto Esposito",
    "category": "Política",
    "collection": false,
    "publisher": "Autentica",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro busca pensar os limites e as fraturas da política moderna"
  },
  {
    "id": "churchill-e-tres-americanos-em-londes-lynne-olson",
    "title": "Churchill e Três Americanos em Londes",
    "author": "Lynne Olson",
    "category": "Política",
    "collection": false,
    "publisher": "Globo",
    "level": "EM - Ensino Médio",
    "synopsis": "\"pensei que soubesse bastante sobre a segunda guerra mundial, mas lyanne olson me ensinou muito mais\", afirmou tom brokaw, um dos mais experientes e premiados jornalistas norte-americanos. Churchill e três americanos em londres oferece esse tipo de surpresa - principalmente para quem está acostumado a ler livros de história que tratam mais de eventos que de pessoas."
  },
  {
    "id": "colina-capital-nacional-do-cavalo-syria-drubi",
    "title": "Colina-capital Nacional do Cavalo",
    "author": "Syria Drubi",
    "category": "Política",
    "collection": false,
    "publisher": "Sete Virtudes",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro não é de literatura perfeita,mas relata acontecimentos de amor,saudadade e lembranças que jamais me deixarão."
  },
  {
    "id": "conquistando-o-inimigo-john-carlin",
    "title": "Conquistando o Inimigo",
    "author": "John Carlin",
    "category": "Política",
    "collection": false,
    "publisher": "Sextante",
    "level": "EM - Ensino Médio",
    "synopsis": "Nelson mandela e o jogo que uniu a áfrica do sul"
  },
  {
    "id": "da-natureza-da-guerra-julian-lider",
    "title": "Da Natureza da Guerra",
    "author": "Julian Lider",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O autor realiza uma análise teórica e conceitual profunda sobre as origens, os fundamentos e as transformações dos conflitos armados ao longo da história humana"
  },
  {
    "id": "democracia-na-pratica-por-um-brasil-melhor-carlos-alberto-dos-santos-cruz",
    "title": "Democracia na Prática por um Brasil Melhor",
    "author": "Carlos Alberto dos Santos Cruz",
    "category": "Política",
    "collection": false,
    "publisher": "Almedina Brasil",
    "level": "EM - Ensino Médio",
    "synopsis": "O candidato eleito dizia o que grande parte da população queria ouvir e, mais uma vez, o brasil foi vítima de uma enganação eleitoral"
  },
  {
    "id": "depois-da-tempestade-ricardo-amorim",
    "title": "Depois da Tempestade",
    "author": "Ricardo Amorim",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro retrata a economia do país após 2010"
  },
  {
    "id": "desigualdade-reexaminada-amartya-sen",
    "title": "Desigualdade Reexaminada",
    "author": "Amartya Sen",
    "category": "Política",
    "collection": false,
    "publisher": "Record",
    "level": "EM - Ensino Médio",
    "synopsis": "Uma das obras mais influentes sobre justiça socia, economia do bem-estar e teoria da escolha pública"
  },
  {
    "id": "desobediencia-ou-o-que-no-futuro-chamaremos-de-lucidez-iana-villela",
    "title": "Desobediência Ou o que no Futuro Chamaremos de Lucidez",
    "author": "Iana Villela",
    "category": "Política",
    "collection": false,
    "publisher": "Hapercollins",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro retrata o feminismo e autoestima de mulheres"
  },
  {
    "id": "dialogos-da-liberdade-carlos-siqueira",
    "title": "Diálogos da Liberdade",
    "author": "Carlos Siqueira",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "A questão da utopia, que se pretende fazer própria apenas ao socialismo e as correntes libertárias, é um atributo do homem enquanto homem"
  },
  {
    "id": "direito-eleitoral-jose-alfredo-luiz-jorge",
    "title": "Direito Eleitoral",
    "author": "José Alfredo Luiz Jorge",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Focando no processo de registro de candidaturas e nos impedimentos legais previstos na legislação eleitoral"
  },
  {
    "id": "discurso-sobre-o-colonialismo-aime-cesaire",
    "title": "Discurso Sobre o Colonialismo",
    "author": "Aimé Césaire",
    "category": "Política",
    "collection": false,
    "publisher": "Veneta",
    "level": "EM - Ensino Médio",
    "synopsis": "Uma obra fundamental,urgentepara nossos tempos,numa edição ilustradas . Com notas explicativas e uma cronologia da vida."
  },
  {
    "id": "do-bestial-ao-genial-coautoria",
    "title": "Do Bestial ao Genial",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "Ediouro",
    "level": "EM - Ensino Médio",
    "synopsis": "Frases da política. Os políticos ganham a vida com lábia - boa parte dos votos vem da capacidade de convencer"
  },
  {
    "id": "dominio-do-movimento-rudolf-laban",
    "title": "Domínio do Movimento",
    "author": "Rudolf Laban",
    "category": "Política",
    "collection": false,
    "publisher": "Summus Editorial",
    "level": "EM - Ensino Médio",
    "synopsis": "Vem ao público para elucidar, explicar e sedimentar a arte do movimento."
  },
  {
    "id": "e-ai-isso-e-da-minha-conta-paulo-cavalcanti",
    "title": "E Aí? Isso É da Minha Conta?",
    "author": "Paulo Cavalcanti",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "É proposto m diálogo direto e provocativo sobre a responsabilidade individual diante do mundo e das próprias escolhas"
  },
  {
    "id": "encontros-com-o-brasil-paulo-ronai",
    "title": "Encontros com o Brasil",
    "author": "Paulo Rónai",
    "category": "Política",
    "collection": false,
    "publisher": "Batel",
    "level": "EM - Ensino Médio",
    "synopsis": "Nele podemos confirmar o entusiasmo e prazer com que esse intelectual,brasileiro de coração, navegou pela literatura que conheceu como poucos"
  },
  {
    "id": "escravidao-laurentino-gomes",
    "title": "Escravidão",
    "author": "Laurentino Gomes",
    "category": "Política",
    "collection": false,
    "publisher": "Globo",
    "level": "EM - Ensino Médio",
    "synopsis": "Do primeiro leilão de cativos em portugal até a morte de zumbi dos palmares"
  },
  {
    "id": "estatuto-da-crianca-e-do-adolescente-congresso-nacional",
    "title": "Estatuto da Criança e do Adolescente",
    "author": "Congresso Nacional",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "O documento detalha as medidas de proteção, o funcionamento do conselho tutelar e as regras do sistema socioeducativo aplicado a atos infracionais"
  },
  {
    "id": "formacao-politica-para-mulheres-volume-1-coautoria",
    "title": "Formação Política para Mulheres Volume 1",
    "author": "Coautoria",
    "category": "Política",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O material oferece uma visão crítica sobre as lutas feministas ao longo do tempo, os mecanismos de combate à violência de gênero e a importância da ocupação de espaços de poder e decisão pelas mulheres na sociedade no meio político"
  },
  {
    "id": "formacao-politica-para-mulheres-volume-2-coautoria",
    "title": "Formação Política para Mulheres Volume 2",
    "author": "Coautoria",
    "category": "Política",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Avança para a dimensão prática e estratégica da atuação da política feminina"
  },
  {
    "id": "formacao-politica-para-mulheres-volume-3-coautoria",
    "title": "Formação Política para Mulheres Volume 3",
    "author": "Coautoria",
    "category": "Política",
    "collection": true,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O foco deste volume é instrumentar as mulheres para a formulação de políticas públicas estruturantes e inclusivas"
  },
  {
    "id": "genero-e-desigualdades-limites-da-democracia-no-brasil-flavia-biroli",
    "title": "Gênero e Desigualdades: Limites da Democracia no Brasil",
    "author": "Flávia Biroli",
    "category": "Política",
    "collection": false,
    "publisher": "Boitempo",
    "level": "EM - Ensino Médio",
    "synopsis": "Demonstra de forma rigorosa que não é possível construir uma sociedade verdadeiramente democrática sem enfrentar e superar as profundas desigualdades de gênero que estruturam a vida pública e privada no brasil"
  },
  {
    "id": "governantes-da-paraiba-colonia-imperio-republica-helio-nobrega-zenaide",
    "title": "Governantes da Paraíba Colónia - Império - República",
    "author": "Hélio Nóbrega Zenaide",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Escrito, inicialmente, pelo jornalista e historiador hélio zenaide, que por muitos anos foi menbro efetivo do instituto histórico e geográfico paraibano (ihgp), governantes da paraíba apresenta um debate sobre a história política do estado, através dos seus governadores, desde o período colonial, até os dias atuais, sendo sua atualização realizada pelo desembargador marcos cavalcanti, jurista e acadêmico respeitado, membro efetivo do instituto histórico e geográfico paraibano (ihgp) e da academia paraibana de letras (apl). Diante dessas informações, posso assegurar que esta obra se impõe como um trabalho que traz uma revisão acerca da historiografia dos governadores da paraíba."
  },
  {
    "id": "guia-politicamente-incorreto-da-historia-do-brasil-leandro-narloch",
    "title": "Guia Politicamente Incorreto da História do Brasil",
    "author": "Leandro Narloch",
    "category": "Política",
    "collection": true,
    "publisher": "Leya",
    "level": "EM - Ensino Médio",
    "synopsis": "É hora de jogar tomates na historiografia politicamente correta. Este guia reúne histórias que vão diretamente contra ela. Só erros das vítimas e dos heróis da bondade. Só virtudes dos considerados vilões. Alguém poderá dizer que se trata do mesmo esforço dos historiadores militantes. Só que na direção oposta. É verdade. Quer dizer, mais ou menos. Este livro não quer ser um falso estudo acadêmico, como o daqueles estudiosos, e sim uma provocação. Uma pequena coletânea de pesquisas históricas sérias, irritantes e desagradáveis, escolhidas com o objetivo de enfurecer um bom número de cidadãos."
  },
  {
    "id": "guia-politicamente-incorreto-da-historia-do-mundo-leandro-narloch",
    "title": "Guia Politicamente Incorreto da História do Mundo",
    "author": "Leandro Narloch",
    "category": "Política",
    "collection": true,
    "publisher": "Leya",
    "level": "EM - Ensino Médio",
    "synopsis": "Este livro é um guia contra a doutrinação que muitos brasileiros sofrem na escola. Não tem a pretenção de contar toda a historia do mundo: seu alvo são os principai mitos sobre os últimos 2 mil anos que, apesar de terem sido derrubados há muito tempo por historiadores, prevalecem nos livros didáticos, nas provas do enem, nas conversas de bar."
  },
  {
    "id": "instituicoes-para-o-pensamento-politico-adami-campos",
    "title": "Instituições para o Pensamento Político",
    "author": "Adami Campos",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Um livro acadêmico-político para análise do papel insitucional e funcional das fundações partidáris no brasil"
  },
  {
    "id": "itinerario-de-reflexoes-e-praticas-de-acessibilidade-e-inclusao-coautoria",
    "title": "Itinerário de Reflexões e Práticas de Acessibilidade e Inclusão",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "A obra serve como um guia teórico e prático para transformar o debate sobre a acessibilidade em ações concretas nas instituições e na sociedade"
  },
  {
    "id": "linhagens-do-estado-absolutista-perry-anderson",
    "title": "Linhagens do Estado Absolutista",
    "author": "Perry Anderson",
    "category": "Política",
    "collection": false,
    "publisher": "Brasiliense",
    "level": "EM - Ensino Médio",
    "synopsis": "Neste estudo marxista do absolutismo,perry anderson,apresenta uma singuar análise da natureza e desenvolvimento do estado absolutista"
  },
  {
    "id": "maldita-guerra-francisco-doratioto",
    "title": "Maldita Guerra",
    "author": "Francisco Doratioto",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Escrito em linguagem clara e objetiva,este livro é fruto de quinza anos de pesquisas em arquivos e bibliotecas do brasil,do rio da prata e da europa."
  },
  {
    "id": "marcas-de-uma-guerra-sandra-pina",
    "title": "Marcas de uma Guerra",
    "author": "Sandra Pina",
    "category": "Política",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A guerra na europa começa a causar grandes mudanças na vida dos brasileiros,como na da jovem hilda,uma estudante descendente de italianos que sonha em ser enfermeira."
  },
  {
    "id": "memorias-da-segunda-guerra-mundial-winston-churchill",
    "title": "Memórias da Segunda Guerra Mundial",
    "author": "Winston Churchill",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Do momento mais sombrio e glorioso da inglaterra até a grande aliança e a vitória final, a segunda guerra mundial continua a ser o evento mais marcante do século xx"
  },
  {
    "id": "modernidade-e-holocausto-zygmunt-bauman",
    "title": "Modernidade e Holocausto",
    "author": "Zygmunt Bauman",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "É um estudo importante e influente sobre a segunda guerra mundial e a natureza da sociedade ocidental comtemporânea"
  },
  {
    "id": "modernizacao-ditadura-e-democracia-daniel-aarao-reis",
    "title": "Modernização,ditadura e Democracia",
    "author": "Daniel Aarão Reis",
    "category": "Política",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EM - Ensino Médio",
    "synopsis": "Ilustrada com rico material iconográfico,alia linguagem acessível e rigor na pesquisa documental."
  },
  {
    "id": "mulheres-e-participacao-politica-jessica-holl",
    "title": "Mulheres e Participação Política",
    "author": "Jessica Holl",
    "category": "Política",
    "collection": false,
    "publisher": "Conhecimento",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma democracia autêntica demanda representação política plena"
  },
  {
    "id": "mulheres-livres-martha-a-ackelsberg",
    "title": "Mulheres Livres",
    "author": "Martha A. Ackelsberg",
    "category": "Política",
    "collection": false,
    "publisher": "Elefante",
    "level": "EM - Ensino Médio",
    "synopsis": "Luta pela emancipação feminina e a guerra civil espanhola"
  },
  {
    "id": "na-capitania-de-sao-vicente-washinton-luis",
    "title": "Na Capitania de São Vicente",
    "author": "Washinton Luís",
    "category": "Política",
    "collection": false,
    "publisher": "Senado Federal",
    "level": "EM - Ensino Médio",
    "synopsis": "História de são vicente"
  },
  {
    "id": "nao-ao-trabalho-infantil-fabricio-taufner",
    "title": "Não ao Trabalho Infantil",
    "author": "Fabrício Taufner",
    "category": "Política",
    "collection": true,
    "publisher": "Cidadania",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "nazismo-as-grandes-reportagens-coautoria",
    "title": "Nazismo as Grandes Reportagens",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "Caras",
    "level": "EM - Ensino Médio",
    "synopsis": "Setenta anos após o fim do regime nazista na alemanha e do suicídio de seu líder máximo. Adolf hitler. O nazismo continua a suscitar discussões inflamadas. Aventuras na história apresenta neste livro uma seleção da dezoito melhores reportagens publicadas sobre o nazismo em suas páginas, são textos de dezesseis jornalistas empenhados em levantar questões e trazer respostas para que o leitor compreenda quando o movimento surgiu, como ascendeu ao poder e o que sucedeu depois."
  },
  {
    "id": "o-brasil-da-abertura-marly-rodrigues",
    "title": "O Brasil da Abertura",
    "author": "Marly Rodrigues",
    "category": "Política",
    "collection": false,
    "publisher": "Sonia",
    "level": "LIVRE",
    "synopsis": "O aspecto mais significativo comum a todos os volumes é a ampla utilização de documentos na organização e desenvolvimento dos assuntos de cada livro."
  },
  {
    "id": "o-capitalismo-ari-herculano-de-souza",
    "title": "O Capitalismo",
    "author": "Ari Herculano de Souza",
    "category": "Política",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Sabem '' ler '' o mndo das idéias, nos homens e nas lutas do cotidiano possibilita-nos conhecer os caminhos por onde andaram os povos; e nos predispôe melhor aos nossos projetos de futuro.assim o homem faz história."
  },
  {
    "id": "o-colecionador-de-lagrimas-augusto-cury",
    "title": "O Colecionador de Lágrimas",
    "author": "Augusto Cury",
    "category": "Política",
    "collection": false,
    "publisher": "Editora Planeta",
    "level": "EM - Ensino Médio",
    "synopsis": "Encanta mais uma vez seus leitores com este livro revelador, uma análise profunda da mente humana e da humanidade em tempo de crises"
  },
  {
    "id": "o-combate-a-corrupcao-coautoria",
    "title": "O Combate Á Corrupção",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "Atêlie",
    "level": "EM - Ensino Médio",
    "synopsis": "Este é um guia para a detecção de corrupção no âmbito municipal."
  },
  {
    "id": "o-direito-de-ser-crianca-daniel-j-smith",
    "title": "O Direito de Ser Criança",
    "author": "Daniel J. Smith",
    "category": "Política",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Em o direito de ser criança, os jovens leitores descobrirão que as crianças vivem de maneiras muito diferentes: nem todas têm acesso a água e a ar limpos, a comida adequada, a assistência médica, a escola de qualidade e a outras necessidades básicas. Para diminuir as desigualdades, a maioria dos países assinou a convenção sobre os direitos da criança da onu. Trechos dessa convenção complementam as histórias deste livro e indicam melhorias das condições de vida das crianças."
  },
  {
    "id": "o-estado-empreendedor-desmascarando-o-mito-do-setor-publico-vs-setor-privado-mar",
    "title": "O Estado Empreendedor: Desmascarando o Mito do Setor Público Vs. Setor Privado",
    "author": "Mariana Mazzucato",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro propõe uma reavaliação do papel do estado na economia moderna, defendendo investimentos de longo prazo para enfrentar grandes desafios tecnológicos e sociais"
  },
  {
    "id": "o-futuro-da-democracia-uma-defesa-das-regras-do-jogo-noberto-bobbio",
    "title": "O Futuro da Democracia: uma Defesa das Regras do Jogo",
    "author": "Noberto Bobbio",
    "category": "Política",
    "collection": false,
    "publisher": "Paz e Terra",
    "level": "EM - Ensino Médio",
    "synopsis": "O autor define a democracia como um conjunto de regras procedimentais(\"as regras do jogo\") e examina as \"promessas não cumpridas\" do sistema"
  },
  {
    "id": "o-nivel-coautoria",
    "title": "O Nível",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "Civilização Brasileira",
    "level": "LIVRE",
    "synopsis": "Por que uma sociedade mais igualitária é melhor para todos"
  },
  {
    "id": "o-problema-do-adolescente-infrator-no-brasil-antonio-gandini-junior",
    "title": "O Problema do Adolescente Infrator no Brasil",
    "author": "Antonio Gandini Júnior",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "É uma obra jurídica e sociológica focada no direito da criança e do adolescente e no sistema educativo brasileiro"
  },
  {
    "id": "o-progressista-de-ontem-e-o-do-amanha-mark-lilla",
    "title": "O Progressista de Ontem e o do Amanhã",
    "author": "Mark Lilla",
    "category": "Política",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "Desafios da democracia liberal no mundo pós-políticas identitárias"
  },
  {
    "id": "o-que-e-uma-constituicao-ferdinand-lassalle",
    "title": "O que É uma Constituição?",
    "author": "Ferdinand Lassalle",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Estuda os fundamentos sociais e políticos de uma constituição"
  },
  {
    "id": "o-que-vi-dos-presidentes-fatos-e-versoes-coautoria",
    "title": "O que Vi dos Presidentes : Fatos e Versões",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "Editora Planeta",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro oferece um retrato vívido da história política recente do brasil sob a ótica de quem acompanhou de perto as maiores decisões da nação"
  },
  {
    "id": "o-senado-na-historia-do-brasil-volume-1-coautoria",
    "title": "O Senado na História do Brasil Volume 1",
    "author": "Coautoria",
    "category": "Política",
    "collection": true,
    "publisher": "Senado Federal",
    "level": "EM - Ensino Médio",
    "synopsis": "O livro mostra como as decisões e discussões ocorridas na câmara alta moldaram a história, as leis e as instituições brasileiras"
  },
  {
    "id": "o-senado-na-historia-do-brasil-volume-2-coautoria",
    "title": "O Senado na História do Brasil Volume 2",
    "author": "Coautoria",
    "category": "Política",
    "collection": true,
    "publisher": "Senado Federal",
    "level": "EM - Ensino Médio",
    "synopsis": "A obra explora episódios marcantes e menos conhecidos da história brasileira sob a perspectiva da atividade lesgislativa"
  },
  {
    "id": "o-senado-na-historia-do-brasil-volume-3-coautoria",
    "title": "O Senado na História do Brasil Volume 3",
    "author": "Coautoria",
    "category": "Política",
    "collection": true,
    "publisher": "Senado Federal",
    "level": "EM - Ensino Médio",
    "synopsis": "Destacando a atuação do senado frente a transformações sociais, lutas por direitos e grandes dilemas nacionais"
  },
  {
    "id": "o-verdadeiro-valor-da-responsabilidade-fabricio-taufner",
    "title": "O Verdadeiro Valor da Responsabilidade",
    "author": "Fabrício Taufner",
    "category": "Política",
    "collection": true,
    "publisher": "Cidadania",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "os-inventores-do-new-deal-flavio-limoncic",
    "title": "Os Inventores do New Deal",
    "author": "Flávio Limoncic",
    "category": "Política",
    "collection": false,
    "publisher": "Civilização Brasileira",
    "level": "EM - Ensino Médio",
    "synopsis": "Com este livro,ele nos dá uma interpretação original e bastante atual do new deal."
  },
  {
    "id": "os-pensadores-bacon-jose-aluysio",
    "title": "Os Pensadores - Bacon",
    "author": "José Aluysio",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "É uma obra fundamental para entender as bases da revolução científica e filosofia moderna"
  },
  {
    "id": "pedras-no-caminho-adilson-araujo",
    "title": "Pedras no Caminho",
    "author": "Adilson Araújo",
    "category": "Política",
    "collection": false,
    "publisher": "Consciencia de Classe",
    "level": "EM - Ensino Médio",
    "synopsis": "Reflexões sobre a conjuntura política"
  },
  {
    "id": "pesquisas-eleitorais-denilde-holzhacker",
    "title": "Pesquisas Eleitorais",
    "author": "Denilde Holzhacker",
    "category": "Política",
    "collection": false,
    "publisher": "Almedina Brasil",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "As pesquisas requerem uma série de técnicas e estratégias no método de seleção dos entrevistados, no formato das entrevistas e no modelo de questionário aplicado."
  },
  {
    "id": "por-uma-outra-globalizacao-milton-santos",
    "title": "Por uma Outra Globalização",
    "author": "Milton Santos",
    "category": "Política",
    "collection": false,
    "publisher": "Record",
    "level": "EM - Ensino Médio",
    "synopsis": "Miton santos propõe uma interpretação multidisciplinar do mundo comtemporâneo, em que realça o papel atual da ideologia na produção da história e mostra os limites do seu discurso frente a realidade vivida pela maioria das nações"
  },
  {
    "id": "principios-da-democracia-coautoria",
    "title": "Princípios da Democracia",
    "author": "Coautoria",
    "category": "Política",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro busca fortalecer o pensamento crítico e a consciência política do leitor para o exercício pleno da cidadania"
  },
  {
    "id": "propaganda-de-guerrilha-jay-conrad-levinson",
    "title": "Propaganda de Guerrilha",
    "author": "Jay Conrad Levinson",
    "category": "Política",
    "collection": false,
    "publisher": "Bestseller",
    "level": "LIVRE",
    "synopsis": "Criatividade e competência para gerar o máximo de lucros com o mínimo de custos"
  },
  {
    "id": "quem-manda-por-que-manda-como-manda-joao-ubaldo-ribeiro",
    "title": "Quem Manda, por que Manda, Como Manda",
    "author": "João Ubaldo Ribeiro",
    "category": "Política",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EM - Ensino Médio",
    "synopsis": "Curso prático e elementar, para trabalhadores, estudantes, políticos, donas de casa e o povo em geral"
  },
  {
    "id": "redes-solidarias-maria-tereza-maldonado",
    "title": "Redes Solidárias",
    "author": "Maria Tereza Maldonado",
    "category": "Política",
    "collection": false,
    "publisher": "Saraiva",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "refugiados-gilberto-m-a-rodrigues",
    "title": "Refugiados",
    "author": "Gilberto M. A. Rodrigues",
    "category": "Política",
    "collection": false,
    "publisher": "Moderna",
    "level": "EM - Ensino Médio",
    "synopsis": "A leitura da presente obra abre caminhos para importantes reflexões na área de refúgio e migração forçada"
  },
  {
    "id": "revolucao-dos-bichos-george-orwell",
    "title": "Revolução dos Bichos",
    "author": "George Orwell",
    "category": "Política",
    "collection": false,
    "publisher": "Companhia das Letras",
    "level": "EM - Ensino Médio",
    "synopsis": "Cansados pela exploração a que são submetidos pelos humanos, os animais da granja do solar rebelam-se contra seus donos e tomam posse da fazend, com o objetivo de instituir um sistema cooperativo e igualitário, sob o slogan \"quatro pernas bom, duas pernas ruin\""
  },
  {
    "id": "roberto-freire-a-esquerda-sem-dogma-milton-coelho-da-graca",
    "title": "Roberto Freire a Esquerda Sem Dogma",
    "author": "Milton Coelho da Graça",
    "category": "Política",
    "collection": false,
    "publisher": "Barcarolla",
    "level": "EM - Ensino Médio",
    "synopsis": "Uma das principais características do político roberto freire é a sua grande capacidade de entender o novo, propor saídas para cada situação concreta, dentro da visão de que é preciso mudar para se manter de fato coerente. Trata-se de uma liderança que veio para ficar, que pratica o que prega e sempre atua com ética."
  },
  {
    "id": "sao-tambem-nossas-facanhas-beto-albuquerque",
    "title": "São Também Nossas Façanhas?",
    "author": "Beto Albuquerque",
    "category": "Política",
    "collection": false,
    "publisher": "Rjr",
    "level": "EM - Ensino Médio",
    "synopsis": "Neste livro quero contribuir com o debate sobre o rio grande do sul que já fomo,o que somos e aquele que desejamos."
  },
  {
    "id": "subcidadania-brasileira-jesse-souza",
    "title": "Subcidadania Brasileira",
    "author": "Jessé Souza",
    "category": "Política",
    "collection": false,
    "publisher": "Leya",
    "level": "EM - Ensino Médio",
    "synopsis": "Neste livro,uma nova interpretação do barsil moderno e desigual."
  },
  {
    "id": "um-olhar-na-historia-uma-visao-no-futuro-miguel-arrais",
    "title": "Um Olhar na História, uma Visão no Futuro",
    "author": "Miguel Arrais",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Depoimentos e fotos"
  },
  {
    "id": "vida-nas-ruas-julianna-laffront",
    "title": "Vida nas Ruas",
    "author": "Julianna Laffront",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Perspectivas do debate político no poder legislativo municipal de santos"
  },
  {
    "id": "vitoria-e-um-nome-de-mulher-isabela-rahal",
    "title": "Vitória É um Nome de Mulher",
    "author": "Isabela Rahal",
    "category": "Política",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Este guia conta histórias de momentos de luta vividos por vanda, amanda, helena, julia e lina. O que elas têm em comum? Vitória! Aqui você encontrará esperança e, mais que isso, passos que te ajudarão a entender que as lutas sociais podem ser ganhas por meio da mobilização e união."
  },
  {
    "id": "voto-a-voto-maria-carolina-trevisan",
    "title": "Voto a Voto",
    "author": "Maria Carolina Trevisan",
    "category": "Política",
    "collection": false,
    "publisher": "Telha",
    "level": "EM - Ensino Médio",
    "synopsis": "\"voto a voto\" nasce obra essencial para quem deseja compreender ou comer a história de uma jovem democracia esgarçada até o limite, a partir da segunda década deste século xxi. Maria carolina trevisane maurício moura enfileiram os fatores que, nas eleições de 2022, acabaram por abortar a escalada autoritária inaugurada no brasil no pleito anterior."
  },
  {
    "id": "winston-churchil-volume-ii-martin-gilbert",
    "title": "Winston Churchil Volume Ii",
    "author": "Martin Gilbert",
    "category": "Política",
    "collection": false,
    "publisher": "Casa da Palavra",
    "level": "LIVRE",
    "synopsis": "Em churchill - uma vida, o históriador mundialmente consagrado martin gilbert constrói o mais completo relato biográfico já escrito sobre o primeiro - ministro britânico que mudou a história do reino unido e do mundo. Nesta segunda parte da biografia tratando tanto de aspectos pessoais quanto políticos, gilbert nos coloca diante de uma europa às vèsperas da segunda guerra mundial, revelando em detalhes as pressões que finalmente levariam chuchill a se consagrar num exemplo de homem público, com a energia e o gênio necessários para dar fim ao comflito."
  },
  {
    "id": "500-anos-regina-renno",
    "title": "500 Anos",
    "author": "Regina Rennó",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Ftd",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Neste livro de imagens dirigido às crianças, brinda-nos, a todo, com um pouco dos quinhentos anos do povo brasileiro. Com rara competência e sensibilidade, leva-nos em uma viagem de volta pela história, na qual os tempos se cruzam, percorrendo trajetos e acontecimentos importantes, mostrando-nos as faces dos brasileiros, suas lutas, seus trabalhos."
  },
  {
    "id": "a-ciranda-das-mulheres-sabias-clarissa-pinkola-estes",
    "title": "A Ciranda das Mulheres Sábias",
    "author": "Clarissa Pinkola Estés",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Rocco",
    "level": "EM - Ensino Médio",
    "synopsis": "O lugar que almejamos é a terra onde os humanos ainda são tão perigosos quanto divinos, onde o que é derrubado cresce de novo, e onde os ramos das árvores mais velhas florescem por mais tempo. Ela conhece e você também."
  },
  {
    "id": "a-cura-da-terra-eliane-potiguara",
    "title": "A Cura da Terra",
    "author": "Eliane Potiguara",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A natureza, os homens, a origem das coisas, a sabedoria dos ancestrais... E também a dor da destruição da cultura de um povo e todo o desequilíbrio causado pela ganância e pela ignorância. Tudo isso está presente na história forte e envolvente que uma avó carinhosa conta a sua neta, uma menina curiosa que quer descobrir mais sobre seus antepassados indígenas e suas tradições e que procura entender melhor suas raízes. É por meio dessa história, contada com enorme sensibilidade neste livro que essas duas personagens refletem sobre a vida e o passado, e aprendem a olhar com otimismo para o futuro."
  },
  {
    "id": "a-lenda-de-uaca-e-uana-paulo-maua",
    "title": "A Lenda de Uaçá e Uaná",
    "author": "Paulo Mauá",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uaçá, caranguejo que sabe se esconder da tribo indigena, come de tudo: casca de amendoim, diabo de aipim, pelo arrepiado de ariranha e até olho vesgo de piranha. Só sai à noite para caçar e encontra uma estrela cadente diferente. Que pisca, pisca, pisca. Hora do jantar ou de passear?"
  },
  {
    "id": "a-mae-de-ouro-e-outros-do-folclore-brasileiro-1-walcyr-carrasco",
    "title": "A Mãe de Ouro e Outros do Folclore Brasileiro 1",
    "author": "Walcyr Carrasco",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "Moderna",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Os contos populares brasileiros são conjuntos de imagens reinventadas a partir de matrizes universais e recontadas por gente como walcyr carrasco, que narra com a familiaridade de quem nasceu e se criou no húmus da nossa terra. Conversar com esses contos é uma experiência particular de pertencimento que nos faz recordar quem somos e quem podemos ser além da banalidade imposta pela globalização, no rumo de nossa integridade humana, que se manifesta brasileira."
  },
  {
    "id": "a-tribo-panapana-paulo-maua",
    "title": "A Tribo Panapaná",
    "author": "Paulo Mauá",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Scortecci Editora",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Guaraná, potira, cunhatã, curupira, a lenda da mandioca, o surgimento do tamanduá, o assobio do saci... São tantas as heranças indígenas que tudo pode acontecer nas páginas do livro a tribo panapaná enquanto beatriz passeia pela floresta amazônica com a família. Um mergulho imprevisto no encontro das águas faz com que a nossa personagem descubra como vivem os povos indígenas, saboreie a cultura, os costumes e os mitos dos verdadeiros donos da terra brasil."
  },
  {
    "id": "amazonia-sebastiao-salgado",
    "title": "Amazônia",
    "author": "Sebastião Salgado",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Taschen",
    "level": "EM - Ensino Médio",
    "synopsis": "Meu desejo, com todo o meu coração, com toda a minha energia e com toda a paixão que possuo, é que em 50 anos este livro não se assemelhe a um registro de um mundo perdido. A amazônia precisa seguir vivendo. E, em seu coração, aqueles que lá vivem.\""
  },
  {
    "id": "bumba-meu-boi-colecao-folha-folclore-braileiro-para-criancas",
    "title": "Bumba-meu-boi",
    "author": "Coleção Folha Folclore Braileiro para Crianças",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "Folha de S. Paulo",
    "level": "LIVRE",
    "synopsis": "Lenda do bumba-meu-boi"
  },
  {
    "id": "cantos-de-encantamento-elis-jose",
    "title": "Cantos de Encantamento",
    "author": "Elis José",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O saci e a iara, o cavalo-fantasmo, o negrinho do pastoreio, o cachorrinho d'água, o pastor encantado e muitos outros seres do folclore brasileiro desfilam neste livro, em poemas ternos, líricos, brincalhões, enriquecidos por ilustrações que encantam e divertem."
  },
  {
    "id": "caravelas-no-novo-mundo-antonio-augusto-da-costa-faria",
    "title": "Caravelas no Novo Mundo",
    "author": "Antonio Augusto da Costa Faria",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "LIVRE",
    "synopsis": "Histórias do brasil"
  },
  {
    "id": "conhori-e-as-icamiabas-guerreiras-da-amazonia-eliane-potiguara",
    "title": "Conhori e as Icamiabas Guerreiras da Amazônia",
    "author": "Eliane Potiguara",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Ao longo das extensas margens dos rios da amazônia, camufladas pela densa mata, viviam destemidas mulheres guerreiras. Ou assim conta a lenda, que traz algumas similaridades com as amazonas da grécia antiga. O embate com os homens europeus conquistadores tornou a história dessas mulheres indígenas ainda mais marcante é fantástica. Bem-vindos a essa aventura ancestral!"
  },
  {
    "id": "contos-indigenas-brasileiros-daniel-munduruku",
    "title": "Contos Indígenas Brasileiros",
    "author": "Daniel Munduruku",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Global",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Contos indígenas brasileiros nos mostra que a palavra cria, enfeitiça, embriaga, gera monstros, faz heróis, remete-nos à nossa própria memória ancestral e dá sentido ao nosso estar no mundo. Foi com esta paixão e certeza que este livro foi escrito por meio da seleção de mitos que representam a caminhada de diversos povos indígenas."
  },
  {
    "id": "cordelendas-historias-indigenas-em-cordel-cesar-obeid",
    "title": "Cordelendas Histórias Indígenas em Cordel",
    "author": "César Obeid",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Hoje as lendas indígenas abraçam o cordel, que deixou as suas rimas comandarem o carrossel. Este livro em suas mãos vai semear muitos grãos de uma dupla verdadeira. Assim deu-se a mistura de uma forma firme a pura da cultura brasileira."
  },
  {
    "id": "decolonialismo-indigena-alvaro-de-azevedo-gonzaga",
    "title": "Decolonialismo Indígena",
    "author": "Alvaro de Azevedo Gonzaga",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "Matrioska Editora",
    "level": "EM - Ensino Médio",
    "synopsis": ""
  },
  {
    "id": "dialogos-amazonicos-relatorio-final-coautoria",
    "title": "Diálogos Amazônicos Relatório Final",
    "author": "Coautoria",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Gov",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "eleefante-um-estranho-na-amazonia-jotah",
    "title": "Eleèfante? um Estranho na Amazônia",
    "author": "Jótah",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Um elefante na amazônia?! O que ele estava fazendo lá?!"
  },
  {
    "id": "florestania-a-cidadania-dos-povos-da-floresta-maria-tereza-maldonado",
    "title": "Florestania a Cidadania dos Povos da Floresta",
    "author": "Maria Tereza Maldonado",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "Saraiva",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Flávia é uma jornalista carioca que trabalha no caderno de turismo de um jornal importante. Seu chefe a indicou para fazer uma matéria sobre um hotel de selva na região de manaus, onde inicia uma amizade com madeleine, uma turista francesa apaixonada pelo brasil. As duas conhecem maíra, uma jovem de doze anos que atua como pequena guia do bosque da ciência, e ficam encantadas com seu interesse pelas questões de preservação ambiental. A amizade entre as três faz crescer em flávia o desejo de conhecer melhor outros projetos de ecoturismo que estimulam a participação ativa das comunidades locais, recuperando áreas degradadas pela pesca predatória e pelo desmatamento. O conceito de \"florestania\" desperta seu interesse porque mostra a necessidade de estimular a cidadania dos povos da floresta, numa região tão importante para o equilíbrio ecológico do planeta."
  },
  {
    "id": "frederico-frederico-simone-mota",
    "title": "Frederico, Frederico...",
    "author": "Simone Mota",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A teimosia do pequeno frederico é velha conhecida de todo mundo em casa. A avó até que gosta desse jeito teimoso do neto, que a faz sorrir tanto. Já a mãe sente que essa teimosia ainda vai levar seu menino a lugares inimagináveis. Frederico, frederico... Gente assim como ele, que teima em existir, resistir e acontecer, tem feito muitas pessoas acreditarem que é possível e necessário ser tudo o que se quer ser. Se não nos permitimos sonhar e realizar, que graça a vida tem?"
  },
  {
    "id": "harry-e-karima-os-bons-velhinhos-da-floresta-yaguare-yama",
    "title": "Harry e Karimã: os Bons Velhinhos da Floresta",
    "author": "Yaguarê Yamã",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "LIVRE",
    "synopsis": "Yaguarê yamã, do povo sateré-mawé, e a ilustradora wanessa ribeiro, de ascendência guarani, nos apresentam aqui a lenda de dois bons velhinhos que, no final do ano, entregam presentes a todos ao longo do curso dos rios da amazônia. Isso soa familiar, não? Que tal, então, conhecer um pouco mais de nossas raízes e repensar o que queremos para o futuro? Boa leitura!"
  },
  {
    "id": "lendas-e-fabulas-dos-bichos-de-nossa-america-rogerio-andrade-barbosa",
    "title": "Lendas e Fábulas dos Bichos de Nossa América",
    "author": "Rogério Andrade Barbosa",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Os contos aqui reunidos, selecionados e adaptados por rogério andrade barbosa, pertencem à tradição oral da américa. Os animais, por sua capacidade de voar, de viver embaixo da água ou da terra, de trocar de pele, de mudar de cor ou de enxergar no escuro, eram respeitados e admirados pelos nossos ancestrais, e assim há uma imensidão de contos, lendas, fábulas e mitos sobre bichos espalhados pelo mundo."
  },
  {
    "id": "lendas-indigenas-antoracy-tortolero-araujo",
    "title": "Lendas Indígenas",
    "author": "Antoracy Tortolero Araújo",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Como todos os povos, diversas tribos indígenas sempre buscaram explicar o mundo e a origem das coisas. De onde veio o ser humano? Como o fogo apareceu? E os animais, de onde surgiram? As lendas, passadas de geração em geração, procuram contar a história de quase tudo que nos cerca, mas também servem para entreter e transmitir ensinamentos. Seja qual for a intenção, as lendas de nossos indígenas são parte importante da cultura, pois revelam muito sobre cada povo e seu modo de ver o mundo."
  },
  {
    "id": "lobisomem-cuca-e-mula-sem-cabeca-importados-e-naturalizados-mouzar-benedito-e-oh",
    "title": "Lobisomem, Cuca e Mula Sem Cabeça Importados e Naturalizados",
    "author": "Mouzar Benedito e Ohi",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "Liz Editora",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mitologia brasílica"
  },
  {
    "id": "meu-lugar-no-mundo-sulami-katy",
    "title": "Meu Lugar no Mundo",
    "author": "Sulami Katy",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "No litoral da paraíba, em um lugar abraçado pela mata e pelo mar, vivem os potiguaras. Entre eles, sulami - uma jovem acostumada a pegar fruta no pé, preparar beiju, dançar na festa do coco, ouvir histórias do avô... Porém, essa vida de tranquilidade está para mudar: sulami acaba de receber uma missão especial, e agora precisa deixar a aldeia e ir á cidade grande, onde fará descobertas inesquecíveis."
  },
  {
    "id": "mitos-contos-e-lendas-da-america-latina-e-do-caribe-autor-nao-informado",
    "title": "Mitos , Contos e Lendas da América Latina e do Caribe",
    "author": "Autor não informado",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "MITOS, CONTOS E LENDAS REÚNE DEZ HISTÓRIAS DE PAÍSES DA AMÉRICA LATINA E DO CARIBE E É UM MERGULHO NA CRIATIVIDADE POPULAR. LER ESTE LIVRO É COMO ESTAR NAQUELE TEMPO EM QUE CADA HISTÓRIA PERCORRIA GERAÇÕES, PASSANDO DA AVÓ à neta, DO PAI AO FILHO, DO AMIGO À AMIGA. OS PERSONAGENS VÃO DE LADRÕES DE BODE A VELHINHAS QUE LANÇAM MALDIÇÕES, PASSANDO POR UM HOMEM-PÁSSARO QUE CONVERSA COM A LUA E O MAR. HISTÓRIAS FANTÁSTICAS QUE SEMPRE DEIXAM UM GOSTINHO DE SABEDORIA."
  },
  {
    "id": "mondagara-traicao-dos-encantados-roni-wasiry-guara",
    "title": "Mondagará Traição dos Encantados",
    "author": "Roni Wasiry Guará",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Formato",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "\" a história deste livro foi contada por meu avô quando eu ainda era um menino, e, assim como ele me contou, hoje sou eu quem contou aos curumins. Suas histórias passaram a fazer parte da minha memória e ainda hoje - apesar de ele não está mais entre nós - trago dentro de mim suas palavras que eram sempre tão cheias de sabedoria de nossos ancestrais.\""
  },
  {
    "id": "na-estrada-dos-sonhos-luis-pimentel",
    "title": "Na Estrada dos Sonhos",
    "author": "Luís Pimentel",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "As histórias de dois personagens bem brasileiros se cruzam de modo definitivo nesta narrativa de luís pimentel. Lito é um menino que sonha e resiste, afinal sonhos são combustível para seguir em frente. Alexandre é um caminhoneiro experiente, calejado pela vida e correto em suas atitudes. A conexão entre eles, que se inicia em pleno sertão baiano, leva à reflexão sobre as inúmeras facetas do brasil, que ainda é desigual, que ainda é diverso, que ainda é estranho... Da bahia ao rio de janeiro , por estradas que desbravam o brasil profundo, um país que sonha e peleja, a amizade entre duas pessoas aparentemente tão diferentes é o pano de fundo dessa narrativa cheia de emoção e crença no futuro. Porque sonhar é manter viva a esperança."
  },
  {
    "id": "nana-descobre-o-ceu-jose-roberto-torero-e-marcus-aurelius-pimenta",
    "title": "Naná Descobre o Céu",
    "author": "José Roberto Torero e Marcus Aurelius Pimenta",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Em naná descobre o céu, você vai se divertir com as peripécias de uma menina que azucrinou a vida só seu amigo tatá e questionou as verdades do padre inácio. Para esta menina que tinha a altura de dois macacos em pé, este negócio de deus, pecado e cruz era muito complicado. Sua luta era pela preservação da cultura do seu povo e a busca da legendária terra sem males."
  },
  {
    "id": "nos-mauricio-negro",
    "title": "Nós",
    "author": "Mauricio Negro",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "As sociedades indígenas são movidas pela magia dos mitos - narrativas ancestrais que apresentam o nascimento do mundo, dos seres e dos homens. Ouvi-las, senti-las e lê-las é mergulhar em um infinito que nos une com o desconhecido. É, sobretudo, alimentar nosso espírito com o mistério presente em todas as coisas, independente de quem somos, de como vivemos e do que temos."
  },
  {
    "id": "o-cao-e-o-curumim-cristino-wapichana",
    "title": "O Cão e o Curumim",
    "author": "Cristino Wapichana",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "\" meu avô sempre falava que tínhamos de alimentar bem o corpo e também o espírito para crescermos fortes e saudáveis, para buscarmos ter a coragem do bem-te-vi, a leveza de uma pluma e a velocidade de um beija-flor. Mas não era só isso. Dizia também que tínhamos de ter a força e a destreza de uma onça e a fidelidade e o coração de um cão\""
  },
  {
    "id": "o-guardiao-das-florestas-maria-cristina-furtado",
    "title": "O Guardião das Florestas",
    "author": "Maria Cristina Furtado",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Em meio à magia e aos mistérios da floresta amazônica, jacinta viverá uma aventura que mudará por completo sua vida. Na primeira viagem à região, a menina conhece jari, um tio que tem a sua idade e um dom muito especial: ele conversa com os animais! Juntos, e contando com a ajuda de um macaco barulhento e do curupira, eles irão ajudar a defender a floresta de pessoas que buscam a riqueza a qualquer custo."
  },
  {
    "id": "o-onca-daniel-munduruku",
    "title": "O Onça",
    "author": "Daniel Munduruku",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "Caramelo Livros Educativos",
    "level": "LIVRE",
    "synopsis": "Um jovem indígena, traído pelo irmão invejoso, fica perdido na floresta, preso no alto de uma árvore. Uma onça macho se aproxima dele e o liberta. O onça, então, torna-se seu amigo e ensina a ele muitas coisas importantes que nunca aprendeu em sua tribo - como acender o fogo e caçar usando o arco e flecha. Esse contato inesperado mostrará ao rapaz a importância da amizade e a grande necessidade de os seres humanos se harmonizarem com a natureza."
  },
  {
    "id": "poeminhas-da-terra-marcia-leite-tatiana-moes",
    "title": "Poeminhas da Terra",
    "author": "Márcia Leite | Tatiana Móes",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Itáu",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Os versos curtos e com palavras de origem tupi, associados às poéticas ilustrações de cenas que evocam uma profunda harmonia entre os seres e a natureza, fazem com que poeminhas da terra converte-se em uma singela homenagem aos momentos simples do cotidiano da vida na aldeia."
  },
  {
    "id": "robustas-amazonicos-os-cafeeiros-cultivados-em-rondonia-coautoria",
    "title": "Robustas Amazônicos os Cafeeiros Cultivados em Rondônia",
    "author": "Coautoria",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Embrapa",
    "level": "LIVRE",
    "synopsis": "O cultivo de cafeeiros na amazônia não é algo recente. A história oficial do café no brasil sugere, inclusive, que a cultura foi introduzida no país pela amazônia, por meio do estado do pará, no ano de 1727. Em rondônia, há relatos da presença de cultivos de cafeeiros no ano de 1889, quase 100 anos antes da criação do estado, nas proximidades do real forte príncipe da beira, na fronteira do brasil com a bolívia. Neste livro será possível entender um pouco sobre a história dos roubustas amazônicos."
  },
  {
    "id": "roquette-pinto-o-corpo-a-corpo-com-o-brasil-claudio-bojunga",
    "title": "Roquette-pinto o Corpo a Corpo com o Brasil",
    "author": "Claudio Bojunga",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Casa da Palavra",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "“muitas linhas se compuseram no desenho da figura de roquette-pinto, mas o seu traço principal e individualizador está para ser identificado: seria o do mestre ou do feiticeiro?”. Foi assim que o poeta carlos drummond de andrade traduziu a magia de edgard roquette-pinto (1884-1954), em texto publicado no jornal correio da manhã dois dias depois da morte do personagem objeto de sua crônica. Para drummond, tratava-se de “um professor de imaginação, posta a serviço de utilidades e estudos diversos”. O traço unificado de um personagem de múltiplas facetas emerge no livro roquette-pinto – o corpo a corpo com o brasil, do jornalista cláudio bojunga. Neto do biografado, o autor dedicou três anos à pesquisa do médico, antropólogo, etnólogo, radialista, ensaísta e poeta. Com documentos inéditos. O livro tem patrocínio da secretaria municipal de cultura, através da lei municipal de incentivo à cultura e da ecology brasil. Como afirma claudio bojunga, a trajetória de roquette-pinto se divide em duas vertentes que não seguem a ordem cronológica: a primeira é a do médico, do pesquisador, do antropólogo e naturalista, do cientista humanista e positivista não ortodoxo, do socialista democrático e nacionalista. A segunda vertente da vida dele é definida por bojunga como de “democratização dos saberes”: a educação do povo, a divulgação da ciência, a popularização da cultura, a disseminação do civismo e do amor ao país. Primeiro como professor, depois com o rádio e o cinema, roquette-pinto atuou na divulgação e na massificação do conhecimento por meio das novas tecnologias surgidas a partir dos anos 1920. Tornou-se assim o pioneiro do rádio no brasil – ele criou e dirigiu a rádio sociedade, fundada em 1922, atual rádio mec. Com a rádio e com o cinema, passou a se dedicar durante anos a provar que a miscigenação racial da população brasileira não era negativa, pensamento recorrente na comunidade científica defendia da época.\""
  },
  {
    "id": "taina-e-os-guardioes-da-amazonia-juju-a-ararinha-azul-rafael-campos-rocha",
    "title": "Tainá e os Guardiões da Amazônia: Juju, a Ararinha Azul",
    "author": "Rafael Campos Rocha",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Nesta história, a guerreira tainá, ao lado dos companheiros pepe, suri e catu, segue numa aventura para libertar os animais, defender seu lar e a natureza e ensinar com a sabedoria das crianças a beleza da liberdade. A flecha azul sempre aponta o caminho a seguir!"
  },
  {
    "id": "tulu-em-busca-de-um-lugar-para-viver-donaldo-buchweitz",
    "title": "Tulu: em Busca de um Lugar para Viver",
    "author": "Donaldo Buchweitz",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Ciranda Cultural",
    "level": "LIVRE",
    "synopsis": "Tulu vive entre a floresta e o lavrado. Ele é amigo dos animais, das plantas e de toda a natureza que o cerca. Mas tudo começa a mudar quando as queimadas tomam conta da mata. Nesta história, tulu vai descobrir que não são só os animais e a floresta que estão em perigo..."
  },
  {
    "id": "tupiliques-heranca-indigena-no-portugues-do-brasil-cesar-obeid",
    "title": "Tupiliques Herança Indígena no Português do Brasil",
    "author": "César Obeid",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Você já parou para pensar na quantidade de palavras de origem tupi existentes em nosso idioma? São essas influências que fazem da língua portuguesa falada no brasil um idioma tão especial!"
  },
  {
    "id": "turma-da-monica-a-mandioca-mauricio-de-souza",
    "title": "Turma da Mônica: a Mandioca",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-a-princesa-de-jericoacoara-mauricio-de-souza",
    "title": "Turma da Mônica: a Princesa de Jericoacoara",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-cabra-cabriola-mauricio-de-souza",
    "title": "Turma da Mônica: Cabra Cabriola",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-curupira-mauricio-de-souza",
    "title": "Turma da Mônica: Curupira",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-dama-de-vermelho-mauricio-de-souza",
    "title": "Turma da Mônica: Dama de Vermelho",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-japiim-magico-mauricio-de-souza",
    "title": "Turma da Mônica: Japiim Mágico",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-joao-de-barro-mauricio-de-souza",
    "title": "Turma da Mônica: João-de-barro",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-jurutai-mauricio-de-souza",
    "title": "Turma da Mônica: Jurutaí",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-negrinho-do-pastoreio-mauricio-de-souza",
    "title": "Turma da Mônica: Negrinho do Pastoreio",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-pai-do-mato-mauricio-de-souza",
    "title": "Turma da Mônica: Pai do Mato",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-da-monica-vitoria-regia-mauricio-de-souza",
    "title": "Turma da Mônica: Vitória-régia",
    "author": "Maurício de Souza",
    "category": "Povos Originários",
    "collection": true,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Brincando de folclore."
  },
  {
    "id": "turma-do-tori-o-grande-tesouro-humberto-milanez",
    "title": "Turma do Torí: o Grande Tesouro",
    "author": "Humberto Milanez",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Quadrinhos."
  },
  {
    "id": "ymaguare-mokoi-po-ha-mbohapy-patricia-solari",
    "title": "Ymaguaré Mokõi Po Ha Mbohapy",
    "author": "Patrícia Solari",
    "category": "Povos Originários",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mitos e lendas guaraní"
  },
  {
    "id": "pendragon-n-6-mika",
    "title": "Pendragon N° 6",
    "author": "Mika",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Astral Comics",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Pen é um caçador de drações que embarcará em uma aventura para salvar sua aldeia de uma terrível maldição, após matar um draão sagrado, por engano, ele terá que seguir os conselhos de um velho eremita, derilum. E sair em busca de um objeto que mudará o percurso dessa história."
  },
  {
    "id": "0-turma-da-monica-jovem-garoto-solteiro-procura-vol-71-mauricio-de-sousa",
    "title": "0))turma da Mônica Jovem: Garoto Solteiro Procura (vol. 71)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Após mônica e cebola definitivamente terminarem o namoro, o garoto decide que é hora de se reinventar e encontrar um novo amor"
  },
  {
    "id": "a-escrava-isaura-bernarddo-guimaraes",
    "title": "A Escrava Isaura",
    "author": "Bernarddo Guimarães",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "\"é uma reles escrava. Seu corpo e sua alma me pertecem. Se não se sujeitar a mim. Será castigada no tronco. E do tronco irá para o túmulo!\" diante da recusa em ceder ao assédio de seu brutal senhor. A jovem isaura sabe que a ameaça vai se concretizar. Como aconteceu no passado com sua mãe, que foi açoitada até a morte. Mas isaura prefere morrer a entregar ao desumano leôncio o único refúgio de liberdade que possui: seu amor."
  },
  {
    "id": "aventuras-da-familia-brasil-luis-fernando-verissimo",
    "title": "Aventuras da Família Brasil",
    "author": "Luis Fernando Verissimo",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Neste livro , ele faz graça das situações mais complcadas - que todo mundo , ou quase todo mundo , já viveu edntro de casa."
  },
  {
    "id": "aventuras-da-familia-brasil-lus-fernando-verissimo",
    "title": "Aventuras da Família Brasil",
    "author": "Lus Fernando Verissimo",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Objetiva",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O caçula quer ir pra disney, mas com que dinheiro? E as férias na praia - ih... Também vão ficar para o próximo verão. Como é que a gente faz, para se divertir? Dá pra pedir um cartão de crédito de presente pro papai noel? E o vô, será que explica pra gente, de uma vez por todas, essas diferenças entre meninos e meninas? O universo da família brasil é muito parecido com o seu - na verdade, é nele que foi inspirado. Calado e muito observador, o escritor luis fernando verissimo consegue, como poucos, entender e traduzir o cotidiano da família brasileira, com todas as suas dificuldades e aventuras."
  },
  {
    "id": "batman-a-historia-do-batman-scott-ciencin",
    "title": "Batman a História do Batman",
    "author": "Scott Ciencin",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Batman, o seu herói favorito, combate o crime de gotham city com todas as forças! Mas como bruce wayne se tornou o guardião da cidade? Para muitos isso ainda é um mistério. Para descobrir os segredos do cavaleiro das trevas, embarque nesta aventura!"
  },
  {
    "id": "batman-e-lois-lane-ed-mcginness",
    "title": "Batman e Lois Lane",
    "author": "Ed Mcginness",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Abril Coleções",
    "level": "LIVRE",
    "synopsis": "Aventuras de batman e lois lane."
  },
  {
    "id": "batman-e-lous-lane-a-nova-dupla-dinamica-bob-kane",
    "title": "Batman e Lous Lane - a Nova Dupla Dinâmica",
    "author": "Bob Kane",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Abril S.a",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "7 histórias para voce se divertir."
  },
  {
    "id": "batman-gotham-city-verde-scott-ciencin",
    "title": "Batman Gotham City Verde",
    "author": "Scott Ciencin",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Gotham city está em perigo mais uma vez! A ameaça, agora é a hera venenosa, uma estranha criatura que tem o poder de controlar a natureza. Ela está roubando raízes e ervas raras das floriculturas da cidade! O que será que ela pretende com isso? Será que o batman vai conseguir resolver esse mistério?"
  },
  {
    "id": "batman-a-historia-do-batman-scoot-peterson",
    "title": "Batman- a História do Batman",
    "author": "Scoot Peterson",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Batman , o seu herói favorito , combate o crime de gothan city com todas as suas forças ! Mas como bruce wayne se tornou o guardião da cidade ? Para muitos , isso ainda é um mistério."
  },
  {
    "id": "capitao-cueca-e-o-aterrorizante-retorno-do-caido-tilintar-das-calcas-dav-pilkey",
    "title": "Capitão Cueca e o Aterrorizante Retorno do Caído Tilintar das Calças",
    "author": "Dav Pilkey",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Companhia das Letrinhas",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma nova imagem no tempo vai mudar os rumos da humanidade ! Agora , acompanhamos jorge e haroldo de volta aos dias despreocupados do jardim de infância."
  },
  {
    "id": "capitao-cueca-e-o-aterrorizante-retorno-do-caido-tilintar-das-calcas-dav-pilkey-2",
    "title": "Capitão Cueca: e o Aterrorizante Retorno do Caído Tilintar das Calças.",
    "author": "Dav Pilkey",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma nova viagem no tempo vai mudar os rumos da humanidade! Agora, acompanhamos jorge e haroldo de volta aos dias despreocupados do jardim de infância, quando a coisa mais assustadora que precisavam enfrentar não era um cientista mal-intencionado ou alienígenas prontos para destruir a terra, mas um valentão chamado kipper krupp, sobrinho do sr.krupp."
  },
  {
    "id": "chiclete-dormindo-com-tubaroes-megan-mcdonald",
    "title": "Chiclete - Dormindo com Tubarões",
    "author": "Megan Mcdonald",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Salamandra",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Chichete e a família vão passar uma noite no aquário, dormindo em sacos de dormir e tudo mais. Só que chiclete não está muito feliz. Ele adora aprender tudo sobre tubarões, mas não tem vontade nenhuma de dormir no mesmo quarto que eles. Em vez de um sonho que se realiza, para ele essa noite pode se transformar no seu mais horrível pesadelo!"
  },
  {
    "id": "chiclete-o-pedia-megan-mcdonald",
    "title": "Chiclete - o - Pédia",
    "author": "Megan Mcdonald",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Salamandra",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Desde apelidos até umbigo, de cobaia até xixi de sapo, este livro está cheinho de coisas que grudam, escorregam, deslizam, dão nojo ou cheiram mal! São tantos fatos estranhos que você vai ficar horas de boca aberta, falando \"ah, não acredito!\"."
  },
  {
    "id": "chiclete-o-incrivel-garoto-que-encolhe-megan-mcdonald",
    "title": "Chiclete - o Incrível Garoto que Encolhe",
    "author": "Megan Mcdonald",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Salamandra",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Todos os dias de manhã, judy mede a altura do irmão. É sempre a mesma: 1 metro e 10 centímetros. Até a salamandra de estimação da classe está crescendo mais depressa que o chiclete. Um belo dia, a fita métrica marca apenas 1 metro e 9 centímetros. Mas será possível? Será que chiclete está encolhendo?"
  },
  {
    "id": "chico-bento-moco-a-primeira-semana-vol-5-mauricio-de-sousa",
    "title": "Chico Bento Moço: a Primeira Semana (vol. 5)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Chico bento enfrenta o desafio de se adaptar aos primeiros dias longe da roça e à rotina da vida universitária"
  },
  {
    "id": "chico-bento-moco-a-profecia-vol-57-mauricio-de-sousa",
    "title": "Chico Bento Moço: a Profecia (vol. 57)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Chico bento e seus amigos enfrentam uma ameaça milenar quando uma antiga profecia misteriosa começa a se cumprir na faculdade"
  },
  {
    "id": "chico-bento-moco-balada-a-fantasia-vol-16-mauricio-de-sousa",
    "title": "Chico Bento Moço: Balada à Fantasia (vol. 16)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Após uma agitada festa universitária, chico bento acorda sem se lembrar de nada da noite anterior. Com medo de ter estragao seu namoro com rosinha ou feito algum vexame, ele investiga seus passos para remontar a noite"
  },
  {
    "id": "chico-bento-moco-festa-no-parque-vol-3-mauricio-de-sousa",
    "title": "Chico Bento Moço: Festa no Parque (vol. 3)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A história mostra a vida do chico bento em adaptação com a faculdade, destacando sua ligação com a natureza"
  },
  {
    "id": "chico-bento-moco-o-fim-do-genesinho-vol-43-mauricio-de-sousa",
    "title": "Chico Bento Moço: o Fim do Genesinho? (vol. 43)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Depois de tantas rivalidades e divergências desde a infância vila abobrinha, o rival de chico bento passa por uma grande transformação. Que tipo de pessoa ele quer ser?"
  },
  {
    "id": "chico-bento-moco-um-caipira-na-corte-do-rei-artur-vol-20-mauricio-de-sousa",
    "title": "Chico Bento Moço: um Caipira na Corte do Rei Artur (vol. 20)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Chico bento viaja no tempo após um misterioso feitiço e acorda em plena idade média, no reino de camelot"
  },
  {
    "id": "chico-bento-moco-um-novo-comeco-vol-1-mauricio-de-sousa",
    "title": "Chico Bento Moço: um Novo Começo (vol.1)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "É a primeira edição da transição do chico bento, da infância para a vida adulta"
  },
  {
    "id": "contos-de-fadas-em-quadrinhos-chris-duffy",
    "title": "Contos de Fadas em Quadrinhos",
    "author": "Chris Duffy",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Galeria Junior",
    "level": "LIVRE",
    "synopsis": "Dezessete contos de fadas em novas interpretações, novos estilos e cenários. Nesta antologia única, histórias que todos conhecem se unem a outras não tão conhecidas. O resultado, divertido, mostra que nem tudo é estático no unirveso das fadas!"
  },
  {
    "id": "demolidor-3-stan-lee",
    "title": "Demolidor 3",
    "author": "Stan Lee",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Marvel",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Nosso herói cego enfrentará o temível saqueador e, para tanto, contará com a ajuda de ka-zar, cuja origem será revelada! Mas o demolidor também atuará num cenário mais urbano com a ameaça dos homens-animais e o touro!"
  },
  {
    "id": "diferenciados-em-sou-autista-e-agora-camila-batista",
    "title": "Diferenciados em Sou Autista e Agora ?",
    "author": "Camila Batista",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Este é um livro baseado em fatos reais , que conta a história de um garoto que descobriu ser autista , retratando suas dificuldades e suas superações com o processo terapêutico."
  },
  {
    "id": "disney-big-ratopolis-disney",
    "title": "Disney Big Ratópolis",
    "author": "Disney",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Abril Coleções",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Aventuras de mickey e seus amigos."
  },
  {
    "id": "disney-big-star-tranko-o-retorno-disney",
    "title": "Disney Big Star Tranko - o Retorno",
    "author": "Disney",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Abril Coleções",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mickey e seus amigos em uma aventura no espaço."
  },
  {
    "id": "eu-sou-autista-camila-batista",
    "title": "Eu Sou Autista!",
    "author": "Camila Batista",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Este é um livro baseado em fatos reais, que conta a história de um garoto que descobriu ser autista, retratando suas dificuldades e suas superrações com o processo terapêutico. \"\"sou autista! E agora?\" explica o autismo e trata de assuntos como bullying, inclusão, neurodiversidade, terapias, técnicas de regulação sensorial e emocional, alimentação e direitos do autista."
  },
  {
    "id": "fazendo-meu-filme-paula-pimenta",
    "title": "Fazendo Meu Filme",
    "author": "Paula Pimenta",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Nemo",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma novela feita em quadrinhos."
  },
  {
    "id": "guerra-e-paz-disney",
    "title": "Guerra e Paz",
    "author": "Disney",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Abril S.a",
    "level": "LIVRE",
    "synopsis": "Clássicos da literatura."
  },
  {
    "id": "historias-em-quadrinhos-de-a-a-z-coautoria",
    "title": "Histórias em Quadrinhos de a a Z",
    "author": "Coautoria",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Ciranda Cultural",
    "level": "LIVRE",
    "synopsis": "COM ESTE ALMANAQUE, AS CRIANÇAS PODERÃO MERGULHAR NO UNIVERSO DAS HISTÓRIAS EM QUADRINHOS, ACOMPANHAR A LINHA DO TEMPO DAS PUBLICAÇÕES, CONHECER PERSONAGENS DE A a Z, SABER MUITO MAIS SOBRE OS SUPER-HERÓIS, ALÉM DE CRIAR SUA PRÓPRIA HQ. PREPAREM-SE! A AVENTURA JÁ VAI COMEÇAR!"
  },
  {
    "id": "homem-aranha-marvel-comics",
    "title": "Homem-aranha",
    "author": "Marvel Comics",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Panini",
    "level": "LIVRE",
    "synopsis": "Toda lenda tem um começo. Todo herói tem uma origem."
  },
  {
    "id": "homem-aranha-muitas-faces-do-heroi-aracnideo-stan-lee",
    "title": "Homem-aranha - Muitas Faces do Herói Aracnídeo",
    "author": "Stan Lee",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Marvel",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "As muitas faces do herói aracnídeo"
  },
  {
    "id": "homem-aranha-x-man-na-mira-da-arma-x-3-coautoria",
    "title": "Homem-aranha/x-man: na Mira da Arma X 3",
    "author": "Coautoria",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Panini",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O cerco se fecha sobre os heróis enquanto o residual do programa arma x mostra seu poder total!"
  },
  {
    "id": "julio-lancelloti-coautoria",
    "title": "Júlio Lancelloti",
    "author": "Coautoria",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Draco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um homem que encara de frente o sofrimento do mundo. Que não muda de calçada, que se aproxima, que estende a mão, que dá o pão, que acolhe - e que luta. Padre júlio lancellotti sente a dor, o cansaço e as frustações que todos sentimos, mas é exatamente a sua humanidade que o torna extraordinário. Sua coragem diária, seu amor profundo, sua batalha por justiça e empatia transcendem o ódio, o preconceito, o medo e inspira as pessoas."
  },
  {
    "id": "julio-lancellotti-coautoria",
    "title": "Júlio Lancellotti",
    "author": "Coautoria",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Draco",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um homem que encara de frente o sofrimento do mundo. Que não desvia o olhar , que não muda de calçada , se aproxima , que estende a mão , que dá o pão , que acolhe."
  },
  {
    "id": "literatura-brasileira-em-quadrinhos-a-nova-california-lima-barreto",
    "title": "Literatura Brasileira em Quadrinhos - a Nova Califórnia",
    "author": "Lima Barreto",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Escala",
    "level": "LIVRE",
    "synopsis": "Como o próprio nome diz, a coleção literatura brasileira em quadrinhos traz até, grandes textos da nossa literatura apresentados na forma ágil e certeira dos quadrinhos, ou \" a nova arte \" como citam alguns. São contos originais de nomes como machado de assis e lima barreto que não podem faltar em sua biblioteca!"
  },
  {
    "id": "literatura-brasileira-em-quadrinhos-o-enfermeiro-machado-de-assis",
    "title": "Literatura Brasileira em Quadrinhos - o Enfermeiro",
    "author": "Machado de Assis",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Escala",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Como o próprio nome diz, a coleção literatura brasileira em quadrinhos traz até, grandes textos da nossa literatura apresentados na forma ágil e certeira dos quadrinhos, ou \" a nova arte \" como citam alguns. São contos originais de nomes como machado de assis e lima barreto que não podem faltar em sua biblioteca!"
  },
  {
    "id": "literatura-brasileira-em-quadrinhos-um-musico-extraordinario-lima-barreto",
    "title": "Literatura Brasileira em Quadrinhos - um Músico Extraordinário",
    "author": "Lima Barreto",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Escala",
    "level": "LIVRE",
    "synopsis": "Como o próprio nome diz, a coleção literatura brasileira em quadrinhos traz até, grandes textos da nossa literatura apresentados na forma ágil e certeira dos quadrinhos, ou \" a nova arte \" como citam alguns. São contos originais de nomes como machado de assis e lima barreto que não podem faltar em sua biblioteca!"
  },
  {
    "id": "luluzinha-e-sua-turma-que-bola-e-este-renato-fagundes-e-julia-spadaccini",
    "title": "Luluzinha e Sua Turma - que Bola É Este ?",
    "author": "Renato Fagundes e Julia Spadaccini",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Pixel",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Depois de um sonho , bola se deu conta que está a fim de lulu e foi atrás de todos os rolos da amiga para descobrir como conquista-lá."
  },
  {
    "id": "luluzinha-e-sua-turma-a-casa-mal-assombrada-renato-fagundes-e-julia-spadaccini",
    "title": "Luluzinha e Sua Turma- a Casa Mal-assombrada",
    "author": "Renato Fagundes e Julia Spadaccini",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Pixel",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Gente , preparem seus corações , pois os sustos e romances estarão nessa história de terror com o bom humor e liçṍes de que a vida que só a minha turma sabe viver."
  },
  {
    "id": "luluzinha-e-sua-turma-ta-na-cara-renato-fagundes-e-julia-spadaccini",
    "title": "Luluzinha e Sua Turma- Ta na Cara",
    "author": "Renato Fagundes e Julia Spadaccini",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Pixel",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A escola organiza um desfile de moda, oque agita o grupo da escola."
  },
  {
    "id": "luluzinha-e-sua-turma-vestida-para-arrasar-renato-fagundes-e-julia-spadaccini",
    "title": "Luluzinha e Sua Turma- Vestida para Arrasar!",
    "author": "Renato Fagundes e Julia Spadaccini",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Pixel",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Bola descobriu provas de que zico estava mesmo envolvido com o roubo ao festival mars ataca! E que armou com um cara chamado cicatriz para culpar os zangṍes da zona norte."
  },
  {
    "id": "luluzinha-n-15-renato-fagundes",
    "title": "Luluzinha N° 15",
    "author": "Renato Fagundes",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Ediouro",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": ""
  },
  {
    "id": "luluzinha-n-19-renato-fagundes",
    "title": "Luluzinha N° 19",
    "author": "Renato Fagundes",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Ediouro",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": ""
  },
  {
    "id": "luluzinha-n-22-renato-fagundes",
    "title": "Luluzinha N° 22",
    "author": "Renato Fagundes",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Ediouro",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": ""
  },
  {
    "id": "luluzinha-n-7-renato-fagundes",
    "title": "Luluzinha N° 7",
    "author": "Renato Fagundes",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Ediouro",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": ""
  },
  {
    "id": "magali-um-dia-incrivel-com-a-magali-mauricio-de-sousa",
    "title": "Magali: um Dia Incrível com a Magali",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Mauricio de Sousa",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "maluquinho-pelo-mundo-ziraldo",
    "title": "Maluquinho Pelo Mundo",
    "author": "Ziraldo",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Globinho",
    "level": "LIVRE",
    "synopsis": "Já imaginou se você fosse russo ou australiano ou mesmo japonês? Como seriam suas brincadeiras, suas travessuras? E seus amigos? E sua família? Graças á internet, o menino maluquinho conquistou amigos no mundo inteiro. Amigos iguaizinhos a ele em quase tudo! Foram eles que nos contaram as histórias que você vai ler aqui. Viajar é bom... Mas ler é ainda melhor!"
  },
  {
    "id": "memorias-postumas-de-bras-cubas-machado-de-assis",
    "title": "Memórias Póstumas de Brás Cubas",
    "author": "Machado de Assis",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Principis",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "\" não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.\" com essas palavras, o narrador de memórias póstumas de brás cubas resume a sua vida. Um romance repleto de digressões filosóficas, o escritor se vale da posição privilegiada de brás cubas, que como \"defunto autor\", narra as suas desventuras e revela as contradições da sociedade brasileira do século xix, especialmente por meio da análise aprofundada da psicologia das personagens."
  },
  {
    "id": "monica-joven-el-peso-de-un-problema-vol-9-mauricio-de-sousa",
    "title": "Mónica Joven: El Peso de Un Problema (vol. 9)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica está decidida a mudar de vida e começa uma dieta rigorosa ao lado de magali, que também se vê obrigada a rever seus hábitos alimentares (em espanhol)"
  },
  {
    "id": "nick-fury-marvel-comics",
    "title": "Nick Fury",
    "author": "Marvel Comics",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Salvat",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ele esmagou a máquina de guerra nazista como o sargento fury, do comando selvagem, e manteve o mundo a salvo das ameaças da hidra e outras organizações criminosas como diretor da s.h.i.e.l.d. Agora, nick fury está de volta para treinar uma nova geração de heróis: os gerreiros secretos!"
  },
  {
    "id": "noite-de-almirante-machado-de-assis",
    "title": "Noite de Almirante",
    "author": "Machado de Assis",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Quatro contos muito representativos da produção literária de machado de assis, um dos mais importantes autores da língua portuguesa, foram transformados em histórias em quadrinhos neste livro. Não por acaso, neles há uma caracyerística em comum: todos têm uma personagem feminina determinante para os rumos da história que é contada."
  },
  {
    "id": "o-alienista-machado-de-assis",
    "title": "O Alienista",
    "author": "Machado de Assis",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um médico chamado simão bacamarte resolve entender - e curar - a loucura. Para isso, consrói em itaguaí um hospício, que logo fica abarrotado de doidos, ou supostos malucos. Só que ele não prevê no que está se metendo: a cidade é revirada pelo avesso, a população apavorada se agita, as autoridades locais não se entendem, e até uma revolta, com batalha violenta em praça pública, acontece."
  },
  {
    "id": "o-cidadao-invisivel-ivan-jaf",
    "title": "O Cidadão Invisível",
    "author": "Ivan Jaf",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "LIVRE",
    "synopsis": "Uma cidade, dois mundos diferentes. Naco e patrícia são personagens desse cenário urbano, são as duas pontas da mesma realidade. O menino de rua naco se tornou invisível. Ele busca recuperar sua visibilidade, mas acaba se rendendo às tentações do novo \"poder\". Patŕcia é uma garota de classe média que não se conforma com a desigualdade social. Um dia, os dois se encontram. E a experiência irá mudar suas vidas."
  },
  {
    "id": "o-corcunda-de-notre-dame-victor-hugo",
    "title": "O Corcunda de Notre-dame",
    "author": "Victor Hugo",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Delprado",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Primeiro romance de victor hugo, o corcunda de notre-dame conta a trágica história de uma jovem cigana, esmeralda, na paris do século xv. Vítima do amor passional que desperta em três homens - quatímodo. O tocador de sinos de notr-dame, o infame aequidiácono frollo, e o jovem capitão phoebus de châteaupers -, esmeralda personifica o heroísmo romântico presente em toda a obra do grande escritor francês."
  },
  {
    "id": "o-cortico-aluisio-azevedo",
    "title": "O Cortiço",
    "author": "Aluísio Azevedo",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Principis",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um romance que denuncia as mazelas sociais enfrentadas pelos moradores de um cortiço no rio de janeiro. João romão, bertoleza, pombinha rita baiana, piedade, jerônimo... Ninguém escapa á analise impiedosa do narrador. Não é sem razão que esse romance ocupa um lugar de destaque entre os clássicos da literatura brasileira; ele convida o leitor a analisar por meio da observação crítica do cotidiano das personagens a animalização do ser humano."
  },
  {
    "id": "o-dia-que-nate-entrou-para-a-historia-lincoln-peirce",
    "title": "O Dia que Nate Entrou para a História",
    "author": "Lincoln Peirce",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Sextante",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Nate sabe que nasceu para fazer coisas importantes. Importantíssimas. Mas a vida nem sempre é do jeito que você quer só porque é o máximo. Parece que os problemas perseguem nate, mas ele não quer nem saber. Leu num biscoitinho da sorte que está destinado ao sucesso. Conheça nate, um garoto que adora bancar o espertinho, só se mete em confusão e deixa todos os professores malucos."
  },
  {
    "id": "os-detetives-do-farol-em-velhas-pecas-velhos-truques-e-fantasma-na-colonia-de-fe",
    "title": "Os Detetives do Farol em Velhas Peças, Velhos Truques e Fantasma na Colonia de Férias",
    "author": "Klaus Bliesener",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Mostre seus dons de investigação ajudando os três irmãos a desvendar mais dois casos intrigantes."
  },
  {
    "id": "os-melhores-inimigos-jean-pierre-filiu-david-b",
    "title": "Os Melhores Inimigos",
    "author": "Jean-pierre Filiu & David B.",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "LIVRE",
    "synopsis": "Há duas afirmções correntes e complementares que devemos lembrar á partida. A primeira insiste que, numa guerra, a maior vítima é a verdade. A segunda assegura que a neutralidade está restrita ao sabão de coco, porque uma narrativa jamais será isenta."
  },
  {
    "id": "otelo-william-shakespeare",
    "title": "Otelo",
    "author": "William Shakespeare",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Nemo",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Otelo, um nobre e respeitado general mouro a serviço de veneza, conquista o coração da jovem desdêmona e se casa com ela em segredo"
  },
  {
    "id": "pen-dragon-a-transformacao-mika",
    "title": "Pen Dragon- a Transformação",
    "author": "Mika",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Astral Comics",
    "level": "LIVRE",
    "synopsis": "Pen é um caçador de dragões que embarcará em uma aventura para salvar sua aldeia de uma terrível maldição."
  },
  {
    "id": "pen-dragon-em-busca-da-espada-mika",
    "title": "Pen Dragon- em Busca da Espada",
    "author": "Mika",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Astral Comics",
    "level": "LIVRE",
    "synopsis": "Pen é um caçador de dragões que embarcará em uma aventura para salvar sua aldeia de uma terrível maldição."
  },
  {
    "id": "pendragon-n-5-mika",
    "title": "Pendragon N° 5",
    "author": "Mika",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Astral Comics",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Pen é um caçador de drações que embarcará em uma aventura para salvar sua aldeia de uma terrível maldição, após matar um draão sagrado, por engano, ele terá que seguir os conselhos de um velho eremita, derilum. E sair em busca de um objeto que mudará o percurso dessa história."
  },
  {
    "id": "quincas-borba-em-quadrinhos-machado-de-assis",
    "title": "Quincas Borba em Quadrinhos",
    "author": "Machado de Assis",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Ftd",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um professor ingênuo, uma herança inesperada e um casal ambicioso. Esses são os principais elementos da trama de quincas borba, segundo livro da trilogia realista de machado de assis."
  },
  {
    "id": "robinson-crusoe-daniel-defoe",
    "title": "Robinson Crusoé",
    "author": "Daniel Defoe",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "L&pm",
    "level": "EM - Ensino Médio",
    "synopsis": "Contrariando a vontade do pei, o jovem robison crusoé sai da inglaterra em busca de aventuras, embarcando numa viagem que mudaria completamente o rumo de sua vida. Navegando da áfrica até a américa, desbravando mares, conhecendo povos, robinson passa até pelo brasil. Mas em uma de suas viagens a sorte o abandona e, após o naufrágio de seu navio, ele se vê sozinho numa ilha deserta. De uma hora para outra, precisa aprender a sobreviver e vencer um dos seus piores medos, a solidão."
  },
  {
    "id": "shakespeare-otelo-jozz-e-akira-sanoki",
    "title": "Shakespeare Otelo",
    "author": "Jozz e Akira Sanoki",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Nemo",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "O trágico amor de otelo e desdêmona, envolvido pelas intrigas do traiçeiro iago, surge com toda força nesta hq intensa e dramática. Uma história que irá te envolver da primeira á última página!"
  },
  {
    "id": "turma-da-monica-jovem-vol-13-e-14-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem Vol 13 e 14",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Este volume contém a história \"o dono do mundo\" e o \"dono do mundo parte final\""
  },
  {
    "id": "turma-da-monica-jovem-a-aventura-continua-vol-2-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: a Aventura Continua (vol. 2)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica, cebola, cascão e magali continuam a jornada na dimensão mágica para resgatar yuka e combater as sombras"
  },
  {
    "id": "turma-da-monica-jovem-a-brigada-dos-ossos-cruzados-parte-1-vol-65-mauricio-de-so",
    "title": "Turma da Mônica Jovem: a Brigada dos Ossos Cruzados Parte 1 (vol. 65)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A impiedosa pirata espacial cabeleira negra retorna em busca do maior tesouro do universo, ameaçando a paz na galáxia"
  },
  {
    "id": "turma-da-monica-jovem-a-brigada-dos-ossos-cruzados-parte-2-vol-66-mauricio-de-so",
    "title": "Turma da Mônica Jovem: a Brigada dos Ossos Cruzados Parte 2 (vol. 66)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma continua a intensa batalha no espaço para impedir os planos destrutivos da cabeleira negra"
  },
  {
    "id": "turma-da-monica-jovem-a-ceifeira-vol-9-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: a Ceifeira (vol. 9)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma precisa enfrentar uma perigosa vilã conhecida como a ceifeira, que ameaça espalhar o caos e a destruição"
  },
  {
    "id": "turma-da-monica-jovem-a-invasao-dos-robos-zumbis-vol-48-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: a Invasão dos Robôs-zumbis (vol. 48)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um vírus de computador altamente perigoso começa a se espalhar e assumir o controle de todos os dispositivos eletrônicos e robôs da cidade, transformando-os em verdadeiras máquinas descontroladas e ameaçadoras!"
  },
  {
    "id": "turma-da-monica-jovem-a-nova-monica-vol-61-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: a Nova Mônica (vol. 61)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica decide mudar radicalmente de atitude e visual para se tornar uma garota mais calma, delicada e sem acessos de raiva"
  },
  {
    "id": "turma-da-monica-jovem-academia-de-ninjas-vol-77-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Academia de Ninjas (vol. 77)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O mestre kagami convida a turma para uma viagem inesquecível ao japão, onde eles têm a oportunidade de treinar em uma tradicional academia de ninjas"
  },
  {
    "id": "turma-da-monica-jovem-amor-de-anjo-vol-46-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Amor de Anjo (vol. 46)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O anjo ângelo se apaixona por nina, uma garota misteriosa que revela ser uma ninfa protetora da natureza"
  },
  {
    "id": "turma-da-monica-jovem-baile-a-fantasia-vol-35-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Baile à Fantasia (vol. 35)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "As mães da turma decidem organizar um inesquecível baile à fantasia no colégio do limoeiro, mas o que era para ser uma noite de diversão logo se transforma em um verdadeiro mistério"
  },
  {
    "id": "turma-da-monica-jovem-campeoes-da-justica-vol-62-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Campeões da Justiça (vol. 62)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Os garotos decidem formar um grupo de super-heróis inspirados nos quadrinhos para combater pequenas injustiças do dia a dia"
  },
  {
    "id": "turma-da-monica-jovem-circo-macabro-vol-80-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Circo Macabro (vol. 80)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma decide visitar um circo misterioso que chega ao bairro, sem imaginar que o local é denominado por forças sombrias"
  },
  {
    "id": "turma-da-monica-jovem-circo-macabro-fim-do-show-vol-81-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Circo Macabro Fim do Show (vol. 81)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Traz a conclusão da saga com o térmno de namoro entre mônica e cebola, em uma narrativa emocionante marcad pelo amadurecimento dos personagens"
  },
  {
    "id": "turma-da-monica-jovem-desencontros-vol-96-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Desencontros... (vol. 96)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Cebola acaba sendo sequestrado por uma misteriosa organização secreta"
  },
  {
    "id": "turma-da-monica-jovem-e-pra-voce-vol-8-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: É Pra Você! (vol. 8)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica recebe uma carta de amor anônima com um poema comovente e tenta descobrir quem é o seu admirador secreto"
  },
  {
    "id": "turma-da-monica-jovem-emergencia-medica-vol-87-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Emergência Médica (vol. 87)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Enquanto enfrentam os desafios da rotina hospitalar, mônica e seus amigos precisam aprender a lidar com a pressão, a empatia e a importância de cuidar do próximo"
  },
  {
    "id": "turma-da-monica-jovem-eu-sou-voce-vol-64-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Eu Sou Você (vol. 64)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica e cebola trocam misteriosamente de corpo após um experimento e são forçados a viver a rotina um do outro"
  },
  {
    "id": "turma-da-monica-jovem-fortes-emocoes-vol-4-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Fortes Emoções (vol. 4)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma viaja para um parque de diversões temático e radical para curtir momentos de muita adrenalina"
  },
  {
    "id": "turma-da-monica-jovem-herdeiros-da-terra-capitulo-2-vol-84-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Herdeiros da Terra Capítulo 2 (vol. 84)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Depois de ajudar o franja a encontrar a cidade perdida dos incas, chico bento e a turma da mônica terão que enfrentar misteriosas criaturas ancestrais para salvar a alma da rosinha impedir a destruição de toda a humanidade!"
  },
  {
    "id": "turma-da-monica-jovem-jogos-mortiferos-vol-68-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Jogos Mortíferos (vol. 68)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma viaja para uma ilha tropical paradisíaca para participar de um reality show de sobrevivência"
  },
  {
    "id": "turma-da-monica-jovem-masmorras-e-dragoes-vol-38-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Masmorras e Dragões (vol. 38)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Em uma partida de rpg de mesa, a turma é transportada para um mundo de fantasia inspirado em mavidele"
  },
  {
    "id": "turma-da-monica-jovem-meu-idolo-vol-72-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Meu Ídolo (vol. 72)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Quando rola um concurso para passar um dia inteirinho com o astro pop do momento, juninho baby, m"
  },
  {
    "id": "turma-da-monica-jovem-monica-e-o-cavaleiro-vol-4-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Mônica e o Cavaleiro (vol. 4)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica e cebola viajam em uma dimensão mágica baseada em contos de fadas para salvar o reino de um terrível vilão"
  },
  {
    "id": "turma-da-monica-jovem-monstros-do-id-parte-1-vol-15-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Monstros do Id Parte 1 (vol. 15)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma nova e assustadora ameaça aparece no limoeiro, quando os piores impulsos e sentimentos da mente humana ganham vida em forma de monstros reais!"
  },
  {
    "id": "turma-da-monica-jovem-monstros-do-id-parte-2-vol-16-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Monstros do Id Parte 2 (vol. 16)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica conseguiu derrotar akanin, seu monstro pessoal. Mas para cada pessoa no mundo existe um m"
  },
  {
    "id": "turma-da-monica-jovem-monstros-do-id-parte-final-vol-17-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Monstros do Id Parte Final (vol. 17)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Na conclusão dessa épica aventura, mônica e seus amigos enfrentam as manifestações físicas de seus próprios sentimentos e medo reprimidos"
  },
  {
    "id": "turma-da-monica-jovem-no-pais-das-maravilhas-vol-22-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: no País das Maravilhas (vol. 22)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica é transportada para um mundo fantástico e surreal ao seguir um misterioso coelho branco"
  },
  {
    "id": "turma-da-monica-jovem-no-pais-das-maravilhas-parte-1-vol-21-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: no País das Maravilhas Parte 1 (vol. 21)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica é transportada para um mundo mágico e bizarro, inspirado no clássico de lewis carroll! Nessa releitura cheia de humor e fantasia, ela encontra versões reinventadas de seus amigos..."
  },
  {
    "id": "turma-da-monica-jovem-nosso-filhote-vol-70-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Nosso Filhote (vol. 70)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um estranho e fofo bichinho é deixado misteriosamente na porta da mônica!"
  },
  {
    "id": "turma-da-monica-jovem-novos-desafios-vol-3-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Novos Desafios! (vol. 3)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma encena uma versão moderna da clássica fada do padrinho para um festival escolar"
  },
  {
    "id": "turma-da-monica-jovem-o-aniversario-de-15-anos-da-marina-vol-26-mauricio-de-sous",
    "title": "Turma da Mônica Jovem: o Aniversário de 15 Anos da Marina (vol. 26)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Marina convida toda a galera para sua sofisticada festa de 15 anos, dando início a uma marcante comemoração em três parte"
  },
  {
    "id": "turma-da-monica-jovem-o-anversario-de-15-anos-da-marina-parte-2-vol-27-mauricio-",
    "title": "Turma da Mônica Jovem: o Anversário de 15 Anos da Marina Parte 2 (vol. 27)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A grande festa de 15 anos da marina continua, mas o que era para ser uma noite inesquecível se transforma em um verdadeiro pesadelo quando uma ameaça misteriosa toma o controle do evento"
  },
  {
    "id": "turma-da-monica-jovem-o-brilho-de-um-pulsar-parte-2-vol-7-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: o Brilho de um Pulsar! Parte 2 (vol. 7)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A aventura espacial continua enquanto a turma enfrenta a ameaça do lorde kamen"
  },
  {
    "id": "turma-da-monica-jovem-o-brilho-de-um-pulsar-parte-final-vol-8-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: o Brilho de um Pulsar! Parte Final (vol. 8)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Em meio a uma batalha épica pelo destino do universo, a turma precisa unir forças com a princesa mimi para enfrentar o poderoso capitão fracasso e a banda das sereias"
  },
  {
    "id": "turma-da-monica-jovem-o-caderno-de-riso-parte-2-vol-24-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: o Caderno de Riso Parte 2 (vol. 24)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma segue enfrentando a ameaça do caderno mágico que faz qualquer coisa escrita nele virar realidade em forma de piada ou situação engraçada"
  },
  {
    "id": "turma-da-monica-jovem-o-caderno-do-riso-parte-1-vol-23-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: o Caderno do Riso Parte 1 (vol. 23)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Em uma paródia de death note, cebola encontra o \"caderno do riso\", capaz de fazer qualquer pessoa ter um ataque incontrolável de gargalhadas ao ter seu nome escrito"
  },
  {
    "id": "turma-da-monica-jovem-o-jogo-dos-reis-vol-40-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: o Jogo dos Reis (vol. 40)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma entra no mundo do xadrez em uma disputa que vai muito além do tabuleiro!"
  },
  {
    "id": "turma-da-monica-jovem-o-peso-de-um-problema-vol-33-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: o Peso de um Problema (vol. 33)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica está decidida a mudar de vida e começa uma dieta rigorosa ao lado de magali, que também se vê obrigada a rever seus hábitos alimentares"
  },
  {
    "id": "turma-da-monica-jovem-o-principe-perfeito-vol-9-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: o Príncipe Perfeito (vol. 9)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Durante as audições para a peça de romeu e julieta no colégio limoeiro, cebola se atrasa e se envolve em uma confusão que faz mônica perder o papel principal"
  },
  {
    "id": "turma-da-monica-jovem-o-show-deve-continuar-vol-36-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: o Show Deve Continuar (vol.36)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma decide visitar um circo misterioso que chegou à cidade"
  },
  {
    "id": "turma-da-monica-jovem-os-opostos-se-atraem-vol-60-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: os Opostos se Atraem (vol. 60)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O clima de amor toma conta do colégio do limoeiro, mas nem tudo são flores para os casais da turma"
  },
  {
    "id": "turma-da-monica-jovem-par-perfeito-vol-67-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Par Perfeito (vol. 67)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Cebola cria um algoritmo de relacionamentos na internet para provar de forma científica quem é o par ideal de cada pessoa do colégio"
  },
  {
    "id": "turma-da-monica-jovem-quer-namorar-comigo-vol-34-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Quer Namorar Comigo? (vol. 34)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Com a ajuda da turma, ele prepara uma grande surpresa e um plano mirabolante para que tudo seja perfeito"
  },
  {
    "id": "turma-da-monica-jovem-sabotagem-vol-20-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Sabotagem (vol. 20)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Em meio a uma importante competição esportiva no colégio do limoeiro, um misterioso sabotador começa a prejudicar os atletas e a causar o caos nas provas"
  },
  {
    "id": "turma-da-monica-jovem-sangue-fresco-vol-89-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Sangue Fresco (vol. 89)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma paródia cheia de mistério e suspense inspirada no universo dos vampiros!"
  },
  {
    "id": "turma-da-monica-jovem-sem-medo-vol-56-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Sem Medo (vol. 56)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Marina encontra um cachorrinho abandonado e decide cuidar dele escondida de todas"
  },
  {
    "id": "turma-da-monica-jovem-ser-ou-nao-ser-vol-11-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Ser Ou Não Ser? (vol. 11)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Cebola finalmente realiza seu grande objetivo de infancia e vence a amiga"
  },
  {
    "id": "turma-da-monica-jovem-ser-ou-nao-ser-parte-2-vol-12-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Ser Ou Não Ser? Parte 2 (vol. 12)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "De coração partido, ela decide mudar radicalmente de atitude, deixando a liderança da turma e adotando um visual e uma postura totalmente diferente"
  },
  {
    "id": "turma-da-monica-jovem-soldado-estelar-vol-41-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Soldado Estelar (vol. 41)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Cebola assume uma identidade secreta de super-herói espacial para tentar provar o seu valor e impressioar mônica"
  },
  {
    "id": "turma-da-monica-jovem-sombras-do-futuro-vol-79-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Sombras do Futuro (vol. 79)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Anos após surgimento da super-mônica em um futuro distópico, a turma descobre os vestígios e mistérios dessa época sombria"
  },
  {
    "id": "turma-da-monica-jovem-somos-todos-nerds-vol-88-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Somos Todos Nerds (vol. 88)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Em meio a um dos maiores eventos de cultura pop do país, a turma se reúne para aproveitar tudo o que o mundo geek tem a oferecer: cosplays, jogos, quadrinhos e muita diversão"
  },
  {
    "id": "turma-da-monica-jovem-surge-uma-estrela-parte-1-vol-18-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Surge uma Estrela Parte 1 (vol. 18)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica e magali realizam o sonho de assistir ao show do seu grupo pop favorito, as stars stars"
  },
  {
    "id": "turma-da-monica-jovem-surge-uma-estrela-parte-2-vol-19-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Surge uma Estrela Parte 2 (vol. 19)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mônica é descoberta por um empresário e tem a chance de realizar o sonho de se tornar uma famosa cantora pop"
  },
  {
    "id": "turma-da-monica-jovem-tem-gato-no-meu-cafe-vol-53-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Tem Gato no Meu Café (vol. 53)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Magali começa a trabalhar em um charmoso maid café temático para conseguir uma grana extra"
  },
  {
    "id": "turma-da-monica-jovem-tempestade-vol-11-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Tempestade (vol. 11)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma forte tempestade atinge o bairro do limoeiro e deixa a turma presa, testando a paciência e os nervos de todos"
  },
  {
    "id": "turma-da-monica-jovem-tesouro-verde-parte-1-vol-43-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Tesouro Verde Parte 1 (vol. 43)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A turma viaja para a floresta amazônica para participar do projeto \"onça florestal\", uma inciativa de reflorestamento e preservação ambiental"
  },
  {
    "id": "turma-da-monica-jovem-tesouro-verde-parte-2-vol-44-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Tesouro Verde Parte 2 (vol. 44)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Na continuação da aventura na amazônia, a turma enfrenta o perigoso grupo \"cabeça verde\", que pretende explorar as richesas da floresta a qualquer custo"
  },
  {
    "id": "turma-da-monica-jovem-um-mundo-diferente-vol-37-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: um Mundo Diferente (vol. 37)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "No mundo ao contrário, mônica é tímida e apaixonada por cebola, que é um garoto popular e líder da turma. Cascão adora tomar banho e é limpinho, enquanto magali odeia comida e vive a dieta"
  },
  {
    "id": "turma-da-monica-jovem-veneno-virtual-vol-57-mauricio-de-sousa",
    "title": "Turma da Mônica Jovem: Veneno Virtual (vol. 57)",
    "author": "Mauricio de Sousa",
    "category": "Quadrinhos",
    "collection": true,
    "publisher": "Mauricio de Sousa",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um perfil anônimo começa a espalhar boatos e segredos maldosos sobre os alunos do colégio na internet"
  },
  {
    "id": "uma-aventira-no-quintal-samuel-murgel-branco",
    "title": "Uma Aventira no Quintal",
    "author": "Samuel Murgel Branco",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Aventura? Em um quintal? Pode parecer estranho que um lugar tão próxino de nós seja o cenário de uma aventura. Mas tudo depende de como olhamos o mundo que nos cerca."
  },
  {
    "id": "uma-aventura-no-quintal-samuel-murgel-branco",
    "title": "Uma Aventura no Quintal",
    "author": "Samuel Murgel Branco",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "Esta adaptação transforma um simples espaço de casa em um verdadeiro laboratório de biodiversidade ao ar livre!"
  },
  {
    "id": "uma-jornada-pelo-tempo-gustavo-berarto",
    "title": "Uma Jornada Pelo Tempo",
    "author": "Gustavo Berarto",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Uma história fantástica, cheia de jogos e enigmas para você solucionar com uma lupa mágica"
  },
  {
    "id": "velozes-e-desatrosos-disney",
    "title": "Velozes e Desatrosos",
    "author": "Disney",
    "category": "Quadrinhos",
    "collection": false,
    "publisher": "Abril S.a",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Patópolis é tudo, inclusive a capital da velocidade! Dizem que todo brasileiro é apaixonado por carro. Há controvérsias, mas, que todo patopolense gosta, isso podemos garantir."
  },
  {
    "id": "100-jogos-dramaticos-maria-clara-machado",
    "title": "100 Jogos Dramáticos",
    "author": "Maria Clara Machado",
    "category": "Teatro",
    "collection": false,
    "publisher": "Agir",
    "level": "LIVRE",
    "synopsis": "100 jogos dramáticos, de maria clara machado, é um passo decisivo no sentido de resgatar os sentimentos - e a imaginação - perdidos no exccesso de informação acadêmica."
  },
  {
    "id": "a-menina-e-o-vento-e-outras-pecas-maria-clara-machado",
    "title": "A Menina e o Vento e Outras Peças",
    "author": "Maria Clara Machado",
    "category": "Teatro",
    "collection": false,
    "publisher": "Gov",
    "level": "LIVRE",
    "synopsis": "A menina e o vento (1962), traduzida em outros países, em que maria, por estar entediada com as chatas lições da tia, acaba se envolvendo com um ser mítico, o vento \"em carne e osso\", numa hisória fantástica."
  },
  {
    "id": "a-palavra-na-ribalta-roberto-massoni",
    "title": "A Palavra na Ribalta",
    "author": "Roberto Massoni",
    "category": "Teatro",
    "collection": false,
    "publisher": "",
    "level": "EM - Ensino Médio",
    "synopsis": "Este volume de peças que chamei de a palavra na ribalta traduz o desejo de que meus textos ganhem estrada e vida próprias. Quando em livro e não encenada, a peça entra pro gênero literário drama e é pura literatura, ainda que os leitores comuns tenham alguma dificuldade em ler teatro, ler dramarturgia, pois a escrita é toda em diálogos, e a construção cênica se dê por rubricas, e também, geralmente, a leitura pra ter efeito precisa ser feita de uma única vez! Então é um tanto quanto arriscado lançar um livro de textos dramáticos ainda mais que na dramaturgia estão as tragédias, os dramas, os melodramas, as comédias, e toda a aura de que se revestem, mas é na literatura dramática que a peça perde o efêmero de sua essência de quando levada ao palco! ."
  },
  {
    "id": "auto-da-barca-do-inferno-gil-vicente",
    "title": "Auto da Barca do Inferno",
    "author": "Gil Vicente",
    "category": "Teatro",
    "collection": false,
    "publisher": "Moderna",
    "level": "LIVRE",
    "synopsis": "O auto da barca do inferno, de gil vicente, é uma sátira impiedosa da sociedade portuguesa do século xvi. Suas críticas não poupam ninguém - fidalgos, padres e magistrados, mas também, sapateiros e ladrões. Cada personagem traz, nas roupas ou nas mãos, os símbolos de seus pecados e deles não podem se desfazer; não há defesa contra as acusações do diabo ou do anjo. Ninguém é salvo ou condenado em função de sua classe social."
  },
  {
    "id": "auto-da-compadecida-ariano-suassuna",
    "title": "Auto da Compadecida",
    "author": "Ariano Suassuna",
    "category": "Teatro",
    "collection": false,
    "publisher": "Agir",
    "level": "EM - Ensino Médio",
    "synopsis": "Auto da compadecida representa o equilíbrio perfeito entre a tradição popular e a elaboração literária ao recriar para o teatro episódios registrados na tradição popular do cordel. É uma peça teatral em forma de auto em 3 atos, escrita em 1955 pelo autor paraibano ariano suassuna. Sendo um drama do nordeste brasileiro, mescla elementos como a tradição da literatura de cordel, a comédia, traços do barroco católico brasileiro e, ainda, cultura popular e tradições religiosas. Apresenta na escrita traços de linguagem oral [demonstrando, na fala do personagem, sua classe social] e apresenta também regionalismos relativos ao nordeste."
  },
  {
    "id": "bonitinha-mas-ordinaria-e-o-beijo-no-asfalto-flavio-aguiar",
    "title": "Bonitinha Mas Ordinária e o Beijo no Asfalto",
    "author": "Flávio Aguiar",
    "category": "Teatro",
    "collection": false,
    "publisher": "Nova Fronteira",
    "level": "EM - Ensino Médio",
    "synopsis": ""
  },
  {
    "id": "cadernos-da-elt-escola-livre-de-teatro-antonio-rogerio-toscano",
    "title": "Cadernos da Elt Escola Livre de Teatro",
    "author": "Antônio Rogério Toscano",
    "category": "Teatro",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Cadernos da elt é um projeto da escola livre de teatro de santo andré. A elt é um serviço do departamento de cultura da secretaria de cultura, esporte e lazer da prefeitura de santo andré."
  },
  {
    "id": "casa-de-bonecas-henrik-ibsen",
    "title": "Casa de Bonecas",
    "author": "Henrik Ibsen",
    "category": "Teatro",
    "collection": false,
    "publisher": "Gov",
    "level": "EM - Ensino Médio",
    "synopsis": ""
  },
  {
    "id": "farsa-de-ines-pereira-auto-da-barca-do-inferno-auto-da-alma-pranto-de-maria-pard",
    "title": "Farsa de Inês Pereira - Auto da Barca do Inferno - Auto da Alma - Pranto de Maria Parda",
    "author": "Gil Vicente",
    "category": "Teatro",
    "collection": true,
    "publisher": "Martin Claret",
    "level": "LIVRE",
    "synopsis": "A presente edição reúne quatro das mais importantes obras do dramaturgo português gil vicente, cuja crítica - ao mesmo tempo divertida e mordaz - dos vícios humanos mantém-se atual até os dias de hoje."
  },
  {
    "id": "iliada-nick-mccarty",
    "title": "Ilíada",
    "author": "Nick Mccarty",
    "category": "Teatro",
    "collection": false,
    "publisher": "Melhoramentos",
    "level": "EM - Ensino Médio",
    "synopsis": "Esta é a história de uma terrível guerra, da qual tomaram parte deuses e bravos guerreiros. Uma história de vingança, de atos heróicos e do poder devastador de uma linda mulher. Uma história de sangue derramado na terra, sob as imensas torres de tróia, e a na areia, junto aos navios de proas em curva, de cor carmim, da grécia. Nessa época, os deuses tomavam partido nas disputas entre os mortais e interferiam diretamente em seus destinos. Os gregos trouxeram a guerra para tróia e sitiaram a cidade por nove longos anos. Por que tantos milhares deles foram para a tróia? Porque helena, mulher mais bela do que a lua, foi roubada de seu marido, menelau, rei de esparta, por páris, príncipe de tróia."
  },
  {
    "id": "o-novico-o-juiz-de-paz-na-roca-martins-pena",
    "title": "O Noviço, o Juiz de Paz na Roça",
    "author": "Martins Pena",
    "category": "Teatro",
    "collection": false,
    "publisher": "Objetivo",
    "level": "LIVRE",
    "synopsis": "Martins pena é o fundador do teatro cômico brasileiro. Em plena vigência do romantismo, ele apresenta, como manuel antônio de almeida em memórias de um sargento de milícias, diversos traços realísticos - de um realismo \"primitivo\", ingênuo. Aqui estão reunidas duas de suas comédias mais populares."
  },
  {
    "id": "o-pagador-de-promessas-dias-gomes",
    "title": "O Pagador de Promessas",
    "author": "Dias Gomes",
    "category": "Teatro",
    "collection": true,
    "publisher": "Ediouro",
    "level": "EM - Ensino Médio",
    "synopsis": "Um homem simples, zé-do-burro, e sua fé no cumprimento de penosa promessa; o padre e seus rígidos princípios; e a sociedade que julga, condena e absolve."
  },
  {
    "id": "o-teatro-do-bem-e-do-mal-eduardo-galeano",
    "title": "O Teatro do Bem e do Mal",
    "author": "Eduardo Galeano",
    "category": "Teatro",
    "collection": false,
    "publisher": "L&pm",
    "level": "LIVRE",
    "synopsis": "Com ironia e bom humor, abordam questões cruciais de nossa época no plano social, ecõnomico, político, militar e ecológico. Os assuntos tratados são atualíssimos, como o oriente médio, o futuro da água do planeta, o terrorismo e a busca pela felicidade."
  },
  {
    "id": "oficina-de-emocoes-valderez-felix",
    "title": "Oficina de Emoções",
    "author": "Valderez Felix",
    "category": "Teatro",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "Oficina de emoções fala de sonhos, emoções, história e literatura. Apaixonada por teatro, valderez felix apresenta aos leitores um conjunto de peças fascinantes, que retratam a literatura brasileira enfatizando a sua influência e importância na história e cultura brasileira. São peças teatrais ricas que poderão ser encenadas para ensinar e emocionar diversos públicos!"
  },
  {
    "id": "os-caminhos-da-criacao-coautoria",
    "title": "Os Caminhos da Criação",
    "author": "Coautoria",
    "category": "Teatro",
    "collection": false,
    "publisher": "Gov",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "pequenas-tragedias-alexandr-puchkin",
    "title": "Pequenas Tragédias",
    "author": "Alexandr Púchkin",
    "category": "Teatro",
    "collection": false,
    "publisher": "Martin Claret",
    "level": "EM - Ensino Médio",
    "synopsis": "Esta pequenas tragédias são realmente sucintas quanto à extenção física, mas configuram, ainda assim, uma das obras-primas da dramarturgia mundial."
  },
  {
    "id": "por-tras-das-cortinas-antonio-schimeneck",
    "title": "Por Trás das Cortinas",
    "author": "Antônio Schimeneck",
    "category": "Teatro",
    "collection": false,
    "publisher": "Besouro Box",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um velho baú, uma mulher misteriosa e um galpão abandonado são os elos deste enredo incrivelmente emocionante, que levará o leitor a descobrir não só o segredo desta história, e sim muitas verdades que, por anos, escondem-se por trás das cortinas, por trás das músicas, por trás do tempo. Por trás das cortinas não é só mais um livro de mistérios descobertos, mas o resgate de uma época importante na história do brasil que, por vezes, é esquecida ou simplesmente ignorada pelos jovens de hoje."
  },
  {
    "id": "romao-e-julinha-oscar-von-pfuhl",
    "title": "Romão e Julinha",
    "author": "Oscar Von Pfuhl",
    "category": "Teatro",
    "collection": false,
    "publisher": "Edart",
    "level": "LIVRE",
    "synopsis": "Esta é a históriade uma guerra que não houve, mas quase houve, e na qual qualquer semelhança com romeu e julieta de shakespeare, será levada em conta de mera coincidência, ou então fruto da imaginação do espectador."
  },
  {
    "id": "romeu-e-julieta-matteo-bandello",
    "title": "Romeu e Julieta",
    "author": "Matteo Bandello",
    "category": "Teatro",
    "collection": false,
    "publisher": "Gov",
    "level": "LIVRE",
    "synopsis": "Anterioe à versão teatral de shakespeare, o romeu e julieta de matteo bandello já colocava perguntas cruciais, envolvidas no sacrifício dos jovens \"amantes de verona\": deve o amor submeter- se às regras de incompreensão, da intolerância, do rancor desmedidos? Devem os jovens apaixonados sufocar seus sonhos de felicidade em nome de princípios, leis, padrões cujas bases são a mesquinhez, o ódio, a violência? Sempre atual, a história de romeu e julieta propõe instigantes questões a jovens de tempos problemáticos como os nossos."
  },
  {
    "id": "romeu-e-julieta-texto-integral-william-shakespeare",
    "title": "Romeu e Julieta Texto Integral",
    "author": "William Shakespeare",
    "category": "Teatro",
    "collection": false,
    "publisher": "Martin Claret",
    "level": "LIVRE",
    "synopsis": "Após violento embate, finalmente uma trégua se impôs entre os montecchio e os capuleto, duas famílias inimigas cujo rancor persistia há diversas gerações. No entanto, um amor proibido entre os jovens romeu, um montecchio, e julieta, uma capuleto, viria a abrir uma nova disjuntiva na história dessas famílias. Seria possível a concretização desse amor? Seria ele o responsável por estabelecer a paz entre famílias?"
  },
  {
    "id": "teatro-em-sala-de-aula-betina-rugna",
    "title": "Teatro em Sala de Aula",
    "author": "Betina Rugna",
    "category": "Teatro",
    "collection": false,
    "publisher": "Editora Alaúde",
    "level": "LIVRE",
    "synopsis": "Existe uma afinidade natural da criança e do adolescente pelo jogo dramático. Por isso, a linguagem teatral é uma ferramenta valiosa que o professor pode utilizar para transformar uma atividade agradável e lúdica em aprendizado efetivo e prazeroso de seus alunos. Todas as diciplinas e conceitos pedagógicos podem ser trabalhados com as técnicas teatrais, e isso traz inúmeros benefícios à formação intelectual, cultural, ética, moral e social do aluno."
  },
  {
    "id": "teatro-paulistano-sec-v-coautoria",
    "title": "Teatro Paulistano Séc. V",
    "author": "Coautoria",
    "category": "Teatro",
    "collection": false,
    "publisher": "Gov",
    "level": "LIVRE",
    "synopsis": "No século v depos de josé de anchieta, no ágora teatro, em são paulo, doze dos principais coletivos teatrais da cidade e seis de nossos principais críticos e pensadores discutem o vigor do nosso teatro contemporâneo."
  },
  {
    "id": "uma-ratinha-apaixonada-julio-emilio-braz",
    "title": "Uma Ratinha Apaixonada",
    "author": "Júlio Emílio Braz",
    "category": "Teatro",
    "collection": false,
    "publisher": "Positivo",
    "level": "LIVRE",
    "synopsis": "Oferece aos leitores peças teatrais de grande qualidade , escrita especialmente para o público infantil , para serem lidas e encenadas pelas crianças."
  },
  {
    "id": "a-cidade-dos-ratos-emily-rodda",
    "title": "A Cidade dos Ratos",
    "author": "Emily Rodda",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Lief, barda e jasmine, três companheiros que têm em comum somente o ódio que nutrem pelo inimigo, saíram numa perigosa busca para encontrar as sete pedras preciosas do mágico cinturão de deltona. Somente quando o cinturão estiver completo novamente, o malvado senhor das sombras poderá ser derrotado."
  },
  {
    "id": "a-coisa-invisivel-stella-carr",
    "title": "A Coisa Invísivel",
    "author": "Stella Carr",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Scipione",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Conta a história de um grupo de amigos que se depara com um mistério durante uma festa de halloween. Conforme as coisas estranhas acontecem, eles decidem investigar o mistério"
  },
  {
    "id": "a-familia-pantano-o-principal-suspeito-colin-thompson",
    "title": "A Familía Pântano - o Principal Suspeito",
    "author": "Colin Thompson",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Brinque-book",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Numa noite sem lua , alguma coisa se mexeu na escuridão..."
  },
  {
    "id": "a-familia-pantano-escola-colin-thompson",
    "title": "A Familía Pântano - Escola",
    "author": "Colin Thompson",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Brinque-book",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Espie por uma janela sombria e arqueda nas profundezas da patagônia e talvez seja isto que você verá..."
  },
  {
    "id": "a-familia-pantano-vizinhos-colin-thompson",
    "title": "A Família Pântano - Vizinhos",
    "author": "Colin Thompson",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Brinque-book",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ironia , humor , sustos e muito suspense nesta aventura extraordinária."
  },
  {
    "id": "a-familia-pantano-aparencias-colin-thompson",
    "title": "A Família Pântano: Aparências",
    "author": "Colin Thompson",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Brinque-book",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A obra aborda temas como aceitação, padrões de beleza e a importância de ser autêntico, celebrando as diferenças com muita ironia e diversão"
  },
  {
    "id": "a-familia-pantano-fuga-colin-thompson",
    "title": "A Família Pântano: Fuga",
    "author": "Colin Thompson",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Brinque-book",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Colin thompson constrói uma narrativa divertida que deconstrói os estereótipos tradicionais e celebra as esquisitices de forma leve e cativante"
  },
  {
    "id": "a-lenda-do-tesouro-farroupilha-luis-dill",
    "title": "A Lenda do Tesouro Farroupilha",
    "author": "Luís Dill",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A turma dos caça-mistérios embarca em uma investigação pelas ruas e pontos históricos de porto alegre em busca de um lendário tesouro da revolução farroupilha"
  },
  {
    "id": "a-noite-dos-ninjas-thomas-brezina",
    "title": "A Noite dos Ninjas",
    "author": "Thomas Brezina",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Prepare seu fôlego e treine alguns golpes para enfrentar os ninjas com a turma dos tigres !"
  },
  {
    "id": "a-turma-dos-tigres-os-bandidos-da-internet-thomas-c-brezina",
    "title": "A Turma dos Tigres: os Bandidos da Internet",
    "author": "Thomas C. Brezina",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Para deter os vilões, a turma dos tigres precisa decifrar pistas misteriosas, solucionar enigmas em cada capítulo e usar muita astúcia para desmascarar rede de criminosos digitais antes que seja tarde demais"
  },
  {
    "id": "antes-do-alvorecer-caio-riter",
    "title": "Antes do Alvorecer",
    "author": "Caio Riter",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O sol tem o poder de exterminar o mal, mas vai demorar a amanhecer. Estou escondido num depósito. Por uma aposta idiota, me meti num cemitério, de madrugada. E tem zumbis lá fora. Podem entrar aqui a qualquer momento. Nossa, eles...ruídos...estão... Chegando... Abrindo a porta..."
  },
  {
    "id": "as-florestas-do-silencio-emily-rodda",
    "title": "As Florestas do Silêncio",
    "author": "Emily Rodda",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O maligno senhor das sombras está tramando invadir deltona e escravizar o seu povo. Há somente uma coisa que o impede: o mágico cinturão de deltona com suas sete pedras preciosas de fantástico e misterioso poder. Quando as pedras são roubadas e escondidas em locais sombrios e terríveis em todo o reino, o senhor das sombras triunfa e deltona está perdida."
  },
  {
    "id": "as-irmas-vampiras-franziska-gehm",
    "title": "As Irmãs Vampiras",
    "author": "Franziska Gehm",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Vr Editora",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Precisa-se de uma amiga com urgência! Senão daka e silvânia voltarão imediatamente para a transilvânia. Lá, pelo menos, elas podiam voar sossegadas e ir para a escola durante a noite"
  },
  {
    "id": "aventuras-noturnas-fabio-teixeira",
    "title": "Aventuras Noturnas",
    "author": "Fabio Teixeira",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ciranda Cultural",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Vampiros e monstros estão reunidos neste livro em histórias de arrepiar"
  },
  {
    "id": "bat-pat-o-tesouro-do-cemiterio-roberto-pavanello",
    "title": "Bat Pat - o Tesouro do Cemitério",
    "author": "Roberto Pavanello",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O que eu tenho para contar neste livro vai fazer você se arrepiar! Uma noite, da janela da minha cripta, vi uma sombra que rondava o cemitério e parecia procurar alguma coisa nos túmulos. Logo depois, veio a notícia de que alguém andava invadindo as casas da cidade... Pela chaminé! Ai,ai,ai que medo medonho! O que será que ele está procurando?."
  },
  {
    "id": "bat-pat-o-tesouro-do-cemiterio-coautoria",
    "title": "Bat Pat o Tesouro do Cemitério",
    "author": "Coautoria",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Oi! Sou o bat pat! Sim, eu sou um morcego e, sim, eu falo. Mas isso não é importante agora. O que eu tenho para contar neste livro vai fazer você se arrepiar! Uma noite, da janela da minha cripta, vi uma sombra que rondava o cemitério e parecia procurar alguma coisa nos túmulos. E logo depois veio a notícia de que alguém andava invadindo as casas da cidade..."
  },
  {
    "id": "batman-justica-maxima-coautoria",
    "title": "Batman Justiça Máxima",
    "author": "Coautoria",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Acompanhe duas aventuras completas de batman em sua eterna luta para proteger gotham city. É um peixe? É um pássaro? Não. É o pinguim! Essa estranha criatura quer recuperar a fortuna perdida de sua família. Para isso, seus pássaros treinados estão roubando jóias por toda parte. Mas os planos desse vilão são ainda piores: o invejoso pinguim captura alfred. O homem-morcego terá que ser muito rápido para salvar seu fiel mordomo e colocar uma ave do mal na gaiola!"
  },
  {
    "id": "batman-quente-e-frio-coautoria",
    "title": "Batman Quente e Frio",
    "author": "Coautoria",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Acompanhe duas aventuras completas de batman em sua eterna luta para proteger gotham city. A temperatura na cidade está alta demais. É o vaga-lume, um vilão armado com um ultrapotente raio laser que está queimando os computadores da cidade. Oh, não! É pior ainda! Ele tem um jet pack e pode voar! Será que vaga-lume vai conseguir superar a astúcia de batmam? Ou será que o homem- morcego tem mais um truque infalível no cinto de utilidades?"
  },
  {
    "id": "batpat-a-avo-de-tutancamon-coautoria",
    "title": "Batpat a Avó de Tutancâmon",
    "author": "Coautoria",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Olá, voltei! O seu velho amigo bat pat com mais uma de suas histórias... Imagine que uma múmia acorda do seu sono eterno e desafia você para um jogo milenar! O que você faria? Pois foi justamente isso o que aconteceu comigo e com meus amigos, rebeca, martim e léo."
  },
  {
    "id": "comboio-de-espectros-duda-falcao",
    "title": "Comboio de Espectros",
    "author": "Duda Falcão",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Avec",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Exploram os medos mais profundos da mente humana, perfeitas para quem aprecia o gênero do horror clássico e moderno"
  },
  {
    "id": "desventuras-em-serie-a-sala-dos-repteis-lemony-snicket",
    "title": "Desventuras em Série - a Sala dos Répteis",
    "author": "Lemony Snicket",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Seguinte",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Se você esperava encontrar uma história tranquila e alegre, lamento dizer que escolheu o livro errado. A história pode parecer animadora no início, quando os meninos passam o tempo em companhia de alguns répteis interessantes e de um tio alto-astral, mas não se deixem enganar"
  },
  {
    "id": "dorme-menino-dorme-laura-herrera-2",
    "title": "Dorme, Menino, Dorme",
    "author": "Laura Herrera",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Livros da Matriz",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Um menino está acordado na noite escura. Não consegue dormir. Para ele, trazem músicas e canções, cobertores quentinhos e leite morno, mas só uma coisa o levará suavemente ao mundo dos sonhos"
  },
  {
    "id": "ed-e-pierre-e-o-misterio-do-livro-vermelho-lucy-silva-e-regina-mara-conrado",
    "title": "Ed e Pierre e o Mistério do Livro Vermelho",
    "author": "Lucy Silva e Regina Mara Conrado",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Cuore",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Esta é uma história normal , de um menino normal . Uma família normal , uma casa normal. Um livro vermelho , uma colega estranha , bichos nunca vistos e uma professora que faz parte dessa aventura. E você quer descobrir o mistério desse livro vermelho ?"
  },
  {
    "id": "ever-after-high-o-livro-das-lendas-shannon-hale",
    "title": "Ever After High: o Livro das Lendas",
    "author": "Shannon Hale",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Salamandra",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "A tradição exige que no dia do legado todos assinem o livro das lendas, comprometendo-se a reviver as mesmas histórias - incluindo os finais felizes e os trágicos"
  },
  {
    "id": "ever-after-high-um-mundo-maravilhastico-shannon-hale",
    "title": "Ever After High: um Mundo Maravilhástico",
    "author": "Shannon Hale",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Salamandra",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Os alunos começam a se transformar em animais e objetos, os ratos passam a falar e os jardins coloridos perdem a cor, tornando-se uma imensidão e preto e branco"
  },
  {
    "id": "frensesi-heloisa-seixas",
    "title": "Frensesi",
    "author": "Heloisa Seixas",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Por que duplo terror? Porque os personagens das histórias deste livro também gostam de contar ou ler histórias assombradas. E, de repente, aquilo que estão contando começa a acontecer com eles... Como se o terror saísse das páginas e pulasse para vida real. Por isso, cuidado. Ao ler este livro, a mesma coisa pode acontecer com você..."
  },
  {
    "id": "goosebumps-acampamento-fantasma-r-l-stine",
    "title": "Goosebumps Acampamento Fantasma",
    "author": "R. L. Stine",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Harry e seu irmão alex querem muito fazer amizade com o pessoal no acampamento do espírito da lua. Mas o lugar tem algumas tradições estranhas: a saudação boba, o cumprimento esquisito e o jeito como os campistas mais antigos gostam de pregar peças nos recém-chegados. Pouco a pouco, as brincadeiras começam a ficar estranhas, perigosas... E bem assustadoras! Primeiro, uma menina põe o braço na fogueira. Depois, um garoto enfia uma estaca no pé... Mas é tudo brincadeira! Ou será que não?..."
  },
  {
    "id": "goosebumps-horrorland-r-l-stine",
    "title": "Goosebumps Horrorland",
    "author": "R. L. Stine",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Para um atleta como o matt, tomar um café da manhã reforçado é essencial. Mas e se o perigo estiver dentro de uma simples tigela de cereais? Isso mesmo! Basta adicionar um pouco de sangue de monstro para transformar a refeição mais importante do dia em um susto atrás do outro! E não adianta fechar a boca para escapar deles..."
  },
  {
    "id": "goosebumps-o-abominavel-homem-das-neves-de-pasadena-r-l-stine",
    "title": "Goosebumps o Abominável Homem das Neves de Pasadena",
    "author": "R. L. Stine",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Jordan blake e sua irmã, nicole, não aguentam mais o calor de pasadela, califórnia. Eles gostariam de aproveitar o inverno de verdade, com muita neve, para variar. Finalmente, o desejo deles é atendido: o sr. Blake é contratada para fotografar uma criatura misteriosa que vive no alasca, e a família toda vai para lá!"
  },
  {
    "id": "historias-para-aprender-a-sonhar-oscar-wilde",
    "title": "Histórias para Aprender a Sonhar",
    "author": "Oscar Wilde",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Contos de fantasia"
  },
  {
    "id": "jovens-detetives-misterio-no-castelo-toca-do-lobo-friedrich-scheck",
    "title": "Jovens Detetives: Mistério no Castelo Toca-do-lobo",
    "author": "Friedrich Scheck",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O imponente castelo toca-do-lobo com sólidas paredes, torres gigantescas, salas imensas e sombrias, espadas e armaduras - corre perigo: suas valiosas peças estão sendo roubadas, quem será o criminoso?"
  },
  {
    "id": "korian-na-terra-do-engano-thales-guaracy",
    "title": "Korian na Terra do Engano",
    "author": "Thales Guaracy",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Arx",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Korian não é um menino comum. Graças aos seus poderes - e ao anel mágico que ganhou de uma menina misteriosa - ele se vê de repente envolvido em uma missão quase impossível de ser realizada: atravessar a enigmática floresta da terra fria até chegar malpensa."
  },
  {
    "id": "memorias-de-um-jovem-padre-alvaro-cardroso-gomes",
    "title": "Memórias de um Jovem Padre",
    "author": "Álvaro Cardroso Gomes",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "A cada novo dilema, josé tem o livro de eça seu mais fiel companheiro, que o ajuda a tomar suas decisṍes."
  },
  {
    "id": "menino-de-asas-homero-homem",
    "title": "Menino de Asas",
    "author": "Homero Homem",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ser diferente é crime? Parece que sim pelo menos para a maioria da pessoas que conhece aquele menino qe nasceu com assas no lugar dos braços..."
  },
  {
    "id": "meu-livro-de-historias-assustadoras-joff-brown",
    "title": "Meu Livro de Histórias Assustadoras",
    "author": "Joff Brown",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ciranda Cultural",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Você encontrará muitos fanstasmas neste livro de histórias assustadoras."
  },
  {
    "id": "miguel-e-o-sexto-ano-lino-de-albergaria",
    "title": "Miguel e o Sexto Ano",
    "author": "Lino de Albergaria",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Saraiva",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro aborda de forma sensível as incertezas, as amizades, os conflitos em sala de aula e o amadurecimento dos jovens nesse momento tão marcante da vida escolar"
  },
  {
    "id": "minha-casa-mal-assombrada-angie-sage",
    "title": "Minha Casa Mal-assombrada",
    "author": "Angie Sage",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Araminta fantasmin adora coisas arrepiantes. Ela não tem medo de fantasmas, morcegos, passagens secretas ou casas mal-assombradas. Será que você é igual a ela?"
  },
  {
    "id": "minha-querida-assombracao-reginaldo-prandi",
    "title": "Minha Querida Assombração",
    "author": "Reginaldo Prandi",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Em férias numa antiga fazenda , paulo e os quatro filhos passam uma semana ouvindo casos de assombração. Cada noite uma história diferente"
  },
  {
    "id": "misterios-no-castelo-toca-do-lobo-friedrich-scheck",
    "title": "Mistérios no Castelo Toca-do-lobo",
    "author": "Friedrich Scheck",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Participe dessa investigação ajudando zás-trás e seus amigos a seguir as pistas. Mas fique atento , pois tudo pode levar ao culpado : fotografias , objetos perdidos , charadas..."
  },
  {
    "id": "monster-high-lisi-harrison",
    "title": "Monster High",
    "author": "Lisi Harrison",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Pode um monstro sobreviver num mundo de normies? Estar in agora é out! Bem vindo a monster hgh, ser assustador é uma questão de estilo"
  },
  {
    "id": "monster-high-monstramigas-so-querem-se-divertir-gitty-daneshvari",
    "title": "Monster High: Monstramigas Só Querem se Divertir",
    "author": "Gitty Daneshvari",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Salamandra",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Usando suas habilidades únicas para investigar o mistério, proteger seus colegas e provar que nem mesmo os segredos mais macabros conseguem acabar com uma verdadeira amizade"
  },
  {
    "id": "monstramigas-para-sempre-gitty-daneshvari",
    "title": "Monstramigas para Sempre",
    "author": "Gitty Daneshvari",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Salamandra",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "É o primeiro dia de estudos horripilantes em monste high, a escola mundialmente fmosa para monstros. O que será que vai acontecer?"
  },
  {
    "id": "o-fantasma-morte-coautoria",
    "title": "O Fantasma Morte",
    "author": "Coautoria",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Albatroz",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Nesta história criamos um fantasma que, mesmo sendo assustador, não deixa de ser engraçado e atraente, o fantasma morte"
  },
  {
    "id": "o-filho-da-bruxa-marcia-kupstas",
    "title": "O Filho da Bruxa",
    "author": "Marcia Kupstas",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Já pensou ser filho de bruxa? Pois zacarias, o narrador dessa história, é. E quem acha que vai encontrar um menino infeliz por causa disso, engana-se redondamente. A mãe proporciona-lhe experiências fora do comum, além de divertidas e emocionantes, como entrar no desenho animado de que mais gosta e viver grandes aventuras com seus personagens preferidos. No entanto, zacarias acaba mostrando que mais importante do que ter mãe bruxa é desenvolver uma imaginação poderosa."
  },
  {
    "id": "o-genio-do-crime-joao-carlos-marinho",
    "title": "O Gênio do Crime",
    "author": "João Carlos Marinho",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Global",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Aventuras da turma do gordo"
  },
  {
    "id": "o-hotel-dos-bichos-desamparados-ricardo-l-hoffmann",
    "title": "O Hotel dos Bichos Desamparados",
    "author": "Ricardo L. Hoffmann",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ftd",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Mostrando como o amor e a empatia podem transformar vidas"
  },
  {
    "id": "o-ladrao-de-espadas-peter-lerangis",
    "title": "O Ladrão de Espadas",
    "author": "Peter Lerangis",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Não confiem ninguém. Esse foi o conselho dado pelo advogado william mcintrye aos órfãos amy e dan cahill quando eles decidiram se lançar na busca pelas 39 pistas que revelarão uma fonte de poder inimaginável."
  },
  {
    "id": "o-lago-das-lagrimas-emily-rodda",
    "title": "O Lago das Lágrimas",
    "author": "Emily Rodda",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Fundamento",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Deltora é uma terra de monstros e magia... Lief, barda e sua rebelde companheira jasmine saíram numa perigosa busca para encontrar as sete pedras preciosas roubadas do mágico cinturão de deltora. O topázio dourado já foi encontrado. Mas o reino de deltora somente será libertado do poder do cruel senhor das sombras quando todas as pedras tiverem sido recolocadas no cinturão."
  },
  {
    "id": "o-medico-e-o-monstro-robert-louis-stevenson",
    "title": "O Médico e o Monstro",
    "author": "Robert Louis Stevenson",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "A obra é uma emblemática alegoria sobre a dualidade do bem e do mal na alma humana"
  },
  {
    "id": "o-misterio-do-galpao-cor-de-burro-quando-foge-luiz-antonio-aguiar",
    "title": "O Mistério do Galpão Cor de Burro Quando Foge",
    "author": "Luiz Antonio Aguiar",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Editora do Brasil",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Um grande mistério ronda o sítio da vovó adams somente duas jovens detetives poderão solucioná- los"
  },
  {
    "id": "o-misterio-mora-ao-lado-giselda-laporta-nicolelis",
    "title": "O Mistério Mora ao Lado",
    "author": "Giselda Laporta Nicolelis",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Saraiva",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Lucas mora na mesma rua desde que nasceu. Conhece todos por lá. Só que as coisas começam a mudar quando chegam novos vizinhos. Quem são? O que fazem?"
  },
  {
    "id": "o-safari-dos-monstros-thomas-brezina",
    "title": "O Safári dos Monstros",
    "author": "Thomas Brezina",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Na pasta dos tigres você encontra todo o material necessário para solucionar este caso."
  },
  {
    "id": "o-segredo-da-plataforma-13-eva-ibbotson",
    "title": "O Segredo da Plataforma 13",
    "author": "Eva Ibbotson",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Rocco",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Debaixo da plataforma 13, na estação de tres encruzilhada dos reis, existe uma porta secreta que leva para uma ilha mágica... A porta se abre apenas a cada nove anos. E quando isso acontecer, quatro figuras misteriosas vão pisar nas ruas de londers. Um mago, um ogro, uma fada e uma jovem bruxa têm a missão de encontratar o príncipe do seu reino, roubado quando bebê, nove anos antes. Mas o príncipe transformou-se num horrível menino rico, chamado raimundo trottle, que não entende nada de mágica e está determinado a não ser resgatado."
  },
  {
    "id": "o-vampiro-que-descobriu-o-brasil-ivan-jaf",
    "title": "O Vampiro que Descobriu o Brasil",
    "author": "Ivan Jaf",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Ivan jaf apresenta uma viagem cativante e bem-humorada pela formação da sociedade brasileira"
  },
  {
    "id": "os-gemeos-descolados-a-visita-do-ogro-sergio-klein",
    "title": "Os Gêmeos Descolados: a Visita do Ogro",
    "author": "Sérgio Klein",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Os irmãos precisam unir forças, usar a esperteza e a criatividade para lidar com esse visitante inusitado e proteger seu segredo antes que o caos se instale por completo"
  },
  {
    "id": "os-gemeos-descolados-o-professor-pirata-sergio-klein",
    "title": "Os Gêmeos Descolados: o Professor Pirata",
    "author": "Sérgio Klein",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Pelo visto, o sumiço repentino e muito mal explicado de um professor de matemática vai ser o início de emoções aquáticas para a carol e o beto. Depois de desaparecer da escola sem dar nem mesmo um tchauzinho, o professor nicolau foi substituído por omar, que tem um jeitão de pirata muito suspeito e só sabe encher todos os alunos de natas zero. Além disso, o novo \"mestre\" também está atormentado a serena, uma linda e misteriosa bibliotecária com olhos da cor do mar. Será que os gêmeos vão descobrir o que tem de errado nessa história ou o omar vai pôr os dois para andar na pracha? Mergulhe nessa aventura sensacional agora mesmo! Não fique de fora."
  },
  {
    "id": "os-lencois-do-fantasma-ziguezague-elza-cesar-sallut",
    "title": "Os Lençóis do Fantasma Ziguezague",
    "author": "Elza Cesar Sallut",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Ea Editora Ática",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "A história acompanha as divertidas aventuras do fantasma ziguezague, que passa por situações inusitadas e confusas por causa dos seus lençóis"
  },
  {
    "id": "os-ultimos-jovens-da-terra-a-ameaca-cosmica-coautoria",
    "title": "Os Últimos Jovens da Terra: a Ameaça Cósmica",
    "author": "Coautoria",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Faro Editorial\"",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "O grupo de sobreviventes precisa embarcar em uma jornada eletrizante para salvar não apenas o seu refúgio, mas o mundo inteiro de uma destruição iminente"
  },
  {
    "id": "os-ultimos-jovens-da-terra-a-marcha-dos-zumbis-coautoria",
    "title": "Os Últimos Jovens da Terra: a Marcha dos Zumbis",
    "author": "Coautoria",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Faro Editorial\"",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Depois do apocalipse dos monstros, zumbis estão desaparecendo. Pode soar como uma coisa boa, mas jack sullivan e seus amigos desconfiam que a causa disso pode ser ainda pior para eles"
  },
  {
    "id": "pantano-de-sangue-pedro-bandeira",
    "title": "Pântano de Sangue",
    "author": "Pedro Bandeira",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Moderna",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Mais uma aventura com os karas! O crime organizado ronda o pantanal!"
  },
  {
    "id": "por-tras-do-nevoeiro-stella-carr",
    "title": "Por Trás do Nevoeiro",
    "author": "Stella Carr",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Calafrio",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma turma de jovens decidida muito curiosa se vê envolvida em um misterioso acontecimento no litoral paulista"
  },
  {
    "id": "quem-e-o-culpado-tim-dedopulos",
    "title": "Quem É o Culpado?",
    "author": "Tim Dedopulos",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Pé da Letra",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "O livro de cabeceira de casos criminais"
  },
  {
    "id": "rua-do-berro-sangue-da-bruxa-tommy-donbavand",
    "title": "Rua do Berro- Sangue da Bruxa",
    "author": "Tommy Donbavand",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Salamandra",
    "level": "EF02 - 8º-9º - ENSINO FUNDAMENTAL II",
    "synopsis": "Uma rataria de vampiros escapou e todos os moradores ficaram infectados com a energia vampiresca ! Parece que luke e seus amigos terão de escolher entre encontrar a relíquia e salvar seus vizinhos."
  },
  {
    "id": "salve-se-quem-puder-a-cidade-fantasma-sarah-dixon",
    "title": "Salve-se Quem Puder - a Cidade Fantasma",
    "author": "Sarah Dixon",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Scipione",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Cada livro dessa série conta uma emocionante história de aventura, cheia de incríveis quebra- cabeças para você resolver. Existem pistas para dar uma ajuda, e todas as respostas aparecem no final do livro"
  },
  {
    "id": "salve-se-quem-puder-o-onibus-das-estrelas-sarah-dixon",
    "title": "Salve-se Quem Puder - o Ônibus das Estrelas",
    "author": "Sarah Dixon",
    "category": "Terror e Suspense",
    "collection": true,
    "publisher": "Scipione",
    "level": "EF02 - 6º-7º - ENSINO FUNDAMENTAL II",
    "synopsis": "Cada livro dessa série conta uma emocionante história de aventura, cheia de incríveis quebra- cabeças para você resolver. Existem pistas para dar uma ajuda, e todas as respostas aparecem no final do livro"
  },
  {
    "id": "sete-historias-para-sacudir-o-esqueleto-angela-lago",
    "title": "Sete Histórias para Sacudir o Esqueleto",
    "author": "Angela- Lago",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Companhia das Letrinhas",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Há esqueletos e cemitérios , defuntos falsos ou não , sonho e realidade que se misturam o tempo todo. Mas não se preocupe : nada disso dá muito medo , pois o suspense vem recheado de humor."
  },
  {
    "id": "tremendo-de-coragem-sergio-klein",
    "title": "Tremendo de Coragem",
    "author": "Sérgio Klein",
    "category": "Terror e Suspense",
    "collection": false,
    "publisher": "Fundamento",
    "level": "EF01 - ENSINO FUNDAMENTAL I",
    "synopsis": "Esta história não começa com era uma vez, mas bem que poderia ser assim. Era uma vez biel e sua turma, que viviam recebendo aviõezinhos de papel com mensagens terroristas e morriam de medo de apanhar depois da aula. De quem? A turma rival era de peso: além do chefe, conhecido com bola, e sua temível barriga, havia os gêmeos amestrados, com jeito e apelido de pit bull. No meio da briga aparece um esqueleto qye some do laboratório da escola para virar ator de teatro. E tem também um avô viajente e mágico, um professor que transforma a aula em espetáculo e uma bicicleta meio tímida mas que adora filosofar."
  },
  {
    "id": "a-historia-de-inglaterra-a-j-p-taylor",
    "title": "A História de Inglaterra",
    "author": "A.j.p Taylor",
    "category": "Turismo",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": "História da inglaterra de 1914 a 1945 - livro em espanhol"
  },
  {
    "id": "a-grande-travessia-armindo-coelho-da-silva-e-helena-fraga",
    "title": "A Grande Travessia",
    "author": "Armindo Coelho da Silva e Helena Fraga",
    "category": "Estudos",
    "collection": false,
    "publisher": "Oficina do Livro",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "as-fantasticas-aventuras-de-dom-patetone-autor-nao-informado",
    "title": "As Fantásticas Aventuras de Dom Patetone",
    "author": "Autor não informado",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "dragonball-akira-toriyama",
    "title": "Dragonball",
    "author": "Akira Toriyama",
    "category": "Estudos",
    "collection": false,
    "publisher": "",
    "level": "LIVRE",
    "synopsis": ""
  },
  {
    "id": "o-coelhinho-tambor-alberto-maduar",
    "title": "O Coelhinho Tambor",
    "author": "Alberto Maduar",
    "category": "Estudos",
    "collection": false,
    "publisher": "Nova Cultural",
    "level": "LIVRE",
    "synopsis": ""
  }
];

export const categoryBySlug = (s: string) =>
  bookCategories.find((c) => c.slug === s);

export const booksByCategory = (name: string) =>
  catalog.filter((b) => b.category === name);
