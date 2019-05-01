import React, { Component } from "react";
import Quotes from "./Quotes";
import Button from "./Button";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: "Don't cry because it's over, smile because it happened.",
          name: "Dr.Seuss"
        },
        {
          quote: "Be yourself; everyone else is already taken.",
          name: "Oscar Wilde"
        },
        {
          quote:
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          name: "Albert Einstein"
        },
        {
          quote:
            "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
          name: "Bernard M. Baruch"
        }
      ],
      newQuote: "",
      newName: "",
      color: ""
    };
  }

  componentDidMount() {
    this.onRandomQuote();
    //this.changeColor();
  }

  onRandomQuote = () => {
    const { quotes } = this.state;
    let index = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      newQuote: quotes[index].quote,
      newName: quotes[index].name
    });
    this.changeColor();
  };

  changeColor = () => {
    let newcolor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ", " +
      Math.floor(Math.random() * 255) +
      ")";

    this.setState({ color: newcolor });

    document.body.style = `background: ${newcolor};`;
  };

  render() {
    const { newQuote, newName, color } = this.state;
    return (
      <div id="quote-box" style={{ color }}>
        <Quotes quote={newQuote} name={newName} />
        <Button color={color} onRandomQuote={this.onRandomQuote} />
      </div>
    );
  }
}

export default QuoteBox;
