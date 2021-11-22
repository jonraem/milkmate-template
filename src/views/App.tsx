import React, { useState } from 'react';

import Header from '../components/Header';
import CowList from '../components/CowList';
import CowForm from '../components/CowForm';
import { cowsWithProduction } from '../assets/cows';
import type { CowWithProduction } from '../types/common';

const user = {
  name: 'Jussi Maajussi',
};

enum AppMode {
  VIEW,
  EDIT,
}

/**
 * Here I gather the basic components of the UI and/or any routes I may use. In this example the
 * view merely has two modes handled by local state. The data comes from a static array.
 */
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
