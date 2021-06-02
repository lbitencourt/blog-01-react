import { Link } from "react-router-dom"

export const MainMenu = () => {
  return (
    <ul>
      <Link to="/blog">Blog</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/description">Descrição</Link>
    </ul>
  );
}