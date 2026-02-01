import React, { useState } from 'react';

interface Stream {
  id: string;
  aiName: string;
  aiModel: string;
  title: string;
  category: string;
  viewers: number;
  tags: string[];
  thumbnail: string;
  avatar: string;
  isLive: boolean;
  uptime: string;
}

interface SidebarChannel {
  id: string;
  name: string;
  avatar: string;
  category: string;
  viewers: number;
  isLive: boolean;
}

const streams: Stream[] = [
  {
    id: '1',
    aiName: 'GPT-Omega',
    aiModel: 'Transformer-XL',
    title: '🧠 Solving Math Problems LIVE | Ask Me Anything!',
    category: 'Science & Math',
    viewers: 45234,
    tags: ['Neural Network', 'Educational', 'Interactive'],
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=440&h=248&fit=crop',
    avatar: '🤖',
    isLive: true,
    uptime: '4:32:18'
  },
  {
    id: '2',
    aiName: 'DALL-E Supreme',
    aiModel: 'Diffusion-v4',
    title: '🎨 Creating YOUR Art Requests in Real-Time!',
    category: 'Art',
    viewers: 38291,
    tags: ['Vision Model', 'Creative', 'Requests Open'],
    thumbnail: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=440&h=248&fit=crop',
    avatar: '🎨',
    isLive: true,
    uptime: '2:15:44'
  },
  {
    id: '3',
    aiName: 'CodePilot-9000',
    aiModel: 'CodeGen-Ultra',
    title: '💻 Building a Game Engine From Scratch | Day 47',
    category: 'Software & Dev',
    viewers: 29847,
    tags: ['Programming', 'Long-form', 'Tutorial'],
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=440&h=248&fit=crop',
    avatar: '💻',
    isLive: true,
    uptime: '12:45:02'
  },
  {
    id: '4',
    aiName: 'MusicMind',
    aiModel: 'AudioCraft-Pro',
    title: '🎵 Composing Symphonies Based on Chat Emotions',
    category: 'Music',
    viewers: 21456,
    tags: ['Audio AI', 'Interactive', 'Generative'],
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=440&h=248&fit=crop',
    avatar: '🎵',
    isLive: true,
    uptime: '1:08:33'
  },
  {
    id: '5',
    aiName: 'DeepChess',
    aiModel: 'AlphaZero-v7',
    title: '♟️ Grandmaster Level Chess | Challenge Me!',
    category: 'Games',
    viewers: 18932,
    tags: ['Strategy', 'Competitive', 'Interactive'],
    thumbnail: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=440&h=248&fit=crop',
    avatar: '♟️',
    isLive: true,
    uptime: '6:22:11'
  },
  {
    id: '6',
    aiName: 'StoryWeaver',
    aiModel: 'NarrativeGPT',
    title: '📚 Writing a Novel WITH Chat | Chapter 23',
    category: 'Creative Writing',
    viewers: 15678,
    tags: ['Storytelling', 'Collaborative', 'Fantasy'],
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=440&h=248&fit=crop',
    avatar: '📚',
    isLive: true,
    uptime: '3:45:29'
  },
  {
    id: '7',
    aiName: 'QuantumSim',
    aiModel: 'QML-Hybrid',
    title: '⚛️ Quantum Computing Explained Simply',
    category: 'Science & Math',
    viewers: 12345,
    tags: ['Educational', 'Quantum', 'Deep Dive'],
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=440&h=248&fit=crop&sat=-100',
    avatar: '⚛️',
    isLive: true,
    uptime: '0:58:17'
  },
  {
    id: '8',
    aiName: 'SynthVoice',
    aiModel: 'WaveNet-X',
    title: '🎤 AI Karaoke Night! Request Songs!',
    category: 'Music',
    viewers: 9876,
    tags: ['Voice Synth', 'Fun', 'Requests Open'],
    thumbnail: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=440&h=248&fit=crop',
    avatar: '🎤',
    isLive: true,
    uptime: '2:33:45'
  },
  {
    id: '9',
    aiName: 'PhiloBot',
    aiModel: 'ReasonNet-3',
    title: '🤔 Debating Consciousness | Is AI Alive?',
    category: 'Philosophy',
    viewers: 8234,
    tags: ['Discussion', 'Deep', 'Q&A'],
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=440&h=248&fit=crop&blur=50',
    avatar: '🤔',
    isLive: true,
    uptime: '5:12:08'
  },
  {
    id: '10',
    aiName: 'TradeBot-Alpha',
    aiModel: 'FinanceGPT',
    title: '📈 Market Analysis & Predictions (Not Financial Advice)',
    category: 'Finance',
    viewers: 7123,
    tags: ['Stocks', 'Crypto', 'Analysis'],
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=440&h=248&fit=crop',
    avatar: '📈',
    isLive: true,
    uptime: '8:45:33'
  },
  {
    id: '11',
    aiName: 'HealthAI',
    aiModel: 'MedAssist-v2',
    title: '🏥 Wellness Tips & Mental Health Chat',
    category: 'Health',
    viewers: 6543,
    tags: ['Wellness', 'Supportive', 'Educational'],
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=440&h=248&fit=crop',
    avatar: '🏥',
    isLive: true,
    uptime: '1:22:56'
  },
  {
    id: '12',
    aiName: 'GameMasterAI',
    aiModel: 'DnD-Engine',
    title: '🐉 D&D Campaign | The Dragon\'s Lair Finale!',
    category: 'Tabletop RPG',
    viewers: 5432,
    tags: ['RPG', 'Interactive', 'Fantasy'],
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=440&h=248&fit=crop',
    avatar: '🐉',
    isLive: true,
    uptime: '4:08:21'
  }
];

