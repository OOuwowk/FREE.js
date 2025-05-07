import { useState } from 'react';
import Editor from '@monaco-editor/react';
import Preview from './components/Preview';
import useHealth from './hooks/useHealth';
import './App.css';

function App() {
  const [html, setHtml] = useState('<h1>Hello, Code Playground!</h1>');
  const [css, setCss] = useState('h1 { color: blue; }');
  const [js, setJs] = useState('console.log("Hello from JavaScript!");');

  // Check backend health
  const { health, error } = useHealth();

  return (
    <div className="app-container">
      <header>
        <h1>Code Playground</h1>
        <div className="api-status">
          API Status: {health.status === 'ok' ? 
            <span className="status-ok">Online</span> : 
            <span className="status-error">Offline {error && `(${error})`}</span>
          }
        </div>
      </header>
      
      <div className="editor-container">
        <div className="editors">
          <div className="editor-panel">
            <h3>HTML</h3>
            <Editor
              height="200px"
              defaultLanguage="html"
              defaultValue={html}
              onChange={setHtml}
              options={{ minimap: { enabled: false } }}
            />
          </div>
          
          <div className="editor-panel">
            <h3>CSS</h3>
            <Editor
              height="200px"
              defaultLanguage="css"
              defaultValue={css}
              onChange={setCss}
              options={{ minimap: { enabled: false } }}
            />
          </div>
          
          <div className="editor-panel">
            <h3>JavaScript</h3>
            <Editor
              height="200px"
              defaultLanguage="javascript"
              defaultValue={js}
              onChange={setJs}
              options={{ minimap: { enabled: false } }}
            />
          </div>
        </div>
        
        <div className="preview-panel">
          <h3>Preview</h3>
          <div className="preview-container">
            <Preview html={html} css={css} js={js} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
