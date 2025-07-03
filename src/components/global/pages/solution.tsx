import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

type SolutionProps = {
    text:string,
}

export const Solution = ({text} : SolutionProps) => {
  return (
    <>
        <div className="container mx-auto p-4">
            <h1 className="text-gray-700 text-xl font-bold mb-2">Solución</h1>
            <div className="background-gray-100 p-4 rounded-lg shadow-md">
                <SyntaxHighlighter language="javascript" style={coy} >
                    {text}
                </SyntaxHighlighter>                
            </div>
        </div>
    </>
    )
}
