import client from "../client";

test('corlib-jq-version', () => {
    expect(client.cl.jq.fn.jquery).toBe('3.6.0');
});
