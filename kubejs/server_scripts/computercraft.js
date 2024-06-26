// Computercraft and Associated mods Changes

// Gregification
ServerEvents.tags('item', event => {
    event.add('computercraft:disks', 'computercraft:disk')
    let itemName = [
	'rs_bridge',
	'colony_integrator',
	'energy_detector'
    ]
    for (let i in itemName) {
	event.add('c:hidden_from_recipe_viewers', 'advancedperipherals:'+itemName[i])
    }
})


ServerEvents.recipes(event => {
    let CC = 'computercraft:'

    let LV = GTValues.VA[GTValues.LV]
    let MV = GTValues.VA[GTValues.MV]

    event.remove({output:CC+'computer_normal'})
    event.recipes.gtceu.assembler(CC+'computer_normal')
	.itemInputs(
	    '7x #forge:plates/steel',
	    '1x #gtceu:circuits/lv',
	    '1x gtceu:computer_monitor_cover'
	)
	.itemOutputs(CC+'computer_normal')
	.circuit(1)
	.EUt(LV).duration(90)
    event.remove({output:CC+'computer_advanced'})
    event.recipes.gtceu.assembler(CC+'computer_advanced')
	.itemInputs(
	    '7x #forge:plates/gold',
	    '2x #gtceu:circuits/mv',
	    '1x gtceu:computer_monitor_cover'
	)
	.itemOutputs(CC+'computer_advanced')
	.circuit(1)
	.EUt(MV).duration(90)
    event.remove(CC+'computer_command')

    event.remove({id:CC+'pocket_computer_normal'})
    event.recipes.gtceu.assembler(CC+'pocket_computer_normal')
	.itemInputs(
	    '7x #forge:plates/steel',
	    '1x #gtceu:circuits/lv',
	    '1x gtceu:computer_monitor_cover'
	)
	.itemOutputs(CC+'pocket_computer_normal')
	.circuit(2)
	.EUt(LV).duration(90)
    event.remove({id:CC+'pocket_computer_advanced'})
    event.remove({id:CC+'pocket_computer_advanced_upgrade'})
    event.recipes.gtceu.assembler(CC+'pocket_computer_advanced')
	.itemInputs(
	    '7x #forge:plates/gold',
	    '1x #gtceu:circuits/mv',
	    '1x gtceu:computer_monitor_cover'
	)
	.itemOutputs(CC+'pocket_computer_advanced')
	.circuit(2)
	.EUt(MV).duration(90)

    event.remove({id:CC+'turtle_normal'})
    event.recipes.gtceu.assembler(CC+'turtle_normal')
	.itemInputs(
	    '7x #forge:plates/steel',
	    '1x #gtceu:circuits/lv',
	    '1x gtceu:computer_monitor_cover',
	    '1x #forge:chests/wooden'
	)
	.itemOutputs(CC+'turtle_normal')
	.circuit(3)
	.EUt(LV).duration(90)
    event.remove({id:CC+'turtle_advanced'})
    event.remove({id:CC+'turtle_advanced_upgrade'})
    event.recipes.gtceu.assembler(CC+'turtle_advanced')
	.itemInputs(
	    '7x #forge:plates/gold',
	    '1x #gtceu:circuits/mv',
	    '1x gtceu:computer_monitor_cover',
	    '1x #forge:chests/wooden'
	)
	.itemOutputs(CC+'turtle_advanced')
	.circuit(3)
	.EUt(MV).duration(90)

    event.remove({output:CC+'disk'})
    event.recipes.gtceu.assembler(CC+'disk_16')
	.itemInputs(
	    '2x #forge:plates/polyethylene',
	    '1x #forge:foils/steel',
	    '1x minecraft:paper'
	)
	.itemOutputs(Item.of(CC+'disk').withNBT({Color:15790320}))
	.EUt(LV).duration(10)
    event.recipes.gtceu.chemical_bath('disk_washing')
	.itemInputs('#computercraft:disks')
	.inputFluids('gtceu:chlorine 50')
	.itemOutputs(Item.of(CC+'disk').withNBT({Color:15790320}))
	.EUt(2).duration(200)

    let disks = [
	{
	    dye: 'white',
	    color: 15790320,
	    number: '16'
	},
	{
	    dye: 'orange',
	    color: 15905331,
	    number: '15'
	},
	{
	    dye: 'magenta',
	    color: 15040472,
	    number: '14'
	},
	{
	    dye: 'light_blue',
	    color: 10072818,
	    number: '13'
	},
	{
	    dye: 'yellow',
	    color: 14605932,
	    number: '12'
	},
	{
	    dye: 'lime',
	    color: 8375321,
	    number: '11'
	},
	{
	    dye: 'pink',
	    color: 15905484,
	    number: '10'
	},
	{
	    dye: 'gray',
	    color: 5000268,
	    number: '9'
	},
	{
	    dye: 'light_gray',
	    color: 10066329,
	    number: '8'
	},
	{
	    dye: 'cyan',
	    color: 5020082,
	    number: '7'
	},
	{
	    dye: 'purple',
	    color: 11691749,
	    number: '6'
	},
	{
	    dye: 'blue',
	    color: 3368652,
	    number: '5'
	},
	{
	    dye: 'brown',
	    color: 8349260,
	    number: '4'
	},
	{
	    dye: 'green',
	    color: 5744206,
	    number: '3'
	},
	{
	    dye: 'red',
	    color: 13388876,
	    number: '2'
	},
	{
	    dye: 'black',
	    color: 1118481,
	    number: '1'
	}]
    for (let i in disks) {
	event.recipes.gtceu.chemical_bath(CC+'disk_'+disks[i].number)
	    .itemInputs('#computercraft:disks')
	    .inputFluids('gtceu:'+disks[i].dye+'_dye 18')
	    .itemOutputs(Item.of(CC+'disk').withNBT({Color:disks[i].color}))
	    .EUt(7).duration(20)
    }
    
    event.remove({output: CC+'speaker'})
    event.recipes.gtceu.assembler(CC+'speaker')
	.itemInputs(
	    '7x #forge:plates/steel',
	    '1x #gtceu:circuits/lv',
	    '1x minecraft:note_block'
	)
	.itemOutputs(CC+'speaker')
	.EUt(MV).duration(90)
    event.remove({output: CC+'disk_drive'})
    event.recipes.gtceu.assembler(CC+'disk_drive')
	.itemInputs(
	    '7x #forge:plates/steel',
	    '1x #gtceu:circuits/lv',
	    '1x gtceu:lv_emitter'
	)
	.itemOutputs(CC+'disk_drive')
	.EUt(MV).duration(90)
    event.remove({output: CC+'printer'})
    event.recipes.gtceu.assembler(CC+'printer')
	.itemInputs(
	    '7x #forge:plates/steel',
	    '1x #gtceu:circuits/lv',
	    '1x #forge:dyes/black'
	)
	.itemOutputs(CC+'printer')
	.EUt(MV).duration(90)
    event.remove({output: CC+'monitor_normal'})
    event.recipes.gtceu.assembler(CC+'monitor_normal')
	.itemInputs(
	    '7x #forge:plates/steel',
	    '1x #gtceu:circuits/lv',
	    '1x gtceu:computer_monitor_cover'
	)
	.circuit(4)
	.itemOutputs(CC+'monitor_normal')
	.EUt(MV).duration(90)
    event.remove({output: CC+'monitor_advanced'})
    event.recipes.gtceu.assembler(CC+'monitor_advanced')
	.itemInputs(
	    '7x #forge:plates/gold',
	    '1x #gtceu:circuits/mv',
	    '1x gtceu:computer_monitor_cover'
	)
	.circuit(4)
	.itemOutputs(CC+'monitor_advanced')
	.EUt(MV).duration(90)
    event.remove({output: CC+'wireless_modem_normal'})
    event.recipes.gtceu.assembler(CC+'wireless_modem_normal')
	.itemInputs(
	    '8x #forge:plates/steel',
	    '1x #gtceu:circuits/lv',
	    '1x gtceu:lv_sensor',
	    '1x gtceu:lv_emitter'
	)
	.circuit(4)
	.itemOutputs(CC+'wireless_modem_normal')
	.EUt(MV).duration(90)
    event.remove({output: CC+'wireless_modem_advanced'})
    event.recipes.gtceu.assembler(CC+'wireless_modem_advanced')
	.itemInputs(
	    '8x #forge:plates/gold',
	    '1x #gtceu:circuits/mv',
	    '1x gtceu:mv_sensor',
	    '1x gtceu:mv_emitter'
	)
	.circuit(4)
	.itemOutputs(CC+'wireless_modem_advanced')
	.EUt(MV).duration(90)
    event.remove(CC+'cable')
    event.shapeless(CC+'cable', [
	'gtceu:red_alloy_single_cable'])
    event.remove({id: CC+'wired_modem'})
    event.recipes.gtceu.assembler(CC+'wired_modem')
	.itemInputs(
	    '8x #forge:plates/steel',
	    '1x #gtceu:circuits/lv',
	    '1x computercraft:cable'
	)
	.itemOutputs(CC+'wired_modem')
	.circuit(5)
	.EUt(LV).duration(90)

    let AP = 'advancedperipherals:'
    event.replaceInput({output:AP+'chat_box'},
	'minecraft:gold_ingot',
	'#forge:plates/gold')
    event.replaceInput({output:AP+'chat_box'},
	'#minecraft:logs',
	'#forge:plates/wood')
    event.replaceInput({output:AP+'player_detector'},
	'minecraft:smooth_stone',
	'#forge:plates/stone')
    event.replaceInput({output:AP+'player_detector'},
	'minecraft:redstone_block',
	'#forge:plates/red_alloy')
    event.replaceInput({output:AP+'me_bridge'},
	'ae2:fluix_block',
	'#forge:plates/fluix')
    event.remove({output:AP+'peripheral_casing'})
    event.shaped(AP+'peripheral_casing',[
	'PCP',
	'RHR',
	'PCP'
    ],{
	P: '#forge:plates/steel',
	C: CC+'cable',
	R: '#forge:plates/red_alloy',
	H: 'gtceu:lv_machine_hull'
    })
    event.replaceInput({output:AP+'inventory_manager'},
	'minecraft:iron_ingot',
	'#forge:plates/steel')
    event.replaceInput({output:AP+'inventory_manager'},
	'#forge:chests',
	'#forge:chests/wooden')
    event.replaceInput({output:AP+'redstone_integrator'},
	'minecraft:redstone_block',
	'#forge:plates/red_alloy')
    event.replaceInput({output:AP+'block_reader'},
	'minecraft:iron_ingot',
	'#forge:plates/steel')
    event.replaceInput({output:AP+'block_reader'},
	'minecraft:redstone_block',
	'#forge:plates/red_alloy')
    event.replaceInput({output:AP+'geo_scanner'},
	'minecraft:redstone_block',
	'#forge:plates/red_alloy')
    event.replaceInput({output:AP+'geo_scanner'},
	'minecraft:diamond',
	'#forge:plates/diamond')
    event.remove({output:AP+'nbt_storage'})
    event.shaped(AP+'nbt_storage',[
	'PCP',
	'CAC',
	'RCR'
    ],{
	P: '#forge:plates/steel',
	C: '#forge:chests/wooden',
	A: AP+'peripheral_casing',
	R: '#forge:plates/red_alloy'
    })
    event.remove({output:AP+'chunk_controller'})
    event.shaped(AP+'chunk_controller',[
	'PRP',
	'RER',
	'PRP'
    ],{
	P: '#forge:plates/steel',
	R: '#forge:plates/red_alloy',
	E: 'minecraft:ender_eye'
    })
    event.remove({output:AP+'memory_card'})
    event.shaped(AP+'memory_card',[
	'IPI',
	'IDI',
	' G '
    ],{
	I: '#forge:plates/steel',
	P: '#forge:plates/glass',
	D: 'gtceu:data_stick',
	G: '#forge:plates/gold'
    })
    event.replaceInput({output:AP+'weak_automata_core'},
	'minecraft:redstone_block',
	'#forge:plates/red_alloy')
    event.replaceInput({output:AP+'weak_automata_core'},
	'minecraft:diamond',
	'#forge:plates/diamond')
    event.replaceInput({mod:'advancedperipherals'},
	'minecraft:nether_star',
	'#forge:plates/nether_star')
})
