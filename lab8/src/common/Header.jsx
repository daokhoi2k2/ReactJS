import { Link } from "react-router-dom";
export default function Header() {
  return (
    <ul className="nav bg-success navbars">
      <li className="nav-item">
        <Link className="nav-link text-white active" to="/">
          <h5>Lab8</h5>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white active" to="/bai1">
          Bài 1
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white active" to="/bai2">
          Bài 2
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white active" to="/bai3">
          Bài 3
        </Link>
      </li>
    </ul>
  );
}
