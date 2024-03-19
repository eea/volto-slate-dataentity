import React from 'react';
import { compose } from 'redux';
import { BodyClass } from '@plone/volto/helpers';
import { connectToProviderData } from '@eeacms/volto-datablocks/hocs';

class SchemaProvider extends React.Component {
  getSchema = (schema = {}) => {
    if (!this.props.provider_data) return schema;
    const provider_data = this.props.provider_data || {};
    const column = this.props.data.column;

    const columns = Array.from(new Set(Object.keys(provider_data || {}))).map(
      (n) => [n, n],
    );

    const rows =
      column && provider_data[column]
        ? provider_data[column].map((value, index) => [
            `row-${index + 1}`,
            value,
          ])
        : [];

    return {
      ...schema,
      properties: {
        ...schema.properties,
        column: {
          ...schema.properties.column,
          choices: columns,
        },
        row: {
          ...schema.properties.row,
          default: rows?.length ? 'row-1' : null,
          choices: rows,
        },
      },
    };
  };

  render() {
    const { editSchema, children } = this.props;
    const form = () => {
      return (
        <>
          <BodyClass className="with-dataentity-sidebar" />
          {children(this.getSchema(editSchema))}
        </>
      );
    };
    return form();
  }
}

export default compose(
  connectToProviderData((props) => {
    return {
      provider_url: props.data.provider_url,
    };
  }),
)(SchemaProvider);
