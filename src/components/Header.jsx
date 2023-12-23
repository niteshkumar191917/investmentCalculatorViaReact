import logo from '../assets/logo-image.png'
function Header({...props}){
    return (
        <div {...props}>
            <img src={logo} alt='logo' />
            <h1>Investment Calculator</h1>
        </div>
    );
}
export default Header;