import SenderRegModel from '../models/DataModel.js';

const RecordRegister = async (req, res) => {
   const {senderName, senderEmail, senderMessage, Date} = req.body;
   const data = req.body;
   if (senderName && senderEmail && senderMessage && Date) {
      if (senderName) {
         try {
            const doc =  new SenderRegModel(data);
            await doc.save();
            res.status(201).send({
               status: "Success",
               message: "Mail Inserted...",
               data,
            });
         }
         catch(err){
            console.log(err);
            res.send({
               status: "Error", 
               message: "Unable to Insert."
            });
         }
      }
      else {
         res.send({
            status: "Name Issue Issue",
            message: "Please insert accuratly...",
         });
      };
   }else {
      res.send({
         status: "Error",
         message: "Please fill all the fields...",
      });
   };
};

const RecordDisplay = async(req, res) => {
   try {
      const userData = await SenderRegModel.find({});
      if (userData.length > 0){
         res.status(200).send({
            status: "Success",
            message: "Get User Records",
            userData,
         });
      }
      else{
      res.status(201).send({
         status: "Success",
         message: "No user found...",
         userData,
      });
   }
}
   catch (err) {
      console.log(err);
      res.status(500).send({status: "Error", message: "Unable to display user data"})
   }
};

const RecordSearchByID = async (req, res) => {
   try {
      const userData = await SenderRegModel.find({ _id: req.params.id });
      if (userData.length > 0){
         res.status(200).send({
            status: "Success",
            message: "Get User Record",
            userData,
         });
      }
      else {
         res.status(200).send({
            status: "Success",
            message: "User Not Found",
         });
      }
   }
   catch (err) {
      console.log(err);
      res.status(500).send({ status: "Error", message: "Unable to Display details"});
   }
};

const RecordDeleteAll = async (req, res) => {
   try {
      const userData = await SenderRegModel.deleteMany({});
      if (userData) {
         res.status(200).send({
            status: "Success",
            message: "Delete All Users",
            userData,
         });
      }
      else {
         res.status(200).send({
            status: "Success",
            message: "No User Found",
         });
      }
   }
   catch (err) {
      console.log(err);
      res.status(500).send({ status: "Error", message: "Unable to delete user details"})
   }
};

const RecordDeleteByID = async (req, res) => {
   try {
      const userData = await SenderRegModel.findByIdAndDelete({
         _id: req.params.id,

      });
      if (userData){
         res.status(200).send({
            status: "Success",
            message: "This User Deleted",
            userData,
         });
      }
      else {
         res.status(200).send({
            status: "Success",
            message: "User not Found",
         });
      }
   }
   catch(err){
      console.log(err);
      res.status(500).send({ status: "Error", message: "Unabele to delete User details by ID"});
   }
};

const RecordUpdateByID = async (req, res) => {
   try {
      console.log(req.body);
      console.log(req.params.id);
      const userData = await SenderRegModel.findByIdAndUpdate({
         _id: req.params.id,
      },
      req.body
      );
      if (userData) {
         res.status(200).send({
            status: "Success",
            message: "User Updated",
            userData,
         });
      }
      else {
         res.status(200).send({
            status: "Seccess",
            message: "User Not Found",
         });
      }
   }
   catch(err){
      console.log(err);
      res.status(500).send({ status: "Error", messge: "Unable to update user"});
   }
};

export default {RecordRegister, RecordDisplay, RecordSearchByID, RecordDeleteAll, RecordDeleteByID, RecordUpdateByID, };