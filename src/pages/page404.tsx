import { Icon } from "@iconify/react/dist/iconify.js"

export const BadRequestPage = () => {
    return (
        <>
            <div className="flex items-center">
                <Icon icon="tabler:alert-circle-filled" width="32" height="32" color="red" />
                <h1>Bad Request</h1>
            </div>
        </>
    )
}