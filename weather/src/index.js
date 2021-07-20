import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./components/SeasonDisplay";
import LoadingScreen from "./components/LoadingScreen";

class App extends React.Component {
  
  state = {lat: null, errorMessage: ''}

  componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
          (position) => { this.setState({lat: position.coords.latitude});},
          err => { this.setState({ errorMessage: err.message })}
        );
  }

  //helper method
  renderContent() {
    if(this.state.errorMessage && !this.state.late){
      return <div>Error: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && this.state.lat){
      return(
      <SeasonDisplay lat={this.state.lat} />)
    } else {return <LoadingScreen />}
  }
  
  /// React says we have to define render!!
  render() {
    return (
    <div className="borderred">
      {this.renderContent()}
    </div>
    );
  }
}



ReactDOM.render(
  <App/>,
  document.querySelector("#root")

)