const Add = () => {
    const[username, setusername]=useState("")
    const[title, settitle]=useState("")
    const[description, setdescription]=useState("")
    const[rating, setrating]=useState(0)
    const[lat, setlat]=useState(0)
    const[long, setlong]=useState(0)

    const navigate=useNavigate()
    const addpin=(e)=>{
     e.preventDefault()
      axios.post("http://localhost:8080/pin",{
       username, title,description,rating,lat,long
      })
      .then(()=>navigate("/pin"))
      .catch((err)=>console.log(err))
    
  }
    return (
      <div>
        <form onSubmit={addpin}>
          <label>username:</label>
          <input type="text" onChange={(e)=>setusername(e.target.value)}></input> 
          <label>Title:</label>
          <input type="text" onChange={(e)=>settitle(e.target.value)}></input>
          <label>Description:</label>
          <input type="text" onChange={(e)=>setdescription(e.target.value)}></input>
          <label>Rating:</label>
          <input type="number" min={0} onChange={(e)=>setrating(e.target.value)}></input>
          <label>lat:</label>
          <input type="number" min={0} onChange={(e)=>setlat(e.target.value)}></input>
          <label>long:</label>
          <input type="number" min={0} onChange={(e)=>setlong(e.target.value)}></input>
          <input type="submit"></input>
  
        </form>
      </div>
    )
}

export default Add