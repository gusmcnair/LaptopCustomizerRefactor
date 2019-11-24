import React from 'react';
import './App.css';
import Item from './item.js'

class MainForm extends React.Component {


  render() {

    const feature = this.props.featureElement

    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.featureElement}</h3>
        </legend>
        {this.props.features[feature].map((items, index) =>
          <Item
            key={items + "_" + index}
            items={items}
            item={items.name}
            cost={items.cost}
            feature={feature}
            selected={this.props.selected}
            onChange={this.props.onChange}
            USCurrencyFormat={this.props.USCurrencyFormat}
          />
        )}
      </fieldset>
    )
  }
}

export default MainForm;

