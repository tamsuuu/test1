import http from 'k6/http';
import { Rate } from 'k6/metrics';
import { check, group, sleep } from 'k6';
import { env } from '../../environment_variables.js';
import {
    verifyToken,
    organization,
    courseLanguages,
    courseSubjects,
    popularCoursesPageOne,
    forSchoolsPageOne,
    stackLeagueTrainingPageOne,
    thirdPartyContentPageOne,
  } from '../../functional.js';
  

export const errorRate = new Rate('error_rate');


export function dashboard() {
  group('Front pages', function () {
    const marketplacePage = http.get(`${env.stacked.request_url}/marketplace`);

    check(marketplacePage, {
        'Marketplace page response time is okay': (r) => r.timings.duration <= 1000,
    });

    sleep(1);
  });

  group('Api requests', function() {
    // Check verify token
    verifyToken(env.stacked.request_url, env.stacked.bearerToken);
    
    // Check Organization api
    organization(env.stacked.request_url, env.stacked.bearerToken);

    // Check Course Languages api
    courseLanguages(env.stacked.request_url, env.stacked.bearerToken);

    // Check Course Subjects api
    courseSubjects(env.stacked.request_url, env.stacked.bearerToken);

    // Check Popular Courses api page one 
    popularCoursesPageOne(env.stacked.request_url, env.stacked.bearerToken);

    // Check For Schools api page one
    forSchoolsPageOne(env.stacked.request_url, env.stacked.bearerToken);

    // Check Stacklegaue Training api page one
    stackLeagueTrainingPageOne(env.stacked.request_url, env.stacked.bearerToken);

    // Check Third Party Content api page one
    thirdPartyContentPageOne(env.stacked.request_url, env.stacked.bearerToken);
  });

}
