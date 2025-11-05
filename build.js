import { execSync } from 'child_process';
import { cpSync } from 'fs';
import { join } from 'path';

try {
  console.log('Installing frontend dependencies...');
  execSync('npm install', { cwd: 'frontend', stdio: 'inherit' });
  
  console.log('Building frontend...');
  execSync('npm run build', { cwd: 'frontend', stdio: 'inherit' });
  
  console.log('Copying build files...');
  cpSync(join('frontend', 'dist'), 'dist', { recursive: true });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}