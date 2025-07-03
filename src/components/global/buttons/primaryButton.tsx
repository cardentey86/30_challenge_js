type PrimaryButtonProps = {
  title: string;
  method: () => void;
}

export const PrimaryButton = ({title, method}: PrimaryButtonProps) => {
  return (
    <>
    <button className="bg-blue-500 text-white p-2 rounded mb-4" onClick={() => method()}>{title}</button>
    </>
  )
}
