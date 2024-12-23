// Forest area collision zones
export const forestCollisionZones = [
  {
    x: 134,
    y: 30,
    width: 128,
    height: 96,
    type: "house",
    sprite: { row: 0, column: 1.65 },
  },
  {
    x: 920,
    y: 0,
    width: 128,
    height: 96,
    type: "house2",
    sprite: { row: 0.15, column: 1.65 },
  },
  {
    x: 422,
    y: 281,
    width: 55,
    height: 87,
    type: "tree1",
    sprite: { row: 1.5, column: 0.98 },
  },
  {
    x: 214,
    y: 430,
    width: 55,
    height: 87,
    type: "tree1",
    sprite: { row: 1.5, column: 0.98 },
  },
  {
    x: 19,
    y: 217,
    width: 55,
    height: 87,
    type: "tree2",
    sprite: { row: 1.5, column: 0 },
  },
  {
    x: 200,
    y: 525,
    width: 55,
    height: 87,
    type: "tree2",
    sprite: { row: 1.5, column: 0 },
  },
  {
    x: 503,
    y: 438,
    width: 90,
    height: 90,
    type: "bridge",
    sprite: { row: 2.8, column: 0 },
  },
  {
    x: 640,
    y: 310,
    width: 90,
    height: 96,
    type: "cabin",
    sprite: { row: 0, column: 0.18 },
  },
  {
    x: 740,
    y: 370,
    width: 23,
    height: 35,
    type: "woodpile",
    sprite: { row: 2.5, column: 1.96 },
  },
  {
    x: 780,
    y: 70,
    width: 21,
    height: 30,
    type: "openChest",
    sprite: { row: 2.1, column: 2.46 },
  },
  {
    x: 780,
    y: 70,
    width: 21,
    height: 30,
    type: "closedChest",
    sprite: { row: 2.1, column: 1.96 },
  },
  /*{
    x: 350,
    y: 300,
    width: 12,
    height: 12,
    type: "heart",
    sprite: { row: 3.259, column: 3.53 }, 
  },
  {
    x: 350,
    y: 350,
    width: 11,
    height: 11,
    type: "pearl",
    sprite: { row: 3.259, column: 2.539 }, 
  },
  {
    x: 450,
    y: 350,
    width: 11,
    height: 11,
    type: "star",
    sprite: { row: 3.259, column: 3.04 }, 
  },
  {
    x: 550,
    y: 350,
    width: 11,
    height: 12,
    type: "potion",
    sprite: { row: 3.24, column: 2.035 }, 
  },*/
  {
    x: 125,
    y: 330,
    width: 28,
    height: 30,
    type: "roadsign",
    sprite: { row: 2.07, column: 3.416 },
  },
  {
    x: 94,
    y: 75,
    width: 19,
    height: 18,
    type: "rock",
    sprite: { row: 2.25, column: 2.97 },
  },
  ,
  {
    x: 73,
    y: 283,
    width: 19,
    height: 18,
    type: "rock1",
    sprite: { row: 2.25, column: 2.97 },
  },
];

// Village area collision zones
export const villageCollisionZones = [
  // Add village-specific objects here
 /* {
    x: 200,
    y: 50,
    width: 128,
    height: 96,
    type: "house",
    sprite: { row: 0, column: 1.65 },
  },*/
  // ... more village objects
];

// Export area mappings
export const areaCollisionZones = {
  forest: forestCollisionZones,
  village: villageCollisionZones
};

// Constants for object categories
export const ALWAYS_BELOW_CHARACTER = ["bridge", "path", "water"];
export const BEHIND_BUT_SOLID = ["house", "house2", "cabin"];
export const HIDDEN_OBJECTS = ["openChest"];