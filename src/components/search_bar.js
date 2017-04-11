// wird benötigt weil das JSX zu React.createlement(...)
import React, { Component } from 'react';
  // ist das gleiche wie:
  // const Component = React.Component;

// * functional component --> it´s literally a function. 1 Function, some info goes in, some JSX comes out.
// ** do not have a State
// const SearchBar = () => {
//   return <input />; // React.createlement(...)
// };


// * class component --> internal record keeping --> SearchBar informiert andere Components, dass und was User eingetippt hat
// ** must have a render Method
// ** have a State
class SearchBar extends Component{
  // initializing variables, states, ...
  constructor(props){
    // SearchBar extents Component --> Component has it´s own constructor function
    super(props);

    // create new object --> liste von Properties
    this.state = {
      term: ""
    };
  }

  render (){
    // return <input onChange={this.onInputChange} />;
    // * Arrow Function --> more compact, without EventHandler Method
    // * setState informiert React, dass sich State geändert hat --> weitere Componenten die deshalb sich ändern könnten werden informiert
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
    // # innerhlab des Div: Value of the input: {this.state.term}
    // ## --> Anzeige des aktuellen Werts --> soll DOM Aktualisierung zeigen durch setState und React Aktualisuerng
    // # Controlled Component --> value = {this.state.term} --> genau definiert woher value kommt. Wird mit onChange geändert.
  }

  // EventHandler
  onInputChange(term){
    // event --> context des Events, wenn etwas passiert ist (Eingabe)
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


// die andere Seite hinter import
export default SearchBar;
