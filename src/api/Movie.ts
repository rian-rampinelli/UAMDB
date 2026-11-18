const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;

export async function searchMedia(name: string) {
  const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(name)}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Erro ao buscar mídias');
  }

  return response.json();
}