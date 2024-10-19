import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { async } from '../../services/Action/Action';
import { useNavigate } from 'react-router-dom';

const EmployeeForm = () => {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const dispatch = useDispatch();

    const navigate = useNavigate() ;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form with data:", formInput);

       
    dispatch(async(formInput));

        navigate('/view-data');

        setFormInput({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };
    

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-200 to-red-500">
        <form
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg transition-transform transform hover:scale-105"
            onSubmit={handleSubmit}
        >
            <h2 className="text-4xl font-bold mb-6 text-center text-white-800">Add Employee Form</h2>
    
            <div className="mb-6">
                <label className="block text-red-700 font-semibold mb-2" htmlFor="name">Employee Name</label>
                <input
                    className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    type="text"
                    id="name"
                    name="name"
                    value={formInput.name}
                    onChange={handleChange}
                    placeholder="Enter employee name"
                    required
                />
            </div>
    
            <div className="mb-6">
                <label className="block text-red-700 font-semibold mb-2" htmlFor="email">Email</label>
                <input
                    className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    type="email"
                    id="email"
                    name="email"
                    value={formInput.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    required
                />
            </div>
    
            <div className="mb-6">
                <label className="block text-red-700 font-semibold mb-2" htmlFor="phone">Phone Number</label>
                <input
                    className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formInput.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                />
            </div>
    
            <div className="mb-6">
                <label className="block text-red-700 font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                    className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                    id="message"
                    name="message"
                    value={formInput.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="4"
                    required
                ></textarea>
            </div>
    
            <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-red-800 text-black  font-semibold py-2 rounded-lg transition duration-200 transform hover:scale-105"
            >
                Submit
            </button>
        </form>
    </div>
    
    );
};

export default EmployeeForm;
 