
function SendButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '5px 10px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            Send
        </button>
    );
}

export default SendButton;