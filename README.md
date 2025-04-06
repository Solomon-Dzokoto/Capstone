# Aerten HR Management System

A comprehensive HR management system built with React and Vite that helps organizations manage their employees, roles, and organizational structure.

## Features

- **Employee Management**

  - Complete employee profile management
  - Attendance tracking
  - Leave management
  - Performance monitoring

- **Role & Permission Management**

  - Create and customize roles
  - Define permission sets
  - Role-based access control
  - Multi-step role creation process

- **Payroll Management**

  - Process payments
  - Payroll reporting
  - Salary structure management
  - Payment history tracking

- **Dashboard & Analytics**

  - Real-time attendance summary
  - Leave balance tracking
  - Performance metrics
  - Interactive charts and reports
  - Recruitment analytics

- **User Interface**
  - Dark/Light mode support
  - Responsive design
  - Modern and clean interface
  - Interactive data tables
  - Loading skeletons for better UX

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router v7
- React Hook Form
- Zustand (State Management)
- Axios

## Getting Started

### Prerequisites

- Node.js 16+
- npm

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd cap-stone
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Start the Tailwind CSS compiler in a separate terminal

```bash
npm start
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── api/                  # API integration layer
├── components/           # React components
│   ├── Layout/          # Layout components
│   ├── pages/           # Page components
│   ├── shared/          # Shared components
│   └── ui/              # UI components
├── contexts/            # React contexts
├── hooks/               # Custom hooks
├── store/              # State management
└── styles/             # CSS and style files
```

## Key Features Breakdown

### Role Management

- Multi-step role creation process
- Basic information setup
- Permission configuration
- Role review and confirmation
- Role assignment and management

### Authentication & Authorization

- Protected routes
- Role-based access control
- Login/Signup functionality
- Session management

### Dashboard

- Employee attendance tracking
- Leave management
- Performance monitoring
- Interactive charts and metrics
- Inbox notifications

### Settings & Customization

- Theme customization
- User preferences
- System configurations
- Profile management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
