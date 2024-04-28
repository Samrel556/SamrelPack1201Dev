// Ad Astra Changes
let modName = 'ad_astra'

// Fully removing Ad Astra things

let begone = (modName, itemName) => {
    ServerEvents.recipes(event => {
	event.remove({output: itemName, mod: modName})
    })
    ServerEvents.tags('item', event => {
	event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

let dontWant = [
    'steel_cable',
    'desh_cable',
    'desh_fluid_pipe',
    'ostrum_fluid_pipe',
    'cable_duct',
    'fluid_pipe_duct',
    'coal_generator',
    'compressor',
    'etrionic_blast_furnace',
    'nasa_workbench',
    'fuel_refinery',
    'solar_panel',
    'water_pump',
    'energizer',
    'cryo_freezer',
    'wrench',
    'etrionic_core',
    'etrium_block',
    'engine_frame',
    'fan',
    'steel_tank',
    'ice_shard',
    'steel_block',
    'desh_block',
    'ostrum_block',
    'calorite_block'
]

let dontWantMats = [
    '(.*)_plate/',
    '(.*)_rod/',
    '(.*)_ingot/',
    '(.*)_nugget/',
    'raw_(.*)/',
    'photovoltaic_(.*)/',
    '(.*)_bucket/'
]

for (let x in dontWant) {
    let itemName = modName + ':' + dontWant[x]
    begone(modName, itemName)
}

for (let x in dontWantMats) {
    let itemName = '/' + modName + ':' + dontWantMats[x]
    begone(modName, itemName)
}

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
    let LV = GTValues.VA[GTValues.LV]
    let MV = GTValues.VA[GTValues.MV]
    let HV = GTValues.VA[GTValues.HV]
    let EV = GTValues.VA[GTValues.EV]
    let IV = GTValues.VA[GTValues.IV]
    let LUV = GTValues.VA[GTValues.LuV]
    let ZPM = GTValues.VA[GTValues.ZPM]
    let UV = GTValues.VA[GTValues.UV]

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
    event.remove({output:'ad_astra:tier_1_rocket'})
    event.recipes.gtceu.assembler('rocket_tier_1')
	.itemInputs(
	    '54x gtceu:double_aluminium_plate',
	    '9x kubejs:aluminium_tank',
	    '4x ad_astra:rocket_fin',
	    '3x ad_astra:steel_engine',
	    '1x ad_astra:rocket_nose_cone')
	.itemOutputs('ad_astra:tier_1_rocket')
	.duration(1200).EUt(HV)
    event.remove({output:'ad_astra:tier_2_rocket'})
    event.recipes.gtceu.assembler('rocket_tier_2')
	.itemInputs(
	    '54x gtceu:double_desh_plate',
	    '9x ad_astra:desh_tank',
	    '4x ad_astra:rocket_fin',
	    '3x ad_astra:desh_engine',
	    '1x ad_astra:rocket_nose_cone')
	.itemOutputs('ad_astra:tier_2_rocket')
	.duration(1200).EUt(EV)
    event.remove({output:'ad_astra:tier_3_rocket'})
    event.recipes.gtceu.assembler('rocket_tier_3')
	.itemInputs(
	    '54x gtceu:double_ostrum_plate',
	    '9x ad_astra:ostrum_tank',
	    '4x ad_astra:rocket_fin',
	    '3x ad_astra:ostrum_engine',
	    '1x ad_astra:rocket_nose_cone')
	.itemOutputs('ad_astra:tier_3_rocket')
	.duration(1200).EUt(IV)
    event.remove({output:'ad_astra:tier_4_rocket'})
    event.recipes.gtceu.assembler('rocket_tier_4')
	.itemInputs(
	    '54x gtceu:double_calorite_plate',
	    '9x ad_astra:calorite_tank',
	    '4x ad_astra:rocket_fin',
	    '3x ad_astra:calorite_engine',
	    '1x ad_astra:rocket_nose_cone')
	.itemOutputs('ad_astra:tier_4_rocket')
	.duration(1200).EUt(LUV)
    event.remove({output:'ad_astra:tier_1_rover'})
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
	.duration(1200).EUt(EV)
    event.remove({output:'ad_astra:launch_pad'})
    event.recipes.gtceu.assembler('ad_astra:launch_pad')
	.itemInputs(
	    '9x #forge:plates/steel',
	    '18x #forge:rods/steel',
	    '9x #forge:concrete')
	.itemOutputs('ad_astra:launch_pad')
	.duration(600).EUt(HV)
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
    event.remove({output:'ad_astra:gravity_normalizer'})
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
    event.remove({output:'ad_astra:radio'})
    event.recipes.gtceu.assembler('ad_astra:radio')
	.itemInputs(
	    '1x #gtceu:circuits/lv',
	    '1x gtceu:lv_sensor',
	    '1x gtceu:computer_monitor_cover',
	    '4x #forge:fine_wires/copper',
	    '6x #forge:plates/steel')
	.itemOutputs('ad_astra:radio')
	.duration(20).EUt(LV)
    event.remove({id:'ad_astra:space_helmet'})
    event.recipes.gtceu.assembler('ad_astra:space_helmet')
	.itemInputs(
	    '1x gtceu:tempered_glass',
	    '5x #forge:plates/steel',
	    '10x #forge:foils/polytetrafluoroethylene',
	    '1x #minecraft:wool')
	.itemOutputs('ad_astra:space_helmet')
	.duration(40).EUt(HV)
    event.remove({id:'ad_astra:space_suit'})
    event.recipes.gtceu.assembler('ad_astra:space_suit')
	.itemInputs(
	    '8x #forge:plates/steel',
	    '16x #forge:foils/polytetrafluoroethylene',
	    '2x #minecraft:wool',
	    '2x ad_astra:gas_tank',
	    '1x ad_astra:oxygen_gear')
	.itemOutputs('ad_astra:space_suit')
	.duration(40).EUt(HV)
    event.remove({id:'ad_astra:space_pants'})
    event.recipes.gtceu.assembler('ad_astra:space_pants')
	.itemInputs(
	    '7x #forge:plates/steel',
	    '14x #forge:foils/polytetrafluoroethylene',
	    '2x #minecraft:wool')
	.itemOutputs('ad_astra:space_pants')
	.duration(40).EUt(HV)
    event.remove({id:'ad_astra:space_boots'})
    event.recipes.gtceu.assembler('ad_astra:space_boots')
	.itemInputs(
	    '4x #forge:plates/steel',
	    '8x #forge:foils/polytetrafluoroethylene',
	    '2x #minecraft:wool',
	    '2x #forge:plates/rubber')
	.itemOutputs('ad_astra:space_boots')
	.duration(40).EUt(HV)
    event.remove({id:'ad_astra:netherite_space_helmet'})
    event.recipes.gtceu.assembler('ad_astra:ostrum_space_helmet')
	.itemInputs(
	    '1x gtceu:laminated_glass',
	    '3x #forge:plates/ostrum',
	    '2x #forge:plates/desh',
	    '10x #forge:foils/polybenzimidazole',
	    '1x #minecraft:wool')
	.itemOutputs('ad_astra:netherite_space_helmet')
	.duration(160).EUt(IV)
    event.remove({id:'ad_astra:netherite_space_suit'})
    event.recipes.gtceu.assembler('ad_astra:ostrum_space_suit')
	.itemInputs(
	    '4x #forge:plates/ostrum',
	    '4x #forge:plates/desh',
	    '16x #forge:foils/polybenzimidazole',
	    '2x #minecraft:wool',
	    '4x ad_astra:gas_tank',
	    '1x ad_astra:oxygen_gear')
	.itemOutputs('ad_astra:netherite_space_suit')
	.duration(160).EUt(IV)
    event.remove({id:'ad_astra:netherite_space_pants'})
    event.recipes.gtceu.assembler('ad_astra:ostrum_space_pants')
	.itemInputs(
	    '5x #forge:plates/ostrum',
	    '2x #forge:plates/desh',
	    '14x #forge:foils/polybenzimidazole',
	    '2x #minecraft:wool')
	.itemOutputs('ad_astra:netherite_space_pants')
	.duration(160).EUt(IV)
    event.remove({id:'ad_astra:netherite_space_boots'})
    event.recipes.gtceu.assembler('ad_astra:ostrum_space_boots')
	.itemInputs(
	    '2x #forge:plates/ostrum',
	    '2x #forge:plates/desh',
	    '4x #forge:foils/polybenzimidazole',
	    '2x #minecraft:wool',
	    '2x #forge:plates/rubber')
	.itemOutputs('ad_astra:netherite_space_boots')
	.duration(160).EUt(IV)
    event.remove({id:'ad_astra:jet_suit_helmet'})
    event.recipes.gtceu.assembler('ad_astra:jet_suit_helmet')
	.itemInputs(
	    '5x #forge:plates/calorite',
	    '1x minecraft:tinted_glass',
	    '10x #forge:foils/polybenzimidazole',
	    '1x #minecraft:wool')
	.itemOutputs('ad_astra:jet_suit_helmet')
	.duration(320).EUt(LUV)
    event.remove({id:'ad_astra:jet_suit'})
    event.recipes.gtceu.assembler('ad_astra:jet_suit')
	.itemInputs(
	    '8x #forge:plates/calorite',
	    '16x #forge:foils/polybenzimidazole',
	    '2x #minecraft:wool',
	    '8x ad_astra:gas_tank',
	    '1x ad_astra:oxygen_gear',
	    '4x ad_astra:etrionic_capacitor',
	    '2x gtceu:advanced_power_thruster')
	.itemOutputs('ad_astra:jet_suit')
	.duration(320).EUt(LUV)
    event.recipes.gtceu.assembler('ad_astra:jet_suit_pants')
	.itemInputs(
	    '7x #forge:plates/calorite',
	    '14x #forge:foils/polybenzimidazole',
	    '2x #minecraft:wool')
	.itemOutputs('ad_astra:jet_suit_pants')
	.duration(320).EUt(LUV)
    event.recipes.gtceu.assembler('ad_astra:jet_suit_boots')
	.itemInputs(
	    '4x #forge:plates/calorite',
	    '8x #forge:foils/polybenzimidazole',
	    '2x #minecraft:wool',
	    '2x #forge:plates/rubber')
	.itemOutputs('ad_astra:jet_suit_boots')
	.duration(320).EUt(LUV)
    event.remove({output:'ad_astra:ti_69'})
    event.shaped('ad_astra:ti_69',[
    	'MPS',
	'CDC',
	'PEP'
    ],{
	M: 'gtceu:lv_emitter',
	P: '#forge:plates/steel',
	S: 'gtceu:lv_sensor',
	C: '#gtceu:circuits/lv',
	D: 'gtceu:computer_monitor_cover',
	E: 'ad_astra:etrionic_capacitor'
    })
    event.remove({output:'ad_astra:zip_gun'})
    event.shaped('ad_astra:zip_gun',[
	'SST',
	'L  '
    ],{
    	S: 'gtceu:steel_small_fluid_pipe',
	T: 'gtceu:steel_tiny_fluid_pipe',
	L: 'ad_astra:large_gas_tank'
    })
    event.remove({id:'ad_astra:etrionic_capacitor'})
    event.recipes.gtceu.assembler('ad_astra:etrionic_capacitor')
	.itemInputs(
	    '2x #forge:plates/steel',
	    '1x gtceu:lapotron_dust',
	    '4x #forge:foils/etrium',
	    '8x #forge:fine_wires/etrium')
	.itemOutputs('ad_astra:etrionic_capacitor')
	.duration(600).EUt(EV)
    event.remove({output:'ad_astra:gas_tank'})
    event.shaped('ad_astra:gas_tank',[
	'PR',
	'SS',
	'SS'
    ],{
	P: 'gtceu:steel_tiny_fluid_pipe',
	R: 'gtceu:lv_fluid_regulator',
	S: '#forge:plates/steel'
    })
    event.remove({output:'ad_astra:large_gas_tank'})
    event.shaped('ad_astra:large_gas_tank',[
	'PR ',
	'SSS',
	'SSS'
    ],{
	P: 'gtceu:steel_small_fluid_pipe',
	R: 'gtceu:mv_fluid_regulator',
	S: '#forge:plates/steel'
    })
    event.remove({output:'ad_astra:oxygen_gear'})
    event.recipes.gtceu.assembler('ad_astra:oxygen_gear')
	.itemInputs(
	    '8x #forge:plates/steel',
	    '2x #forge:rotors/steel',
	    '2x gtceu:hv_electric_motor',
	    '2x gtceu:hv_fluid_regulator',
	    '4x gtceu:steel_small_fluid_pipe')
	.itemOutputs('ad_astra:oxygen_gear')
	.duration(40).EUt(HV)
    event.remove({output:'ad_astra:wheel'})
    event.shaped('ad_astra:wheel',[
	'RRR',
	'RPR',
	'RRR'
    ],{
	R: '#forge:plates/rubber',
	P: '#forge:plates/steel'
    })
    event.recipes.gtceu.assembler('ad_astra:steel_engine')
	.itemInputs(
	    '1x #forge:frames/steel',
	    '16x gtceu:stainless_steel_small_fluid_pipe',
	    '8x #forge:small_gears/steel',
	    '8x #forge:rotors/steel',
	    '2x gtceu:hv_electric_pump',
	    '5x #forge:plates/steel')
	.itemOutputs('ad_astra:steel_engine')
	.duration(600).EUt(HV)
     event.recipes.gtceu.assembler('ad_astra:desh_engine')
	.itemInputs(
	    '1x #forge:frames/desh',
	    '16x gtceu:titanium_small_fluid_pipe',
	    '8x #forge:small_gears/desh',
	    '8x #forge:rotors/desh',
	    '2x gtceu:ev_electric_pump',
	    '5x #forge:plates/desh')
	.itemOutputs('ad_astra:desh_engine')
	.duration(600).EUt(EV)
     event.recipes.gtceu.assembler('ad_astra:ostrum_engine')
	.itemInputs(
	    '1x #forge:frames/ostrum',
	    '16x gtceu:tungsten_steel_small_fluid_pipe',
	    '8x #forge:small_gears/ostrum',
	    '8x #forge:rotors/ostrum',
	    '2x gtceu:iv_electric_pump',
	    '5x #forge:plates/ostrum')
	.itemOutputs('ad_astra:ostrum_engine')
	.duration(600).EUt(IV)
      event.recipes.gtceu.assembler('ad_astra:calorite_engine')
	.itemInputs(
	    '1x #forge:frames/calorite',
	    '16x gtceu:niobium_titanium_small_fluid_pipe',
	    '8x #forge:small_gears/calorite',
	    '8x #forge:rotors/calorite',
	    '2x gtceu:luv_electric_pump',
	    '5x #forge:plates/calorite')
	.itemOutputs('ad_astra:calorite_engine')
	.duration(600).EUt(LUV)
    event.recipes.gtceu.assembler('ad_astra:aluminium_tank')
	.itemInputs(
	    '8x #forge:plates/aluminium',
	    '8x gtceu:carbon_fiber_plate',
	    '1x gtceu:stainless_steel_normal_fluid_pipe',
	    '1x gtceu:hv_fluid_regulator')
	.itemOutputs('kubejs:aluminium_tank')
	.duration(20).EUt(HV)
    event.recipes.gtceu.assembler('ad_astra:desh_tank')
	.itemInputs(
	    '8x #forge:plates/desh',
	    '8x gtceu:carbon_fiber_plate',
	    '1x gtceu:titanium_normal_fluid_pipe',
	    '1x gtceu:ev_fluid_regulator')
	.itemOutputs('ad_astra:desh_tank')
	.duration(20).EUt(EV)
    event.remove({output:'ad_astra:ostrum_tank'})
    event.recipes.gtceu.assembler('ad_astra:ostrum_tank')
	.itemInputs(
	    '8x #forge:plates/ostrum',
	    '8x gtceu:carbon_fiber_plate',
	    '1x gtceu:tungsten_steel_normal_fluid_pipe',
	    '1x gtceu:iv_fluid_regulator')
	.itemOutputs('ad_astra:ostrum_tank')
	.duration(20).EUt(IV)
    event.remove({output:'ad_astra:calorite_tank'})
    event.recipes.gtceu.assembler('ad_astra:calorite_tank')
	.itemInputs(
	    '8x #forge:plates/calorite',
	    '8x gtceu:carbon_fiber_plate',
	    '1x gtceu:niobium_titanium_normal_fluid_pipe',
	    '1x gtceu:luv_fluid_regulator')
	.itemOutputs('ad_astra:calorite_tank')
	.duration(20).EUt(EV)
    event.remove({output:'ad_astra:rocket_fin'})
    event.recipes.gtceu.forming_press('ad_astra:rocket_fin')
	.itemInputs(
	    '5x #forge:plates/steel',
	    '2x #forge:bolts/steel')
	.itemOutputs('ad_astra:rocket_fin')
	.duration(20).EUt(256)
    event.remove({output:'ad_astra:cryo_fuel'})
    event.recipes.gtceu.mixer('ad_astra:cryofuel')
	.itemInputs('1x gtceu:ice_shard_gem')
	.inputFluids(Fluid.of('gtceu:rocket_fuel', 20))
	.outputFluids(Fluid.of('ad_astra:cryo_fuel',20))
	.duration(60).EUt(IV)
    event.shaped('64x ad_astra:etrium_factory_block',[
	'PPP',
	'PIP',
	'PPP'
    ],{
	P: '#forge:plates/etrium',
	I: '#forge:ingots/etrium'
    })
    event.shaped('64x ad_astra:encased_etrium_block',[
	'III',
	'PPP',
	'III'
    ],{
	I: '#forge:ingots/etrium',
	P: '#forge:plates/etrium'
    })
    event.shaped('64x ad_astra:etrium_panel',[
	'PIP',
	'III',
	'PIP'
    ],{
	P: '#forge:plates/etrium',
	I: '#forge:ingots/etrium'
    })
})
