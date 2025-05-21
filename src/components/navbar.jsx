import "../styles/style.css"

const Navbar = () => {

    return (<>
    <div className="navbar">
        {/* app name */}
        <div className="appName">
            <img className="w-[200px] h-[200px]" src="/src/assets/logo2.png" alt="Mess Management Logo" />
        </div>
        {/* middle buttons */}
        <div className="navMiddleBtns">
             <a href="">Home</a>
             <a href="">About</a>
             <a href="">Features</a>
             <a href="">Contact</a>
             <a href="">Your Plan</a>
        </div>
        {/* login signup btns */}
        <div className="navLoginSignupBtns">
            <button>Login</button>
            <button className="blueBtn">Sign up</button>
        </div>
    </div>
    </>)
}

export {Navbar};