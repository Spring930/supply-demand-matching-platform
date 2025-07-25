import { exec } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { promisify } from 'node:util';
import crypto from 'node:crypto';
import path from 'node:path';

const execAsync = promisify(exec);

function generateAuthSecret(): string {
  console.log('Step 1: Generating AUTH_SECRET...');
  return crypto.randomBytes(32).toString('hex');
}

async function writeEnvFile(envVars: Record<string, string>) {
  console.log('Step 2: Writing environment variables to .env');
  const envContent = Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  await fs.writeFile(path.join(process.cwd(), '.env'), envContent);
  console.log('.env file created with the necessary variables.');
}

async function runMigrations() {
  console.log('Step 3: Running database migrations...');
  try {
    await execAsync('pnpm run db:generate');
    console.log('Database migrations generated.');
    await execAsync('pnpm run db:migrate');
    console.log('Database migrations applied.');
  } catch (error) {
    console.error('Failed to run migrations:', error);
    throw error;
  }
}

async function main() {
  console.log('🚀 Setting up Sharing Application Database...');
  
  const POSTGRES_URL = 'postgresql://postgres:SHjHbEju@127.0.0.1:5432/sharing_app';
  const BASE_URL = 'http://localhost:3000';
  const AUTH_SECRET = generateAuthSecret();

  await writeEnvFile({
    POSTGRES_URL,
    BASE_URL,
    AUTH_SECRET,
  });

  await runMigrations();

  console.log('🎉 Sharing Application setup completed successfully!');
  console.log('You can now run: pnpm run dev');
}

main().catch(console.error);