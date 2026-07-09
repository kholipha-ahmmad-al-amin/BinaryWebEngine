# BinaryWebEngine: Security Command Center
**The Silicon Valley Engineering Manifesto**

> *Engineered by Team EquiSaaS BD for the International AI Builders Congress (InfraSphere Domain).*  
> [EquiSaaS BD](https://equisaas-bd.com/) - Architecting the future of scalable intelligence.

## 🔴 The Problem
Modern enterprise networks generate millions of raw, disjointed security events daily. Existing Security Information and Event Management (SIEM) systems suffer from massive cognitive overload, forcing human analysts to sift through endless false positives and poorly correlated logs. This industry friction results in delayed threat hunting, unmitigated zero-day vulnerabilities, and severe analyst burnout.

## 🟢 The Solution
**BinaryWebEngine** eradicates this cognitive friction by unifying raw event ingestion, real-time edge processing, and multi-dimensional threat correlation into a deeply optimized, psychology-driven user interface. 
By offloading complex rule evaluations to Cloudflare Workers (Edge Computing) and structuring high-speed telemetry in D1 (Distributed SQLite), we deliver a zero-latency SOC (Security Operations Center) dashboard. Analysts are empowered with context-aware, actionable intelligence without the noise.

## 🌐 Live Demo & Tech Stack
- **Live Production URL:** [https://binarywebengine-8133d.web.app](https://binarywebengine-8133d.web.app)
- **Frontend Layer:** React.js, Vite, TypeScript, Tailwind CSS, Framer Motion (for Goal Gradient & Zeigarnik Effect animations).
- **Edge Backend:** Cloudflare Workers (V8 Isolate Engine).
- **Data Persistence:** Cloudflare D1 (Relational Data), Firebase Hosting (Static Asset Delivery), Firebase Auth (Identity).
- **Infrastructure as Code (IaC):** Wrangler CLI, Firebase CLI.

## 💻 Local Setup & Run Instructions
Execute these exact, bulletproof commands to orchestrate the local development environment:

```bash
# 1. Clone & Clean Architecture
git clone https://github.com/YourOrg/BinaryWebEngine.git
cd BinaryWebEngine

# 2. Edge API Initialization (Cloudflare)
cd worker
npm install
npm run build
# Create local D1 instance and run schema/mockdata
npx wrangler d1 execute bwe-mock --local --file=../db/mockdata.sql
# Start local API edge network
npx wrangler dev

# 3. Frontend Initialization (React/Vite)
# Open a new terminal window
cd ../frontend-react
npm install
# Populate environment variables (Create .env file)
echo "VITE_GEMINI_API_KEY=your_gemini_key_here" > .env
npm run dev
```

---

## 📐 System Documentation

### 1. System Architecture Diagram
```mermaid
graph TD
    subgraph Frontend [React SPA - Firebase Hosting]
        A[Dashboard UI] --> B[UX Interactions & State]
        B --> C[Real-Time Visualizations]
    end
    
    subgraph Edge_Compute [Cloudflare Worker Network]
        D[API Gateway / Router]
        E[Rate Limiter & Auth Validator]
        F[Threat Correlation Engine]
        D --> E
        E --> F
    end

    subgraph Data_Layer [Distributed Persistence]
        G[(Cloudflare D1 - Relational)]
        H[(Workers KV - Key/Value Store)]
        I[(Firebase Auth)]
    end

    A -- "HTTPS / JSON" --> D
    F -- "SQL Queries" --> G
    F -- "High-speed reads" --> H
    B -- "JWT Tokens" --> I
```

### 2. Entity-Relationship Diagram (ERD)
*Note: Primary relational persistence is managed in Cloudflare D1 for strict ACID compliance.*
```mermaid
erDiagram
    ALERTS {
        int id PK
        string timestamp
        string severity "critical|high|medium|low"
        string module
        string title
        string source_ip
        string description
    }
    TRAFFIC_LOG {
        int id PK
        string timestamp
        string src_ip
        string method
        string path
        int status_code
        int latency_ms
    }
    WAF_EVENTS {
        int id PK
        string timestamp
        string rule_triggered
        string ip_address
        string action "block|log|challenge"
    }
    ALERTS ||--o{ WAF_EVENTS : correlates
    TRAFFIC_LOG ||--o{ ALERTS : triggers
```

### 3. Data Flow Diagram (Level 1)
```mermaid
graph LR
    User([SOC Analyst]) -->|Requests Metrics| Auth[Auth Middleware]
    Auth -->|Valid Token| API[Worker Route Handler]
    Auth -.->|Invalid| Reject[401 Unauthorized]
    
    API -->|Query| DB[(D1 Database)]
    DB -->|Raw Data| Engine[Aggregation & Rules]
    Engine -->|Correlated JSON| API
    API -->|Rendered Chart| User
```

### 4. Use Case Diagram
```mermaid
flowchart LR
    Analyst([Senior SOC Analyst])
    Sys([System Process])
    
    subgraph BinaryWebEngine
        UC1(Monitor Real-Time Traffic)
        UC2(Inspect Kill Chain)
        UC3(Audit WAF Rules)
        UC4(Correlate Anomaly Data)
    end
    
    Analyst --> UC1
    Analyst --> UC2
    Analyst --> UC3
    Sys --> UC4
    UC4 -. "<<includes>>" .-> UC2
```

### 5. Sequence Diagram: Core User Interaction Loop
```mermaid
sequenceDiagram
    autonumber
    participant Analyst as SOC Analyst
    participant UI as React Frontend
    participant Edge as Cloudflare Worker
    participant D1 as D1 Database
    participant Ext as Threat Intel API

    Analyst->>UI: Selects "Active Kill Chains" Tab
    UI->>Edge: GET /api/alerts?type=kill_chain (JWT Auth)
    Edge->>Edge: Validate Token & Rate Limit
    Edge->>D1: SELECT * FROM alerts WHERE type='kill_chain'
    D1-->>Edge: Raw Alert Rows
    Edge->>Ext: (Async) Fetch IP Reputation Data
    Ext-->>Edge: Reputation Scores
    Edge->>Edge: Transform & Enrich Payload
    Edge-->>UI: JSON Response (200 OK)
    UI->>Analyst: Render Interactive MITRE Timeline (Framer Motion)
```

---

### Phase 2: Cognitive UX Strategy Implemented
- **Goal Gradient Effect:** Visual progress trackers are embedded in the Kill Chain timeline (e.g., 3/10 stages complete). As stages progress, UI color saturation increases to draw immediate analytical focus.
- **Zeigarnik Effect:** Active, unresolved alerts pulse gently with red indicator dots until the analyst explicitly acknowledges them, ensuring critical tasks are never abandoned.
- **Labor Illusion:** Data retrieval and system health checks utilize simulated, highly-technical console log outputs before revealing the data, reinforcing the system's analytical depth and increasing the perceived value of the insights.

### 👥 Engineering Task Force
- **Kholipha Ahmmad Al-Amin** - Principal Systems Architect / Team Lead
- **K4z1 SABBIR** - Lead Full-Stack Developer
- **Md Mushfiqur Rahman** - Product / Behavioral UX Designer
- **Abu Hurayra** - Product / Behavioral UX Designer
- **Khadija Tull Khushbu** - Security Domain Expert
