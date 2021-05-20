import React, { Component } from "react";
import Char from "./Char";
import "./CharList.css"
import { v4 as uuidv4 } from 'uuid';

class CharList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTop: true,
            chars: [
                { name: "Avram, Henriette Davidson", years: "1919-2006", wtr: ["působila v Kongresové knihovně", "původně programátorka", "standard MARC pro strojově čitelnou katalogizaci", "mezinárodní vezre MARcu = UNIMARC"], page: 1, id: uuidv4() },
                { name: "Babbage, Charles", years: "1791-1871", wtr: ["analytický stroj na základě děrných štítků", "tabulky úmrtnosti - dal základ pro pojišťovnictví", "model diferenčního stroje"], page: 1, id: uuidv4() },
                { name: "Bason, Christian", years: "1972", wtr: ["vede Danish Design Centre (cíl posilovat hodnoty designu pro business a společnost)", "podílel se na vývoji a předávání designových metod pro oblast veřejného sektoru", "kniha Design for Policy"], page: 1, id: uuidv4() },
                { name: "Bates, Marcia J. ", years: "1942", wtr: ["zkoumá informační chování při vyhledávání informací", "vyhledávací strategie", "berrypicking (teorie vyhledávání)", "informace podle ní uživatel dostává po částech a z více zdrojů, přičemž při získání každé nové části se mění i formulace položeného dotazu"], page: 1, id: uuidv4() },
                { name: "Belkin, Nicholas J. ", years: "1942", wtr: ["výzkum v oblasti digitálních knihoven, informačního chování a interakce mezi člověkem a vyhledávacími systémy", "teorie informačního chování (Anomalous State of Knowledge - vychází z anomálního stavu poznání)", "profesor na School of Communication and Information at Rutgers University"], page: 1, id: uuidv4() },
                { name: "Berners-Lee, Tim", years: "1955", wtr: ["tvůrce World Wide Web", "jazyk pro vytváření webových stránek (HTML)", "protokol pro přenos dat (HTTP)", "prezident Open Data Institutu v Londýně"], page: 1, id: uuidv4() },
                { name: "Borgman, Christine L. ", years: "1951", wtr: ["jedna z nejvýznamnějších vědkyň oboru v současnosti", "vytváření, používání a správa digitálních dat a jejich vlivu na vědeckou činnost", "autorka více než 200 publikací (Scholarship in the Digital Age: Information)"], page: 1, id: uuidv4() },
                { name: "Bradford, Samuel Clement", years: "1878-1948", wtr: ["propagoval MDT", "Bradfordův zákon rozptylu (zkoumání anotací a rejstříků vědecké literatury a způsobu, jakým jsou vědecké články věnující se určitému tématu rozptýleny v řadě různých časopisů)", "napsal dílo Documentation"], page: 1, id: uuidv4() },
                { name: "Briet, Suzanne", years: "1894-1989", wtr: ["obor dokumentalistika", "přezdívka Madame Documentation", "dokumenty interpretovány různými lidmi různými způsoby podle účelu použítí"], page: 1, id: uuidv4() },
                { name: "Brookes, C. Bertram", years: "1910-1991", wtr: ["zkoumal teoretickou strukturu informační vědy", "vytvořil základní rovnici informační vědy", " studium infometrie"], page: 1, id: uuidv4() },
                { name: "Bush, Vannevar", years: "1890-1974", wtr: ["koncept analogového počítače", "napsal článek As We May Think", "Memex - pomoc v orientaci v obrovském množství informací", "pracoval na projektu Manhattan"], page: 1, id: uuidv4() },
                { name: "Cappuro, Rafael", years: "1945", wtr: ["zakladatel informační etiky", "založil International Center for Information Ethics", "ústředním pojmem není informace, ale člověk", "nová oblast informační vědy – angeletiky (teorie zpráv)", "řeší problematiku internetového soukromí"], page: 1, id: uuidv4() },
                { name: "Cejpek, Jiří", years: "1928-2005", wtr: ["zakladatel informační vědy v ČRS", "automatizovaný systém právních informací", "stál u vzniku SKIP", "napsal Dějiny knihoven a knihovnictví"], page: 1, id: uuidv4() },
                { name: "Cleverdon, Cyril William", years: "1914-1997", wtr: ["knihovník v Cranfield Institute of Technology na Cranfield University", "práce na hodnocení a efektivnosti systémů informačního vyhledávání (Cranfieldské projekty)", "poprvé formulován zákon vyjadřující opoziční vztah mezi přesností a úplností vyhledávání", "výzkumy položily základ pro automatickou indexaci"], page: 1, id: uuidv4() },
                { name: "Debons, Anthony", years: "1916-2013", wtr: ["podpořil vznik samostatného magisterského oboru Informační vědy na univerzitě v Daytonu", "první doktorský program Informační vědy (IDIS) v Pittsburghu", "pojem informatologie jako označení metavědy o informaci", "vytvořil teoretický model EATPUT (pro analýzu informačních systémů)", "kniha Information Science: 101"], page: 1, id: uuidv4() },
                { name: "Dervin, Brenda", years: "1938", wtr: ["teorie Sense-making (při výzkumu informačního chování, pomoc uživatelům přemostit mezeru ve znalostech)", "věnovala také informační chudobě, nerovnostem a masovým kampaním", "první žena v historii se stala prezidentkou International Communication Association"], page: 1, id: uuidv4() },
                { name: "Dewey, Melvil", years: "1851-1931", wtr: ["Deweyho desetinný systém (systém pro organizaci knih v knihovně)", "založil knihovní společnost Library Bureau", "zakládající člen American Library Association", "periodikum The Library Journal", "založil druhou nejstarší knihovnickou školu na světě - School of Library Economy na Columbia University"], page: 1, id: uuidv4() },
                { name: "Egan, Margaret", years: "1905-1959", wtr: ["napsala článek Foundations of a Theory of Bibliography", "koncept tzv. sociální epistemologie (slouží jako rámec pro efektivní šetření problémů)", "editorka časopisu Library Quarterly"], page: 1, id: uuidv4() },
                { name: "Engelbart, Douglas Carl", years: "1925-2013", wtr: ["vynálezce v oblasti počítačových a internetových technologií", "počítačová myš", "vyvinul oN-Line Systém (počítačový systém využívající hypertext, myš, předchůdce grafického uživatelského rozhraní, řazení informací dle relevance atd.)"], page: 1, id: uuidv4() },
                { name: "Farradane, Jason", years: "1906-1989", wtr: ["použil označení informační vědec", "relační teorie indexování s 9 různými vztahy mezi pojmy v dokumentech", "první šéfredaktor časopisu Information Storage and Retrieval"], page: 1, id: uuidv4() },
                { name: "Floridi, Luciano", years: "1964", wtr: ["profesor informační etiky na University of Oxford", "zakladatel filozofie informace", "4 úhly informace (inf. o něčem, jako něco, jako prostředek, v něčem)", "nedokončená tetralogie Principia Philosophiae Informationis", "člen Google Advisory Council"], page: 1, id: uuidv4() },
                { name: "Garfield, Eugene", years: "1925", wtr: ["zakladatel bibliometrie a scientometrie", "vytvořil první vědecký citační index - Science Citation index (umožnil počítat impact faktor)", "založil Institute for Scientific Information", "vyvinul systém HistCite (slouží pro bibliometrickou analýzu a informační vizualizaci)"], page: 1, id: uuidv4() },
                { name: "Given, Lisa M. ", years: "1970", wtr: ["zkoumá sociální sítě jako zprostředkovatele zdravotnických, akademických a dalších informací", "výzkumná témata = informační chování v kontextu vysokých škol, informační gramotnost, kvalitativní výzkumné metody, použitelnost webu a uživatelské zkušenosti s technologiemi", "kniha 100 Questions (and Answers) about Qualitative Research"], page: 1, id: uuidv4() },
                { name: "Gutenberg, Johannes", years: "1397-1468", wtr: ["vynalezl technologii mechanického knihtisku pomocí pohyblivých liter", "vylepšil tiskařský lis a vytvořil novou tiskařskou barvu na bázi fermeže", "Almanach auf das Jahr 1448 = kalendář, jeho nejstarší datovaný tisk", "nejznámější dílo = tištěná 42-řádková bible"], page: 1, id: uuidv4() },
                { name: "Hauptman, Robert", years: "1941", wtr: ["zakladatel oboru informační etika", "referenční knihovník", "Hauptmanův experiment (jak se v praxi staví knihovníci k eticky sporným požadavkům - např. nalézt návod na sestrojení bomby)", "časopis Journal of Information Ethics", "kniha Ethics and Librarianship"], page: 1, id: uuidv4() },
                { name: "Hjǿrland, Birger", years: "1947", wtr: ["organizace znalostí, typologie dokumentů a filozofické základy informační vědy", "teorie doménové analýzy (vychází ze sociologie, z níž čerpá zkoumání způsobů produkce znalostí a aktérů, a z kognitivní analýzy, která se zaměřuje na vnímání toho, co je sděleno)", "stude porovnávající spolehlivost Wikipedie a Encyklopedie Britannica", "profesor organizace znalostí na Royal School of Library and Information Science na University of Copenhagen"], page: 1, id: uuidv4() },
                { name: "Chatman, Elfreda", years: "1942-2002", wtr: ["zaměřovala se na minoritní skupiny a na studium informačního chování v kontextu každodenního života", "vytvořila tři teorie - Informační chudoba, Život v kruhu, Normativní chování (čerpají ze sociální teorie)", "ze sociologie uvádí do informační vědy teorii malého světa (účastníci z malých světů spojováni společnými názory a obavami z okolního světa)"], page: 1, id: uuidv4() },
                { name: "Janoš, Karel", years: "1934-1993", wtr: ["oblast informační etiky", "aktuální myšlenky", "navrhl novou koncepci kurikula Katedry informačních studií na UK v Praze", "učil informační etiku", "jogín"], page: 1, id: uuidv4() },
                { name: "Kramerius, Václav Matěj", years: "1753-1808", wtr: ["přispěl k obnovení českého jazyka v době národního obrození", "vydával Pražské poštovské noviny (později Krameriovy c.k. vlastenecké Noviny)", "založil první ryze české nakladatelství v Čechách - Česká expedice", "podle něj pojmenován projekt Národní knihovny – Kramerius (účelem je digitalizace kulturního dědictví ČR)"], page: 1, id: uuidv4() },
                { name: "Kurka, Ladislav", years: "1933", wtr: ["informační studia a knihovnictví", "redaktor Bulletinu SKIP", "architektura knihoven", "získal Cenu českých knihovníků a medaili Z. V. Tobolky"], page: 1, id: uuidv4() },
                { name: "Lancaster, Frederick Wilfrid", years: "1933-2013", wtr: ["podílel se na hodnocení projektu MEDLARS (systém určený pro analýzu a vyhledávání lékařských časopisů)", "navrhnul 6 kritérií pro hodnocení úspěšnosti systémů pro vyhledávání informací (pokrytí, úplnost, přesnost, doba odezvy, uživatelská náročnost, formát zobrazení)", "emeritní profesor Graduate School of Library and Information Science na University of Illinois"], page: 1, id: uuidv4() },
                { name: "Licklider, Joseph Carl Robnett", years: "1915-1990", wtr: ["sít ARPANET", "rozvoj oboru Interakce člověk – počítač", "time-sharing - jeden počítač může sloužit více lidem"], page: 1, id: uuidv4() },
                { name: "Lotka, James Alfred", years: "1880-1949", wtr: ["zabýval se evoluční biologií, ekologií, matematikou, statistikou a bibliometrii", "zabýval se rozložením populace z hlediska věku, porodnosti a úmrtnosti", "Lotkův zákon (jak je rozložen počet autorů podle jejich publikační produkce)", "prezident American Statistical Association"], page: 1, id: uuidv4() },
                { name: "Lovelace, Ada", years: "1815-1852", wtr: ["první programátorka", "pomohla naprogramovat Babbageho analytický stroj pomocí děrných štítků", "pojmy podmíněný a nepodmíněný skok", "je po ní pojmenován programovací jazyk ADA"], page: 1, id: uuidv4() },
                { name: "Luhn, Hans Peter", years: "1896-1964", wtr: ["vynálezce", "Luhnův scanner (elektronický systém vyhledávání informací)", "použil termín business inteligence v článku A Business Intelligence System", "koncept KWIC (Keyword-in-Context - technika pro indexaci)", "vytvoření první publikace na světě zpracované pomocí počítače (Chemical titles)", "vážení termínů (každý termín má pro význam textu různou váhu)"], page: 1, id: uuidv4() },
                { name: "Mahen, Jiří", years: "1882-1939", wtr: ["významně ovlivňoval kulturní život v Brně", "vybudoval brněnskou městskou knihovnu", "práce knihovníka jako tvůrčí činnost s hlubokým výchovně vzdělávacím posláním", "požadoval zpřístupnění odborných knihoven i prostým čtenářům", "básník", "novinář"], page: 1, id: uuidv4() },
                { name: "Machlup, Fritz", years: "1902-1983", wtr: ["jedním z prvních teoretiků informační společnosti", "znalosti jako ekonomická komodita", "5 typů znalostí (praktické, intelektuální, duchovní, nežádoucí - náhodně získané a znalosti pro zábavu)", "teze o poločasu rozpadu informace"], page: 1, id: uuidv4() },
                { name: "Manovich, Lev", years: "1960", wtr: ["počítačový grafik", "programátor", "teoretik nových médií", "kniha The Language of New Media", "první systematická teorie nových médií (má pět principů - číselná reprezentace, modularita, automatizace, variabilita, transkódování)", "ve výzkumech se věnuje oblasti digital humanities, datovým vizualizacím a software studies", "založil Software Studies Initiative"], page: 1, id: uuidv4() },
                { name: "Markey, Karen", years: "1953", wtr: ["organizace informací a online vyhledávání", "projekt Bibliobouts (online společenská hra s cílem zvýšit informační gramotnost studentů)", "kniha Online Searching: A Guide to Finding Quality Information Efficiently and Effectively"], page: 1, id: uuidv4() },
                { name: "McLuhan, Herbert Marshall", years: "1911-1980", wtr: ["představil koncept World Wide Web jako rozšířené vědomí téměř 30 let před jeho reálným příchodem (The Gutenberg Galaxy: The Making of Typographic Man)", "pojem globální vesnice (v ní se svět promění díky elektronickým médiím)", "pojmová dvojice horká a chladná média (odlišují se mírou naplněnosti obsahem)"], page: 1, id: uuidv4() },
                { name: "Merta, Augustin", years: "1914-2006", wtr: ["zakladatel informační vědy v ČSR", "Československá akademie věd", "sestavil anglicko-český slovník knihovnictví a informatiky"], page: 1, id: uuidv4() },
                { name: "Mooers, Calvin Northrup", years: "1919-1994", wtr: ["výzkum v oblasti informačního vyhledávání", "automatický mechanický systém pro třídění informací Zatocoding", "Mooersův zákon - využívání systémů pro informační vyhledávání", "kódová tabulka ASCII"], page: 1, id: uuidv4() },
                { name: "Neumann, John von", years: "1903-1957", wtr: ["tvůrce teorie her", "první plně elektronický počítač ENIAC", "jednou z hlavních postav projektu Manhattan", "Von Neumannova architektura digitálního počítače – používá se dodnes)"], page: 1, id: uuidv4() },
                { name: "Nielsen, Jakob", years: "1957", wtr: ["pět kvalitativních komponent použitelnosti (naučitelnost, účinnost, zapamatovatelnost, nízká míra chybovosti, spokojenost)", "discount usability engineering (proces pro rychlé a levné vylepšování uživatelského rozhraní)", "autor Nielsenova zákona o růstu rychlosti připojení k internetu"], page: 1, id: uuidv4() },
                { name: "Norman, Donald A. ", years: "1935", wtr: ["Institut kognitivních věd na University of California v San Diegu", "ve své knize jako první použil termín user-centered design", "design musí vycházet z potřeb a mentálních modelů člověka", "knihy The Design of Everyday Things a The Design of Future Things"], page: 1, id: uuidv4() },
                { name: "Otlet, Paul", years: "1868-1944", wtr: ["zakladatel dokumentalistiky", "Světový palác neboli Mundaneum(instituce pro správu světové databáze znalostí)", "autor Mezinárodního desetinného třídění(MDT)", "propojování více dokumentů mezi sebou(prototyp hypertextu)"], page: 1, id: uuidv4() },
                { name: "Ranganathan, Shiyali Ramamrita", years: "1892-1972", wtr: ["zasadil se o rozvoj knihovnictví", "pět zákonů knihovnictví", "dvojtečkové třídění (Colon classification)", "poprvé představuje fasetovou teorii organizace dokumentů (fasety vyjadřují vlastnosti použité pro seskupování pojmů podle jejich podstaty – prostor, energie, osoba, čas, hmota)"], page: 1, id: uuidv4() },
                { name: "Richter, Vít", years: "1949", wtr: ["působí v NKP", "záchrana regionálních funkcí při reformě veřejné správy", "zakladatel konference Archivy, knihovny a muzea v digitálním světě"], page: 1, id: uuidv4() },
                { name: "Salton, Gerard", years: "1927-1995", wtr: ["vektorový model vyhledávání informací (Vector space model)", "systém SMART (System for the Manipulation and Retrieval of Text - systém pro vyhledávání informací)", "zavedl relevanci zpětné vazby a shlukování při vyhledávání", "cena Gerard Salton Awards (udělována každé 3 roky)"], page: 1, id: uuidv4() },
                { name: "Shannon, Claude Elwood", years: "1916-2001", wtr: ["otec Teorie informace", "matematické pojetí informace", "napsal A mathematical theory of communication", "slovo bit", "první počítač schopný se učit z vlastní zkušenosti - tzv. Shannonova myš"], page: 1, id: uuidv4() },
                { name: "Shaw, Ralph R. ", years: "1907-1972", wtr: ["model pojízdné knihovny (bookmobile)", "zařízení k rychlému prohledávání mikrofilmů (Rapid Selector)", "nakladatelství Scarecrow Press", "zjednodušení systému pro sledování zpožděného vrácení knih (transaction card charging)"], page: 1, id: uuidv4() },
                { name: "Shera, Jesse Hauk", years: "1903-1982", wtr: ["založení Center for Documentation and Communication Research", "spolu s Margaret Egan představil koncept sociální epistemologie", "navrhoval zavést kolektivní akvizici a meziknihovní výpůjční službu"], page: 1, id: uuidv4() },
                { name: "Schrettinger, Martin Willibald", years: "1972-1851", wtr: ["pro teorii knihovnictví označení knihovní věda", "nejstarší velký předmětový katalog na světě Alphabetischer Realkatalog (lístky abecedně podle témat)", "rozdělení dokumentů do předmětových skupin a podskupin a následné provázání s abecedním katalogem"], page: 1, id: uuidv4() },
                { name: "Siemens, George", years: "1970", wtr: ["tvůrce MOOC kurzů", "konektivismus (didaktická teorie)", "duplikační teorie hodnoty vzdělávání (každý obsah, který je duplikovatelný, nemá pro vzdělávání hodnotu, přidá jí např. zpětná vazba nebo motivace ke vzdělávání)", "kniha Knowing Knowledge"], page: 1, id: uuidv4() },
                { name: "Simon Herbert Alexander", years: "1916-2001", wtr: ["základy kognitivní vědy a umělé inteligence", "Nobelova cena za ekonomii za výzkum rozhodovacích procesů v rámci organizace", "pomocí počítačových programů s. A. Newellem modeloval myšlení a řešení problémů v počítači", "podílel se na vzniku prvního počítačového programu umělé inteligence Logic Theory Machine"], page: 1, id: uuidv4() },
                { name: "Solla Price, Derek John de", years: "1922-1983", wtr: ["zasloužil se o rozvoj kvantitativních metod hodnocení věd", "spoluzakladatel scientometrie (základy položil v knize Little Science, Big Science)", "Priceův zákon druhé odmocniny (vědecká elita odpovídá druhé odmocnině z celkové populace vědců)", "Priceův model (matematický model růstu sociálních sítí)"], page: 1, id: uuidv4() },
                { name: "Sompel, Herbert van de", years: "1957", wtr: ["zpřístupnění šedé vědecké literatury zdarma", "Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH)", "Open Archives Initiative Object Reuse & Exchange specifications (OAI-ORE)", "OpenURL", "projekt Memento pro zpřístupnění webového archivu"], page: 1, id: uuidv4() },
                { name: "Stallman, Richard Matthew", years: "1953", wtr: ["zakladatel hnutí svobodného softwaru", "organizace Free Software Foundation", "napsal GNU svobodný operační systém", "softwarová svoboda - svobodně užívat, studovat, rozšiřovat a upravovat software", "koncept Copyleft licence", "píseň Free Software Song"], page: 1, id: uuidv4() },
                { name: "Steinerová, Jela", years: "1961", wtr: ["výzkum informačního chování v České republice a na Slovensku", "informační ekologie s cílem smysluplně regulovat informační toky", "zabývá se vztahy informační, otevřené a digitální vědy"], page: 1, id: uuidv4() },
                { name: "Summit, Roger Kent", years: "1930", wtr: ["zakladatel databázového centra Dialog Information Retrieval Services", "vývoj služby Dialog (online vyhledávání tak, jak jej známe dnes)", "každoročně se uděluje cena Roger K. Summit Scholarship studentům knihovnictví a informačních věd"], page: 1, id: uuidv4() },
                { name: "Swanson, Don R. ", years: "1924-2012", wtr: ["Literature-based Discovery (mnoho nových vědeckých objevů v biomedicíně může být uskutečněno z již existujících výzkumů nalezením nových souvislostí)", "Swanson linking (propojování dvou různých poznatků z nezávislých výzkumů)", "vývoj softwaru Arrowsmith (pomáhal nalézat nové vztahy mezi články z databáze Medline)"], page: 1, id: uuidv4() },
                { name: "Swartz, Aaron", years: "1986-2013", wtr: ["bojoval za neomezený přístup k informacím na internetu", "na protest stáhl z digitální knihovny JSTOR 4 miliony článků", "značkovací jazyk Markdown", "vývoj internetových nástrojů RSS a Reddit", "spáchal sebevraždu"], page: 1, id: uuidv4() },
                { name: "Taube, Mortimer", years: "1910-1965", wtr: ["založil společnost Documentation, Inc. ", "zkoumal nové možnosti a metody indexace a vyhledávání", "zjednodušil vyhledávání dokumentů", "zavedl Booleovské operátory do informačního vyhledávání", "COMAC (Continuous Multiple Access Controller - zakladač děrných štítků vytvářející logické vztahy mezi předmětovými termíny"], page: 1, id: uuidv4() },
                { name: "Taylor, Robert Saxton", years: "1918-2009", wtr: ["změnil jméno oboru z knihovní vědy na informační vědu", "založil první magisterský program Informační management", "Value-Added Model (pomoc zaměřit se na potřeby uživatelů při vytváření a hodnocení informačních systémů)", "čtyři úrovně informačních potřeb (identifikace, nejasná formulace, kvalifikovaná formulace, organizace)"], page: 1, id: uuidv4() },
                { name: "Tobolka, Zdeněk Václav", years: "1874-1951", wtr: ["průkopník moderního knihovnictví v ČSR", "první časopis věnující se knihovnictví České knihovnictví", "propojil knihovnické školství s Univerzitou Karlovou", "podílel se na založení Mezinárodní knihovnické organizace (IFLA)"], page: 1, id: uuidv4() },
                { name: "Turing, Alan", years: "1912-1954", wtr: ["Turingův stroj (primitivní počítač, který pomocí jedné pásky může řešit nejjednodušší úkoly)", "Turingův test (analýza distinkce člověka a počítače během textového dialogu)", "prolomil kódování Enigma", "spáchal sebevraždu"], page: 1, id: uuidv4() },
                { name: "Vickery, Brian Campbell", years: "1918-2009", wtr: ["zabýval se vyhledáváním a klasifikací informací, informačními systémy a komunikací informací mezi odborníky", "metodika fasetové klasifikace (Faceted classification: a guide to construction and use of special schemes)", "sepsal knihu Information science in theory and practice"], page: 1, id: uuidv4() },
                { name: "Wiener, Norbert", years: "1894-1964", wtr: ["zakladatel kybernetiky", "matematik", "filozof", "termín kybernetika", "kniha Cybernetics or the Control and Communication in the Animal and the Machine", "studoval princip zpětné vazby"], page: 1, id: uuidv4() },
                { name: "Wilson, Thomas Daniel", years: "1935", wtr: ["informační management a informační chování", "analyzoval jak jednotlivci i skupiny shromažďují a komunikují informace", "vytvořil kognitivistické modely informačního chování", "založil a vydává časopis Information Research s otevřeným přístupem"], page: 1, id: uuidv4() },
                { name: "Zipf, George Kingsley", years: "1902-1950", wtr: ["psycholog a jazykovědec", "použil statistiku ke studiu jazyků", "Zipfův zákon (vztah mezi pořadím klíčových slov uspořádaných podle frekvence jejich výskytů, později využit při automatickém indexování)", "Princip nejmenšího úsilí (princip ovlivňující různé chování jednotlivců i kolektivu)"], page: 1, id: uuidv4() },
                { name: "Zurkowski, Paul G. ", years: "1932", wtr: ["definoval pojem informační gramotnost", "podílel se na založení Information Industry Association", "informačně gramotný jedinec podle něj musí zvládat používat informační zdroje a nástroje při práci"], page: 1, id: uuidv4() }


















            ]
        };
        this.turnCard = this.turnCard.bind(this);
        this.turnTest = this.turnTest.bind(this);
        this.turnLearn = this.turnLearn.bind(this);
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 200;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
    turnCard(id) {
        const newChars = this.state.chars.map(char => {
            if (char.id === id) {
                if (char.page === 1) {
                    return { ...char, page: 2 };
                }
                if (char.page === 2) {
                    return { ...char, page: 1 };
                }
            }
            return char;
        });

        this.setState({ chars: newChars });
    }
    turnTest() {
        const newChars = this.state.chars.map(char => {
            return { ...char, page: 1 };
        });
        this.setState({ chars: newChars });
    }
    turnLearn() {
        const newChars = this.state.chars.map(char => {
            return { ...char, page: 2 };
        });
        this.setState({ chars: newChars });
    }
    render() {
        return (
            <div className="CharList">
                <h1 className="CharList-title">OSOBNOSTI INFORMAČNÍ VĚDY</h1>
                <div className={this.state.isTop ? "CharList-buttons" : "CharList-buttons scrolled"}>
                    <button onClick={this.turnTest} className="CharList-btn-test">Testování</button>
                    <button onClick={this.turnLearn} className="CharList-btn-learn">Učení</button>
                </div>
                <div className="CharList-list">
                    {this.state.chars.map((char) => (
                        <Char
                            key={char.id}
                            name={char.name}
                            years={char.years}
                            wtr={char.wtr}
                            page={char.page}
                            turn={this.turnCard}
                            id={char.id}
                            position={this.state.char}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default CharList;