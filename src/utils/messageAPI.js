const BACKEND_URL = "https://big-brother-be-3d6ad173758c.herokuapp.com/";

// Create an Message in DynamoDB
export const createMessageInDynamoDB = async (item) => {
  const token = localStorage.getItem('token');

  if (!token) {
      throw new Error("No token found");
  }

  try {
    const response = await fetch(`${BACKEND_URL}v1/message`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`, 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Error creating Message in DynamoDB");
    }

    const data = await response.json();
    return { message: "Message created successfully", item: data };
  } catch (error) {
    //console.error("Error creating Message:", error);
    throw new Error(error.message);
  }
};

// Retrieve an Message from DynamoDB
export const retrieveMessageFromDynamoDB = async (messageID) => {
  const token = localStorage.getItem('token');

  if (!token) {
      throw new Error("No token found");
  }

  try {
      const response = await fetch(`${BACKEND_URL}v1/message/by-ID?messageID=${messageID}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`, 
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Message not found");
    }

    const data = await response.json();
    return { message: "Message retrieved successfully", item: data };
  } catch (error) {
    //console.error("Error retrieving Message:", error);
    throw new Error(error.message);
  }
};

// Update sender deletion in DynamoDB
export const markMessageAsDeletedBySender = async (messageID) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error("No token found");
  }

  try {
    const response = await fetch(`${BACKEND_URL}v1/message/sender/${messageID}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`, 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderDeleted: true,  
      })
    });

    if (!response.ok) {
      const errorDetails = await response.text(); 
      throw new Error(`Error marking message as deleted by sender in DynamoDB: ${errorDetails}`);
    }

    const data = await response.json();
    return { message: "Message marked as deleted by sender successfully", data };
  } catch (error) {
    //console.error("Error marking message as deleted by sender:", error);
    throw new Error(error.message);
  }
};

// Update Receiver deletion in DynamoDB
export const markMessageAsDeletedByReceiver = async (messageID) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error("No token found");
  }

  try {
    const response = await fetch(`${BACKEND_URL}v1/message/receiver/${messageID}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${token}`, 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        receiverDeleted: true,  
      })
    });

    if (!response.ok) {
      const errorDetails = await response.text(); 
      throw new Error(`Error marking message as deleted by receiver in DynamoDB: ${errorDetails}`);
    }

    const data = await response.json();
    return { message: "Message marked as deleted by receiver successfully", data };
  } catch (error) {
    //console.error("Error marking message as deleted by receiver:", error);
    throw new Error(error.message);
  }
};


export const retrieveMessageByReceiverID = async (receiverID) => {

  const token = localStorage.getItem('token');

  if (!token) {
      throw new Error("No token found");
  }
    try {
      const response = await fetch(`${BACKEND_URL}v1/message/receiver?receiverID=${receiverID}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        }
      });
  
      if (!response.ok) {
        throw new Error("No Messages found for the Receiver");
      }
  
      const data = await response.json();
      return data.entries; 
    } catch (error) {
      //console.error("Error retrieving Messages for the Receiver:", error);
      throw new Error(error.message);
    }
};

export const retrieveMessageBySenderID = async (senderID) => {

  const token = localStorage.getItem('token');

  if (!token) {
      throw new Error("No token found");
  }
  try {
    const response = await fetch(`${BACKEND_URL}v1/message/sender?senderID=${senderID}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error("No Messages found for the Sender");
    }

    const data = await response.json();
    return data.entries; 
  } catch (error) {
    //console.error("Error retrieving Messages for the Sender:", error);
    throw new Error(error.message);
  }
};