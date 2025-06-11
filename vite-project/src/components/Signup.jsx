import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        alert('Signup successful!');
        navigate('/home')
    }

    return (
        <div className="bg-blue-100 h-screen flex items-center  justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-3xl font-bold text-center">Signup</h1>
                <label className="text-2xl font-bold text-blue-500">Username</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 mb-4" placeholder="Enter your name" />
                <label className="text-2xl font-bold text-blue-500">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded mt-2 mb-4" placeholder="Enter your email" />
                <label className="text-2xl font-bold text-blue-500">Password</label>
                <input type="password" className="w-full p-2 border border-gray-300 rounded mt-2 mb-4" placeholder="Enter your password" />
                <label className="text-2xl font-bold text-blue-500">Confirm Password</label>
                <input type="password" className="w-full p-2 border border-gray-300 rounded mt-2 mb-4" placeholder="Confirm your password" />
                <button onClick={handleSignup} className="bg-blue-200 text-black font-bold p-2 rounded w-full">Signup</button>

                <p className="text-center mt-4">Already have an account? <Link to="/" className="text-blue-500 font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;
