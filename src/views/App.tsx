import React, { useState } from 'react';

import Header from '../components/Header';
import CowList from '../components/CowList';
import CowForm from '../components/CowForm';

const user = {
  name: 'Jussi Maajussi',
};

enum AppMode {
  VIEW,
  EDIT,
}

// Here I gather the basic components of the UI and/or any routes I may use
const App = () => {
  const [appMode, setAppMode] = useState<AppMode>(AppMode.VIEW);
  return (
    <div className="App">
      <Header username={user?.name} />
      <main>
        {appMode === AppMode.VIEW && (
          <CowList onButtonClick={() => setAppMode(AppMode.EDIT)} />
        )}
        {appMode === AppMode.EDIT && (
          <CowForm onButtonClick={() => setAppMode(AppMode.VIEW)} />
        )}
      </main>
    </div>
  );
};

export default App;
