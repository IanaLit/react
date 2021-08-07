import React from "react";
import  "./popup.scss";
export default class Popup extends React.Component<{ closePopup:()=>void }> {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Form has been submitted!</h1>
        <button className = 'button_submit button_submit__popup' onClick={this.props.closePopup}>ok</button>
        </div>
      </div>
    );
  }
}