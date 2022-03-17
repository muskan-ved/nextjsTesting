import React,{useEffect,useState} from 'react'



const blog = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(()=>{
    console.log("useEffect is running");
    // fetch('http://localhost:3000/api/blog').then((a)=>{
    fetch('https://gorest.co.in/public/v2/users').then((a)=>{
      return a.json();
    })
    .then((parsed)=>{
      console.log(parsed)
      setblogs(parsed)
    })
  },[])
  return (
    <>
   
    {blogs.map((item)=>{
      return(
      <div>
        <table>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        </table>
      
       
       </div>
     ) })}
    </>
  )
}

export default blog