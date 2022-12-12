import "../styles/globals.css";
import Header from "../components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
        <Header />
        <div className='max-w-6xl mx-auto'>{children}</div>
      </body>
      <head />
    </html>
  );
}