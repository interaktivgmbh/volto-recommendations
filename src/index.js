import {
  RecommendationsEditBlock,
  RecommendationsViewBlock,
} from './Recommendations';
import downloadSVG from '@plone/volto/icons/download.svg';
import reducers from '@interaktivgmbh/volto-recommendations/reducers';
import RecommendationsRefreshWidget from '@interaktivgmbh/volto-recommendations/widgets/RecommendationsRefreshWidget';
import RecommendationsInfoWidget from '@interaktivgmbh/volto-recommendations/widgets/RecommendationsInfoWidget';
import RecommendationsImportTestDataWidget from '@interaktivgmbh/volto-recommendations/widgets/RecommendationsImportTestDataWidget';

export {
  RecommendationsRefreshWidget,
  RecommendationsInfoWidget,
  RecommendationsImportTestDataWidget,
};

const applyConfig = (config) => {
  config.widgets.id = {
    ...config.widgets.id,
    dummy_refresh: RecommendationsRefreshWidget,
    dummy_info: RecommendationsInfoWidget,
    dummy_import_testdata: RecommendationsImportTestDataWidget,
  };

  config.addonReducers = { ...config.addonReducers, ...reducers };

  config.blocks.blocksConfig.recommendations = {
    id: 'recommendations',
    title: 'Recommendations',
    icon: downloadSVG,
    group: 'common',
    view: RecommendationsViewBlock,
    edit: RecommendationsEditBlock,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
};

export default applyConfig;
