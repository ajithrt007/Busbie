export default async function RootLayout({ children }) {
  // const resClient = await fetch('http://localhost:3000/api/establish_connection', {
  //   next: { revalidate: 60 }, // Revalidate every 60 seconds
  // });
  // console.log(resClient)
  return (
    <html lang="en">
      <body style={{margin: '0', backgroundColor: '#E8E8E8'}}>{children}</body>
    </html>
  );
}