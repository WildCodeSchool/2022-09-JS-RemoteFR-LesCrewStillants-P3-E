import React, { useState, useEffect } from "react";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
} from "./api";
import Comment from "./Comment";
import "./comment.css";
import FormComment from "./FormComment";

function Comments({ currentUserId }) {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  console.warn("backendComments", backendComments);

  // return reply
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

  const addComment = (text, parentId) => {
    createCommentApi(text, parentId).then((comment) => {
      setBackendComments([comment, ...backendComments]);
    });
  };

  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);
  return (
    <div className="comments">
      <h3 className="font-extrabold">Comments</h3>
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            currentUserId={currentUserId}
          />
        ))}
      </div>
      <div className="comment-form-title">Write comment</div>
      <FormComment submitLabel="Write" handleSubmit={addComment} />
    </div>
  );
}

export default Comments;
