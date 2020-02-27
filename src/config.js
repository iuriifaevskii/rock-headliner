import dotenv from 'dotenv';

dotenv.config();

const nodeEnv = process.env.NODE_ENV;
const apiUrl = process.env.REACT_APP_API_URL;

export { nodeEnv, apiUrl };
