// write route for case breif

const express = require("express");
const router = express.Router();
const {
  generateCaseBrief,
  getCaseBrief,
  updateCaseBrief,
  deleteCaseBrief
} = require("../modules/caseBreif/caseBreifGenerator");

// Create new case brief
router.post("/brief", async (req, res) => {
  try {
    const { rawInput } = req.body;
    if (!rawInput) return res.status(400).json({ error: "rawInput required" });

    const result = await generateCaseBrief(rawInput);
    res.json({ brief: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal error while generating brief" });
  }
});

// Get case brief by ID
router.get("/brief/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "ID required" });

    const brief = await getCaseBrief(id);
    if (!brief) return res.status(404).json({ error: "Brief not found" });
    
    res.json({ brief });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal error while fetching brief" });
  }
});

// Update case brief
router.put("/brief/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { updates } = req.body;
    
    if (!id || !updates) {
      return res.status(400).json({ error: "ID and updates required" });
    }

    const updatedBrief = await updateCaseBrief(id, updates);
    res.json({ brief: updatedBrief });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal error while updating brief" });
  }
});

// Delete case brief
router.delete("/brief/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "ID required" });

    await deleteCaseBrief(id);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal error while deleting brief" });
  }
});

module.exports = router;
