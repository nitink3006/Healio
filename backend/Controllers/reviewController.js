import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({ success: true, message: "Successful", data: reviews });
  } catch (err) {
    console.error("Error fetching reviews:", err); // Log error for debugging
    res.status(404).json({ success: false, message: "Not Found" }); // Generic error message for now
  }
};

// Create a review
export const createReview = async (req, res) => {
    if (!req.body.doctor)  req.body.user = req.params.doctorId
    if(!req.body.user ) req.body.user = req.userId

    const newReview = new Review(req.body)

    try{
        const savedReview = await newReview.save()

        await Doctor.findByIdAndUpdate(req.body.doctor,{
            $push:{reviews: savedReview._id}
        })

        res.status(200).json({success:true,message:"Review Submitted",data:savedReview})

    }catch(err){
        res.status(500).json({success:false,message:err.message})
    }
};
