// Sophisticated Backpacks Changes
let modName = 'sophisticatedbackpacks'
let coreName = 'sophisticatedcore'

// Gregification

ServerEvents.recipes(event => {
   
    let upgradeBase = modName + ':upgrade_base'

   event.remove({id: modName+':backpack'})
    event.shaped(modName+':backpack',[
	'SLS',
	'LBL',
	'PCP'
    ],{
	S: '#forge:string',
	L: '#forge:leather',
	B: 'gtceu:wood_crate',
	P: '#forge:plates/treated_wood',
	C: '#gtceu:circuits/lv'
    })

    event.remove({id: modName+':copper_backpack'})
    event.custom({
	type: modName+":backpack_upgrade",
	conditions: [{
	    itemRegistryName: "copper_backpack",
	    type: modName+":item_enabled",
	}],
	pattern: [
	    "SLS",
	    "LBL",
	    "PCP"
	],
	key: {
	    L: {item: "minecraft:leather"},
	    B: {item: modName+":backpack"},
	    S: {item: "minecraft:string"},
	    P: {tag: "forge:plates/copper"},
	    C: {tag: "gtceu:circuits/mv"}
	},
	result: {
	    item: modName+":copper_backpack"
	}
    })

    event.remove({id: modName+':iron_backpack'})
    event.remove({id: modName+':iron_backpack_from_copper'})
    event.custom({
	type: modName+":backpack_upgrade",
	conditions: [{
	    itemRegistryName: "iron_backpack",
	    type: modName+":item_enabled",
	}],
	pattern: [
	    "SLS",
	    "LBL",
	    "PCP"
	],
	key: {
	    L: {item: "minecraft:leather"},
	    B: {item: modName+":copper_backpack"},
	    S: {item: "minecraft:string"},
	    P: {tag: "forge:plates/iron"},
	    C: {tag: "gtceu:circuits/hv"}
	},
	result: {
	    item: modName+":iron_backpack"
	}
    })

    event.remove({id: modName+':gold_backpack'})
    event.custom({
	type: modName+":backpack_upgrade",
	conditions: [{
	    itemRegistryName: "gold_backpack",
	    type: modName+":item_enabled",
	}],
	pattern: [
	    "SLS",
	    "LBL",
	    "PCP"
	],
	key: {
	    L: {item: "minecraft:leather"},
	    B: {item: modName+":iron_backpack"},
	    S: {item: "minecraft:string"},
	    P: {tag: "forge:plates/gold"},
	    C: {tag: "gtceu:circuits/ev"}
	},
	result: {
	    item: modName+":gold_backpack"
	}
    })

    event.remove({id: modName+':diamond_backpack'})
    event.custom({
	type: modName+":backpack_upgrade",
	conditions: [{
	    itemRegistryName: "diamond_backpack",
	    type: modName+":item_enabled",
	}],
	pattern: [
	    "SLS",
	    "LBL",
	    "PCP"
	],
	key: {
	    L: {item: "minecraft:leather"},
	    B: {item: modName+":gold_backpack"},
	    S: {item: "minecraft:string"},
	    P: {tag: "forge:plates/diamond"},
	    C: {tag: "gtceu:circuits/iv"}
	},
	result: {
	    item: modName+":diamond_backpack"
	}
    })

    event.remove({id: modName+':netherite_backpack'})
    event.custom({
	type: modName+":backpack_upgrade",
	conditions: [{
	    itemRegistryName: "netherite_backpack",
	    type: modName+":item_enabled",
	}],
	pattern: [
	    "SLS",
	    "LBL",
	    "PCP"
	],
	key: {
	    L: {item: "minecraft:leather"},
	    B: {item: modName+":diamond_backpack"},
	    S: {item: "minecraft:string"},
	    P: {tag: "forge:plates/netherite"},
	    C: {tag: "gtceu:circuits/luv"}
	},
	result: {
	    item: modName+":netherite_backpack"
	}
    })
    
    event.remove({output: modName+':pickup_upgrade'})
    event.shaped(modName+':pickup_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_robot_arm',
	S: '#forge:string',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_pickup_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_pickup_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_robot_arm'},
	    R: {tag: 'forge:dusts/redstone'},
	    B: {item: modName+':pickup_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_pickup_upgrade"
	}
    })

    event.remove({output: modName+':filter_upgrade'})
    event.shaped(modName+':filter_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:item_filter',
	S: '#forge:string',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_filter_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_filter_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:item_tag_filter'},
	    R: {tag: 'forge:dusts/redstone'},
	    B: {item: modName+':filter_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_filter_upgrade"
	}
    })

    event.remove({output: modName+':magnet_upgrade'})
    event.shaped(modName+':magnet_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:lv_item_magnet',
	S: '#forge:string',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_magnet_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_magnet_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_item_magnet'},
	    R: {tag: 'forge:dusts/redstone'},
	    B: {item: modName+':magnet_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_magnet_upgrade"
	}
    })

    event.remove({output: modName+':feeding_upgrade'})
    event.shaped(modName+':feeding_upgrade',[
	'PGP',
	'DBT',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_robot_arm',
	B: upgradeBase,
	C: '#gtceu:circuits/mv',
	D: 'minecraft:bowl',
	T: 'miners_delight:copper_cup'
    })

    event.remove({output: modName+':advanced_feeding_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_feeding_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "DBT",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_robot_arm'},
	    B: {item: modName+':feeding_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'},
	    D: {item: 'minecraft:bowl'},
	    T: {item: 'miners_delight:copper_cup'}
	},
	result: {
	    item: modName+":advanced_feeding_upgrade"
	}
    })

    event.remove({output: modName+':compacting_upgrade'})
    event.shaped(modName+':compacting_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_conveyor_module',
	S: 'gtceu:mv_electric_piston',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_compacting_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_compacting_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_conveyor_module'},
	    R: {item: 'gtceu:hv_electric_piston'},
	    B: {item: modName+':magnet_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_compacting_upgrade"
	}
    })

    event.remove({output: modName+':void_upgrade'})
    event.shaped(modName+':void_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:item_voiding_cover',
	S: '#forge:string',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_void_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_void_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:advanced_item_voiding_cover'},
	    R: {tag: 'forge:dusts/obsidian'},
	    B: {item: modName+':void_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_void_upgrade"
	}
    })
    
    event.remove({output: modName+':restock_upgrade'})
    event.shaped(modName+':restock_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_conveyor_module',
	S: '#forge:string',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_restock_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_restock_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_conveyor_module'},
	    R: {tag: 'forge:dusts/redstone'},
	    B: {item: modName+':restock_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_restock_upgrade"
	}
    })
    
    event.remove({output: modName+':deposit_upgrade'})
    event.shaped(modName+':deposit_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_conveyor_module',
	S: 'gtceu:cobalt_small_item_pipe',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_deposit_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_deposit_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_conveyor_module'},
	    R: {item: 'gtceu:cobalt_normal_item_pipe'},
	    B: {item: modName+':deposit_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_deposit_upgrade"
	}
    })
    
    event.remove({output: modName+':refill_upgrade'})
    event.shaped(modName+':refill_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_robot_arm',
	S: '#forge:chests/wooden',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_refill_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_refill_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_robot_arm'},
	    R: {tag: 'forge:chests/wooden'},
	    B: {item: modName+':refill_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_refill_upgrade"
	}
    })

    event.remove({output: modName+':inception_upgrade'})
    event.shaped(modName+':inception_upgrade',[
	'PNP',
	'QBQ',
	'PCP'
    ],{
	P: '#forge:plates/diamond',
	N: '#forge:gems/nether_star',
	Q: 'gtceu:quantum_eye',
	B: upgradeBase,
	C: '#gtceu:circuits/ev'
    })

    event.remove({output: modName+':everlasting_upgrade'})
    event.shaped(modName+':everlasting_upgrade',[
	'PEP',
	'NBN',
	'PCP'
    ],{
	P: '#forge:plates/diamond',
	E: 'gtceu:iv_field_generator',
	N: '#forge:gems/nether_star',
	B: upgradeBase,
	C: '#gtceu:circuits/iv'
    })
    
    event.remove({output: modName+':smelting_upgrade'})
    event.shaped(modName+':smelting_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_conveyor_module',
	S: 'minecraft:furnace',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':auto_smelting_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'auto_smelting_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_conveyor_module'},
	    R: {item: 'minecraft:furnace'},
	    B: {item: modName+':smelting_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":auto_smelting_upgrade"
	}
    })
    
    event.remove({output: modName+':blasting_upgrade'})
    event.shaped(modName+':blasting_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_conveyor_module',
	S: 'minecraft:blast_furnace',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':auto_blasting_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'auto_blasting_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_conveyor_module'},
	    R: {item: 'minecraft:blast_furnace'},
	    B: {item: modName+':blasting_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":auto_blasting_upgrade"
	}
    })
    
    event.remove({output: modName+':smoking_upgrade'})
    event.shaped(modName+':smoking_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_conveyor_module',
	S: 'minecraft:smoker',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':auto_smoking_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'auto_smoking_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_conveyor_module'},
	    R: {item: 'minecraft:smoker'},
	    B: {item: modName+':smoking_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":auto_smoking_upgrade"
	}
    })

    event.remove({output: modName+':crafting_upgrade'})
    event.shaped(modName+':crafting_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'minecraft:crafting_table',
	S: 'gtceu:wood_crate',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':stonecutter_upgrade'})
    event.shaped(modName+':stonecutter_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'minecraft:stonecutter',
	S: 'gtceu:wood_crate',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':stack_upgrade_starter_tier'})
    event.shaped(modName+':stack_upgrade_starter_tier',[
	'PGP',
	'EBE',
	'PCP'
    ],{
	P: '#forge:plates/copper',
	G: 'gtceu:mv_electric_piston',
	E: 'gtceu:mv_field_generator',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':stack_upgrade_tier_1'})
    event.shaped(modName+':stack_upgrade_tier_1',[
	'PGP',
	'EBE',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:hv_electric_piston',
	E: 'gtceu:hv_field_generator',
	B: modName+':stack_upgrade_starter_tier',
	C: '#gtceu:circuits/hv'
    })

    let stackUpgrades = [
	{
	    tier: '2',
	    material: 'gold',
	    voltage: 'ev',
	    previousTier: '1'
	},
	{
	    tier: '3',
	    material: 'diamond',
	    voltage: 'iv',
	    previousTier: '2'
	},
	{
	    tier: '4',
	    material: 'netherite',
	    voltage: 'luv',
	    previousTier: '3'
	}
    ]
    
    let stackUpgradeChange = (stackUpgrade) => {
	event.remove({output: modName+':stack_upgrade_tier_'+stackUpgrade.tier})
	event.shaped(modName+':stack_upgrade_tier_'+stackUpgrade.tier,[
	    'PGP',
	    'EBE',
	    'PCP'
	],{
	    P: '#forge:plates/'+stackUpgrade.material,
	    G: 'gtceu:'+stackUpgrade.voltage+'_electric_piston',
	    E: 'gtceu:'+stackUpgrade.voltage+'_field_generator',
	    B: modName+':stack_upgrade_tier_'+stackUpgrade.previousTier,
	    C: '#gtceu:circuits/'+stackUpgrade.voltage
	})
    }

    for (let x in stackUpgrades) {
	stackUpgradeChange(stackUpgrades[x])
    }

    event.remove({output: modName+':jukebox_upgrade'})
    event.shaped(modName+':jukebox_upgrade',[
	'PJP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	J: 'minecraft:jukebox',
	S: '#forge:dusts/redstone',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })
  
    event.remove({output: modName+':tool_swapper_upgrade'})
    event.shaped(modName+':tool_swapper_upgrade',[
	'PGP',
	'SBA',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_robot_arm',
	S: 'minecraft:wooden_sword',
	A: 'minecraft:wooden_axe',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_tool_swapper_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_tool_swapper_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBE",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_robot_arm'},
	    R: {item: 'minecraft:wooden_sword'},
	    E: {item: 'minecraft:wooden_axe'},
	    B: {item: modName+':tool_swapper_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_tool_swapper_upgrade"
	}
    })

    event.remove({output: modName+':tank_upgrade'})
    event.shaped(modName+':tank_upgrade',[
	'PGP',
	'DBD',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_electric_pump',
	D: 'gtceu:bronze_drum',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':battery_upgrade'})
    event.shaped(modName+':battery_upgrade',[
	'PGP',
	'WBW',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'ad_astra:etrionic_capacitor',
	W: 'gtceu:gold_single_wire',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })
   
    event.remove({output: modName+':pump_upgrade'})
    event.shaped(modName+':pump_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'gtceu:mv_electric_pump',
	S: 'gtceu:lead_small_fluid_pipe',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })

    event.remove({output: modName+':advanced_pump_upgrade'})
    event.custom({
	type: coreName+":upgrade_next_tier",
	conditions: [{
	    itemRegistryName: 'advanced_pump_upgrade',
	    type: modName+":item_enabled"
	}],
	pattern: [
	    "PGP",
	    "RBR",
	    "PCP"
	],
	key: {
	    P: {tag: 'forge:plates/gold'},
	    G: {item: 'gtceu:hv_electric_pump'},
	    R: {item: 'gtceu:lead_normal_fluid_pipe'},
	    B: {item: modName+':pump_upgrade'},
	    C: {tag: 'gtceu:circuits/hv'}
	},
	result: {
	    item: modName+":advanced_pump_upgrade"
	}
    })

    event.remove({output: modName+':xp_pump_upgrade'})
    event.shaped(modName+':xp_pump_upgrade',[
	'PGP',
	'EBE',
	'PCP'
    ],{
	P: '#forge:plates/emerald',
	G: 'gtceu:ev_electric_pump',
	E: 'minecraft:experience_bottle',
	B: modName+':advanced_pump_upgrade',
	C: '#gtceu:circuits/ev'
    })

    event.remove({output: modName+':anvil_upgrade'})
    event.shaped(modName+':anvil_upgrade',[
	'PGP',
	'SBS',
	'PCP'
    ],{
	P: '#forge:plates/iron',
	G: 'minecraft:anvil',
	S: 'gtceu:wood_crate',
	B: upgradeBase,
	C: '#gtceu:circuits/mv'
    })
    
    event.replaceInput({output: modName+':upgrade_base'}, 'minecraft:iron_ingot', '#forge:plates/iron')
})
