const router = require("express").Router();
const itemRoutes = require("./items");
const layoutRoutes = require("./layout");
const warehouseRoutes = require("./warehouse");
const inventoryRoutes = require("./inventory");
const binQtyRoutes = require("./binQty");

const recaptchaRoutes = require("./recaptcha");

router.use("/items", itemRoutes);
router.use("/layout", layoutRoutes);
router.use("/bin", layoutRoutes);
router.use("/inventoryid", inventoryRoutes);
router.use("/warehouse", warehouseRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/binQty", binQtyRoutes);

router.use("/recaptcha", recaptchaRoutes);

module.exports = router;
