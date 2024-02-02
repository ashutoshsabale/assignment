import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () =>{
        dispatch(logout());
        navigate("/");
    }

    return (
        <div className="rounded-full flex flex-wrap flex-col">
            <button
                className="inline-block px-6 py-2 duration-200 hover:bg-red-400 rounded-full"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}

export default LogoutBtn