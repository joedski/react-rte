export type StylesMap = {[stylesName: string]: mixed};

export type CustomStyles = {
  RichTextEditor: StylesMap,
  EditorToolbar: StylesMap,
  Button: StylesMap,
  ButtonGroup: StylesMap,
  ButtonWrap: StylesMap,
  Dropdown: StylesMap,
  IconButton: StylesMap,
  InputPopover: StylesMap,
};

export function getStyles(key: string, custom: CustomStyles, defaultStyles: StylesMap) {
  return custom ? custom[key] : defaultStyles;
}
