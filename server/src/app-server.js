const express = require('express')
const cors = require('cors')
const  { connection } = require('./db')

const app = express()

// outputs sql connection
console.log(connection)

app.use(cors())

app.get('/', () => {
    console.log("Working")
})

// get request product details by id
// response in json format
app.get('/product-details/:id', (req, res) => {
    let productid = req.params.id;
    // sql query to select book, where id = (user input)
    const SELECT_BOOKS_BY_ID = ("SELECT * FROM bookdetails WHERE ecommerce.bookdetails.id LIKE '" + productid + "'")
    connection.query(SELECT_BOOKS_BY_ID, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
})

// using this get request for the mock page
// gets all products from db
app.get('/products', (req, res) => {
    const SELECT_ALL_PRODUCTS = 'SELECT * FROM bookdetails'
    connection.query(SELECT_ALL_PRODUCTS, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
})



const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));