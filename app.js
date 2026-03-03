// NewsBubble - Interactive News Topic Visualization
// See what's trending in the news — at a glance

// ============= STATE =============
const state = {
    articles: [],
    topics: new Map(),
    apiKey: localStorage.getItem('newsbubble_apikey') || '',
    mode: 'welcome', // welcome, demo, live
    autoRefresh: false,
    refreshInterval: null
};

// ============= CONFIG =============
const CONFIG = {
    maxTopics: 25,
    minTopicFrequency: 2,
    bubblePadding: 8,
    colors: [
        '#6366f1', '#06b6d4', '#8b5cf6', '#ec4899', '#f59e0b',
        '#22c55e', '#ef4444', '#3b82f6', '#14b8a6', '#f97316',
        '#a855f7', '#10b981', '#f43f5e', '#0ea5e9', '#eab308'
    ]
};

// ============= DEMO DATA =============
const demoTopics = [
    { name: 'AI Technology', count: 45, articles: [] },
    { name: 'Climate Change', count: 38, articles: [] },
    { name: 'Stock Market', count: 32, articles: [] },
    { name: 'Elections', count: 28, articles: [] },
    { name: 'Space Exploration', count: 22, articles: [] },
    { name: 'Healthcare', count: 18, articles: [] },
    { name: 'Cryptocurrency', count: 15, articles: [] },
    { name: 'Electric Vehicles', count: 12, articles: [] },
    { name: 'Social Media', count: 10, articles: [] },
    { name: 'Sports', count: 8, articles: [] }
];

const demoArticles = {
    'AI Technology': [
        { title: 'New AI Model Breaks Performance Records', source: 'TechCrunch', url: '#', publishedAt: new Date().toISOString() },
        { title: 'AI Regulation Debate Heats Up in Congress', source: 'Reuters', url: '#', publishedAt: new Date().toISOString() },
        { title: 'How AI is Transforming Healthcare', source: 'Wired', url: '#', publishedAt: new Date().toISOString() }
    ],
    'Climate Change': [
        { title: 'Global Temperatures Hit New High', source: 'BBC News', url: '#', publishedAt: new Date().toISOString() },
        { title: 'Renewable Energy Investment Surges', source: 'Bloomberg', url: '#', publishedAt: new Date().toISOString() }
    ],
    'Stock Market': [
        { title: 'Markets Rally on Economic Data', source: 'CNBC', url: '#', publishedAt: new Date().toISOString() },
        { title: 'Tech Stocks Lead Gains Today', source: 'Wall Street Journal', url: '#', publishedAt: new Date().toISOString() }
    ]
};

// ============= DOM ELEMENTS =============
const elements = {
    demoBtn: document.getElementById('demoBtn'),
    liveBtn: document.getElementById('liveBtn'),
    welcomeDemoBtn: document.getElementById('welcomeDemoBtn'),
    welcomeLiveBtn: document.getElementById('welcomeLiveBtn'),
    settingsPanel: document.getElementById('settingsPanel'),
    closeSettings: document.getElementById('closeSettings'),
    loadNewsBtn: document.getElementById('loadNewsBtn'),
    statusBar: document.getElementById('statusBar'),
    modeDisplay: document.getElementById('modeDisplay'),
    articleCount: document.getElementById('articleCount'),
    topicCount: document.getElementById('topicCount'),
    lastUpdate: document.getElementById('lastUpdate'),
    refreshBtn: document.getElementById('refreshBtn'),
    visualization: document.getElementById('visualization'),
    articlePanel: document.getElementById('articlePanel'),
    panelTitle: document.getElementById('panelTitle'),
    articleList: document.getElementById('articleList'),
    closePanel: document.getElementById('closePanel'),
    tooltip: document.getElementById('tooltip'),
    category: document.getElementById('category'),
    country: document.getElementById('country'),
    apiKey: document.getElementById('apiKey')
};

// ============= INITIALIZATION =============
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    if (state.apiKey) {
        elements.apiKey.value = state.apiKey;
    }
});

function initializeEventListeners() {
    // Demo buttons
    elements.demoBtn?.addEventListener('click', loadDemoMode);
    elements.welcomeDemoBtn?.addEventListener('click', loadDemoMode);
    
    // Live news buttons
    elements.liveBtn?.addEventListener('click', showSettings);
    elements.welcomeLiveBtn?.addEventListener('click', showSettings);
    
    // Settings
    elements.closeSettings?.addEventListener('click', hideSettings);
    elements.loadNewsBtn?.addEventListener('click', loadLiveNews);
    
    // Panel
    elements.closePanel?.addEventListener('click', closeArticlePanel);
    
    // Refresh
    elements.refreshBtn?.addEventListener('click', () => {
        if (state.mode === 'demo') loadDemoMode();
        else if (state.mode === 'live') loadLiveNews();
    });
    
    // Escape key closes panel
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeArticlePanel();
    });
}

