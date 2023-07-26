import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="my-footer">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram />
            </div>
        </footer>
    )
}

export default Footer