type InstructionsProps = {
    title:string,
    description: string
}

export const Instructions = ({title, description} : InstructionsProps) => {
  return (
    <>
        <div className="container mx-auto p-4">
            <h1 className="text-gray-700 text-xl font-bold mb-2">{title}</h1>
            <p className="text-gray-700 font-bold">Instrucciones</p>
            <p className="text-gray-700">{description}</p>
        </div>
    </>
    )
}
