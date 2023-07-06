import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import tailwindCssStyleSheet from "~/tailwind.css";
import Navbar from "components/Navbar";

export const links = () => [{ rel: "stylesheet", href: tailwindCssStyleSheet }];
export const meta = () => [{ title: "Crypto Currency Tracker" }];

export default function App() {
 return (
  <html lang="en">
   <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <Meta />
    <Links />
   </head>
   <body>
    <Navbar />
    <Scripts />
    <ScrollRestoration />
    <LiveReload />
    <div className="container mx-auto">
     <Outlet />
    </div>
   </body>
  </html>
 );
}
