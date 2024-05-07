import {Reporter, TestCase, TestResult} from '@playwright/test/reporter';

export default class ScreenComparisonReporter implements Reporter {
  onTestEnd(testCase: TestCase, testResult: TestResult): void {
    if (hasScreenComparisonFailed(testResult)) {
      console.log('TestCase object:', '\n', testCase);
      console.log('\n//////////////////////////////////////////////////////////////////////////////\n');
      console.log('TestResult object:', '\n', testResult);
    }
  }
}

const hasScreenComparisonFailed = (result: TestResult): boolean =>
  result.status === 'failed' &&
  result.attachments.some((att) => att.contentType === 'image/png');
