import usePosts from "../hooks/usePosts";
import { RefreshCcw } from 'lucide-react';
import style from "./Posts.module.css";

export default function Posts() {
    const {posts, loading, setLoading, error} = usePosts();

    if (loading) return <p>carregando...</p>
    if (error) return <p>Error</p>

    return (
        <div className={style.container}>
            <h1 className={style.title}>Posts</h1>
            <RefreshCcw onClick={() => {setLoading(true)}} />
            <ul>
                {posts.map(post => <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </li>)}
            </ul>
        </div>
    );
}