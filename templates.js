const upgrade_templates = {}

upgrade_templates['FOB'] = `
zones.{{zoneName}}.maxResource = 20000
zones.{{zoneName}}:defineUpgrades({
    [1] = {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry2:extend({name='{{zoneName}}-infantry-red'})
            }
        }),
        presets.upgrades.supply.fuelCache:extend({
            name='{{zoneName}}-fuel-red',
            products = {
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'}),
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red'})
            }
        }),
        presets.upgrades.attack.ammoCache:extend({
            name='{{zoneName}}-ammo-red',
            products = {
                presets.missions.attack.surface:extend({name='{{zoneName}}-assault-red'})
            }
        })
    },
    [2] = {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry2:extend({name='{{zoneName}}-infantry-blue'})
            }
        }),
        presets.upgrades.supply.fuelCache:extend({
            name='{{zoneName}}-fuel-blue',
            products = {
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'}),
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue'})
            }
        }),
        presets.upgrades.attack.ammoCache:extend({
            name='{{zoneName}}-ammo-blue',
            products = {
                presets.missions.attack.surface:extend({name='{{zoneName}}-assault-blue'})
            }
        })
    }
})
`