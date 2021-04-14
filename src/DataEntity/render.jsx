import React from 'react';
import { Popup } from 'semantic-ui-react';
import { DataConnectedValue } from 'volto-datablocks/Utils';
import { wrapInlineMarkupText } from 'volto-slate/utils';
import { v4 as uuid } from 'uuid';

export const DataEntityElement = ({
  attributes,
  children,
  element,
  mode,
  ...rest
}) => {
  const { data = {} } = element;
  const {
    provider_url,
    column,
    specifier,
    textTemplate,
    placeholder = '-',
    withReadmore = false,
    maxChars = null,
  } = data;

  return (
    <>
      {mode === 'view' ? (
        <span {...rest}>
          {wrapInlineMarkupText(children, (c) => (
            <DataConnectedValue
              url={provider_url}
              column={column}
              specifier={specifier}
              textTemplate={textTemplate}
              placeholder={placeholder}
              key={uuid()}
              collapsable={withReadmore}
              collapseLimit={maxChars}
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
