const express = require("express");
const router = express.Router();
const {
  save,
  get,
  edit,
  delete_data,
} = require("../controllers/crudController");

router.get("/", async (req, res) => {
  const data = await get();
  res.json({ data: data });
});

router.post("/", async (req, res) => {
  let data = await save(req.body);
  res.json({
    message: "sucess",
    data: data,
  });
});

router.put("/:id", async (req, res) => {
  req.body.id = req.params.id;
  let toEdit = await edit(req.body);
  res.json({
    message: "sucess",
    data: toEdit,
  });
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let toDelete = await delete_data(id);
  res.json({
    message: "sucess",
    data: toDelete,
  });
});

module.exports = router;
