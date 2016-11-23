var React = require('react');

var AreaLayout = React.createClass({
    render() {
        return (
            <div id='area'> {this.props.layout} </div>
    )}
});

module.exports = AreaLayout;