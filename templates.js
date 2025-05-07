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

upgrade_templates['Big AFB'] = `
zones.{{zoneName}}.keepActive = true
zones.{{zoneName}}.isHeloSpawn = true
zones.{{zoneName}}.isPlaneSpawn = true
zones.{{zoneName}}.airbaseName = '{{zoneName}} AFB'
zones.{{zoneName}}.maxResource = 50000
zones.{{zoneName}}:defineUpgrades({
    [1] = { --red side
        presets.upgrades.basic.comPost:extend({ 
            name = '{{zoneName}}-com-red',
            products = {
                presets.special.red.infantry:extend({name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry2:extend({name='{{zoneName}}-infantry-red'})
            },
            presets.upgrades.supply.fuelTank:extend({ 
                name = '{{zoneName}}-fueltank-red',
                products = {
                    presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'}),
                    presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red'}),
                    presets.missions.supply.helo:extend({ name='{{zoneName}}-supply-red-1' }),
                    presets.missions.supply.helo:extend({ name='{{zoneName}}-supply-red-2' })
                }
            }),
            presets.upgrades.airdef.comCenter:extend({ 
                name = '{{zoneName}}-mission-command-red',
                products = {
                    presets.defenses.red.sa2:extend({ name='{{zoneName}}-sam-red' }),
                    presets.defenses.red.shorad2:extend({ name='{{zoneName}}-sam2-red' }),
                    presets.defenses.red.ewr2:extend({ name='{{zoneName}}-ewr-red' }),
                    presets.missions.attack.sead:extend({name='{{zoneName}}-sead-red', altitude=25000, expend=AI.Task.WeaponExpend.ALL}),
                    presets.missions.attack.cas:extend({name='{{zoneName}}-cas-red', altitude=15000, expend=AI.Task.WeaponExpend.HALF}),
                    presets.missions.attack.bai:extend({name='{{zoneName}}-cas-red', altitude=10000, expend=AI.Task.WeaponExpend.HALF}),
                    presets.missions.attack.strike:extend({name='{{zoneName}}-strike-red', altitude=20000, expend=AI.Task.WeaponExpend.ALL}),
                    presets.missions.patrol.aircraft:extend({name='{{zoneName}}-patrol-red', altitude=25000, range=25})
                }
            })
        }),
    }, 
    [2] = --blue side
    {
        presets.upgrades.basic.comPost:extend({ 
            name = '{{zoneName}}-com-blue',
            products = {
                presets.special.blue.infantry:extend({name='{{zoneName}}-defense-blue'}),
        presets.defenses.blue.infantry2:extend({name='{{zoneName}}-infantry-blue'})
            }
        }),
        presets.upgrades.supply.fuelTank:extend({ 
            name = '{{zoneName}}-fueltank-blue',
            products = {
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'}),
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.helo:extend({ name='{{zoneName}}-supply-blue-1' }),
                presets.missions.supply.helo:extend({ name='{{zoneName}}-supply-blue-2' })
            }
        }),
        presets.upgrades.airdef.comCenter:extend({ 
            name = '{{zoneName}}-mission-command-blue',
            products = {
                presets.defenses.blue.hawk:extend({ name='{{zoneName}}-sam-blue' }),
                presets.defenses.blue.shorad2:extend({ name='{{zoneName}}-sam2-blue' }),
                presets.defenses.blue.ewr1:extend({ name='{{zoneName}}-ewr-blue' }),
                presets.missions.attack.sead:extend({name='{{zoneName}}-sead-blue', altitude=25000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.attack.cas:extend({name='{{zoneName}}-cas-blue', altitude=15000, expend=AI.Task.WeaponExpend.HALF}),
                presets.missions.attack.bai:extend({name='{{zoneName}}-cas-blue', altitude=10000, expend=AI.Task.WeaponExpend.HALF}),
                presets.missions.attack.strike:extend({name='{{zoneName}}-strike-blue', altitude=20000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.patrol.aircraft:extend({name='{{zoneName}}-patrol-blue', altitude=25000, range=25}),
                presets.missions.patrol.aircraft:extend({name='{{zoneName}}-patrol-blue-1', altitude=25000, range=25})
            }
        })
    }
})
`