var Calc = createReactClass({

  render: function() {
    return (
      React.createElement(Calcer, null)
    );
  }
});
function NumButton(props) {
  return (
    React.createElement("button", { className: "num-button", onClick: props.onClick },
    props.value));


}
function FunButton(props) {
  return (
    React.createElement("button", { className: "fun-button", onClick: props.onClick },
    props.value));


}

class CalculatorFrame extends React.Component {
  renderNumButton(i) {
    return (
      React.createElement(NumButton, {
        value: i,
        onClick: () => this.props.onClick(i) }));


  }
  renderFunButton(i) {
    return (
      React.createElement(FunButton, {
        value: i,
        onClick: () => this.props.onClick(i) }));


  }
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { className: "calc-row" },
      this.renderNumButton(1),
      this.renderNumButton(2),
      this.renderNumButton(3),
      this.renderNumButton("C")),

      React.createElement("div", { className: "calc-row" },
      this.renderNumButton(4),
      this.renderNumButton(5),
      this.renderNumButton(6),
      this.renderNumButton("/")),

      React.createElement("div", { className: "calc-row" },
      this.renderNumButton(7),
      this.renderNumButton(8),
      this.renderNumButton(9),
      this.renderNumButton("x")),

      React.createElement("div", { className: "calc-row" },
      this.renderNumButton(0),
      this.renderNumButton("+"),
      this.renderNumButton("-"),
      this.renderNumButton("="))));



  }}

class Calcer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      fun: "",
      num2: "" };

  }
  handleClick(i) {
    if (Number.isInteger(i) && this.state.fun == "=") {

      this.setState({
        num1: this.state.num1 + i,
        fun: "",
        num2: "" });

    } else
    if (Number.isInteger(i)) {

      this.setState({
        num1: this.state.num1 + i });

    } else
    if (i == "C") {
      this.setState({
        num1: "",
        fun: "",
        num2: "" });

    } else
    {
      var num2;
      if (this.state.num2.length != 0) {
        num2 = this.adder();
      } else
      {
        num2 = this.state.num1;
      }
      this.setState({
        num1: "",
        fun: i,
        num2: num2 });

    }
  }
  adder() {
    var num2;
    switch (this.state.fun) {
      case "+":
        num2 = parseInt(this.state.num1) + parseInt(this.state.num2);
        break;
      case "-":
        num2 = parseInt(this.state.num1) - parseInt(this.state.num2);
        break;
      case "x":
        num2 = parseInt(this.state.num1) * parseInt(this.state.num2);
        break;
      case "/":
        num2 = parseInt(this.state.num1) / parseInt(this.state.num2);
        break;
      case "=":
        num2 = "";
        break;}

    return num2;
  }
  render() {
    const num1 = this.state.num1;
    const num2 = this.state.num2;
    const fun = this.state.fun;
    return (
      React.createElement("div", { className: "calculator" },
      React.createElement("div", { className: "calc-screen" },
      React.createElement("div", null, num2 + " " + fun + " " + num1)),


      React.createElement("div", { className: "calculator-frame" },
      React.createElement(CalculatorFrame, {
        onClick: i => this.handleClick(i) }))));





  }}

// =======



