const db = require("../../models/customer")
const app = require('express').Router


app.put("/API/customerForm", (req, res) => {
    customerInfo = res.data
    customerInfo.date_contacted = date.now()
    cusotmerInfo.service_notes = ""
    cusotmerInfo.products_used = ""
    db.Customers.insert({customerInfo})
})