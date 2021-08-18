import React from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

function Layout() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const handleSidebarOpen = (state: boolean) => {
    setSidebarOpen(state);
  };

  return (
    <div className=''>
      <Header isSidebarOpen={isSidebarOpen} handleSidebarOpen={handleSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarOpen={handleSidebarOpen} />
    </div>
  );
}

export default Layout;
