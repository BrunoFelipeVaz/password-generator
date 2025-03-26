import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports:[
    FormsModule
  ],
  template: `
    <div class="container">
      <h1>Gerador de Senhas</h1>

      <label>
        Quantidade Caracteres:
        <input type="number" [(ngModel)]="length" min="4" max="16">
      </label>

      <label>
        <input type="checkbox" [(ngModel)]="includeUpperCase"> Incluir Letras Maiúsculas
      </label>

      <label>
        <input type="checkbox" [(ngModel)]="includeNumbers"> Incluir Números
      </label>

      <label>
        <input type="checkbox" [(ngModel)]="includeSymbols"> Incluir Símbolos
      </label>

      <button (click)="generatePassword()">Gerar Senha</button>

      <div class="passwordOutput">
        <input type="text" [value]="password" readonly>
        <button (click)="copyToClipboard()">Copiar</button>
      </div>
    </div>
  `,
  styles:[`
    .container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border-radius: 8px;
      background: #f4f4f4;
      text-align: center;
    }

    h1 {
      margin-bottom: 10px;
    }

    label {
      display: block;
      margin: 10px 0;
    }

    button {
      background: #007bff;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      margin-top: 10px;
      border-radius: 5px;
    }

    .passwordOutput {
      margin-top: 10px;
      display: flex;
      gap: 10px;
    }

    .passwordOutput input {
      flex: 1;
      padding: 5px;
      text-align: center;
      border: 1 px solid #ccc;
      border-radius: 5px;
    }
    `]
})
export class AppComponent {
  password: string = '';
  length: number = 12;
  includeNumbers: boolean = true;
  includeSymbols: boolean = true;
  includeUpperCase: boolean = true;

  generatePassword() {
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (this.includeUpperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (this.includeNumbers) characters += '0123456789';
    if (this.includeSymbols) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

    this.password = Array.from({ length: this.length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.password).then(() => alert('Senha copiada!'));
  }
}
