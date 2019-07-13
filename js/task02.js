import React from "react";
import ReactDOM from "react-dom";

class UserCard extends React.Component {
  render() {
      const { name, surname, address, postcode, city } = this.props;
      if(name !== "" && surname !== "" && address !== "" && city !== "" && (postcode.length === 5 || postcode.length === 6)) {
    return(
      <div class="card">
        <div>
          <h5>{this.props.name} {this.props.surname}</h5>
          <div>{this.props.address}</div>
          <div>{this.props.postcode} {this.props.city}</div>
        </div>
      </div>
    )
   } else {
     return (
      <div className="alert alert-danger">
      Dane są nieprawidłowe!
    </div>
     )
   }
  }
}

class App extends React.Component {
  render() {
    return <UserCard name="Mike" surname="Bajk" address="street" postcode="43-134" city="City"/>
  }
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  UserCard
};