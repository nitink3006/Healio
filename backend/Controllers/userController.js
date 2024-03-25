
import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";


export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.status(200).json({ success: true, message: 'Successfully updated', data: updatedUser });
  } catch (err) {
    //console.error(err); // Log the error for debugging purposes
    res.status(500).json({ success: false, message: 'Failed to update' });
  }
};


export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Successfully deleted' });
  } catch (err) {
    //console.error(err); // Log the error for debugging purposes
    res.status(500).json({ success: false, message: 'Failed to delete' });
  }
};


export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");
    res.status(200).json({ success: true, message: 'User Found', data: user });
  } catch (err) {
    //console.error(err); // Log the error for debugging purposes
    res.status(404).json({ success: false, message: 'No User Found' });
  }
};


export const getAllUser = async (req, res) => {


  try {

    const { query } = req.query; // Destructure query parameter from request
    let users;

    if (query) {
    users = await User.find({
      /*isApproved: "approved",*/
      $or: [
        { name: { $regex: query, $options: "i" } },
        { specialization: { $regex: query, $options: "i" } },
      ],
    }).select('-password');
  } else {
    users = await User.find({ /*isApproved: "approved" */}).select('-password');
  }
    //const users = await User.find({}.select("-password"));
    res.status(200).json({ success: true, message: 'User Found', data: users });
  } catch (err) {
    //console.error(err); // Log the error for debugging purposes
    res.status(404).json({ success: false, message: 'Not Found' });
  }
};


export const getUserProfile = async (req,res)=>{
    const userId = req.userId

    try{
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({success:false , message:"User not found"})
        }

        const {password, ...rest} = user._doc

        res.status(200).json({success:true, message:"Profile Info is getting", data:{...rest}});
    } catch(err){
        res.status(500).json({ success: false, message: 'Something went wrong, cannot get' });
    }
};


export const getMyAppointments = async(req,res)=>{
    try{

        //1: retrieve appo. from booking for specific user
        const bookings = await Booking.find({user:req.userId});

        //2: extract doctor ids from appointment booking
        const doctorIds = bookings.map(el => el.doctor.id);
        //3: retrieve doctor using doctor ids
        const doctors = await Doctor.find({_id: {$in:doctorIds}}).select("-password");

        res.status(200).json({success:true,message:"Appointments are getting", data:doctors})
    }catch(err){
        res.status(500).json({ success: false, message: 'Something went wrong, cannot get' });
    }
}

