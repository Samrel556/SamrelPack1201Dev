// Pocket Storage Changes

// Gregification
ServerEvents.recipes(event => {

    event.remove({id: 'pocketstorage:tier1'})
    event.custom({
	type: 'pocketstorage:data_upgrade',
	key: {
	    A: {tag: 'forge:plates/iron'},
	    B: {item: 'gtceu:mv_electric_piston'},
	    C: {item: 'gtceu:mv_field_generator'},
	    D: {type: 'pocketstorage:nbt_target',
		item: 'pocketstorage:psu_1'}
	},
	pattern: [
	    'ACA',
	    'BDB',
	    'ACA'
	],
	result: {item:'pocketstorage:psu_1'}
    })

    let units = [
	{
	    tier: '2',
	    previous: '1',
	    material: 'gold',
	    voltage: 'hv'
	},
	{
	    tier: '3',
	    previous: '2',
	    material: 'diamond',
	    voltage: 'ev'
	},
	{
	    tier: '4',
	    previous: '3',
	    material: 'netherite',
	    voltage: 'iv'
	}]
    
    let upgrade = (data) => {
	event.remove({id: 'pocketstorage:tier'+data.tier})
	event.custom({
	    type: 'pocketstorage:data_upgrade',
	    category: 'misc',
	    key: {
		A: {tag: 'forge:plates/'+data.material},
		B: {item: 'gtceu:'+data.voltage+'_electric_piston'},
		C: {item: 'gtceu:'+data.voltage+'_field_generator'},
		D: {type: 'pocketstorage:nbt_target',
		    item: 'pocketstorage:psu_'+data.previous}
	    },
	    pattern: [
		'ACA',
		'BDB',
		'ACA'
	    ],
	    result: {item: 'pocketstorage:psu_'+data.tier}
	})
    }

    for (let i in units) {
	upgrade(units[i])
    }
})
