import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

function UserInfo() {
    const user = useSelector(state => state.auth.userData)
    const dispatch = useDispatch();

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [readOnly, setReadOnly] = useState(true)
    const [message, setMessage] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({username, email, password}))
        setReadOnly(true)
        setMessage("User updated successfully!")
        setTimeout(()=>{
            setMessage(null)
        }, 3000)
    };

    return (
        <div className="flex items-center justify-center w-full my-8 text-black relative">
            <div
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-16 border border-black/10`}
            >

                <div className="mb-2 flex justify-center">
                    <span className="text-3xl text-blue-600 font-bold inline-block w-ful max-w-[300px]">
                        Account Details
                    </span>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mt-5"
                >
                    {message && (
                        <div className="fixed top-28 border-black rounded-md shadow-md bg-green-200 w-1/4 flex justify-between px-5 py-2 ">
                            <span className="text-bold">{message}</span>
                            <span className="cursor-pointer" onClick={()=>setMessage(null)}>❌</span>
                        </div>
                    )}

                    <div className="space-y-5">
                        <div className="w-full">
                            <label className="inline-block mb-1 pl-1" htmlFor="username">
                                Username:
                            </label>
                            <input
                                type="text"
                                className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                                id="username"
                                value={username}
                                onChange={(e)=>{setUsername(e.target.value)}}
                                readOnly={readOnly}
                            />
                        </div>

                        <div className="w-full">
                            <label className="inline-block mb-1 pl-1" htmlFor="username">
                                Email:
                            </label>
                            <input
                                type="email"
                                className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                                id="email"
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                                readOnly={readOnly}
                            />
                        </div>

                        <div className="w-full">
                            <label className="inline-block mb-1 pl-1" htmlFor="username">
                                Password:
                            </label>
                            <input
                                type="password"
                                className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
                                id="password"
                                value={password}
                                onChange={(e)=>{setPassword(e.target.value)}}
                                readOnly={readOnly}
                            />
                        </div>


                        {readOnly && (
                            <button onClick={()=>setReadOnly(false)} className="w-full border bg-green-700 text-white">
                                Edit profile
                            </button>
                        )}

                        {!readOnly && (
                            <>
                                <button type="submit" className="w-full border bg-green-700 text-white">
                                    Save changes
                                </button>
                                <button onClick={()=>{setReadOnly(true); setUsername(user.username); setEmail(user.email); setPassword(user.password)}} className="w-full border bg-red-500 text-white">
                                    Cancel changes
                                </button>
                            </>
                        )}

                    </div>
                </form>

            </div>
        </div>
    );
}

export default UserInfo;
