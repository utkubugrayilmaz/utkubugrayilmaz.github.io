import feedparser
import os
import re
from datetime import datetime

def get_medium_rss_url():
    """_config.yml dosyasından Medium RSS linkini bulur"""
    try:
        with open('_config.yml', 'r', encoding='utf-8') as f:
            content = f.read()
            # Regex ile rss_url satırını bulmaya çalışıyoruz
            match = re.search(r'rss_url:\s*(https://medium\.com/@[\w\d\-\_\.]+/feed)', content)
            if match:
                return match.group(1)
            # Alternatif format (username varsa)
            match_user = re.search(r'medium_username:\s*([\w\d\-\_\.]+)', content)
            if match_user:
                return f"https://medium.com/feed/@{match_user.group(1)}"
    except Exception as e:
        print(f"Config okunurken hata: {e}")
    return None

def clean_title(title):
    """Dosya ismi için başlığı temizler"""
    title = title.lower()
    title = re.sub(r'[^\w\s-]', '', title)
    title = re.sub(r'[-\s]+', '-', title).strip('-')
    return title

def main():
    rss_url = get_medium_rss_url()
    if not rss_url:
        print("HATA: _config.yml içinde Medium RSS adresi bulunamadı!")
        return

    print(f"RSS Adresi: {rss_url}")
    feed = feedparser.parse(rss_url)

    if not os.path.exists('_posts'):
        os.makedirs('_posts')

    for entry in feed.entries:
        # Tarih formatla
        dt = datetime(*entry.published_parsed[:6])
        date_str = dt.strftime('%Y-%m-%d')
        
        # Dosya adı oluştur: YYYY-MM-DD-baslik.md
        slug = clean_title(entry.title)
        filename = f"_posts/{date_str}-{slug}.md"
        
        # İçerik (Front Matter + Link)
        # Medium yazılarını direkt sitede göstermek yerine Medium'a yönlendiriyoruz (SEO ve stil için daha iyi)
        content = f"""---
layout: post
title: "{entry.title.replace('"', '\\"')}"
date: {date_str} {dt.strftime('%H:%M:%S')}
description: Read my article on Medium.
redirect: {entry.link}
tags: [medium]
external_source: medium
---

Redirecting to Medium...
"""
        
        # Dosyayı kaydet (Eğer yoksa)
        if not os.path.exists(filename):
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Yeni Yazi Eklendi: {filename}")
        else:
            print(f"Zaten Var: {filename}")

if __name__ == "__main__":
    main()
