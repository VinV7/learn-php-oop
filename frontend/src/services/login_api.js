const API_URL = import.meta.env.API_URL

export default async function login(body) {
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
        throw new Error('Login failed')
    }

    return await response.json()
}