import {
  GET_RECOMMENDATIONS,
  REFRESH_RECOMMENDATIONS,
  GET_RECOMMENDER_INFO,
  IMPORT_NEWSGROUPS,
} from '@interaktivgmbh/volto-recommendations/constants/ActionTypes'

const initialState = {
  items: [],
  info: {},
  debug: false,
};

// DO NOT MUTATE (the state)
// https://redux.js.org/usage/structuring-reducers/immutable-update-patterns

export default function recommendations(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_RECOMMENDATIONS}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };
    case `${GET_RECOMMENDATIONS}_SUCCESS`:
      return {
        ...state,
        error: null,
        items: action.result.recommendations,
        debug: action.result.debug,
        loaded: true,
        loading: false,
      };
    case `${GET_RECOMMENDATIONS}_FAIL`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: false,
      };

    case `${REFRESH_RECOMMENDATIONS}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
        refreshed: false,
      };
    case `${REFRESH_RECOMMENDATIONS}_SUCCESS`:
      return {
        ...state,
        error: null,
        loaded: true,
        loading: false,
        refreshed: action.result.refreshed,
      };
    case `${REFRESH_RECOMMENDATIONS}_FAIL`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: false,
        refreshed: false,
      };

    case `${GET_RECOMMENDER_INFO}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };
    case `${GET_RECOMMENDER_INFO}_SUCCESS`:
      return {
        ...state,
        error: null,
        info: action.result.info,
        loaded: true,
        loading: false,
      };
    case `${GET_RECOMMENDER_INFO}_FAIL`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: false,
      };

    case `${IMPORT_NEWSGROUPS}_PENDING`:
      return {
        ...state,
        error: null,
        imported: false,
        importing: true,
        newsgroups_imported: false,
      };
    case `${IMPORT_NEWSGROUPS}_SUCCESS`:
      return {
        ...state,
        error: null,
        imported: true,
        importing: false,
        newsgroups_imported: action.result.imported,
      };
    case `${IMPORT_NEWSGROUPS}_FAIL`:
      return {
        ...state,
        error: null,
        imported: false,
        importing: false,
        newsgroups_imported: false,
      };

    default:
      return state;
  }
}
