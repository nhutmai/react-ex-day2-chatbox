import MessageList from './MessageList/MessageList';
import './ChatWindow.css';
import {IMessage} from '../../types';

function ChatWindow({ messages }:{messages:IMessage[]}) {
    return (
        <div className="chat-window">
            <MessageList messages={messages} />
        </div>
    );
}

export default ChatWindow;