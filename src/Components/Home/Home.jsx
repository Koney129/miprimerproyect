

const Home = () =>{
    return(
        <div className="w-full h-screen">
        <img className="top-0 left-0 w-full h-screen object-cover" src="https://cdn.shopify.com/s/files/1/0098/7247/4167/files/pc_gaming_con_setup_de_luces_led.jpg?v=1630513725" alt="" />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen">
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div class="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                    <h1 className="font-bold text-5x1 md:text-7x1 drop-shadow-2x1">Bienvenido a la Vanguardia</h1>
                    <p className="max-w-[600px] drop-shadow-2x1 py-2 text-x1">Tenemos Variedades De Computadores para Usted  </p>
                    <p className="max-w-[600px] drop-shadow-2x1 py-2 text-x1">Al igual que decoraciones que usted prefiera  </p>
                    <p className="max-w-[600px] drop-shadow-2x1 py-2 text-x1">Tambien complementos para tu computadora  </p>
                </div>

            </div>

        </div>
        </div>
    )
}

export default Home