from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Bienvenido al Sistema de Turnos - Clínica Dental D y A Odontología Especializada"

@app.route('/cita/<paciente>')
def cita(paciente):
    return f"Bienvenido, {paciente}. Tu cita odontológica ha sido registrada correctamente."

if __name__ == "__main__":
    app.run(debug=True)