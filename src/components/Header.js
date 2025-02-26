import { useNavigate } from "react-router-dom"
import logo from '../assets/smallLogo.png'

const Header = () => {
    const navigate = useNavigate()

    const headerNavigate = (menu) => {
        navigate(`/${menu}`)
    }

    return (
        <header className="fixed top-0 left-0 w-full h-[10vh] flex justify-center bg-amber-100 bg-opacity-50 z-10">
            <div className="flex w-full max-w-[1200px] justify-between items-center p-3">
                <div className=" items-center justify-center w-auto">
                    <img 
                        className="h-[130px] cursor-pointer" 
                        src={logo} 
                        alt="Logo" 
                    />
                </div>

                <div className="flex gap-8 flex-1 justify-center mx-8">
                    <button onClick={() => headerNavigate('hospital')} className="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Hospitais</button>
                    <button onClick={() => headerNavigate('donation')} className="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Doações</button>
                    <button onClick={() => headerNavigate('stock')} className="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Bancos de sangue</button>
                    <button className="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Sair</button>
                    {/* <button className="cursor-pointer transition-all duration-300 font-semibold hover:text-red-600">Estatísticas</button> */}
                </div>

                <button className="p-3 font-semibold bg-red-500 w-auto text-white rounded-full hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105">
                    Solicitar transferência
                </button>
            </div>
        </header>
    )
}

export default Header
