var React = require("react");
import * as math from "./lib";
// import {sum, pi} from "./lib";

const Item = React.createClass({
  render() {
    return (
      <li>item-{this.props.item.id}: {this.props.item.name}</li>
    )
  }
});

const Menu = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  render() {
    var it = this;
    return (
      <div>
        <h2>{it.props.name}</h2>
        {this.state.items.map((i)=> {return <Item item={i}/>})}
        <div>
          <input id="menu-text" type="text" valueLink={this.linkState('textValue')} />
          <button id='menu-button' onClick={this.clicked} className="btn" type='button'>Add</button>
        </div>
      </div>
    )
  },
  getInitialState: function() {
    return {
      items: this.props.items,
      textValue: "",
    }
  },
  clicked() {
    this.state.items.push({id:this.state.items.length, name:this.state.textValue});
    this.setState({items: this.state.items});
  }
});

export default Menu;
