import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const Links = () => {
    return (
        <div className="links">
            <li className="social-icons">
                <FaFacebook color="white" size="21px" />
                <FaTwitter color="white" size="21px" />
                <FaInstagramSquare color="white" size="21px" />
                <FaLinkedin color="white" size="21px" />
                <FaGithub color="white" size="21px" />
            </li>
        </div>
    )
}

export default Links;