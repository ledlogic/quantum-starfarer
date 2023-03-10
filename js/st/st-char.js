/* st-char.js */

st.char = {
	stats: {
		arms: null,
		body: null,
		brain: null,
		cost: 0,
		durability: 0,
		endurance: 0,
		lifeblood: 0,
		reliability: 0,
		skills: { },
		species: null,
		tech: null,
		traits: [],
		weakness: null
	},
	
	init: function() {
		st.log("st.char.init");
		_.each(st.skills.list, function(skill) {
			st.log(skill);
			st.char.setSkill(skill, 0);
		});
		st.log(st.char.stats.skills);	
	},
	
	initAndroid: function() {
		st.log("st.char.initAndroid");
		
		st.char.setTechAtLeast("Space");
		
		// endurance
		var endurance = st.math.die(2, 6, 0);
		st.char.setEndurance(endurance);
		
		// lifeblood
		var lifeblood = st.math.die(4, 6, 0);
		st.char.setLifeblood(lifeblood);
		
		// locomotion
		var locomotion = st.locomotion.findLocomotion("Two Legs");
		locomotion2 = _.omit(locomotion, ["Cost"]);
		st.char.stats.locomotion = locomotion2;
		
		// skills
		st.char.setSkill("physical", 1);
		var additionalSkillPoints = 3 + (st.math.probMet(0.3) ? 1 : 0);
		st.log("additionalSkillPoints[" + additionalSkillPoints + "]");
		for (var i=0; i< additionalSkillPoints; i++) {
			st.log("additionalSkill[" + i + "]");
			var skill = st.math.selArray(st.skills.list);
			st.log("skill[" + skill + "]");
			st.char.incrSkill(skill, 1);
		}
		
		// traits
		for (var i=0; i < 2; ) {
			st.log("trait[" + i + "]");
			var trait = st.math.selArray(st.traits.list);
			st.log("trait.Trait[" + trait.Trait + "]");
			if (!st.char.hasTrait(trait)) {
				st.char.addTrait(trait);
				i++;
			}
		}
		st.char.stats.traits.sort(st.char.traitsComparator);
		
		// weakness
		var weakness = st.math.selArray(st.weaknesses.list);
		st.log("weakness[" + weakness.Weakness + "]");
		st.char.stats.weakness = weakness;		
	},
	
	initRobot: function() {
		st.log("st.char.initRobot");
		
		// body
		var body = st.math.selArray(st.body.list);
		st.log("body[" + body.Body + "]");
		st.char.setBody(body);
		
		// locomotion
		var locomotion = st.math.selArray(st.locomotion.list);
		st.log("locomotion[" + locomotion.Locomotion + "]");
		st.char.setLocomotion(locomotion);
		
		// arms
		var arms = st.math.selArray(st.arms.list);
		st.log("arms[" + arms.Arms + "]");
		st.char.setArms(arms);
		
		// brains
		var brain = st.math.selArray(st.brains.list);
		st.log("brain[" + brain.Brain + "]");
		st.char.setBrain(brain);
		
		// skills
		var skills = parseInt(brain.Skills,10);
		var skillMax = parseInt(brain["Max Skill Level"],10);
		st.log("skills[" + skills + "]");
		st.log("skillMax[" + skillMax + "]");
		for (var i=0; i< skills; ) {
			st.log("skills[" + i + "]");
			var skill = st.math.selArray(st.skills.list);
			st.log("skill[" + skill + "]");
			var currentSkill = st.char.getSkill(skill);
			st.log("currentSkill[" + currentSkill + "]");
			if (currentSkill < skillMax) {
				st.char.incrSkill(skill, 1);
				i++
			}
		}
	},
	
	traitsComparator: function(a, b) {
		return a.Trait > b.Trait ? 1 : -1;		
	},
	
	addTrait: function(trait) {
		st.char.stats.traits.push(trait);
	},
	
	getStat: function(stat) {
		return this.stats[stat];
	},
	
	getSkill: function(skill) {
		return this.stats.skills[skill];
	},
	
	hasTrait: function(trait) {
		st.log("st.char.hasTrait");
		st.log("trait.Trait[" + trait.Trait + "]");
		var ret = false;
		for (var i=0; i < _.size(st.char.stats.traits); i++) {
			var iterTrait = st.char.stats.traits[i];
			st.log("iterTrait[" + iterTrait.Trait + "]");
			if (trait.Trait == iterTrait.Trait) {
				ret = true;
			}
		}
		st.log("ret[" + ret + "]");
		return ret;
	},
	
	incrCost: function(incr) {
		st.log("incrCost");
		st.log("incr[" + incr + "]");
		var oldCost = st.char.getStat("cost");
		st.log("oldCost[" + oldCost + "]");
		var newCost = oldCost + incr;
		st.log("newCost[" + newCost + "]");
		st.char.setStat("cost", newCost);
	},
	
	incrSkill: function(skill, incr) {
		st.log("incrSkill");
		st.log("skill[" + skill + "]");
		st.log("incr[" + incr + "]");
		var oldSkill = st.char.getSkill(skill);
		st.log("oldSkill[" + oldSkill + "]");
		var newSkill = oldSkill + incr;
		st.log("newSkill[" + newSkill + "]");
		st.char.setSkill(skill, newSkill);
	},

	setSpecies: function(species) {
		st.log("st.char.setSpecies");
		switch (species) {
			case "android":
				st.char.stats.species = species;
				st.char.initAndroid();				
				break;
			case "robot":
				st.char.stats.species = species;
				st.char.initRobot();				
				break;
			default:
				st.err("Could not set species[" + species + "]");
				return;
				break;
		}
		
		setTimeout(st.render.render, 10);
	},
	
	setStat: function(statName, statValue) {
		st.log("st.char.setStat");
		st.log("statName[" + statName + "]");
		st.log("statValue[" + statValue + "]");
		
		this.stats[statName] = statValue;
	},
	
	setEndurance: function(endurance) {
		st.log("st.char.setEndurance");
		st.char.setStat("endurance", endurance);
		st.char.incrCost(50e3 + 1e3*endurance);
	},
	
	setLifeblood: function(lifeblood) {
		st.log("st.char.setLifeblood");
		st.char.setStat("lifeblood", lifeblood);
		st.char.incrCost(5e3*lifeblood);
	},
	
	setSkill: function(skillName, skillValue) {
		st.log("st.char.setSkill");
		st.log("skillName[" + skillName + "]");
		st.log("skillValue[" + skillValue + "]");
		
		st.char.stats.skills[skillName] = skillValue;
		st.log(st.char.stats.skills);
	},
	
	setBody: function(body) {
		st.log("st.char.setBody");
		st.log("body[" + body.Body + "]");
		
		st.char.stats.body = body;
		
		st.char.setTechAtLeast(body.Tech);
		
		st.char.stats.reliability = parseInt(body.Reliability,10);
		st.char.stats.durability = parseInt(body.Durability,10);
		var cr = parseInt(body.Cost,10);
		st.char.incrCost(cr);
		st.log(st.char.stats);
	},
	
	setLocomotion: function(locomotion) {
		st.log("st.char.setLocomotion");
		st.log("locomotion[" + locomotion.Locomotion + "]");
		
		st.char.stats.locomotion = locomotion;
		
		st.char.setTechAtLeast(locomotion.Tech);
		
		var p = parseFloat(locomotion.Cost.replace("%", ""),10);
		var cr = (p/100.0) * parseInt(st.char.stats.body.Cost,10)
		st.char.incrCost(cr);
		st.log(st.char.stats);
	},
	
	setArms: function(arms) {
		st.log("st.char.setArms");
		st.log("arms[" + arms.Arms + "]");
		
		st.char.stats.arms = arms;
		
		st.char.setTechAtLeast(arms.Tech);
		
		var cr = parseFloat(arms.Cost,10);
		st.char.incrCost(cr);
		st.log(st.char.stats);
	},
	
	setBrain: function(brain) {
		st.log("st.char.setBrain");
		st.log("brain[" + brain.Brain + "]");
		
		st.char.stats.brain = brain;
		
		st.char.setTechAtLeast(brain.Tech);
		
		var cr = parseFloat(brain.Cost,10);
		st.char.incrCost(cr);
		
		st.char.stats.name = brain.Tech.substring(0,3);
		
		st.log(st.char.stats);
	},	
	
	setTechAtLeast: function(tech) {
		st.log("st.char.setTechAtLeast");
		st.log("tech[" + tech + "]");
		
		// only increment techs.
		var currentIndex = -1;
		var currentTech = st.char.stats.tech;
		if (currentTech) {
			currentIndex = st.tech.findTechIndex(currentTech);
		}
		var newIndex = st.tech.findTechIndex(tech);
		st.log("currentIndex[" + currentIndex + "]");
		st.log("newIndex[" + newIndex + "]");
		if (newIndex > currentIndex) {
			st.char.stats.tech = tech;
			st.log(st.char.stats);
		}
	}
	
};
