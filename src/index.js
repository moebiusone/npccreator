import React, { Component } from 'react';
import { render } from 'react-dom';
import { rollDie, roll8Plus2d3 } from './Dice';
import './index.css';

const Result = (props) => {
	return (
	  <p className="result-box">{props.result}</p>
	)
}

const Die = (props) => {
	return(
		<button value={props.value} className="die" onClick={props.update}>
			d{props.value}
		</button>
	)
}

class DieRollerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			multiplier: 1,
			result: 0,
			dice: [6, 20, 100],
			name: "Nameless",
			level: 1,
			speed: 30,
			toughness: 1,
			currentHP: 1,
			accuracy: 1,
			athletics: 1,
			awareness: 1,
			education: 1,
			presence: 1,
			morale: 1,
			currentMorale: 1,
			currentAR: 0,
			currentAP: 0
		}
		
		this.calculateTotal = this.calculateTotal.bind(this);
		this.doReroll = this.doReroll.bind(this);
	}

	renderResult() {
		return (
		  <Result result={this.state.result}/>
		)
	}

	renderDice() {
		let toRender = [];
		let dice = this.state.dice;
		for (var i = 0; i < dice.length; i++) {
		  toRender.push(
			<Die key={dice[i]} value={dice[i]} update={this.calculateTotal}/>
		  )
		}
		return toRender;
	}

	doReroll() {
		this.setState({ accuracy: roll8Plus2d3() });
		this.setState({ athletics: roll8Plus2d3() });
		this.setState({ awareness: roll8Plus2d3() });
		this.setState({ education: roll8Plus2d3() });
		this.setState({ morale: roll8Plus2d3() });
		this.setState({ presence: roll8Plus2d3() });
		this.setState({ toughness: roll8Plus2d3() });
		this.setState({ currentHP: this.state.toughness });
		this.setState({ currentMorale: this.state.morale });
	};

	clickReroll(el){
		el.click();
	}

	calculateTotal(e) {
		let multiplier = this.state.multiplier;
		let value = e.target.value;
		let result = 0;
		let random = rollDie(value)
		for (var i = 0; i < multiplier; i++) {
		  result += random;
		}
		this.setState({
		  result: result,
		})
	  }

	render() {
		return (
			<div key="container" className="dice-roll-container">
{/* 				<div key="dice-container" className="dice-container">
					{this.renderDice()}
				</div>
				<div key="results-container" className="results-container">
					<h1>&#x2193;</h1>
					{this.renderResult()}
				</div>
 */}
 				<div key="npc-container" className="npc-container">
					<h1>NPC Details</h1>
					<p>Character Name: {this.state.name}</p>
					<p>Attributes (2d3+8)</p>
					<p>Accuracy: {this.state.accuracy}</p>
					<p>Athletics: {this.state.athletics}</p>
					<p>Awareness: {this.state.awareness}</p>
					<p>Education: {this.state.education}</p>
					<p>Morale: {this.state.morale}</p>
					<p>Presence: {this.state.presence}</p>
					<p>Toughness: {this.state.toughness}</p>
					<button id="rollNPCbutton" onClick={this.doReroll} ref={this.clickReroll}>Roll NPC</button>
				</div>
			</div>
		);
	}
}

render( 
	<DieRollerForm key='main'/>,
	document.getElementById('root')
);

