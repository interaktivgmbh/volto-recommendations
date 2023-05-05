import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Segment, List } from 'semantic-ui-react';
import { getRecommenderInfo } from '@interaktiv/volto-recommendations/actions';
import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
  trans_label_error: {
    id: 'trans_label_error',
    defaultMessage: 'Error',
  },
  trans_label_info_last_refresh: {
    id: 'trans_label_info_last_refresh',
    defaultMessage: 'Last refresh on:',
  },
  trans_label_info_vectors: {
    id: 'trans_label_info_vectors',
    defaultMessage: 'Number of Vectorized Content:',
  },
  trans_label_info_dimensions: {
    id: 'trans_label_info_dimensions',
    defaultMessage: 'Number of Dimensions:',
  },
});

const RecommendationsInfoWidget = ({
  value,
  id,
  onChange,
  required,
  title,
  description,
  intl,
}) => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.recommendations?.info || {});

  React.useEffect(() => {
    dispatch(getRecommenderInfo());
  }, []);

  if (!info.error) {
    return (
      <div className="recommendation-configuration-wrapper">
        <Segment>
          <List>
            <List.Item>
              <Label>
                {intl.formatMessage(
                  messages.trans_label_info_last_refresh
                )}
              </Label>
              {info.last_refresh}
            </List.Item>
            <List.Item>
              <Label>
                {intl.formatMessage(messages.trans_label_info_vectors)}
              </Label>
              {info.vectors}
            </List.Item>
            <List.Item>
              <Label>
                {intl.formatMessage(messages.trans_label_info_dimensions)}
              </Label>{' '}
              {info.dimensions}
            </List.Item>
          </List>
        </Segment>
      </div>
    );
  } else {
    return (
      <div className="recommendation-configuration-wrapper">
        <Segment><Label>Fehler:</Label> {info.error}</Segment>
      </div>
    );
  }
};

export default injectIntl(RecommendationsInfoWidget);
