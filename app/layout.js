export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h2>headder</h2>
        {children}
      </body>
    </html>
  );
}