import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const AuthContexts=useContext(AuthContext)
    const {signInUser,setUser}=AuthContexts
    const handleLogin =(e)=>{
        e.preventDefault()
        const form=new FormData(e.target);
        const email=form.get('email')
        const password=form.get('password')
        signInUser(email,password)
        .then(res=>{
            console.log("Success")
            setUser(res.user)
            
        }).catch(err=>console.log(err))
    }
    return (
        <div className="flex justify-center">
            <form onSubmit={handleLogin}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />

                    <input type="submit" className="btn btn-neutral mt-4" value={'Login'}></input>
                    <p>Not Registered?<Link to={'/auth/signup'}>SignUp</Link></p>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;