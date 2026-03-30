#!/usr/bin/env bash
# =============================================================================
# convert-to-webp.sh
# Converte todas as imagens (jpg, jpeg, png, gif) da pasta public/ para WebP
# e atualiza as referências nos arquivos .ts, .tsx e .css do projeto.
#
# Dependência: cwebp (instale com: sudo apt install webp)
# Uso: bash scripts/convert-to-webp.sh
# =============================================================================

set -e

PUBLIC_DIR="$(dirname "$0")/../public"
PROJECT_DIR="$(dirname "$0")/.."

# --- 1. Verifica dependência ---
if ! command -v cwebp &> /dev/null; then
  echo "❌ cwebp não encontrado. Instale com:"
  echo "   sudo apt install webp"
  exit 1
fi

echo "🔍 Procurando imagens em: $PUBLIC_DIR"
echo ""

CONVERTED=0
SKIPPED=0

# --- 2. Converte todas as imagens encontradas ---
find "$PUBLIC_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) | while read -r img; do
  # Caminho de saída: mesmo nome, extensão .webp
  webp_path="${img%.*}.webp"

  if [ -f "$webp_path" ]; then
    echo "⏭️  Já existe: $(basename "$webp_path") — pulando"
    SKIPPED=$((SKIPPED + 1))
    continue
  fi

  echo "🔄 Convertendo: $(basename "$img") → $(basename "$webp_path")"
  cwebp -q 85 "$img" -o "$webp_path"

  if [ $? -eq 0 ]; then
    echo "✅ OK: $(basename "$webp_path")"
    CONVERTED=$((CONVERTED + 1))
  else
    echo "❌ Falhou: $(basename "$img")"
  fi
done

echo ""
echo "================================================"
echo "✅ Conversão concluída!"
echo "================================================"
echo ""

# --- 3. Atualiza referências nos arquivos do projeto ---
echo "📝 Atualizando referências nos arquivos .ts, .tsx, .css..."
echo ""

# Extensões a processar
EXTS=("ts" "tsx" "css")

for ext in "${EXTS[@]}"; do
  find "$PROJECT_DIR/app" -type f -name "*.$ext" | while read -r file; do
    # Substitui .jpg, .jpeg, .png, .gif por .webp (apenas em caminhos locais /...)
    if grep -qE '"/[^"]+\.(jpg|jpeg|png|gif)"' "$file" 2>/dev/null; then
      sed -i -E 's|"/([^"]+)\.(jpg|jpeg|png|gif)"|"/\1.webp"|g' "$file"
      echo "  ✏️  Atualizado: $file"
    fi
  done
done

echo ""
echo "================================================"
echo "🎉 Tudo pronto!"
echo ""
echo "Próximos passos:"
echo "  1. Verifique se as imagens .webp estão corretas"
echo "  2. Delete as imagens originais se quiser:"
echo "     find public/ -type f \\( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \\) -not -iname '*.webp' -delete"
echo "  3. Rode: npm run dev"
echo "================================================"
