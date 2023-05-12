import express from "express";

const router = express.Router()

// console.log("success")
router.get("/all", (req, res) => {
    res.json({
        msg: "product get all"
    })
})
router.post("/create", (req, res) => {
    const userInput = {
        name: req.body.productName,
        price: req.body.productPrice
    }
    res.json({
        msg: "created a product",
        product: userInput
    })
})
router.put("/update", (req, res) => {
    res.json({
        msg: "updated a product"
    })
})
router.delete("/delete", (req, res) => {
    res.json({
        msg: "deleted a product"
    })
})

export default router