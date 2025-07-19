
import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomeView from './views/HomeView';
import DashboardView from './views/DashboardView';
import PolicyDetailsView from './views/PolicyDetailsView';
import Navbar from './components/Navbar';


function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'dashboard', 'details'
  const [selectedPolicyId, setSelectedPolicyId] = useState(null);

  const goToHome = () => {
    setCurrentView('home');
    setSelectedPolicyId(null);
  };

  const goToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedPolicyId(null);
  };

  const goToPolicyDetails = (id) => {
    setSelectedPolicyId(id);
    setCurrentView('details');
  };

  return (
    <div className="app-container">
      <Navbar onGoHome={goToHome} onGoDashboard={goToDashboard} />

      <main className="main-content">
        <TransitionGroup className="view-transition-group">
          {currentView === 'home' && (
            <CSSTransition key="home" timeout={500} classNames="fade-slide-up" unmountOnExit>
              <HomeView onGoToDashboard={goToDashboard} />
            </CSSTransition>
          )}

          {currentView === 'dashboard' && (
            <CSSTransition key="dashboard" timeout={500} classNames="fade-slide-left" unmountOnExit>
              <DashboardView onGoToPolicyDetails={goToPolicyDetails} onGoBack={goToHome} />
            </CSSTransition>
          )}

          {currentView === 'details' && selectedPolicyId && (
            <CSSTransition key="details" timeout={500} classNames="fade-slide-right" unmountOnExit>
              <PolicyDetailsView policyId={selectedPolicyId} onGoBack={goToDashboard} />
            </CSSTransition>
          )}
        </TransitionGroup>
      </main>
    </div>
  );
}

export default App;