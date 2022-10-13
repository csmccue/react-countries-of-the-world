import { checkError, client } from './client';

export async function fetchFlags() {
  const resp = await client.from('countries').select('*');
  console.log(resp);
  return checkError(resp);
}