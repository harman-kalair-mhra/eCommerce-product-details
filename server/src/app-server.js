const express = require('express')
const cors = require('cors')
const  { connection } = require('./db')

const app = express()

console.log(connection)

app.use(cors())

app.get('/', () => {
    console.log("Working")
})

app.get('/product-details/:id', (req, res) => {
    let productid = req.params.id;
    const SELECT_BOOKS_BY_ID = ("SELECT * FROM productdetails WHERE microservices.productdetails.id LIKE '" + productid + "'")

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

// app.get('/products', (req, res) => {
//     connection.query(SELECT_ALL_PRODUCTS, (err, results) => {
//         if(err) {
//             return res.send(err)
//         }
//         else {
//             return res.json({
//                 data: results
//             })
//         }
//     })
// })



const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));