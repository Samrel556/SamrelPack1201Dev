// Porting Cognition materials to Gregtech

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('cognitive_alloy')
	.ingot()
	.components('1x lapis', '1x nether_quartz', '1x copper')
	.color(0x454e5e).iconSet(GTMaterialIconSet.SHINY)
	.flags(
	    GTMaterialFlags.GENERATE_PLATE,
	    GTMaterialFlags.GENERATE_ROD
	)
})
