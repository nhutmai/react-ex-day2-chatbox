import { useState } from 'react';
import TextInput from './TextInput';
import SendButton from './SendButton';
import './MessageInput.css';

function MessageInput({ onSend }: { onSend: any }) {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <div className="message-input">
            <TextInput value={text} onChange={setText} />
            <SendButton onClick={handleSend} />
        </div>
    );
}

export default MessageInput;