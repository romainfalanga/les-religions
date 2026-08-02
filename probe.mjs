const B = 'https://atlas-des-religions.netlify.app/api/dialogue';

export async function ask(system, messages) {
  const res = await fetch(B, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ system, messages }),
  });
  if (!res.ok) return { error: res.status, body: (await res.text()).slice(0, 300) };
  const text = await res.text();
  let out = '';
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (!t.startsWith('data:')) continue;
    const p = t.slice(5).trim();
    if (!p || p === '[DONE]') continue;
    try { out += JSON.parse(p).choices?.[0]?.delta?.content ?? ''; } catch {}
  }
  return { text: out };
}
