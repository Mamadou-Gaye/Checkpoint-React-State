import React, { Component } from 'react';

class App extends Component {
  state = {
    personne: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Développeur"
    },
    show: false,
    elapsedTime: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ elapsedTime: this.state.elapsedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { show, elapsedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>{profession}</p>
          </div>
        )}
        <p>Elapsed Time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;