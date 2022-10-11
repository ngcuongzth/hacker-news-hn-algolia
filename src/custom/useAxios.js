import { useState, useEffect } from 'react'
import axios from 'axios'
const useAxios = (url) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState([]);

    const fetchResponse = async (url) => {
        setLoading(true)
        try {
            const response = await axios.get(url);
            const data = response.data
            setResponse(data)
            setLoading(false)
        }
        catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchResponse(url);
    }, [url])

    return {
        loading, response
    }
}

export default useAxios