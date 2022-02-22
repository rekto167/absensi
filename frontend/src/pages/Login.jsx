import {Link} from 'react-router-dom'

const Login = () => {
    return(
        <div>
            <p className="text-xl font-semibold text-center">Masuk</p>
            <div className="mt-3">
                <p>Username</p>
                <input type="text" placeholder="Masukkan username" className="p-3 w-full mt-1" />
            </div>
            <div className="mt-3">
                <p>Password</p>
                <input type="password" placeholder="Masukkan password" className="p-3 w-full mt-1" />
            </div>
            <div className="mt-3 flex flex-col">
                <Link to="/reset_password" className="text-blue-500 decoration-solid">Lupa Password ?</Link>
                <Link to="/registrasi" className="text-blue-500 decoration-solid">Belum Punya Akun ?</Link>
            </div>
            <div className="flex justify-center content-center mt-20">
                <button className="bg-teal-500 text-white w-[150px] h-[45px]">Masuk</button>
            </div>
        </div>
    )
}

export default Login