import { db } from "../db.js"


export const getUsers = (req, res) => {

    db.query("SELECT * FROM usuarios", (err, result) => {
        if (err) return res.json(err);

        return res.status(200).json(result)
    })
}

export const createUser = (req, res) => {
    const q =
        "INSERT INTO usuarios(`nome`, `email`, `contato`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.contato,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
}

export const updateUser = (req, res) => {
    const q =
        "UPDATE usuarios SET `nome` = ?, `email` = ?, `contato` = ?, `data_nascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.contato,
        req.body.data_nascimento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
}


export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
}



