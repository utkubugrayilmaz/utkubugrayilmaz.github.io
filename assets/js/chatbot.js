/* Utku AI Chatbot Widget (Site Uyumlu Geek Tema) */

// ================= AYARLAR =================
const API_BASE_URL = "https://utku-ai-bot.onrender.com"; 
// ===========================================

function getSessionId() {
    let sessionId = localStorage.getItem("utku_ai_session_id");
    if (!sessionId) {
        sessionId = "sess_" + Math.random().toString(36).substr(2, 9);
        localStorage.setItem("utku_ai_session_id", sessionId);
    }
    return sessionId;
}

// 2. CSS Stilleri (Site Uyumlu + Geek Dokunuşlar)
const styles = `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

    /* Widget Konumu */
    #utku-chat-widget {
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 99999;
        font-family: 'JetBrains Mono', monospace; /* Modern Yazılımcı Fontu */
    }

    /* Açma Butonu (Sitenin Mavisi ile Uyumlu) */
    #chat-toggle-btn {
        background: #2563eb; /* Sitedeki Mavi */
        color: white;
        border: none;
        border-radius: 16px; /* Hafif Köşeli (Yazılımcı stili) */
        width: 60px;
        height: 60px;
        cursor: pointer;
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 24px;
    }
    #chat-toggle-btn:hover { 
        transform: scale(1.1) rotate(-5deg);
        background: #1d4ed8; 
    }

    /* Ana Pencere */
    #chat-container {
        display: none;
        width: 380px;
        height: 600px;
        max-height: 80vh;
        background: #0f172a; /* Koyu Lacivert/Siyah (Modern Dark Mode) */
        border-radius: 16px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        flex-direction: column;
        overflow: hidden;
        position: absolute;
        bottom: 80px;
        right: 0;
        border: 1px solid #334155;
        animation: slideIn 0.3s ease-out;
    }

    /* Mobil Uyumluluk (Fix) */
    @media (max-width: 480px) {
        #chat-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100dvh;
            max-height: 100dvh;
            border-radius: 0;
            border: none;
            z-index: 100000;
        }
        #utku-chat-widget {
            bottom: 20px;
            right: 20px;
        }
        #chat-input-area {
            padding-bottom: env(safe-area-inset-bottom, 20px) !important;
        }
    }

    @keyframes slideIn {
        from { opacity: 0; transform: translateY(20px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* Header */
    #chat-header {
        background: #1e293b;
        color: white;
        padding: 16px 20px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #334155;
        letter-spacing: -0.5px;
    }

    /* Mesaj Alanı */
    #chat-messages {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        background: #0f172a;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    /* Mesaj Balonları */
    .message {
        max-width: 88%;
        padding: 12px 16px;
        font-size: 13px;
        line-height: 1.6;
        position: relative;
        word-wrap: break-word;
        border-radius: 12px;
    }
    
    /* Bot Mesajı */
    .bot-msg {
        background: #1e293b;
        color: #e2e8f0;
        align-self: flex-start;
        border-bottom-left-radius: 2px;
        border: 1px solid #334155;
    }
    .bot-msg::before {
        content: "AI";
        font-size: 10px;
        color: #94a3b8;
        display: block;
        margin-bottom: 4px;
        font-weight: bold;
    }

    /* Kullanıcı Mesajı */
    .user-msg {
        background: #2563eb;
        color: white;
        align-self: flex-end;
        border-bottom-right-radius: 2px;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    }

    /* Input Alanı */
    #chat-input-area {
        padding: 16px;
        background: #1e293b;
        border-top: 1px solid #334155;
        display: flex;
        gap: 12px;
        align-items: center;
    }
    
    #chat-input {
        flex: 1;
        padding: 12px;
        background: #0f172a;
        border: 1px solid #334155;
        border-radius: 8px;
        color: white;
        font-family: 'JetBrains Mono', monospace;
        font-size: 13px;
        outline: none;
        transition: border 0.2s;
    }
    #chat-input:focus { border-color: #2563eb; }
    
    #send-btn {
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 16px;
        cursor: pointer;
        font-weight: bold;
        font-family: 'JetBrains Mono', monospace;
        transition: background 0.2s;
    }
    #send-btn:hover { background: #1d4ed8; }
    #send-btn:disabled { background: #475569; cursor: not-allowed; }
    
    .typing-indicator {
        font-size: 11px;
        color: #94a3b8;
        margin-left: 20px;
        margin-bottom: 10px;
        display: none;
    }
    .typing-indicator::after {
        content: '...';
        animation: blink 1.5s infinite;
    }
    @keyframes blink { 0% { opacity: .2; } 20% { opacity: 1; } 100% { opacity: .2; } }
`;

