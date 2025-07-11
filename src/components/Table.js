'use client';
import Modal from '@/components/Modal';
import { useState } from 'react';
import { useAdminContext } from 'context/adminContext';

export default function Table({ statusFilter, adminName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const {
    showToast,
    listings,
    setListings,
    setTracks
  } = useAdminContext();

  const filteredListings = statusFilter
    ? listings.filter((item) => item.status === statusFilter)
    : listings;

  function handleEditClick(rowData) {
    setSelectedRow(rowData);
    setIsModalOpen(true);
  }

  const handleSave = (updatedRow) => {
    const updatedListings = listings.map((item) =>
      item.id === updatedRow.id ? { ...item, ...updatedRow } : item
    );

    setListings(updatedListings);
    localStorage.setItem('listings', JSON.stringify(updatedListings));

    const newTrack = {
      adminName: adminName || "Unknown",
      dateTime: new Date().toISOString(),
      change: `Updated rental for ${updatedRow.firstName || "N/A"}`
    };

    setTracks((prev) => {
      const updated = [newTrack, ...prev]; // latest on top
      localStorage.setItem("adminTracks", JSON.stringify(updated));
      return updated;
    });

    showToast("Rental updated successfully", "success");
    setIsModalOpen(false);
  };

  const handleApprove = (id, name) => {
    const updatedListings = listings.map((item) =>
      item.id === id ? { ...item, status: 'Approved' } : item
    );
    setListings(updatedListings);
    localStorage.setItem('listings', JSON.stringify(updatedListings));

    const newTrack = {
      adminName: adminName || "Unknown",
      dateTime: new Date().toISOString(),
      change: `Approved rental for ${name}`
    };

    setTracks((prev) => {
      const updated = [newTrack, ...prev];
      localStorage.setItem("adminTracks", JSON.stringify(updated));
      return updated;
    });

    showToast("Approved successfully", "success");
  };

  const handleReject = (id, name) => {
    const updatedListings = listings.map((item) =>
      item.id === id ? { ...item, status: 'Rejected' } : item
    );
    setListings(updatedListings);
    localStorage.setItem('listings', JSON.stringify(updatedListings));

    const newTrack = {
      adminName: adminName || "Unknown",
      dateTime: new Date().toISOString(),
      change: `Rejected rental for ${name}`
    };

    setTracks((prev) => {
      const updated = [newTrack, ...prev];
      localStorage.setItem("adminTracks", JSON.stringify(updated));
      return updated;
    });

    showToast("Rejected rental", "error");
  };

  return (
    <>
      <div className="py-2 px-2 pb-0 bg-white rounded-lg shadow-sm">
        <table className="w-full text-md text-left rtl:text-right text-gray-500">
          <thead className="text-sm text-gray-700 uppercase bg-white border border-gray-100">
            <tr className="rounded-t-lg">
              <th className="px-6 py-3 text-center">S.No</th>
              <th className="px-6 py-3 text-center">User Name</th>
              <th className="px-6 py-3 text-center">Car</th>
              <th className="px-6 py-3 text-center">Start Date</th>
              <th className="px-6 py-3 text-center">Return Date</th>
              <th className="px-6 py-3 text-center">Cost</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredListings.map((ele, idx) => (
              <tr key={ele.id} className="bg-white border-b border-gray-200">
                <td className="px-6 py-4 text-center">{idx + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-900 text-center">
                  {ele.firstName}
                </td>
                <td className="px-6 py-4 text-center">{ele.car}</td>
                <td className="px-6 py-4 text-center">{ele.startDate}</td>
                <td className="px-6 py-4 text-center">{ele.returnDate}</td>
                <td className="px-6 py-4 text-center">₹{ele.cost}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="p-1 px-4 mb-2 text-sm font-semibold text-green-500 border border-green-500 rounded-full hover:text-white hover:bg-green-500 mr-2 hover:cursor-pointer"
                    onClick={() => handleApprove(ele.id, ele.firstName)}
                  >
                    Approve
                  </button>
                  <button
                    className="p-1 px-4 mb-2 text-sm font-semibold text-red-500 border border-red-500 rounded-full hover:text-white hover:bg-red-500 mr-2 hover:cursor-pointer"
                    onClick={() => handleReject(ele.id, ele.firstName)}
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => handleEditClick(ele)}
                    className="p-1 px-4 mb-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-full hover:text-white hover:bg-blue-600 hover:cursor-pointer"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && selectedRow && (
          <Modal
            data={selectedRow}
            onClose={() => setIsModalOpen(false)}
            onSave={handleSave}
          />
        )}
      </div>
    </>
  );
}
