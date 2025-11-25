/* Utku AI Chatbot Widget (Mobile Responsive) */

// ================= AYARLAR =================
// Render'dan aldığın linki buraya yapıştır (Sonunda / olmasın)
const API_BASE_URL = "https://utku-ai-bot.onrender.com"; 
// ===========================================

// 1. Session ID Yönetimi
function getSessionId() {
    let sessionId = localStorage.getItem("utku_ai_session_id");
    if (!sessionId) {
        sessionId = "sess_" + Math.random().toString(36).substr(2, 9);
        localStorage.setItem("utku_ai_session_id", sessionId);
    }
    return sessionId;
}

// 2. CSS Stilleri
const styles = `
    #utku-chat-widget {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 99999;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    #chat-toggle-btn {
        background: linear-gradient(135deg, #2563eb, #1e40af);
        color: white;
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #chat-toggle-btn:hover { transform: scale(1.1); }
    #chat-toggle-btn svg { width: 30px; height: 30px; fill: white; }

    #chat-container {
        display: none;
        width: 380px;
        height: 600px;
        max-height: 80vh;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        flex-direction: column;
        overflow: hidden;
        position: absolute;
        bottom: 80px;
        right: 0;
        border: 1px solid #f3f4f6;
        animation: slideIn 0.3s ease;
    }

/* --- MOBİL DÜZELTME --- */
    @media (max-width: 480px) {
        #chat-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%; /* Fallback */
            height: 100dvh; /* Dynamic Viewport Height - Adres çubuğunu hesaba katar */
            max-height: 100dvh;
            border-radius: 0;
            z-index: 100000;
            display: flex;
            flex-direction: column;
        }
        #utku-chat-widget {
            bottom: 20px;
            right: 20px;
        }
        /* Mesaj alanının klavye açılınca sıkışmasını önle */
        #chat-messages {
            flex: 1;
            overflow-y: scroll; /* Mobilde daha iyi scroll için */
            -webkit-overflow-scrolling: touch;
        }
        /* Input alanını her zaman görünür kıl */
        #chat-input-area {
            padding-bottom: env(safe-area-inset-bottom, 20px); /* iPhone çentiği için */
            background: white;
        }
    }

    @keyframes slideIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    #chat-header {
        background: linear-gradient(135deg, #2563eb, #1e40af);
        color: white;
        padding: 18px 20px;
        font-weight: 600;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    #chat-messages {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        background: #f8fafc;
        display: flex;
        flex-direction: column;
        gap: 12px;
        scroll-behavior: smooth;
    }

    .message {
        max-width: 85%;
        padding: 12px 16px;
        border-radius: 16px;
        font-size: 14px;
        line-height: 1.5;
        position: relative;
        word-wrap: break-word;
    }
    .bot-msg {
        background: white;
        color: #1e293b;
        align-self: flex-start;
        border-bottom-left-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #e2e8f0;
    }
    .user-msg {
        background: #2563eb;
        color: white;
        align-self: flex-end;
        border-bottom-right-radius: 4px;
        box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
    }

    #chat-input-area {
        padding: 15px;
        background: white;
        border-top: 1px solid #e2e8f0;
        display: flex;
        gap: 10px;
        align-items: center;
    }
    #chat-input {
        flex: 1;
        padding: 12px 15px;
        border: 1px solid #cbd5e1;
        border-radius: 25px;
        outline: none;
        font-size: 14px;
        transition: border-color 0.2s;
    }
    #chat-input:focus { border-color: #2563eb; }
    
    #send-btn {
        background: #2563eb;
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
    }
    #send-btn:hover { background: #1d4ed8; }
    #send-btn:disabled { background: #94a3b8; cursor: not-allowed; }
    
    .typing-indicator {
        font-size: 12px;
        color: #64748b;
        margin-left: 10px;
        margin-bottom: 5px;
        display: none;
        font-style: italic;
    }
`;

// 3. HTML Yapısı
const html = `
    <div id="utku-chat-widget">
        <div id="chat-container">
            <div id="chat-header">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-size:20px;">🤖</span>
                    <div>
                        <div style="line-height:1.2;">Utku AI Asistanı</div>
                        <div style="font-size:11px; opacity:0.8; font-weight:400;">Online</div>
                    </div>
                </div>
                <span style="cursor:pointer; font-size:20px; padding:5px;" onclick="toggleChat()">✕</span>
            </div>
            <div id="chat-messages">
                <div class="message bot-msg">
                    Merhaba! 👋 Ben Utku'nun dijital asistanıyım. Projeleri, teknik yetkinlikleri veya çalışma geçmişi hakkında bana soru sorabilirsiniz.
                </div>
            </div>
            <div class="typing-indicator" id="typing">Asistan yazıyor...</div>
            <div id="chat-input-area">
                <input type="text" id="chat-input" placeholder="Bir soru sorun..." onkeypress="handleKeyPress(event)">
                <button id="send-btn" onclick="sendMessage()">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                </button>
            </div>
        </div>
        <button id="chat-toggle-btn" onclick="toggleChat()">
            <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path></svg>
        </button>
    </div>
`;

// 4. Widget'ı Sayfaya Yükle
(function initChat() {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
})();

// 5. Fonksiyonlar
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
