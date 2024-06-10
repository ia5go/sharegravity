import "./globals.scss";

export const metadata = {
  title: "Share Gravity",
  description: "Blue Gravity interview task.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
