import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer">
      <p>
        All &copy; Copyrights are reserved to Gadget দুনিয়া {fullYear}
      </p>
    </footer>
  );
};

export default Footer;
