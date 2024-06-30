// Functional Storage Changes

//Gregification
ServerEvents.recipes(event => {
    let modName = 'functionalstorage:'
    let woods = [
	'oak',
	'spruce',
	'birch',
	'jungle',
	'acacia',
	'dark_oak',
	'crimson',
	'warped',
	'mangrove',
	'cherry'
    ]
    event.remove({mod:'functionalstorage'})
    for (let i in woods){
	// 1x1
	event.shaped(modName+woods[i]+'_1', [
	    'PPP',
	    'SCM',
	    'PPP'
	], {
	    P: 'minecraft:'+woods[i]+'_planks',
	    S: '#forge:tools/saws',
	    C: '#forge:chests/wooden',
	    M: '#forge:tools/mallets'
	})
	event.recipes.gtceu.assembler(modName+woods[i]+'_1')
	    .itemInputs(
		'6x minecraft:'+woods[i]+'_planks',
		'#forge:chests/wooden'
	    )
	    .itemOutputs(modName+woods[i]+'_1')
	    .circuit(10)
	    .EUt(4).duration(100)
	// 2x1
	event.shaped(modName+woods[i]+'_2', [
	    'PCP',
	    'MPS',
	    'PCP'
	], {
	    P: 'minecraft:'+woods[i]+'_planks',
	    S: '#forge:tools/saws',
	    C: '#forge:chests/wooden',
	    M: '#forge:tools/mallets'
	})
	event.recipes.gtceu.assembler(modName+woods[i]+'_2')
	    .itemInputs(
		'5x minecraft:'+woods[i]+'_planks',
		'2x #forge:chests/wooden'
	    )
	    .itemOutputs(modName+woods[i]+'_2')
	    .circuit(11)
	    .EUt(4).duration(100)
	// 2x2
	event.shaped(modName+woods[i]+'_4', [
	    'CPC',
	    'MPS',
	    'CPC'
	], {
	    P: 'minecraft:'+woods[i]+'_planks',
	    S: '#forge:tools/saws',
	    C: '#forge:chests/wooden',
	    M: '#forge:tools/mallets'
	})
	event.recipes.gtceu.assembler(modName+woods[i]+'_4')
	    .itemInputs(
		'3x minecraft:'+woods[i]+'_planks',
		'4x #forge:chests/wooden'
	    )
	    .itemOutputs(modName+woods[i]+'_4')
	    .circuit(12)
	    .EUt(4).duration(100)
    }
    event.shaped(modName+'fluid_1', [
	'PPP',
	'SBM',
	'PPP'
    ], {
	P: '#minecraft:planks',
	S: '#forge:tools/saws',
	B: 'minecraft:bucket',
	M: '#forge:tools/mallets'
    })
    event.shaped(modName+'fluid_2', [
	'PBP',
	'SPM',
	'PBP'
    ], {
	P: '#minecraft:planks',
	S: '#forge:tools/saws',
	B: 'minecraft:bucket',
	M: '#forge:tools/mallets'
    })
    event.shaped(modName+'fluid_4', [
	'BPB',
	'SPM',
	'BPB'
    ], {
	P: '#minecraft:planks',
	S: '#forge:tools/saws',
	B: 'minecraft:bucket',
	M: '#forge:tools/mallets'
    })
    event.shaped(modName+'storage_controller', [
	'PCP',
	'WDW',
	'PCP'
    ], {
	P: '#forge:plates/steel',
	C: '#gtceu:circuits/lv',
	D: '#functionalstorage:drawer',
	W: 'gtceu:red_alloy_single_cable'
    })
    event.shaped(modName+'controller_extension', [
	'PWP',
	'CDC',
	'PWP'
    ], {
	P: '#forge:plates/steel',
	C: '#gtceu:circuits/lv',
	D: '#functionalstorage:drawer',
	W: 'gtceu:red_alloy_single_cable'
    })
    event.shaped(modName+'linking_tool', [
	'IIG',
	'ISG',
	'PDP'
    ], {
	I: '#forge:plates/iron',
	G: '#forge:plates/gold',
	S: 'gtceu:data_stick',
	P: '#forge:plates/diamond',
	D: '#functionalstorage:drawer'
    })
    event.shaped(modName+'configuration_tool', [
	'IIG',
	'ISG',
	'PDP'
    ], {
	I: '#forge:plates/iron',
	G: '#forge:plates/gold',
	S: 'gtceu:data_stick',
	P: '#forge:plates/emerald',
	D: '#functionalstorage:drawer'
    })
    event.shaped(modName+'copper_upgrade', [
	'PRP',
	'RDR',
	'PRP'
    ], {
	P: '#forge:plates/copper',
	R: '#forge:rods/copper',
	D: '#functionalstorage:drawer'
    })
    event.shaped(modName+'gold_upgrade', [
	'PRP',
	'RDR',
	'PRP'
    ], {
	P: '#forge:plates/gold',
	R: '#forge:rods/gold',
	D: '#functionalstorage:drawer'
    })
    event.shaped(modName+'diamond_upgrade', [
	'PRP',
	'RDR',
	'PRP'
    ], {
	P: '#forge:plates/diamond',
	R: '#forge:rods/diamond',
	D: '#functionalstorage:drawer'
    })
    event.shaped(modName+'netherite_upgrade', [
	'PRP',
	'RDR',
	'PRP'
    ], {
	P: '#forge:plates/netherite',
	R: '#forge:rods/netherite',
	D: '#functionalstorage:drawer'
    })
    event.shaped(modName+'iron_downgrade', [
	'PRP',
	'RDR',
	'PRP'
    ], {
	P: '#forge:plates/iron',
	R: '#forge:rods/iron',
	D: '#functionalstorage:drawer'
    })
    event.shaped(modName+'collector_upgrade', [
	'PRP',
	'WDW',
	'PRP'
    ], {
	P: '#forge:plates/iron',
	R: 'gtceu:lv_robot_arm',
	W: 'gtceu:red_alloy_single_cable',
	D: '#functionalstorage:drawer'
    })
    event.shaped(modName+'puller_upgrade', [
	'PCP',
	'WDW',
	'PRP'
    ], {
	P: '#forge:plates/iron',
	R: 'gtceu:lv_robot_arm',
	W: 'gtceu:red_alloy_single_cable',
	D: '#functionalstorage:drawer',
	C: 'gtceu:lv_conveyor_module'
    })
    event.shaped(modName+'pusher_upgrade', [
	'PRP',
	'WDW',
	'PCP'
    ], {
	P: '#forge:plates/iron',
	R: 'gtceu:lv_robot_arm',
	W: 'gtceu:red_alloy_single_cable',
	D: '#functionalstorage:drawer',
	C: 'gtceu:lv_conveyor_module'
    })
    event.shaped(modName+'void_upgrade', [
	'PVP',
	'WDW',
	'PVP'
    ], {
	P: '#forge:plates/obsidian',
	W: 'gtceu:red_alloy_single_cable',
	D: '#functionalstorage:drawer',
	V: 'gtceu:item_voiding_cover'
    })
    event.shaped(modName+'redstone_upgrade', [
	'PRP',
	'WDW',
	'PRP'
    ], {
	P: '#forge:plates/iron',
	R: 'morered:red_alloy_wire',
	W: 'gtceu:item_detector_cover',
	D: '#functionalstorage:drawer'
    })
    event.shaped(modName+'armory_cabinet', [
	'PPP',
        'MCS',
	'PPP'
    ], {
        P: '#forge:plates/stone',
        S: '#forge:tools/files',
        C: '#forge:chests/wooden',
        M: '#forge:tools/hammers'
    })
    event.recipes.gtceu.assembler(modName+'armory_cabinet')
        .itemInputs(
	    '6x #forge:plates/stone',
	    '#forge:chests/wooden'
	)
	.itemOutputs(modName+'armory_cabinet')
	.EUt(4).duration(100)
    event.shaped(modName+'ender_drawer', [
        'PPP',
        'MCS',
        'PPP'
    ], {
        P: '#minecraft:planks',
        S: '#forge:tools/saws',
        C: '#forge:chests/ender',
        M: '#forge:tools/mallets'
    })
    event.recipes.gtceu.assembler(modName+'ender_drawer')
        .itemInputs(
	    '6x #minecraft:planks',
	    '#forge:chests/ender'
	)
	.itemOutputs(modName+'ender_drawer')
	.circuit(13)
	.EUt(4).duration(100)
})
