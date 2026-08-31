const API_URL = import.meta.env.VITE_API_URL;

// GET
export const getAssignments = async (userId) => {
    const response = await fetch(
        `${API_URL}/todos/user/${userId}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch assignments");
    }

    return response.json();
};

// CREATE
export const createAssignment = async (todo, userId) => {
    const response = await fetch(
        `${API_URL}/todos/add`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                todo,
                completed: false,
                userId,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create assignment");
    }

    return response.json();
};

// UPDATE
export const updateAssignment = async (id, data) => {
    const response = await fetch(
        `${API_URL}/todos/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update assignment");
    }

    return response.json();
};

// DELETE
export const deleteAssignment = async (id) => {
    const response = await fetch(
        `${API_URL}/todos/${id}`,
        {
            method: "DELETE",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete assignment");
    }

    return response.json();
};