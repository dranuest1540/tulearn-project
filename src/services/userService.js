const API_URL = import.meta.env.VITE_API_URL;

// GET PROFILE
export const getUserProfile = async (id) => {
    const response = await fetch(
        `${API_URL}/users/${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch user profile");
    }

    return response.json();
};


// UPDATE PROFILE
export const updateUserProfile = async (id, userData) => {
    const response = await fetch(
        `${API_URL}/users/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update profile");
    }

    return response.json();
};