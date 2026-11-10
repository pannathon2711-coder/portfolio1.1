Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\User\.gemini\antigravity\brain\c0fbac52-de31-4f3b-b2b8-d91c964e1301\.user_uploaded\media_1794245240750_f2d2baf7.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
$minX = $bmp.Width
$maxX = 0
$minY = $bmp.Height
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y += 2) {
    for ($x = 0; $x -lt $bmp.Width; $x += 2) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Card bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"
$cardW = $maxX - $minX + 1
$cardH = $maxY - $minY + 1
Write-Host "Card dimensions: ${cardW}x${cardH}"

# Crop white card with slight margin
$margin = 6
$cropX = [Math]::Max(0, $minX - $margin)
$cropY = [Math]::Max(0, $minY - $margin)
$cropW = [Math]::Min($bmp.Width - $cropX, $cardW + ($margin * 2))
$cropH = [Math]::Min($bmp.Height - $cropY, $cardH + ($margin * 2))

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)

$destDir = "C:\Users\User\.gemini\antigravity\scratch\pannathon-ict-portfolio\assets\qr"
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

$cropped.Save("$destDir\instagram_card.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
$bmp.Dispose()

# Also save full instagram image
Copy-Item $srcPath "$destDir\instagram_full.png"

# Copy Line QR
$lineSrc = "C:\Users\User\.gemini\antigravity\brain\c0fbac52-de31-4f3b-b2b8-d91c964e1301\.user_uploaded\media_1794245248068_09b746ee.png"
Copy-Item $lineSrc "$destDir\line_qr.png"

Write-Host "All QR assets processed successfully!"
