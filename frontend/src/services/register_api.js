const API_URL = import.meta.env.REGISTER_API_URL

export default async function register(body) {
    const response = await fetch(
        API_URL,
        {
            method  : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body    : JSON.stringify(body)
        }
    )

    if (!response.ok) {
        throw new Error('Failed to register the account')
    }

    return await response.json()
}