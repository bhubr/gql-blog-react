import { useState } from 'react';
import { Comment as IComment, useUpdateCommentMutation } from '../generated';

export default function Comment({
  comment,
}: {
  comment: IComment;
}): JSX.Element {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>('');
  const [updateComment, { data, error, loading }] = useUpdateCommentMutation();

  const onStartEditing = () => {
    setCommentText(comment.text);
    setIsEditing(true);
  };

  const onCancelEditing = () => {
    setCommentText('');
    setIsEditing(false);
  };

  const onSubmitEdits = () => {
    updateComment({
      variables: {
        data: {
          text: {
            set: commentText,
          },
        },
        where: {
          id: comment.id,
        },
      },
    });
    onCancelEditing();
  };

  const onChangeText = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCommentText(target.value);
  return (
    <div>
      {isEditing ? (
        <div>
          <textarea value={commentText} onChange={onChangeText} />
          <button type="button" onClick={onCancelEditing}>
            <span className="icon-cross" />
          </button>
          <button type="button" onClick={onSubmitEdits}>
            <span className="icon-checkmark" />
          </button>
        </div>
      ) : (
        <div>
          {comment.text}{' '}
          <button type="button" onClick={onStartEditing}>
            <span className="icon-pencil" />
          </button>
        </div>
      )}
    </div>
  );
}
