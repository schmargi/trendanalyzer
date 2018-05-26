import { helper as buildHelper } from '@ember/component/helper';

export function inc(params/*, hash*/) {
  return params[0] + (params[1] || 1);
}

export default buildHelper(inc);
