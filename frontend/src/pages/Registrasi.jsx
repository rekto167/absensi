import { Fragment, useState } from "react"
import { Link } from 'react-router-dom'

const Registrasi = () => {

    const [formData, setFormData] = useState({
        nama: '',
        username: '',
        password: '',
        password2: ''
    })

    const {nama, username, password, password2} = formData

    return (
        <Fragment>
            <div>
                <p className="text-center text-xl font-semibold uppercase">Pendaftaran</p>
                <form action="" className="form mt-10">
                    <div className="mt-3">
                        <label for="nama">Nama Lengkap</label>
                        <input type="text" className="p-3 w-full mt-2 appearance-none" placeholder="Nama Lengkap" id="nama" name="nama" value={nama} />
                    </div>
                    <div className="mt-3">
                        <label for="username">Username</label>
                        <input type="text" className="p-3 w-full mt-2 appearance-none" placeholder="Username" id="username" name="username" value={username} />
                    </div>
                    <div className="mt-3">
                        <label for="password">Password</label>
                        <input type="password" className="p-3 w-full mt-2 appearance-none" placeholder="password" id="password" name="password" value={password} />
                    </div>
                    <div className="mt-3">
                        <label for="password">Re-Type Password</label>
                        <input type="password" className="p-3 w-full mt-2 appearance-none" placeholder="password" id="password" name="password2" value={password2} />
                    </div>
                    <div className="mt-5">
                        <Link to="/login" className="text-blue-500 hover:text-blue-900" >Sudah memiliki akun ?</Link>
                    </div>
                    <div className="mt-3 flex justify-center content-center">
                        <input type="submit" className="bg-teal-500 text-white w-[150px] h-[45px] hover:cursor-pointer hover:bg-teal-900" value="Daftar" />
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Registrasi