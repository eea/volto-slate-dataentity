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
        'specifier',
        'textTemplate',
        'placeholder',
      ],
    },
    {
      id: 'readmore',
      title: 'Readmore',
      fields: [
        'withReadmore',
        'maxChars',
      ],
    },
  ],
  properties: {
    provider_url: {
      widget: 'pick_provider',
      title: 'Data provider',
    },
    column: {
      title: 'Column',
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
  },
  required: ['description'],
};
