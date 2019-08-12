import React from 'react';
import './App.css';

import {Confirm} from "./Confirm";


interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number;
}

export class App extends React.Component<{}, IState> {
  private timer: number = 0;
  private renderCount = 0;
  constructor(props: {}) {
    super(props);
    this.state = {
      confirmOpen: false,
      confirmMessage: "Please hit the confirm button",
      confirmVisible: true,
      countDown: 10
    }
  }
  
  public componentDidUpdate(prevProps: {}, prevState: IState, snapshot: number) {
    console.log("componentDidUpdate", prevProps, prevState,
      snapshot, {
        renderCount: this.renderCount
      });
  }
  
  public getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>): any | null {
    this.renderCount++;
    console.log("getSnapshotBeforeUpdate", prevProps, prevState, {
      renderCount: this.renderCount
    });
    return this.renderCount;
    
  }
  
  
  public static getDerivedStateFromProps(props: {}, state: IState) {
    console.log('get derived state from props ', props, state);
    return null;
  }
  
  private handleTimerTick = () => {
    this.setState({
      confirmMessage: `Please hit the confirm button ${this.state.countDown}
      seconds to go`,
      countDown: this.state.countDown -1
    }, () => {
      if (this.state.countDown <=0) {
        clearInterval(this.timer);
        this.setState({
          confirmMessage: "Too late to confirm!",
          confirmVisible: false
        })
      }
    })
  }
  
  componentDidMount(): void {
    this.timer = window.setInterval(() => this.handleTimerTick(), 1000);
  }
  
  private handleCancelConfirmClick = () => {
    console.log('Cancel clicked');
    clearInterval(this.timer);
    this.setState({confirmOpen: false, confirmMessage: "Take a break"});
  }
  
  private handleOkClick = () => {
    console.log('clicked ok');
    clearInterval(this.timer);
    this.setState({confirmOpen: false, confirmMessage: "Cool carry on reading"});;
  }
  
  private handleConfirmClick = () => {
    this.setState({confirmOpen: true});
    clearInterval(this.timer);
    this.setState({confirmOpen: true})
  }
 
  public render() {
    return (
      <div>
        <p>{this.state.confirmMessage}</p>
        {this.state.confirmVisible && (
          <button onClick={this.handleConfirmClick}>Confirm</button>

        )}
        <Confirm open={this.state.confirmOpen} title={'Welcome to React'}
                 content={'Learning React'}
                 onCancelClick={this.handleCancelConfirmClick}
                 onOkClick={this.handleOkClick} />
      </div>
     
      );
  }
  
  public componentWillUnmount(): void {
    clearInterval(this.timer);
  }
}
