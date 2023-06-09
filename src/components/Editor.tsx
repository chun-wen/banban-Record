import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import addData from '@/Firebase/firestore/addData';
import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Editor = () => {
  const { handleSubmit } = useForm();
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    content: 'Please write your comment',
    // onUpdate: ({ editor }) => {
    //   editor.commands.setContent(editor?.getJSON());
    // },
  });

  useEffect(() => {
    const jsonData = editor?.getHTML();
    console.log(jsonData);
  }, [editor]);

  const onSubmit = async () => {
    const inputContent = editor?.getJSON();
    await addData({ collection: 'comment', id: 'title', data: inputContent });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <EditorContent editor={editor} />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Editor;
