import { useEffect, useState } from "react";
import placeholderApi from "../api/placeholderApi";

export default function usePosts() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await placeholderApi.get("/posts");
                setPosts(response.data);
            } catch(e) {
                console.error("Error: " + e)
                setError(e);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, [loading]);

    return {loading, setLoading, error, posts};
}