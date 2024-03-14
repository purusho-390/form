import React from 'react';
import { useForm } from 'react-hook-form';

export default function RegForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
     <div className="bg-white p-10 rounded-md shadow-md w-300 mx-auto max-w-full">
    <form className="bg-white p-5 rounded-md shadow-md w-300 mx-auto max-w-full text-black"
      onSubmit={handleSubmit(onSubmit)}
    >

      <h1 className="text-3xl font-bold mb-4">Kalam Leo-Muthu educational awards 2024</h1>
      <h3 className="text-2xl font-bold mb-4">Pre-Registration Form</h3>
      <hr></hr>
       <br></br>
      <label className="block text-sm mb-2">Nomination Type</label>
      <select {...register("NominationType")} className="w-full p-2 border border-gray-300 rounded-md">
        <option value="Select">Select</option>
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
      </select>

      <label className="block text-sm mt-4 mb-2">Select Your Organization</label>
      <select {...register("SelectYourOrganization")} className="w-full p-2 border border-gray-300 rounded-md">
        <option value="Select">Select</option>
        <option value="Private">Private</option>
        <option value="Government">Government</option>
        <option value="CBSC">CBSC</option>
      </select>

      <label className="block text-sm mt-4 mb-2">Fullname</label>
      <input type="text" placeholder="Name" {...register("Name", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">Gender</label>
      <select {...register("Gender")} className="w-full p-2 border border-gray-300 rounded-md">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label className="block text-sm mt-4 mb-2">Aadhar Number</label>
      <input type="text" placeholder="Aadhar Number" {...register("AadharNumber", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">School Name</label>
      <textarea placeholder="School Name" {...register("SchoolName", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">Date of Birth</label>
      <input type="date" placeholder="Date of Birth" {...register("DateOfBirth", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">School Registration Number</label>
      <input type="text" placeholder="School Registration Number" {...register("SchoolRegistrationNumber", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">Location</label>
      <input type="text" placeholder="Location" {...register("Location", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">School Contact Number</label>
      <input type="tel" placeholder="School Contact Number" {...register("SchoolContactNumber", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">Address</label>
      <textarea placeholder="Address" {...register("Address", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">Contact Person Number</label>
      <input type="tel" placeholder="Contact Person Number" {...register("ContactPersonNumber", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">District</label>
      <input type="text" placeholder="District" {...register("District", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">Select Subject</label>
      <select {...register("Subject", { required: true })} className="w-full p-2 border border-gray-300 rounded-md">
        <option value="Select">Select Subject</option>
        <option value="Tamil">Tamil</option>
        <option value="English">English</option>
        <option value="Maths">Maths</option>
        <option value="Science">Science</option>
        <option value="Social">Social</option>
        <option value="ComputerScience">ComputerScience</option>
      </select>

      <label className="block text-sm mt-4 mb-2">School Email ID</label>
      <input type="email" placeholder="School Email ID" {...register("SchoolEmailID", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">Email ID</label>
      <input type="email" placeholder="Email ID" {...register("EmailID", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">Mobile Number</label>
      <input type="tel" placeholder="Mobile Number" {...register("MobileNumber", { required: true })} className="w-full p-2 border border-gray-300 rounded-md" />

      <label className="block text-sm mt-4 mb-2">Landline</label>
      <input type="tel" placeholder="Landline" {...register("Landline", {})} className="w-full p-2 border border-gray-300 rounded-md" />

      <div className="w-full flex justify-between mt-6">
        <input type="submit" className="bg-blue-500 text-white p-3 rounded-md cursor-pointer hover:bg-blue-600 "/>  
        <input type="reset" className="bg-red-500 text-white p-3 rounded-md cursor-pointer hover:bg-red-600"  />
      </div> 
    </form>
    </div>
  );
}
