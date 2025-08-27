import { useContext } from "react";
import { Form, Link } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const SignUp = () => {
    const AuthContexts=useContext(AuthContext)
    const {createUser,updateProfiles,setUser}=AuthContexts;
    const handleSignUp =(e)=>{
         e.preventDefault()
         const form = new FormData(e.target)
         const name= form.get('name')
         const photo= form.get('photo')
         const email= form.get('email')
         const password=form.get('password')
         createUser(email,password).then(res=>{
            updateProfiles(name,photo)
            .then(res=>{
                setUser(res.user)
            })
            .catch(err=>console.log(err))
         }).catch(err=>console.log(err)
         )

         
    }
    return (
        <div className="flex justify-center">
            <form onSubmit={handleSignUp}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Sign Up</legend>

                    <label className="label">Name</label>
                    <input name="name" type="text" className="input" placeholder="Name" />
                    <label className="label">Photo Url</label>
                    <input name="photo" type="text" className="input" placeholder="Photo Url" />
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input name="password" type="password" className="input" placeholder="Password" />

                    <input type="submit" className="btn btn-neutral mt-4" value={'SignUp'}></input>

                    <p>Already registered? <Link className="font-bold text-sky-500" to='/auth/login'>Login</Link></p>
                </fieldset>
            </form>

        </div>
    );
};

export default SignUp;