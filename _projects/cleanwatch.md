---
layout: page
title: CleanWatch - Universal Stream Player
description: Open-source desktop player to watch streams without ads, trackers, or browser lag.
img: assets/img/publication_preview/cleanwatch_logo.jpg
importance: 1
category: work
related_publications: false
---

**"Necessity is the mother of invention."**

One evening, while watching *Behzat Ç.* on PuhuTV, my patience ran out due to unskippable ads and high browser RAM usage. Instead of closing the tab, I opened my IDE. The result is **CleanWatch**.

<div class="row justify-content-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/cleanwatch_ui.jpg" title="CleanWatch UI" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CleanWatch Interface: Watching streams ad-free with minimal resource usage.
</div>

CleanWatch is an open-source, lightweight desktop player that allows you to watch videos from platforms like **YouTube, PuhuTV, Twitch, and Twitter (X)** directly on your desktop, bypassing web-based ads and trackers entirely.

### Key Features

* **Ad-Free Experience:** Bypasses web player ads entirely by extracting the direct raw stream source.
* **Lightweight & Fast:** Consumes significantly less RAM/CPU compared to Chrome or Edge web players.
* **Smart Engine:** Automatically detects the platform and manipulates HLS/DASH flows to select the best stream format (e.g., m3u8 for PuhuTV, Safe MP4 for YouTube).
* **Modern UI:** A dark-mode interface designed with **PyQt5**, utilizing a threading architecture for a lag-free experience.

### Technical Architecture

This isn't just a wrapper; it's a stream manipulation tool.

1.  **Backend Logic:** I modified the `yt-dlp` library to intercept HLS and DASH streams before they hit the web player logic.
2.  **Rendering Engine:** Integrated the **VLC Media Engine** into Python for high-performance video rendering without external codecs.
3.  **Concurrency:** Implemented a robust **Threading** structure to separate the UI loop from the stream buffering process, ensuring the app never freezes.
4.  **Distribution:** Packaged as a standalone `.exe` using **PyInstaller** for easy distribution.

### Tech Stack
* **Language:** Python 3.x
* **GUI:** PyQt5 (Qt Designer)
* **Core Libraries:** yt-dlp (Customized), python-vlc
* **Build Tool:** PyInstaller

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <a href="https://github.com/utkubugrayilmaz/CleanWatch" target="_blank" class="btn btn-primary" role="button">View on GitHub & Download</a>
    </div>
</div>