// ============= MODE SWITCHING =============
function loadDemoMode() {
    state.mode = 'demo';
    hideSettings();
    showLoading('Loading demo topics...');
    
    // Simulate loading delay
    setTimeout(() => {
        // Create demo topics with articles
        state.topics.clear();
        demoTopics.forEach(topic => {
            const color = CONFIG.colors[Array.from(state.topics.size).length % CONFIG.colors.length];
            state.topics.set(topic.name, {
                name: topic.name,
                count: topic.count,
                articles: demoArticles[topic.name] || [],
                color: color
            });
        });
        
        state.articles = Object.values(demoArticles).flat();
        renderVisualization(Array.from(state.topics.values()));
        updateStatusBar('Demo Mode');
    }, 800);
}

function showSettings() {
    elements.settingsPanel.classList.remove('hidden');
    elements.visualization.classList.add('hidden');
}

function hideSettings() {
    elements.settingsPanel.classList.add('hidden');
    elements.visualization.classList.remove('hidden');
}

async function loadLiveNews() {
    const apiKey = elements.apiKey.value.trim();
    
    if (!apiKey) {
        alert('Please enter your NewsAPI key. Get one free at newsapi.org/register');
        return;
    }
    
    // Save API key
    state.apiKey = apiKey;
    localStorage.setItem('newsbubble_apikey', apiKey);
    
    state.mode = 'live';
    hideSettings();
    showLoading('Fetching latest news...');
    
    const category = elements.category.value;
    const country = elements.country.value;
    
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&pageSize=100`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch news');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
            state.articles = data.articles || [];
            processArticles();
        } else {
            throw new Error(data.message || 'Invalid response from API');
        }
        
    } catch (error) {
        console.error('Error fetching news:', error);
        showError(error.message);
    }
}

// ============= ARTICLE PROCESSING =============
function processArticles() {
    state.topics.clear();
    
    // Extract keywords from headlines
    state.articles.forEach(article => {
        if (!article.title) return;
        
        const keywords = extractKeywords(article.title);
        
        keywords.forEach(keyword => {
            if (!state.topics.has(keyword)) {
                state.topics.set(keyword, {
                    name: keyword,
                    count: 0,
                    articles: [],
                    color: CONFIG.colors[state.topics.size % CONFIG.colors.length]
                });
            }
            
            const topic = state.topics.get(keyword);
            topic.count++;
            
            if (!topic.articles.find(a => a.url === article.url)) {
                topic.articles.push(article);
            }
        });
    });
    
    // Filter and sort
    let topicArray = Array.from(state.topics.values())
        .filter(t => t.count >= CONFIG.minTopicFrequency)
        .sort((a, b) => b.count - a.count)
        .slice(0, CONFIG.maxTopics);
    
    renderVisualization(topicArray);
    updateStatusBar('Live News');
}

function extractKeywords(title) {
    const stopWords = new Set([
        'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
        'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been',
        'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
        'could', 'should', 'may', 'might', 'must', 'shall', 'can', 'need',
        'this', 'that', 'these', 'those', 'it', 'its', 'as', 'if', 'when',
        'than', 'because', 'while', 'although', 'though', 'after', 'before',
        'until', 'unless', 'since', 'so', 'yet', 'nor', 'neither', 'either',
        'both', 'all', 'any', 'some', 'no', 'not', 'only', 'own', 'same',
        'just', 'also', 'very', 'even', 'about', 'into', 'through', 'during',
        'above', 'below', 'between', 'under', 'again', 'further', 'then',
        'once', 'here', 'there', 'where', 'why', 'how', 'what', 'which',
        'who', 'whom', 'whose', 'new', 'top', 'breaking', 'live', 'update',
        'says', 'report', 'year', 'today', 'week', 'month', 'first', 'one'
    ]);
    
    const words = title.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(word => word.length > 3 && !stopWords.has(word));
    
    return [...new Set(words)];
}

// ============= VISUALIZATION =============
function renderVisualization(topics) {
    elements.visualization.innerHTML = '';
    
    if (topics.length === 0) {
        showEmptyState();
        return;
    }
    
    const width = elements.visualization.clientWidth;
    const height = 500;
    
    const svg = d3.select('#visualization')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`);
    
    // Scale for bubble sizes
    const maxCount = Math.max(...topics.map(t => t.count));
    const minCount = Math.min(...topics.map(t => t.count));
    
    const radiusScale = d3.scaleSqrt()
        .domain([minCount, maxCount])
        .range([35, Math.min(width, height) / 4.5]);
    
    // Pack layout
    const root = d3.hierarchy({ children: topics })
        .sum(d => radiusScale(d.count) ** 2);
    
    const pack = d3.pack()
        .size([width, height])
        .padding(CONFIG.bubblePadding);
    
    pack(root);
    
    // Create bubble groups
    const bubbles = svg.selectAll('.bubble-group')
        .data(root.children)
        .enter()
        .append('g')
        .attr('class', 'bubble-group')
        .attr('transform', d => `translate(${d.x},${d.y})`);
    
    // Draw circles
    bubbles.append('circle')
        .attr('class', 'bubble')
        .attr('r', d => d.r)
        .attr('fill', d => d.data.color)
        .attr('stroke', 'rgba(255, 255, 255, 0.3)')
        .attr('stroke-width', 2)
        .on('mouseover', handleMouseOver)
        .on('mousemove', handleMouseMove)
        .on('mouseout', handleMouseOut)
        .on('click', handleClick);
    
    // Add topic name
    bubbles.append('text')
        .attr('class', 'bubble-text')
        .attr('text-anchor', 'middle')
        .attr('dy', '-0.3em')
        .text(d => {
            const text = d.data.name;
            const maxChars = Math.floor(d.r / 5);
            return text.length > maxChars ? text.substring(0, maxChars) + '...' : text;
        })
        .style('font-size', d => Math.min(15, d.r / 3.5) + 'px');
    
    // Add count
    bubbles.append('text')
        .attr('class', 'bubble-count')
        .attr('text-anchor', 'middle')
        .attr('dy', '1.3em')
        .text(d => d.data.count + ' articles')
        .style('font-size', d => Math.min(11, d.r / 5) + 'px');
    
    // Entrance animation
    bubbles.transition()
        .duration(800)
        .delay((d, i) => i * 50)
        .attr('opacity', 1);
}

