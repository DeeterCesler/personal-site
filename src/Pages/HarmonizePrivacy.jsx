import React from 'react'

const HarmonizePrivacy = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px 40px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <div style={{ backgroundColor: '#fff', color: '#333', padding: '32px 40px', borderRadius: '12px', boxShadow: '0 2px 16px rgba(0, 0, 0, 0.12)' }}>
      <h1>Privacy Policy for Harmonize Trainer</h1>
      <p><em>Last updated: 23 June 2026</em></p>

      <p>Harmonize Trainer (also known as Harmonize) is a vocal-harmony trainer. This policy explains, in plain language, what the app does and does not do with your information.</p>

      <h2>The short version</h2>

      <ul>
        <li>Harmonize has no accounts and asks for no personal information.</li>
        <li>Your practice progress (streaks, notes nailed, lessons finished) is stored only on your device.</li>
        <li>Audio from your microphone is processed live on your device to detect the pitch you sing. It is never recorded, saved, or sent anywhere.</li>
        <li>The app sends a small amount of anonymous, aggregate usage and crash data so we can fix bugs and understand which features are used. This data cannot be used to identify you.</li>
      </ul>

      <h2>Microphone</h2>

      <p>Harmonize needs your microphone to hear the notes you sing and give you instant pitch feedback. The audio is analysed in real time on your device and is immediately discarded. No recording is created, stored, or transmitted. You can revoke microphone access at any time in your device Settings; the app will prompt you to re-enable it if you try to practice.</p>

      <h2>Information stored on your device</h2>

      <p>The following stay on your device only and are never uploaded:</p>

      <ul>
        <li>Your detected or chosen vocal range and voice type.</li>
        <li>Practice progress: best streak, total notes nailed, and which lessons you have completed.</li>
        <li>App preferences.</li>
      </ul>

      <p>Deleting the app removes all of this data.</p>

      <h2>Anonymous analytics and crash reporting</h2>

      <p>To improve the app we collect anonymous, aggregate data through two privacy-focused services:</p>

      <ul>
        <li><strong>TelemetryDeck</strong> (usage analytics): records coarse events such as the app being opened, a practice session starting, a lesson being completed, or a vocal range being set. TelemetryDeck does not collect personal data and uses a salted, non-reversible identifier so individual users cannot be singled out or tracked across apps. See <a href="https://telemetrydeck.com/privacy/" target="_blank" rel="noopener noreferrer">https://telemetrydeck.com/privacy/</a>.</li>
        <li><strong>Sentry</strong> (crash reporting): records anonymous diagnostic information if the app crashes or hits an error, so we can fix it. We do not attach any identifying information to these reports. See <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">https://sentry.io/privacy/</a>.</li>
      </ul>

      <p>We do <strong>not</strong> use this data for advertising, we do <strong>not</strong> sell or share it with data brokers, and we do <strong>not</strong> track you across other apps or websites. Because of this, the app does not show an App Tracking Transparency prompt.</p>

      <h2>Children's privacy</h2>

      <p>Harmonize does not knowingly collect personal information from anyone, including children.</p>

      <h2>Changes to this policy</h2>

      <p>If this policy changes, the updated version will be posted at this address with a new "last updated" date.</p>

      <h2>Contact</h2>

      <p>Questions about your privacy or this policy? Email <a href="mailto:me+harmonize@deetercesler.com">me+harmonize@deetercesler.com</a>.</p>
    </div>
    </div>
  )
}

export default HarmonizePrivacy
