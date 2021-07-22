import logoInstagram from '../assets/img/instagram-logo.png'
import logoFacebook from '../assets/img/facebook-logo.png'
import '../styles/footer.scss'

export function Footer(){
    return(
        <div>
            <footer className="main-footer">
                <a href="www.google.com"><img src={logoInstagram} alt="logo do instagram"/></a>
                <a href="www.google.com"><img src={logoFacebook} alt="logo do facebook"/></a>
            </footer>
        </div>

    )
}