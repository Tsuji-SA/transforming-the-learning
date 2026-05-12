# Transforming the Learning

SAMR モデル研修スライド（Reveal.js 製）。校種別に3バージョン。

| 校種 | URL | Part 5 のカテゴリ数 |
| --- | --- | --- |
| 高校 | `/` | 12 教科 |
| 中学校 | `/middle/` | 11 カテゴリ |
| 小学校 | `/elementary/` | 13 カテゴリ |

## 構成（共通の骨格）

- **Part 0** オープニング
- **Part 1** SAMRモデルの基礎
- **Part 2** 授業デザインの考え方
- **Part 3** ICT活用ルーブリック v2
- **Part 4** ICT・生成AIツールの全体像
- **Part 5** 教科別実践 SAMR × ICT
- **Part 6** 教科別実践 SAMR × 生成AI（AIAS × Slow AI）
- **Part 7** クロージング

## ローカル表示

```bash
# 任意の静的サーバで配信
python3 -m http.server 8000
# → http://localhost:8000
```

## 操作

- `→` / `Space` 次へ
- `←` 戻る
- `Esc` / `O` スライド一覧
- `S` スピーカーノート
- `F` フルスクリーン
- `?` ショートカット一覧

## デプロイ

`main` ブランチに push すると、GitHub Actions が GitHub Pages へ自動デプロイします。
リポジトリ Settings → Pages → Source を **GitHub Actions** に設定してください。
