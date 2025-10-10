**In Angular, production-ready environment variables are managed using environment-specific files and build-time file replacements configured in `angular.json`. This ensures secure, maintainable, and scalable deployment across multiple environments.**

---

### 🛠️ How Angular Manages Environment Variables for Production

Angular uses a structured approach to handle environment-specific configurations:

#### 1. **Environment Files**
Located in `src/environments/`, these files define variables for different environments:
- `environment.ts` → default (often development)
- `environment.prod.ts` → production
- You can also create `environment.staging.ts`, `environment.qa.ts`, etc.

Each file exports an `environment` object:
```ts
// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com',
  featureFlag: true
};
```

#### 2. **File Replacements in `angular.json`**
Angular CLI replaces `environment.ts` with the appropriate file during build:
```json
"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      }
    ]
  }
}
```

Build with:
```bash
ng build --configuration=production
```

#### 3. **Accessing Variables in Code**
Import the environment object:
```ts
import { environment } from '../environments/environment';

console.log(environment.apiUrl);
```

#### 4. **Avoid Hardcoding Sensitive Data**
Do not store secrets like API keys directly in environment files. Instead:
- Use build-time injection via `--define` (experimental)
- Or fetch secrets securely from a backend service

#### 5. **Best Practices**
- **Keep sensitive data out of source control**
- **Use CI/CD pipelines to inject secrets securely**
- **Use feature flags for toggling features per environment**
- **Validate environment variables before runtime**

---

### 📦 Advanced Techniques

- Use `dotenv` with custom builders for runtime `.env` support
- Use `InjectionToken` for dynamic configuration
- Integrate with cloud secrets managers (e.g., AWS Secrets Manager, Azure Key Vault)

---

Sources:  
- [Angular CLI Environments Guide](https://angular.dev/tools/cli/environments)  
- [DEV Community – Managing Environment Variables in Angular](https://dev.to/manthanank/managing-environment-variables-in-angular-40k0)  
- [DigitalOcean – Angular Environment Variables](https://www.digitalocean.com/community/tutorials/angular-environment-variables)
