import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection} from 'firebase/firestore'
import { auth, db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface CreateFormData{
    title: string,
    description: string
}

export const CreateForm = () => {

    const navigate = useNavigate();
    const [ user ] = useAuthState(auth);

    const schema = yup.object().shape({
        title: yup.string().required("you have to provide the title."),
        description: yup.string().required("you have to provide the description.")
    });

    const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData) => {
       
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        })
        navigate("/")
    }
    return <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder='Title...' {...register("title")}/>
        <p>{errors.title?.message}</p>
        <textarea placeholder='Description...' {...register("description")}/>
        <p>{errors.description?.message}</p>
        <p>{errors.root?.message}</p>

        <input type='submit' className='submitForm'/>
    </form>
}