export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif', backgroundColor: 'white', color: 'black' }}>
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>maccreativ.com</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          Designklassiker neu gedacht – Möbelunikate aus Apple-Hardware
        </p>
        <p style={{ marginBottom: '1rem' }}>
          maccreativ.com ist ein einzigartiges Upcycling-Projekt, das ikonische Apple-Computer in hochwertige Möbel und Designobjekte verwandelt.
          Die Marke kombiniert Nostalgie, Nachhaltigkeit und Stil – ideal für Apple-Fans, Designliebhaber und Concept Stores.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          maccreativ.com is a unique upcycling project that transforms iconic Apple computers into high-quality furniture and design pieces.
          The entire project is now for sale – ready to scale or continue as a collectible design label.
        </p>

        <div style={{ border: '1px solid #ddd', padding: '1.5rem', margin: '2rem 0', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            Was im Paket enthalten ist / What’s Included
          </h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            <li>Domain: www.maccreativ.com</li>
            <li>Markenkonzept inkl. Branding, Bilder, Pläne</li>
            <li>ca. 10 PowerMac G4 Gehäuse</li>
            <li>ca. 10 PowerMac G5 Gehäuse</li>
            <li>ca. 5 iMac G3 Gehäuse</li>
            <li>Zahlreiche Einzelteile und Bauteile</li>
            <li>Jeweils 1 fertiges Unikat je Produkt (Bar, Tisch, Vogelhaus, etc.)</li>
          </ul>
        </div>

        <div style={{ border: '1px solid #ddd', padding: '1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Preis / Price</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>€ 50.000,- (netto)</p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>inkl. Domain, Lagerbestand, Produktbilder, Markenrechte & Baupläne</p>
        </div>

        <div style={{ border: '1px solid #ddd', padding: '1.5rem', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Kontakt / Contact</h2>
          <p>Walter Egger</p>
          <p>
            Email:{" "}
            <a href="mailto:mail@walteregger.eu" style={{ color: '#0070f3', textDecoration: 'underline' }}>
              mail@walteregger.eu
            </a>
          </p>
        </div>

        <a href="mailto:mail@walteregger.eu">
          <button style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Jetzt anfragen / Inquire now
          </button>
        </a>
      </section>
    </main>
  );
}