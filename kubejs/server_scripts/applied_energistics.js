// Applied Energistics and related Changes

let modName = 'ae2'

// Fully removing Applied Energistics and related things

let begone = (modName, itemName) => {
    ServerEvents.recipes(event => {
	event.remove({output: itemName, mod: modName})
    })
    ServerEvents.tags('item', event => {
	event.add('c:hidden_from_recipe_viewers', itemName)
    })
}

let dontWant = [
    'crystal_resonance_generator',
    'flawless_budding_quartz',
    'flawed_budding_quartz',
    'chipped_budding_quartz',
    'damaged_budding_quartz',
    'small_quartz_bud',
    'medium_quartz_bud',
    'large_quartz_bud',
    'quartz_cluster'
]

let dontWantMats[
]

for (let x in dontWant) {
    let itemName = modName + ':' + dontWant[x]
    begone(modName, itemName)
}

for (let x in dontWantMats) {
    let itemName = '/' + modName + ':' + dontWantMats[x]
    begone(modName, itemName)
}

ServerEvents.recipes(event => {
    event.remove({type: 'ae2:certus_growth'})
})

//Gregification


ServerEvents.recipes(event => {
   
    let LV = GTValues.VA[GTValues.LV]
    let MV = GTValues.VA[GTValues.MV]
    let HV = GTValues.VA[GTValues.HV]
    let EV = GTValues.VA[GTValues.EV]
    let IV = GTValues.VA[GTValues.IV]
    let LUV = GTValues.VA[GTValues.LuV]
    let ZPM = GTValues.VA[GTValues.ZPM]
    let UV = GTValues.VA[GTValues.UV]

    // Adding Gregtech materials to Applied Energistics

    event.replaceOutput({mod: modName, output: 'ae2:certus_quartz_crystal'},
	'ae2:certus_quartz_crystal',
	'gtceu:certus_quartz_gem')

    // Creating Gregtech recipes
})


