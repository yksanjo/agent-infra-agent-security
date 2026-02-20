import { describe, it } from 'node:test';
import assert from 'node:assert';
import { AgentSecurity } from '../src/index.js';

describe('AgentSecurity', () => {
  it('should initialize', async () => {
    const instance = new AgentSecurity();
    await instance.initialize();
    assert.ok(instance);
  });

  it('should execute successfully', async () => {
    const instance = new AgentSecurity();
    const result = await instance.execute({ test: 'data' });
    assert.strictEqual(result.success, true);
  });
});
