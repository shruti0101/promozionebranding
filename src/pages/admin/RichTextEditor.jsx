import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = {
    readonly: false,
    height: 400,
    style: `
      h1, h2, h3, h4, h5, h6, p {
        color: inherit !important;
        font-size: inherit !important;
        font-weight: normal !important;
      }
    `,
  };

  return (
    <div className="mt-3">
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onChange={onChange}
      />
    </div>
  );
};

export default RichTextEditor;
