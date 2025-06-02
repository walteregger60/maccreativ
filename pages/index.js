import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
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
        <Card className="my-8 text-left">
          <CardContent className="p-6">
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
          </CardContent>
        </Card>
        <Card className="my-8 text-left">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Preis / Price</h2>
            <p className="text-lg">€ 50.000,- (netto)</p>
            <p className="text-sm text-gray-600">inkl. Domain, Lagerbestand, Produktbilder, Markenrechte & Baupläne</p>
          </CardContent>
        </Card>
        <Card className="my-8 text-left">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Kontakt / Contact</h2>
            <p>Walter Egger</p>
            <p>Email: <a href="mailto:mail@walteregger.eu" className="text-blue-600 underline">mail@walteregger.eu</a></p>
          </CardContent>
        </Card>
        <Button className="mt-4 text-lg">Jetzt anfragen / Inquire now</Button>
      </section>
    </main>
  );
}
