
function MessageContent({ text }: { text: string }) {
    return (
        <div style={{ padding: '10px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
            {text}
        </div>
    );
}

export default MessageContent;