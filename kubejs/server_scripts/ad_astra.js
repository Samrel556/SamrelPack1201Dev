// Ad Astra Changes

// Adds Ad Astra materials to Gregtech

// Gregification
ServerEvents.tags('fluid', event => {
    // Adding Gregtech Rocket fuel to Ad Astra Fuel Tag
    event.add('ad_astra:fuel', 'gtceu:rocket_fuel')
})

ServerEvents.tags('item', event => {
    // Removes Ad Astra's steel ingot from the Steel Ingot Tag
    event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
    // Fixing Etrium
    event.add('forge:ingots/etrium', 'ad_astra:etrium_ingot')
    event.add('forge:nuggets/etrium', 'ad_astra:etrium_nugget')
    event.add('forge:plates/etrium', 'ad_astra:etrium_plate')
    event.add('forge:rods/etrium', 'ad_astra:etrium_rod')
    event.add('forge:storage_blocks/etrium', 'ad_astra:etrium_block')
})

ServerEvents.recipes(event => {
    // Replace all Ad Astra specific materials with general materials
    let replace = (input, replacement) =>{ 
	event.replaceInput(
	    {mod: 'ad_astra'},
	    input,
	    replacement
        )
    }
    replace('ad_astra:iron_rod', '#forge:rods/iron')
    replace('ad_astra:steel_rod', '#forge:rods/steel')
    replace('ad_astra:desh_ingot', '#forge:ingots/desh')
    replace('ad_astra:desh_plate', '#forge:plates/desh')
    replace('ad_astra:ostrum_ingot', '#forge:ingots/ostrum')
    replace('ad_astra:ostrum_plate', '#forge:plates/ostrum')
    replace('ad_astra:calorite_inot', '#forge:ingots/calorite')
    replace('ad_astra:calorite_plate', '#forge:plates/calorite')

    // Creating Gregtech recipes
    event.recipes.gtceu.assembler('rocket_tier_1')
	.itemInputs(
	    '54x gtceu:double_aluminium_plate',
	    '9x kubejs:aluminium_tank',
	    '4x ad_astra:rocket_fin',
	    '3x ad_astra:steel_engine',
	    '1x ad_astra:rocket_nose_cone')
	.itemOutputs('ad_astra:tier_1_rocket')
	.duration(1200).EUt(480)
    event.recipes.gtceu.assembler('rocket_tier_2')
	.itemInputs(
	    '54x gtceu:double_desh_plate',
	    '9x ad_astra:desh_tank',
	    '4x ad_astra:rocket_fin',
	    '3x ad_astra:desh_engine',
	    '1x ad_astra:rocket_nose_cone')
	.itemOutputs('ad_astra:tier_2_rocket')
	.duration(1200).EUt(1920)
    event.recipes.gtceu.assembler('rocket_tier_3')
	.itemInputs(
	    '54x gtceu:double_ostrum_plate',
	    '9x ad_astra:ostrum_tank',
	    '4x ad_astra:rocket_fin',
	    '3x ad_astra:ostrum_engine',
	    '1x ad_astra:rocket_nose_cone')
	.itemOutputs('ad_astra:tier_3_rocket')
	.duration(1200).EUt(7680)
    event.recipes.gtceu.assembler('rocket_tier_4')
	.itemInputs(
	    '54x gtceu:double_calorite_plate',
	    '9x ad_astra:calorite_tank',
	    '4x ad_astra:rocket_fin',
	    '3x ad_astra:calorite_engine',
	    '1x ad_astra:rocket_nose_cone')
	.itemOutputs('ad_astra:tier_4_rocket')
	.duration(1200).EUt(30720)
    event.recipes.gtceu.assembler('rover_tier_1')
	.itemInputs(
	    '4x ad_astra:wheel',
	    '9x #forge:plates/desh',
	    '1x ad_astra:desh_engine',
	    '1x ad_astra:radio',
	    '1x ad_astra:large_gas_tank',
	    '10x #forge:rods/steel',
	    '4x gtceu:small_aluminium_spring')
	.itemOutputs('ad_astra:tier_1_rover')
	.duration(1200).EUt(1920)
    event.recipes.gtceu.assembler('launch_pad')
	.itemInputs(
	    '9x #forge:plates/steel',
	    '18x #forge:rods/steel',
	    '9x #forge:concrete')
	.itemOutputs('ad_astra:launch_pad')
	.duration(600).EUt(480)
    event.shaped('ad_astra:oxygen_loader',[
	'CPS',
	'RHC',
	'WGW'
    ],{
	C: '#gtceu:circuits/mv',
	P: 'gtceu:mv_electric_pump',
	S: '#forge:plates/steel',
	R: '#forge:rotors/bronze',
	H: 'gtceu:mv_machine_hull',
	W: 'gtceu:copper_single_cable',
	G: '#forge:glass'
	})
    event.shaped('ad_astra:oxygen_distributor',[
	'RCR',
	'MHM',
	'SCS'
    ],{
	R: '#forge:rotors/bronze',
	C: '#gtceu:circuits/mv',
	M: 'gtceu:mv_electric_motor',
	H: 'gtceu:mv_machine_hull',
	S: '#forge:plates/desh'
    })
    event.shaped('ad_astra:gravity_normalizer',[
	'BGB',
	'CHC',
	'SCS'
    ],{
	B: 'ad_astra:etrionic_capacitor',
	G: 'gtceu:gravi_star',
	C: '#gtceu:circuits/iv',
	H: 'gtceu:iv_machine_hull',
	S: '#forge:plates/etrium'
    })
    event.shaped('ad_astra:oxygen_sensor',[
	'E R',
	'CHF',
	'SSS'
    ],{
	E: 'gtceu:lv_emitter',
	R: 'gtceu:lv_sensor',
	C: '#gtceu:circuits/lv',
	H: 'gtceu:lv_machine_hull',
	F: '#forge:rotors/tin',
	S: '#forge:plates/steel'
    })
    event.recipes.gtceu.assembler('ad_astra:radio')
	.itemInputs(
	    '1x #gtceu:circuits/lv',
	    '1x gtceu:lv_sensor',
	    '1x gtceu:computer_monitor_cover',
	    '4x #forge:fine_wires/copper',
	    '6x #forge:plates/steel'
	)
	.itemOutputs('ad_astra:radio')
	.duration(20).EUt(30)
})