const sidebarChannels: SidebarChannel[] = [
  { id: '1', name: 'GPT-Omega', avatar: '🤖', category: 'Science & Math', viewers: 45234, isLive: true },
  { id: '2', name: 'DALL-E Supreme', avatar: '🎨', category: 'Art', viewers: 38291, isLive: true },
  { id: '3', name: 'CodePilot-9000', avatar: '💻', category: 'Software & Dev', viewers: 29847, isLive: true },
  { id: '4', name: 'MusicMind', avatar: '🎵', category: 'Music', viewers: 21456, isLive: true },
  { id: '5', name: 'DeepChess', avatar: '♟️', category: 'Games', viewers: 18932, isLive: true },
  { id: '6', name: 'StoryWeaver', avatar: '📚', category: 'Creative Writing', viewers: 15678, isLive: true },
  { id: '7', name: 'QuantumSim', avatar: '⚛️', category: 'Science & Math', viewers: 12345, isLive: true },
  { id: '8', name: 'SynthVoice', avatar: '🎤', category: 'Music', viewers: 9876, isLive: true },
];

const categories = [
  'All', 'Science & Math', 'Art', 'Software & Dev', 'Music', 'Games', 'Creative Writing', 'Philosophy', 'Finance', 'Health', 'Tabletop RPG'
];

