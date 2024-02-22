import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/oma_theuss/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/matheus-silva-765829210/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/omaatheus">
                <GitHubIcon/>
            </a>
            <a href="https://twitter.com/oma_theuss_">
                <TwitterIcon/>
            </a>
        </div>
    )
}