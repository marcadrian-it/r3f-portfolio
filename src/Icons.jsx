import { FaGithub, FaTwitter, FaLinkedin, FaLink } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="icons">
      <a
        href="https://marcadrian.me/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLink className="icon" />
      </a>
      <a
        href="https://github.com/marcadrian-it"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </a>
      <a
        href="https://twitter.com/marcadrian_it"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/adriansoltysik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
      </a>
    </div>
  );
};

export default Icons;
