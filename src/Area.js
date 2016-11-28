var React = require('react');
import './reset.css';
import './App.css';
import RenderDraggableRectangle from './RenderDraggableRectangle';

var Area = React.createClass({
    componentWillMount() {
      this.props.dispatcher.areaComponent = this;
    },

    getInitialState() {
      return { rectangleList: [] };
    },

    render() {
      var rectangles = this.state.rectangleList.map((info,i)=>{
        return (
          <RenderDraggableRectangle
             dispatcher={this.props.dispatcher}
             key={i} listIndex={i} x={info.x} y={info.y} c={info.c} />
        );
      });
      return (
        <div id='areaPanel'>
          <button id='addRectangle'
                  onClick={this.props.dispatcher.addRectangle
                             .bind(this.props.dispatcher)}>
            Add rectangle
          </button>
          <button id='clearArea'
                  onClick={this.props.dispatcher.clearArea
                             .bind(this.props.dispatcher)}>
            Clear area
          </button>
          <div id='area'>
            { rectangles }
          </div>
        </div>
        );
    }
});

module.exports = Area;


