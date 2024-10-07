const BACKEND_URL = "https://big-brother-be-3d6ad173758c.herokuapp.com/";

// Create an Progress Report in DynamoDB
export const createProgressReportInDynamoDB = async (item) => {
  try {
    const response = await fetch(`${BACKEND_URL}v1/progress-report`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Error creating Progress Report in DynamoDB");
    }

    const data = await response.json();
    return { message: "Progress Report created successfully", item: data };
  } catch (error) {
    console.error("Error creating Progress Report:", error);
    throw new Error(error.message);
  }
};

// Retrieve an Progress Report from DynamoDB
export const retrieveProgressReportFromDynamoDB = async (item) => {
  try {
      const response = await fetch(`${BACKEND_URL}v1/progress-report/${item.id}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Progress Report not found");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Error retrieving Progress Report:", error);
    throw new Error(error.message);
  }
};

// Update an Progress Report in DynamoDB
export const updateProgressReportInDynamoDB = async (item) => {
  try {
    const response = await fetch(`${BACKEND_URL}v1/progress-report/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
        const errorDetails = await response.text(); 
        throw new Error(`Error updating Progress Report in DynamoDB: ${errorDetails}`);
    }

    const data = await response.json();
    return { message: "Progress Report updated successfully", item: data };
  } catch (error) {
    console.error("Error updating Progress Report:", error);
    throw new Error(error.message);
  }
};

// Delete an Progress Report from DynamoDB
export const deleteProgressReportFromDynamoDB = async (item) => {
  try {
    const response = await fetch(`${BACKEND_URL}v1/progress-report/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
        const errorDetails = await response.text(); 
        throw new Error(`Error deleting Progress Report in DynamoDB: ${errorDetails}`);
    }

    const data = await response.json();
    return { message: "Progress Report deleted successfully", data };
  } catch (error) {
    console.error("Error deleting Progress Report:", error);
    throw new Error(error.message);
  }

  
};

export const retrieveProgressReportByChildID = async (childID) => {
    try {
      const response = await fetch(`${BACKEND_URL}v1/progress-report/child?childID=${childID}`, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("No Progress Report found for the Child ID");
      }
  
      const data = await response.json();
      return data.entries; 
    } catch (error) {
      console.error("Error retrieving Progress Report for the Child ID:", error);
      throw new Error(error.message);
    }
};
