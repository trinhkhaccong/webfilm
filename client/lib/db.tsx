import mysql from 'serverless-mysql';

interface excuteQueryProps
{
    query:any;
    values:any;
}

const db = mysql({
  config: {
    host: 'localhost',
    database: 'phim24h',
    user: 'phim24h',
    password: 'phim24h'
  }
});

export async function excuteQuery(props:excuteQueryProps) {
  try {
    const {query,values} = props
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}

export async function excuteQueryOb(props:excuteQueryProps) {
  try {
    let results:any=[]
    const {query,values} = props
    results = await db.query(query, values);
    await db.end();
    return results[0];
  } catch (error) {
    return { error };
  }
}