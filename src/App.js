var React = require('react');
import './reset.css';
import './App.css';
import Area from './Area';
import SaveArea from './SaveArea';

var App = React.createClass({
    render() {
        return (
                <div>
                    <Area />
                    <SaveArea/>
                </div>
        );
    }
});

module.exports = App;