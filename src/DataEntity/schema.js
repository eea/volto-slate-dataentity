import React from 'react';

export const DataEntitySchema = {
  title: 'Data entity',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'provider_url',
        'column',
        'row',
        'specifier',
        'textTemplate',
        'placeholder',
      ],
    },
    {
      id: 'readmore',
      title: 'Readmore',
      fields: ['withReadmore', 'maxChars'],
    },
    {
      id: 'data_query',
      title: 'Data query',
      fields: [
        'has_data_query_by_context',
        'has_data_query_by_provider',
        'data_query',
      ],
    },
  ],
  properties: {
    provider_url: {
      title: 'Data provider',
      widget: 'object_by_path',
    },
    column: {
      title: 'Column',
      description: 'Column to be shown',
      choices: [],
    },
    row: {
      title: 'Row',
      description:
        'Value of the column. By default the first value will be used.',
      choices: [],
    },
    specifier: {
      title: 'Format specifier',
      description: (
        <>
          See{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/d3/d3-3.x-api-reference/blob/master/Formatting.md#d3_format"
          >
            D3 format documentation
          </a>
        </>
      ),
    },
    textTemplate: {
      title: 'Text template',
      description: 'Add suffix/prefix to text. Use {} for value placeholder',
    },
    placeholder: {
      title: 'Placeholder',
    },
    withReadmore: {
      title: 'Enabled',
      type: 'boolean',
      default: false,
    },
    maxChars: {
      title: 'Max chars',
      type: 'number',
    },
    has_data_query_by_context: {
      title: 'Has data_query by context',
      type: 'boolean',
      description:
        'This flag will denote whether or not the connector will be filtered by data_query applied on the page',
      defaultValue: true,
    },
    has_data_query_by_provider: {
      title: 'Has data_query by provider',
      type: 'boolean',
      description:
        'This flag will denote whether or not the connector will be filtered by data_query applied on the connector itself',
      defaultValue: true,
    },
    data_query: {
      title: 'Data query',
      widget: 'data_query',
    },
  },
  required: [],
};
