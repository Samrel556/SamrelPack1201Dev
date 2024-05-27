// Hostile Neural Networks Changes

// Gregification

ServerEvents.recipes(event => {
    let modName = 'hostilenetworks:'
    let HV = GTValues.VA[GTValues.HV]

    event.remove({output: modName+'blank_data_model'})
    event.shaped(modName+'blank_data_model',[
	'PSP',
	'CDC',
	'PCP'
    ],{
	P: '#forge:plates/silicon',
	S: 'gtceu:hv_sensor',
	D: 'gtceu:data_stick',
	C: '#gtceu:circuits/hv'
    })

    event.remove({output: modName+'prediction_matrix'})
    event.recipes.gtceu.chemical_reactor(modName+'prediction_matrix')
	.itemInputs(
	    '4x #forge:foils/gold',
	    '2x #forge:dusts/clay'
	)
	.inputFluids(Fluid.of('gtceu:glass'), 144)
	.itemOutputs(modName+'prediction_matrix')
	.EUt(HV).duration(40)

    event.remove({output: modName+'deep_learner'})
    event.recipes.gtceu.assembler('deep_learner')
	.itemInputs(
	    '4x #forge:plates/obsidian',
	    '3x #gtceu:circuits/hv',
	    '1x gtceu:hv_sensor',
	    '1x gtceu:hv_emitter',
	    '1x gtceu:computer_monitor_cover'
	)
	.itemOutputs(modName+'deep_learner')
	.EUt(HV).duration(60)

    event.remove({output: modName+'sim_chamber'})
    event.recipes.gtceu.assembler('sim_chamber')
	.itemInputs(
	    '4x #forge:plates/obsidian',
	    '1x #forge:frames/stainless_steel',
	    '1x gtceu:computer_monitor_cover',
	    '8x #gtceu:circuits/hv',
	    '2x minecraft:ender_eye',
	    '2x gtceu:gold_single_cable'
	)
	.itemOutputs(modName+'sim_chamber')
	.EUt(HV).duration(50)

    event.remove({output: modName+'loot_fabricator'})
    event.recipes.gtceu.assembler('loot_fab')
	.itemInputs(
	    '4x #forge:plates/netherite',
	    '1x #forge:frames/stainless_steel',
	    '1x gtceu:computer_monitor_cover',
	    '1x gtceu:hv_field_generator',
	    '4x gtceu:hv_emitter',
	    '4x #gtceu:circuits/hv'
	)
	.itemOutputs(modName+'loot_fabricator')
	.EUt(HV).duration(50)
})
