const API_URL = import.meta.env.VITE_API_URL;

// GET USER BY ID
export const getUserById = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return response.json();
};

// GET TODO / ASSIGNMENT BY USER ID
export const getUserTodos = async (userId) => {
    const response = await fetch(
        `${API_URL}/todos/user/${userId}?limit=10`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch assignments");
    }

    return response.json();
};

// GET POSTS / LEARNING MATERIALS
export const getPosts = async () => {
    const response = await fetch(
        `${API_URL}/posts?limit=3`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch learning materials");
    }

    return response.json();
};
