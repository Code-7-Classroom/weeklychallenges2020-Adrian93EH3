import React, { Component } from 'react';
import './App.css';
import Person from './BasicInfo';

    class App extends Component {
      constructor(props) {
        super(props)
        this.state = {
          person: [
            {
              Name: "Adrian Diaz",
              Phone: '704-421-0643',
              DOB: "08/27/1997"
            },
            {
              Name: "Gustavo Ortiz",
              Phone: "787-454-3103",
              DOB: "10/08/1998"
            }
          ]
        }
      }
      render() {
        return <Person person={this.state.person} />
      }
    }
export default App;