// ============= INTERACTION HANDLERS =============
function handleMouseOver(event, d) {
    const topic = d.data;
    elements.tooltip.innerHTML = `
        <h4>${topic.name}</h4>
        <p>📰 ${topic.count} articles</p>
        <p style="margin-top: 8px; font-size: 0.85rem;">Click to view articles</p>
    `;
    elements.tooltip.classList.remove('hidden');
    
    d3.select(this)
        .attr('stroke', 'white')
        .attr('stroke-width', 3);
}

function handleMouseMove(event) {
    elements.tooltip.style.left = (event.pageX + 15) + 'px';
    elements.tooltip.style.top = (event.pageY - 10) + 'px';
}

function handleMouseOut() {
    elements.tooltip.classList.add('hidden');
    d3.select(this)
        .attr('stroke', 'rgba(255, 255, 255, 0.3)')
        .attr('stroke-width', 2);
}

function handleClick(event, d) {
    showArticles(d.data);
}

// ============= ARTICLE PANEL =============
function showArticles(topic) {
    state.selectedTopic = topic;
    elements.panelTitle.textContent = `📰 ${topic.name} (${topic.count} articles)`;
    
    if (topic.articles.length === 0) {
        elements.articleList.innerHTML = `
            <div class="empty-state" style="min-height: 200px;">
                <p style="color: var(--text-secondary);">No articles available for this topic.</p>
            </div>
        `;
    } else {
        elements.articleList.innerHTML = topic.articles.map((article, i) => `
            <div class="article-item" style="transition-delay: ${i * 50}ms">
                <h3>
                    <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                        ${article.title}
                    </a>
                </h3>
                <div class="article-meta">
                    <span class="article-source">${article.source.name}</span>
                    <span class="article-date">${formatDate(article.publishedAt)}</span>
                </div>
            </div>
        `).join('');
    }
    
    elements.articlePanel.classList.remove('hidden');
}

function closeArticlePanel() {
    elements.articlePanel.classList.add('hidden');
}

// ============= UTILITY FUNCTIONS =============
function showLoading(message = 'Loading...') {
    elements.visualization.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <p class="loading-text">${message}</p>
        </div>
    `;
    elements.visualization.classList.remove('hidden');
}

function showEmptyState() {
    elements.visualization.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">🫧</div>
            <h3>No Topics Found</h3>
            <p>Try a different category or refresh to get new topics.</p>
        </div>
    `;
}

function showError(message) {
    elements.visualization.innerHTML = `
        <div class="error-state">
            <div class="error-state-icon">❌</div>
            <h3>Oops! Something went wrong</h3>
            <p>${message}</p>
            <button onclick="loadLiveNews()" class="btn-primary" style="margin-top: 20px;">
                🔄 Try Again
            </button>
        </div>
    `;
}

function updateStatusBar(mode) {
    elements.statusBar.classList.remove('hidden');
    elements.modeDisplay.textContent = mode;
    elements.articleCount.textContent = state.articles.length;
    elements.topicCount.textContent = state.topics.size;
    elements.lastUpdate.textContent = new Date().toLocaleTimeString();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (state.topics.size > 0) {
        renderVisualization(Array.from(state.topics.values()));
    }
});