// 3. HTML Yapısı (Güncelledim)
const html = `
    <div id="utku-chat-widget">
        <div id="chat-container">
            <div id="chat-header">
                <div style="display:flex; align-items:center; gap:10px;">
                    <div style="width:10px; height:10px; background:#22c55e; border-radius:50%;"></div>
                    <div>
                        <div style="font-weight:700;">Utku AI Asistanı</div>
                        <div style="font-size:11px; opacity:0.7;">v1.0 • Online</div>
                    </div>
                </div>
                <span style="cursor:pointer; padding:5px;" onclick="toggleChat()">✕</span>
            </div>
            <div id="chat-messages">
                <div class="message bot-msg">
                    Merhaba! Ben Utku'nun dijital ikiziyim. 🤖<br>Projelerim, kodlarım veya tecrübelerim hakkında her şeyi sorabilirsin.
                </div>
            </div>
            <div class="typing-indicator" id="typing">düşünüyor</div>
            <div id="chat-input-area">
                <input type="text" id="chat-input" placeholder="Komut girin..." onkeypress="handleKeyPress(event)">
                <button id="send-btn" onclick="sendMessage()">GÖNDER</button>
            </div>
        </div>
        <button id="chat-toggle-btn" onclick="toggleChat()">
            <span>>_</span>
        </button>
    </div>
`;

(function initChat() {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
})();

window.toggleChat = function() {
    const container = document.getElementById("chat-container");
    const isVisible = container.style.display === "flex";
    container.style.display = isVisible ? "none" : "flex";
    if (!isVisible && window.innerWidth > 480) {
        document.getElementById("chat-input").focus();
    }
}

window.handleKeyPress = function(e) {
    if (e.key === "Enter") sendMessage();
}

window.sendMessage = async function() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");
    const sendBtn = document.getElementById("send-btn");
    const typing = document.getElementById("typing");
    
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user-msg");
    input.value = "";
    sendBtn.disabled = true;
    typing.style.display = "block";
    messages.scrollTop = messages.scrollHeight;

    try {
        const response = await fetch(`${API_BASE_URL}/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: text,
                session_id: getSessionId()
            })
        });

        const data = await response.json();
        
        if (data.reply) {
            let cleanReply = data.reply
                .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                .replace(/\* (.*?)\n/g, '• $1<br>')
                .replace(/\n/g, '<br>');
            
            addMessage(cleanReply, "bot-msg", true);
        } else if (data.error) {
             addMessage("⚠️ " + data.error, "bot-msg");
        } else {
            addMessage("Bir bağlantı hatası oluştu.", "bot-msg");
        }

    } catch (error) {
        console.error("Chat Error:", error);
        addMessage("Sunucuya ulaşılamıyor.", "bot-msg");
    } finally {
        sendBtn.disabled = false;
        typing.style.display = "none";
        messages.scrollTop = messages.scrollHeight;
    }
}

function addMessage(text, className, isHtml = false) {
    const messages = document.getElementById("chat-messages");
    const div = document.createElement("div");
    div.className = `message ${className}`;
    if (isHtml) div.innerHTML = text;
    else div.innerText = text;
    messages.appendChild(div);
}
