# Developer Portfolio — Full-Stack Web Application

A modern, high-performance developer portfolio built with a **Django REST Framework** backend and a **Vite + React 19 + TypeScript** frontend.

The application features a technical **Blueprint / Diazo Print engineering aesthetic**, dark & light theme modes, multi-layer browsing (`UI`, `API Playground`, `CLI Terminal`), an interactive **AI Chat Assistant**, and real-time project filtering.

---

## 🏗️ Architecture & Project Structure

```text
porfolio/
├── backend/                  # Django REST API Backend
│   ├── backend/              # Project settings, URLs, ASGI/WSGI
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   └── manage.py             # Django CLI management script
│
├── frontend/                 # Vite + React 19 + TypeScript Frontend
│   ├── src/
│   │   ├── components/       # UI, layout & section components
│   │   │   ├── layers/       # API Playground & CLI Terminal layers
│   │   │   ├── layout/       # Header navigation & Footer
│   │   │   ├── sections/     # Hero, About, Skills, Projects, Experience, etc.
│   │   │   └── ui/           # AiChatWidget, Cards, Badges, Modals
│   │   ├── data/             # Mock & fallback portfolio data
│   │   ├── pages/            # HomePage container
│   │   ├── services/         # API Client & Portfolio Service
│   │   ├── styles/           # CSS design tokens, variables, global reset
│   │   └── types/            # TypeScript interfaces
│   ├── index.html            # Entry HTML template
│   ├── package.json          # Node dependencies & scripts
│   ├── tsconfig.app.json     # TypeScript application config
│   └── vite.config.ts        # Vite configuration with `@/` path alias
└── README.md                 # Global project documentation
```

---

## ⚡ Prerequisites

Ensure you have the following installed on your environment:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Python**: v3.10 or higher
- **pip**: Latest version

---

## 🚀 Quick Start Setup

### 1. Frontend Setup (React + Vite + TypeScript)

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install Node dependencies:
   ```bash
   npm install
   ```

3. Start the development server with HMR:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

4. (Optional) Build for production verification:
   ```bash
   npm run build
   ```

---

### 2. Backend Setup (Django REST Framework)

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   ```bash
   # On macOS/Linux:
   python3 -m venv venv
   source venv/bin/activate

   # On Windows:
   python -m venv venv
   .\venv\Scripts\activate
   ```

3. Install required Python packages:
   ```bash
   pip install django djangorestframework django-cors-headers
   ```

4. Run database migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```
   The API backend will be available at `http://127.0.0.1:8000`.

---

## 🌟 Key Features & Interactive Modes

1. **`UI` Mode**:
   - **Hero Section**: Tagline, headline, CTA buttons, social links, and metadata strip (`based in`, `experience`, `available`).
   - **Harsh.ai Assistant**: Interactive AI Chatbot widget with instant prompt chips (`⚡ Tech Stack`, `🚀 Top Projects`, `💼 Experience`, `📬 How to contact?`).
   - **Section 01 / About**: Deep dive into full-stack architecture & engineering standards.
   - **Section 02 / Capabilities**: Categorized technical skills grid (`Languages`, `Frontend`, `Backend`, `Cloud`, `DevOps`, `AI`, `Databases`, `Security`).
   - **Section 03 / Experience**: Timeline layout showcasing work history and bulleted achievements.
   - **Section 04 & 05 / Selected Work & Directory**: Flagship project showcase cards + real-time search filter input.
   - **Section 06 / Recognition**: Awards and achievements.
   - **Section 07 & 08 / Education & Contact**: Degree background, contact details, and footer.

2. **`API` Mode**:
   - Interactive API playground displaying available GET endpoints (`/api/about`, `/api/status`, `/api/capabilities`, `/api/projects/featured`, `/api/projects/all`, `/api/experience`, `/api/awards`, `/api/education`).
   - Live simulated request execution with response latency, JSON syntax highlighting, and copyable cURL commands.

3. **`CLI` Mode**:
   - Full-screen terminal emulator replicating a Unix/Linux shell environment.
   - Supported terminal commands: `help`, `about`, `skills`, `projects`, `experience`, `status`, `awards`, `education`, `contact`, `curl`, `ls`, `cat`, `theme`, `view`, `clear`.
   - Command history navigation using `Up` and `Down` arrow keys.

4. **Theme Modes**:
   - **Blueprint Dark Mode**: Deep navy background (`#0F1B2D`) with Electric Cyan accents (`#38BDF8`).
   - **Diazo Print Light Mode**: Soft luminous slate backdrop (`#F8FAFC`) with Indigo accents (`#4F46E5`).

---

## 🔧 Environment Variables

In `frontend/`, configure `.env` (or set environment variables):
```env
VITE_API_URL=http://127.0.0.1:8000/api
```

---

## 📝 License & Author

Created by **Harsh Bamotra** — Full-Stack Software Engineer.
