import { DATAENTITY } from '../constants';

export const withDataEntity = (editor) => {
  const { isInline } = editor;

  editor.isInline = (element) => {
    return element && element.type === DATAENTITY ? true : isInline(element);
  };

  return editor;
};
