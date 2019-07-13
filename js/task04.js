import React, {Component} from "react";
import ReactDOM from "react-dom";

class LoadingData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      loading: true
    }
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      this.setState({
        progress: this.state.progress + 30
      });
    }, 100);
  }

  // componentWillMount() {
  //   this.interval = setTimeout(() => {
  //     this.setState({
  //       loading: false
  //     });
  //   }, 5000);
  // }


  render() {
    const style = {
      width: this.state.progress
    }
     if(this.state.loading) {
      return(
        <div className="progress">
          <div className="progress-bar" style={style}></div>
        </div>
      )
     } else {
      return <h1>Dane Załadowane</h1>
    }
  
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

class App extends React.Component {
  render() {
    return <LoadingData />
  }
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  LoadingData
};