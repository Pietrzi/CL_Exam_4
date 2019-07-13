import React, {Component} from "react";
import ReactDOM from "react-dom";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      text: "",
      validName: false,
      validEmail: false,
      validText: false
    }
  }

  handleClick(e) {
    e.preventDefalut();
    const name = this.inputName.value;
    const email = this.inputEmail.value;
    const text = this.inputText.value;
    this.setState({
      name: name,
      email: email,
      text: text
    })
  }

  render() {
    const info = <h1>{}</h1>

    return(
      <>
      <form onSubmit={ (e)=> this.handleClick(e) }>
        <input className="form-control" ref={ el=> this.inputName = el}></input>
        <input className="form-control" type="email" ref={ el=> this.inputEmail = el}></input>
        <textarea className="form-control" ref={ el=> this.inputText = el}></textarea>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      </>
    )
  }
}

class App extends React.Component {
  render() {
    return <ContactForm />
  }
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  ContactForm
};