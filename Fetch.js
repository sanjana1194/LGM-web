import './App.css';
import React,{useEffect,useState} from 'react'
function Fetch() {
  const [users, setUsers] = useState([]);
  const [BtnClick, setBtnClick] = useState(false);
  const [isFetch, setisFetch] = useState(false);
  const userData = async () => {
    setBtnClick(true);

    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);

    setInterval(() => {
      setisFetch(true);
    }, 3500);
  };

  

  return (
    
   <div className='w'> 
    <div className='h'>
      <h1 className='h11'><span className='black'>Lets</span>GrowMore</h1>
    <button type="button"  onClick={userData} className='b'>Get Users</button>
    </div>
      {BtnClick ? (
        isFetch ? (
          
          <div class="r"  >
              {users.map(({ id, first_name, last_name, avatar, email }) => {
              return (
                <div className='container'>
                <div className='root'>
                  <h2>user: {id}</h2>
                <img  height={400} src={avatar} className='pic'></img>
                  <div className='n'>
                    <h3>First Name:    {first_name} </h3>
                    <h3>Last Name:    {last_name}</h3>
                    <h3>Email ID:     {email}</h3>
                  </div>
                </div>
                </div>
              );
            })}
          
            
          </div>
        ) : (
          <div classname="l"> <h2>Loading... wait a sec<img src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" width={70} height={70}></img></h2></div>
        )
      ) : (
        <> </>
      )}
    </div>
  );
}
export default Fetch;