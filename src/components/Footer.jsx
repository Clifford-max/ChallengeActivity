import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      © {currentYear} My First React App <br /> Created by: Clifford Luchavez
    </footer>
  );
}

export default Footer;