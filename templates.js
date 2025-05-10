const upgrade_templates = {}

upgrade_templates['Oil Fields'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-outpost-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.oilPump:extend({
            name='{{zoneName}}-pump-red-1',
            products = {
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red1'})
            }
        }),
        presets.upgrades.supply.oilPump:extend({
            name='{{zoneName}}-pump-red-2',
            products = {
                presets.missions.supply.convoy:extend({name='{{zoneName}}-supply-red-1'})
            }
        }),
        presets.upgrades.supply.oilPump:extend({
            name='{{zoneName}}-pump-red-3',
            products = {
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red2'})
            }
        }),
        presets.upgrades.supply.oilPump:extend({
            name='{{zoneName}}-pump-red-4',
            products = {
                presets.missions.supply.convoy:extend({name='{{zoneName}}-supply-red-2'})
            }
        })
    },
    [2] = {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-outpost-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.oilPump:extend({
            name='{{zoneName}}-pump-blue-1',
            products = {
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue1'})
            }
        }),
        presets.upgrades.supply.oilPump:extend({
            name='{{zoneName}}-pump-blue-2',
            products = {
                presets.missions.supply.convoy:extend({name='{{zoneName}}-supply-blue-1'})
            }
        }),
        presets.upgrades.supply.oilPump:extend({
            name='{{zoneName}}-pump-blue-3',
            products = {
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue2'})
            }
        }),
        presets.upgrades.supply.oilPump:extend({
            name='{{zoneName}}-pump-blue-4',
            products = {
                presets.missions.supply.convoy:extend({name='{{zoneName}}-supply-blue-2'})
            }
        })
    }
`;

upgrade_templates['Farm'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}:extend({
            name='{{zoneName}}-prod-red-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}:extend({
            name='{{zoneName}}-prod-red-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}:extend({
            name='{{zoneName}}-prod-blue-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}:extend({
            name='{{zoneName}}-prod-blue-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        })
    }
`;

