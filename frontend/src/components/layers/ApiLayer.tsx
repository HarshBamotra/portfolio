import React, { useState } from 'react';
import { DATA_API_ENDPOINTS } from '../../data/mockData';
import type { ApiEndpoint } from '../../types/portfolio';
import './ApiLayer.css';

export const ApiLayer: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(DATA_API_ENDPOINTS[0]);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{
    status: number;
    ms: number;
    body: unknown;
  } | null>(null);

  const handleSendRequest = () => {
    setLoading(true);
    setResponse(null);

    const ms = 200 + Math.floor(Math.random() * 250);
    setTimeout(() => {
      setResponse({
        status: 200,
        ms,
        body: selectedEndpoint.data,
      });
      setLoading(false);
    }, ms);
  };

  const renderJsonSyntax = (data: unknown) => {
    const json = JSON.stringify(data, null, 2);
    return json
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
      .replace(/: "([^"]*)"/g, ': <span class="json-str">"$1"</span>');
  };

  return (
    <main className="api-layer-wrap">
      <div className="api-shell">
        <aside className="api-side">
          <div className="side-label">ENDPOINTS</div>
          {DATA_API_ENDPOINTS.map((ep) => (
            <button
              key={ep.path}
              type="button"
              className={`endpoint-btn ${selectedEndpoint.path === ep.path ? 'active' : ''}`}
              onClick={() => {
                setSelectedEndpoint(ep);
                setResponse(null);
              }}
            >
              <span className="method">{ep.method}</span>
              <span className="path">{ep.path}</span>
            </button>
          ))}
        </aside>

        <div className="api-main">
          <div className="req-line">
            <span className="method-badge">{selectedEndpoint.method}</span>
            <span className="req-path-text">{selectedEndpoint.path}</span>
            <button
              type="button"
              className="send-btn"
              onClick={handleSendRequest}
              disabled={loading}
            >
              {loading ? 'sending...' : 'send request'}
            </button>
          </div>

          <div className="curl-line">
            <span className="p">$</span> curl https://harshbamotra.dev{selectedEndpoint.path}
          </div>

          <div className="resp-box">
            <div className="resp-meta">
              {response ? (
                <>
                  <span className="status-ok">200 OK</span>
                  <span>{response.ms} ms</span>
                  <span>application/json</span>
                </>
              ) : loading ? (
                <span>connecting to https://harshbamotra.dev{selectedEndpoint.path} ...</span>
              ) : (
                <span>no request sent yet</span>
              )}
            </div>

            <pre className="resp-body">
              {response ? (
                <span dangerouslySetInnerHTML={{ __html: renderJsonSyntax(response.body) }} />
              ) : (
                <span className="resp-placeholder">
                  // pick an endpoint on the left, then hit "send request"
                </span>
              )}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
};
