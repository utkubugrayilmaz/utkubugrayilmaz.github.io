---
layout: page
title: PostaX - ML-Enhanced Smart Mail System
description: An intelligent IoT mailbox system utilizing machine learning for anomaly detection and secure hardware integration.
img: assets/img/postax.jpg
importance: 4
category: work
related_publications: false
---

PostaX is a comprehensive graduation project designed to revolutionize traditional mail delivery security. It creates a secure, offline-capable ecosystem using **IoT** and **TinyML**, addressing the vulnerabilities of traditional mailboxes.

### Key Features

* **Secure Delivery (OTP):** Integrated with **Telegram API**. When a courier arrives, the system generates a secure **One-Time Password (OTP)** sent to your phone. The door opens only with the correct code via the keypad and auto-locks after 4 seconds.
* **Offline Failover Mode:** Works seamlessly even without internet/Wi-Fi. The system intelligently switches to **Offline Mode** using **10 pre-generated secure keys** stored in memory, ensuring functionality during power or network outages.
* **Real-Time Monitoring:** **ESP32-CAM** captures delivery moments 24/7. If the system is offline, it stores images locally and automatically syncs them via Telegram once connectivity is restored.
* **Anomaly Detection:** Running **TinyML** models directly on the edge (Arduino BLE 33) to analyze user behavior and detect suspicious access attempts.

### Technical Architecture

Unlike traditional systems, PostaX uses an optimized **I2C Communication Protocol** between its core units:
* **Control Unit:** Arduino BLE 33 Rev2 (Handles Logic, Sensors, and ML).
* **Vision & Connectivity:** ESP32-CAM (Handles Image Processing and Wi-Fi/Telegram).

### Tech Stack
* **Hardware:** Arduino BLE 33 Rev2, ESP32-CAM, Keypad, Solenoid Locks.
* **Connectivity:** Wi-Fi, Bluetooth Low Energy (BLE), I2C, UART.
* **Software & AI:** Python, C++ (Embedded), Telegram Bot API, TinyML.

<div class="row">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/postax_diagram.jpg" title="System Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System architecture showing the I2C communication and Offline Failover mechanism.
</div>
