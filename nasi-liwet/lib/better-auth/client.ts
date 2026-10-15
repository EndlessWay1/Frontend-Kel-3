import { createAuthClient } from "better-auth/client";
import { adminClient } from "better-auth/client/plugins";
export const authClient = createAuthClient({ plugins: [adminClient()] });

await authClient.signUp.email({ email, password, name });
await authClient.signIn.email({ email, password });
