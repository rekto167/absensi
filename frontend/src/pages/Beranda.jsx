// components
import Button from '../components/Button'
import Minimap from '../components/Minimap'

const Beranda = () => {
    return(
        <div className="w-full flex justify-center flex-col">
            <div className="flex flex-col">
                <h1 className="text-center font-semibold">Tekan tombol untuk kehadiran</h1>
                <div className="mt-5 mb-5"></div>
                <Button title={'Absen'} />
            </div>
            <div className="mt-2 flex flex-row justify-start items-center text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="ml-5">Koto Kari, Kec. Kuantan Tengah, Kab. Kuantan Singingi</span>
            </div>
            <Minimap />
        </div>
    )
}

export default Beranda