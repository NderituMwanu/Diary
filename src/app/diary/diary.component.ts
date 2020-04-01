import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diary: Diary[] = [
    new Diary(1, ' I will sing a song', new Date(2020,1,12)),
    new Diary(2, 'I will go through Guitar tutorials', new Date(2020,1,12)),
    new Diary(3, "I have band rehearsals", new Date(2020,1,12)),
    new Diary(4, "I Marks one month of constant practice", new Date(2020,1,12)),
    new Diary(5, "I shall meet Annie and Benjie for Lunch", new Date(2020,1,12)),
  ]

  toggleDetails(index){
    this.diary[index].showDescription = !this.diary[index].showDescription;
  }


  completeDiary(isComplete, index){
    if (isComplete){
      this.diary.splice(index, 1);
    }
  }

  addNewDiary(diary){
    let diaryLength = this.diary.length;
    diary.id = diaryLength+1;
    diary.completeDate = new Date(diary.completeDate)
    this.diary.push(diary)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
