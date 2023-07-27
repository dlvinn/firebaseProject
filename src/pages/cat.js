import { useGetCat } from "../components/useGetCat"
export const Cat = () => {

    const {data, refetchData, isLoading } = useGetCat();

    if(isLoading) return <h1>Loading..</h1>

    return <>
    <button onClick={refetchData}>refetch and alert</button>
    <h1>{data?.fact}</h1>
    </>
}