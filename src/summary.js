import React from 'react';
import SummaryItems from './summaryitems'

class Summary extends React.Component {
    render() {
        return (


            <section className="main__summary">
                <h2>Your cart</h2>
                {Object.keys(this.props.selected).map((feature, index) =>
                    <SummaryItems
                        featureElement={feature}
                        key={feature + '-' + index}
                        total={this.props.total}
                        selectedOption={this.props.selected[feature]}
                        USCurrencyFormat={this.props.USCurrencyFormat}
                    />
                )}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {this.props.USCurrencyFormat.format(this.props.total)}
                    </div></div>
            </section>

        )
    }
}

export default Summary;