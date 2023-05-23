import React from 'react';


export async function PATCH(request,{params}){
  const res= await fetch('http://localhost:3000/api/issues');
  // const data = await res.json();
const {data}=params;

  return NextResponse.json({props:{data}})
}
export default function AboutPage(data) {
  return (
    <div className='px-10'>
      <h1>About</h1>
      <p>{data.name}</p>
      <p>{data.type}</p>
      <p>{data.details}</p>
      <p>{data.url}</p>
    </div>
  );
}