import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Docs() {
  return (
    <div style={{ display: 'flex', maxWidth: '1400px', margin: '0 auto', width: '100%', minHeight: '80vh' }}>
      <Helmet><title>Documentation | BinaryWebEngine</title></Helmet>
      
      <aside style={{ width: '280px', borderRight: '1px solid var(--blk-brd)', padding: '40px 20px', position: 'sticky', top: '80px', height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
        <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px', letterSpacing: '0.05em' }}>Getting Started</h3>
        <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
          <li style={{ marginBottom: '8px' }}><a href="#intro" style={{ color: 'var(--maroon-accent)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Introduction</a></li>
          <li style={{ marginBottom: '8px' }}><a href="#setup" style={{ color: 'var(--text-sec)', textDecoration: 'none', fontSize: '14px' }}>Installation</a></li>
        </ul>
        <h3 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px', letterSpacing: '0.05em' }}>API Reference</h3>
        <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
          <li style={{ marginBottom: '8px' }}><a href="#auth" style={{ color: 'var(--text-sec)', textDecoration: 'none', fontSize: '14px' }}>Authentication</a></li>
          <li style={{ marginBottom: '8px' }}><a href="#alerts" style={{ color: 'var(--text-sec)', textDecoration: 'none', fontSize: '14px' }}>Alerts API</a></li>
          <li style={{ marginBottom: '8px' }}><a href="#intel" style={{ color: 'var(--text-sec)', textDecoration: 'none', fontSize: '14px' }}>Intelligence Integration</a></li>
        </ul>
      </aside>

      <main style={{ flex: 1, padding: '40px 80px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 id="intro" style={{ fontSize: '40px', marginBottom: '16px', letterSpacing: '-0.02em' }}>Introduction</h1>
          <p style={{ color: 'var(--text-sec)', marginBottom: '16px', fontSize: '16px' }}>Welcome to the official documentation for <strong>BinaryWebEngine</strong>, the foundational layer for secure operations built for the International Builders Congress (InfraSphere).</p>
          
          <div style={{ padding: '16px 20px', borderRadius: '12px', marginBottom: '24px', borderLeft: '4px solid var(--maroon-accent)', background: 'rgba(192,57,43,0.05)' }}>
            <strong style={{ color: 'var(--text-pr)' }}>Note:</strong> This documentation is a work in progress. API endpoints are subject to change before the final Congress submission.
          </div>

          <h2 id="setup" style={{ fontSize: '24px', marginTop: '40px', marginBottom: '16px', borderBottom: '1px solid var(--blk-brd)', paddingBottom: '8px' }}>Installation & Deployment</h2>
          <p style={{ color: 'var(--text-sec)', marginBottom: '16px', fontSize: '16px' }}>The backend is powered by Cloudflare Workers, D1 database, and KV. The frontend is hosted on Firebase.</p>
          
          <pre style={{ background: 'var(--blk-card)', border: '1px solid var(--blk-brd)', borderRadius: '12px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'var(--text-sec)', overflowX: 'auto', marginBottom: '24px' }}>
{`# 1. Install Wrangler CLI
npm install -g wrangler

# 2. Deploy Worker
npx wrangler deploy

# 3. Deploy Frontend
npx firebase deploy --only hosting`}
          </pre>

          <h2 id="auth" style={{ fontSize: '24px', marginTop: '40px', marginBottom: '16px', borderBottom: '1px solid var(--blk-brd)', paddingBottom: '8px' }}>Authentication</h2>
          <p style={{ color: 'var(--text-sec)', marginBottom: '16px', fontSize: '16px' }}>All API endpoints require a valid session token passed via the <code>X-Session-Token</code> header or <code>bwe_session</code> cookie.</p>
          
          <h2 id="intel" style={{ fontSize: '24px', marginTop: '40px', marginBottom: '16px', borderBottom: '1px solid var(--blk-brd)', paddingBottom: '8px' }}>Intelligence Integration</h2>
          <p style={{ color: 'var(--text-sec)', marginBottom: '16px', fontSize: '16px' }}>BinaryWebEngine integrates intelligent APIs to provide real-time alert explanations. You must inject the <code>API_KEY</code> via Cloudflare secrets to enable this feature.</p>
          <pre style={{ background: 'var(--blk-card)', border: '1px solid var(--blk-brd)', borderRadius: '12px', padding: '20px', fontFamily: 'monospace', fontSize: '13px', color: 'var(--text-sec)', overflowX: 'auto', marginBottom: '24px' }}>
{`echo "your-api-key" | npx wrangler secret put API_KEY`}
          </pre>
        </motion.div>
      </main>
    </div>
  );
}
