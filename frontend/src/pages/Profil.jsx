import {Fragment} from 'react'
import {Link} from 'react-router-dom'
// attribute
import avatar from '../assets/images/avatar.jpg'

const Profil = () => {
    return(
        <Fragment>

            <div className="flex flex-col">
                <div className="flex flex-col mx-auto">
                    <img src={avatar} className="w-[135px] h-[135px] rounded-full bg-cover" />
                    <Link to="/ubahprofil" className="bg-teal-500 w-250 h-7 text-white hover:bg-teal-700 mt-3 text-center items-center">
                        Ubah Profil
                    </Link>
                    <Link to="/login" className="mt-3 flex flex-row justify-center items-center text-red-500 font-semibold">
                        <p className="mr-3">Keluar</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="justify-center content-center mx-auto mt-5">
                <div className="bg-slate-200 w-full h-[50px] rounded mt-2"></div>
                <div className="bg-slate-200 w-full h-[50px] rounded mt-2"></div>
                <div className="bg-slate-200 w-full h-[50px] rounded mt-2"></div>
                <div className="bg-slate-200 w-full h-[50px] rounded mt-2"></div>
                <div className="bg-slate-200 w-full h-[50px] rounded mt-2"></div>
                <div className="bg-slate-200 w-full h-[50px] rounded mt-2"></div>
            </div>
        </Fragment>
    )
}

export default Profil