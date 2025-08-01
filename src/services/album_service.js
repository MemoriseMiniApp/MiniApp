const API_BASE_URL = 'https://213.176.65.159.nip.io';

export async function createAlbum(album, jwt) {
  try {
    const response = await fetch(`${API_BASE_URL}/albums/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
        'accept': 'application/json',
      },
      body: JSON.stringify(album),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // AlbumOut
  } catch (error) {
    console.error('Error creating album:', error);
    throw error;
  }
}


export async function get_my_albums(jwt) {
  try {
    const response = await fetch(`${API_BASE_URL}/albums/my`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
        'accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); 
  } catch (error) {
    console.error('Error fetching my albums:', error);
    throw error;
  }
}