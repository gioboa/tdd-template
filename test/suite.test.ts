import { it, describe, expect, assert, beforeAll, beforeEach } from 'vitest';
import { foo } from '../src';

describe('ScoreKeeper', () => {
  beforeAll(async () => {
    console.log('beforeAll');
  });

  beforeEach(async () => {
    console.log('beforeEach');
  });

  it('foo must be present', () => {
    assert.isDefined(foo);
  });

  it('foo should return true', () => {
    assert.ok(foo());
  });
});
