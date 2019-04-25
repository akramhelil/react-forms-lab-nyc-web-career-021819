import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      maxChars: 0
    };
  }


  changeHandle = (e) => {
    this.setState({
      message: e.target.value,
      maxChars: this.props.maxChars
    });
  }


  render() {
    console.log(this.state.message)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandle} />
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