upgrade_templates['Intel Center'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.hq:extend({
            name='{{zoneName}}-hq-red',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red'}),
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.supply.antenna:extend({
            name='{{zoneName}}-antenna-red',
            products = {
            }
        }),
        presets.upgrades.supply.antenna:extend({
            name='{{zoneName}}-antenna-red-1',
            products = {
            }
        }),
        presets.upgrades.supply.antenna:extend({
            name='{{zoneName}}-antenna-red-2',
            products = {
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.hq:extend({
            name='{{zoneName}}-hq-blue',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.supply.antenna:extend({
            name='{{zoneName}}-antenna-blue',
            products = {
            }
        }),
        presets.upgrades.supply.antenna:extend({
            name='{{zoneName}}-antenna-blue-1',
            products = {
            }
        }),
        presets.upgrades.supply.antenna:extend({
            name='{{zoneName}}-antenna-blue-2',
            products = {
            }
        })
    }
`;

upgrade_templates['Power Plant'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}1:extend({
            name='{{zoneName}}-building-red-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}2:extend({
            name='{{zoneName}}-building-red-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}1:extend({
            name='{{zoneName}}-building-blue-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}2:extend({
            name='{{zoneName}}-building-blue-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        })
    }
`;

upgrade_templates['Weapon Depot'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = {
        presets.upgrades.basic.tent:extend({
            name='weapons-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='weapons-defense-red'}),
                presets.defenses.red.infantry:extend({ name='weapons-garrison-red'})
            }
        }),
        presets.upgrades.supply.ammoDepot:extend({
            name='weapons-ammo-red-1',
            products = {
                presets.missions.supply.convoy:extend({name='weapons-supply-red-1'}),
                presets.missions.supply.transfer:extend({name='weapons-transfer-red-1'})
            }
        }),
        presets.upgrades.supply.ammoDepot:extend({
            name='weapons-ammo-red-2',
            products = {
                presets.missions.supply.convoy:extend({name='weapons-supply-red-2'}),
                presets.missions.supply.transfer:extend({name='weapons-transfer-red-2'})
            }
        })
    },
    [2] = {
        presets.upgrades.basic.tent:extend({
            name='weapons-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='weapons-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='weapons-garrison-blue'})
            }
        }),
        presets.upgrades.supply.ammoDepot:extend({
            name='weapons-ammo-blue-1',
            products = {
                presets.missions.supply.convoy:extend({name='weapons-supply-blue-1'}),
                presets.missions.supply.transfer:extend({name='weapons-transfer-blue-1'})
            }
        }),
        presets.upgrades.supply.ammoDepot:extend({
            name='weapons-ammo-blue-2',
            products = {
                presets.missions.supply.convoy:extend({name='weapons-supply-blue-2'}),
                presets.missions.supply.transfer:extend({name='weapons-transfer-blue-2'})
            }
        })
    }
`;

upgrade_templates['Factory'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}:extend({
            name='{{zoneName}}-prod-red-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}:extend({
            name='{{zoneName}}-prod-red-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red-2'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red2'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}Tank:extend({
            name='{{zoneName}}-tank-red-1',
            products = {
            }
        }),
        presets.upgrades.supply.{{zoneName}}Tank:extend({
            name='{{zoneName}}-tank-red-2',
            products = {
            }
        }),
        presets.upgrades.supply.{{zoneName}}Tank:extend({
            name='{{zoneName}}-tank-red-3',
            products = {
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}:extend({
            name='{{zoneName}}-prod-blue-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}:extend({
            name='{{zoneName}}-prod-blue-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue-2'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue2'})
            }
        }),
        presets.upgrades.supply.{{zoneName}}Tank:extend({
            name='{{zoneName}}-tank-blue-1',
            products = {
            }
        }),
        presets.upgrades.supply.{{zoneName}}Tank:extend({
            name='{{zoneName}}-tank-blue-2',
            products = {
            }
        }),
        presets.upgrades.supply.{{zoneName}}Tank:extend({
            name='{{zoneName}}-tank-blue-3',
            products = {
            }
        })
    }
`

upgrade_templates['Distillery'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.factory:extend({
            name='{{zoneName}}-prod-red-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.supply.factory:extend({
            name='{{zoneName}}-prod-red-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red-2', capacity=2000}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red2'})
            }
        }),
        presets.upgrades.supply.factoryTank:extend({
            name='{{zoneName}}-tank-red-1',
            products = {
            }
        }),
        presets.upgrades.supply.factoryTank:extend({
            name='{{zoneName}}-tank-red-2',
            products = {
            }
        }),
        presets.upgrades.supply.factoryTank:extend({
            name='{{zoneName}}-tank-red-3',
            products = {
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.factory:extend({
            name='{{zoneName}}-prod-blue-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.supply.factory:extend({
            name='{{zoneName}}-prod-blue-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue-2', capacity=2000}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue2'})
            }
        }),
        presets.upgrades.supply.factoryTank:extend({
            name='{{zoneName}}-tank-blue-1',
            products = {
            }
        }),
        presets.upgrades.supply.factoryTank:extend({
            name='{{zoneName}}-tank-blue-2',
            products = {
            }
        }),
        presets.upgrades.supply.factoryTank:extend({
            name='{{zoneName}}-tank-blue-3',
            products = {
            }
        })
    }
`;

upgrade_templates['Assault Depot'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.fuelCache:extend({
            name='{{zoneName}}-fuel-red',
            products = {
                presets.missions.supply.convoy_escorted:extend({name='{{zoneName}}-supply-red'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
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
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.fuelCache:extend({
            name='{{zoneName}}-fuel-blue',
            products = {
                presets.missions.supply.convoy_escorted:extend({name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.attack.ammoCache:extend({
            name='{{zoneName}}-ammo-blue',
            products = {
                presets.missions.attack.surface:extend({name='{{zoneName}}-assault-blue'})
            }
        })
    }
`;

upgrade_templates['Helo Assault Depot'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.fuelCache:extend({
            name='{{zoneName}}-fuel-red',
            products = {
                presets.missions.supply.convoy_escorted:extend({name='{{zoneName}}-supply-red'}),
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-red-2'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
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
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.fuelCache:extend({
            name='{{zoneName}}-fuel-blue',
            products = {
                presets.missions.supply.convoy_escorted:extend({name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-blue-2'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.attack.ammoCache:extend({
            name='{{zoneName}}-ammo-blue',
            products = {
                presets.missions.attack.surface:extend({name='{{zoneName}}-assault-blue'})
            }
        })
    }
`;

upgrade_templates['Forward Command Base'] = `
zones.{{zoneName}}.keepActive = true
zones.{{zoneName}}:defineUpgrades({
    [1] =  
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'}),
                presets.missions.attack.surface:extend({name='{{zoneName}}-assault-red'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-red',
            products = {
                presets.defenses.red.sam:extend({ name='{{zoneName}}-sam-red'})
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'}),
                presets.missions.attack.surface:extend({name='{{zoneName}}-assault-blue'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-blue',
            products = {
                presets.defenses.blue.sam:extend({ name='{{zoneName}}-sam-blue'})
            }
        })
    }
`;

upgrade_templates['SAM Command Post'] = `
zones.{{zoneName}}.keepActive = true
zones.{{zoneName}}:defineUpgrades({
    [1] =  
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-red',
            products = {
                presets.defenses.red.sam:extend({ name='{{zoneName}}-sam-red'})
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-blue',
            products = {
                presets.defenses.blue.sam:extend({ name='{{zoneName}}-sam-blue'})
            }
        })
    }
`;

upgrade_templates['Mine'] = `
zones.{{zoneName}}:defineUpgrades({
    [1] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.excavator:extend({
            name='{{zoneName}}-excavator-red-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.supply.excavator:extend({
            name='{{zoneName}}-excavator-red-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.supply.excavator:extend({
            name='{{zoneName}}-excavator-red-3',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-red'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.excavator:extend({
            name='{{zoneName}}-excavator-blue-1',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.supply.excavator:extend({
            name='{{zoneName}}-excavator-blue-2',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.supply.excavator:extend({
            name='{{zoneName}}-excavator-blue-3',
            products = {
                presets.missions.supply.convoy:extend({ name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        })
    }
`;

upgrade_templates['Assault Depot (Max 20000)'] = `
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
`

upgrade_templates['Big AFB'] = `
zones.{{zoneName}}.keepActive = true
zones.{{zoneName}}.isHeloSpawn = true
zones.{{zoneName}}.isPlaneSpawn = true
zones.{{zoneName}}.airbaseName = '{{rawZoneName}}'
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
`;

upgrade_templates['Medium AFB'] = `
zones.{{zoneName}}.keepActive = true
zones.{{zoneName}}.maxResource = 50000
zones.{{zoneName}}.isHeloSpawn = true
zones.{{zoneName}}.isPlaneSpawn = true
zones.{{zoneName}}.airbaseName = '{{rawZoneName}}'
zones.{{zoneName}}:defineUpgrades({
    [1] = 
    {
        presets.upgrades.basic.comPost:extend({
            name='{{zoneName}}-compost-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.fuelTank:extend({
            name='{{zoneName}}-fuel-red',
            products = {
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-red-1'}),
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-red-2'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-red',
            products = {
                presets.defenses.red.shorad:extend({ name='{{zoneName}}-airdef-red'}),
                presets.missions.attack.sead:extend({name='{{zoneName}}-sead-red', altitude=25000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.attack.cas:extend({name='{{zoneName}}-cas-red', altitude=15000, expend=AI.Task.WeaponExpend.ONE}),
                presets.missions.attack.strike:extend({name='{{zoneName}}-strike-red', altitude=20000, expend=AI.Task.WeaponExpend.HALF}),
                presets.missions.patrol.aircraft:extend({name='{{zoneName}}-patrol-red', altitude=25000, range=25}),
                presets.missions.patrol.aircraft:extend({name='{{zoneName}}-patrol-red-2', altitude=25000, range=25})
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.comPost:extend({
            name='{{zoneName}}-compost-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.fuelTank:extend({
            name='{{zoneName}}-fuel-blue',
            products = {
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-blue-1'}),
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-blue-2'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-blue',
            products = {
                presets.defenses.blue.shorad:extend({ name='{{zoneName}}-airdef-blue'}),
                presets.missions.attack.sead:extend({name='{{zoneName}}-sead-blue', altitude=25000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.attack.cas:extend({name='{{zoneName}}-cas-blue', altitude=15000, expend=AI.Task.WeaponExpend.ONE}),
                presets.missions.attack.strike:extend({name='{{zoneName}}-strike-blue', altitude=20000, expend=AI.Task.WeaponExpend.TWO}),
                presets.missions.patrol.aircraft:extend({name='{{zoneName}}-patrol-blue', altitude=25000, range=25})
            }
        })
    }
`;

upgrade_templates['Small AFB'] = `
zones.{{zoneName}}.keepActive = true
zones.{{zoneName}}.maxResource = 50000
zones.{{zoneName}}.airbaseName = '{{rawZoneName}}'
zones.{{zoneName}}.isHeloSpawn = true
zones.{{zoneName}}.isPlaneSpawn = true
zones.{{zoneName}}:defineUpgrades({
    [1] = 
    {
        presets.upgrades.basic.comPost:extend({
            name='{{zoneName}}-compost-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.fuelTank:extend({
            name='{{zoneName}}-fuel-red',
            products = {
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-red-1'}),
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-red-2'}),
                presets.missions.supply.convoy_escorted:extend({name='{{zoneName}}-supply-red-3'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-red',
            products = {
                presets.defenses.red.sa5:extend({ name='{{zoneName}}-airdef-red'}),
                presets.missions.attack.sead:extend({name='{{zoneName}}-sead-red', altitude=25000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.attack.strike:extend({name='{{zoneName}}-strike-red', altitude=30000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.attack.strike:extend({name='{{zoneName}}-strike-red-1', altitude=30000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.patrol.aircraft:extend({name='{{zoneName}}-patrol-red', altitude=25000, range=25})
            }
        })
    },
    [2] = 
    {
        presets.upgrades.basic.comPost:extend({
            name='{{zoneName}}-compost-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.fuelTank:extend({
            name='{{zoneName}}-fuel-blue',
            products = {
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-blue-1'}),
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-blue-2'}),
                presets.missions.supply.convoy_escorted:extend({name='{{zoneName}}-supply-blue-3'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-blue',
            products = {
                presets.defenses.blue.patriot:extend({ name='{{zoneName}}-airdef-blue'}),
                presets.missions.attack.sead:extend({name='{{zoneName}}-sead-blue', altitude=25000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.attack.strike:extend({name='{{zoneName}}-strike-blue', altitude=30000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.attack.strike:extend({name='{{zoneName}}-strike-blue-1', altitude=30000, expend=AI.Task.WeaponExpend.ALL}),
                presets.missions.patrol.aircraft:extend({name='{{zoneName}}-patrol-blue', altitude=25000, range=25})
            }
        })
    }
`;

upgrade_templates['Helibase'] = `
zones.{{zoneName}}.isHeloSpawn = true
zones.{{zoneName}}.airbaseName = '{{rawZoneName}}'
zones.{{zoneName}}:defineUpgrades({
    [1] = {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-red',
            products = {
                presets.special.red.infantry:extend({ name='{{zoneName}}-defense-red'}),
                presets.defenses.red.infantry:extend({ name='{{zoneName}}-garrison-red'})
            }
        }),
        presets.upgrades.supply.fuelTankFarp:extend({
            name='{{zoneName}}-fuel-red',
            products = {
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-red'}),
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-red-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-red'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-red',
            products = {
                presets.defenses.red.shorad:extend({name='{{zoneName}}-sam-red'}),
                presets.missions.attack.helo:extend({name='{{zoneName}}-cas-red', altitude=200, expend=AI.Task.WeaponExpend.HALF })
            }
        })
    },
    [2] = {
        presets.upgrades.basic.tent:extend({
            name='{{zoneName}}-tent-blue',
            products = {
                presets.special.blue.infantry:extend({ name='{{zoneName}}-defense-blue'}),
                presets.defenses.blue.infantry:extend({ name='{{zoneName}}-garrison-blue'})
            }
        }),
        presets.upgrades.supply.fuelTankFarp:extend({
            name='{{zoneName}}-fuel-blue',
            products = {
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-blue'}),
                presets.missions.supply.helo:extend({name='{{zoneName}}-supply-blue-1'}),
                presets.missions.supply.transfer:extend({name='{{zoneName}}-transfer-blue'})
            }
        }),
        presets.upgrades.airdef.comCenter:extend({
            name='{{zoneName}}-comcenter-blue',
            products = {
                presets.defenses.blue.shorad:extend({name='{{zoneName}}-sam-blue'}),
                presets.missions.attack.helo:extend({name='{{zoneName}}-cas-blue', altitude=200, expend=AI.Task.WeaponExpend.HALF })
            }
        })
    }
`;