var React = require('react');
import './reset.css';
import './App.css';
import RenderDraggableRectangle from './RenderDraggableRectangle';
import AreaLayout from './AreaLayout';

var Area = React.createClass({
    getInitialState() {
        return {
            rectangleList: [],
        };
    },

    addRectangle() {
        let rectangleList = this.state.rectangleList;
        this.setState({
            rectangleList: rectangleList.concat(<RenderDraggableRectangle key={rectangleList.length} />)
        });
    },

    clearArea() {
        this.setState({
            rectangleList: []
        })
    },

    render() {
        return (
                <div id='areaPanel'>
                    <button onClick={this.addRectangle}>Add rectangle</button>
                    <button onClick={this.clearArea}>Clear area</button>
                    <AreaLayout layout={this.state.rectangleList}/>
                </div>
        );
    }
});

module.exports = Area;


