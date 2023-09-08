import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Segment } from 'semantic-ui-react';
import { refreshRecommendations } from '@interaktivgmbh/volto-recommendations/actions';
import { defineMessages, injectIntl } from 'react-intl';
import { Loader } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { Toast } from '@plone/volto/components';

const messages = defineMessages({
  trans_label_refresh_recommendations: {
    id: 'trans_label_refresh_recommendations',
    defaultMessage: 'Refresh Recommendations',
  },
  trans_label_refreshing_recommendations: {
    id: 'trans_label_refreshing_recommendations',
    defaultMessage: 'Refreshing Recommendations this may take a while.',
  },
  trans_label_refreshing_succesful: {
    id: 'trans_label_refreshing_succesful',
    defaultMessage: 'Recommendations successfully Refreshed',
  },
});

const RecommendationsRefreshWidget = ({
  value,
  id,
  onChange,
  required,
  title,
  description,
  intl,
}) => {
  const dispatch = useDispatch();
  const recommendationsRefreshed = useSelector(
    (state) => state.recommendations?.refreshed || false,
  );
  const recommendationsLoading = useSelector(
    (state) => state.recommendations?.loading || false,
  );
  const recommendationsLoaded = useSelector(
    (state) => state.recommendations?.loaded || false,
  );

  const dispatchRefreshRecommendations = () => {
    dispatch(refreshRecommendations());
  };

  const toastRefreshSuccess = () => {
    toast.success(
      <Toast
        success
        title={intl.formatMessage(messages.trans_label_refreshing_succesful)}
      />,
    );
  };

  useEffect(() => {
    if (recommendationsRefreshed === true) {
      toastRefreshSuccess();
    }

    // TODO Error Handling
  }, [recommendationsRefreshed]);

  return (
    <div className="recommendation-configuration-wrapper">
      <Segment>
        <Loader active={recommendationsLoading} inline="centered">
          {intl.formatMessage(messages.trans_label_refreshing_recommendations)}
        </Loader>

        <Label
          className="button"
          onClick={() => dispatchRefreshRecommendations()}
        >
          {intl.formatMessage(messages.trans_label_refresh_recommendations)}
        </Label>
      </Segment>
    </div>
  );
};

export default injectIntl(RecommendationsRefreshWidget);
