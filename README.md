# Welding Website Monorepo

## Project Overview

The **Welding Website Monorepo** is a unified repository for managing both the frontend and backend of a high-performance welding services platform. Built with **Next.js** for the frontend and **NestJS** for the backend, this monorepo adheres to modern web development best practices, ensuring scalability, maintainability, and robust typing with **TypeScript** in strict mode.

### Key Features
- **Frontend**: A responsive, high-performance web interface using Next.js.
- **Backend**: A modular API server using NestJS, with RESTful and GraphQL endpoints.
- **Monorepo Architecture**: Simplifies dependency management and code sharing between frontend and backend.
- **TypeScript in Strict Mode**: Ensures type safety across the entire codebase.
- **Scalability**: Clean separation of concerns and modular design for future growth.
- **Fully Typed**: Every component and module is properly typed for maintainability.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Monorepo Architecture](#monorepo-architecture)
   - [Architecture Diagram](#architecture-diagram)
   - [Frontend (Next.js)](#frontend-nextjs)
   - [Backend (NestJS)](#backend-nestjs)
3. [Development Environment Setup Guide](#development-environment-setup-guide)
   - [Prerequisites](#prerequisites)
   - [Setup Steps](#setup-steps)
4. [Codebase Structure](#codebase-structure)
5. [Best Practices](#best-practices)
6. [Contribution Guidelines](#contribution-guidelines)
7. [FAQ](#faq)
8. [License](#license)

---

## Monorepo Architecture

### Architecture Diagram

```mermaid
graph TD;
    A[Monorepo] --> B[Frontend (Next.js)]
    A[Monorepo] --> C[Backend (NestJS)]
    C[Backend (NestJS)] --> D[Database (PostgreSQL)]
    C[Backend (NestJS)] --> E[Authentication (JWT)]
    B[Frontend (Next.js)] --> F[API Gateway]
```

### Frontend (Next.js)

The frontend is built with Next.js to deliver a fast, responsive, and SEO-friendly user experience. It incorporates:
- **Server-Side Rendering (SSR)** for better SEO performance.
- **Static Site Generation (SSG)** for pages that don’t change often.
- **API Integration**: Fetching data from the backend using REST or GraphQL endpoints.
- **State Management**: Handles app-wide state using libraries like Zustand or Redux.

### Backend (NestJS)

The backend is powered by NestJS, a progressive Node.js framework. Key features include:
- **Modular Architecture**: Each feature exists in its own module, ensuring scalability and separation of concerns.
- **RESTful Endpoints**: API endpoints for frontend consumption.
- **GraphQL Support**: Advanced querying capabilities for frontend and third-party integrations.
- **Authentication**: Secure user authentication with JWT.
- **Database**: Uses PostgreSQL with TypeORM for database interactions.

---

## Development Environment Setup Guide

### Prerequisites

Ensure the following tools are installed on your system:
- **Node.js** (v16.x or higher)
- **Yarn** (preferred over npm for monorepo setups)
- **Docker** (for containerized database and backend services)
- **PostgreSQL** (v13.x or higher)
- **TypeScript** (v5.x or higher)

### Setup Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sisovin/welding-website-monorepo.git
   cd welding-website-monorepo
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Set up the backend**:
   - Navigate to the backend directory:
     ```bash
     cd packages/backend
     ```
   - Copy the `.env.example` file and configure your environment variables:
     ```bash
     cp .env.example .env
     ```

4. **Set up the frontend**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Copy the `.env.example` file and configure your environment variables:
     ```bash
     cp .env.example .env
     ```

5. **Start the development environment**:
   ```bash
   yarn dev
   ```

6. **Access the application**:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:4000](http://localhost:4000)

---

## Codebase Structure

```
welding-website-monorepo/
├── packages/
│   ├── frontend/      # Next.js frontend
│   │   ├── pages/     # Next.js pages
│   │   ├── components/ # Reusable UI components
│   │   ├── styles/    # Global and module-specific styles
│   │   └── utils/     # Helper functions and utilities
│   ├── backend/       # NestJS backend
│   │   ├── src/
│   │   │   ├── modules/  # Feature-specific modules
│   │   │   ├── common/   # Shared utilities and constants
│   │   │   └── main.ts   # Entry point for the NestJS app
│   └── shared/         # Shared utilities and type definitions
├── .github/            # GitHub Actions and templates
├── docker-compose.yml  # Docker setup for development
└── README.md           # Project documentation
```

---

## Best Practices

- **Strict TypeScript**: All modules and components are fully typed to ensure type safety.
- **Separation of Concerns**: Keep logic modular and reusable.
- **Linting and Formatting**: Use ESLint and Prettier to enforce code quality.
- **Testing**: Write unit tests for critical components using Jest.
- **Environment Variables**: Store sensitive data in `.env` files and never commit them.

---

## Contribution Guidelines

### How to Contribute

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. **Make your changes** and ensure they follow the project's coding standards.
4. **Test your changes** locally.
5. **Commit and push** your changes:
   ```bash
   git commit -m "Add feature-name"
   git push origin feature-name
   ```
6. **Submit a pull request** through GitHub.

### Coding Standards
- Follow the **Airbnb JavaScript/TypeScript Style Guide**.
- Use **Prettier** for formatting.
- Write clear and concise commit messages.

---

## FAQ

**Q**: What is the purpose of this project?  
**A**: This project provides a unified platform for managing a welding services website, including both frontend and backend functionalities.

**Q**: Can I use npm instead of Yarn?  
**A**: While Yarn is recommended for monorepos due to better dependency management, npm can be used with minor adjustments.

**Q**: How do I report bugs?  
**A**: Use the [GitHub Issues](https://github.com/sisovin/welding-website-monorepo/issues) section to report bugs or request features.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
