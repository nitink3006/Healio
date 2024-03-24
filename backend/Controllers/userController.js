


import User from "../models/UserSchema.js";

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

