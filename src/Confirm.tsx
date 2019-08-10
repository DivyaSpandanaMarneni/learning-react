import * as React from "react";
import "./Confirm.css";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick?: () => void;
  onCancelClick?: () => void;
}



export class Confirm extends React.Component<IProps> {
  public static defaultProps = {
    cancelCaption: "Cancel",
    okCaption: "Okay"
  };
  
  // private handleOkClick = () => {
  //   console.log('clicked ok', this.props);
  //
  //   this.props.onOkClick();
  //
  // }
  //
  // private handleCancelClick = () => {
  //   console.log('Cancel clicked ', this.props)
  //   this.props.onCancelClick();
  // }
  render(): React.ReactNode {
  
    return (
      <div className={this.props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"}>
        <div className="confirm-title-container">
          <span>{this.props.title}</span>
        </div>
        
        <div className="confirm-content-container">
          <p>{this.props.content}</p>
        </div>
        
        <div className="confirm-buttons-container">
          <button className="confirm-cancel" onClick={this.props.onCancelClick}>
            {this.props.cancelCaption}
          </button>
          <button className="confirm-ok" onClick={this.props.onOkClick}>
            {this.props.okCaption}
          </button>
        </div>
        
      </div>
    );
  }
}

