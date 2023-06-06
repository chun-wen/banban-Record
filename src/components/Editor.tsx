import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: 'Please write your comment',
  });

  return <EditorContent editor={editor} />;
};

export default Editor;
