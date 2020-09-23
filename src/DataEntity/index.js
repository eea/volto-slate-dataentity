import { defineMessages } from 'react-intl'; // , defineMessages
import { makeInlineElementPlugin } from 'volto-slate/components/ElementEditor';
import { DataEntitySchema } from './schema';
import { withDataEntity } from './extensions';
import { DATAENTITY } from '../constants';
import { DataEntityElement } from './render';
import SchemaProvider from './SchemaProvider';
import collectionSVG from '@plone/volto/icons/collection.svg';

import './styles.less';

const messages = defineMessages({
  edit: {
    id: 'Edit data entity',
    defaultMessage: 'Edit data entity',
  },
  delete: {
    id: 'Remove data entity',
    defaultMessage: 'Remove data entity',
  },
});

export default function install(config) {
  const opts = {
    pluginId: DATAENTITY,
    elementType: DATAENTITY,
    element: DataEntityElement,
    isInlineElement: true,
    editSchema: DataEntitySchema,
    schemaProvider: SchemaProvider,
    extensions: [withDataEntity],
    hasValue: (formData) => !!formData.footnote,
    toolbarButtonIcon: collectionSVG,
    title: 'Data entity',
    messages,
  };
  const [installDataEntityEditor] = makeInlineElementPlugin(opts);
  config = installDataEntityEditor(config);

  const { slate } = config.settings;

  slate.toolbarButtons = [...(slate.toolbarButtons || []), 'dataentity'];
  slate.expandedToolbarButtons = [
    ...(slate.expandedToolbarButtons || []),
    'dataentity',
  ];

  return config;
}
