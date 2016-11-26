var React = require('react');

var SaveArea = React.createClass({
    getInitialState() {
      return { layoutNames: []};
    },

    saveArea() {
      const name = window.prompt('Enter new area name');
      this.props.dispatcher.saveArea.call(this.props.dispatcher, this, name);
    },

  	renameSavedArea(index) {
  		const name = window.prompt('Enter new area name');
      this.props.dispatcher.renameArea
          .call(this.props.dispatcher, this, index, name);
  	},

    render() {
    	const savedAreas = this.state.layoutNames.map((name, i) => {
      	return (
      		<div className='savedAreaContainer' key={i} >
         		<p>{ name }</p>
         		<span className="renameArea"
                  onClick={ this.renameSavedArea.bind(this, i)}>
              Rename
            </span>
         		<span className="removeArea"
                  onClick={ this.props.dispatcher.removeArea
                    .bind(this.props.dispatcher, this, i) }>
              Remove
            </span>
            <span className="setLayoutToSaved"
                  onClick={ this.props.dispatcher.setLayoutToSaved
                    .bind(this.props.dispatcher, this, i) }>
              Set
            </span>
         	</div>
      	);
    });

  		return (
  			<div id='savedItemsPanel'>
         		<button id='saveArea'
             onClick={this.saveArea}>Save area</button>
    			<div id='savedAreas'> Saved areas: { savedAreas }</div>
          	</div>


    );
}
  });

module.exports = SaveArea;
