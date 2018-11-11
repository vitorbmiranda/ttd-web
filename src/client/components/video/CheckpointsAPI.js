const ROOT_URL = 'http://localhost:8081';

export default async function get(tutorialId) {
  try {
    const res = await fetch(`${ROOT_URL}/v1/tutorial/${tutorialId}/checkpoint`);
    if (!res.ok) {
      return { error: { type: 'INVALID_STATUS', status: res.status, body: await res.json() } };
    }
    return { data: await res.json() };
  } catch (err) {
    return { error: { type: 'NETWORK_ERROR', message: err.message } };
  }
}
