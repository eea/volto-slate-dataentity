import React from 'react';
import { Popup } from 'semantic-ui-react';
import DataConnectedValue from 'volto-datablocks/DataConnectedValue';
import { wrapInlineMarkupText } from 'volto-slate/utils';

export const DataEntityElement = ({
  attributes,
  children,
  element,
  mode,
  ...rest
}) => {
  const { data = {} } = element;
  const { provider_url, column } = data;

  // key={index}
  return (
    <>
      {mode === 'view' ? (
        <span {...rest}>
          {wrapInlineMarkupText(children, (c) => (
            <DataConnectedValue
              url={provider_url}
              column={column}
              key="COUNTRY"
            />
          ))}
        </span>
      ) : (
        <Popup
          content={data.entity}
          header="Data entity"
          position="bottom left"
          trigger={
            <span {...attributes} className="data-entity data-entity-edit-node">
              {children}
            </span>
          }
        />
      )}
    </>
  );
};
