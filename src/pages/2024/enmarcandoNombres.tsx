import { useRef, useState } from "react";
import { Instructions } from "../../components/global/pages/Instructions"
import { Solution } from "../../components/global/pages/solution"
import { TextInput } from "../../components/global/inputs/textInput";
import { PrimaryButton } from "../../components/global/buttons/primaryButton";
import { Response } from "../../components/global/pages/response";

export const EnmarcandoNombres = () => {

    const [list, setList] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const rules : string[] = [
        "Dado un array de nombres, debes crear un marco rectangular que los contenga a todos",
        "Cada nombre debe estar en una línea, alineado a la izquierda",
        "El marco está construido con * y tiene un borde de una línea de ancho",
        "La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado"
    ];

    const resolved = () => {
        const stringAsList = inputRef.current?.value.split(",") || [];
        const isValid = stringAsList.every(item => isNaN(Number(item)) && item.trim() !== "" && item.includes(".") === false);
        if (isValid) {
            const result = createFrame(stringAsList.map(item => item));
            setList(result.length > 0 ? `Enmarcado: \n${result}` : "Lista vacía");
        } else {
            setList("Por favor, ingresa una lista válida de nombres separados por comas.");
        }
    }

    function createFrame(names: string[]): string {
        const logerName = names.reduce((a, b) => a.length > b.length ? a : b);
        const frameWidth = logerName.length + 4; 
        let frame : string[] = ["*".repeat(frameWidth)];
        frame.push(`\n`)
        for (let i = 0; i < names.length; i++) {
            names[i] = `* ${names[i]}${" ".repeat(frameWidth - names[i].length - 4)} * \n`;
        }
        frame = frame.concat(names);
        frame.push("*".repeat(frameWidth));
        return frame.join("");
    }

    return (
        <>
            <Instructions title="Enmarcando Nombres" description="Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico." rules={rules} />
            
            <Response>
                <TextInput placeholder="Ejemplo: [Juan, Pedro, Maria]" inputRef={inputRef} />
                <PrimaryButton title="Resolver" method={resolved} />
                <pre>{list}</pre>
            </Response>
            
            <Solution text={`function createFrame(names: string[]): string {
                const logerName = names.reduce((a, b) => a.length > b.length ? a : b);
                const frameWidth = logerName.length + 4; 
                let frame : string[] = ["*".repeat(frameWidth)];
                frame.push('\\n')
                for (let i = 0; i < names.length; i++) {
                    names[i] = * \${names[i]}\${" ".repeat(frameWidth - names[i].length - 4)} * \\n";
                }
                frame = frame.concat(names);
                frame.push("*".repeat(frameWidth));
                return frame.join("");}
                `}/>

        </>
    )
}
