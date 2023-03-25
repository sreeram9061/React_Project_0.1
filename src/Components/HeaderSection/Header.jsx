
import SocialIcons from "./SocialIcons"
import Logo from "./Logo"
function Header() {
    return (
        <div className="header">
            <Logo/>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Features</li>
            </ul>
            <SocialIcons/>
        </div>
    )
}
export default Header