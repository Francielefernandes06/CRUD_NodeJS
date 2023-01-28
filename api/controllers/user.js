import {db} from "../db.js"


const getUser = (req, res) => {

    db.query("SELECT * FROM usuarios", (err, result) => {
        if (err) return res.json(err);
        
        return res.status(200).json(result)
    })
}

export default getUser