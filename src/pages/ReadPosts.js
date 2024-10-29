import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);

    // Function to fetch all posts from the 'Posts' table
    const fetchPosts = async () => {
        const { data } = await supabase
            .from('Posts')
            .select();

        // Set state with the fetched posts data
        setPosts(data);
    };

    useEffect(() => {
        setPosts(props.data); // Set initial posts from props if any

        // Call fetchPosts to fetch data from Supabase
        fetchPosts();
    }, [props]); // Run only once when props change (or on initial render)

    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ? (
                    posts.map((post, index) => 
                        <Card key={index} id={post.id} title={post.title} author={post.author} description={post.description} />
                    )
                ) : (
                    <h2>{'No Challenges Yet 😞'}</h2>
                )
            }
        </div>
    );
};

export default ReadPosts;
