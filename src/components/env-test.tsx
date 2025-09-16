// Test component to check if environment variable is available
export function EnvTest() {
  const token = process.env.NEXT_PUBLIC_REGISTRY_AUTH_TOKEN;
  return (
    <div>
      <p>Token available: {token ? 'Yes' : 'No'}</p>
      <p>Token value: {token || 'Not set'}</p>
    </div>
  );
}
