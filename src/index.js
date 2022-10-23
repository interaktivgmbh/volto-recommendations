import {
  RecommendationsEditBlock,
  RecommendationsViewBlock,
} from './Recommendations';
import downloadSVG from '@plone/volto/icons/download.svg';
import reducers from '@interaktiv/volto-recommendations/reducers';
import RecommendationsRefreshWidget from '@interaktiv/volto-recommendations/widgets/RecommendationsRefreshWidget';
import RecommendationsImportTestDataWidget from '@interaktiv/volto-recommendations/widgets/RecommendationsImportTestDataWidget';

export { RecommendationsRefreshWidget, RecommendationsImportTestDataWidget };

const applyConfig = (config) => {
  config.widgets.id = {
    ...config.widgets.id,
    dummy_refresh: RecommendationsRefreshWidget,
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
