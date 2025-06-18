const API_BASE_URL = 'http://213.176.65.159.nip.io:8001/memorise';

export async function getFilesByUserId(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/files/${userId}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.files; // returns array of file URLs
  } catch (error) {
    console.error('Error fetching files:', error);
    return [];
  }
}