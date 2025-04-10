import  { useState } from 'react';
import SenderAvatar from './SenderAvatar';
import MessageContent from './MessageContent';
import LikeButton from './LikeButton';
import './MessageItem.css';
import {IMessage} from '../../../../types';
import UserAvatar from '../../../Header/UserAvatar.tsx';

function MessageItem({ message }: { message: IMessage }) {
    const [liked, setLiked] = useState(false);
    const isUser = message.sender === 'user';

    return (
        <div className={`message-item ${isUser ? 'user' : 'friend'}`}>
            {!isUser ? <UserAvatar/>:<SenderAvatar/>}
            <MessageContent text={message.text}/>
            {!isUser &&  <LikeButton liked={liked} onClick={() => setLiked(!liked)}/>}
        </div>
    );
}

export default MessageItem;