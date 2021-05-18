import React, { Component } from "react";
import Char from "./Char";
import "./CharList.css"
import { v4 as uuidv4 } from 'uuid';

class CharList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chars: [
                { name: "Licklider, Joseph Carl Robnett", years: "1915-1990", wtr: ["sít ARPANET", "rozvoj oboru Interakce člověk – počítač", "time-sharing - jeden počítač může sloužit více lidem"], page: 1, id: uuidv4() },
                { name: "Brookes, C. Bertram", years: "1910-1991", wtr: ["zkoumal teoretickou strukturu informační vědy", "vytvořil základní rovnici informační vědy", " studium infometrie"], page: 1, id: uuidv4() },
                { name: "Bush, Vannevar", years: "1890-1974", wtr: ["koncept analogového počítače", "napsal článek As We May Think", "Memex - pomoc v orientaci v obrovském množství informací", "pracoval na projektu Manhattan"], page: 1, id: uuidv4() },
                { name: "Cejpek, Jiří", years: "1928-2005", wtr: ["zakladatel informační vědy v ČRS", "automatizovaný systém právních informací", "stál u vzniku SKIP", "napsal Dějiny knihoven a knihovnictví"], page: 1, id: uuidv4() },
                { name: "Egan, Margaret", years: "1905-1959", wtr: ["napsala článek Foundations of a Theory of Bibliography", "koncept tzv. sociální epistemologie (slouží jako rámec pro efektivní šetření problémů)", "editorka časopisu Library Quarterly"], page: 1, id: uuidv4() },
                { name: "Farradane, Jason", years: "1906-1989", wtr: ["použil označení informační vědec", "relační teorie indexování s 9 různými vztahy mezi pojmy v dokumentech", "prvním šéfredaktor časopisu Information Storage and Retrieval"], page: 1, id: uuidv4() },
                { name: "Lovelace, Ada", years: "1815-1852", wtr: ["první programátorka", "pomohla naprogramovat Babbageho analytický stroj pomocí děrných štítků", "pojmy podmíněný a nepodmíněný skok", "je po ní pojmenován programovací jazyk ADA"], page: 1, id: uuidv4() },
                { name: "Machlup, Fritz", years: "1902-1983", wtr: ["jedním z prvních teoretiků informační společnosti", "znalosti jako ekonomická komodita", "5 typů znalostí (praktické, intelektuální, duchovní, nežádoucí - náhodně získané a znalosti pro zábavu)", "teze o poločasu rozpadu informace"], page: 1, id: uuidv4() },
                { name: "Merta, Augustin", years: "1914-2006", wtr: ["zakladatel informační vědy v ČSR", "Československá akademie věd", "sestavil anglicko-český slovník knihovnictví a informatiky"], page: 1, id: uuidv4() },
                { name: "Mooers, Calvin Northrup", years: "1919-1994", wtr: ["výzkum v oblasti informačního vyhledávání", "automatický mechanický systém pro třídění informací Zatocoding", "Mooersův zákon - využívání systémů pro informační vyhledávání", "kódová tabulka ASCII"], page: 1, id: uuidv4() },
                { name: "Shannon, Claude Elwood", years: "1916-2001", wtr: ["otec Teorie informace", "matematické pojetí informace", "napsal A mathematical theory of communication", "slovo bit", "první počítač schopný se učit z vlastní zkušenosti - tzv. Shannonova myš"], page: 1, id: uuidv4() },
                { name: "Steinerová, Jela", years: "1961", wtr: ["výzkum informačního chování v České republice a na Slovensku", "informační ekologie s cílem smysluplně regulovat informační toky", "zabývá se vztahy informační, otevřené a digitální vědy"], page: 1, id: uuidv4() },
                { name: "Turing, Alan", years: "1912-1954", wtr: ["Turingův stroj (primitivní počítač, který pomocí jedné pásky může řešit nejjednodušší úkoly)", "Turingův test (analýza distinkce člověka a počítače během textového dialogu)", "prolomil kódování Enigma", "spáchal sebevraždu"], page: 1, id: uuidv4() },
                { name: "Wiener, Norbert", years: "1894-1964", wtr: ["zakladatel kybernetiky", "matematik", "filozof", "termín kybernetika", "kniha Cybernetics or the Control and Communication in the Animal and the Machine", "studoval princip zpětné vazby"], page: 1, id: uuidv4() },
                { name: "Briet, Suzanne", years: "1894-1989", wtr: ["obor dokumentalistika", "přezdívka Madame Documentation", "dokumenty interpretovány různými lidmi různými způsoby podle účelu použítí"], page: 1, id: uuidv4() },
                { name: "Otlet, Paul", years: "1868-1944", wtr: ["zakladatel dokumentalistiky", "Světový palác neboli Mundaneum(instituce pro správu světové databáze znalostí)", "autor Mezinárodního desetinného třídění(MDT)", "propojování více dokumentů mezi sebou(prototyp hypertextu)"], page: 1, id: uuidv4() },
                { name: "Kurka, Ladislav", years: "1933", wtr: ["informační studia a knihovnictví", "redaktor Bulletinu SKIP", "architektura knihoven", "získal Cenu českých knihovníků a medaili Z. V. Tobolky"], page: 1, id: uuidv4() },
                { name: "Mahen, Jiří", years: "1882-1939", wtr: ["významně ovlivňoval kulturní život v Brně", "vybudoval brněnskou městskou knihovnu", "práce knihovníka jako tvůrčí činnost s hlubokým výchovně vzdělávacím posláním", "požadoval zpřístupnění odborných knihoven i prostým čtenářům", "básník", "novinář"], page: 1, id: uuidv4() },
                { name: "Richter, Vít", years: "1949", wtr: ["působí v NKP", "záchrana regionálních funkcí při reformě veřejné správy", "zakladatel konference Archivy, knihovny a muzea v digitálním světě"], page: 1, id: uuidv4() },
                { name: "Shaw, Ralph R. ", years: "1907-1972", wtr: ["model pojízdné knihovny (bookmobile)", "zařízení k rychlému prohledávání mikrofilmů (Rapid Selector)", "nakladatelství Scarecrow Press", "zjednodušení systému pro sledování zpožděného vrácení knih (transaction card charging)"], page: 1, id: uuidv4() },
                { name: "Shera, Jesse Hauk", years: "1903-1982", wtr: ["založení Center for Documentation and Communication Research", "spolu s Margaret Egan představil koncept sociální epistemologie", "navrhoval zavést kolektivní akvizici a meziknihovní výpůjční službu"], page: 1, id: uuidv4() }
            ]
        };
        this.turnCard = this.turnCard.bind(this);
        this.turnTest = this.turnTest.bind(this);
        this.turnLearn = this.turnLearn.bind(this);
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
                <h1>Osobnosti informační vědy</h1>
                <button onClick={this.turnTest}>Testování</button>
                <button onClick={this.turnLearn}>Učení</button>
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