import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course-service';
import { Course } from '../../models/course';
import { Assignments } from '../../models/assignments';
import { DatePipe } from '@angular/common';
import { AssignmentService } from '../../services/assignment-service';

@Component({
  selector: 'app-course-details',
  imports: [DatePipe],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetails {
  activatedRoute = inject(ActivatedRoute);
  courseService = inject(CourseService);
  assignmentService=inject(AssignmentService);

  router = inject(Router);
  courseId1!: string;

  selectedCourse = signal<{ course: Course, assignments: Assignments[], quizzes:any[] } | null>(null);

  ngOnInit() {
    this.courseId1 = this.activatedRoute.snapshot.params['courseId'];
    this.courseService.getCourseById(this.courseId1).subscribe(res => {
      this.selectedCourse.set(res.result);
      console.log(res.result);
    })
  }

  hasAccess = (): boolean => {
    return localStorage.getItem("eshikshaToken") ? true : false;
  }

  // selectedCourse = signal(this.MOCK_SELECTED_COURSE);
  enroll() {
    alert(`Successfully enrolled in ${this.selectedCourse()?.course?.title}!`);
  }

  goToSubmitAssignment(assignment:Assignments) {
    this.assignmentService.selectedAssignment$.next(assignment);

    this.router.navigate(
      ['/dashboard/coursecatalog/coursedetails', this.courseId1, 'assignment', assignment._id]
    );


  }

  startQuiz(quizId:string){
    console.log(quizId);
    if(confirm("Are you want to start this quiz?")){
      this.router.navigate(["/coursedetails", this.courseId1, 'quiz', quizId]);
    }
  }

}
