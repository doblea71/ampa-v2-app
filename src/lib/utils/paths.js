// src/lib/utils/paths.js
export const getAssetPath = (path) => {
    const isDev = process.env.NODE_ENV === 'development';
    return isDev ? `/${path}` : `./${path}`;
};