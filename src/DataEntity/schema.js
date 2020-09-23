export const DataEntitySchema = {
  title: 'Data entity',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['provider_url', 'column'],
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
  },
  required: ['description'],
};
