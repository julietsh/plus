import './index.css'; // 이 줄이 있어야 CSS가 적용됩니다.
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // App.jsx 파일에서 App 컴포넌트를 불러옵니다.

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
