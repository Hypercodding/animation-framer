import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add the Overused Grotesk CDN here */}
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/overused-grotesk"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
