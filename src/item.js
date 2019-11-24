import React from 'react';
import slugify from 'slugify';

class Item extends React.Component {
  render() {


    const itemHash = slugify(JSON.stringify(this.props.items));

    return (
      <div>
        <input type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(this.props.item)}
          checked={this.props.item === this.props.selected[this.props.feature].name}
          onChange={() => this.props.onChange(this.props.feature, this.props.items)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {this.props.item} ({this.props.USCurrencyFormat.format(this.props.cost)})
</label>
      </div>
    )
  }
}

export default Item;