import { useState } from 'react'

export default function Home() {
  const [apiKey, setApiKey] = useState('')
  const [channelId, setChannelId] = useState('')
  
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1]">
      <header className="bg-gradient-to-r from-[#1a0000] to-[#1a1a1a] border-b-2 border-[#ff0000] p-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">📺</span>
          <div>
            <h1 className="text-xl font-bold">YT Comment <span className="text-[#ff0000]">Tracker</span></h1>
            <p className="text-xs text-gray-400">YouTube Data API v3 Powered</p>
          </div>
        </div>
      </header>
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-[#1a1a1a] border border-[#333] rounded-lg p-6 mb-6">
          <h2 className="text-sm font-bold text-[#ff0000] uppercase mb-4">⚙️ API Setup</h2>
          <input 
            type="text" 
            placeholder="YouTube API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full bg-[#111] border border-[#333] rounded px-3 py-2 mb-3"
          />
          <input 
            type="text" 
            placeholder="Channel ID"
            value={channelId}
            onChange={(e) => setChannelId(e.target.value)}
            className="w-full bg-[#111] border border-[#333] rounded px-3 py-2 mb-3"
          />
          <button className="bg-[#ff0000] hover:bg-[#cc0000] text-white px-6 py-2 rounded font-semibold">
            Connect Channel
          </button>
        </div>
        
        <div className="text-center py-20 text-gray-500">
          <p className="text-4xl mb-4">📬</p>
          <p>Enter your API key and channel ID to start tracking comments</p>
        </div>
      </div>
    </div>
  )
}
