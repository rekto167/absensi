const BurgerMenu = () => {
    return(
        <div className="bg-white w-10 h-10 rounded absolute mt-2 ml-2 p-2 hover:cursor-pointer">
            <div className="bg-black w-[85%] h-1 rounded"></div>
            <div className="bg-black w-[60%] h-1 rounded mt-1"></div>
            <div className="bg-black w-[40%] h-1 rounded mt-1"></div>
        </div>
    )
}

export default BurgerMenu