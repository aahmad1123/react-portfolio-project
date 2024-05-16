import githubLogo from '../assets/GitHub-Logo.png';
import linkedInLogo from '../assets/LI-Logo.png';

function Footer(){
    return(
        <div>
           <a href= "https://github.com/aahmad1123"><img src= {githubLogo} alt="github logo" className="logo"></img></a>
           <a href= "https://www.linkedin.com/in/aahmad1123/"><img src= {linkedInLogo} alt= "linkedin logo" className="logo2"></img></a>
        </div>
    )
};

export default Footer;