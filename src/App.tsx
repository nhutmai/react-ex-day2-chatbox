import  { useState } from 'react';
import Header from './components/Header/Header';
import ChatWindow from './components/ChatWindow/ChatWindow';
import MessageInput from './components/MessageInput/MessageInput';
import './App.css';
import {IMessage} from './types';


function App() {
    const [messages, setMessages] = useState<IMessage[]>([
        { text: "Chào bạn! Hôm nay thế nào?", sender: "friend" },
        { text: "Chào! Mình ổn, còn bạn?", sender: "user" },
        { text: "Cũng ổn. Bạn đang làm gì?", sender: "friend" },
        { text: "Mình đang học React, hơi mệt nhưng vui!", sender: "user" },
        { text: "Tuyệt vời! React thú vị lắm, đúng không?", sender: "friend" },
        { text: "Đúng rồi! Mình đang làm một chat box đơn giản.", sender: "user" },
        { text: "Ngầu đấy! Cho mình xem khi xong nhé!", sender: "friend" },
    ]);

    const handleSendMessage = (text:string) => {
        setMessages([...messages, { text, sender: 'user' }]);
    };

    return (
        <div className="app">
            <Header />
            <ChatWindow messages={messages} />
            <MessageInput onSend={handleSendMessage} />
        </div>
    );
}

export default App;