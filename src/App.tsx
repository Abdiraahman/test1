import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import Feedback from './components/Feedback';
import Settings from './components/Settings';
import './App.css';

type TabType = 'dashboard' | 'reports' | 'feedback' | 'settings';

function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  const renderContent = (): JSX.Element => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'reports':
        return <Reports />;
      case 'feedback':
        return <Feedback />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;
