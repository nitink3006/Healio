


import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
import mongoose from "mongoose";

/*export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.status(200).json({ success: true, message: 'Successfully updated', data: updatedDoctor });
  } catch (err) {
    console.error(err); 
    res.status(500).json({ success: false, message: 'Failed to update' });
  }
};*/


/*export const updateDoctor = async (req, res) => {
  const { id } = req.params; // Extract ID using destructuring

  // Validate ID (optional but recommended)
  if (!id) {
    return res.status(400).json({ success: false, message: 'Invalid doctor ID' });
  }

  try {
    // Ensure `id` is a valid ObjectId
   const objectId = new mongoose.Types.ObjectId(id);  // Correct usage


    const updatedDoctor = await Doctor.findByIdAndUpdate(
      objectId,
      { $set: req.body },
      { new: true }
    );

    // Check if doctor found
    if (!updatedDoctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    res.status(200).json({ success: true, message: 'Successfully updated', data: updatedDoctor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to update doctor' });
  }
};*/

/*export const updateDoctor = async (req, res) => {
  const { id } = req.params.id;

  /*if (!id) {
    return res.status(400).json({ success: false, message: 'Invalid doctor ID' });
  }

  try {
    // Ensure `id` is a valid ObjectId
    const objectId = new mongoose.Types.ObjectId.isValid(id);
    if (!objectId) {
  return res.status(400).json({ success: false, message: 'Invalid doctor ID' });
    }


    // Check if doctor exists before updating
    const existingDoctor = await Doctor.findById(objectId);
    if (!existingDoctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    // Update the doctor
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      objectId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({ success: true, message: 'Successfully updated', data: updatedDoctor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to update doctor' });
  }
};*/

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params; 
    const updatedData = req.body;
    console.log('Received ID:', id);
  console.log('Received updated data:', updatedData);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: 'Invalid doctor ID' });
    }

    const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: updatedData }, { new: true });
    if (!updatedDoctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }

    res.status(200).json({ success: true, message: 'Doctor profile updated', data: updatedDoctor });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error updating doctor profile' });
  }
};



export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Successfully deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to delete' });
  }
};


export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).populate('reviews').select("-password");
    res.status(200).json({ success: true, message: 'Doctor Found', data: doctor });
  } catch (err) {
    console.error(err); 
    res.status(404).json({ success: false, message: 'No Doctor Found' });
  }
};


export const getAllDoctor = async (req, res) => {

  try {
    const { query } = req.query; // Destructure query parameter from request
    let doctors;

    if (query) {
    doctors = await Doctor.find({
      isApproved: "approved",
      $or: [
        { name: { $regex: query, $options: "i" } },
        { specialization: { $regex: query, $options: "i" } },
      ],
    }).select('-password');
  } else {
    doctors = await Doctor.find({ isApproved: "approved" }).select('-password');
  }
    //const doctors = await Doctor.find({}).select("-password");
    res.status(200).json({ success: true, message: 'Doctor Found', data: doctors });
  } catch (err) {
    console.error(err)
    res.status(404).json({ success: false, message: 'Not Found' });
  }
};



/*export const getDoctorProfile = async(req,res)=>{
    const doctorId = req.userId

    try{
        const doctor = await Doctor.findById(userId)

        if(!doctor){
            return res.status(404).json({success:false , message:"Doctor not found"})
        }

        const {password, ...rest} = user._doc
        const appointments = await Booking.find({doctor:doctorId})


        res.status(200).json({success:true, message:"Profile Info is getting", data:{...rest, appointments}});
    } catch(err){
        res.status(500).json({ success: false, message: 'Something went wrong, cannot get' });
    }
};*/

export const getDoctorProfile = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate('reviews').select("-password");
    const appointments = await Booking.find()
    res.status(200).json({ success: true, message: 'Doctors Found', data: doctors, appointments });
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: 'Error fetching doctors' });
  }
};

