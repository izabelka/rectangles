var React = require('react');
import './reset.css';
import './App.css';
import Area from './Area';
import SaveArea from './SaveArea';


var dispatcher = {
  areaComponent: null,
  rectangleList: [],
  layoutsList: [],

  // utility function
  layoutNames: function () {
    return this.layoutsList.map((l)=>(l.name));
  },

  // manipulate current rectangles
  //
  addRectangle: function () {
    this.rectangleList = this.rectangleList.concat(
      { x: 150, y: 150, c: Math.floor(Math.random()*360+1) }
    );
    this.areaComponent.setState({ rectangleList: this.rectangleList });
  },
  moveRectangle: function (idx, x, y) {
    this.rectangleList = this.rectangleList.map(function (el,i) {
      if (i!==idx) {
        return el;
      } else {
        return Object.assign({}, el, {x: x, y: y});
      }
    });
    this.areaComponent.setState({ rectangleList: this.rectangleList });
  },
  changeRectangleColor: function (idx) {
    this.rectangleList = this.rectangleList.map(function (el,i) {
      if (i!==idx) {
        return el;
      } else {
        return Object.assign({}, el, {c: Math.floor(Math.random()*360+1)});
      }
    });
    this.areaComponent.setState({ rectangleList: this.rectangleList });
  },

  clearArea: function () {
    this.rectangleList = [];
    this.areaComponent.setState({ rectangleList: this.rectangleList=[] });
  },

  // save/rename/etc layouts
  //
  saveArea: function (saveView, name) {
    this.layoutsList = this.layoutsList.concat(
      { name: name,
        rectangleList: this.rectangleList.slice(0) }
    );
    saveView.setState({ layoutNames: this.layoutNames() });
  },
  removeArea: function (saveView, idx) {
    this.layoutsList = this.layoutsList.filter((el,i)=>(i!==idx));
    saveView.setState({ layoutNames: this.layoutNames() });
  },
  renameArea: function (saveView, idx, name) {
    this.layoutsList = this.layoutsList.map(function (el,i) {
      if (i!==idx) {
        return el;
      } else {
        return Object.assign({}, el, {name: name});
      }
    });
    saveView.setState({ layoutNames: this.layoutNames() });
  },
  setLayoutToSaved: function (saveView, idx) {
    this.rectangleList = this.layoutsList[idx].rectangleList;
    this.areaComponent.setState({ rectangleList: this.rectangleList });    
  }
}

var App = React.createClass({
  render() {
    return (
      <div>
        <Area dispatcher={dispatcher} />
        <SaveArea dispatcher={dispatcher} />
      </div>
    );
  }
});

module.exports = App;
