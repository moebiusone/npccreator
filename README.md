# Beginnings of a NPC generator

The following code, when run via `npm start`, should open a web page that enables rolling stats for a new Inverse20-based NPC.

## What works

* Renders rough character sheet
* Randomly rolls up all attributes (2d3 + 8)
* Randomly selects Origin and applies attribute bump
* Sets "current" HP and Morale values to starting attribute values
* Randomly selects Background and selects trait
* Randomly selects Career Path (Profession) and selects trait
* Orders trait list and lists applicable attribute for each

## What remains

* Some traits are "special" like Cybernetic or Genetic Modifications, granting attribute bonuses to a single attribute - need to process these when selected, randomly choose attribute, update it, and note which attribute was chosen for the trait
* "Pretty up" the character sheet through better CSS
* Add random name generator and create an applicable character name
* Add level up option which selects a random trait, looks at prerequisites, and handles the heavy lifting 

## Preview

![Screen Shot as of July 26, 2019](/public/npc-creator-26-JUL-2019.jpg)