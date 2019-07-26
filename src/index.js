import React, { Component } from 'react';
import { render } from 'react-dom';
import { roll8Plus2d3 } from './Dice';
import { Origins } from './Origins';
import { Backgrounds } from './Backgrounds';
import './index.css';
import { Trait } from "./Trait";
import TraitList from "./TraitList";

class DieRollerForm extends Component {
	constructor(props) {
		super(props);
		this.origins = new Origins();
		this.backgrounds = new Backgrounds();
		this.state = {
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
			origin: 'None',
			background: 'None',
			player: 'None',
			profession: 'None',
			traits: ['None']
		}
		
		this.doReroll = this.doReroll.bind(this);
	}

	bumpAttributeBy1(attribute) {
		if (attribute === 'accuracy') {
			this.setState({ accuracy: this.state.accuracy + 1 });
		}
		if (attribute === 'athletics') {
			this.setState({ athletics: this.state.athletics + 1 });
		}
		if (attribute === 'awareness') {
			this.setState({ awareness: this.state.awareness + 1 });
		}
		if (attribute === 'education') {
			this.setState({ education: this.state.education + 1 });
		}
		if (attribute === 'morale') {
			this.setState({ morale: this.state.morale + 1 });
		}
		if (attribute === 'presence') {
			this.setState({ presence: this.state.presence + 1 });
		}
		if (attribute === 'toughness') {
			this.setState({ toughness: this.state.toughness + 1 });
		}
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
		let myOrigin = this.origins.pickOrigin();
		this.setState({ origin: myOrigin[0] });
		let originAttribute = myOrigin[1];
		this.bumpAttributeBy1(originAttribute);
		let myBackground = this.backgrounds.pickBackground();
		this.setState({ background: myBackground.getBackgroundName() });
		let selectedTraits = this.backgrounds.pickTraits(myBackground);
		this.setState ({ traits : selectedTraits});
	};

	clickReroll(el){
		el.click();
	}

	render() {
		return (
			<div key="container" className="dice-roll-container">
 				<div key="npc-container" className="npc-container">
					<h1>Aliens &amp; Asteroids NPC Details</h1>
					<div className="row">
						<div className="column">
							<div className="row">
								<p>Character:</p>
								<textarea className="character-name-box" defaultValue={this.state.name}/>
							</div>
						</div>
						<div className="column">
							<div className="row">
								<p>Player:</p>
								<textarea className="player-name-box" defaultValue={this.state.player}/>
							</div>
						</div>
					</div> 
					<div className="row">
						<div className="column">
							<div className="row">
								<p>Origin:</p>
								<textarea className="origin-box" value={this.state.origin}/>
							</div>
						</div>
						<div className="column">
							<div className="row">
								<p>Background:</p>
								<textarea className="background-box" value={this.state.background}/>
							</div>
						</div>
					</div> 
					<div className="row">
						<div className="column">
							<div className="row">
								<p>Career Path:</p>
								<textarea className="profession-box" defaultValue={this.state.profession}/>
							</div>
						</div>
						<div className="column">
						<div className="row">
								<p>Level:</p>
								<textarea className="profession-box" defaultValue={this.state.level}></textarea>
							</div>
						</div>
					</div> 
					<div className="row">
						<div className="left">
							<h3>Attributes (2d3+8)</h3>
							<p>Accuracy: {this.state.accuracy}</p>
							<p>Athletics: {this.state.athletics}</p>
							<p>Awareness: {this.state.awareness}</p>
							<p>Education: {this.state.education}</p>
							<p>Morale: {this.state.morale}</p>
							<p>Presence: {this.state.presence}</p>
							<p>Toughness: {this.state.toughness}</p>
						</div>
						<div className="right">
							<h3>Traits:</h3>
							<TraitList traits={this.state.traits} />
						</div>
					</div> 
					<div className="row">
						<div className="column">
							<div className="row">
								<p>Total HP:</p>
								<textarea className="total-hp-box" defaultValue={this.state.toughness}/>
							</div>
						</div>
						<div className="column">
						<div className="row">
								<p>Current HP:</p>
								<textarea className="current-hp-box" defaultValue={this.state.currentHP}></textarea>
							</div>
						</div>
					</div> 
					<div className="row">
						<div className="column">
							<div className="row"/>
						</div>
						<div className="column">
							<div className="row">
								<p>Current Morale:</p>
								<textarea className="current-hp-box" defaultValue={this.state.currentMorale}></textarea>
							</div>
						</div>
					</div> 
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

