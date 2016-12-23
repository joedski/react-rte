/* @flow */

/**
 * Default format handlers:
 * - Markdown import/export via draft-js-import-markdown/draft-js-export-markdown
 * - HTML import/export via draft-js-import-html/draft-js-export-html
 */

import type {EditorState} from 'draft-js';

import {convertToRaw, convertFromRaw} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import {stateFromHTML} from 'draft-js-import-html';
import {stateToMarkdown} from 'draft-js-export-markdown';
import {stateFromMarkdown} from 'draft-js-import-markdown';

export type FormatHandlerMap = {
  [formatName: string]: {
    toString: (editorState: EditorState, exportOptions?: mixed) => string,
    fromString: (markup: string, importOptions?: mixed) => EditorState,
  },
};

export default ({
  markdown: {
    fromString: stateFromMarkdown,
    toString: stateToMarkdown,
  },

  html: {
    fromString: stateFromHTML,
    toString: stateToHTML,
  },

  raw: {
    fromString(markup: string) {
      return convertFromRaw(JSON.parse(markup));
    },
    toString(editorState: EditorState) {
      return JSON.stringify(convertToRaw(editorState));
    },
  }
}: FormatHandlerMap);
