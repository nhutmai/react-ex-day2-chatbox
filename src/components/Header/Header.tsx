
import './Header.css';
import UserAvatar from './UserAvatar.tsx';

function Header() {
    return (
        <div className="header">
            <UserAvatar />
            <div style={{ fontWeight: 'bold',fontSize: '20px' }}>
                John Sena
            </div>
        </div>
    );
}

export default Header;