
import defaultReducers from '@plone/volto/reducers';

import recommendations from './recommendations/recommendations';

const reducers = {
    ...defaultReducers,
    recommendations,
};

export default reducers;
