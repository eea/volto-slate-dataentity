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
  const { url, column, index } = data;

  return (
    <>
      {mode === 'view' ? (
        <span {...rest}>
          {wrapInlineMarkupText(children, (c) => (
            <DataConnectedValue url={url} column={column} key={index} />
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
