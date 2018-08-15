const ROOT_URL = 'http://localhost:8081';

export default async function get(game) {
  try {
    const res = await fetch(`${ROOT_URL}/v1/level?game=${game}`);
    if (!res.ok) {
      return { error: { type: 'INVALID_STATUS', status: res.status, body: await res.json() } };
    }
    return { data: await res.json() };
  } catch (err) {
    return { error: { type: 'NETWORK_ERROR', message: err.message } };
  }
}
