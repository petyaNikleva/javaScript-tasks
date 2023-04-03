const baseUrl = 'https://jsonplaceholder.typicode.com';

const getUsers = async () => {
    try {
        const res = await fetch(`${baseUrl}/users`);
        return res.json();
    } catch (error) {
        console.log('Error fetching users:', error);
        throw error;
    }
};

const getPosts = async () => {
    try {
        const res = await fetch(`${baseUrl}/posts`);
        return res.json();
    } catch (error) {
        console.log('Error fetching posts:', error);
        throw error;
    }
};

const createMapDataStructure = (arr) => {
    return arr.reduce((collection, post) => {
        if (!collection.has(post.userId)) {
            collection.set(post.userId, []);
        }
        collection.get(post.userId).push(post);
        return collection;
    }, new Map());
}

const addUsersPosts = async () => {
    try {
        const [users, posts] = await Promise.all([getUsers(), getPosts()]);
        const idsWithPosts = createMapDataStructure(posts);
        return users.map(user => {
            const myPosts = idsWithPosts.get(user.id);
            return { ...user, myPosts };
        })
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
