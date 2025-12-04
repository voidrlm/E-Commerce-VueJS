# PowerShell script to deploy VueJS app to GitHub Pages
# Usage: ./deploy-gh-pages.ps1

Write-Host "Building the project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Exiting..." -ForegroundColor Red
    exit 1
}

Write-Host "Build successful!" -ForegroundColor Green

# Navigate to the build output directory
Set-Location dist

# Initialize a new git repository in the dist folder
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan
git push -f git@github.com:voidrlm/E-Commerce-VueJS.git main:gh-pages

# Go back to the project root
Set-Location ..

Write-Host "Deployment complete! Your site should be available at:" -ForegroundColor Green
Write-Host "https://voidrlm.github.io/E-Commerce-VueJS/" -ForegroundColor Yellow
