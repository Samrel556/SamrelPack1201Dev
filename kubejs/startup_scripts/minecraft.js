// Ports Minecraft Materials to Gregtech

GTCEuStartupEvents.registry('gtceu:material', (event) => {
    event.create('netherite')
	.ingot()
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
    event.create('raw_netherite')
	.dust()
	.components('1x tungsten', '2x platinum', '4x chlorine')
	.color(0x6d696d).iconSet(GTMaterialIconSet.DULL)
	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('unrefined_netherite')
	.dust()
	.components('1x tungsten', '2x platinum')
	.color(0x5d595d).iconSet(GTMaterialIconSet.DULL)
	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('netherite_scrap')
	.dust()
	.ore()
	.components('1x tungsten', '2x platinum', '1x sulfur')
	.color(0x4d4927).iconSet(GTMaterialIconSet.DULL)
	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
