import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Character from "./Character";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(r => r.json())
      .then(d => this.setState({ characters: d.results }));
  }

  renderCharacters = () => {
    return this.state.characters.map(character => {
      return (
        <Character
          name={character.name}
          height={character.height}
          gender={character.gender}
          birthYear={character.birth_year}
          homeworld={character.homeworld}
        />
      );
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SWAPI</h1>
        {this.renderCharacters()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

