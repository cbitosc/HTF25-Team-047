{/*import { useState } from 'react';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import SubmitItemForm from './components/SubmitItemForm';
import ItemDetails from './components/ItemDetails';
import AdminDashboard from './components/AdminDashboard';
import { Item } from './lib/types';

type View = 'home' | 'submit' | 'admin';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleViewChange = (view: View) => {
    setCurrentView(view);
    setSelectedItem(null);
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
  };

  const handleSubmitSuccess = () => {
    setCurrentView('home');
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleItemsChange = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentView={currentView} onViewChange={handleViewChange} />

      {currentView === 'home' && (
        <ItemsList onItemClick={handleItemClick} refreshTrigger={refreshTrigger} />
      )}

      {currentView === 'submit' && (
        <SubmitItemForm onSuccess={handleSubmitSuccess} />
      )}

      {currentView === 'admin' && (
        <AdminDashboard onItemsChange={handleItemsChange} />
      )}

      {selectedItem && (
        <ItemDetails item={selectedItem} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default App;
*/}
import { useState } from 'react';
import Header from './components/Header';
import ItemsList from './components/ItemsList';
import SubmitItemForm from './components/SubmitItemForm';
import ItemDetails from './components/ItemDetails';
import AdminDashboard from './components/AdminDashboard';
import { Item } from './lib/types';

type View = 'home' | 'submit' | 'admin';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleViewChange = (view: View) => {
    setCurrentView(view);
    setSelectedItem(null);
  };

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleCloseDetails = () => {
    setSelectedItem(null);
  };

  const handleSubmitSuccess = () => {
    setCurrentView('home');
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleItemsChange = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Animated background bubbles */}
      {/*<div className="animate-pulse absolute top-32 left-20 bg-blue-200 rounded-full w-40 h-40 opacity-40 blur-lg z-0"></div>
      <div className="animate-pulse absolute bottom-16 right-24 bg-indigo-100 rounded-full w-32 h-32 opacity-40 blur-md z-0"></div>
      <div className="animate-pulse absolute bottom-32 left-44 bg-green-100 rounded-full w-20 h-20 opacity-50 blur-md z-0"></div>
    */}<div className="animate-pulse absolute top-28 left-10 bg-blue-400 rounded-full w-56 h-56 opacity-60 blur-xl z-0"></div>
      <div className="animate-pulse absolute bottom-10 right-16 bg-purple-300 rounded-full w-40 h-40 opacity-70 blur-xl z-0"></div>
      <div className="animate-pulse absolute bottom-32 left-44 bg-pink-300 rounded-full w-24 h-24 opacity-50 blur-lg z-0"></div>


      {/* Main content sits above bubbles */}
      <div className="relative z-10">
        <Header currentView={currentView} onViewChange={handleViewChange} />
        
        {currentView === 'home' && (
          <ItemsList onItemClick={handleItemClick} refreshTrigger={refreshTrigger} />
        )}
        {currentView === 'submit' && (
          <SubmitItemForm onSuccess={handleSubmitSuccess} />
        )}
        {currentView === 'admin' && (
          <AdminDashboard onItemsChange={handleItemsChange} />
        )}
        {selectedItem && (
          <ItemDetails item={selectedItem} onClose={handleCloseDetails} />
        )}
      </div>
    </div>
  );
}

export default App;
