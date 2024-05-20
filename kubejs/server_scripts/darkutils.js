// Dark Utilities Changes

// Gregification

ServerEvents.recipes(event => {
    let modName = 'darkutils:'
    let plate = modName+'blank_plate'

    event.remove({output: modName+'charm_portal'})
    event.shaped(modName+'charm_portal',[
	'SSS',
	'OFO',
	'COC'
    ],{
	S: '#forge:string',
	O: 'minecraft:crying_obsidian',
	F: 'gtceu:mv_field_generator',
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+'charm_sleep'})
    event.shaped(modName+'charm_sleep',[
	'SSS',
	'WFW',
	'CBC'
    ],{
	S: '#forge:string',
	B: '#minecraft:beds',
	F: 'gtceu:mv_field_generator',
	C: '#gtceu:circuits/mv',
	W: '#minecraft:wool'
    })

    event.remove({output: modName+'charm_warding'})
    event.shaped(modName+'charm_warding',[
	'SSS',
	'PFP',
	'COC'
    ],{
	S: '#forge:string',
	P: '#forge:plates/gold',
	F: 'gtceu:mv_field_generator',
	C: '#gtceu:circuits/mv',
	O: 'minecraft:phantom_membrane'
    })

    event.remove({output: plate})
    event.recipes.gtceu.cutter(modName+'blank_plate')
	.itemInputs('1x #darkutils:dark_stones')
	.inputFluids(Fluid.of('minecraft:water', 40))
	.itemOutputs('9x '+plate)
	.duration(40).EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.cutter(modName+'blank_plate_distilled')
	.itemInputs('1x #darkutils:dark_stones')
	.inputFluids(Fluid.of('gtceu:distilled_water', 30))
	.itemOutputs('9x '+plate)
	.duration(40).EUt(GTValues.VA[GTValues.LV])
    event.recipes.gtceu.cutter(modName+'blank_plate_lubricant')
	.itemInputs('1x #darkutils:dark_stones')
	.inputFluids(Fluid.of('gtceu:lubricant', 10))
	.itemOutputs('9x '+plate)
	.duration(40).EUt(GTValues.VA[GTValues.LV])

    let plates = [
	{
	    name: 'vector_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_conveyor_module',
		'1x gtceu:copper_single_cable'
	    ],
	    output: '3x '
	},
	{
	    name: 'vector_plate_fast',
	    inputs: [
		'3x '+modName+'vector_plate',
		'1x gtceu:hv_conveyor_module',
		'1x gtceu:gold_single_cable'
	    ],
	    output: '3x '
	},
	{
	    name: 'vector_plate_extreme',
	    inputs: [
		'3x '+modName+'vector_plate_fast',
		'1x gtceu:ev_conveyor_module',
		'1x gtceu:aluminium_single_cable'
	    ],
	    output: '3x '
	},
	{
	    name: 'vector_plate_ultra',
	    inputs: [
		'3x '+modName+'vector_plate_extreme',
		'1x gtceu:iv_conveyor_module',
		'1x gtceu:tungsten_single_cable'
	    ],
	    output: '3x '
	},
	{
	    name: 'damage_plate',
	    inputs: [
		'3x '+plate,
		'1x minecraft:golden_sword',
		'2x minecraft:crimson_fungus',
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv'
	    ],
	    output: '3x '
	},
	{
	    name: 'damage_plate_maim',
	    inputs: [
		'3x '+plate,
		'2x minecraft:shroomlight',
		'1x minecraft:iron_sword',
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv'
	    ],
	    output: '3x '
	},
	{
	    name: 'damage_plate_player',
	    inputs: [
		'3x '+modName+'damage_plate',
		'1x minecraft:player_head',
		'1x minecraft:diamond_sword',
		'2x minecraft:warped_fungus',
		'1x gtceu:hv_field_generator',
		'3x #gtceu:circuits/hv'
	    ],
	    output: '3x '
	},
	{
	    name: 'flame_plate',
	    inputs: [
		'3x '+plate,
		'2x #forge:dusts/blaze',
		'1x minecraft:flint_and_steel',
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv'
	    ],
	    output: '3x '
	},
	{
	    name: 'slowness_plate',
	    inputs: [
		'3x '+plate,
		'2x minecraft:soul_sand',
		'1x minecraft:snow_block',
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv'
	    ],
	    output: '3x '
	},
	{
	    name: 'fatigue_plate',
	    inputs: [
		'3x '+plate,
		'2x minecraft:prismarine_shard',
		'1x minecraft:prismarine_crystals',
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv'
	    ],
	    output: '3x '
	},
	{
	    name: 'darkness_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:ink_sac',
		'1x minecraft:phantom_membrane'
	    ],
	    output: '3x '
	},
	{
	    name: 'hunger_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:rotten_flesh',
		'1x minecraft:nether_wart'
	    ],
	    output: '3x '
	},
	{
	    name: 'weakness_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:brown_mushroom',
		'1x minecraft:fermented_spider_eye'
	    ],
	    output: '3x '
	},
	{
	    name: 'poison_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:poisonous_potato',
		'1x minecraft:spider_eye'
	    ],
	    output: '3x '
	},
	{
	    name: 'wither_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:flint',
		'1x minecraft:wither_rose'
	    ],
	    output: '3x '
	},
	{
	    name: 'alert_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x #forge:dusts/glowstone',
		'1x minecraft:glow_ink_sac'
	    ],
	    output: '3x '
	},
	{
	    name: 'levitation_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:feather',
		'1x minecraft:popped_chorus_fruit'
	    ],
	    output: '3x '
	},
	{
	    name: 'misfortune_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:phantom_membrane',
		'1x #forge:plates/gold'
	    ],
	    output: '3x '
	},
	{
	    name: 'slowfall_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:feather',
		'1x minecraft:phantom_membrane'
	    ],
	    output: '3x '
	},
	{
	    name: 'omen_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:nether_wart',
		'1x minecraft:totem_of_undying'
	    ],
	    output: '3x '
	},
	{
	    name: 'frost_plate',
	    inputs: [
		'3x '+plate,
		'1x gtceu:mv_field_generator',
		'3x #gtceu:circuits/mv',
		'2x minecraft:snowball',
		'1x minecraft:powder_snow_bucket'
	    ],
	    output: '3x '
	}
    ]

    let assembling = (data) => {
	event.recipes.gtceu.assembler(modName+data.name)
	    .itemInputs(data.inputs)
	    .itemOutputs(data.output+modName+data.name)
	    .duration(20).EUt(GTValues.VA[GTValues.LV])
    }

    for (let i in plates) {
	event.remove({output: modName+plates[i].name})
	assembling(plates[i])
    }

    let filters = [
	{
	    name: 'filter_player',
	    identifier: 'minecraft:player_head'
	},
	{
	    name: 'filter_undead',
	    identifier: 'minecraft:bone'
	},
	{
	    name: 'filter_arthropod',
	    identifier: 'minecraft:spider_eye'
	},
	{
	    name: 'filter_illager',
	    identifier: 'minecraft:crossbow'
	},
	{
	    name: 'filter_raider',
	    identifier: 'minecraft:bell'
	},
	{
	    name: 'filter_hostile',
	    identifier: 'minecraft:rotten_flesh'
	},
	{
	    name: 'filter_animal',
	    identifier: 'minecraft:hay_block'
	},
	{
	    name: 'filter_child',
	    identifier: '#forge:eggs'
	},
	{
	    name: 'filter_pet',
	    identifier: 'minecraft:milk_bucket'
	},
	{
	    name: 'filter_slime',
	    identifier: '#forge:slimeballs'
	},
	{
	    name: 'filter_villager',
	    identifier: '#forge:plates/emerald'
	},
	{
	    name: 'filter_fire_immune',
	    identifier: '#forge:dusts/blaze'
	},
	{
	    name: 'filter_golem',
	    identifier: 'minecraft:carved_pumpkin'
	},
	{
	    name: 'filter_water',
	    identifier: 'minecraft:water_bucket'
	},
	{
	    name: 'filter_named',
	    identifier: 'minecraft:name_tag'
	},
	{
	    name: 'filter_freeze_immune',
	    identifier: 'minecraft:powder_snow_bucket'
	},
	{
	    name: 'filter_equipment',
	    identifier: 'minecraft:golden_chestplate'
	},
	{
	    name: 'filter_passenger',
	    identifier: 'minecraft:minecraft'
	}
    ]

    let filterReplace = (data) => {
	event.shaped(modName+data.name,[
	    'PIP',
	    'GFG',
	    'PCP'
	],{
	    P: '#forge:plates/stone',
	    I: data.identifier,
	    G: 'gtceu:hv_field_generator',
	    F: 'gtceu:bronze_frame',
	    C: '#gtceu:circuits/hv'
	})
    }

    for (let i in filters) {
	event.remove({output: modName+filters[i].name})
	filterReplace(filters[i])
    }

    event.remove({output: modName+'redstone_randomizer'})
    event.shaped(modName+'redstone_randomizer',[
	'PPP',
	'WCW',
	'PPP'
    ],{
	P: plate,
	W: 'morered:red_alloy_wire',
	C: '#gtceu:circuits/ulv'
    })

    event.remove({output: modName+'shielded_redstone'})
    event.shaped(modName+'shielded_redstone',[
	'PPP',
	'PGR',
	'PPP'
    ],{
	P: plate,
	G: '#forge:glass',
	R: '#forge:storage_blocks/redstone'
    })
})
