export async function fetchData(url: string, fail: boolean) {
  if (fail) url = 'https://fail';
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching data: ${error}`);
  }
}
