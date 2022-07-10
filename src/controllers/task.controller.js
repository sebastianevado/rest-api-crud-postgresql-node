//DATABASE OBJECT
const pool = require('../db');
//CONTROLERS EXPORT
async function getAllTasks(req, res) {
  const tasks = await pool.query('SELECT * FROM task')
  res.json(tasks.rows);
}
async function getTask(req, res) {
  const { id } = req.params;
  const task = await pool.query(`SELECT * FROM task WHERE id = ${id}`)
  res.status(200).json({Task: [`${task.rows[0].title}`, `${task.rows[0].description}`]});
}
async function createTask(req, res) {
  const { title, description } = req.body;
  const result = await pool.query('INSERT INTO task (title, description) VALUES ($1,$2)', [title, description]);
  console.log(result);
  res.send(`Task ${title} created`);
}

async function deleteTask(req, res) {
  const { id } = req.params;
  const task = await pool.query(`DELETE FROM task WHERE id = ${id}`)
  res.status(200).json({ message: `Task ${id} was succesfully deleted` });
}
async function updateTask(req, res) {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = await pool.query(`UPDATE task SET title = '${title}', description = '${description}' WHERE id = ${id}`)
  res.status(200).json({ message: `Task ${id} was succesfully deleted` });
}

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask }
