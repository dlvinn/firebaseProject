import { useQuery } from "@tanstack/react-query"
import Axios from 'axios';

export const useGetCat = () => {
    
    const {data, refetch, isLoading, error} = useQuery(["cat"], async () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    })

    const refetchData = () => {
        alert('Data Refetched');
        refetch();
    }

    return {data, refetchData, error, isLoading}
}