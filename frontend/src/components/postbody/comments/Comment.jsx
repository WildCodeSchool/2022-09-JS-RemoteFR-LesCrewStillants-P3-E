import React from "react";
import "./comment.css";

function Comment({ comment, replies, currentUserId }) {
  const canReply = Boolean(currentUserId);
  const createdAt = new Date(comment.createdAt).toLocaleDateString();

  return (
    <div className="comment">
      <div className="comment-image-container">
        <img src="/img/avatar-profil.png" alt="" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
        <div className="comment-actions">
          <div className="comment-action">J'aime</div>
          {canReply && <div className="comment-action">Repondre</div>}
        </div>
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment comment={reply} key={reply.id} replies={[]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
