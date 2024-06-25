// Ports Minecraft Materials to Gregtech

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    event.create('netherite')
	.dust()
	.components('4x gold', '1x tungsten', '2x platinum')
	.color(0x4d494d).iconSet(GTMaterialIconSet.METALLIC)
	.blastTemp(7000, null, GTValues.VA[GTValues.IV], 1500)
        .flags(
	    GTMaterialFlags.DISABLE_DECOMPOSITION,
	    GTMaterialFlags.GENERATE_FRAME,
	    GTMaterialFlags.GENERATE_PLATE,
	    GTMaterialFlags.GENERATE_ROD,
	    GTMaterialFlags.GENERATE_ROTOR,
	    GTMaterialFlags.GENERATE_SMALL_GEAR,
	    GTMaterialFlags.GENERATE_DENSE
	)
})
