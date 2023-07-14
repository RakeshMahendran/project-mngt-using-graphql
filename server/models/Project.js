const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProjectSchema = new schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum:['Not Started', 'In progress', 'Completed']
  },
  clientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'ClientModel'
  }
});

const ProjectModel = mongoose.model("ProjectModel", ProjectSchema);

module.exports = ProjectModel;
