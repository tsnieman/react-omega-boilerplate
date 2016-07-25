export const ACTIONS = {
  CREATE_MAP: 'CREATE_MAP',
  SET_MAP: 'SET_MAP',
  SET_MAPS: 'SET_MAPS',
  GET_MAP: 'GET_MAP',
  GET_MAPS: 'GET_MAPS',
  UPDATE_MAP: 'UPDATE_MAP',
  SET_FEATURES: 'SET_FEATURES',
  SET_SEARCH_FEATURES: 'SET_SEARCH_FEATURES',
  CLEAR_SEARCH_FEATURES: 'CLEAR_SEARCH_FEATURES',
  SAVE_SEARCH_FEATURE: 'SAVE_SEARCH_FEATURE',
  SET_FEATURE: 'SET_FEATURE',
  UPDATE_FEATURE: 'UPDATE_FEATURE',
  DELETE_FEATURE: 'DELETE_FEATURE',
  SET_SELECTED_FEATURE: 'SET_SELECTED_FEATURE',
  CLEAR_SELECTED_FEATURE: 'CLEAR_SELECTED_FEATURE',
  TOGGLE_CATEGORY: 'TOGGLE_CATEGORY',
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  SET_MAP_PROPS: 'SET_MAP_PROPS',
};

export const PLACE_TYPES = {
  PIZZERIA: {
    type: 'PIZZERIA',
    label: 'Pizzeria',
  },
  ROLLERSKATE: {
    type: 'ROLLERSKATE',
    label: 'Roller skating',
  },
  TRAIN: {
    type: 'TRAIN',
    label: 'Train',
  },
  DONUT: {
    type: 'DONUT',
    label: 'Donut',
  },
  RESTAURANT: {
    type: 'RESTAURANT',
    label: 'Restaurant',
  },
  MOVIE_THEATRE: {
    type: 'MOVIE_THEATRE',
    label: 'Movie theatre',
  },
  ARCADE: {
    type: 'ARCADE',
    label: 'Arcade',
  },
  GROCERY: {
    type: 'GROCERY',
    label: 'Grocery',
  },
  MUSEUM: {
    type: 'MUSEUM',
    label: 'Museum',
  },
  REC_CANNABIS: {
    type: 'REC_CANNABIS',
    label: 'Recreational cannabis',
  },
  BUS: {
    type: 'BUS',
    label: 'Bus transit center',
  },
  ICE_CREAM: {
    type: 'ICE_CREAM',
    label: 'Ice cream shop',
  },
  SHOPPING: {
    type: 'SHOPPING',
    label: 'General shopping',
  },
  PARK: {
    type: 'PARK',
    label: 'Park',
  },
  BIKE_LANE: {
    type: 'BIKE_LANE',
    label: 'Bike lane',
  },
  HOUSE: {
    type: 'HOUSE',
    label: 'House',
  },
  UNKNOWN: {
    type: 'UNKNOWN',
    label: 'Unknown',
  },
};

