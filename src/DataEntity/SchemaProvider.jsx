import React from 'react';
import { connectBlockToProviderData } from 'volto-datablocks/hocs';

class SchemaProvider extends React.Component {
  getSchema = (schema) => {
    if (!this.props.provider_data) return schema;
    const provider_data = this.props.provider_data || {};

    console.log('data', provider_data);

    const select_field = 'Ecosystem_level2';
    const choices = Array.from(
      new Set(provider_data?.[select_field] || []),
    ).map((n) => [n, n]);

    const newSchema = JSON.parse(JSON.stringify(schema));
    newSchema.properties.column.choices = choices;
  };

  render() {
    console.log('render', this.props);
    const { editSchema, children } = this.props;
    return children(editSchema);
  }
}

export default connectBlockToProviderData(SchemaProvider);
