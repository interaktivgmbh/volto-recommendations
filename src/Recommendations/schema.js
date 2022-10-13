import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'trans_schema_label_title',
    defaultMessage: 'Title',
  },
  max: {
    id: 'trans_schema_label_max',
    defaultMessage: 'Max Elements',
  },
});

export const schemaRecommendations = ({ intl }) => {
  return {
    required: [],
    fieldsets: [
      {
        id: "default",
        title: "Default",
        fields: ["title", "max"],
      },
    ],
    properties: {
      title: {
        title: intl.formatMessage(messages.title),
        widget: "headline_widget",
      },
      max: {
        title: intl.formatMessage(messages.max),
        type: 'integer',
      },
    },
  };
};

export default schemaRecommendations;
