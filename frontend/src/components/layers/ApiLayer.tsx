import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { DATA_API_ENDPOINTS } from '../../data/mockData';
import type { ApiEndpoint } from '../../types/portfolio';
import './ApiLayer.css';

export const ApiLayer: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(DATA_API_ENDPOINTS[0]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        {/* Mobile Endpoint Switcher Bar & Expandable Menu */}
        <div className="mobile-endpoint-bar">
          <button
            type="button"
            className="mobile-endpoint-toggle-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Select an API endpoint"
          >
            <div className="mobile-endpoint-info">
              <span className="mobile-endpoint-badge">{selectedEndpoint.method}</span>
              <span className="mobile-endpoint-current-path">{selectedEndpoint.path}</span>
            </div>
            <div className="mobile-endpoint-action">
              <span className="mobile-endpoint-count">{DATA_API_ENDPOINTS.length} endpoints</span>
              {mobileMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>

          {mobileMenuOpen && (
            <div className="mobile-endpoints-menu">
              <div className="mobile-menu-header">
                <span className="mobile-menu-label">SELECT API ENDPOINT ({DATA_API_ENDPOINTS.length})</span>
                <span className="mobile-menu-hint">Tap to switch</span>
              </div>
              <div className="mobile-endpoints-list">
                {DATA_API_ENDPOINTS.map((ep) => (
                  <button
                    key={ep.path}
                    type="button"
                    className={`mobile-endpoint-item ${selectedEndpoint.path === ep.path ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedEndpoint(ep);
                      setResponse(null);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <div className="mobile-item-main">
                      <span className="method">{ep.method}</span>
                      <span className="path">{ep.path}</span>
                    </div>
                    {ep.description && <span className="desc">{ep.description}</span>}
                    {selectedEndpoint.path === ep.path && (
                      <Check size={16} className="item-check" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Sidebar / Mobile Horizontal Tabs */}
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
                setMobileMenuOpen(false);
              }}
            >
              <span className="method">{ep.method}</span>
              <span className="path">{ep.path}</span>
            </button>
          ))}
        </aside>

        {/* Console & Request Area */}
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
                  // pick an endpoint above or on the left, then hit "send request"
                </span>
              )}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
};
