// Morered Changes

// Removing
ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', 'morered:red_alloy_ingot')
    event.remove('morered:network_cables', '#morered:bundled_network_cables')
})

// Gregification
ServerEvents.recipes(event => {
    let modName = 'morered:'

    event.remove({output:modName+'red_alloy_ingot'})
    event.replaceInput({mod:'morered'},
	modName+'red_alloy_ingot',
	'#forge:ingots/red_alloy')
    event.replaceInput({mod:'morered'},
	'minecraft:redstone',
	modName+'red_alloy_wire')
    event.replaceInput({mod:'morered'},
	'minecraft:iron_ingot',
	'#forge:plates/steel')
    event.remove({output:modName+'stone_plate'})
    event.recipes.gtceu.cutter(modName+'stone_plate_water')
	.itemInputs('minecraft:smooth_stone')
	.inputFluids('minecraft:water 15')
	.itemOutputs('9x '+modName+'stone_plate')
	.EUt(30).duration(320) 
    event.recipes.gtceu.cutter(modName+'stone_plate_distilled')
	.itemInputs('minecraft:smooth_stone')
	.inputFluids('gtceu:distilled_water 10')
	.itemOutputs('9x '+modName+'stone_plate')
	.EUt(30).duration(240)
    event.recipes.gtceu.cutter(modName+'stone_plate_lube')
	.itemInputs('minecraft:smooth_stone')
	.inputFluids('gtceu:lubricant 5')
	.itemOutputs('9x '+modName+'stone_plate')
	.EUt(30).duration(160)
    event.remove({output:modName+'redwire_post'})
    event.shaped(modName+'redwire_post', [
	'S',
	'R'
    ], {
	S: '#forge:rods/steel',
	R: '#forge:rods/red_alloy'
    })
    event.remove({output:modName+'redwire_post_plate'})
    event.shaped(modName+'redwire_post_plate', [
	'R',
	'P'
    ], {
	R: modName+'redwire_post',
	P: modName+'stone_plate'
    })
    event.remove({output:modName+'redwire_post_relay_plate'})
    event.shaped(modName+'redwire_post_relay_plate', [
	'WRW',
	'PPP'
    ], {
	W: modName+'red_alloy_wire',
	R: modName+'redwire_post',
	P: modName+'stone_plate'
    })
    event.shaped(modName+'hexidecrubrometer', [
	'PCP',
	'PMP',
	'PWP'
    ], {
	P: modName+'stone_plate',
	C: '#gtceu:circuits/lv',
	M: 'gtceu:computer_monitor_cover',
	W: modName+'red_alloy_wire'
    })
    event.remove({output:modName+'bundled_cable_post'})
    event.shaped(modName+'bundled_cable_post', [
	'S',
	'R',
	'W'
    ], {
	S: '#forge:rods/steel',
	R: '#forge:rods/red_alloy',
	W: modName+'bundled_network_cable'
    })
    event.remove({output:modName+'bundled_cable_relay_plate'})
    event.shaped(modName+'bundled_cable_relay_plate', [
	'WRW',
	'PPP'
    ], {
	W: modName+'bundled_network_cable',
	R: modName+'bundled_cable_post',
	P: modName+'stone_plate'
    })
    event.recipes.gtceu.assembler(modName+'white_network_cable')
	.itemInputs(
	    modName+'red_alloy_wire',
	    '2x minecraft:string')
	.itemOutputs(modName+'white_network_cable')
	.EUt(7).duration(100)
    event.recipes.gtceu.chemical_bath('network_cable_washing')
	.itemInputs('#morered:network_cables')
	.inputFluids('gtceu:chlorine 50')
	.itemOutputs(modName+'white_network_cable')
	.EUt(2).duration(200)
    let dyes = [
	'white',
        'orange',
        'magenta',
	'light_blue',
	'yellow',
	'lime',
	'pink',
	'gray',
	'light_gray',
	'cyan',
	'purple',
	'blue',
	'brown',
	'green',
	'red',
	'black',
    ]
    for (let i in dyes) {
	event.remove({output:modName+dyes[i]+'_network_cable'})
	event.recipes.gtceu.chemical_bath(modName+dyes[i]+'_network_cable')
	    .itemInputs('#morered:network_cables')
	    .inputFluids('gtceu:'+dyes[i]+'_dye 18')
	    .itemOutputs(modName+dyes[i]+'_network_cable')
	    .EUt(7).duration(20)
    }
    event.shaped(modName+'bitwise_diode', [
	'TWT',
	'PQP'
    ], {
	T: 'minecraft:redstone_torch',
	W: modName+'bundled_network_cable',
	P: modName+'stone_plate',
	Q: '#forge:plates/nether_quartz'
    })
    event.shaped(modName+'bitwise_not_gate', [
	'WTW',
	'PQP'
    ], {
	T: 'minecraft:redstone_torch',
	W: modName+'bundled_network_cable',
	P: modName+'stone_plate',
	Q: '#forge:plates/nether_quartz'
    })
    event.shaped(modName+'bitwise_or_gate', [
	'PTP',
	'WTW',
	'QWQ'
    ], {
	T: 'minecraft:redstone_torch',
	W: modName+'bundled_network_cable',
	P: modName+'stone_plate',
	Q: '#forge:plates/nether_quartz'
    })
    event.shaped(modName+'bitwise_and_gate', [
	'PTP',
	'TWT',
	'QTQ'
    ], {
	T: 'minecraft:redstone_torch',
	W: modName+'bundled_network_cable',
	P: modName+'stone_plate',
	Q: '#forge:plates/nether_quartz'
    })
    event.shaped(modName+'bitwise_xor_gate', [
	'PWP',
	'TTT',
	'PQP'
    ], {
	T: 'minecraft:redstone_torch',
	W: modName+'bundled_network_cable',
	P: modName+'stone_plate',
	Q: '#forge:plates/nether_quartz'
    })
    event.shaped(modName+'bitwise_xnor_gate', [
	'PTP',
	'TTT',
	'PQP'
    ], {
	T: 'minecraft:redstone_torch',
	P: modName+'stone_plate',
	Q: '#forge:plates/nether_quartz'
    })
    event.remove({type:'morered:soldering'})
})
