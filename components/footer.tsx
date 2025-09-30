// components/footer.tsx
import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link href="/trading" className="hover:text-foreground">Trading</Link></li>
            <li><Link href="/partners" className="hover:text-foreground">Partners</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Resources</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link href="/trading" className="hover:text-foreground">Trading Services</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Get in Touch</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/contact" className="hover:text-foreground">Contact Us</Link></li>
            <li><Link href="/partners" className="hover:text-foreground">Partnership Inquiry</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>{site.contacts.address}</li>
            <li><a href={`tel:${site.contacts.phone}`} className="hover:text-foreground">{site.contacts.phone}</a></li>
            <li><a href={`mailto:${site.contacts.email}`} className="hover:text-foreground">{site.contacts.email}</a></li>
            <li><a href={site.contacts.whatsappUrl} target="_blank" className="hover:text-foreground">WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
