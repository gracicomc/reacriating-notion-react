import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu
} from '@tiptap/react';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import StarterKit from '@tiptap/starter-kit';
import { lowlight } from 'lowlight/lib/core';
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble
} from 'react-icons/rx';

import { initialContent } from './initialContent';

import 'highlight.js/styles/tokyo-night-dark.css';

import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { BubbleButton } from './BubbleButton';

lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);
lowlight.registerLanguage('html', html);

export const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight
      })
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  });
  return (
    <>
      <EditorContent
        className='max-w-[700px] mx-auto pt-16 prose prose-invert'
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          className='bg-zinc-700 py-3 px-2 gap-1 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col transition-all overflow-y-auto h-44 scroll-smooth'
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText === '/';
          }}
        >
          <button
            type='button'
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-all'
          >
            <img
              src='http://www.notion.so/images/blocks/text/en-US.png'
              alt=''
              className='w-12 border border-zinc-600 rounded'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Text</span>
              <span className='text-xs text-zinc-400'>
                Just start wrinting with plain text.
              </span>
            </div>
          </button>
          <button
            onClick={() => {
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            type='button'
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-all'
          >
            <img
              src='http://www.notion.so/images/blocks/header.57a7576a.png'
              alt='H1'
              className='w-12 border border-zinc-600 rounded'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Heading 1</span>
              <span className='text-xs text-zinc-400'>
                Big section heading.
              </span>
            </div>
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            type='button'
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-all'
          >
            <img
              src='https://www.notion.so/images/blocks/subheader.9aab4769.png'
              alt='H2'
              className='w-12 border border-zinc-600 rounded'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Heading 2</span>
              <span className='text-xs text-zinc-400'>
                Medium section heading.
              </span>
            </div>
          </button>{' '}
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            type='button'
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-all'
          >
            <img
              src='https://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png'
              alt='H3'
              className='w-12 border border-zinc-600 rounded'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Heading 3</span>
              <span className='text-xs text-zinc-400'>
                Small section heading.
              </span>
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            type='button'
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-all'
          >
            <img
              src='https://www.notion.so/images/blocks/bulleted-list.0e87e917.png'
              alt='H3'
              className='w-12 border bg-zinc-50 border-zinc-600 rounded'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Bullet list</span>
              <span className='text-xs text-zinc-400'>
                Create a simple bulleted list.
              </span>
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            type='button'
            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-all'
          >
            <img
              src='https://www.notion.so/images/blocks/code.a8b201f4.png'
              alt='code'
              className='w-12 border border-zinc-600 rounded'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Code</span>
              <span className='text-xs text-zinc-400'>
                Capture a code snippet.
              </span>
            </div>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            type='button'
            // className={editor.isActive('blockquote') ? 'is-active' : ''}

            className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600 transition-all'
          >
            <img
              src='https://www.notion.so/images/blocks/quote/en-US.png'
              alt='quote'
              className='w-12 border border-zinc-600 rounded'
            />
            <div className='flex flex-col text-left'>
              <span className='text-sm'>Quote</span>
              <span className='text-xs text-zinc-400'>Capture a quote</span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className='bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600'
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className='w-4 h-4' />
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble className='w-4 h-4' /> Coment
          </BubbleButton>
          <div className='flex items-center'>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold className='w-4 h-4' />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic className='w-4 h-4' />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <RxStrikethrough className='w-4 h-4' />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
            >
              <RxCode className='w-4 h-4' />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
};
