import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  constructor(props) {
    super(props);
    // this is the only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        /// we called setState- anytime you want to update state its setState
        this.setState({lat: position.coords.latitude});
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  /// React says we have to define render!!
  render() {
    if(this.state.errorMessage && !this.state.late){
      return <div>Error: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.lat){
      return <div>latitude: {this.state.lat}</div>
    } else {return <div>Loading</div>}
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector("#root")

)