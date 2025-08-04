import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import DailyReport from './pages/tasks/DailyReport';
import WeeklyReview from './pages/feedback/WeeklyReview';
import ProfileEdit from './pages/profile/ProfileEdit';
import './App.css';

type TabType = 'dashboard' | 'reports' | 'feedback' | 'settings';

function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderContent = (): JSX.Element => {
    switch (activeTab) {
      case 'dashboard':
        return <StudentDashboard />;
      case 'reports':
        return <DailyReport />;
      case 'feedback':
        return <WeeklyReview />;
      case 'settings':
        return <ProfileEdit />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </MainLayout>
  );
}

export default App;
