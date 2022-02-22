import { Fragment } from "react"
import {Link} from 'react-router-dom'
// assets
import avatar from '../assets/images/avatar.jpg'
// components
import Button from '../components/Button'

const UbahProfil = () => {
    return (
        <Fragment>
            <Link to="/profil">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"     fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
            </Link>
            <div className="flex flex-col">
                <div className="flex flex-col mx-auto">
                    <img src={avatar} className="w-[135px] h-[135px] rounded-full bg-cover" />
                    <button className="bg-teal-500 w-250 h-7 text-white hover:bg-teal-700 mt-3 text-center items-center">
                        Ganti Poto
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <p className="mt-2">Nama Lengkap</p>
                    <input value="Renal Eki Riyanto" className="p-3 w-full mt-1"  />
                </div>
                <div>
                    <p className="mt-2">No HP</p>
                    <input value="082390460261" className="p-3 w-full mt-1" />
                </div>
                <div>
                    <p className="mt-2">Posisi</p>
                    <select id="posisi" name="posisi" className="p-3 w-full mt-1">
                        <option value="kepsek">Kepala Sekolah</option>
                        <option value="operator">Operator</option>
                        <option value="guru">Guru</option>
                        <option value="staff">Staff</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <button className="bg-teal-500 w-100 h-7 text-white hover:bg-teal-700 mt-3 text-center items-center">
                        Simpan
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default UbahProfil