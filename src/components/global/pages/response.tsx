type ResponseProps = {
    children?: React.ReactNode;
}

export const Response = ({children} : ResponseProps) => {
  return (

    <div className="container mx-auto p-4">
        <h1 className="text-gray-700 font-bold mb-2">Respuesta</h1>
        {children}
    </div>
    
  )
}
