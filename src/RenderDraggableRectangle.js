import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Draggable = React.createClass({
    getInitialState() {
        return {
            relX: 0,
            relY: 0
        };
    },

    onMouseDown(e) {
        if (e.button !== 0) return;
        const ref = ReactDOM.findDOMNode(this.refs.handle);
        const area = document.getElementById('area');
        const box = ref.getBoundingClientRect();
        this.setState({
            relX: e.pageX - ((box.left) + area.scrollLeft - area.clientLeft),
            relY: e.pageY - ((box.top) + area.scrollTop - area.clientTop)
        });
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
        e.preventDefault();
    },
    onMouseUp(e) {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        e.preventDefault();
    },
    onMouseMove(e) {
        this.props.onMove({
            x: e.pageX - this.state.relX,
            y: e.pageY - this.state.relY
        });
        e.preventDefault();
    },

    render() {
        let hslColor = 'hsl(' + this.props.color + ', 100%, 50%)';
        let hslBorder = '1px solid hsl(' + this.props.color + ', 100%, 40%)';
        return(
            <div className="newRectangle" ref="handle" 
                style={{
                    position: 'absolute',
                    left: this.props.x,
                    top: this.props.y,
                    background: hslColor,
                    border: hslBorder
                    }}>
                <div className="innerRectangleWidth" onMouseDown={this.onMouseDown}></div>
                <div className="innerRectangleHeight" onMouseDown={this.onMouseDown}></div>
                <button className="changeColor"
                        onClick={this.props.dispatcher.changeRectangleColor
                                     .bind(this.props.dispatcher,
                                           this.props.listIndex)}>
                  Color
                </button>
            </div>
        )}
})

var RenderDraggableRectangle = React.createClass({
  render() {    
    return(
        <Draggable
           dispatcher={this.props.dispatcher}
           listIndex={this.props.listIndex}
           x={this.props.x} y={this.props.y} color={this.props.c}
           onMove={this.move}>
        </Draggable>
    )},
  move(e) {
    this.props.dispatcher.moveRectangle.call(this.props.dispatcher,
                                             this.props.listIndex,
                                             e.x, e.y);
  }
});


module.exports = RenderDraggableRectangle;
