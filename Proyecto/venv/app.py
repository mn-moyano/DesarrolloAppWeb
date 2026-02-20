# Importamos Flask y render_template
from flask import Flask, render_template

# Creamos la aplicación Flask
app = Flask(__name__)

# Ruta principal "/"
@app.route("/")
def home():
    # Renderiza el archivo home.html
    return render_template("home.html")

# Ruta dinámica que recibe el nombre del paciente
@app.route('/cita/<paciente>')
def cita(paciente):
    # Renderiza cita.html y envía la variable paciente al HTML
    return render_template("cita.html", paciente=paciente)

# Ejecuta la aplicación en modo debug
if __name__ == "__main__":
    app.run(debug=True)