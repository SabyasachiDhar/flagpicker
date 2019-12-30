import React, { Component } from 'react';
import { connect } from 'react-redux';
 
// Imagine you have a list of flagPickerMainData that you'd like to autosuggest.
const flagPickerMainData = [
	{
		"continent": "Africa",
		"countries": [
			{
				"name": "Nigeria",
				"flag": "🇳🇬"
			},
			{
				"name": "Ethiopia",
				"flag": "🇪🇹"
			},
			{
				"name": "Egypt",
				"flag": "🇪🇬"
			},
			{
				"name": "DR Congo",
				"flag": "🇨🇩"
			},
			{
				"name": "South Africa",
				"flag": "🇿🇦"
			}
		]
	},
	{
		"continent": "America",
		"countries": [
			{
				"name": "USA",
				"flag": "🇺🇸"
			},
			{
				"name": "Brazil",
				"flag": "🇧🇷"
			},
			{
				"name": "Mexico",
				"flag": "🇲🇽"
			},
			{
				"name": "Colombia",
				"flag": "🇨🇴"
			},
			{
				"name": "Argentina",
				"flag": "🇦🇷"
			}
		]
	},
	{
		"continent": "Asia",
		"countries": [
			{
				"name": "China",
				"flag": "🇨🇳"
			},
			{
				"name": "India",
				"flag": "🇮🇳"
			},
			{
				"name": "Indonesia",
				"flag": "🇮🇩"
			},
			{
				"name": "Pakistan",
				"flag": "🇵🇰"
			},
			{
				"name": "Bangladesh",
				"flag": "🇧🇩"
			}
		]
	},
	{
		"continent": "Europe",
		"countries": [
			{
				"name": "Russia",
				"flag": "🇷🇺"
			},
			{
				"name": "Germany",
				"flag": "🇩🇪"
			},
			{
				"name": "UK",
				"flag": "🇬🇧"
			},
			{
				"name": "France",
				"flag": "🇫🇷"
			},
			{
				"name": "Italy",
				"flag": "🇮🇹"
			}
		]
	},
	{
		"continent": "Oceania",
		"countries": [
			{
				"name": "Australia",
				"flag": "🇦🇺"
			},
			{
				"name": "Papua New Guinea",
				"flag": "🇵🇬"
			},
			{
				"name": "New Zealand",
				"flag": "🇳🇿"
			},
			{
				"name": "Fiji",
				"flag": "🇫🇯"
			},
			{
				"name": "Solomon Islands",
				"flag": "🇸🇧"
			}
		]
	}
]
 
class AutocompleteContinent extends Component {
  constructor(props) {
    super(props);
    this.state = {
			value: '',
			suggestions: [],
			isActive: false,
			continentName: ''
		};

  }
 
  onChange = (event) => {
		const value = event.target.value;
		let suggestions = []
		if(value.length > 0) {
			const regEx = new RegExp(`^${value}`, 'i');
			suggestions = flagPickerMainData.sort().filter(el => regEx.test(el.continent))
		}
    this.setState({
			suggestions,
			value: event.target.value,
			isActive: event.target.value ? false : true,
			continentName: event.target.value
		});
	};

	onFocus = (event) => {
		this.setState({
			isActive:  false,
			suggestions: flagPickerMainData.map(el => el)
		});
	}

	onClick = (event) => {
		this.setState({
			suggestions: [],
			continentName: event,
			isActive: true
		});
	}

	renderedSuggestion () {
		const { suggestions } = this.state;
		if(suggestions === 0){
			return null;
		}else {
			return(
				<div className="list-cust">
					<ul className="list-group list-group-cust">
						{
							suggestions.map((el, index) =>{
								return (
									<li 
										className="list-group-item list-group-item-action" 
										onClick={() => {this.onClick(el.continent); this.props.getContinentName(el.continent, el.countries)}} 
										key={index}>{el.continent}
									</li>
								)
							})
						}
					</ul>
				</div>
			)
		}
	}
 
  render() {
    return (
		<div className="card card-cust">
			<div className="card-body">
				<h5 className="card-title">Step 1</h5>
				<p className="card-text">Select a continent</p>
				<input className="form-control" 
					value={this.state.continentName} 
					onFocus={this.onFocus} 
					onChange={e => this.onChange(e)}
				/>
				{this.renderedSuggestion()}
				{
					this.state.continentName 
					? 
					<div>
						<p className="pt-5">You selected</p>
						<h5> {this.props.continentName}</h5>
					</div>
					:
					null
				}
			</div>
		</div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    continentName: state.falgPickerMain.continentName
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getContinentName: (continentName, countriesFlags) => dispatch({type: 'AUTO_COMPLETE_CONTINENT_SELECT', continentName, countriesFlags})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteContinent);