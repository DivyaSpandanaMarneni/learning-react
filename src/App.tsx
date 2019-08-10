import React from 'react';
import './App.css';

import {Confirm} from "./Confirm";


interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
}

export class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: true,
      confirmMessage: "Please hit the confirm button"
    }
  }
  
  private handleCancelConfirmClick = () => {
    console.log('Cancel clicked');
    this.setState({confirmOpen: false, confirmMessage: "Take a break"});
  }
  
  private handleOkClick = () => {
    console.log('clicked ok');
    this.setState({confirmOpen: false, confirmMessage: "Cool carry on reading"});;
  }
  
  private handleConfirmClick = () => {
    this.setState({confirmOpen: true})
  }
 
  public render() {
    return (
      <div>
        <p>{this.state.confirmMessage}</p>
        <button onClick={this.handleConfirmClick}>Confirm</button>
        <Confirm open={this.state.confirmOpen} title={'Welcome to React'}
                 content={'Learning React'}
                 onCancelClick={this.handleCancelConfirmClick}
                 onOkClick={this.handleOkClick} />
      </div>
     
      );
  }
}
