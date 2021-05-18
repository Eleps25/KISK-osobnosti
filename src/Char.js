import React, { Component } from "react";
import "./Char.css";
import { v4 as uuidv4 } from 'uuid';

class Char extends Component {
    constructor(props) {
        super(props);
        this.turnHandler = this.turnHandler.bind(this);
    }
    turnHandler() {
        this.props.turn(this.props.id);
    }
    render() {
        let guessPage = <div>
            <h2>{this.props.name}</h2>
            <button onClick={this.turnHandler}>Otoč kartu</button>
        </div>;
        let infoPage = <div>
            <h2>{this.props.name}</h2>
            <h3>{this.props.years}</h3>
            <ul className="Char-ul">
                {this.props.wtr.map((info) => (
                    <li className="Char-li" key={uuidv4()}>{info}</li>
                ))}
            </ul>
            <button onClick={this.turnHandler}>Otoč kartu</button>
        </div>
        return (
            <div className="Char">
                {this.props.page === 1 ? guessPage : infoPage}
            </div>
        )
    }
}

export default Char;