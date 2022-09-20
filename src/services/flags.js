import { checkError, client } from './client';

export async function fetchFlags() {
  const resp = await client.from('flags').select('*');
  return checkError(resp);
}