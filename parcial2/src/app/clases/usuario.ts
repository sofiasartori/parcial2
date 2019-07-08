export class Usuario {
    email: string;
    tipo: string;
    password: string;
    
    public constructor(email: string, tipo: string, password: string){
      this.email = email;
      this.tipo = tipo;
      this.password = password;
    }
  }