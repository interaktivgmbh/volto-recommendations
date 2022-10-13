
import {
  GET_RECOMMENDATIONS,
  REFRESH_RECOMMENDATIONS,
  IMPORT_NEWSGROUPS
} from '@interaktiv/volto-recommendations/constants/ActionTypes'

export function getRecommendations(contextURL, max) {
  const path = `${contextURL}/@recommendations`;
  var data = {};
  if (max) {
    data['num'] = parseInt(max);
  }

  return {
    type: GET_RECOMMENDATIONS,
    context: contextURL,
    request: {
      op: 'post',
      path: path,
      data: data
    },
  };

}

export function refreshRecommendations() {
  const path = '/@refresh-recommendations';

  return {
    type: REFRESH_RECOMMENDATIONS,
    request: {
      op: 'post',
      path: path
    },
  };

}

export function importNewsgroups() {
  const path = '/@import-newsgroups';

  return {
    type: IMPORT_NEWSGROUPS,
    request: {
      op: 'post',
      path: path
    },
  };

}
