import React, { Component } from 'react';
import { render } from 'react-dom';
import { roll8Plus2d3 } from './utils/Dice';
import { Origins } from './data/Origins';
import { Backgrounds } from './data/Backgrounds';
import './data/Professions';
import './index.css';
import TraitList from "./component/TraitList";
import AttributeList from './component/AttributeList';
import Field from './component/Field';
import Professions from './data/Professions';

class DieRollerForm extends Component {
	constructor(props) {
		super(props);
		this.origins = new Origins();
		this.backgrounds = new Backgrounds();
		this.professions = new Professions();
		this.state = {
			name: "Nameless",
			level: 1,
			speed: 30,
			toughness: roll8Plus2d3(),
			currentHP: 1,
			accuracy: roll8Plus2d3(),
			athletics: roll8Plus2d3(),
			awareness: roll8Plus2d3(),
			education: roll8Plus2d3(),
			presence: roll8Plus2d3(),
			morale: roll8Plus2d3(),
			currentMorale: 1,
			origin: 'None',
			background: 'None',
			player: 'None',
			profession: 'None',
			traits: ['None'],
			attributes: []
		}
		
		this.doReroll = this.doReroll.bind(this);
	}

	async setAttributeValue(attribute, value) {
		if (attribute === 'accuracy') {
			await this.setState({ accuracy: value });
		} else if (attribute === 'athletics') {
			await this.setState({ athletics: value });
		} else if (attribute === 'awareness') {
			await this.setState({ awareness: value });
		} else if (attribute === 'education') {
			await this.setState({ education: value });
		} else if (attribute === 'morale') {
			await this.setState({ morale: value });
		} else if (attribute === 'presence') {
			await this.setState({ presence: value });
		} else if (attribute === 'toughness') {
			await this.setState({ toughness: value });
		}
	}

	getAttributeValue(attribute) {
		if (attribute === 'accuracy') {
			return this.state.accuracy;
		} else if (attribute === 'athletics') {
			return this.state.athletics;
		} else if (attribute === 'awareness') {
			return this.state.awareness;
		} else if (attribute === 'education') {
			return this.state.education;
		} else if (attribute === 'morale') {
			return this.state.morale;
		} else if (attribute === 'presence') {
			return this.state.presence;
		} else if (attribute === 'toughness') {
			return this.state.toughness;
		}
	}

	compareTraits(a,b) {
		var traitNameA = a.name;
		if (typeof traitNameA === 'string') {
			traitNameA = traitNameA.toUpperCase();
		}
		var traitNameB = b.name;
		if (typeof traitNameB === 'string') {
			traitNameB = traitNameB.toUpperCase();
		}
		let comparison = 0;
		if (traitNameA > traitNameB) {
			comparison = 1;
		} else if (traitNameA < traitNameB) {
			comparison = -1;
		}
		return comparison;
	}

	async doReroll() {
		await this.setState({ accuracy: roll8Plus2d3() });
		console.log(`Accuracy = ${this.state.accuracy}`);
		await this.setState({ athletics: roll8Plus2d3() });
		console.log(`athletics = ${this.state.athletics}`);
		await this.setState({ awareness: roll8Plus2d3() });
		console.log(`awareness = ${this.state.awareness}`);
		await this.setState({ education: roll8Plus2d3() });
		console.log(`education = ${this.state.education}`);
		await this.setState({ morale: roll8Plus2d3() });
		console.log(`morale = ${this.state.morale}`);
		await this.setState({ presence: roll8Plus2d3() });
		console.log(`presence = ${this.state.presence}`);
		await this.setState({ toughness: roll8Plus2d3() });
		console.log(`toughness = ${this.state.toughness}`);
		await this.setState({ currentMorale: this.state.morale });
		let myOrigin = this.origins.pickOrigin();
		console.log(`origin = ${myOrigin[0]}/${myOrigin[1]}`);
		await this.setState({ origin: myOrigin[0] });
		let originAttribute = myOrigin[1];
		let originalAttrValue = this.getAttributeValue(originAttribute);
		let newAttrValue = originalAttrValue + 1;
		console.log(`bumping origin attribute ${originAttribute} from ${originalAttrValue} to ${newAttrValue}`);
		await this.setAttributeValue(originAttribute, newAttrValue);
		let recheckAttrValue = this.getAttributeValue(originAttribute);
		console.log(`make sure it changed ${originAttribute} to ${originalAttrValue} to ${recheckAttrValue}`);
		let myBackground = this.backgrounds.pickBackground();
		console.log(`background = ${myBackground.getBackgroundName()}`);
		await this.setState({ background: myBackground.getBackgroundName() });
		let backgroundTraits = this.backgrounds.pickTraits(myBackground);
		console.log(`background traits = ${backgroundTraits}`);
		let tempAttributes = [];
		tempAttributes.push({ name : "Accuracy", value : this.state.accuracy});
		tempAttributes.push({ name : "Athletics", value : this.state.athletics});
		tempAttributes.push({ name : "Awareness", value : this.state.awareness});
		tempAttributes.push({ name : "Education", value : this.state.education});
		tempAttributes.push({ name : "Morale", value : this.state.morale});
		tempAttributes.push({ name : "Presence", value : this.state.presence});
		tempAttributes.push({ name : "Toughness", value : this.state.toughness});
		await this.setState ({ attributes : tempAttributes});
		await this.setState({ currentHP: this.state.toughness });
		var randomProfession = this.professions.pickProfession();
		console.log(`profession = ${JSON.stringify(randomProfession)}`);
		await this.setState({ profession : randomProfession.name });
		let professionTraits = this.professions.pickTraits(randomProfession, backgroundTraits);
		console.log(`profession traits = ${professionTraits}`);
		let fullTraits = Array.prototype.concat(backgroundTraits, professionTraits);
		fullTraits.sort(this.compareTraits);
		
		await this.setState ({ traits : fullTraits});
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
						<Field label="Character:" value={this.state.name}/>
						<Field label="Player:" value={this.state.player}/>
					</div> 
					<div className="row">
						<Field label="Origin:" value={this.state.origin}/>
						<Field label="Background:" value={this.state.background}/>
					</div> 
					<div className="row">
						<Field label="Career Path:" value={this.state.profession}/>
						<Field label="Level:" value={this.state.level}/>
					</div> 
					<div><hr className="theline"/></div>
					<div className="row">
						<div className="left">
							<h3>Attributes (2d3+8)</h3>
							<AttributeList attributes={this.state.attributes}/>
						</div>
						<div className="right">
							<h3>Traits:</h3>
							<TraitList traits={this.state.traits} />
						</div>
					</div> 
					<div><hr className="theline"/></div>
					<div className="centered">
						<Field label="Current HP:" value={this.state.currentHP}/>
						<Field label="Current Morale:" value={this.state.currentMorale}/>
					</div> 
					<div><hr className="theline"/></div>
					<button className="button" id="rollNPCbutton" onClick={this.doReroll} ref={this.clickReroll}>Roll NPC</button>
				</div>
			</div>
		);
	}
}

render( 
	<DieRollerForm key='main'/>,
	document.getElementById('root')
);

