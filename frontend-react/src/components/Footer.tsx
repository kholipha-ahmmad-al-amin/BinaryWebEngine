import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Team EquiSaaS BD. Built for the International Builders Congress.</p>
      <div style={{ marginTop: '10px' }}>
        <Link to="/docs">Documentation</Link>
        <a href="/login.html">Login</a>
      </div>
    </footer>
  );
}
