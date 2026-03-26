#!/bin/bash
#
# Optimize photos for the website using ImageMagick.
# Usage: ./scripts/optimize-photos.sh /path/to/raw/photos /path/to/output
#
# - Landscape images → max 1200px wide
# - Portrait images → max 1000px wide
# - Quality 82% (good balance of quality vs file size)
# - Strips EXIF metadata (location, camera info, etc.)
# - Never upscales smaller images

INPUT_DIR="${1:?Usage: $0 <input-dir> <output-dir>}"
OUTPUT_DIR="${2:?Usage: $0 <input-dir> <output-dir>}"

mkdir -p "$OUTPUT_DIR"

for f in "$INPUT_DIR"/*.{jpg,jpeg,JPG,JPEG}; do
  [ -f "$f" ] || continue

  filename=$(basename "$f")
  output="$OUTPUT_DIR/$filename"

  # Get dimensions
  read width height <<< $(magick identify -format "%w %h" "$f")

  if [ "$width" -gt "$height" ]; then
    # Landscape: max 1200px wide
    magick "$f" -resize '1200x>' -quality 82 -strip "$output"
  else
    # Portrait: max 1000px wide
    magick "$f" -resize '1000x>' -quality 82 -strip "$output"
  fi

  # Report
  original_size=$(stat -f%z "$f")
  new_size=$(stat -f%z "$output")
  new_dims=$(magick identify -format "%wx%h" "$output")
  original_hr=$(awk "BEGIN {s=$original_size; if(s>=1048576) printf \"%.1f MB\",s/1048576; else printf \"%.0f KB\",s/1024}")
  new_hr=$(awk "BEGIN {s=$new_size; if(s>=1048576) printf \"%.1f MB\",s/1048576; else printf \"%.0f KB\",s/1024}")
  echo "$filename: $original_hr → $new_hr ($new_dims)"
done

echo ""
echo "Done! Optimized photos are in: $OUTPUT_DIR"
