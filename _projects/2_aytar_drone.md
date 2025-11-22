---
layout: page
title: Aytar - Autonomous Search & Rescue Drone
description: A voice-based emergency signal recognition system developed for Teknofest, designed to accelerate search and rescue operations.
img: assets/img/aytar_drone.jpg
importance: 2
category: work
related_publications: false
---

Aytar is an autonomous drone project developed to assist in search and rescue operations by detecting human voices and emergency signals in real-time. The project advanced to the **semi-finals** in the **Teknofest** competition, achieving a preliminary score of **90/100**.

### Project Goal

The primary objective was to create a system capable of identifying victims under debris or in difficult terrain by analyzing sound signals, specifically focusing on emergency keywords and human speech patterns.

### Technical Implementation

The software architecture focused on audio processing and real-time decision making:

* **Audio Analysis:** Utilized **MFCC (Mel-Frequency Cepstral Coefficients)** analysis to extract features from sound signals, distinguishing human speech from background noise.
* **Multi-Language Support:** Implemented speech recognition algorithms supporting **Turkish, English, French, and Spanish** to detect emergency keywords in international contexts.
* **Real-Time Processing:** Developed algorithms to process live microphone input and automatically trigger notification systems upon detecting distress signals.

### Tech Stack

* **Core Language:** Python
* **Audio Processing:** SpeechRecognition Library, MFCC Algorithms, Google Speech API
* **Computer Vision:** OpenCV (integrated for visual navigation support)
* **Methodology:** Natural Language Processing (NLP) for keyword extraction and classification

<div class="caption">
    The Aytar project demonstrates the application of audio signal processing in autonomous robotics for humanitarian purposes.
</div>
