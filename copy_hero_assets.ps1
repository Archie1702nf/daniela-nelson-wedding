$srcHero = "Context\ILUSTRACIONES-20260405T135916Z-1-001\wedding_watercolor_transparent.png"
$dstHero = "public\hero-watercolor.png"
$srcMono = "Context\BRANDING-20260405T135929Z-1-001\BRANDING\MONOGRAMA\PNG\MONOGRAMA CON FECHA-40.png"
$dstMono = "public\hero-monogram.png"
Write-Host "Hero exists: $(Test-Path $srcHero)"
Write-Host "Monogram exists: $(Test-Path $srcMono)"
Copy-Item -Path $srcHero -Destination $dstHero -Force
Copy-Item -Path $srcMono -Destination $dstMono -Force
Write-Host "Copied hero to $dstHero"
Write-Host "Copied mono to $dstMono"
Write-Host "Public files:"
Get-ChildItem public | Select-Object -ExpandProperty Name | Write-Host
