type InstructionsProps = {
    title:string,
    description: string,
    rules?: string[]
}

export const Instructions = ({title, description, rules} : InstructionsProps) => {
  return (
    <>
        <div className="container mx-auto p-4">
            <h1 className="text-gray-700 text-xl font-bold mb-2">{title}</h1>
            <p className="text-gray-700 font-bold">Instrucciones</p>
            <p className="text-gray-700">{description}</p>
            {rules && 
            <div>
                <p className="text-gray-700 font-bold">Reglas:</p>
                <ul className="list-disc pl-10 text-gray-700">
                    {
                        rules.map((rule, index) => (
                            <li key={index} >{rule}</li>
                        ))
                    }
                </ul>
            </div>
           }
        </div>
    </>
    )
}
