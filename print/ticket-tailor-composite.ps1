Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$paths = @(
  (Join-Path $root "public\gallery\DuetLC.jpeg"),
  (Join-Path $root "public\gallery\VinceHelen.jpeg"),
  (Join-Path $root "public\gallery\philip.jpeg")
)
$outPath = Join-Path $PSScriptRoot "Ticket-Tailor-composite.jpg"

$images = foreach ($path in $paths) {
  [System.Drawing.Image]::FromFile($path)
}

$panelW = 954
$panelH = 960
$gap = 9
$outW = ($panelW * 3) + ($gap * 2)
$outH = $panelH

$bmp = New-Object System.Drawing.Bitmap $outW, $outH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.ColorTranslator]::FromHtml("#28243a"))
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

function Get-CoverRect([System.Drawing.Image]$img, [int]$destW, [int]$destH, [double]$focusY) {
  $srcAspect = $img.Width / [double]$img.Height
  $dstAspect = $destW / [double]$destH
  if ($srcAspect -gt $dstAspect) {
    $srcH = $img.Height
    $srcW = [int][Math]::Round($srcH * $dstAspect)
    $srcX = [int][Math]::Round(($img.Width - $srcW) / 2)
    $srcY = 0
  } else {
    $srcW = $img.Width
    $srcH = [int][Math]::Round($srcW / $dstAspect)
    $maxY = [Math]::Max(0, $img.Height - $srcH)
    $srcY = [int][Math]::Round($maxY * $focusY)
    $srcX = 0
  }
  return @{ X = $srcX; Y = $srcY; Width = $srcW; Height = $srcH }
}

function Draw-Cover(
  [System.Drawing.Graphics]$graphics,
  [System.Drawing.Image]$img,
  [int]$x,
  [int]$y,
  [int]$w,
  [int]$h,
  [double]$focusY
) {
  $src = Get-CoverRect $img $w $h $focusY
  $destRect = New-Object System.Drawing.Rectangle $x, $y, $w, $h
  $srcRect = New-Object System.Drawing.Rectangle $src.X, $src.Y, $src.Width, $src.Height
  $graphics.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
}

$focus = @(0, 0, 0)
for ($i = 0; $i -lt $images.Count; $i++) {
  $x = $i * ($panelW + $gap)
  Draw-Cover $g $images[$i] $x 0 $panelW $panelH $focus[$i]
}

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter (
  [System.Drawing.Imaging.Encoder]::Quality,
  [int64]90
)
$bmp.Save($outPath, $encoder, $encoderParams)

$g.Dispose()
$bmp.Dispose()
foreach ($img in $images) { $img.Dispose() }

Write-Output $outPath
