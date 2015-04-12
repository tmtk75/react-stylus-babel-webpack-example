var React = require("react");
const Header = require("./header.js");
const Menu = require("./menu.js");
import p from "./Person.js";
var $ = require("jquery");

const Content = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  render() {
    var items = [{id:0, name:"apple"}, {id:1, name:"orange"}, {id:2, name:"lemon"},]
    return (
      <div className="columns">
        <div className="one-fourth column">
          <Menu name={"Main menu"} items={items}/>
        </div>
        <div className="three-fourth column">
          <h2>Content</h2>
          <div>
            {new p("tmtk75").sayHello()}
          </div>
          <div>
            <button id='content-button' onClick={this.clicked} className="btn" type='button'>Count</button>
            counter: {this.state.counter}
          </div>
          <div>
            <input id="content-text" type="text" valueLink={this.linkState('textValue')} />
            {this.state.textValue}
          </div>
        </div>
      </div>
    );
  },
  getInitialState: function() {
     return {
       counter: this.props.counter,
       textValue: this.props.name,
     };
  },
  clicked() {
    this.setState({counter: this.state.counter + 1});
  },
  componentDidMount() {
    var n = this.getDOMNode();
    $("#content-text", n).asEventStream("keyup")
                    .map(".target.value")
                    .skipDuplicates()
                    .debounce(300)
                    .onValue((v)=>{console.log("hi", v);});
    $("#theButton", n).asEventStream("click")
                      .map(1)
                      .onValue((v)=>{
                        console.log(this.state.counter);
                      });
  },
});

React.render(<Header />, document.getElementById('header'));
React.render(<Content name="tmtk75" counter={123} />, document.getElementById('content'));

