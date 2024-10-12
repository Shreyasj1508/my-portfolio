
import { IconHexagonLetterS } from '@tabler/icons-react';


const Header=()=>{
    return (
        <nav className="flex bg-bgColor h-[18vh] px-10 courier-prime-regular justify-between items-center">
          <IconHexagonLetterS size={60} color="#64FFDA" stroke={1.25}/>
            <div className="md:flex gap-9 hidden">
                <a className="text-textColor hover:text-primaryColor" href="#about">About</a>
                <a className="text-textColor hover:text-primaryColor" href="#Projects">Projects</a>
                <a className="text-textColor hover:text-primaryColor" href="#skills">Skills</a>
                <a className="text-textColor hover:text-primaryColor" href="#Experience">Experience</a>
                <a className="text-textColor hover:text-primaryColor" href="#Contact">Contact</a>
            </div>
            <div>
                
            </div>
        </nav>
    );
}

export default Header;