// Declarations for importing static assets and styles in TS/TSX files
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

// Vite client types
/// <reference types="vite/client" />

// Optional type shim so the project type-checks even before the package is installed
declare module 'framer-motion';
