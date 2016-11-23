var React = require('react');
var ReactDOM = require('react-dom');
import AreaLayout from './AreaLayout';

var SaveArea = React.createClass({
    getInitialState() {
        return {
        	areaList: [
    		]
        };
    },

    saveArea() {
   		const items = <AreaLayout/>;   
  		const name = window.prompt('Enter new area name');
    
  		this.setState({
    		areaList: this.state.areaList.concat({ items, name })
    	});
    },

  	removeSavedArea(index) {
    	this.setState({ 
    		areaList: this.state.areaList.filter((e, i) => i !== index)
     	});
  	},

  	loadSavedArea(index) {
    	console.log(this.state);

  	},

    render() {
    	const savedAreas = this.state.areaList.map((area, i) => {
      	return (
      		<div key={i} >
         		<p>{ area.name }</p>
         		<span className="removeArea" onClick={ this.removeSavedArea.bind(this, i) }> Remove</span>
         		<span className="loadArea" onClick={ this.loadSavedArea.bind(this, i)}> Load</span>
         	</div>
      	);
    });

  		return (
  			<div id='savedItemsPanel'>
         		<button onClick={this.saveArea}>Save area</button>
    			<div>Saved areas: { savedAreas }</div>
          	</div>


    );
}
  });

module.exports = SaveArea;
