import { Router } from "express";

const students = Router();

students.get("/", (req, res) => {
    return res.status(200).send({ message: "Get all Students" });
    });

students.get("/:id", (req, res) => {
    const {id} = req.params;
    return res.status(200).send({ message: `Get student ${id}` });
    });

students.post("/", (req, res) => {
    const {name,age,email} = req.body;
    if (!name || !age || !email) {
        return res.status(400).send({ message: "Missing fields" });
    }else{
    return res.status(200).send({ message: `Student with name ${name}, with age ${age}, email ${email}` });}
    });

students.put("/:id", (req, res) => {
    const {id} = req.params;
    const {name,age,email} = req.body;
    if (!name || !age || !email) {
        return res.status(400).send({ message: "Missing fields" });
    }else{
    return res.status(200).send({ message: `Student with id ${id} updated with name ${name}, with age ${age}, email ${email}` });}
    });

students.delete("/:id", (req, res) => {
    const {id} = req.params;
    return res.status(200).send({ message: `Student with id ${id} deleted` });
    });

export default students;