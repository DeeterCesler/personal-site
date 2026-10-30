'use client';

import React from 'react'

const ArtWeekPrivacy = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px 40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <div style={{ backgroundColor: '#fff', color: '#333', padding: '32px 40px', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0, 0, 0, 0.12)' }}>
      <h1>Privacy Policy for Miami Art Week Guide</h1>
      <p><em>Last updated: 30 October 2026</em></p>

      <p>Miami Art Week Guide is an independent guide to the art fairs and events of Miami art week. This policy explains, in plain language, what the app does and does not do with your information.</p>

      <h2>The short version</h2>

      <ul>
        <li>The app has no accounts and asks for no personal information.</li>
        <li>Your reminders and settings are stored only on your device.</li>
        <li>Your location, if you allow it, is used on your device to show distances and your position on the map. It is never sent anywhere.</li>
        <li>The app has no analytics, no crash reporting, no ads and no tracking.</li>
      </ul>

      <h2>Location</h2>

      <p>If you allow location access, the app uses it while open to show how far each venue is and where you are on the map. Your location is never stored, uploaded, or shared. You can turn location access off at any time in your device Settings; the app works without it.</p>

      <h2>Notifications and calendar</h2>

      <p>Reminders are local notifications scheduled on your device. No notification server is involved. If you choose Add to calendar, the app opens the system calendar sheet with the event filled in; the app does not read your calendar.</p>

      <h2>Information stored on your device</h2>

      <p>The following stay on your device only and are never uploaded:</p>

      <ul>
        <li>The events you set reminders for.</li>
        <li>App preferences, such as reminder lead time and your directions app.</li>
        <li>A saved copy of the event list, so the app works offline.</li>
      </ul>

      <p>Deleting the app removes all of this data.</p>

      <h2>The event list</h2>

      <p>The app downloads the public event list from a static web host (Netlify). Like any web server, the host may keep standard request logs, such as IP address and time, for a short period for security and reliability. We do not use these logs to identify or track anyone. See <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.netlify.com/privacy/</a>.</p>

      <h2>Links to other sites and apps</h2>

      <p>Ticket, website and directions links open outside the app, in your browser or maps app. Those sites and apps have their own privacy policies.</p>

      <h2>Children's privacy</h2>

      <p>Miami Art Week Guide does not knowingly collect personal information from anyone, including children.</p>

      <h2>Changes to this policy</h2>

      <p>If this policy changes, the updated version will be posted at this address with a new "last updated" date.</p>

      <h2>Contact</h2>

      <p>Questions about your privacy or this policy? Email <a href="mailto:me+artweek@deetercesler.com">me+artweek@deetercesler.com</a>.</p>
    </div>
    </div>
  )
}

export default ArtWeekPrivacy
