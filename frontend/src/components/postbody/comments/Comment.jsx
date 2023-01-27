import { useState } from "react";
import "./comment.css";
import FormComment from "./FormComment";

function Comment({
  comment,
  replies,
  currentUserId,
  setActiveComment,
  activeComment,
  addComment,
  parentId = null,
}) {
  const [likes, setLikes] = useState(0);
  const canReply = Boolean(currentUserId);
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const replyId = parentId || comment.id;

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="comment">
      <div className="comment-image-container">
        <img src="/img/avatar-profil.png" alt="" />
      </div>
      <div className="comment-right-part">
        <div className="comment-bg">
          <div className="comment-content">
            <div className="comment-author">{comment.username}</div>
            <div className="date">{createdAt}</div>
          </div>
          <div className="comment-text">{comment.body}</div>
        </div>
        <div className="comment-actions">
          <div
            className="comment-action"
            onClick={handleLike}
            role="button"
            tabIndex={0}
          >
            J'aime
          </div>
          <div className="font-semibold mr-2 text-red-700">
            {likes >= 1 ? <p>{likes}</p> : null}
          </div>
          {canReply && (
            <div
              role="button"
              tabIndex={0}
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              Répondre
            </div>
          )}
        </div>
        {isReplying && (
          <FormComment
            submitLabel="Répondre"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                replies={[]}
                currentUserId={currentUserId}
                setActiveComment={setActiveComment}
                parentId={comment.id}
                activeComment={activeComment}
                addComment={addComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
