import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
export default function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer id="contact" className="bg-gray-900 border-t border-purple-500/20 text-gray-400 text-sm">
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4">
        {/* About/Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-base font-bold text-white bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            SIDDARTH SELVAKUMAR
          </span>
          <span className="text-xs text-gray-400">
            Computer Science and Mathematics Graduate from UVA
          <img
            src="/uva.png"
            alt="University of Virginia Logo"
            className="h-4 w-auto ml-2"
            style={{ display: "inline-block" }}
            />
        </span>
          
        </div>
        {/* Social Links */}
        <div className="flex space-x-3">
            <a
                href="https://github.com/blade9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300 text-2xl"
                title="GitHub"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/siddu-selvakumar-9b9bs/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300 text-2xl"
                title="LinkedIn"
            >
                <FaLinkedin />
            </a>          
        </div>
      </div>
    </footer>
  );
} 