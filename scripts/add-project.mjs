
import { execSync } from 'child_process';
import fs from 'fs';
const repo = process.argv[2];
if (!repo) {
  console.error("Usage: node add-project.mjs <repo_url>");
  process.exit(1);
}
const name = repo.split('/').pop().replace('.git','');
execSync(`git submodule add ${repo} apps/${name}`, { stdio: 'inherit' });
fs.writeFileSync(`apps/${name}/project.config.json`, JSON.stringify({ name, repo }, null, 2));
console.log(`Added project ${name}`);
