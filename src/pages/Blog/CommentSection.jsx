import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setComments([...comments, text]);
    setText("");
  };

  return (
    <div className="bg-light p-4 rounded shadow-sm">
      <h4 className="mb-3">Leave a Comment</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Write your comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Post Comment
        </button>
      </form>

      <ul className="list-group mt-4">
        {comments.map((c, i) => (
          <li key={i} className="list-group-item">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
