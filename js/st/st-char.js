/* st-char.js */

st.char = {
	stats: {
		cost: 0,
		endurance: 0,
		lifeblood: 0,
		skills: { },
		species: null,
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
		
		// endurance
		var endurance = st.math.die(2, 6, 0);
		st.char.setEndurance(endurance);
		
		// lifeblood
		var lifeblood = st.math.die(4, 6, 0);
		st.char.setLifeblood(lifeblood);
		
		// skills
		st.char.setSkill("physical", 1);
		var additionalSkillPoints = 3 + (st.math.probMet(0.3) ? 1 : 0);
		st.log("additionalSkillPoints[" + additionalSkillPoints + "]");
		for (var i=0; i< additionalSkillPoints; i++) {
			st.log("additionalSkill[" + i + "]");
			var skill = st.skills.list[st.math.dieArray(st.skills.list)];
			st.log("skill[" + skill + "]");
			st.char.incrSkill(skill, 1);
		}
		
		// traits
		for (var i=0; i < 2; ) {
			st.log("trait[" + i + "]");
			var trait = st.traits.list[st.math.dieArray(st.traits.list)];
			st.log("trait.Trait[" + trait.Trait + "]");
			if (!st.char.hasTrait(trait)) {
				st.char.addTrait(trait);
				i++;
			}
		}
		st.char.stats.traits.sort(st.char.traitsComparator);
		
		// weakness
		var weakness = st.weaknesses.list[st.math.dieArray(st.weaknesses.list)];
		st.log("weakness[" + weakness.Weakness + "]");
		st.char.stats.weakness = weakness;		
		
		setTimeout(st.render.render, 10);
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
		st.char.stats.species = species;
		switch (species) {
			case "android":
				st.char.initAndroid();
				break;
			default:
				st.err("Could not set species[" + species + "]");
				break;
		}
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
	}
	
};
