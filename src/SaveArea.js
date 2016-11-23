var React = require('react');
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

  	renameSavedArea(index) {
  		let newName = window.prompt('Enter new area name');
  		this.state.areaList[index].name = newName;
  		this.setState({
    		areaList:  this.state.areaList
    	});

  	},

    render() {
    	const savedAreas = this.state.areaList.map((area, i) => {
      	return (
      		<div className='savedAreaContainer' key={i} >
         		<p>{ area.name }</p>
         		<span className="renameArea" onClick={ this.renameSavedArea.bind(this, i)}> Rename</span>
         		<span className="removeArea" onClick={ this.removeSavedArea.bind(this, i) }> Remove</span>
         	</div>
      	);
    });

  		return (
  			<div id='savedItemsPanel'>
         		<button id='saveArea' onClick={this.saveArea}>Save area</button>
    			<div id='savedAreas'> Saved areas: { savedAreas }</div>
          	</div>


    );
}
  });

module.exports = SaveArea;
