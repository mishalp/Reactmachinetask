import axios from "axios"
import { useEffect, useState } from "react"

const baseUrl = import.meta.env.VITE_SERVER

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                if (!url) {
                    setError('Url is Undefined')
                    setLoading(false)
                    return
                }
                const res = await axios.get(`${baseUrl}/${url}`)
                setData(res.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [url])

    return { data, loading, error }
}

export default useFetch