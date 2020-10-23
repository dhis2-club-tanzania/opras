export interface User {
  id: string;
  pictureLink: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  dateOfBirth?: Date;
  voteCode: number;
  voteDescription: string;
  subVoteCode: number;
  subVoteDescription: number;
  checkNumber: number;
  presentStationCode: number;
  presentStationName: string;
  academicQualification: string;
  dutyPost?: string;
  substansivePost: string;
  dateOfFirstAppointment: Date;
  salaryScale: string;
  termsOfService: string;
}
