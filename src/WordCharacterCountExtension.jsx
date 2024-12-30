import { Extension } from '@tiptap/core';

const WordCharacterCountExtension = Extension.create({
  name: 'wordCharacterCount',

  addState() {
    return {
      wordCount: 0,
      charCount: 0,
    };
  },

  addProseMirrorPlugins() {
    return [];
  },

  addCommands() {
    return {
      updateWordCharacterCount: () => ({ editor }) => {
        const text = editor.getText();
        const words = text.split(/\s+/).filter(Boolean);
        const wordCount = words.length;
        const charCount = text.length;

        editor.setOptions({
          wordCount,
          charCount,
        });

        return { wordCount, charCount };
      },
    };
  },

  onUpdate({ editor }) {
    
    const text = editor.getText();
    const words = text.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const charCount = text.length;

    
    editor.setOptions({
      wordCount,
      charCount,
    });
  },
});

export default WordCharacterCountExtension;