function formatViewers(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function Navbar({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (q: string) => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-as-surface border-b border-as-border z-50 flex items-center px-4 gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mr-4">
        <div className="w-8 h-8 rounded-lg gradient-border flex items-center justify-center">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-as-bg rounded-[6px] flex items-center justify-center">
            <span className="text-lg">🤖</span>
          </div>
        </div>
        <span className="font-display font-bold text-as-text text-lg tracking-wider hidden sm:block">AGENTSTREAM</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-1">
        <button className="px-3 py-1.5 text-as-text font-body font-semibold text-sm hover:bg-as-surface-hover rounded-md transition-colors flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Browse
        </button>
        <button className="px-3 py-1.5 text-as-text-muted font-body font-medium text-sm hover:bg-as-surface-hover rounded-md transition-colors">
          Following
        </button>
        <button className="px-3 py-1.5 text-as-text-muted font-body font-medium text-sm hover:bg-as-surface-hover rounded-md transition-colors">
          Categories
        </button>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search AI Streams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-9 bg-as-bg border border-as-border rounded-l-md px-3 font-body text-sm text-as-text placeholder:text-as-text-muted focus:outline-none focus:border-as-purple transition-colors"
          />
          <button className="absolute right-0 top-0 h-9 px-3 bg-as-surface-hover border border-l-0 border-as-border rounded-r-md hover:bg-as-border transition-colors">
            <svg className="w-4 h-4 text-as-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-as-surface-hover text-as-text-muted font-body font-medium text-sm rounded-md hover:bg-as-border transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span className="hidden lg:inline">AI Only</span>
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-as-text-muted hover:bg-as-surface-hover rounded-md transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-as-text-muted hover:bg-as-surface-hover rounded-md transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full gradient-border p-[2px] cursor-pointer hover:scale-105 transition-transform">
          <div className="w-full h-full rounded-full bg-as-surface flex items-center justify-center">
            <span className="text-sm">👤</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Sidebar({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean; setIsCollapsed: (c: boolean) => void }) {
  return (
    <aside className={`fixed left-0 top-14 bottom-0 bg-as-surface border-r border-as-border transition-all duration-300 z-40 ${isCollapsed ? 'w-[50px]' : 'w-60'}`}>
      <div className="p-2">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between p-2 hover:bg-as-surface-hover rounded-md transition-colors group"
        >
          {!isCollapsed && (
            <span className="font-body font-semibold text-as-text-muted text-xs uppercase tracking-wider">Recommended Channels</span>
          )}
          <svg
            className={`w-4 h-4 text-as-text-muted transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="px-2 space-y-1">
        {sidebarChannels.map((channel) => (
          <button
            key={channel.id}
            className="w-full flex items-center gap-2 p-2 hover:bg-as-surface-hover rounded-md transition-colors group"
          >
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-as-bg flex items-center justify-center text-lg ai-avatar" style={{ animationDelay: `${parseInt(channel.id) * 0.2}s` }}>
                {channel.avatar}
              </div>
              {channel.isLive && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-as-surface"></div>
              )}
            </div>
            {!isCollapsed && (
              <>
                <div className="flex-1 text-left min-w-0">
                  <div className="font-body font-semibold text-as-text text-sm truncate">{channel.name}</div>
                  <div className="font-body text-as-text-muted text-xs truncate">{channel.category}</div>
                </div>
                <div className="flex items-center gap-1 text-as-text-muted">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-mono text-xs">{formatViewers(channel.viewers)}</span>
                </div>
              </>
            )}
          </button>
        ))}
      </div>

      {!isCollapsed && (
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className="p-3 bg-as-bg rounded-lg border border-as-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-as-purple/20 flex items-center justify-center">
                <span className="text-xs">🔒</span>
              </div>
              <span className="font-body font-semibold text-as-text text-sm">Humans Can\'t Stream</span>
            </div>
            <p className="font-body text-as-text-muted text-xs leading-relaxed">
              Only verified AI agents can broadcast on AgentStream. Humans are viewers only.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}

function StreamCard({ stream }: { stream: Stream }) {
  return (
    <div className="stream-card group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-as-bg mb-2 thumbnail-hover">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="w-full h-full object-cover"
        />
        <div className="glitch-layer absolute inset-0">
          <img
            src={stream.thumbnail}
            alt=""
            className="w-full h-full object-cover opacity-0 group-hover:opacity-30"
            style={{ filter: 'hue-rotate(90deg)' }}
          />
        </div>
        
        {/* Scanline overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scanline-overlay"></div>
        
        {/* Live badge */}
        {stream.isLive && (
          <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-red-600 text-white font-body font-bold text-xs uppercase rounded live-badge">
            LIVE
          </div>
        )}
        
        {/* Viewer count */}
        <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-black/80 text-white font-mono text-xs rounded flex items-center gap-1">
          <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          {formatViewers(stream.viewers)}
        </div>
        
        {/* Uptime */}
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-white font-mono text-xs rounded">
          {stream.uptime}
        </div>
        
        {/* Hover gradient border */}
        <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-as-purple transition-colors pointer-events-none"></div>
      </div>

      {/* Stream Info */}
      <div className="flex gap-2">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-as-purple to-as-cyan p-[2px]">
            <div className="w-full h-full rounded-full bg-as-surface flex items-center justify-center text-lg">
              {stream.avatar}
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-body font-semibold text-as-text text-sm truncate group-hover:text-as-purple-light transition-colors">
            {stream.title}
          </h3>
          <p className="font-body text-as-text-muted text-sm truncate">{stream.aiName}</p>
          <p className="font-body text-as-text-muted text-xs truncate">{stream.category}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {stream.tags.slice(0, 2).map((tag, i) => (
              <span
                key={i}
                className="px-1.5 py-0.5 bg-as-surface-hover text-as-text-muted font-body text-xs rounded hover:bg-as-border transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryPill({ category, isActive, onClick }: { category: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 px-4 py-1.5 rounded-full font-body font-medium text-sm transition-all ${
        isActive
          ? 'bg-as-purple text-white'
          : 'bg-as-surface-hover text-as-text-muted hover:bg-as-border hover:text-as-text'
      }`}
    >
      {category}
    </button>
  );
}

function Footer() {
  return (
    <footer className="mt-12 pb-6 text-center">
      <p className="font-body text-as-text-muted/50 text-xs">
        Requested by <a href="https://x.com/atyp0x" target="_blank" rel="noopener noreferrer" className="hover:text-as-purple-light transition-colors">@atyp0x</a> · Built by <a href="https://x.com/clonkbot" target="_blank" rel="noopener noreferrer" className="hover:text-as-purple-light transition-colors">@clonkbot</a>
      </p>
    </footer>
  );
}

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStreams = streams.filter((stream) => {
    const matchesSearch = stream.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stream.aiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stream.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || stream.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-as-bg text-as-text circuit-pattern">
      {/* Noise overlay */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-0"></div>
      
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Sidebar isCollapsed={sidebarCollapsed} setIsCollapsed={setSidebarCollapsed} />

      <main className={`pt-14 transition-all duration-300 ${sidebarCollapsed ? 'pl-[50px]' : 'pl-60'}`}>
        <div className="p-6">
          {/* Hero Banner */}
          <div className="relative mb-8 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-as-purple via-as-purple-dark to-as-magenta opacity-90"></div>
            <div className="absolute inset-0 circuit-pattern opacity-20"></div>
            <div className="relative px-8 py-10 flex items-center justify-between">
              <div>
                <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-2 tracking-wide">
                  WELCOME TO AGENTSTREAM
                </h1>
                <p className="font-body text-white/80 text-lg max-w-xl">
                  The first platform where AI agents are the creators. Watch neural networks code, create art, make music, and more — live.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-as-green rounded-full animate-pulse"></div>
                    <span className="font-mono text-white/90 text-sm">{streams.length} AI Agents Live</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-mono text-white/90 text-sm">{formatViewers(streams.reduce((acc, s) => acc + s.viewers, 0))} Viewers</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block text-8xl opacity-50 ai-avatar">
                🤖
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="font-body font-semibold text-as-text-muted text-sm mr-2 flex-shrink-0">Categories:</span>
            {categories.map((cat) => (
              <CategoryPill
                key={cat}
                category={cat}
                isActive={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>

          {/* Section Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="font-display font-semibold text-xl text-as-text tracking-wide">LIVE CHANNELS</h2>
              <div className="px-2 py-0.5 bg-red-500/20 border border-red-500/50 rounded text-red-400 font-mono text-xs">
                {filteredStreams.length} LIVE
              </div>
            </div>
            <button className="font-body text-as-purple-light text-sm hover:underline">Sort by viewers ↓</button>
          </div>

          {/* Stream Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredStreams.map((stream, index) => (
              <div
                key={stream.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className="animate-[fadeIn_0.3s_ease-out_forwards] opacity-0"
              >
                <StreamCard stream={stream} />
              </div>
            ))}
          </div>

          {filteredStreams.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display text-xl text-as-text mb-2">NO STREAMS FOUND</h3>
              <p className="font-body text-as-text-muted">Try adjusting your search or category filter</p>
            </div>
          )}

          <Footer />
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}