# Pretense Zone Tools

This repository contains two browser-based tools to assist mission creators using the Pretense framework in DCS World.

---

## ✈️ 1. `zonecreator.html` — Zone & Upgrade Builder

A fully client-side tool for generating `ZoneCommand` definitions in Lua for Pretense missions.

### Key Features

- Upload your mission's `init.lua` file to extract available presets
- Create multiple zones, each with:
    - Custom name, side (Red/Blue), and type
    - Optional flags: keep active, helicopter spawn, plane spawn, airbase name, and max resource value
- Support for predefined templates (from `templates.js`) or fully custom zone definitions
- Add up to **2 upgrade levels per zone**, each with multiple upgrades and nested products
- Auto-fills product and upgrade names and supports duplication
- Automatically includes optional mission fields (`altitude`, `range`, `freq`, `tacan`, `variant`, `expend`) for `.missions.` presets
- Toggle between raw and syntax-highlighted Lua output
- Live preview and automatic regeneration of Lua on every change
- Supports copy-to-clipboard for fast insertion into mission files

---

## 🔗 2. `zone_connection.html` — Zone Link Creator

Create Lua logic for inter-zone connections using a lightweight interface. Thanks to SQNLDR Salival[66] of No. 80 Wing vRAAF for creating this!

### Features

- Upload an `init.lua` to load zone names
- Select two zones to connect
- Optionally define `trueState` and a resource amount
- Output `cm:addConnection(...)` lines ready for copy-pasting into your mission

---

## 📁 How to Use

1. **Download and open** `zonecreator.html` or `zone_connection.html` in any modern web browser (Chrome, Edge, Firefox)
   1. Please note that `zonecreator.html` needs `template.js` as well since it stores the predefined templates there 
2. **Upload your `init.lua` file** when prompted
    - This can be extracted from a Pretense `.miz` mission by:
        - Renaming the `.miz` to `.zip`
        - Extracting it
        - Locating `init.lua` in the `mission/` or `scripts/` folder
3. Use the interface to build zones or define connections
4. Copy the generated Lua code and paste it into your mission files

---

## 🧠 Templates

Zone templates defined in `templates.js` (like `FOB`, `Big AFB`) include dynamic placeholders such as `{{zoneName}}`. These are filled automatically when a template is selected.

If a template is selected, all zone configuration fields are hidden. Selecting **Custom** enables full manual configuration.

---

## 📦 Files Included

| File                 | Description                                   |
|----------------------|-----------------------------------------------|
| `zonecreator.html`   | Full GUI to create zones, upgrades, and products |
| `zone_connection.html` | Minimal UI to generate zone-to-zone connections |
| `templates.js`       | JavaScript object defining reusable zone templates |
| `README.md`          | This documentation file                       |

---

## ⚙️ Requirements

- No installation needed
- Works fully offline after opening in a browser
- Requires a valid `init.lua` from a Pretense mission

---

## 🙌 Credits

Thanks to **SQNLDR Salival[66] of No. 80 Wing vRAAF** for the initial concept and support.

These tools are built to make Pretense mission scripting faster, safer, and easier.

---

> 💡 If you have feature suggestions, feel free to fork or open an issue!
