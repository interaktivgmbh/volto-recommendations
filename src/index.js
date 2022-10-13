import {RecommendationsEditBlock, RecommendationsViewBlock} from './Recommendations';
import downloadSVG from '@plone/volto/icons/download.svg';
import reducers from '@interaktiv/volto-recommendations/reducers';
import RecommendationsConfigurationWidget
  from '@interaktiv/volto-recommendations/widget/RecommendationsConfigurationWidget';

export {
  RecommendationsConfigurationWidget
};


const applyConfig = (config) => {

  config.widgets.id = {
    ...config.widgets.id,
    recommendation_configuration: RecommendationsConfigurationWidget,
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
