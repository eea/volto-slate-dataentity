import { useCallback } from 'react';
import { Popup } from 'semantic-ui-react';
import { VisibilitySensor } from '@eeacms/volto-datablocks/components';
import { DataConnectedValue, Skeleton } from '@eeacms/volto-datablocks/Utils';
import { wrapInlineMarkupText } from '@plone/volto-slate/utils';

export const DataEntityElement = ({
  attributes,
  children,
  element,
  mode,
  extras = {},
  ...rest
}) => {
  const { data = {} } = element;
  const { animation = {} } = extras;
  const {
    placeholder = ' ',
    provider_url,
    allowedParams,
    column,
    row,
    specifier,
    textTemplate,
    withReadmore = false,
    maxChars = null,
    isLink,
    linkTitle,
    skeletonWidth = '40px',
    skeleton = false,
  } = data;

  const Placeholder = useCallback(
    () => (skeleton ? <Skeleton width={skeletonWidth} /> : <span>&nbsp;</span>),
    [skeleton, skeletonWidth],
  );

  if (mode === 'view') {
    return wrapInlineMarkupText(children, () => (
      <span {...rest}>
        <VisibilitySensor
          id={`dataentity-${provider_url}`}
          Placeholder={Placeholder}
        >
          <DataConnectedValue
            collapsable={withReadmore}
            collapseLimit={maxChars}
            column={column}
            row={row}
            data={{ allowedParams, data_query: data.data_query }}
            placeholder={placeholder}
            specifier={specifier}
            textTemplate={textTemplate}
            url={provider_url}
            link={isLink ? { title: linkTitle } : null}
            animatedCounter={animation}
            skeleton={skeleton}
            skeletonWidth={skeletonWidth}
          />
        </VisibilitySensor>
      </span>
    ));
  }

  return (
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
  );
};
