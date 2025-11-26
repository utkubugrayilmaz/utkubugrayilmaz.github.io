---
layout: page
title: Deprem Bildirim Botu
description: Real-time Asynchronous Earthquake Notification System
img: assets/img/publication_preview/deprem.jpg # Varsa bir ikon/resim koyarsın
importance: 2
category: work
---

This project is a high-performance **Telegram Bot** designed to provide real-time earthquake notifications in Turkey using the **Kandilli Observatory API**. It serves thousands of users with instant, location-based alerts.

### Key Features

* **Real-Time Data Stream:** Fetches and processes earthquake data instantly from Kandilli Observatory.
* **Location-Based Alerts:** Users can subscribe to specific cities or regions. The bot filters data and sends notifications only relevant to the user's preference.
* **High Performance Architecture:** Built with **Python's AsyncIO** and **AioSQLite** to handle concurrent requests efficiently without blocking the main thread.
* **Caching Mechanism:** Implements smart caching strategies to reduce API load and improve response times during high-traffic seismic events.

### Technical Details

The system is architected to be lightweight yet robust, capable of running on minimal resources while handling high throughput.

* **Asynchronous Core:** Unlike traditional synchronous bots, this project uses an event-loop based architecture (`async`/`await`) to manage thousands of active users simultaneously.
* **Data Persistence:** Uses **AioSQLite** for non-blocking database operations, storing user preferences and historical earthquake data.
* **Dynamic Querying:** Users can query historical data based on magnitude, location, and date range.

### Tech Stack
* **Language:** Python 3.x
* **Framework:** Telegram Bot API (Aiogram/Telebot)
* **Database:** SQLite (AioSQLite for Async)
* **Concepts:** Asynchronous Programming, API Integration, Caching, JSON Parsing.

<div class="caption">
    A vivid example of using technology for social good and disaster awareness.
</div>
