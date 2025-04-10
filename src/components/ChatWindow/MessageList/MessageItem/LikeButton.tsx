import { AiOutlineLike,AiFillLike } from "react-icons/ai";

function LikeButton({ liked, onClick }: { liked: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontSize: '20px',
            }}

        >
            {!liked ? <AiOutlineLike /> : <AiFillLike style={{color:'blue'}} />}
        </button>
    );
}

export default LikeButton;