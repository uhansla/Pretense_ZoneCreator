# Pretense Zone Tools

This repository contains two standalone HTML tools for working with DCS Pretense missions:

## 🔧 1. `zonecreator.html` — Zone Definition Generator

A browser-based GUI for building `ZoneCommand` Lua snippets with the following features:

- Upload an `init.lua` file to auto-load available presets
- Create new zones with:
    - Custom names
    - Initial side (Red/Blue)
    - Optional spawn and base settings
- Add upgrade levels and product presets under each zone
- Auto-generate structured Lua code with syntax highlighting
- Support for optional mission fields (`altitude`, `range`, `freq`, `tacan`, `variant`, `expend`) when a preset contains `.missions.`
- Copy and toggle raw/highlighted output
- Works entirely in-browser — no internet connection required after loading

## 🔗 2. `zone_connection.html` — Zone Connection Tool

A lightweight companion tool that:

- Parses zone names from the same `init.lua`
- Lets you create `cm:addConnection(...)` Lua statements between zones
- Supports optional "true state" with resource values
- Outputs the Lua connection logic for pasting into your mission

---

## 📂 How to Use

1. Open either `zonecreator.html` or `zone_connection.html` in your web browser (Chrome, Edge, Firefox, etc.)
2. Upload your `init.lua` file when prompted
    - This file can be found inside the `.miz` file of a Pretense mission:
        - Change the `.miz` file extension to `.zip`
        - Extract it and locate `init.lua` under the `mission` or `scripts` folder
3. Use the UI to configure zones or define zone connections
4. Copy and paste the generated Lua code into your mission's Lua files

---

## 🗂 Files Included

| File                | Purpose                                  |
|---------------------|------------------------------------------|
| `zonecreator.html`  | Visual tool to define zones and upgrades |
| `zone_connection.html` | Tool to define logical links between zones |

---

## ❗Requirements

- No installation needed — runs fully client-side in a modern browser
- Requires a valid `init.lua` file from a Pretense `.miz` mission

---

## ✍️ Credits
A big thanks to SQNLDR Salival[66] from the No. 80 Wing vRAAF group for coming up with this idea and helping out with the code! 

These tools are built to assist mission creators using the Pretense framework in DCS World. 
