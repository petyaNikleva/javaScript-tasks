const baseUrl = 'https://jsonplaceholder.typicode.com';

const getUsers = async () => {
    try {
        const res = await fetch(`${baseUrl}/users`);
        return await res.json();
    } catch (error) {
        console.log('Error fetching users:', error);
        throw error;
    }
};

const getPosts = async () => {
    try {
        const res = await fetch(`${baseUrl}/posts`);
        return await res.json();
    } catch (error) {
        console.log('Error fetching posts:', error);
        throw error;
    }
};

const addUsersPosts = async () => {
    try {
        const [users, posts] = await Promise.all([getUsers(), getPosts()]);
        return users.map(user => {
            const myPosts = posts.filter(post => post.userId === user.id);
            return { ...user, myPosts };
        });
    } catch (error) {
        console.log('Error adding posts to users:', error);
        throw error;
    }
}

addUsersPosts().then((usersWithPosts) => {
    console.log(usersWithPosts);
}).catch((error) => {
    console.log('Error:', error);
});
