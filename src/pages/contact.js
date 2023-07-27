import { useLoaderData, useNavigation } from "react-router-dom";

export const Contact = () => {
    const contactUrl = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <h1>loading...</h1>
    }
    return<>
    <img src={contactUrl} alt="this "/>
    </>
}

export const ContactLoader = async () => {
    const res = await fetch('https://random.dog/woof.json');
    const contact = await res.json();

    return contact.url;
}