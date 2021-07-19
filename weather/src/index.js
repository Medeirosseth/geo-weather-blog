import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  constructor(props) {
    super(props);
    // this is the only time we do direct assignment to this.state
    this.state = { lat: null};

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        /// we called setState- anytime you want to update state its setState
        this.setState({lat: position.coords.latitude});

      }
    );

  }


  /// React says we have to define render!!
  render() {
    return <div> Lattitude: {this.state.lat} </div>
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector("#root")

)