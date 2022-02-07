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
      fields: ['data_query'],
    },
  ],
  properties: {
    provider_url: {
      title: 'Data provider',
      widget: 'object_by_path',
    },
    column: {
      title: 'Column',
      choices: [],
    },
    row: {
      title: 'Row',
      default: 0,
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
    data_query: {
      title: 'Data query',
      widget: 'data_query',
    },
  },
  required: ['description'],
};
