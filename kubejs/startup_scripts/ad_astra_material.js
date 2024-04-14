// Ports Ad Astra Materials to Gregtech

GTCEuStartupEvents.registry('gtceu:material', event => { 
    event.create('ostrum')
	.ingot()
	.components('2x titanium', '1x aluminium')
	.color(0xA86C73).iconSet(GTMaterialIconSet.METALLIC)
	.blastTemp(4500, null, GTValues.VA[GTValues.EV], 1000)
	.ore()
	.flags(
	    GTMaterialFlags.DISABLE_DECOMPOSITION,
	    GTMaterialFlags.GENERATE_FRAME,
	    GTMaterialFlags.GENERATE_PLATE,
	    GTMaterialFlags.GENERATE_ROD,
	    GTMaterialFlags.GENERATE_ROTOR,
	    GTMaterialFlags.GENERATE_SMALL_GEAR,
	    GTMaterialFlags.GENERATE_DENSE
	)
    event.create('etrium')
	.ingot()
	.components('3x lithium', '1x electrotine', '1x platinum')
	.color(0x7cffda).iconSet(GTMaterialIconSet.SHINY)
	.ore()
	.flags(
	    GTMaterialFlags.GENERATE_FINE_WIRE,
	    GTMaterialFlags.GENERATE_FOIL
	)
    event.create('desh')
	.ingot()
	.components('1x nickel_zinc_ferrite', '1x kanthal')
	.color(0xd68d4d).iconSet(GTMaterialIconSet.METALLIC)
	.blastTemp(1800, null, GTValues.VA[GTValues.HV], 900)
	.ore()
	.flags(
	    GTMaterialFlags.DISABLE_DECOMPOSITION,
	    GTMaterialFlags.GENERATE_FRAME,
	    GTMaterialFlags.GENERATE_PLATE,
	    GTMaterialFlags.GENERATE_ROD,
	    GTMaterialFlags.GENERATE_ROTOR,
	    GTMaterialFlags.GENERATE_SMALL_GEAR,
	    GTMaterialFlags.GENERATE_DENSE
	)
    event.create('calorite')
	.ingot()
	.components('1x titanium_tungsten_carbide', '1x ruridit')
	.color(0xcb4e4f).iconSet(GTMaterialIconSet.METALLIC)
	.blastTemp(7000, null, GTValues.VA[GTValues.IV], 1500)
	.ore()
	.flags(
	    GTMaterialFlags.DISABLE_DECOMPOSITION,
	    GTMaterialFlags.GENERATE_FRAME,
	    GTMaterialFlags.GENERATE_PLATE,
	    GTMaterialFlags.GENERATE_ROD,
	    GTMaterialFlags.GENERATE_ROTOR,
	    GTMaterialFlags.GENERATE_SMALL_GEAR,
	    GTMaterialFlags.GENERATE_DENSE
	)
    event.create('ice_shard')
	.gem()
	.components('2x hydrogen', '1x oxygen')
	.color(0x6691c8).iconSet(GTMaterialIconSet.RUBY)
	.ore()
})

// Creating custom Items for Ad Astra
StartupEvents.registry('item', event => {
    event.create('aluminium_tank').texture('samrelpack:item/ad_astra/aluminium_tank').displayName('Aluminium Tank')
})
