// Minecraft Changes


// Gregification
ServerEvents.recipes(event => {
    let EV = GTValues.VA[GTValues.EV]
    let IV = GTValues.VA[GTValues.IV]
    let greg = event.recipes.gtceu

    greg.centrifuge('minecraft:raw_netherite')
	.itemInputs('gtceu:netherite_scrap_dust')
	.inputFluids('gtceu:aqua_regia 2000')
	.itemOutputs('gtceu:raw_netherite_dust')
	.outputFluids('gtceu:nitrogen_dioxide 2000', 'minecraft:water 2000', 'gtceu:hydrogen_sulfide 1000')
	.EUt(IV).duration(500)

    greg.electrolyzer('minecraft:unrefined_netherite')
	.itemInputs('gtceu:raw_netherite_dust')
	.itemOutputs('gtceu:unrefined_netherite_dust')
	.outputFluids('gtceu:chlorine 4000')
	.EUt(EV).duration(100)

    greg.mixer('minecraft:netherite')
	.itemInputs('gtceu:unrefined_netherite_dust', '4x #forge:dusts/gold')
	.itemOutputs('gtceu:netherite_dust')
	.EUt(IV).duration(250)
})
