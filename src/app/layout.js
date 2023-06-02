export default async function RootLayout({ children }) {
  // fetch('/api/establish_connection')
  // .then(response => response.json())
  // .then(data => {
  //   // Do something with the response data
  // })
  // .catch(error => {
  //   // Handle the error
  // });
  return (
    <html lang="en">
      <body style={{margin: '0', backgroundColor: '#E8E8E8'}}>{children}</body>
    </html>
  );
}