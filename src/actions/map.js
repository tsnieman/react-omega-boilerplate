import { ACTIONS as MAP_ACTIONS } from 'constants/map';

export function createMap(map, options) {
  return {
    type: MAP_ACTIONS.CREATE_MAP,
    map,
    options,
  };
}

export function setMap(map) {
  return {
    type: MAP_ACTIONS.SET_MAP,
    map,
  };
}

export function setMaps(maps) {
  return {
    type: MAP_ACTIONS.SET_MAPS,
    maps,
  };
}

export function getMap(mapId) {
  return {
    type: MAP_ACTIONS.GET_MAP,
    mapId,
  };
}

export function getMaps() {
  return {
    type: MAP_ACTIONS.GET_MAPS,
  };
}

// TODO unused? (just a stub?)
export function updateMap(map) {
  return {
    type: MAP_ACTIONS.UPDATE_MAP,
    map,
  };
}

export function setFeatures(features) {
  return {
    type: MAP_ACTIONS.SET_FEATURES,
    features,
  };
}

export function setSearchFeatures(features) {
  return {
    type: MAP_ACTIONS.SET_SEARCH_FEATURES,
    features,
  };
}

export function clearSearchFeatures() {
  return {
    type: MAP_ACTIONS.SET_SEARCH_FEATURES,
    features: [],
  };
}

export function saveSearchFeature({ mapId, feature }) {
  return {
    type: MAP_ACTIONS.SAVE_SEARCH_FEATURE,
    mapId,
    feature,
  };
}

export function setFeature(feature) {
  return {
    type: MAP_ACTIONS.SET_FEATURE,
    feature,
  };
}

export function updateFeature(feature) {
  return {
    type: MAP_ACTIONS.UPDATE_FEATURE,
    feature,
  };
}

export function deleteFeature(featureId) {
  return {
    type: MAP_ACTIONS.DELETE_FEATURE,
    featureId,
  };
}

export function setMapProps(props) {
  return {
    type: MAP_ACTIONS.SET_MAP_PROPS,
    props,
  };
}

export function setSelectedFeature(featureId) {
  return {
    type: MAP_ACTIONS.SET_SELECTED_FEATURE,
    featureId,
  };
}

export function clearSelectedFeature(featureId) {
  return {
    type: MAP_ACTIONS.SET_SELECTED_FEATURE,
    featureId,
  };
}

export function toggleCategory(category) {
  return {
    type: MAP_ACTIONS.TOGGLE_CATEGORY,
    category,
  };
}

export function toggleFavorite(featureId) {
  return {
    type: MAP_ACTIONS.TOGGLE_FAVORITE,
    featureId,
  };
}
