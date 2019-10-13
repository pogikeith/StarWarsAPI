import React from "react";

class Character extends React.Component {
  constructor() {
    super();

    this.state = {
      homeworld: ""
    };
  }

  componentDidMount() {
    fetch(this.props.homeworld)
      .then(response => response.json())
      .then(data => this.setState({ homeworld: data.name }));
  }

  render() {
    return (
      <div className="character">
        <h2>{this.props.name}</h2>
        <p>{this.props.height}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.birthYear}</p>
        <p>{this.state.homeworld}</p>
      </div>
    );
  }
}

export default Character;
