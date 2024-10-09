
import React, { useState } from 'react';

const Passbook = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    accountNo: '',
    aadharNo: '',
    mobileNo: '',
    dob: '',
    fathersName: '',
    address: '',
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // Optionally reset form data after submission
    setFormData({
      name: '',
      accountNo: '',
      aadharNo: '',
      mobileNo: '',
      dob: '',
      fathersName: '',
      address: '',
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
      <h1 className="text-xl font-bold text-center">Union Bank Of India , PARBATTA</h1>
      <p className="text-center mb-4">IFSC Code: <span className="font-semibold">UBIN0537055</span></p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-4">
          <label className="w-1/2">
            <span className="block text-sm font-medium">Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
          </label>
          <div className="w-1/2 flex justify-end">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-500">
              Photo
            </div>
          </div>
        </div>

        <label>
          <span className="block text-sm font-medium">Account No.</span>
          <input type="text" name="accountNo" value={formData.accountNo} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <span className="block text-sm font-medium">Aadhar No.</span>
          <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <span className="block text-sm font-medium">Mobile No.</span>
          <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <span className="block text-sm font-medium">D.O.B</span>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <span className="block text-sm font-medium">Father's Name</span>
          <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
        </label>
        <label>
          <span className="block text-sm font-medium">Address</span>
          <textarea name="address" value={formData.address} onChange={handleChange} className="w-full mt-1 p-2 border rounded" rows="3"></textarea>
        </label>

        <button type="submit" className="w-full mt-4 p-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h1 className="text-xl font-bold text-center">Union Bank Of India , PARBATTA</h1>
          <h2 className="text-xl font-semibold text-center">Duplicate Identity Card</h2>

      <p className="text-center my-4">IFSC Code: <span className="font-semibold">UBIN0537055</span></p>
      
          <p><strong>Name : </strong> {submittedData.name}</p>
          <p><strong>Account No. : </strong> {submittedData.accountNo}</p>
          <p><strong>Aadhar No. : </strong> {submittedData.aadharNo}</p>
          <p><strong>Mobile No. : </strong> {submittedData.mobileNo}</p>
          <p><strong>D.O.B : </strong> {submittedData.dob}</p>
          <p><strong>Father's Name : </strong> {submittedData.fathersName}</p>
          <p><strong>Address : </strong> {submittedData.address}</p>
        </div>
      )}

    </div>
  );
};

export default Passbook;
