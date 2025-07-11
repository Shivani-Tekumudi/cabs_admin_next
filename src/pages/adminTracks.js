'use client';
import { useEffect, useState } from 'react';
import { useAdminContext } from '@/context/adminContext';
import Layout from '@/components/Layout';
import { protectRoute } from "@/auth/protectedRoute";

export const getServerSideProps = protectRoute;

export default function AdminTracksPage() {
  const { adminName } = useAdminContext();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("adminTracks");
    if (stored) {
      const parsed = JSON.parse(stored);
      setTracks(parsed.reverse());
    }
  }, []);

  return (
    <>
      <Layout adminName={adminName} />
      <div className="md:ml-[18rem] md:mr-5 md:mt-6 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Admin Activity Logs</h2>
        {tracks.length === 0 ? (
          <p className="text-gray-500">No activity yet.</p>
        ) : (
          <ul className="space-y-3">
            {tracks.map((track, idx) => (
              <li key={idx} className="border-b pb-2">
                <p className="font-medium">{track.change}</p>
                <p className="text-sm text-gray-500">
                  By {track.adminName} on {new Date(track.dateTime).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
