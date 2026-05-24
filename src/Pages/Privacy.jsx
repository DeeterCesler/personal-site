import React from 'react'

const Privacy = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px 40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
      <h1>Privacy Policy</h1>
      <p>Effective Date: May 24, 2026</p>

      <p>This site (<strong>deetercesler.com</strong>) is a personal website. I respect your privacy and collect as little as possible.</p>

      <h2>What I Collect</h2>

      <p>The only data collected is anonymous, aggregate page-view counts via Google Analytics, so I can see roughly how many people visit and which pages they land on. No accounts, no email capture, no profiles, no advertising trackers, no cross-site tracking.</p>

      <p>Google Analytics may set cookies and process limited request metadata (IP address, browser/device type, referrer) to produce those aggregate counts. I do not use this data to identify individual visitors.</p>

      <h2>What I Don't Collect</h2>

      <ul>
        <li>Names, emails, or contact info (unless you choose to email me)</li>
        <li>Accounts or logins, there are none</li>
        <li>Payment information</li>
        <li>Location data</li>
        <li>Anything sold to or shared with advertisers</li>
      </ul>

      <h2>Third Parties</h2>

      <p>This site uses Google Analytics for the anonymous traffic counts described above. Embedded content (videos, links to projects) may be served by third parties that have their own privacy policies. The site is hosted on Netlify, which processes standard request logs as part of serving the site.</p>

      <h2>Opting Out</h2>

      <p>You can block analytics with a browser extension (e.g. uBlock Origin), browser-level tracking protection, or by enabling Do Not Track. The site will work the same either way.</p>

      <h2>Contact</h2>

      <p>Questions? Email me at <a href="mailto:me@deetercesler.com">me@deetercesler.com</a>.</p>

      <h2>Changes</h2>

      <p>If this policy changes, I'll update the effective date at the top.</p>
    </div>
  )
}

export default Privacy
