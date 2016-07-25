// Constants
import {
  ACTIONS as MAP_ACTIONS,
} from 'constants/map';

const INITIAL_STATE = {
  selectedFeature: null,
  disabledCategories: [],

  maps: {}, // maps (which are parents of features)
  features: {}, // map features (i.e. markers)
  mapProps: { // map position/bounds/etc
    center: [47.258728, -122.465973],
    zoom: 13,
  },
  searchFeatures: {}, // search results
};

const actions = {
  [MAP_ACTIONS.SET_MAP]: (state, action) => ({
    ...state,
    maps: {
      ...state.maps,
      // eslint was bitching about `map` being defined in
      // the parent scope (???), so let's just use the more
      // verbose `action.map`.
      [action.map._id]: action.map,
    },
  }),

  [MAP_ACTIONS.SET_MAPS]: (state, action) => ({
    ...state,
    maps: action.maps,
  }),

  [MAP_ACTIONS.SET_SEARCH_FEATURES]: (state, action) => ({
    ...state,
    searchFeatures: action.features,
  }),

  [MAP_ACTIONS.SET_FEATURES]: (state, action) => {
    const { features } = action;

    return {
      ...state,
      features,
    };
  },

  [MAP_ACTIONS.SET_FEATURE]: (state, action) => {
    const { feature } = action;

    return {
      ...state,
      features: {
        ...state.features,
        [feature.properties.place_id]: feature,
      },
    };
  },

  [MAP_ACTIONS.SET_MAP_PROPS]: (state, action) => ({
    ...state,
    mapProps: action.props,
  }),

  [MAP_ACTIONS.SET_SELECTED_FEATURE]: (state, action) => ({
    ...state,
    selectedFeature: action.featureId,
  }),

  [MAP_ACTIONS.CLEAR_SELECTED_FEATURE]: (state) => ({
    ...state,
    selectedFeature: INITIAL_STATE.selectedFeature,
  }),

  [MAP_ACTIONS.TOGGLE_CATEGORY]: (state, action) => {
    const { category } = action;

    // We'll modify this disabledCategories with the new state based
    // on the provided category.
    const disabledCategories = [...state.disabledCategories];

    const isDisabled = (disabledCategories.indexOf(category) > -1);
    if (isDisabled) {
      disabledCategories.splice(disabledCategories.indexOf(category), 1);
    } else {
      disabledCategories.push(category);
    }

    return {
      ...state,
      disabledCategories,
    };
  },

  [MAP_ACTIONS.TOGGLE_FAVORITE]: (state, action) => {
    const { featureId } = action;

    return {
      ...state,
      features: {
        ...state.features,
        [featureId]: {
          ...state.features[featureId],
          properties: {
            ...state.features[featureId].properties,
            favorite: !state.features[featureId].properties.favorite,
          },
        },
      },
    };
  },
};

export default function map(state = INITIAL_STATE, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action);
  }

  return state;
}
