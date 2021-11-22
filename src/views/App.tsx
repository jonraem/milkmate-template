import React, { useState } from 'react';

import Header from '../components/Header';
import CowList from '../components/CowList';
import CowForm from '../components/CowForm';
import { CowWithProduction, cowsWithProduction } from '../assets/cows';

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
  const [cows, setCows] = useState<CowWithProduction[]>(cowsWithProduction);

  return (
    <div className="App">
      <Header username={user?.name} />
      <main>
        {appMode === AppMode.VIEW && (
          <CowList cows={cows} onButtonClick={() => setAppMode(AppMode.EDIT)} />
        )}
        {appMode === AppMode.EDIT && (
          <CowForm
            onCancelButtonClick={() => setAppMode(AppMode.VIEW)}
            onSubmitButtonClick={(newCow: CowWithProduction) => {
              setCows([...cows, newCow]);
              setAppMode(AppMode.VIEW);
            }}
          />
        )}
      </main>
    </div>
  );
};

export default App;
