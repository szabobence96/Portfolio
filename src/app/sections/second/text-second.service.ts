import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextSecondService {

  constructor() { }

  header = 'Projektmunkáim';
  text = 'Az utóbbi időben egy saját fejlesztésű projektmunkán dolgoztam, melyet Angular keretrendszerrel valósítottam meg. Ez egy fiktív webáruház különböző termékekkel, regisztrációval és bejelentkezéssel. A felhasználókat és az adataikat, termékeket, rendeléseket Firebase-ben tárolja.'
  button = 'Tovább a weboldalra'
}
