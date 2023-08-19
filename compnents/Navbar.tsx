import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">_Morshed</Link>
      </div>
      <a
        href="https://drive.google.com/file/d/1P2ede1rzAKeKrQ1X2NQavOBynqaziPc0/view"
        target="_blank"
        className="cta-btn"
      >
        Resume
      </a>
    </div>
  );
};

export default Navbar;
