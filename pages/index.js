export default function MaccreativLandingPage() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">maccreativ.com</h1>
        <p className="text-xl mb-6">Designklassiker neu gedacht – Möbelunikate aus Apple-Hardware</p>
        <p className="text-base mb-4">
          maccreativ.com ist ein einzigartiges Upcycling-Projekt, das ikonische Apple-Computer in hochwertige Möbel und Designobjekte verwandelt.
          Die Marke kombiniert Nostalgie, Nachhaltigkeit und Stil – ideal für Apple-Fans, Designliebhaber und Concept Stores.
        </p>
        <p className="text-base mb-4">
          maccreativ.com is a unique upcycling project that transforms iconic Apple computers into high-quality furniture and design pieces.
          The entire project is now for sale – ready to scale or continue as a collectible design label.
        </p>

        <div className="border rounded shadow my-8 text-left p-6">
          <h2 className="text-2xl font-semibold mb-2">Was im Paket enthalten ist / What’s Included</h2>
          <ul className="list-disc list-inside">
            <li>Domain: www.maccreativ.com</li>
            <li>Markenkonzept inkl. Branding, Bilder, Pläne</li>
            <li>ca. 10 PowerMac G4 Gehäuse</li>
            <li>ca. 10 PowerMac G5 Gehäuse</li>
            <li>ca. 5 iMac G3 Gehäuse</li>
            <li>Zahlreiche Einzelteile und Bauteile</li>
            <li>Jeweils 1 fertiges Unikat je Produkt (Bar, Tisch, Vogelhaus, etc.)</li>
          </ul>
        </div>

        <div className="border rounded shadow my-8 text-left p-6">
          <h2 className="text-2xl font-semibold mb-2">Preis / Price</h2>
          <p className="text-lg">€ 50.000,- (netto)</p>
          <p className="text-sm text-gray-600">inkl. Domain, Lagerbestand, Produktbilder, Markenrechte & Baupläne</p>
        </div>

        <div className="border rounded shadow my-8 text-left p-6">
          <h2 className="text-2xl font-semibold mb-2">Kontakt / Contact</h2>
          <p>Walter Egger</p>
          <p>Email: <a href="mailto:mail@walteregger.eu" className="text-blue-600 underline">mail@walteregger.eu</a></p>
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Produkte / Product Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <img src="/images/g5-bar.jpg" alt="G5-Bar" className="rounded shadow" />
              <p className="mt-2 text-sm">G5-Bar</p>
            </div>
            <div>
              <img src="/images/imac-side-table.jpg" alt="iMac-side table" className="rounded shadow" />
              <p className="mt-2 text-sm">iMac-side table</p>
            </div>
            <div>
              <img src="/images/g5-side-table.jpg" alt="G5-side table" className="rounded shadow" />
              <p className="mt-2 text-sm">G5-side table</p>
            </div>
            <div>
              <img src="/images/g5-birdhouse.jpg" alt="G5-Birdhouse" className="rounded shadow" />
              <p className="mt-2 text-sm">G5-Birdhouse</p>
            </div>
            <div>
              <img src="/images/g4-desk.jpg" alt="G4-desk" className="rounded shadow" />
              <p className="mt-2 text-sm">G4-desk</p>
            </div>
            <div>
              <img src="/images/monitor-pet-home.jpg" alt="Monitor-pet home" className="rounded shadow" />
              <p className="mt-2 text-sm">Monitor-pet home</p>
            </div>
          </div>
        </div>

        <button className="mt-6 px-6 py-3 bg-black text-white rounded text-lg">
          Jetzt anfragen / Inquire now
        </button>
      </section>
    </main>
  );
}
