# Nivi — Flight Simulator for Financial Freedom

Nivi is an interactive educational platform designed to build investor intuition, train risk reflexes, and measure emotional discipline through behavioral psychology and real historical market simulations.

## 🌐 Live Demo
Access the live production terminal: **[https://nivi-finance.netlify.app/](https://nivi-finance.netlify.app/)**

---

## ⚡ The Gaps in Financial Education (Why Mock Markets & APIs Fail)

Traditional retail investing tools and educational platforms leave a massive gap between **knowledge** and **behavior**. Nivi was built specifically to address these core limitations:

### 1. The Illusion of standard "Mock Markets" (Paper Trading)
Most paper trading apps give users virtual cash (e.g., $100,000) and tell them to trade live markets. While useful for learning UI mechanics, they fail as educational tools:
- **No Stakes = No Emotional Training:** Because it feels like a game with zero consequences, users take reckless, high-leverage positions they would never take with real money. They don't experience the actual fear, greed, or panic that dictates real trading.
- **Boredom & Inactivity:** Live markets move slowly day-to-day. A user cannot train their cognitive reflexes if they have to wait months to see the results of a long-term strategy.

### 2. The Limitations of Real-Time API Feeds
Financial APIs are designed for execution, not instruction:
- **Missing the Volatility Context:** You cannot learn how you behave during a major financial collapse (like the 2008 Lehman crisis or the 2020 COVID crash) if the current market is in a steady bull run. 
- **No Fast-Forwarding:** Real-time data feeds offer no time compression. To experience a full market cycle, an investor has to wait 5–10 years.

---

## 🧠 How Nivi Fills the Gaps

Nivi acts as a **"flight simulator"** for your investments, replacing passive reading and slow paper trading with intense, compressed historical scenarios:

* **Chronological Time Compression:** Nivi streams **real daily historical NSE candlestick data** at an accelerated pace. A year of historical price action is compressed into a 10-minute session.
* **The Panic Room:** Instead of theoretical lessons, Nivi drops you directly into real historical crashes. You trade in real-time as the Lehman collapse or COVID lockdown plays out on your chart, forcing you to confront your emotional biases.
* **Behavioral Scoring:** Nivi doesn't just calculate your portfolio return; it measures your **Behavioral Score**—penalizing panic-selling at the absolute bottom, chasing speculative tips, and stopping systematic investment plans (SIPs) during market dips.
* **High-Fidelity Terminal Split:** Provides a side-by-side terminal with live order placements, auto-liquidation triggers, dynamic P&L tracking, and streaming candlestick charts.
* **AI-Guided Coping & Debates:** Integrates an autonomous debate chatbot powered by the **Groq API** to bust investment myths and provide real-time cognitive coaching when the market crashes.

---

## 🛠️ Local Development

Nivi is a lightweight static application. To run it locally and ensure all local assets (images, sector CSV data) load properly, serve the project folder using any local HTTP server:

```bash
# Using Python
python -m http.server 5500

# Using Node.js (serve)
npx serve .
```

Then, open `http://localhost:5500` (or the port specified by your server) in your browser.
