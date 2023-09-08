import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Segment } from 'semantic-ui-react';
import { importNewsgroups } from '@interaktivgmbh/volto-recommendations/actions';
import { defineMessages, injectIntl } from 'react-intl';
import { Loader } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { Toast } from '@plone/volto/components';

const messages = defineMessages({
  trans_label_import_newsgroups: {
    id: 'trans_label_import_newsgroups',
    defaultMessage: 'Import Newsgroups',
  },
  trans_label_importing_newsgroups: {
    id: 'trans_label_importing_newsgroups',
    defaultMessage: 'Importing Newsgroups this may take a while.',
  },
  trans_label_importing_newsgroups_succesful: {
    id: 'trans_label_importing_newsgroups_succesful',
    defaultMessage: 'Newsgroups successfully Imported.',
  },
});

const RecommendationsImportTestDataWidget = ({
  value,
  id,
  onChange,
  required,
  title,
  description,
  intl,
}) => {
  const dispatch = useDispatch();
  const newsgroupsImported = useSelector(
    (state) => state.recommendations?.newsgroups_imported || false,
  );
  const newsgroupsLoading = useSelector(
    (state) => state.recommendations?.importing || false,
  );
  useSelector((state) => state.recommendations?.imported || false);
  const dispatchImportNewsgroups = () => {
    dispatch(importNewsgroups());
  };

  const toastImportSuccess = () => {
    toast.success(
      <Toast
        success
        title={intl.formatMessage(
          messages.trans_label_importing_newsgroups_succesful,
        )}
      />,
    );
  };

  useEffect(() => {
    if (newsgroupsImported === true) {
      toastImportSuccess();
    }

    // TODO Error Handling
  }, [newsgroupsImported]);

  return (
    <div className="recommendation-configuration-wrapper">
      <Segment>
        <Loader active={newsgroupsLoading} inline="centered">
          {intl.formatMessage(messages.trans_label_importing_newsgroups)}
        </Loader>

        <Label className="button" onClick={() => dispatchImportNewsgroups()}>
          {intl.formatMessage(messages.trans_label_import_newsgroups)}
        </Label>
      </Segment>
    </div>
  );
};

export default injectIntl(RecommendationsImportTestDataWidget);
