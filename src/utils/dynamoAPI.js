const BACKEND_URL = "https://big-brother-be-3d6ad173758c.herokuapp.com/";

// Create an item in DynamoDB
export const createItemInDynamoDB = async (item) => {
  try {
    const response = await fetch(`${BACKEND_URL}v1/test/add-item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Error creating item in DynamoDB");
    }

    const data = await response.json();
    return { message: "Item created successfully", item: data };
  } catch (error) {
    //console.error("Error creating item:", error);
    throw new Error(error.message);
  }
};

// Retrieve an item from DynamoDB
export const retrieveItemFromDynamoDB = async (item) => {
  try {
      const response = await fetch(`${BACKEND_URL}v1/test/get-item?ownerId=${item.ownerId}&id=${item.id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Item not found");
    }

    const data = await response.json();
    return data; // Return the retrieved item
  } catch (error) {
    //console.error("Error retrieving item:", error);
    throw new Error(error.message);
  }
};

// Update an item in DynamoDB
export const updateItemInDynamoDB = async (item) => {
  try {
    const response = await fetch(`${BACKEND_URL}v1/test/update-item`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Error updating item in DynamoDB: ${errorDetails}`");
    }

    const data = await response.json();
    return { message: "Item updated successfully", item: data };
  } catch (error) {
    //console.error("Error updating item:", error);
    throw new Error(error.message);
  }
};

// Delete an item from DynamoDB
export const deleteItemFromDynamoDB = async (item) => {
  try {
    const response = await fetch(`${BACKEND_URL}v1/test/delete-item`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Error deleting item from DynamoDB");
    }

    const data = await response.json();
    return { message: "Item deleted successfully", data };
  } catch (error) {
    //console.error("Error deleting item:", error);
    throw new Error(error.message);
  }
};
