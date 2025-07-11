import { useState } from "react";

export default function EditModal({ data, onClose, onSave }) {
  const [form, setForm] = useState({ ...data });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-start justify-between pb-4">
            <h3 className="text-xl font-semibold text-gray-900">Edit User</h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            >
              <span className="sr-only">Close modal</span>
              <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Car</label>
              <input
                type="text"
                name="car"
                value={form.car}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={form.returnDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Cost</label>
              <input
                type="number"
                name="cost"
                value={form.cost}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
