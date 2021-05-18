import React, { Component } from "react";
import Char from "./Char";
import "./CharList.css"

class CharList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chars: [
                { name: `Turing, Alan`, years: `1912-1954`, wtr: ["Zakladatel moderní informatiky", "Dešifrování nacistických kódu během 2.SV - Enigma", "Turingův stroj", "Turingův test"], page: 1, id: 5 },
                { name: `Otlet, Paul`, years: `1868-1944`, wtr: ["MDT", "FID", "Dokumentalistika"], page: 1, id: 6 },
                { name: `Bush, Vannevar`, years: `1890-1974`, wtr: ["Memex", "As We May Think"], page: 1, id: 7 },
                { name: `Mahen, Jiří`, years: `1882-1939`, wtr: ["Mahenova knihovna Brno", "redaktor Lidových Novin"], page: 1, id: 8 },
                { name: `Turing, Alan`, years: `1912-1954`, wtr: ["Zakladatel moderní informatiky", "Dešifrování nacistických kódu během 2.SV - Enigma", "Turingův stroj", "Turingův test"], page: 2 },
                { name: `Otlet, Paul`, years: `1868-1944`, wtr: ["MDT", "FID", "Dokumentalistika"], page: 2 },
                { name: `Bush, Vannevar`, years: `1890-1974`, wtr: ["Memex", "As We May Think"], page: 2 },
                { name: `Mahen, Jiří`, years: `1882-1939`, wtr: ["Mahenova knihovna Brno", "redaktor Lidových Novin"], page: 2 },
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