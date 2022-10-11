module.exports = mongoose => {
    const Schema = mongoose.Schema(
      {
        name: String,
        age: Number,
        email: {
          type: String,
          lowercase: true
         },
        dob: Date,
        address: String,
        photo: String,
      },
      { timestamps: true }
    );
  
    const Employee = mongoose.model("employees", Schema);
    return Employee;
  };
  