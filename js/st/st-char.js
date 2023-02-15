/* st-char.js */

st.char = {
	species:null,
	
	stats: {
		cost: 0 // in KCr
	},
	
	init: function() {
		st.log("st.char.init");
	},
	
	initRobot: function() {
		st.log("st.char.initRobot");
		var endurance = st.math.die(2, 6, 0);
		st.char.setEndurance(endurance);		
	},
	
	setSpecies: function(species) {
		st.log("st.char.setSpecies");
		this.species = species;
		switch (species) {
			case "robot":
				st.char.initRobot();
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
		st.char.setStat("endurance", endurance);
		st.char.incrCost(500*endurance);
	},
	
	getStat: function(stat) {
		return this.stats[stat];
	},
	
	incrCost: function(incr) {
		st.log("incrCost");
		st.log("incr[" + incr + "]");
		var oldCost = st.char.getStat("cost");
		st.log("oldCost[" + oldCost + "]");
		var newCost = oldCost + incr;
		st.log("newCost[" + newCost + "]");
		st.char.setStat("cost", newCost);
	}
};
