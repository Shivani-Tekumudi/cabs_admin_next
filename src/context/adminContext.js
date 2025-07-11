import { createContext, useContext, useState, useEffect } from 'react';
import { rentalList } from 'data/rentalList';

const AdminContext = createContext(null);

export  function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [toast, setToast] = useState(null);
  const [listings, setListings] = useState([]);
  const [tracks, setTracks] = useState([]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    const saved = localStorage.getItem('listings');
    setListings(saved ? JSON.parse(saved) : rentalList);

    const storedTracks = localStorage.getItem('adminTracks');
    setTracks(storedTracks ? JSON.parse(storedTracks) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem('listings', JSON.stringify(listings));
  }, [listings]);

  useEffect(() => {
    localStorage.setItem('adminTracks', JSON.stringify(tracks));
  }, [tracks]);

  return (
    <AdminContext.Provider
      value={{
        admin,
        setAdmin,
        showToast,
        listings,
        setListings,
        tracks,
        setTracks
      }}
    >
      {children}
      {toast && (
        <div
          className={`fixed bottom-4 left-8 px-4 py-2 rounded shadow z-50 text-white transition
          ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
        >
          {toast.message}
        </div>
      )}
    </AdminContext.Provider>
  );
}

export function useAdminContext() {
  return useContext(AdminContext);
}
