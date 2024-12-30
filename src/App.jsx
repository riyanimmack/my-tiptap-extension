import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import WordCharacterCountExtension from './WordCharacterCountExtension';

const App = () => {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit,
      WordCharacterCountExtension,
    ],
    content: '',
    onUpdate: ({ editor }) => {
      setWordCount(editor.options.wordCount);
      setCharCount(editor.options.charCount); 
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-green-100">
      <div className="w-full max-w-4xl border-2 border-black p-6 rounded-lg shadow-md bg-white mb-10">
        <h1 className="text-2xl font-semibold mb-6 text-gray-700">Tiptap Editor</h1>
        <div
          id="editor-content"
          className="w-full max-h-[500px] overflow-y-auto text-lg font-mono leading-relaxed focus:outline-none placeholder-gray-400 border-2 border-black p-2"
        >
          <EditorContent
            editor={editor}
            className="w-full text-lg font-mono leading-relaxed focus:outline-none placeholder-gray-400"
            placeholder="Start typing your content..."
          />
        </div>
      </div>

    
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-lg flex justify-between w-72">
        <div className="flex items-center">
          <span className="mr-2 font-medium">Words:</span>
          <span>{wordCount}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 font-medium">Characters:</span>
          <span>{charCount}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
