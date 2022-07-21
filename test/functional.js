import http from 'k6/http';
import { check } from 'k6';

export function unreadConversation(request_url, user_token) {
  const unreadConversation = http.get(
    `${request_url}/api/me/unread_conversations`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(unreadConversation, {
    'unreadConversation Response is 200': (r) => r.status === 200,
    'unreadConversation api duration is less than or equal 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(unreadConversation.timings.duration > 1000);
}

export function stackedFeatures(request_url, user_token) {
  const stackedFeatures = http.get(`${request_url}/api/me/features`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(stackedFeatures, {
    'stackedFeatures Response is 200': (r) => r.status === 200,
    'stackedFeatures api duration is less than or equal 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(stackedFeatures.timings.duration > 1000);
}

export function stackedCourse(request_url, user_token, course_key) {
  const stackedCourse = http.get(
    `${request_url}/api/courses_by_course_key/${course_key}`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(stackedCourse, {
    'stackedCourse Response is 200': (r) => r.status === 200,
    'stackedCourse api duration is less than or equal 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(stackedCourse.timings.duration > 1000);
}

export function courseProgress(request_url, user_token, course_id) {
  const courseProgress = http.get(
    `${request_url}/api/courses/${course_id}/progresses`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(courseProgress, {
    'courseProgress Response is 200': (r) => r.status === 200,
    'courseProgress api duration is less than or equal 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(courseProgress.timings.duration > 1000);
}

export function courseModules(request_url, user_token, course_id) {
  const courseModules = http.get(
    `${request_url}/api/courses/${course_id}/modules`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(courseModules, {
    'courseModules Response is 200': (r) => r.status === 200,
    'courseModules api duration is less than or equal 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(courseModules.timings.duration > 1000);
}

export function purchaseType(request_url, user_token, course_id) {
  const purchaseType = http.get(
    `${request_url}/api/course_purchase_slots/${course_id}/user_type`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(purchaseType, {
    'purchaseType Response is 200': (r) => r.status === 200,
    'purchaseType api duration is less than or equal 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(purchaseType.timings.duration > 1000);
}

export function certificateDownload(request_url, user_token, course_id) {
  const certificateDownload = http.get(
    `${request_url}/api/courses/${course_id}/certificate/can_download`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(certificateDownload, {
    'certificateDownload Response is 200': (r) => r.status === 200,
    'certificateDownload api duration is less than or equal 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(certificateDownload.timings.duration > 1000);
}

export function studentClasses(request_url, user_token, course_id) {
  const studentClasses = http.get(
    `${request_url}/api/me/courses/${course_id}/classes?role=student`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(studentClasses, {
    'StudentClasses response must 200': (r) => r.status === 200,
    'StudentClasses api duration must less than or equal to 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(studentClasses.timings > 1000);
}

export function studentGrades(request_url, user_token, class_id) {
  const studentGrades = http.get(
    `${request_url}/api/me/classes/${class_id}/grade_book`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(studentGrades, {
    'studentGrades response must 200': (r) => r.status === 200,
    'studentGrades api duration must less than or equal to 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(studentGrades.timings > 1000);
}

export function courseStudentFiles(request_url, user_token, course_id) {
  const courseStudentFiles = http.get(
    `${request_url}/api/courses/${course_id}/files?view=student`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(courseStudentFiles, {
    'courseStudentFiles response must 200': (r) => r.status === 200,
    'courseStudentFiles api duration must less than or equal to 1 seconds': (
      r
    ) => r.timings.duration <= 1000,
  });

  errorRate.add(courseStudentFiles.timings > 1000);
}

export function courseStudentQuiz(request_url, user_token, course_id) {
  const courseStudentQuiz = http.get(
    `${request_url}/api/courses/${course_id}/quizzes?role=student`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(courseStudentQuiz, {
    'courseStudentQuiz response must 200': (r) => r.status === 200,
    'courseStudentQuiz api duration must less than or equal to 1 seconds': (
      r
    ) => r.timings.duration <= 1000,
  });

  errorRate.add(courseStudentQuiz.timings > 1000);
}

export function verifyToken(request_url, user_token) {
  const verifyToken = http.post(`${request_url}/api/auth/token/verify`, {
    token: user_token,
  });

  check(verifyToken, {
    'Verify Response is 200': (r) => r.status === 200,
    'Verify api duration is 1 seconds': (r) => r.timings.duration <= 1000,
  });

  errorRate.add(verifyToken.timings.duration > 1000);
}

export function getUserPrizes(request_url, user_token) {
  const getUserPrizes = http.get(`${request_url}/api/get_user_prizes`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(getUserPrizes, {
    'User Prizes Response is 200': (r) => r.status === 200,
    'User Prizes api duration is 1 seconds': (r) => r.timings.duration <= 1000,
  });
  errorRate.add(getUserPrizes.timings.duration > 1000);
}

export function specialEvents(request_url, user_token) {
  const specialEvents = http.get(`${request_url}/api/special_events`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(specialEvents, {
    'Special Events Response is 200': (r) => r.status === 200,
    'Special Events api duration is 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });
  errorRate.add(specialEvents.timings.duration > 1000);
}

export function networkSuggest(request_url, user_token) {
  const networkSuggest = http.get(`${request_url}/api/connections/suggest`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(networkSuggest, {
    'Network Suggest Response is 200': (r) => r.status === 200,
    'Network Suggest api duration is 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(networkSuggest.timings.duration > 1000);
}

export function contestChallenges(request_url, user_token) {
  const contestChallenges = http.get(`${request_url}/api/contests`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(contestChallenges, {
    'Stackleague Challenges Response is 200': (r) => r.status === 200,
    'Stackleague Challenges api duration is 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(contestChallenges.timings.duration > 1000);
}

export function stackleagueProfile(request_url, user_token) {
  const stackleagueProfile = http.get(`${request_url}/api/profile`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(stackleagueProfile, {
    'Stackleague Profile Response is 200': (r) => r.status === 200,
    'Stackleague Profile api duration is 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });
  errorRate.add(stackleagueProfile.timings.duration > 1000);
}

export function userWaitLists(request_url, body_payload, user_token) {
  const userWaitLists = http.post(`${request_url}/api/waitlist`, body_payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user_token}`,
    },
  });

  check(userWaitLists, {
    'User Wait List Response is 200': (r) => r.status === 200,
    'User Wait List api duration is 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(userWaitLists.timings.duration > 1000);
}

export function notificationCount(request_url, user_token) {
  const notificationCount = http.get(
    `${request_url}/api/notifications/unread/count`,
    {
      headers: { Authorization: `Bearer ${user_token}` },
    }
  );

  check(notificationCount, {
    'Notification Count Response is 200': (r) => r.status === 200,
    'Notification Count api duration is 1 seconds': (r) =>
      r.timings.duration <= 1000,
  });

  errorRate.add(notificationCount.timings.duration > 1000);
}

export function organization(request_url, user_token) {
  const getOrganizaton = http.get(`${request_url}/api/me/organizations`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(getOrganizaton, {
    'Organization Response is 200': (r) => r.status === 200,
    'Organization api duration is 1 seconds': (r) => r.timings.duration <= 1000,
  });
  errorRate.add(getOrganizaton.timings.duration > 1000);
}

export function courseLanguages(request_url, user_token) {
  const courseLang = http.get(`${request_url}/api/course_languages?page=1`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(courseLang, {
    'Course Languages Response is 200': (r) => r.status === 200,
    'Course Languages api duration is 1 seconds': (r) => r.timings.duration <= 1000,
  });
  errorRate.add(courseLang.timings.duration > 1000);
}

export function courseSubjects(request_url, user_token) {
  const courseSub = http.get(`${request_url}/api/course_subjects?page=1`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(courseSub, {
    'Course Subjects Response is 200': (r) => r.status === 200,
    'Course Subjects api duration is 1 seconds': (r) => r.timings.duration <= 1000,
  });
  errorRate.add(courseSub.timings.duration > 1000);
}

export function popularCoursesPageOne(request_url, user_token) {
  const popularCourses = http.get(`${request_url}/api/courses?type=stacktrek-academy-free&view=student&page=1`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(popularCourses, {
    'Popular Courses page 1 Response is 200': (r) => r.status === 200,
    'Popular Courses page 1 api duration is 1 seconds': (r) => r.timings.duration <= 1000,
  });
  errorRate.add(popularCourses.timings.duration > 1000);
}

export function forSchoolsPageOne(request_url, user_token) {
  const forSchool = http.get(`${request_url}/api/courses?type=stacktrek-academy-for-schools&page=1&yearLevel=year%201`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(forSchool, {
    'For Schools page 1 Response is 200': (r) => r.status === 200,
    'For Schools page 1 api duration is 1 seconds': (r) => r.timings.duration <= 1000,
  });
  errorRate.add(forSchool.timings.duration > 1000);
}

export function stackLeagueTrainingPageOne(request_url, user_token) {
  const stackLeagueTraining = http.get(`${request_url}/api/courses?type=stackleague&page=1&view=student`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(stackLeagueTraining, {
    'StackLeague Training page 1 Response is 200': (r) => r.status === 200,
    'StackLeague Training page 1 api duration is 1 seconds': (r) => r.timings.duration <= 1000,
  });
  errorRate.add(stackLeagueTraining.timings.duration > 1000);
}

export function thirdPartyContentPageOne(request_url, user_token) {
  const thirdPartyContent = http.get(`${request_url}/api/courses?type=public-free&page=1&version=2`, {
    headers: { Authorization: `Bearer ${user_token}` },
  });

  check(thirdPartyContent, {
    'Third Party Content page 1 Response is 200': (r) => r.status === 200,
    'Third Party Content page 1 api duration is 1 seconds': (r) => r.timings.duration <= 1000,
  });
  errorRate.add(thirdPartyContent.timings.duration > 1000);
}
