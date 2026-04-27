# 🚨 Rapid Crisis Response System

### AI-Powered Emergency Detection & Real-Time Coordination for Hospitality

---

## 📌 Overview

The **Rapid Crisis Response System** is a real-time emergency management platform designed for hospitality environments (hotels, resorts, campuses).

It enables **instant reporting, AI-based classification, and live coordination** between guests, staff, and emergency responders.

---

## 🎯 Problem Statement

During emergencies:

* Communication is fragmented ❌
* Response time is delayed ❌
* Critical information is lost ❌

👉 This system solves it by creating a **centralized, real-time crisis control platform**.

---

## 🚀 Features

### 🧑 Guest Emergency Panel

* Dropdown-based emergency selection (Fire, Medical, Security)
* Severity level selection (Low, Medium, High)
* Auto location detection 📍
* Contact number input 📞
* One-click alert system 🚨

---

### 🧑‍🚒 Control Room Dashboard

* Real-time incident updates (Socket.io)
* Interactive live map (OpenStreetMap + Leaflet)
* Auto-focus on latest emergency 📍
* Flashing emergency alert banner 🚨
* Severity-based color coding 🎯
* Incident history feed
* Emergency contact display

---

### 🤖 AI Integration

* ML model (Logistic Regression)
* Classifies emergency type from message
* Improves response prioritization

---

### 📊 Analytics & Insights

* Total incidents count
* Category-wise breakdown (Fire, Medical, Security)
* Time-stamped logs

---

## 🧠 Tech Stack

### Frontend

* React.js
* Socket.io Client
* Leaflet (Maps)

### Backend

* Node.js
* Express.js
* Socket.io

### AI Service

* Python
* Flask
* Scikit-learn

---

## 🏗️ Architecture

```
Guest → Frontend → Backend → AI Service
                          ↓
                    Real-time Broadcast
                          ↓
                     Dashboard + Map
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/crisis-response-system.git
cd crisis-response-system
```

---

### 2️⃣ Run AI Service

```bash
cd ai-service
pip install flask scikit-learn pandas
python train.py
python app.py
```

Runs on: `http://localhost:6000`

---

### 3️⃣ Run Backend

```bash
cd server
npm install
node server.js
```

Runs on: `http://localhost:5000`

---

### 4️⃣ Run Frontend

```bash
cd client
npm install
npm start
```

Runs on: `http://localhost:3000`

---

## 🌐 Deployment

* Frontend → Netlify
* Backend → Render
* AI Service → Render

---

## 🧪 How It Works

1. Guest selects emergency type & severity
2. Location is captured automatically 📍
3. Alert sent to backend
4. AI classifies emergency
5. Incident broadcasted in real-time
6. Dashboard updates instantly with map + alert

---

## 🎥 Demo Flow

* Open Guest Panel
* Select **Fire (High)**
* Click **Send Alert**
* Switch to Dashboard
* Observe:

  * 🚨 Flashing alert
  * 📍 Map marker
  * 🔊 Sound alert
  * 📊 Stats update

---

## 💡 Future Enhancements

* 🚑 Emergency team dispatch system
* 📍 Route optimization (Google Maps API)
* 📱 Mobile app version
* 🧠 Advanced AI (NLP + severity prediction)
* 🔐 Role-based access (Admin / Staff)

---

## 🏆 Hackathon Value

* Real-world problem solving
* AI + Real-time + Maps integration
* Scalable microservices architecture
* Strong UI/UX for emergency handling

---

## 🤝 Contributors

* Vivank Tyagi(Developer)
* Manvi Jain(Developer)

---

## 📜 License

This project is open-source and available under the MIT License.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
