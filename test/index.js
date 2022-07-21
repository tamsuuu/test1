import { Rate } from 'k6/metrics';
import  { dashboard } from './dashboard.js'
export const errorRate = new Rate('error_rate');


export const options = {
  scenarios: {
    dashboard: {
      executor: 'constant-vus',
      vus: 50,
      duration: '1m',
    },
  },

  thresholds: {
    http_req_failed: ['rate<0.50'],
    http_req_duration: [{ threshold: 'p(95)<20000', abortOnFail: true }],
    checks: ['rate>0.90'],
    errorRate: ['rate<0.50'],
  },
};

export default function () {
    dashboard();
}