type textInputProps = {
    placeholder:string;
    inputRef: React.RefObject<HTMLInputElement | null>;
    }

export const TextInput = ({placeholder, inputRef} : textInputProps) => {
  return (
    <input type="text" className="w-full p-2 border border-gray-300 rounded mb-4" placeholder={placeholder} ref={inputRef}/>
  )
}
