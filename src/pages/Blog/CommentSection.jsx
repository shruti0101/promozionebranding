import  { useState } from "react";

const CommentSection = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const SHEETDB_API_URL = "https://sheetdb.io/api/v1/81xdikajy240l"; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setMessage("Please enter both name and comment.");
      return;
    }

    try {
      const res = await fetch(SHEETDB_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{ name, comment }],
        }),
      });

      if (res.ok) {
        setMessage("Thank you! Your comment was submitted.");
        setName("");
        setComment("");
      } else {
        setMessage("Failed to submit comment, please try again.");
      }
    } catch (error) {
      setMessage("Error submitting comment.");
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h3>Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
          required
        />
        <textarea
          placeholder="write your Comment here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
          required
        />
        <button className="btn btn-primary" type="submit" style={{ padding: "8px 20px" }}>
          Submit
        </button>
      </form>
      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </div>
  );
};

export default CommentSection;
