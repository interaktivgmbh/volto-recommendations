import React from "react";
import { Link, useLocation } from "react-router-dom";
import { defineMessages, injectIntl } from "react-intl";
import { Message } from "semantic-ui-react";
import { flattenToAppURL } from "@plone/volto/helpers";
import { useDispatch, useSelector} from 'react-redux';
import { getRecommendations } from '@interaktivgmbh/volto-recommendations/actions'
import { Label } from 'semantic-ui-react';
import { getBaseUrl } from '@plone/volto/helpers';


const messages = defineMessages({
  trans_label_recommendations: {
    id: 'trans_label_recommendations',
    defaultMessage: 'Recommendations',
  },
});


const RecommendationsBody = ({ data, id, isEditMode, intl }) => {

  const location = useLocation();
  const dispatch = useDispatch();
  const recommendations = useSelector((state) => state.recommendations?.items || [], );
  const debug = useSelector((state) => state.recommendations?.debug || false, );

  React.useEffect(() => {
    dispatch(getRecommendations(getBaseUrl(location.pathname), data.max));
  }, [data.max]);

  return (
    <div className="recommendations-wrapper">
      <header>{data.title || intl.formatMessage(messages.trans_label_recommendations)}</header>

      {recommendations.map((recommendation) => (
        <Label
          key={recommendation['index']}
          as={Link}
          to={flattenToAppURL(recommendation['url'])}
        >
          {recommendation['title']}
          {debug && (<span>({recommendation['distance']})</span>)}
        </Label>
      ))}
    </div>
  )
};

export default injectIntl(RecommendationsBody);
