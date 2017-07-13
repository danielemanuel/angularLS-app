import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];


  constructor() {

    this.questions = [
      {
        text:'What is your name?',
        answer: "My name is Daniel",
        hide: true
      },
      {
        text:'What is your favourite color?',
        answer: "My favorite color is red",
        hide: true
      },
      {
        text:'What is your favourite language?',
        answer: "My favourite language is javascript",
        hide: true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }

  addQuestion(question:Question){
      this.questions.unshift(question);
  }

}
