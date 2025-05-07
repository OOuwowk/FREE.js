import React, { useEffect, useRef } from 'react';

export default function Preview({ html, css, js }) {
  const ref = useRef();
  
  useEffect(() => {
    const src = `<html><style>${css}</style><body>${html}<script>${js}<\/script></body></html>`;
    ref.current.srcdoc = src;
  }, [html, css, js]);
  
  return <iframe ref={ref} style={{ width: '100%', height: '100%' }} />;
}