import React from 'react';
import { connectBlockToProviderData } from 'volto-datablocks/hocs';

class SchemaProvider extends React.Component {
  getSchema = (schema) => {
    if (!this.props.provider_data) return schema;
    const provider_data = this.props.provider_data || {};

    const choices = Array.from(
      new Set(Object.keys(provider_data || {})),
    ).map((n) => [n, n]);

    return {
      ...schema,
      properties: {
        ...schema.properties,
        column: {
          ...schema.properties.column,
          choices,
        },
      },
    };
  };

  render() {
    const { editSchema, children } = this.props;
    return children(this.getSchema(editSchema));
  }
}

export default connectBlockToProviderData(SchemaProvider);
