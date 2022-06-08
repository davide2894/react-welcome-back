import "./Header.scss";
function Header(props) {
    return (
        <header className="header">
            <p className="header__text">Current user: {props.userName}</p>
        </header>
    )
}

export default Header;
