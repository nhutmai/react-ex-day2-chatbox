import MessageItem from './MessageItem/MessageItem';
import './MessageList.css';
import {IMessage} from '../../../types';

function MessageList({ messages }:{ messages:IMessage[] }) {
    return (
        <div className="message-list">
            {messages.map((msg, index) => (
                <MessageItem key={index} message={msg} />
            ))}
        </div>
    );
}

export default MessageList;