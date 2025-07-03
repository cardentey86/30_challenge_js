import { useRef, useState } from "react";
import { Instructions } from "../../components/global/pages/Instructions"
import { Solution } from "../../components/global/pages/solution"
import { TextInput } from "../../components/global/inputs/textInput";
import { PrimaryButton } from "../../components/global/buttons/primaryButton";

export const PrimerRegaloPage = () => {

    const [list, setList] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const resolved = () => {
        const stringAsList = inputRef.current?.value.split(",") || [];
        const isValid = stringAsList.every(item => !isNaN(parseInt(item)) && item.trim() !== "");
        if (isValid) {
            const result = prepareGifts(stringAsList.map(item => parseInt(item.trim())));
            setList(result.length > 0 ? `Lista de regalos: [${result.join(", ")}]` : "No se encontraron regalos únicos.");
        } else {
            setList("Por favor, ingresa una lista válida de números enteros separados por comas.");
        }
    }

    function prepareGifts(gifts: number[]): string[] {
        const uniqueGifts = Array.from(new Set(gifts));
        return uniqueGifts.sort((a, b) => a - b).map(String);
    }

    return (
        <>
            <Instructions title="Primer Regalo repetido" description="Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.
            Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente." />
            
            <div className="container mx-auto p-4">
                <h1 className="text-gray-700 font-bold mb-2">Respuesta</h1>
                <TextInput placeholder="Ejemplo: [3, 1, 2, 3, 4, 2]" inputRef={inputRef} />
               
                <PrimaryButton title="Resolver" method={resolved} />
               <p>{list}</p>
            </div>
            
            <Solution text={`function prepareGifts(gifts: number[]): string[] {
            const uniqueGifts = Array.from(new Set(gifts));
            return uniqueGifts.sort((a, b) => a - b).map(String);
            }`}/>

        </>
    )
}
