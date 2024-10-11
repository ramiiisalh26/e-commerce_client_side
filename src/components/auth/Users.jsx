import { useState,useEffect } from "react"
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useNavigate,useLocation } from "react-router-dom"

function Users() {
    const [users,setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() =>{
        let isMount = true;

        const controller = new AbortController();

        const getUsers = async () =>{
            try {
                const response = await axiosPrivate.get('/users',{
                    // The request is sent with the signal from the AbortController, allowing it to be canceled if necessary.
                    signal: controller.signal
                });
                console.log(response.data);
                isMount && setUsers(response.data);
            } catch (error) {
                console.error(error);
                navigate('/login',{state: {from: location}, replace:true});
            }
        }

        getUsers();
        return () =>{
            isMount = false;
            controller.abort();
        }
    },[])
  return (
    <div>Users</div>
  )
}

export default Users