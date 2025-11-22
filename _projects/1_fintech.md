---
layout: page
title: AI-Driven BIST100 Financial Analysis System
description: A comprehensive stock analysis platform using LightGBM and LLMs for signal generation and news sentiment analysis.

importance: 1
category: work
related_publications: false
---

This project was a comprehensive freelance undertaking to build an automated financial analysis system targeting the **BIST100** stock exchange. The goal was to create a "Smart Advisor" that not only predicts stock movements based on technical indicators but also understands the market context through news analysis.

### Key Achievements

Although the project was developed for a startup initiative, the technical outcomes demonstrated significant predictive power:

* **High-Performance Modeling:** Developed a **LightGBM** model that achieved a **Weighted F1-Score of ~0.67**.
* **Risk/Reward Success:** In backtests, the model demonstrated a **0.97 Sharpe Ratio** with approximately **230% return**, significantly outperforming the benchmark.
* **Intelligent News Analysis:** Integrated **DeepSeek LLM** to analyze financial news in multiple languages (TR, EN, DE, KO). The system automatically summarized news and assessed its potential impact on specific stocks.

### Technical Architecture

The system was built with a microservices approach to ensure scalability:

1.  **Backend:** Developed using **FastAPI** for high-performance, asynchronous API endpoints.
2.  **Database:** Used **PostgreSQL** for robust transactional data storage.
3.  **Deployment:** Containerized the entire application using **Docker** for consistent deployment environments.
4.  **MLOps:** Implemented comprehensive documentation including Model Cards and data dictionaries to ensure reproducibility.

### Core Features

* **Automated Buy/Hold/Sell Signals:** Based on technical analysis and ML predictions.
* **Customizable News Feeds:** Users can manage their own news sources for personalized insights.
* **Chatbot Interface:** A multilingual chatbot integrated with the backend for user interaction.

<div class="caption">
    The project showcases the integration of classical Machine Learning (LightGBM) with modern Generative AI (LLMs) in a FinTech context.
</div>
