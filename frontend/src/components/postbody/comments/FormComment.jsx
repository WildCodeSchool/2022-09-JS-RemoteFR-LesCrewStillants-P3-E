import { useState } from "react";
import "./comment.css";

function FormComment({ handleSubmit, submitLabel }) {
  const [text, setText] = useState("");
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="inputC">
        <img src="/img/avatar-profil.png" alt="" />
        <textarea
          placeholder="Ajouter un commentaire..."
          className="comment-form-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="comment-form-button"
        disabled={isTextareaDisabled}
      >
        {submitLabel}
      </button>
    </form>
  );
}

export default FormComment;
