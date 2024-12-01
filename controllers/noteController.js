const notes = require("../model/noteModel");
const user = require("../model/userModel");

exports.addNotesController = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;

  console.log(title, description, id);

  try {
    const exisitingUser = await user.findOne({ _id: id });
    if (exisitingUser) {
      const newNote = new notes({
        userId: id,
        title,
        description,
      });
      await newNote.save();
      res.status(200).json("yeah");
    } else {
      res.status(401).json("No");
    }
  } catch (error) {
    res.status(400).json("error");
  }
};

exports.getNotesController = async (req, res) => {
  // console.log("id: ", id);
  const { id } = req.params;

  try {
    const allNotes = await notes.find({ userId: id });
    console.log(allNotes);
    if (allNotes) {
      res.status(200).json(allNotes);
    } else {
      res.status(401).json("No");
    }
  } catch (error) {
    res.status(400).json("error");
  }
};

exports.deleteNotesController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const getANote = await notes.findOne({ _id: id });
    console.log(getANote);
    const deletedNote = await notes.findByIdAndDelete({ _id: id });
    if (deletedNote) {
      res.status(200).json(deletedNote);
    } else {
      res.status(402).json("Can't delete");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getANoteController = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const getAnote = await notes.findOne({ _id: id });
    if (getAnote) {
      res.status(200).json(getAnote);
    } else {
      res.status(401).json("error");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateNoteController = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  console.log(id, title, description);

  try {
    const noteData = await notes.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        description: description,
      },
      {
        new: true,
      }
    );
    await noteData.save();
    res.status(200).json("success");
  } catch (error) {
    res.status.json(error);
  }
};
