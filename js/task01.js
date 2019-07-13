import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <div>
        <h1>"Hello World"</h1>
        <span>Ostatni Egzamin</span>
        </div>
    );
  }

// class App extends React.Component {
//     render() {
//         return (
//             <>
//             <h1>Hello World</h1>
//             <span>Ostatni Egzamin</span>
//             </>
//         )
//     }
// }



/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));

export default App;