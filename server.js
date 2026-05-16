const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(path.join(__dirname)));

// Rutas principales
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML", "auth", "login.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML", "auth", "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML", "auth", "register.html"));
});

app.get("/recuperar", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML", "auth", "recuperacion_cuenta.html"));
});

app.get("/reportes", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML", "reportes_ver", "reportes_ver.html"));
});

app.get("/reportes-globales", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML", "reportes_globales", "reportes_globales.html"));
});

app.get("/enviar-reporte", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML", "reporte_enviar", "reporte_enviar.html"));
});

app.get("/gestion-reportes", (req, res) => {
  res.sendFile(path.join(__dirname, "HTML", "reportes_gestion", "reportes_gestion_M9.html"));
});

app.listen(port, () => {
  console.log(`Server Frontend levantado en http://localhost:${port}`);
});
