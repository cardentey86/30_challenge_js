export const HomePage = () => {
    return (
        <>
            <div className="container mx-auto p-4 text-center justify-center flex flex-col mt-10">
                <h1 className="text-gray-700 text-2xl font-bold mb-2">Propuestas de respuestas de AdventJs de Midu</h1>
                <div className="column justify-center items-center flex">
                    <p className="text-gray-700 text-lg mb-2">Esta es una recopilación de soluciones propuestas para los retos de AdventJs.</p>                    
                </div>
                <div className="row justify-center items-center flex mt-10">
                    <img src='/assets/react.png' alt="React + vite + TS" className="w-100"/>
                </div>
                <div className="row justify-center items-center flex">
                    <img src='/assets/tailwindcss.webp' alt="React + vite + TS" className="w-100 p-2"/>
                    <img src='/assets/react_router.jpg' alt="React + vite + TS" className="w-100"/>
                </div>
                <div className="row justify-center items-center flex">
                    <img src='/assets/zustand.png' alt="React + vite + TS" className="w-100"/>
                </div>
            </div>
        </>
    )
}