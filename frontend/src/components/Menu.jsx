import {Link, useLocation} from 'react-router-dom'


const Menu = () => {
    const location = useLocation()

    return(
      <div className="bg-teal-500 h-14 fixed w-[35%] bottom-0">
      <div className="flex flex-row justify-around">
        {/* home */}
        <div className="mt-2">
          <Link to="/beranda">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${location.pathname === '/beranda' ? 'text-white' : 'text-teal-900'}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
        </div>

        {/* kehadiran pegawai */}
        <div className="mt-2">
          <Link to="/kehadiran">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${location.pathname === '/kehadiran' ? 'text-white' : 'text-teal-900'}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* notifikasi */}
        <div className="mt-2">
          <Link to="/notifikasi">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${location.pathname === '/notifikasi' ? 'text-white' : 'text-teal-900'}`} viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </Link>
        </div>

        {/* akun */}
        <div className="mt-2">
          <Link to="/profil">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${location.pathname === '/profil' ? 'text-white' : 'text-teal-900'}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    )
}

export default Menu