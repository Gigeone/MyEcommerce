import { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'ErgoShop",
  description: "Site ecommerce pour gadgets et appareils électroniques",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
