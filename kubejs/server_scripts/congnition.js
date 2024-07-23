// Cognition Changes

// Tagging

ServerEvents.tags('item', event => {
    modName = 'experienceobelisk:'

    event.add('minecraft:swords', modName+'cognitive_sword')
    event.add('minecraft:shovels', modName+'cognitive_shovel')
    event.add('minecraft:pickaxes', modName+'cognitive_pickaxe')
    event.add('minecraft:axes', modName+'cognitive_axe')
    event.add('minecraft:hoes', modName+'cognitive_hoe')
})

// Gregification
ServerEvents.recipes( event => {
    let modName = 'experienceobelisk:'

    event.remove({mod:'experienceobelisk', not: {output: '#forge:tools'}})
    event.shapeless('9x '+modName+'cognitive_crystal', modName+'cognitive_crystal_block')
    event.shaped(modName+'cognitive_crystal', [
	' C ',
	'CEC',
	' C '
    ], {
	C: '#forge:plates/cognitive_alloy',
	E: '#forge:plates/emerald'
    })
    event.shaped('2x '+modName+'astute_assembly', [
	'CGC',
	'CEC',
	'CGC'
    ], {
	C: '#forge:plates/cognitive_alloy',
	E:  modName+'cognitive_crystal',
	G: '#gtceu:circuits/lv'
    })
    event.shaped(modName+'attunement_staff', [
	' CE',
	' R ',
	'R  '
    ], {
	C: '#forge:plates/cognitive_alloy',
	E: modName+'cognitive_crystal',
	R: '#forge:rods/cognitive_alloy'
    })
    event.shaped(modName+'enlightened_amulet', [
	' S ',
	'S S',
	' E '
    ], {
	E: modName+'cognitive_crystal',
	S: '#forge:string'
    })
    event.shaped(modName+'experience_obelisk', [
	' E ',
	'GCG',
	'CAC'
    ], {
	C: '#forge:plates/cognitive_alloy',
	E: modName+'cognitive_crystal',
	A: modName+'astute_assembly',
	G: '#gtceu:circuits/lv'
    })
    event.shaped(modName+'experience_fountain', [
	' G ',
	'CEC',
	'CAC'
    ], {
	C: '#forge:plates/cognitive_alloy',
	E: 'minecraft:dropper',
	A: modName+'astute_assembly',
	G: '#gtceu:circuits/lv'
    })
    event.shaped(modName+'precision_dispeller', [
	' G ',
	'CEC',
	'CAC'
    ], {
	C: '#forge:plates/cognitive_alloy',
	E: 'minecraft:grindstone',
	A: modName+'astute_assembly',
	G: '#gtceu:circuits/lv'
    })
    event.shaped(modName+'cognitive_crystal_block', [
	'CCC',
	'CCC',
	'CCC'
    ], {
	C: modName+'cognitive_crystal'
    })
    event.shaped(modName+'accelerator', [
	'APA',
	'ACA',
	'III'
    ], {
	C: modName+'cognitive_crystal',
	A: '#forge:plates/cognitive_alloy',
	P: 'gtceu:lv_electric_piston',
	I: '#forge:plates/steel'
    })
    event.shaped(modName+'linear_accelerator', [
	'APA',
	'ACA',
	'III'
    ], {
	C: modName+'cognitive_crystal',
	A: '#forge:plates/cognitive_alloy',
	P: 'gtceu:lv_conveyor_module',
	I: '#forge:plates/steel'
    })
    event.recipes.gtceu.alloy_smelter('whisperglass')
	.itemInputs(
	    '#forge:dusts/cognitive_alloy',
	    '#forge:dusts/glass')
	.EUt(8).duration(100)
})
