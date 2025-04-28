import { estudiantes } from "../db/fake/fakeService";

export class StuController {
    async getStudents() {
        return estudiantes;
    }
    verifyStudent(usuario: string, contrasena: string) {
        let estudiante;
        for (let i = 0; i < estudiantes.length; i++) {
            if (estudiantes[i].usuario === usuario && estudiantes[i].contrasena === contrasena) {
                estudiante = estudiantes[i];
                break;
            }
        }
        if (estudiante) {
            return estudiante.nombre, estudiante.libroFav;
        } else {
            throw new Error("Usuario o contraseña incorrectos");
        }
    }
}