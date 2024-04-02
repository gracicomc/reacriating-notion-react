import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
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