/*
  Data structure below is geojson from
  http://geojson.io/#map=13/47.2812/-122.4882
  NOTE: leaflet wants lat-lon and geojson is lon-lat.
  TODO look into GeoJsonLayer? (react-leaflet.GeoJson)
*/
export const FEATURES = [
  // Some unmeaningful point in Tacoma
  {
    type: 'Feature',
    properties: {
      id: 'fake-point',
      name: 'Fake Point',
      category: PLACE_TYPES.HOUSE.type,
      description: 'This is a longform decription about this feature. Blah blah blah.',
      gallery: [
        'http://placehold.it/800x600',
        'http://placehold.it/800x600',
        'http://placehold.it/800x600',
        'http://placehold.it/800x600',
        'http://placehold.it/800x600',
      ],
    },
    geometry: {
      type: 'Point',
      coordinates: [
        -122.465973,
        47.258728,
      ],
    },
  },

  // Some street in Tacoma
  {
    type: 'Feature',
    properties: {
      id: 'fake-bike-lane',
      name: 'Fake Bike Lane',
      category: PLACE_TYPES.BIKE_LANE.type,
      description: 'This is a longform decription about this feature. Blah blah blah.',
    },
    geometry: {
      type: 'LineString',
      coordinates: [
        [
          -122.46266841888428,
          47.25622324198496,
        ],
        [
          -122.44601726531982,
          47.26472780195099,
        ],
      ],
    },
  },

  // Point Defiance park...
  {
    type: 'Feature',
    properties: {
      id: 'point-defiance-park',
      name: 'Point Defiance Park',
      category: PLACE_TYPES.PARK.type,
      description: 'This is a longform decription about this feature. Blah blah blah.',
    },
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          -122.53455162048338,
          47.30146810086879,
        ],
        [
          -122.53798484802248,
          47.306589918714955,
        ],
        [
          -122.53970146179199,
          47.308568669980225,
        ],
        [
          -122.54304885864256,
          47.31147846374411,
        ],
        [
          -122.54708290100096,
          47.31526095614119,
        ],
        [
          -122.54802703857422,
          47.316017422132695,
        ],
        [
          -122.5476837158203,
          47.31700663055079,
        ],
        [
          -122.54751205444336,
          47.31747213398678,
        ],
        [
          -122.5473403930664,
          47.31793763332178,
        ],
        [
          -122.54442214965819,
          47.31875224729002,
        ],
        [
          -122.54116058349608,
          47.31898499183126,
        ],
        [
          -122.53815650939941,
          47.31840312855579,
        ],
        [
          -122.53652572631835,
          47.31799582045031,
        ],
        [
          -122.53437995910645,
          47.31758850920501,
        ],
        [
          -122.53232002258301,
          47.3165411230138,
        ],
        [
          -122.52330780029295,
          47.31025636987548,
        ],
        [
          -122.5191879272461,
          47.30787029563926,
        ],
        [
          -122.51790046691895,
          47.30723011105395,
        ],
        [
          -122.51764297485352,
          47.307695700612236,
        ],
        [
          -122.51601219177246,
          47.30705551391229,
        ],
        [
          -122.5162696838379,
          47.306589918714955,
        ],
        [
          -122.51446723937988,
          47.306007918951096,
        ],
        [
          -122.51317977905273,
          47.30496030322793,
        ],
        [
          -122.50940322875977,
          47.30239937738765,
        ],
        [
          -122.50760078430174,
          47.30263219395415,
        ],
        [
          -122.51008987426758,
          47.30461109337307,
        ],
        [
          -122.51172065734863,
          47.30589151822937,
        ],
        [
          -122.51283645629881,
          47.30629891963403,
        ],
        [
          -122.51283645629881,
          47.30705551391229,
        ],
        [
          -122.51172065734863,
          47.30734650882801,
        ],
        [
          -122.51043319702148,
          47.30711371302358,
        ],
        [
          -122.50871658325195,
          47.30664811833891,
        ],
        [
          -122.50751495361327,
          47.30548411368477,
        ],
        [
          -122.50751495361327,
          47.30426188121131,
        ],
        [
          -122.50682830810545,
          47.30274860185288,
        ],
        [
          -122.5100040435791,
          47.30175912654317,
        ],
        [
          -122.53455162048338,
          47.30146810086879,
        ],
      ],
    },
  },

  // KML -> GeoJson
  /* eslint-disable */
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.51086499999997,
        47.163371,
        0
      ]
    },
    "properties": {
      "name": "Target",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4803465,
        47.2375294,
        0
      ]
    },
    "properties": {
      "name": "Target",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.46858099999997,
        47.18011500000001,
        0
      ]
    },
    "properties": {
      "name": "Regal Cinemas Lakewood 15 & RPX",
      "styleUrl": "#icon-1001-nodesc",
      "styleHash": "4d909221"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.46819909999999,
        47.22526260000001,
        0
      ]
    },
    "properties": {
      "name": "Costco Wholesale",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.45574280000001,
        47.2517594,
        0
      ]
    },
    "properties": {
      "name": "Le Donut",
      "styleUrl": "#icon-1313-nodesc",
      "styleHash": "-395439cc"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4311881,
        47.1924615,
        0
      ]
    },
    "properties": {
      "name": "72nd Street Goodwill",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.45538950000002,
        47.1962005,
        0
      ]
    },
    "properties": {
      "name": "Wapato Park",
      "styleUrl": "#icon-1285-nodesc",
      "styleHash": "-4c7fda06"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.48398320000001,
        47.20849159999999,
        0
      ]
    },
    "properties": {
      "name": "Subway",
      "styleUrl": "#icon-1085-nodesc",
      "styleHash": "-556742fd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.46847009999999,
        47.2161287,
        0
      ]
    },
    "properties": {
      "name": "Tacoma Mall",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47452759999999,
        47.22211600000001,
        0
      ]
    },
    "properties": {
      "name": "McDonald's",
      "styleUrl": "#icon-1085-nodesc",
      "styleHash": "-556742fd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43442099999999,
        47.2128159,
        0
      ]
    },
    "properties": {
      "name": "Erica Peace love And Ice Cream",
      "styleUrl": "#icon-1087-nodesc",
      "styleHash": "22b35675"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.474529,
        47.255106,
        0
      ]
    },
    "properties": {
      "name": "Ice Cream Social, LLC",
      "styleUrl": "#icon-1087-nodesc",
      "styleHash": "22b35675"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.40728880000002,
        47.20603689999999,
        0
      ]
    },
    "properties": {
      "name": "Helen's Donuts & Ice Cream",
      "styleUrl": "#icon-1087-nodesc",
      "styleHash": "22b35675"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.48654369999997,
        47.2313869,
        0
      ]
    },
    "properties": {
      "name": "Melon Seed Deli & Frozen Yogurt",
      "styleUrl": "#icon-1087-nodesc",
      "styleHash": "22b35675"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.46347630000004,
        47.2549092,
        0
      ]
    },
    "properties": {
      "name": "Baskin-Robbins",
      "styleUrl": "#icon-1087-nodesc",
      "styleHash": "22b35675"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.5124217,
        47.1627429,
        0
      ]
    },
    "properties": {
      "name": "AMC Lakewood Mall 12",
      "styleUrl": "#icon-1001-nodesc",
      "styleHash": "4d909221"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.444817,
        47.257892,
        0
      ]
    },
    "properties": {
      "name": "The Grand Cinema",
      "styleUrl": "#icon-1001-nodesc",
      "styleHash": "4d909221"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.57536399999998,
        47.300734299999995,
        0
      ]
    },
    "properties": {
      "name": "Galaxy Theatres LLC",
      "styleUrl": "#icon-1001-nodesc",
      "styleHash": "4d909221"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43667499999998,
        47.24763009999999,
        0
      ]
    },
    "properties": {
      "name": "Tacoma Art Museum",
      "styleUrl": "#icon-1289-nodesc",
      "styleHash": "-737eba25"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4337137,
        47.245401,
        0
      ]
    },
    "properties": {
      "name": "Museum of Glass",
      "styleUrl": "#icon-1289-nodesc",
      "styleHash": "-737eba25"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43595399999997,
        47.244736,
        0
      ]
    },
    "properties": {
      "name": "Washington State History Museum",
      "styleUrl": "#icon-1289-nodesc",
      "styleHash": "-737eba25"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43667499999998,
        47.24763009999999,
        0
      ]
    },
    "properties": {
      "name": "Tacoma Art Museum",
      "styleUrl": "#icon-1289-nodesc",
      "styleHash": "-737eba25"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.52150770000003,
        47.304953000000005,
        0
      ]
    },
    "properties": {
      "name": "Point Defiance Zoo & Aquarium",
      "styleUrl": "#icon-1289-nodesc",
      "styleHash": "-737eba25"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.40975579999997,
        47.2345693,
        0
      ]
    },
    "properties": {
      "name": "World of Weed - Recreational Marijuana",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43498790000002,
        47.239882200000004,
        0
      ]
    },
    "properties": {
      "name": "Urban Bud Recreational Marijuana",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47319790000002,
        47.23254559999999,
        0
      ]
    },
    "properties": {
      "name": "Rainier On Pine",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47868230000002,
        47.2227331,
        0
      ]
    },
    "properties": {
      "name": "Two Five Trees",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.49060140000002,
        47.2496829,
        0
      ]
    },
    "properties": {
      "name": "Diamond Green Recreational Marijuana",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47528490000002,
        47.25545069999999,
        0
      ]
    },
    "properties": {
      "name": "Mary Mart",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47159699999997,
        47.2551946,
        0
      ]
    },
    "properties": {
      "name": "Emerald Leaves",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43499670000001,
        47.1926639,
        0
      ]
    },
    "properties": {
      "name": "Highway 7 Recreational Marijuana Store",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.46227790000002,
        47.1844553,
        0
      ]
    },
    "properties": {
      "name": "Clear Choice Cannabis",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43420000000003,
        47.162351,
        0
      ]
    },
    "properties": {
      "name": "Green Collar Cannabis",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43412439999997,
        47.1390255,
        0
      ]
    },
    "properties": {
      "name": "The Gallery",
      "styleUrl": "#icon-1379-nodesc",
      "styleHash": "48d9ce8d"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.49602670000002,
        47.2340769,
        0
      ]
    },
    "properties": {
      "name": "Park And Ride",
      "styleUrl": "#icon-1423-nodesc",
      "styleHash": "60178c3b"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.42432639999998,
        47.24052419999999,
        0
      ]
    },
    "properties": {
      "name": "Park & Ride",
      "styleUrl": "#icon-1423-nodesc",
      "styleHash": "60178c3b"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4831726,
        47.1609154,
        0
      ]
    },
    "properties": {
      "name": "I5/SR-512 Park-and-Ride",
      "styleUrl": "#icon-1423-nodesc",
      "styleHash": "60178c3b"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.46280189999997,
        47.205233,
        0
      ]
    },
    "properties": {
      "name": "Park and Ride 56th Ave West Lot",
      "styleUrl": "#icon-1423-nodesc",
      "styleHash": "60178c3b"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.48549980000001,
        47.20448200000001,
        0
      ]
    },
    "properties": {
      "name": "South Tacoma Station",
      "styleUrl": "#icon-1459-nodesc",
      "styleHash": "-2c6e1393"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4395143,
        47.2556222,
        0
      ]
    },
    "properties": {
      "name": "Dorky's Arcade",
      "styleUrl": "#icon-1235-nodesc",
      "styleHash": "7cee89da"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4834634,
        47.2063864,
        0
      ]
    },
    "properties": {
      "name": "Super Smash Video Games",
      "styleUrl": "#icon-1235-nodesc",
      "styleHash": "7cee89da"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.52483419999999,
        47.2411138,
        0
      ]
    },
    "properties": {
      "name": "Rollin' 253 Skate & Community Center",
      "styleUrl": "#icon-1051-nodesc",
      "styleHash": "427a79a7"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.46414099999998,
        47.2179519,
        0
      ]
    },
    "properties": {
      "name": "Krispy Kreme",
      "styleUrl": "#icon-1313-nodesc",
      "styleHash": "-395439cc"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.40728880000002,
        47.20603689999999,
        0
      ]
    },
    "properties": {
      "name": "Helen's Donuts & Ice Cream",
      "styleUrl": "#icon-1313-nodesc",
      "styleHash": "-395439cc"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47045479999996,
        47.255314,
        0
      ]
    },
    "properties": {
      "name": "Legendary Doughnuts",
      "styleUrl": "#icon-1313-nodesc",
      "styleHash": "-395439cc"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.52970070000003,
        47.25583169999999,
        0
      ]
    },
    "properties": {
      "name": "Pao's Donut & Coffee Shop",
      "styleUrl": "#icon-1313-nodesc",
      "styleHash": "-395439cc"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.52064999999999,
        47.1688633,
        0
      ]
    },
    "properties": {
      "name": "Original House of Donuts",
      "styleUrl": "#icon-1313-nodesc",
      "styleHash": "-395439cc"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47104919999998,
        47.2774955,
        0
      ]
    },
    "properties": {
      "name": "Dickman Mill Park",
      "styleUrl": "#icon-1285-nodesc",
      "styleHash": "-4c7fda06"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.53240900000002,
        47.3072501,
        0
      ]
    },
    "properties": {
      "name": "Point Defiance Park",
      "styleUrl": "#icon-1285-nodesc",
      "styleHash": "-4c7fda06"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.46878570000001,
        47.2162925,
        0
      ]
    },
    "properties": {
      "name": "Menchie's Frozen Yogurt",
      "styleUrl": "#icon-1087-nodesc",
      "styleHash": "22b35675"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.52795329999998,
        47.24403700000001,
        0
      ]
    },
    "properties": {
      "name": "Menchie's Frozen Yogurt",
      "styleUrl": "#icon-1087-nodesc",
      "styleHash": "22b35675"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43911149999998,
        47.14599769999999,
        0
      ]
    },
    "properties": {
      "name": "Marzano Italian Restaurant",
      "styleUrl": "#icon-1085-nodesc",
      "styleHash": "-556742fd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.44998260000001,
        47.2433938,
        0
      ]
    },
    "properties": {
      "name": "Ezell's Chicken",
      "styleUrl": "#icon-1085-nodesc",
      "styleHash": "-556742fd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4674561,
        47.2671981,
        0
      ]
    },
    "properties": {
      "name": "Sammy's Pizza",
      "styleUrl": "#icon-1089-nodesc",
      "styleHash": "c7ebd3a"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4422611,
        47.2576943,
        0
      ]
    },
    "properties": {
      "name": "Puget Sound Pizza",
      "styleUrl": "#icon-1089-nodesc",
      "styleHash": "c7ebd3a"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4368503,
        47.2435011,
        0
      ]
    },
    "properties": {
      "name": "Abella Pizzeria",
      "styleUrl": "#icon-1089",
      "styleHash": "38cc2d73",
      "description": "https://www.reddit.com/r/Tacoma/comments/4ez5q0/best_independent_pizza/"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.5036025,
        47.2335285,
        0
      ]
    },
    "properties": {
      "name": "Cerello's Pizza, Wine Cafe",
      "styleUrl": "#icon-1089-nodesc",
      "styleHash": "c7ebd3a"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47202449999996,
        47.2552641,
        0
      ]
    },
    "properties": {
      "name": "Half Pint Pizza Pub",
      "styleUrl": "#icon-1089-nodesc",
      "styleHash": "c7ebd3a"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43734380000001,
        47.2466426,
        0
      ]
    },
    "properties": {
      "name": "Elemental Pizza",
      "styleUrl": "#icon-1089-nodesc",
      "styleHash": "c7ebd3a"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.35868800000003,
        47.24338880000001,
        0
      ]
    },
    "properties": {
      "name": "Louie G's Pizzeria",
      "styleUrl": "#icon-1089-nodesc",
      "styleHash": "c7ebd3a"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.48414750000002,
        47.2084153,
        0
      ]
    },
    "properties": {
      "name": "Ah Badabing Pizzeria",
      "styleUrl": "#icon-1089-nodesc",
      "styleHash": "c7ebd3a"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4335885,
        47.1614556,
        0
      ]
    },
    "properties": {
      "name": "Pizza Hut",
      "styleUrl": "#icon-1089-nodesc",
      "styleHash": "c7ebd3a"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4854646,
        47.2078645,
        0
      ]
    },
    "properties": {
      "name": "Domino's Pizza",
      "styleUrl": "#icon-1089-nodesc",
      "styleHash": "c7ebd3a"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47789620000003,
        47.2232595,
        0
      ]
    },
    "properties": {
      "name": "38th Street Goodwill",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.47181399999998,
        47.21603200000001,
        0
      ]
    },
    "properties": {
      "name": "Nordstrom Tacoma Mall",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.44675400000001,
        47.222859,
        0
      ]
    },
    "properties": {
      "name": "7-Eleven",
      "styleUrl": "#icon-1085-nodesc",
      "styleHash": "-556742fd"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.45217830000003,
        47.1914746,
        0
      ]
    },
    "properties": {
      "name": "Light It Bright Products LLC",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.475008,
        47.22476700000001,
        0
      ]
    },
    "properties": {
      "name": "Michaels",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4754815,
        47.2246144,
        0
      ]
    },
    "properties": {
      "name": "Ross Dress for Less",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.51526209999997,
        47.16390990000001,
        0
      ]
    },
    "properties": {
      "name": "Bed Bath & Beyond",
      "styleUrl": "#icon-1095-nodesc",
      "styleHash": "-5ec4e2c0"
    }
  },

  // Tacoma Favorite Houses (2016-04-22)
  {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [
              -122.45684499999999,
              47.244173,
              0
          ]
      },
      "properties": {
          "name": "1725 S Ainsworth Ave",
          category: PLACE_TYPES.HOUSE.type,
          favorite: true,
          "styleUrl": "#icon-960-62AF44",
          "styleHash": "3ae00934",
          "description": "https://www.redfin.com/WA/Tacoma/1725-S-Ainsworth-Ave-98405/home/2710206/nwmls-923227"
      }
  },
  {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [
              -122.407761,
              47.234632,
              0
          ]
      },
      "properties": {
          "name": "1632 E 32nd St",
          category: PLACE_TYPES.HOUSE.type,
          favorite: true,
          "styleUrl": "#icon-960-CDDC39-nodesc",
          "styleHash": "-6951ec2d"
      }
  },
  {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [
              -122.43748600000002,
              47.201451000000006,
              0
          ]
      },
      "properties": {
          "name": "6109 S Fawcett Ave",
          category: PLACE_TYPES.HOUSE.type,
          favorite: true,
          "styleUrl": "#icon-960-F8971B-nodesc",
          "styleHash": "7d18811d"
      }
  },
  {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [
              -122.45269300000001,
              47.21576999999999,
              0
          ]
      },
      "properties": {
          "name": "1401 S 46th St",
          category: PLACE_TYPES.HOUSE.type,
          favorite: true,
          "styleUrl": "#icon-960-F4B400-nodesc",
          "styleHash": "1d2b331f"
      }
  },
  {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [
              -122.451482,
              47.212795,
              0
          ]
      },
      "properties": {
          "name": "4822 S M St",
          category: PLACE_TYPES.HOUSE.type,
          favorite: true,
          "styleUrl": "#icon-960-F8971B",
          "styleHash": "53e76fb4",
          "description": "Modern (lots of glass/light, 2 garages)"
      }
  },
  // (END TACOMA FAVORITE HOUSES)

  // Tacoma Bike Lanes
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.4821949005127,
          47.25007697340892
        ],
        [
          -122.46288299560545,
          47.25013523522755
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.44648933410643,
          47.248358220927344
        ],
        [
          -122.46292591094969,
          47.246552014150915
        ],
        [
          -122.47631549835205,
          47.24649374839074
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.43950486183167,
          47.25728638668995
        ],
        [
          -122.43723034858705,
          47.247258481393324
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.44034171104431,
          47.25750483843771
        ],
        [
          -122.4404489994049,
          47.25788348599887
        ],
        [
          -122.44054555892944,
          47.25805096386416
        ],
        [
          -122.44250893592834,
          47.26108731851109
        ],
        [
          -122.44590997695923,
          47.26472780195099
        ],
        [
          -122.44784116744995,
          47.26552867471177
        ],
        [
          -122.44849562644957,
          47.26460402962516
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.44971871376039,
          47.262791095925735
        ],
        [
          -122.44713306427,
          47.26410165662576
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.4512529373169,
          47.265492271667306
        ],
        [
          -122.45542645454405,
          47.266861008913104
        ],
        [
          -122.45601654052734,
          47.26677364376335
        ],
        [
          -122.45657444000244,
          47.26676636332771
        ],
        [
          -122.45704650878905,
          47.266861008913104
        ],
        [
          -122.45745420455934,
          47.26702845838036
        ],
        [
          -122.4577224254608,
          47.267217748444644
        ],
        [
          -122.45806574821472,
          47.26761088718443
        ],
        [
          -122.45816230773924,
          47.26773465247965
        ],
        [
          -122.46526479721068,
          47.270064298161515
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.47006058692934,
          47.274745119930394
        ],
        [
          -122.48331069946288,
          47.274701443880325
        ],
        [
          -122.48420119285585,
          47.27477423727707
        ],
        [
          -122.48490929603577,
          47.274832471922366
        ],
        [
          -122.48885750770569,
          47.27486886854312
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.48395442962645,
          47.27471600256768
        ],
        [
          -122.48397588729858,
          47.26546314921372
        ],
        [
          -122.48402416706085,
          47.26458582778813
        ],
        [
          -122.48399734497069,
          47.26177902962862
        ],
        [
          -122.48401343822479,
          47.26085795967173
        ],
        [
          -122.48402416706085,
          47.25993323300268
        ],
        [
          -122.48401880264282,
          47.259230575561645
        ],
        [
          -122.48401880264282,
          47.25916140152699
        ],
        [
          -122.48393833637238,
          47.25878640387143
        ],
        [
          -122.48376667499542,
          47.258418685144676
        ],
        [
          -122.48363792896272,
          47.25809829446921
        ],
        [
          -122.48362183570862,
          47.25703880695296
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.484233379364,
          47.27475785877154
        ],
        [
          -122.48420923948288,
          47.273589512298486
        ],
        [
          -122.48422265052795,
          47.272912514688066
        ],
        [
          -122.48421996831894,
          47.27201347759276
        ],
        [
          -122.48420655727386,
          47.27106710625585
        ],
        [
          -122.48420119285585,
          47.270140737922965
        ],
        [
          -122.48420655727386,
          47.26921071332574
        ],
        [
          -122.48420387506486,
          47.26826975204339
        ],
        [
          -122.4841985106468,
          47.267346974926646
        ],
        [
          -122.48419582843779,
          47.266411440875274
        ],
        [
          -122.4841985106468,
          47.26545950890592
        ],
        [
          -122.48423069715498,
          47.26458218742
        ],
        [
          -122.48421996831894,
          47.26362476190383
        ],
        [
          -122.48420923948288,
          47.2627055443075
        ],
        [
          -122.48420119285585,
          47.261775389067466
        ],
        [
          -122.48419314622878,
          47.26085431904722
        ],
        [
          -122.48420119285585,
          47.259931412658645
        ],
        [
          -122.48416900634766,
          47.25920509040149
        ],
        [
          -122.48414486646652,
          47.25910132926567
        ],
        [
          -122.48410195112228,
          47.25901395130938
        ],
        [
          -122.48400002717973,
          47.25887196182281
        ],
        [
          -122.48394906520842,
          47.258817350380454
        ]
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -122.48887896537781,
          47.26734151465912
        ],
        [
          -122.48409390449524,
          47.267356075371225
        ],
        [
          -122.47940540313719,
          47.26734879501568
        ],
        [
          -122.47891187667845,
          47.26746528058422
        ],
        [
          -122.4783968925476,
          47.267538083934404
        ],
        [
          -122.47776389122009,
          47.2675308036039
        ]
      ]
    }
  },
  // (END OF TACOMA BIKE LANES)

  // Tacoma Groceries
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.52452870000002,
        47.2565963,
        0
      ]
    },
    "properties": {
      "name": "Grocery Outlet",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.48819400000002,
        47.269671,
        0
      ]
    },
    "properties": {
      "name": "Safeway",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.48975289999998,
        47.2695149,
        0
      ]
    },
    "properties": {
      "name": "Metropolitan Market Proctor",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.45528300000002,
        47.251105,
        0
      ]
    },
    "properties": {
      "name": "Safeway",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.45150699999999,
        47.222142,
        0
      ]
    },
    "properties": {
      "name": "Safeway",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.53783729999998,
        47.2230521,
        0
      ]
    },
    "properties": {
      "name": "Trader Joe's",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43573370000003,
        47.190604699999994,
        0
      ]
    },
    "properties": {
      "name": "Fred Meyer",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.45991100000005,
        47.19519199999999,
        0
      ]
    },
    "properties": {
      "name": "WinCo Foods",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4975346,
        47.24401169999999,
        0
      ]
    },
    "properties": {
      "name": "Fred Meyer",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.52909469999997,
        47.2442136,
        0
      ]
    },
    "properties": {
      "name": "Fred Meyer",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43615659999999,
        47.15636810000001,
        0
      ]
    },
    "properties": {
      "name": "Quality Food Center",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.4890709,
        47.2721235,
        0
      ]
    },
    "properties": {
      "name": "Proctor Farmers' Market",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.51832539999997,
        47.1640535,
        0
      ]
    },
    "properties": {
      "name": "Safeway",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.48840810000003,
        47.157411700000004,
        0
      ]
    },
    "properties": {
      "name": "Grocery Outlet",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.43272220000001,
        47.1171747,
        0
      ]
    },
    "properties": {
      "name": "Albertsons",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.40705400000003,
        47.19005199999999,
        0
      ]
    },
    "properties": {
      "name": "Safeway",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.44070229999998,
        47.2069364,
        0
      ]
    },
    "properties": {
      "name": "Safeway",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.5393067,
        47.22139569999999,
        0
      ]
    },
    "properties": {
      "name": "Safeway",
      "styleUrl": "#icon-1101-nodesc",
      "styleHash": "-694f2421"
    }
  },
  // (END OF TACOMA GROCERIES)

  /* eslint-enable */
];
